Title:  Download Apache Flex FalconJX Compiler

Use the links below to download the Apache FlexUnit FalconJX Compiler from one of our mirrors. You must verify the integrity of the downloaded files using signatures downloaded from this page.

Only current recommended releases are available on the main distribution site and its mirrors.

The Apache Flex® FalconJX Compiler has some compile-time and run-time dependencies.  Please make sure to review the dependencies section if you plan on re-compiling the source from scratch.

**Please review the release notes before installing or compiling this testing suite.**

<div class="headline"><h4>Current Release (0.7.0)</h4></div>

The Apache Flex team is pleased to offer this release, available as of the 07 September 2016.  It is considered to be 'beat' quality.  The purpose of this release is to gather feedback about the features and implementation strategies, and recruit new contributors as we grow these code bases into an SDK and tool chain that delivers the highest productivity developing applications that can run in the most places.   These releases may not handle production needs.  Expect lots of bugs and missing features.

Binaries are provided as a convenience for those who do not wish to compile FalconJX themselves.  The 0.7.0 binaries were published on the 07 September 2016.

**Please be aware of the dependencies listed in the section below.**  They are required in order to use the Apache Flex FalconJX Compiler.  The [README][15] explains these requirements further.

- Release Notes : [RELEASE_NOTES][2]
- README : [README][15]
- Source (tar.gz) : [apache-flex-falconjx-0.7.0-src.tar.gz][3] [[PGP](https://www.apache.org/dist/flex/falcon/0.7.0/apache-flex-falconjx-0.7.0-src.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/falcon/0.7.0/apache-flex-falconjx-0.7.0-src.tar.gz.md5)]
- Source (zip) : [apache-flex-falconjx-0.7.0-src.zip][4] [[PGP](https://www.apache.org/dist/flex/falcon/0.7.0/apache-flex-falconjx-0.7.0-src.zip.asc)] [[MD5](https://www.apache.org/dist/flex/falcon/0.7.0/apache-flex-falconjx-0.7.0-src.zip.md5)]
- Binaries (tar.gz) : [apache-flex-falconjx-0.7.0-bin.tar.gz][7] [[PGP](https://www.apache.org/dist/flex/falcon/0.7.0/binaries/apache-flex-falconjx-0.7.0-bin.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/falcon/0.7.0/binaries/apache-flex-falconjx-0.7.0-bin.tar.gz.md5)]
- Binaries (zip) : [apache-flex-falconjx-0.7.0-bin.zip][8] [[PGP](https://www.apache.org/dist/flex/falcon/0.7.0/binaries/apache-flex-falconjx-0.7.0-bin.zip.asc)] [[MD5](https://www.apache.org/dist/flex/falcon/0.7.0/binaries/apache-flex-falconjx-0.7.0-bin.zip.md5)]

<div class="headline"><h4>Dependencies</h4></div>

The Apache Flex FalconJX Compiler requires some build tools which must be installed prior to building the compiler and it depends on some external software which are downloaded as part of the build process.  Some of these have different licenses. See the Software [Dependencies section][15] within the [README][15] for more information on the external software dependencies.

#### General Requirements
- Java SDK 1.6 or greater
- ANT 1.7.1 or greater
- Adobe AIR SDK
- Adobe Flash Player playerglobal.swc
- Adobe Flash Player Debugger
- Apache Flex 4.9 or greater
- Apache Flex TLF

#### Software Dependencies

The Apache Flex FalconJX Compiler uses third-party code that will be downloaded as part of the build. The following dependencies have licenses which are, or are compatible with, the Apache
Version 2.0 license.  These can be downloaded via the ANT script included in the download packages.

(jars)

- ant -  [Download](https://search.maven.org/remotecontent?filepath=org/apache/ant/ant/1.7.1/ant-1.7.1.jar) (Apache 2.0 License)
- antlr - [Download](https://repo1.maven.org/maven2/org/antlr/antlr-complete/3.5.2/antlr-3.5.2-complete.jar) (BSD License)
- args4j - [Download](https://search.maven.org/remotecontent?filepath=args4j/args4j/2.0.28/args4j-2.0.28.jar) (MIT License)
- commons-cli - [Download](https://repo1.maven.org/maven2/commons-cli/commons-cli/1.2/commons-cli-1.2-bin.tar.gz) (Apache 2.0 License)
- commons-io - [Download](https://repo1.maven.org/maven2/commons-io/commons-io/2.4/commons-io-2.4.tar.gz) (Apache 2.0 License)
- commons-lang - [Download](https://repo1.maven.org/maven2/commons-lang/commons-lang/2.6/commons-lang-2.6.tar.gz) (Apache 2.0 License)
- commons-lang3 - [Download](https://repo1.maven.org/maven2/org/apache/commons/commons-lang3/3.4/commons-lang3-3.4.jar) (Apache 2.0 License)
- commons-compress - [Download](https://repo1.maven.org/maven2/org/apache/commons/commons-compress/1.10/commons-compress-1.10.jar) (Apache 2.0 License)
- guava - [Download](https://repo1.maven.org/maven2/com/google/guava/guava/17.0/guava-17.0.jar) (Apache 2.0 License)
- jburg - [Download](https://repo1.maven.org/maven2/net/sourceforge/jburg/jburg/1.10.2/jburg-1.10.2.jar)  (CPL)
- jflex - [Download](https://jflex.de/jflex-1.6.0.tar.gz) (BSD License)
- lzma - [Download](https://www.java2s.com/Code/JarDownload/lzma/lzma-9.20.jar.zip)  (Public Domain)
- Google Closure Compiler - [Download](https://github.com/google/closure-compiler/archive/v20151015.zip) (Apache 2.0 License)
- org.json - [Download](https://search.maven.org/remotecontent?filepath=org/codeartisans/org.json/20131017/org.json-20131017.jar) (MIT License)

<br/ >All of the above dependencies can automatically be downloaded via the following ANT commands :

    cd <falcon.dir>/compiler
    ant -f download.xml
    cd <falcon.dir>/compiler.jx
    ant -f download.xml

#### Verify the integrity of the files

Apache relies on 3rd party mirrors to distribute their software.  Because these releases are hosted on servers that are not under our control, we strongly recommend that you verify the integrity of the binaries or source code before you install it using the PGP or MD5 signatures listed next to the downloads.  This involves a few extra steps, but it will verify that you are getting a true Apache release.

The PGP signatures can be verified using PGP or GPG. First download the [KEYS][10] as well as the asc signature file for the relevant distribution. Make sure you get these files as linked from this page (rather than a mirror) to insure the integrity of the files.

    % pgpk -a KEYS

    % pgpv apache-flex-falconjx-0.7.0-src.tar.gz.asc

*or*

    % pgp -ka KEYS

    % pgp apache-flex-falconjx-0.7.0-src.tar.gz.asc

*or*

    % gpg --import KEYS

    % gpg --verify apache-flex-falconjx-0.7.0-src.tar.gz.asc


Alternatively, you can verify the MD5 signature on the files. A unix/Mac program called `md5` or `md5sum` is included in many unix distributions. It is also available as part of [GNU Textutils][11]. Windows users can get binary md5 programs from [here][12] , [here][13] , or [here][14]. An MD5 signature consists of 32 hex characters, and a SHA1 signature consists of 40 hex characters. Ensure your generated signature string matches the signature string published in the files above.


[2]: https://www.apache.org/dyn/closer.lua/flex/falcon/0.7.0/RELEASE_NOTES
[3]: https://www.apache.org/dyn/closer.lua/flex/falcon/0.7.0/apache-flex-falconjx-0.7.0-src.tar.gz
[4]: https://www.apache.org/dyn/closer.lua/flex/falcon/0.7.0/apache-flex-falconjx-0.7.0-src.zip
[7]: https://www.apache.org/dyn/closer.lua/flex/falcon/0.7.0/binaries/apache-flex-falconjx-0.7.0-bin.tar.gz
[8]: https://www.apache.org/dyn/closer.lua/flex/falcon/0.7.0/binaries/apache-flex-falconjx-0.7.0-bin.zip
[10]: https://www.apache.org/dist/flex/KEYS
[11]: https://www.gnu.org/software/textutils/textutils.html
[12]: https://www.fourmilab.ch/md5/
[13]: https://www.pc-tools.net/win32/freeware/console/
[14]: https://www.slavasoft.com/fsum/
[15]: https://www.apache.org/dyn/closer.lua/flex/falcon/0.7.0/READme
