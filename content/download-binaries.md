Title:  Download the SDK Binaries

Use the links below to download the Apache Flex® SDK from one of our mirrors. You must verify the integrity of the downloaded files using signatures downloaded from this page.

Only current recommended releases are available on the main distribution site and its mirrors.  Previous releases produced by Adobe, including 4.6.0 are available at [Adobe's Sourceforge Site][1].

The Apache Flex® SDK has some compile-time dependencies.  Please make sure to review the dependencies section if you plan on re-compiling the source from scratch.

**Please review the release notes before installing or compiling the SDK.**

<div class="headline"><h4>Current Release (4.16.1)</h4></div>

The Apache Flex team is pleased to offer this release, available as of the 14th of March 2016.  This is the latest version of the Apache Flex SDK and is designed to be compatible with previous versions of the Apache Flex SDK and Adobe Flex SDK.

Binaries are provided as a convenience for those who do not wish to compile the SDK themselves, or [install without requiring Adobe AIR][16] such as on Linux.

**Please be aware of the dependencies listed in the section below.**  They are required in order to use the Apache Flex® SDK.  The [README][15] explains these requirements further.

  - Release Notes : [RELEASE_NOTES][2]
  - README : [README][15]
  - Mac OS X Binaries : [apache-flex-sdk-4.16.1-bin.tar.gz][7] [[PGP](https://www.apache.org/dist/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.tar.gz.md5)]
  - Linux Binaries : [apache-flex-sdk-4.16.1-bin.tar.gz][7] [[PGP](https://www.apache.org/dist/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.tar.gz.asc)] [[MD5](https://www.apache.org/dist/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.tar.gz.md5)]
  - Windows Binaries : [apache-flex-sdk-4.16.1-bin.zip][8] [[PGP](https://www.apache.org/dist/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.zip.asc)] [[MD5](https://www.apache.org/dist/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.zip.md5)]
  - Documentation : [apache-flex-sdk-4.16.1-asdocs.zip][5]

<div class="headline"><h4>Binary Dependencies</h4></div>

There are some components that we depend on that we do not include in our convenience binary distribution.  We try our hardest to limit these dependencies, however for the 4.16.1 release we do depend on the following components.  Please review the [README][15] included in your download for more information on where to install these packages.

- Open Source Media Framework (OSMF) [Download](https://sourceforge.net/projects/osmf.adobe/files/OSMF%201.0%20%28final%20source%2C%20ASDocs%2C%20PDF%20guides%2C%20and%20release%20notes%29/OSMF_1.0.zip/download) [MPL License](https://www.mozilla.org/MPL)

#### Optional Dependencies

The following dependency is optional, and if available will provide additional features to the Flex Framework:

  - Embedded Font Support:
    - flex-fontkit.jar [Download from older SDK](https://fpdownload.adobe.com/pub/flex/sdk/builds/flex4.6/flex_sdk_4.6.0.23201B.zip) [License](https://www.adobe.com/products/eulas/pdfs/adobe_flex_software_development_kit-combined-20110916_0930.pdf)
    - afe.jar [Download from older SDK](https://fpdownload.adobe.com/pub/flex/sdk/builds/flex4.6/flex_sdk_4.6.0.23201B.zip) [License](https://www.adobe.com/products/eulas/pdfs/adobe_flex_software_development_kit-combined-20110916_0930.pdf)
    - adt.jar [Download from older SDK](https://fpdownload.adobe.com/pub/flex/sdk/builds/flex4.6/flex_sdk_4.6.0.23201B.zip) [License](https://www.adobe.com/products/eulas/pdfs/adobe_flex_software_development_kit-combined-20110916_0930.pdf)
    - rideau.jar [Download from older SDK](https://fpdownload.adobe.com/pub/flex/sdk/builds/flex4.6/flex_sdk_4.6.0.23201B.zip) [License](https://www.adobe.com/products/eulas/pdfs/adobe_flex_software_development_kit-combined-20110916_0930.pdf)

All of the above dependencies can automatically be downloaded via the following ANT command :

    cd <flex.dir>/frameworks
    ant thirdparty-downloads

If you are planning on compiling the source code, you will need the following components.  More details are available in the README file in the downloaded package.  Some of these components have licenses that differ from the Apache License.

  - Java SDK 1.7 (1.6 and 1.8 should work as well)
  - ANT 1.7.0 or greater
  - Adobe AIR Integration Kit
  - Adobe Flash Player Content Debugger / Adobe Flash Player
  - Adobe Pixel Bender Toolkit

#### Verify the integrity of the files

Apache relies on 3rd party mirrors to distribute their software.  Because these releases are hosted on servers that are not under our control, we strongly recommend that you verify the integrity of the binaries or source code before you install it using the PGP or MD5 signatures listed next to the downloads.  This involves a few extra steps, but it will verify that you are getting a true Apache release.

The PGP signatures can be verified using PGP or GPG. First download the [KEYS][10] as well as the asc signature file for the relevant distribution. Make sure you get these files as linked from this page (rather than a mirror) to insure the integrity of the files.

    % pgpk -a KEYS

    % pgpv apache-flex-sdk-4.16.1-bin.tar.gz.asc

*or*

    % pgp -ka KEYS

    % pgp apache-flex-sdk-4.16.1-bin.tar.gz.asc

*or*

    % gpg --import KEYS

    % gpg --verify apache-flex-sdk-4.16.1-bin.tar.gz.asc


Alternatively, you can verify the MD5 signature on the files. A unix/Mac program called `md5` or `md5sum` is included in many unix distributions. It is also available as part of [GNU Textutils][11]. Windows users can get binary md5 programs from [here][12] , [here][13] , or [here][14]. An MD5 signature consists of 32 hex characters, and a SHA1 signature consists of 40 hex characters. Ensure your generated signature string matches the signature string published in the files above.

[1]: https://sourceforge.net/adobe/flexsdk/wiki/About/
[2]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/RELEASE_NOTES
[3]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/apache-flex-sdk-4.16.1-src.tar.gz
[4]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/apache-flex-sdk-4.16.1-src.zip
[5]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/docs/apache-flex-sdk-4.16.1-asdocs.zip
[6]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/RELEASE_NOTES
[7]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.tar.gz
[8]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/binaries/apache-flex-sdk-4.16.1-bin.zip
[9]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/docs/apache-flex-sdk-4.16.1-asdocs.zip
[10]: https://www.apache.org/dist/flex/KEYS
[11]: https://www.gnu.org/software/textutils/textutils.html
[12]: https://www.fourmilab.ch/md5/
[13]: https://www.pc-tools.net/win32/freeware/console/
[14]: https://www.slavasoft.com/fsum/
[15]: https://www.apache.org/dyn/closer.lua/flex/4.16.1/README
[16]: https://cwiki.apache.org/confluence/display/FLEX/Installation+help#Installationhelp-Ant-basedinstaller