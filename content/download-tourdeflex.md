Title:  Download Apache Tour De Flex

Use the links below to download the Apache Flex® Tour De Flex component explorer from one of our mirrors. You must verify the integrity of the downloaded files using signatures downloaded from this page.

Only current recommended releases are available on the main distribution site and its mirrors.

**Please review the release notes before installing or compiling this testing suite.**

<div class="headline"><h4>Current Release (1.2)</h4></div>
The Apache Flex team is pleased to offer this release, available as of the 30th of November 2014. This application is based on work donated by Adobe and their component explorer and is expected to be updated over time. We welcome feedback and contributions to it from the wider Apache Flex community.

**Please be aware of the dependencies listed in the section below.**  They are required in order to compile the Tour De Flex Examples.  The [README][15] explains these requirements further.

- Release Notes : [RELEASE_NOTES][2]
- README : [README][15]
- Source (tar.gz) : [apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz][3] [[PGP](https://www.apache.org/dist/flex/tourdeflex/1.2/apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/tourdeflex/1.2/apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz.md5)]
- Source (zip) : [apache-flex-tour-de-flex-component-explorer-1.2-src.zip][4] [[PGP](https://www.apache.org/dist/flex/tourdeflex/1.2/apache-flex-tour-de-flex-component-explorer-1.2-src.zip.asc)] [[MD5](https://www.apache.org/dist/flex/tourdeflex/1.2/apache-flex-tour-de-flex-component-explorer-1.2-src.zip.md5)]


Due to their size convenience binary releases are not available but you can look at the Tour De Flex component explorer on the [Apache Flex website][16].

<div class="headline"><h4>Dependencies</h4></div>
Apache Flex Tour De Flex requires some build tools which must be installed prior to building Tour De Flex.

#### General Requirements
- ANT 1.7.1 or greater
- Apache Flex 4.8 or greater (preferably the latest version otherwise not all examples may compile)

#### Verify the integrity of the files

Apache relies on 3rd party mirrors to distribute their software.  Because these releases are hosted on servers that are not under our control, we strongly recommend that you verify the integrity of the binaries or source code before you install it using the PGP or MD5 signatures listed next to the downloads.  This involves a few extra steps, but it will verify that you are getting a true Apache release.

The PGP signatures can be verified using PGP or GPG. First download the [KEYS][10] as well as the asc signature file for the relevant distribution. Make sure you get these files as linked from this page (rather than a mirror) to insure the integrity of the files.

    % pgpk -a KEYS

    % pgpv apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz.asc

*or*

    % pgp -ka KEYS

    % pgp apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz.asc

*or*

    % gpg --import KEYS

    % gpg --verify apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz.asc


Alternatively, you can verify the MD5 signature on the files. A unix/Mac program called `md5` or `md5sum` is included in many unix distributions. It is also available as part of [GNU Textutils][11]. Windows users can get binary md5 programs from [here][12] , [here][13] , or [here][14]. An MD5 signature consists of 32 hex characters, and a SHA1 signature consists of 40 hex characters. Ensure your generated signature string matches the signature string published in the files above.


[2]: https://www.apache.org/dyn/closer.lua/flex/tourdeflex/1.2/RELEASE_NOTES
[3]: https://www.apache.org/dyn/closer.lua/flex/tourdeflex/1.2/apache-flex-tour-de-flex-component-explorer-1.2-src.tar.gz
[4]: https://www.apache.org/dyn/closer.lua/flex/tourdeflex/1.2/apache-flex-tour-de-flex-component-explorer-1.2-src.zip
[10]: https://www.apache.org/dist/flex/KEYS
[11]: https://www.gnu.org/software/textutils/textutils.html
[12]: https://www.fourmilab.ch/md5/
[13]: https://www.pc-tools.net/win32/freeware/console/
[14]: https://www.slavasoft.com/fsum/
[15]: https://www.apache.org/dyn/closer.lua/flex/tourdeflex/1.2/README
[16]: /tourdeflex/index.html