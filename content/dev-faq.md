Title:  Frequently Asked Questions

This page covers some frequently asked questions that we get on the mailing lists.  We will be updating it with more
content as time goes on.

<div class="headline"><h4>Can I have write access to GIT?</h4></div>

Due to legal reasons, only people who have been elected as committers have write access to directly update the code in version control.
We at Apache take the legality of code seriously, and nothing would be worse than somebody contributing code that
they don't own and a 3rd party having a legal claim to our framework.  That being said, you can submit code by providing
`.patch` files (diff files) to the project.  Check out the [Get Involved][1] page for more details on how to do that.

<div class="headline"><h4>How is this different than Adobe Flex?</h4></div>

In November, 2011, Adobe announced they were no longer supporting Adobe Flex.  Instead of just killing the framework they
donated it to Apache.  Apache Flex 4.8.0 is essentially the exact same version of Flex as Adobe's last official
version.  Since that initial donation the Apache Flex team has been working hard on fixing bugs, providing additional
components and finishing unfinished components.  As we progress through additional versions, we will be less and
less like Adobe's Flex framework, but we will strive to be compatible with it.

Adobe has offered some of their customers extended support contracts, and may produce additional versions, but
that is unlikely.  Future support of the Flex Framework is through this project.

There are a few differences you should be aware of in the Apache version of the SDK.  Most notably, the Flash Player will
not cache RSLs created with Apache Flex.  You can find out more in the RELEASE_NOTES file in your SDK download

<div class="headline"><h4>I've used Adobe Flex before.  How do I start using Apache Flex?</h4></div>

The quickest way to start using Apache Flex is to use the Apache Flex SDK Installer.  This AIR application will download
the latest version of the Apache Flex SDK and all the required components to make it work.  It will also set the proper
options so that the SDK can be used with your favorite IDE such as Flash Builder, FDT, Flash Develop or IntelliJ.
To use the SDK Installer, go to the ["Download the SDK Installer"][4] link under the downloads menu above.  It will
walk you through the rest of the process.

Once you have the SDK on your computer, it should be just like the old Adobe SDK you were already using.  Make sure
to check the RELEASE_NOTES file for a full list of differences.

<div class="headline"><h4>Why are you not using GitHub?</h4></div>

A mirror of the project is currently available on GitHub, but we are not accepting pull requests at this time.
(However we can accept patch files generated from pull requests.)

<div class="headline"><h4>I don't have time to read the mailing lists.  How can I keep up with the project?</h4></div>

The [Open Spoon Foundation][2] has been providing monthly updates as to the goings-on of the Apache Flex project through
their "Apache Revue" newsletter.  You can also check out the [Apache Flex Blog][3] for critical updates.

<div class="headline"><h4>Where can I find the Apache Flex Roadmap?</h4></div>

We do not have a roadmap.  That is not the Apache Way™.  Apache Flex is a project run and maintained by volunteers.  The
way that Apache works is that each developer do what they are passionate about.  There is no release schedule,
and therefore, there is no official roadmap.  You can always make suggestions via JIRA or the mailing lists for
new features that you wish to see and if they are good enough a developer will pick them up.  You can always
contribute your own code for new features as well.  You can find out more about contributing code on the [Get
Involved page][1].

All that being said, you can check out what developers are working on by peeking in the "Whiteboard" area of the
source control.  There is a lot of cool projects incubating there that may (or may not) make it into future
releases.

<div class="headline"><h4>What happens to my projects if Adobe Discontinues the Flash Player?</h4></div>

It is true that current Flex projects are tied to either the Adobe Flash Player or Adobe AIR.  We have been making great
strides to compile projects to native JavaScript, therefore bypassing the Flash Player in the browser.  Adobe
has made a commitment to support the Flash Player and our current runtime for at least 5 years from the time
they donated the project to Apache.  You can find out more about their roadmap on the [Adobe Flash Whitepaper][5].

Event if Adobe no longer created new versions of the Flash Player, it is still had an incredible install base
(being installed on over 90% of internet-connected PCs).  If the Flash Player were no longer updated today, it would
still be installed just about everywhere.

<div class="headline"><h4>Will my code work on Platform X?</h4></div>

The currently released version of Apache Flex will output to either SWF of AIR.  SWF is supported within browsers on
Windows 2000 through Windows 8, Mac OSX, Linux (using Chrome), many phones and some smartphones.  AIR allows
you to take your Flex application and output native applications for Android (2.2+), iOS (3+),certain
BlackBerry QNX devices (Playbook), MacOSX and Microsoft Windows.

We are currently working on supporting JavaScript as an output.  This will increase support to anywhere HTML5
is supported.

Other platforms may be added if Adobe AIR beings to support them.  Unfortunately, we are not in control of adding
additional support for other platforms at this time.

<div class="headline"><h4>Can I submit apps I make with Apache Flex to App Store X?</h4></div>

By using Adobe AIR with Apache Flex, you can produce applications that can be submitted to the Apple App Store, Android
Market, Apple Mac App Store and Blackberry App World.  There are very successful projects that have been submitted
to all of the above.  In fact, you can actually use one code base to create apps for each of the different platforms
to submit to all of the different stores!

Apache Flex coupled with Adobe AIR allows you to make Apple iOS Applications from a Windows PC.  You will need a Mac in
order to submit the app to the store.

<div class="headline"><h4>Does Apache Flex cost money?</h4></div>

No.  This is a completely open-source project and uses the [Apache License v. 2.0][6].  This allows you to use the SDK and
any outputs of the SDK for personal and commercial use with virtually no restrictions.  Some of the recommended tooling
(not produced by Apache) costs money, however you are more than free to use the included command-line compilers
and toolsets.

[1]: community-getinvolved.html
[2]: https://www.spoon.as
[3]: https://blogs.apache.org/flex/
[4]: installer.html
[5]: https://www.adobe.com/devnet/flashplatform/whitepapers/roadmap.html
[6]: about-licensing.html