package view;

# BUILD CONSTRAINT:  all views must return $content, $extension.
# additional return values (as seen below) are optional.  However,
# careful use of svn externals and dependency management in path.pm can
# resolve most issues with this constraint.

use strict;
use warnings;
use Dotiac::DTL qw/Template *TEMPLATE_DIRS/;
use Dotiac::DTL::Addon::markup;
use ASF::Util qw/read_text_file sort_tables/;

push our @TEMPLATE_DIRS, "templates";

# This is most widely used view.  It takes a
# 'template' argument and a 'path' argument.
# Assuming the path ends in foo.mdtext, any files
# like foo.page/bar.mdtext will be parsed and
# passed to the template in the "bar" (hash)
# variable.

sub single_narrative {
    my %args = @_;
    my %styleargs = @_;
    my $file = "content$args{path}";
    my $template = $args{template};
    $args{path} =~ s/\.mdtext$/\.html/;
    $args{breadcrumbs} = breadcrumbs($args{path});

    read_text_file $file, \%args;

    my $page_path = $file;
    $page_path =~ s/\.[^.]+$/.page/;
    if (-d $page_path) {
        for my $f (grep -f, glob "$page_path/*.mdtext") {
            $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
            $args{$1} = {};
            read_text_file $f, $args{$1};
        }
    }
    # default navbars and mdtext from templates folder.
    my $templates_folder = "templates";
    if (-d $templates_folder) {
	for my $f (grep -f, glob "$templates_folder/*.mdtext") {
           $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
           $args{$1} = {};
           read_text_file $f, $args{$1};
	}
    }
    # folder specific overrides
    $templates_folder = templatesfolder($args{path});
    $args{templates_folder} = $templates_folder;
    if (-d $templates_folder) {
	for my $f (grep -f, glob "$templates_folder/*.mdtext") {
           $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
           $args{$1} = {};
           read_text_file $f, $args{$1};
	}
    }
    
    $args{content} = sort_tables($args{content});

    return Template($template)->render(\%args), html => \%args;
}

# This view is used to wrap html.  It takes a
# 'template' argument and a 'path' argument.
# Assuming the path ends in foo.html, any files
# like foo.page/bar.mdtext will be parsed and
# passed to the template in the "bar" (hash)
# variable.

sub html_page {
    my %args = @_;
    my %styleargs = @_;
    my $file = "content$args{path}";
    my $template = $args{template};
    $args{breadcrumbs} = breadcrumbs($args{path});

    read_text_file $file, \%args;

    my $page_path = $file;
    $page_path =~ s/\.[^.]+$/.page/;
    if (-d $page_path) {
        for my $f (grep -f, glob "$page_path/*.mdtext") {
            $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
            $args{$1} = {};
            read_text_file $f, $args{$1};
        }
    }
    # default navbars and mdtext from templates folder.
    my $templates_folder = "templates";
    if (-d $templates_folder) {
	for my $f (grep -f, glob "$templates_folder/*.mdtext") {
           $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
           $args{$1} = {};
           read_text_file $f, $args{$1};
	}
    }
    # folder specific overrides
    $templates_folder = templatesfolder($args{path});
    $args{templates_folder} = $templates_folder;
    if (-d $templates_folder) {
	for my $f (grep -f, glob "$templates_folder/*.mdtext") {
           $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
           $args{$1} = {};
           read_text_file $f, $args{$1};
	}
    }

    if ($args{content} =~ m!<head.*?>(.*?)</head>(?:.*?<body(.*?)>)?(.*?)(?:</body>|\Z)!si) {
        @args{qw/header bodytag content/} = ($1, $2, $3);
    }

    return Template($template)->render(\%args), html => \%args;
}

sub sitemap {
    my %args = @_;
    my $template = "content$args{path}";
    $args{breadcrumbs} .= breadcrumbs($args{path});
    my $dir = $template;
    $dir =~ s!/[^/]+$!!;
    opendir my $dh, $dir or die "Can't opendir $dir: $!\n";
    my %data;
    for (map "$dir/$_", grep $_ ne "." && $_ ne ".." && $_ ne ".svn", readdir $dh) {
        if (-f and /\.mdtext$/) {
            my $file = $_;
            $file =~ s/^content//;
            no warnings 'once';
            for my $p (@path::patterns) {
                my ($re, $method, $args) = @$p;
                next unless $file =~ $re;
                my $s = view->can($method) or die "Can't locate method: $method\n";
                my ($content, $ext, $vars) = $s->(path => $file, %$args);
                $file =~ s/\.mdtext$/.$ext/;
                $data{$file} = $vars;
                last;
            }
        }
    }

    my $content = "";

    for (sort keys %data) {
        $content .= "- [$data{$_}->{headers}->{title}]($_)\n";
        for my $hdr (grep /^#/, split "\n", $data{$_}->{content}) {
            $hdr =~ /^(#+)\s+([^#]+)?\s+\1\s+\{#([^}]+)\}$/ or next;
            my $level = length $1;
            $level *= 4;
            $content .= " " x $level;
            $content .= "- [$2]($_#$3)\n";
        }
    }
    $args{content} = $content;
    return Template($template)->render(\%args), html => \%args;
}

sub breadcrumbs {
    my @path = split m!/!, shift;
    pop @path;
    my @rv;
    my $relpath = "";
    for (@path) {
        $relpath .= "$_/";
        $_ ||= "home";
        push @rv, qq(<a href="$relpath">$_</a>);
    }
    return join "&nbsp;&raquo&nbsp;", @rv;
}

sub templatesfolder {
    my @path = split m!/!, shift;
    my $relpath = "templates/";
    $relpath .= $path[1];
    return $relpath;
}

1;

=head1 LICENSE

           Licensed to the Apache Software Foundation (ASF) under one
           or more contributor license agreements.  See the NOTICE file
           distributed with this work for additional information
           regarding copyright ownership.  The ASF licenses this file
           to you under the Apache License, Version 2.0 (the
           "License"); you may not use this file except in compliance
           with the License.  You may obtain a copy of the License at

             http://www.apache.org/licenses/LICENSE-2.0

           Unless required by applicable law or agreed to in writing,
           software distributed under the License is distributed on an
           "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
           KIND, either express or implied.  See the License for the
           specific language governing permissions and limitations
           under the License.
