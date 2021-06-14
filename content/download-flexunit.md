Title:  Download Apache FlexUnit

Use the links below to download the Apache FlexUnit Testing Suite from one of our mirrors. You must verify the integrity of the downloaded files using signatures downloaded from this page.

Only current recommended releases are available on the main distribution site and its mirrors.

The Apache Flex® FlexUnit Testing Suite has some compile-time dependencies.  Please make sure to review the dependencies section if you plan on re-compiling the source from scratch.

**Please review the release notes before installing or compiling this testing suite.**

<div class="headline"><h4>Current Release (4.2.0)</h4></div>

The Apache Flex team is pleased to offer this release, available as of the 13th of April 2014.  This is the latest version of the Apache FlexUnit Testing Suite and is designed to be compatible with previous versions.

Binaries are provided as a convenience for those who do not wish to compile FlexUnit themselves.  The 4.2.0 binaries were published on the 13th of April 2014.

**Please be aware of the dependencies listed in the section below.**  They are required in order to use the Apache FlexUnit Testing Suite.  The [README][15] explains these requirements further.

- Release Notes : [RELEASE_NOTES][2]
- README : [README][15]
- Source (tar.gz) : [apache-flex-flexunit-4.2.0-4.12.0-src.tar.gz][3] [[PGP](https://www.apache.org/dist/flex/flexunit/4.2.0/apache-flex-flexunit-4.2.0-4.12.0-src.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/flexunit/4.2.0/apache-flex-flexunit-4.2.0-4.12.0-src.tar.gz.md5)]
- Source (zip) : [apache-flex-flexunit-4.2.0-4.12.0-src.zip][4] [[PGP](https://www.apache.org/dist/flex/flexunit/4.2.0/apache-flex-flexunit-4.2.0-4.12.0-src.zip.asc)] [[MD5](https://www.apache.org/dist/flex/flexunit/4.2.0/apache-flex-flexunit-4.2.0-4.12.0-src.zip.md5)]
- Binaries (tar.gz) : [apache-flex-flexunit-4.2.0-4.12.0-bin.tar.gz][7] [[PGP](https://www.apache.org/dist/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.tar.gz.md5)]
- Binaries (zip) : [apache-flex-flexunit-4.2.0-bin.zip][8] [[PGP](https://www.apache.org/dist/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.zip.asc)] [[MD5](https://www.apache.org/dist/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.zip.md5)]

<div class="headline"><h4>Dependencies</h4></div>

Apache Flex FlexUnit requires some build tools which must be installed prior to building FlexUnit and it depends on some external software which are downloaded as part of the build process.  Some of these have different licenses. See the Software [Dependencies section][15] within the [README][15] for more information on the external software dependencies.

#### General Requirements
- Java SDK 1.6 or greater
- ANT 1.7.1 or greater
- Apache Flex 4.8 or greater

#### Software Dependencies

Apache Flex FlexUnit uses third-party code that will be downloaded as part of the ApacheFlex FlexUnit build. The following dependencies have licenses which are, or are compatible with, the Apache
Version 2.0 license.  These can be downloaded via the ANT script included in the download packages.

(jars)

- ant -  [Download](https://search.maven.org/remotecontent?filepath=org/apache/ant/ant/1.7.1/ant-1.7.1.jar) (Apache 2.0 License)
- ant-contrib - [Download](https://search.maven.org/remotecontent?filepath=ant-contrib/ant-contrib/1.0b3/ant-contrib-1.0b3.jar) (Apache 2.0 License)
- ant-launcher -  [Download](https://search.maven.org/remotecontent?filepath=org/apache/ant/ant-launcher/1.7.1/ant-launcher-1.7.1.jar) (Apache 2.0 License)
- ant-testutil -  [Download](https://search.maven.org/remotecontent?filepath=org/apache/ant/ant-testutil/1.7.1/ant-testutil-1.7.1.jar)	(Apache 2.0 License)
- maven-ant-tasks  - [Download](https://search.maven.org/remotecontent?filepath=org/apache/maven/maven-ant-tasks/2.1.3/maven-ant-tasks-2.1.3.jar) (Apache 2.0 License)
- dom4j - [Download](https://search.maven.org/remotecontent?filepath=dom4j/dom4j/1.6.1/dom4j-1.6.1.jar) (BSD License)
- jaxen - [Download](https://search.maven.org/remotecontent?filepath=jaxen/jaxen/1.1-beta-6/jaxen-1.1-beta-6.jar) (BSD License)

<br/ >(swcs)

- coverageagent - [Download](https://flexcover.googlecode.com/files/flexcover-0.90.zip) (MIT License)
- fluint - [Download](https://github.com/flexunit/flexunit/raw/master/FlexUnit4Test/libs/fluint-1_2.swc) (MIT License)
- mockolate - [Download](https://github.com/downloads/drewbourne/mockolate/mockolate-0.9.5.zip) (MIT License)
- mock-as - [Download](https://github.com/flexunit/flexunit/raw/master/FlexUnit4Test/libs/mock-as3.swc) (BSD License)
- hamcrest - [Download](https://cloud.github.com/downloads/drewbourne/hamcrest-as3/hamcrest-as3-flex-1.1.3.zip) (BSD License)
- flexunit1lib - [Download](https://github.com/flexunit/flexunit/raw/master/FlexUnit4Test/libs/FlexUnit1Lib.swc) (BSD License)

<br/ >The following dependencies have licenses which Apache considers to be reciprocal licenses so you will be prompted to acknowledge the license before the software is downloaded to your system.

- junit - [Download](https://search.maven.org/remotecontent?filepath=junit/junit/3.8.1/junit-3.8.1.jar) (License - CPL 1.0)
- saxon9he - [Download](https://search.maven.org/remotecontent?filepath=net/sf/saxon/Saxon-HE/9.4/Saxon-HE-9.4.jar) (License - MPL 1.1)

<br/ >All of the above dependencies can automatically be downloaded via the following ANT command :

    cd <flexunit.dir>
    ant thirdparty-downloads

#### Verify the integrity of the files

Apache relies on 3rd party mirrors to distribute their software.  Because these releases are hosted on servers that are not under our control, we strongly recommend that you verify the integrity of the binaries or source code before you install it using the PGP or MD5 signatures listed next to the downloads.  This involves a few extra steps, but it will verify that you are getting a true Apache release.

The PGP signatures can be verified using PGP or GPG. First download the [KEYS][10] as well as the asc signature file for the relevant distribution. Make sure you get these files as linked from this page (rather than a mirror) to insure the integrity of the files.

    % pgpk -a KEYS

    % pgpv apache-flex-sdk-4.12.0-src.tar.gz.asc

*or*

    % pgp -ka KEYS

    % pgp apache-flex-sdk-4.12.0-src.tar.gz.asc

*or*

    % gpg --import KEYS

    % gpg --verify apache-flex-sdk-4.12.0-src.tar.gz.asc


Alternatively, you can verify the MD5 signature on the files. A unix/Mac program called `md5` or `md5sum` is included in many unix distributions. It is also available as part of [GNU Textutils][11]. Windows users can get binary md5 programs from [here][12] , [here][13] , or [here][14]. An MD5 signature consists of 32 hex characters, and a SHA1 signature consists of 40 hex characters. Ensure your generated signature string matches the signature string published in the files above.


[2]: https://www.apache.org/dyn/closer.lua/flex/flexunit/4.2.0/RELEASE_NOTES
[3]: https://www.apache.org/dyn/closer.lua/flex/flexunit/4.2.0/apache-flex-flexunit-4.2.0-4.12.0-src.tar.gz
[4]: https://www.apache.org/dyn/closer.lua/flex/flexunit/4.2.0/apache-flex-flexunit-4.2.0-4.12.0-src.zip
[7]: https://www.apache.org/dyn/closer.lua/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.tar.gz
[8]: https://www.apache.org/dyn/closer.lua/flex/flexunit/4.2.0/binaries/apache-flex-flexunit-4.2.0-4.12.0-bin.zip
[10]: https://www.apache.org/dist/flex/KEYS
[11]: https://www.gnu.org/software/textutils/textutils.html
[12]: https://www.fourmilab.ch/md5/
[13]: https://www.pc-tools.net/win32/freeware/console/
[14]: https://www.slavasoft.com/fsum/
[15]: https://www.apache.org/dyn/closer.lua/flex/flexunit/4.2.0/README