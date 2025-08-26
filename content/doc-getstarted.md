Title:  Getting Started with Apache Flex

Before you start to learn how to program with Apache Flex, you will need to get your environment setup.  The Apache Flex SDK includes everything you need to make applications except for an IDE.
You technically don't need one, but it is **HIGHLY** encouraged for you to use one.  We won't cover the workflows in this document on how to create and compile applications with Notepad or vi,
just know that you can.

There are four major IDEs available that work with Apache Flex.  There are other, lesser-used IDEs and plugins for other IDEs out there as well.  For the most part, the workflow is the same for
all of them.  Below we will outline the steps needed to use Apache Flex with [Adobe Flash Builder 4.7][1], [JetBrains IntelliJ IDEA 13.1][2], [FlashDevelop][11] and 
[FDT][13].  If you use another IDE and want to help us add to this document please contact us on the [mailing list][3].

Get started by setting up the Apache Flex SDK itself, then move on the specific section for your IDE.

<div class="headline"><h4>Setting up the Apache Flex SDK</h4></div>

1. **Download the SDK installer** Go to the [Download the SDK Installer][4] on the menu above and install the SDK installer.  Click on the Download link on the installer badge, which will download the proper installer for your computer.
2. **Run the SDK installer**  The first question you will be asked is the installation directory.  If you are on a Mac, use /Applications/Adobe Flash Builder 4.7/sdks/4.14.0/.  If you are on a PC, use C:\Program Files(x86)\Adobe Flash Builder 4.7\sdks\4.14.0\.  You will need to create the 4.14.0 folders.  Press Next.
3. **Accept SDK Licenses and Install**  Check the red boxes to accept each of the licenses.  Read the licenses, of course ;)  Click Install to download all the components into the new 4.14.0 directory.  This can take a few minutes.

<div class="headline"><h4>IDE-specific instructions </h4></div>

* <a href="#setupFlashBuilder">Flash Builder</a>
* <a href="#setupIDEA">IntelliJ IDEA</a>
* <a href="#setupFD">FlashDevelop</a>
* <a href="#setupFDT">FDT</a>

<div class="headline"><h5 id="setupFlashBuilder" name="setupFlashBuilder">Setting up Apache Flex with Adobe Flash Builder</h4></div>

1. **Download Adobe Flash Builder**  Adobe Flash Builder is available from the [Adobe Website][1]. It offers a 30-day trial and retails for about $250.  It is available for both Windows and MacOS X
2. **Install Adobe Flash Builder**  Follow the on-screen installation wizard.
3. **Run Flash Builder** Launch Adobe Flash Builder.  You may need to login with your Adobe ID to activate the trial.
4. **Tell Flash Builder about the SDK** On Windows, go to the Window Menu -> Preferences.  On the Mac, go to the Flash Builder menu -> Preferences.  Go to the Flash Builder node, then select the Installed Flex SDKs node.  Click [ADD], then choose the directory in which you saved the 4.14.0 SDK (Step 4). The name should be populated with Apache Flex 4.14.0 FP11.1 en_US.  Press OK, and OK again.
5. **Create a new project**  Right-click in the empty Package Explorer area, choose New -> Flex Project.  Give the project a name.  Under the Flex SDK version, choose Apache Flex 4.14.0.  Press Finish.  Flash Builder will create the new project.
6. **Start Coding!**  Jump down below to make your first Hello World application.

<div class="headline"><h6>Known Flash Builder Issues</h6></div>

Adobe Flash Builder 4.7 and Adobe Flash Builder 4.6 both contain a bug where, 
when generating the .mxml file for a new project that uses Apache Flex
and Spark Application, Flash Builder will incorrectly insert the attribute:

	layout="absolute"

This results in a compile error in the new project. The remedy is to simply
remove the errant attribute.

A [wiki page][8] has been set up to contain the latest news on Adobe's
attempt to correct this problem.

<div class="headline"><h5 id="setupIDEA" name="setupIDEA">Setting up Apache Flex with Jetbrains IntelliJ IDEA</h4></div>

