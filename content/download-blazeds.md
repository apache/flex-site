Title:  Download Apache Blaze DS

Use the links below to download the Apache Flex® Blaze DS from one of our mirrors. You must verify the integrity of the downloaded files using signatures downloaded from this page.

Only current recommended releases are available on the main distribution site and its mirrors.

**Please review the release notes before installing or compiling this testing suite.**

<div class="headline"><h4>Current Release (4.8.0)</h4></div>
The Apache Flex team is pleased to offer this release, available as of the 17th of April 2023. We welcome feedback and contributions to it from the wider Apache Flex community.

**Please be aware of the dependencies listed in the section below.**  They are required in order to compile BlazeDS.  The [README][15] explains these requirements further.

- Release Notes : [RELEASE_NOTES][2]
- README : [README][15]
- Source (zip) : [blazeds-4.8.0-source-release.zip][4] [[PGP](https://www.apache.org/dist/flex/BlazeDS/4.8.0/blazeds-4.8.0-source-release.zip.asc)] [[SHA512](https://www.apache.org/dist/flex/BlazeDS/4.8.0/blazeds-4.8.0-source-release.zip.sha512)]
- Source (tar.gz) : [blazeds-4.8.0-source-release.tar.gz][5] [[PGP](https://www.apache.org/dist/flex/BlazeDS/4.8.0/blazeds-4.8.0-source-release.tar.gz.asc)] [[SHA512](https://www.apache.org/dist/flex/BlazeDS/4.8.0/blazeds-4.8.0-source-release.tar.gz.sha512)]
- Binary (zip) : [blazeds-4.8.0-binary-release.zip][6] [[PGP](https://www.apache.org/dist/flex/BlazeDS/4.8.0/binaries/blazeds-4.8.0-binary-release.zip.asc)] [[SHA512](https://www.apache.org/dist/flex/BlazeDS/4.8.0/binaries/blazeds-4.8.0-binary-release.zip.sha512)]
- Binary (tar.gz) : [blazeds-4.8.0-binary-release.tar.gz][7] [[PGP](https://www.apache.org/dist/flex/BlazeDS/4.8.0/binaries/blazeds-4.8.0-binary-release.tar.gz.asc)] [[SHA512](https://www.apache.org/dist/flex/BlazeDS/4.8.0/binaries/blazeds-4.8.0-binary-release.tar.gz.sha512)]


<div class="headline"><h4>Dependencies</h4></div>

Apache Flex Blaze DS requires some build tools which must be installed prior to building BlazeDS.

#### General Requirements

- Java SDK 1.8 or greater
- Maven 2.2.0 or greater 

#### Verify the integrity of the files

Apache relies on 3rd party mirrors to distribute their software.  Because these releases are hosted on servers that are not under our control, we strongly recommend that you verify the integrity of the binaries or source code before you install it using the PGP or MD5 signatures listed next to the downloads.  This involves a few extra steps, but it will verify that you are getting a true Apache release.

The PGP signatures can be verified using PGP or GPG. First download the [KEYS][10] as well as the asc signature file for the relevant distribution. Make sure you get these files as linked from this page (rather than a mirror) to insure the integrity of the files.

    % pgpk -a KEYS

    % pgpv blazeds-4.8.0-source-release.tar.gz.asc

*or*

    % pgp -ka KEYS

    % pgp blazeds-4.8.0-source-release.tar.gz.asc

*or*

    % gpg --import KEYS

    % gpg --verify blazeds-4.8.0-source-release.tar.gz.asc


Alternatively, you can verify the SHA512 signature on the files. A unix/Mac program called `shasum` or `sha512sum` is included in many unix distributions. It is also available as part of [GNU Textutils][11]. Windows users can get binary md5 programs from [here][12] , [here][13] , or [here][14]. An MD5 signature consists of 32 hex characters, and a SHA1 signature consists of 40 hex characters. Ensure your generated signature string matches the signature string published in the files above.


[2]: https://www.apache.org/dist/flex/BlazeDS/4.8.0/RELEASE_NOTES
[4]: https://www.apache.org/dyn/closer.lua/flex/BlazeDS/4.8.0/blazeds-4.8.0-source-release.zip
[5]: https://www.apache.org/dyn/closer.lua/flex/BlazeDS/4.8.0/blazeds-4.8.0-source-release.tar.gz
[6]: https://www.apache.org/dyn/closer.lua/flex/BlazeDS/4.8.0/binaries/blazeds-4.8.0-binary-release.zip
[7]: https://www.apache.org/dyn/closer.lua/flex/BlazeDS/4.8.0/binaries/blazeds-4.8.0-binary-release.tar.gz
[10]: https://www.apache.org/dist/flex/KEYS
[11]: https://www.gnu.org/software/textutils/textutils.html
[12]: https://www.fourmilab.ch/md5/
[13]: https://www.pc-tools.net/win32/freeware/console/
[14]: https://www.slavasoft.com/fsum/
[15]: https://www.apache.org/dyn/closer.lua/flex/BlazeDS/4.8.0/README