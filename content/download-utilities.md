Title:  SDK Utilities

<p>
    The following utilities are available to make working with the Apache Flex® SDK easier:
</p>

<div class="headline"><h4 class="title">Apache Flex® SDK Installer Badge</h4></div>

The Apache Flex® SDK Installer Badge is a utility provided by the Apache Flex project to enable a one click download of the Apache Flex SDK Installer application. This application in turn installs the latest release of the Apache Flex SDK right into Adobe Flash Builder, ready for use.

You can embed the badge on your website or in your blog, so your readers have easy access to Apache Flex SDK releases. The badge comes in two sizes, both of which offer the same functionality: download the latest release of the Apache Flex SDK Installer application. To use the badge on your site or blog all you have to do is embed an iframe in the page. The iframe code is presented below:

Regular size (302 x 302)

<iframe name="afSDKInstallBadgeRegular" src="./installerbadge/index.html" frameborder="0" height="302" marginheight="0" marginwidth="0" scrolling="no" width="302"></iframe>

Use this code to embed the regular size badge on your website/blog:

```html
&lt;iframe name="afSDKInstallBadgeRegular" src="https://flex.apache.org/installerbadge/index.html"
    frameborder="0" height="302" marginheight="0" marginwidth="0" scrolling="no" width="302">&lt;/iframe&gt;
```

Small size (402 x 84)

<iframe name="afSDKInstallBadgeSmall" src="./installerbadge/index.html" frameborder="0" height="84" marginheight="0" marginwidth="0" scrolling="no" width="402"></iframe>

Use this code to embed the small size badge on your website/blog:

```html
&lt;iframe name="afSDKInstallBadgeSmall" src="https://flex.apache.org/installerbadge/index.html"
    frameborder="0" height="84" marginheight="0" marginwidth="0" scrolling="no" width="402"&gt;&lt;/iframe&gt;
```

<div class="headline"><h4 class="title">Apache Flex SDK Maven Converter</h4></div>

In order to be able to use Flex with a [Maven](https://maven.apache.org/) build, it is crucial to be able to have access to a _Mavenized_ form of FDK. The Apache Flex SDK Converter tool is used to convert the Apache and Adobe Flex SDKs and AIR SDKs into Maven artifacts. Automatically creating the directories, pom-files, copying and moving the resources to the correct destinations.

The Apache Flex SDK Converter is part of the Apache Flex Utilities Git repository that can be found here:

    https://github.com/apache/flex-utilities/tree/develop/flex-maven-tools/flex-sdk-converter