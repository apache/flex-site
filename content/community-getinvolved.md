Title:  Get Involved!

Getting involved with the Apache Flex® Community is easy!

We are an open-source community governed by the Apache Software Foundation.  Everything we do is out in the open with
the entire community involved.  All decisions are made on our mailing lists, and all source code is developed
within our source control system.

<div class="headline"><h4>Find out what is going on</h4></div>
If you are interested in what is going on with the project, subscribe to our mailing lists.  Our [dev@flex.apache.org][1] mailing
list is where additions and changes to the SDK are discussed.  The list is open to everybody and everybody is encouraged
to give their opinions on anything discussed on the list.  This is a great place to introduce yourself and let us know
how you can help.

If you are interested in helping end-users of the SDK, we also host the [users@flex.apache.org][1] mailing list.  This list
is designed for end-users to talk about how to use the SDK and how to build applications that utilize the SDK.

<div class="headline"><h4>Contributing Documentation</h4></div>
If you are ready to help us document code, provide tips and tricks, or anything else that is not straight-up code, we
have a [WIKI][2] that allows for community contribution.  Simply let us know on the dev@flex.apache.org mailing list
that you wish to get write access to the WIKI.  If you would like to let us know about any blog entries, videos,
screencasts, etc. that you have created, we would love to help publicize them!

<div class="headline"><h4>Reporting Bugs</h4></div>
All of the bugs that we are aware of are housed in the Apache Foundation's JIRA system.  You can take a look at everything
we have in the system on [Flex JIRA][3].  To let us know about a bug, create an issue in the JIRA system.  The JIRA
system automatically emails the dev mailing list and hopefully somebody will take a look at it.  It is really important
that you give us as much information on the bug as possible.  Even better, if you have a way to reproduce the bug, submit
a code sample that can help us reproduce it.  Feel free to contribute to the comments as the bug gets worked on.

<div class="headline"><h4>Squashing Bugs</h4></div>
Bugs happen, and you might know how to fix one!  Because we don't allow everybody write access to the official code repository
(everybody has access to read, though!), there is an additional process that has to occur to get fixes in.  To help us
squash bugs, do the following :

1. Find a bug you want to work on, or submit one into [JIRA][3].  We have some marked as "easy" if you play with the JIRA filters if you want to start with an easy one.  Make a comment on the ticket that you plan on working on it so others don't duplicate your work.
2. Check out the source code from GIT.  More information is available on the [Source][4] page.
3. Setup your build environment.  Check out the README included in the source code on how to do this.  You will want to make sure that you can perform a compile before you go much further.
4. Fix the bug.  If you need help, ask the dev@flex.apache.org mailing list.  I'm sure we have pointers to help you out.
5. (optional) Run the functional test suite called [Mustella][5] on your code.  The [Mustella tests][5] are available from the ANT script, but make sure you set it up first.
6. Create a .patch file.  If you are using an IDE, check your application menus for this option. [SourceTree][6] has it under the Actions menu.  If you are using git from the command line, use `git format-patch <BRANCH> --stdout > <FLEX-007>.patch` where &lt;BRANCH&gt; is the branch you want your patch be merged into from whether the branch you're working on, you can omit it if the origin and destination branch are the same and &lt;FLEX-007&gt;, the Jira Issue Id relative to your patch.
7. Attach the .patch file to the JIRA ticket you noted earlier.  A committer will review the patch and make sure it dosen't break anything else.
8. Sit back and bask in the glory that you helped make Flex better!

<div class="headline"><h4>Contributing Code</h4></div>
Due to legal reasons, only people who have been elected as committers have access to update or contribute code directly to the project.
We at Apache take the legality of code seriously, and nothing would be worse than somebody contributing code that
they don't own and a 3rd party having a legal claim to our framework.

That being said, if you are interested in contributing code, you can submit patches to the project via [JIRA][3].
To do this, create a new issue that describes what the code you are contributing, and submit a .patch file with your
code changes, just like from the bug squashing directions above.  If you submit a few patches that meet the Apache
standards, you will probably be contacted by the PMC to get you direct access to the GIT and for you to be recognized
for your work as a committer.

 [1]: community-mailinglists.html
 [2]: https://cwiki.apache.org/confluence/display/FLEX/Apache+Flex+Wiki
 [3]: https://issues.apache.org/jira/browse/FLEX
 [4]: dev-sourcecode.html
 [5]: https://cwiki.apache.org/FLEX/mustella-overview.html
 [6]: http://www.sourcetreeapp.com/