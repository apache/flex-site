Title:  Download Apache 

> **NOTE:** Apache FlexJS has taken things to the next level, and it has now become its own separate ASF project under a new name: [**Apache Royale**](https://royale.apache.org/). Please visit [royale.apache.org](https://royale.apache.org/) to download the latest version of our next generation framework and compiler for ActionScript and MXML that can build rich, single-page applications for JavaScript in web browsers without requiring the Flash Player plug-in.

Use the links below to download the Apache FlexJS™ 0.8.0 ‘beta’ release from one of our mirrors. You must verify the integrity of the downloaded files using signatures downloaded from this page.

Only current recommended releases are available on the main distribution site and its mirrors.

The Apache FlexJS SDK has some compile-time and run-time dependencies.  Please make sure to review the dependencies section if you plan on re-compiling the source from scratch.

**Please review the release notes before installing or compiling this release.**

<div class="headline"><h4>Current Release (0.8.0)</h4></div>

The Apache Flex team is pleased to offer this release, available as of 27 June 2017.  Expect lots of bugs and missing features.

Binaries are provided as a convenience for those who do not wish to compile FlexJS themselves.  The 0.8.0 binaries were published on 27 June 2017.

**Please be aware of the dependencies listed in the section below.**  They are required in order to compile the Apache FlexJS SDK.  The [README][15] explains these requirements further.

- Release Notes : [RELEASE_NOTES][2]
- README : [README][15]
- Source (tar.gz) : [apache-flex-flexjs-0.8.0-src.tar.gz][3] [[PGP](https://www.apache.org/dist/flex/flexjs/0.8.0/apache-flex-flexjs-0.8.0-src.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/flexjs/0.8.0/apache-flex-flexjs-0.8.0-src.tar.gz.md5)]
- Source (zip) : [apache-flex-flexjs-0.8.0-src.zip][4] [[PGP](https://www.apache.org/dist/flex/flexjs/0.8.0/apache-flex-flexjs-0.8.0-src.zip.asc)] [[MD5](https://www.apache.org/dist/flex/flexjs/0.8.0/apache-flex-flexjs-0.8.0-src.zip.md5)]
- Binaries (tar.gz) : [apache-flex-flexjs-0.8.0-bin.tar.gz][7] [[PGP](https://www.apache.org/dist/flex/flexjs/0.8.0/binaries/apache-flex-flexjs-0.8.0-bin.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/flexjs/0.8.0/binaries/apache-flex-flexjs-0.8.0-bin.tar.gz.md5)]
- Binaries (zip) : [apache-flex-flexjs-0.8.0-bin.zip][8] [[PGP](https://www.apache.org/dist/flex/flexjs/0.8.0/binaries/apache-flex-flexjs-0.8.0-bin.zip.asc)] [[MD5](https://www.apache.org/dist/flex/flexjs/0.8.0/binaries/apache-flex-flexjs-0.8.0-bin.zip.md5)]

<div class="headline"><h4>Dependencies</h4></div>
Apache FlexJS requires some build tools which must be installed prior to building FlexJS.  Some of these have different licenses. See the Software [Dependencies section][15] within the [README][15] for more information on the external software dependencies.  If you plan to compile the sources, it is best to follow the instructions for downloading (and building) [Apache Flex FlexUnit][16] and [Apache Flex FalconJX][17] first.  Click on the links to access instructions for those dependencies.

#### General Requirements
- Java SDK 1.6 or greater
- ANT 1.7.1 or greater
- Google Closure Library
- Adobe Flash Player playerglobal.swc
- Apache Flex FalconJX 0.8.0 or greater
- Apache Flex FlexUnit 4.2 or greater
- Apache Flex 4.8 or greater

#### Software Dependencies

The Apache FlexJS framework does not have direct dependencies on third-party software.  Applications built with Apache FlexJS need the Google Closure Library.

#### Verify the integrity of the files

Apache relies on 3rd party mirrors to distribute their software.  Because these releases are hosted on servers that are not under our control, we strongly recommend that you verify the integrity of the binaries or source code before you install it using the PGP or MD5 signatures listed next to the downloads.  This involves a few extra steps, but it will verify that you are getting a true Apache release.

The PGP signatures can be verified using PGP or GPG. First download the [KEYS][10] as well as the asc signature file for the relevant distribution. Make sure you get these files as linked from this page (rather than a mirror) to insure the integrity of the files.

    % pgpk -a KEYS

    % pgpv apache-flex-flexjs-0.8.0-src.tar.gz.asc

*or*

    % pgp -ka KEYS

    % pgp apache-flex-flexjs-0.8.0-src.tar.gz.asc

*or*

    % gpg --import KEYS

    % gpg --verify apache-flex-flexjs-0.8.0-src.tar.gz.asc


Alternatively, you can verify the MD5 signature on the files. A unix/Mac program called `md5` or `md5sum` is included in many unix distributions. It is also available as part of [GNU Textutils][11]. Windows users can get binary md5 programs from [here][12] , [here][13] , or [here][14]. An MD5 signature consists of 32 hex characters, and a SHA1 signature consists of 40 hex characters. Ensure your generated signature string matches the signature string published in the files above.


[2]: https://www.apache.org/dyn/closer.lua/flex/flexjs/0.8.0/RELEASE_NOTES
[3]: https://www.apache.org/dyn/closer.lua/flex/flexjs/0.8.0/apache-flex-flexjs-0.8.0-src.tar.gz
[4]: https://www.apache.org/dyn/closer.lua/flex/flexjs/0.8.0/apache-flex-flexjs-0.8.0-src.zip
[7]: https://www.apache.org/dyn/closer.lua/flex/flexjs/0.8.0/binaries/apache-flex-flexjs-0.8.0-bin.tar.gz
[8]: https://www.apache.org/dyn/closer.lua/flex/flexjs/0.8.0/binaries/apache-flex-flexjs-0.8.0-bin.zip
[10]: https://www.apache.org/dist/flex/KEYS
[11]: https://www.gnu.org/software/textutils/textutils.html
[12]: https://www.fourmilab.ch/md5/
[13]: https://www.pc-tools.net/win32/freeware/console/
[14]: https://www.slavasoft.com/fsum/
[15]: https://www.apache.org/dyn/closer.lua/flex/flexjs/0.8.0/READme
[16]: /download-flexunit.html
[17]: /download-falconjx.html