1. **Download JetBrains IntelliJ IDEA**  IntelliJ IDEA is available from the [JetBrains Website][2]. They offer a 30-day trail and it retails for about $200.  It is available for both Windows and MacOS X
2. **Install IntelliJ IDEA**  Follow the on-screen installation wizard.
3. **Download the SDK installer** Go to the [Download the SDK Installer][4] on the menu above and install the SDK installer.  Click on the Download link on the installer badge, which will download the proper installer for your computer.
4. **Run the SDK installer**  The first question you will be asked is the installation directory.  Note where you save the SDK (as you will need it later).  Press Next.
5. **Accept SDK Licenses and Install**  Check the red boxes to accept each of the licenses.  Read the licenses, of course ;)  Click Install to download all the components into the new 4.14.0 directory.  This can take a few minutes.
6. **Run IntelliJ**  Run IntelliJ.  You will need to start the 30 day trial, and accept the license agreement when the app runs the first time.  You will be launched into the configuration wizard.  Select which VCS Plugins you want (we suggest Git Subversion).  Next, select the Web/J2EE Plugins (We suggest Database, SQL and WebServices).  Next, select the HTML Development tools (You must select FLash/Flex, CSS, JavaScript, JavaScript Debugger, but we suggest keeping them all selected).  Finally, select which other plugins you wish to use (Select ANT, Properties, Copyright, Coverage, IntelliLang, Inspection Gadgets, Type Migration, UML.  We suggest keeping most of the defaults).
7. **Create your new project** When at the welcome screen, select "Create New Project". In the left menu, choose Flash Module under the Other heading.  Give the project a name, and select Next.
8. **Configure the new project**  On the "New Project" screen, select Web for the target platform, and keep the rest of the options the same.  Keep the Flex SDK as [none] for this step. Click Finish.
9. **Tell IntelliJ about the SDK** Right click on your project name in the Project Explorer, and click Open Module Settings. In the second pane, click the application settings (it says (app) behind the name -- it should have red squigglies under it).   Go to the dependency tab.  To the right of the Flex SDK drop down, select New... to add the 4.14.0 SDK to the project.  Find the 4.14.0 directory you created in step 4, and select Choose. Press Ok to return to the project.  Wait for IntelliJ to index the project and the new SDK.
10. **Create your Application file** Add a new MXML component under the /src/ directory by right clicking on src.  Give it a name of your choosing, Template of "Flex 4 Component" and Parent Component of Application (spark.components).
11. **Finish configuring your project** Go back to the project settings (right-click on the project name in the project explorer -> Module Settings).  Go to the General Tab of the app settings.  Click the ... button to the right of the Main Class box, and choose the filename you just created.  This will set the project root.
11. **Start Coding!**  Jump down below to make your first Hello World application.

<div class="headline"><h5 id="setupFD" name="setupFD">Setting up Apache Flex with FlashDevelop</h4></div>

You can follow along the steps described in this [wiki page] [10]

<div class="headline"><h5 id="setupFDT" name="setupFDT">Setting up Apache Flex with FDT</h4></div>
You can follow along the steps described in this [video] [12]

<div class="headline"><h4>Creating your first Hello World application</h4></div>

This is a very simple, generic hello world application.  You can learn a lot more by checking out some of our other resources below, or some of our [tutorial videos][5].

1.  Set the height and width of your application.  Add the following tags to the Application tag (2nd line) :  `width="640" height="480"`
2.  Add a new Layout tag within the Application tags.  This will tell Flex how we plan on laying out our app.  `<s:layout></s:layout>`
3.  Within the layout tags, add a BasicLayout tag.  This will tell Flex we intend on telling it where to place our components.  `<s:BasicLayout />`
4.  Between the Layout and Application tags, Add a Label tag.  We will be setting the `text` `horizontalCenter` and `verticalCenter` properties.  `<s:Label text="Hello World!" horizontalCenter="0" verticalCenter="0" />`
5.  Find the Debug toolbar icon and click it.  Your application should be launched in your default web browser and you should see the words Hello World! in the middle of the screen.


The complete code listing is (there may be some variations, depending on your IDE template. Just make sure what we talked about above match) :

    <?xml version="1.0" encoding="utf-8"?>
    <s:Application xmlns:fx="https://ns.adobe.com/mxml/2009"
                   xmlns:s="library://ns.adobe.com/flex/spark"
                   xmlns:mx="library://ns.adobe.com/flex/mx" width="640" height="480">

        <s:layout>
            <s:BasicLayout />
        </s:layout>

        <s:Label text="Hello World!" horizontalCenter="0" verticalCenter="0" />

    </s:Application>


<div class="headline"><h4>Additional Resources</h4></div>

*  Make sure to check out our video and screencast library on the [videos page][5].
*  There are a large variety of books available online.  One of our favorites is from Michael Labriola and Jeff Tapper (both Apache Flex Committers).  [Amazon Link to book][6]
*  There are quite a few people that blog about Flex.  Check out the [official blog of Apache Flex][14], [FlashDaily.net][7] and [Adobe Feeds for Apache Flex][9]

 [1]:  https://www.adobe.com/products/flash-builder-family.html
 [2]:  https://www.jetbrains.com/idea/
 [3]:  community-mailinglists.html
 [4]:  installer.html
 [5]:  doc-videos.html
 [6]:  https://www.amazon.com/Adobe-Flex-4-5-Fundamentals-ebook/dp/B005EFKGCS/
 [7]:  https://flashdaily.net/tagged/apacheflex
 [8]:  https://cwiki.apache.org/confluence/display/FLEX/Adobe+Flash+Builder+'New+Project'+Bug
 [9]:  https://feeds.adobe.com/index.cfm?query=bySmartCategory&smartCategoryId=5
 [10]: https://cwiki.apache.org/confluence/display/FLEX/2.3+FlashDevelop
 [11]: https://www.flashdevelop.org/
 [12]: https://vimeo.com/46898669
 [13]: https://fdt.powerflasher.com/
 [14]: https://blogs.apache.org/flex/