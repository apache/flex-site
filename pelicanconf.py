#!/usr/bin/env python
# -*- coding: utf-8 -*- #
# vim: encoding=utf-8
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

from __future__ import unicode_literals
from datetime import date

# import os
# import sys

PATH = 'content'

TIMEZONE = 'UTC'

DEFAULT_LANG = 'en'

# Website specific settings
SITEURL = 'https://bval.apache.org'
SITEREPOSITORY = 'https://github.com/apache/bval-site/blob/main/content/'
CURRENTYEAR = date.today().year

# ASF Data specification
ASF_DATA_YAML = "asfdata.yaml"

# Save pages using full directory preservation
PAGE_PATHS = ['.']

# Template uses {{base}}
BASE = '/'

# Path with no extension
PATH_METADATA = '(?P<path_no_ext>.*)\..*'

# We are not slugifying any pages
ARTICLE_URL = ARTICLE_SAVE_AS = PAGE_URL = PAGE_SAVE_AS = '{path_no_ext}.html'

# If we wanted to have articles.
# SLUGIFY_SOURCE = 'basename'
# ARTICLE_SAVE_AS = '{slug}.html'

# Disable these pages
ARCHIVES_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
INDEX_SAVE_AS = ''
TAGS_SAVE_AS = ''

# We want to serve our static files mixed with content.
STATIC_PATHS = ['.']

# we want any html to be served as is
READERS = {'html': None}

# We don't use articles, but we don't want pelican to think
# that content/ contains articles.
ARTICLE_PATHS = ['articles']

# ignore README.md files in the content tree and the interviews and include folders.
IGNORE_FILES = ['README.md']

# No translations
PAGE_TRANSLATION_ID = None

# Enable ATOM feed and Disable other feeds
FEED_DOMAIN = SITEURL
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Theme
THEME = './theme/apache'

# Uncomment this to put the build date on every page.
# DEFAULT_DATE = 'fs'

# Pelican Plugins
# pelican-gfm is installed in the buildbot as part of build_pelican.py. It is an ASF Infra custom plugin.
# other plugins are discoverable and can be installed via pip by mentioning them in requirements.txt
# You can find plugins here: https://github.com/pelican-plugins
# Plugins that are custom for this site are found in PLUGIN_PATHS.
PLUGIN_PATHS = ['./theme/plugins']
# PLUGINS = ['asfgenid', 'asfdata', 'pelican-gfm', 'asfreader']
# We are using the default plugin - 'pelican-gfm' which is installed by the build
PLUGINS = ['asfgenid', 'pelican-gfm']

# Lifecycle and plugins:
# (1) Initialization:
#     asfdata - populate a sitewide dictionary of ASF_DATA
# (2) Readers process content into metadata and html
#     pelican-gfm (GFMReader) - reads GFM Markdown with metadata and generates html
#     asfreader (ASFReader) - reads GFM Markdown with embedded ezt templates uses metadata enhanced
#          by the sitewide dictionary to generate markdown with ezt and then generate html
# (3) HTML Content enhancement
#     asfgenid - performs a series of enhancements to the HTML - see ASF_GENID
# (4) Site generation
#     sitemap - produces a sitemap.xml

# Configure the asfdata plugin
# ASF_DATA = {
#    'data': ASF_DATA_YAML,
#    'metadata': {
#        'site_url': SITEURL
#    },
#    'debug': False
# }

# Configure the asfgenid plugin
ASF_GENID = {
    'unsafe_tags': True,
    'metadata': False,
    'elements': False,
    'headings': False,
    'headings_re': r'^h[1-4]',
    'permalinks': False,
    'toc': False,
    'toc_headers': r"h[1-4]",
    'tables': False,
    'debug': False
}

# Sitemap Generator
# SITEMAP = {
#    "exclude": ["tag/", "category/"],
#    "format": "xml",
#    "priorities": {
#        "articles": 0.1,
#        "indexes": 0.1,
#        "pages": 0.8
#    },
#    "changefreqs": {
#        "articles": "never",
#        "indexes": "never",
#        "pages": "monthly"
#    }
# }

# Markdown Configuration
# When using GFMReader or ASFReader then MARKDOWN configuration is meaningless to GFM
# MARKDOWN = {
# }

# TOC Generator
# When using ASF_GENID TOC generation then this is unused.
# TOC_HEADERS = r"h[1-6]"

# Unused links
LINKS = ( )
SOCIAL = ( )

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
