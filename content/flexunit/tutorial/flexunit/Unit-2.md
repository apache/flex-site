Title:  Unit 2 - Overview of Testing Terms and Terminology

<a href="../code/Unit2.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>While FlexUnit 4.x makes it easy for you to write clear and simple tests, you have to understand some of the basic terminology of unit testing frameworks, and specifically of FlexUnit, to become an effective user of this tool.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Explain unit testing, integration testing, and functional testing</li>
	<li>Explain the role of metadata in FlexUnit 4.x testing</li>
	<li>Explain testing framework and fixtures</li>
	<li>Understand the difference between tests, test cases, and test suites</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Test Types</li>
	<li>Metadata</li>
	<li>Testing Framework</li>
	<li>Assertions</li>
	<li>Test / Test Case / Test Suite</li>
	<li>Test Fixture</li>
</ul>

<h2>Test Types</h2>

<p>Testing is a broad term and is applied by individuals in many different ways. Applications can be tested for security, performance and functionality. They may be tested before they are accepted by a user or tested for international deployment in multiple locales around the world.</p>
<p>This course specifically deals with testing to ensure your code functions properly. In the simplest models, functionality is assured by three types of testing. Each type is performed at a different time during the development cycle.</p>

<h3>Unit Testing</h3>

<ul>
	<li>Performed during development or immediately after</li>
	<li>Tests the smallest blocks of code in complete isolation</li>
	<li>Ensures the return values of functions are correct for expected input</li>
	<li>Ensures that any side effects (other aspects of a class that change as the result of executing this block of code) are correct for the expected input</li>
	<li>In general, you must have a unit test for each pathway or branch through your code. This means every <i>if-statement</i> guarantees two tests.</li>
</ul>

<h3>Integration Testing</h3>

<ul>
	<li>Also performed during development or immediately after</li>
	<li>Eventually, in the development lifecycle, each testable unit is likely to interact with other testable units. Integration testing tests the interaction between testable units.</li>
</ul>
 
<h3>Functional Testing</h3>

<ul> 
	<li>Generally performed on an entire system or set of components</li>
	<li>Tests expected behavior for the use cases of the application</li>
	<li>Designed to test functional requirements</li>
	<li>This can often be the easiest type of test to create; however, it is not as thorough or flexible as unit testing.</li>
</ul>
<p>This course focused mainly on unit testing but introduces some integration testing in later sections. Functional testing is beyond the scope of this class.</p>

<h2>Metadata</h2>

<p>Metadata provides additional information or a description of data. In Flex and ActionScript, metadata is most often used to provide additional information about a property, method or class. It can be interpreted by the compiler while building the application or by the development environment while writing code.</p>
<p>Examples of metadata used in Flex include [Bindable], [Inspectable] and [Event]. [Bindable] instructs the pre-compiler to add additional code to a class to facilitate automated view updates when data changes. [Inspectable] and [Event] instruct the Flash Builder IDE in expected and available configuration options. This additional information allows the IDE to assist you with code completion and compile time type checking.</p>
<p>To create a test using FlexUnit .9 or Fluint 1, you must extend a specific class and then name each method with the prefix <i>test</i>, such as <i>testMyFunction()</i>. Following this convention formed the basis of using these frameworks.</p>
<p>Unlike its predecessors, FlexUnit 4 is a metadata driven framework. Rather than using a special naming convention for tests, FlexUnit 4 allows you to decorate a test using metadata.</p>

```
[Test]
public function shouldDoThis():void {
}
```

<p>This use of metadata removes the need to extend a specific class, or name your methods in a specific way. It provides more flexibility and opportunity.</p>
<p>There are many metadata tags such as [Test], [Suite] and [Theory] used to mark classes, methods or properties when using FlexUnit 4.</p>

<h2>Testing Frameworks</h2>

<p>You can test without a testing framework, and you likely already do. Each time you write a piece of code, execute it and check for an expected outcome, you are performing the same tasks as a testing framework.</p>
<p>A testing framework only exists to automate these manual operations. It codifies assumptions about the way a piece of code will work into a series of test method, including the code's expected return value, side effects and exceptions in a given situation.</p>
<p>When those methods are executed, the testing framework verifies the result of the execution and reports the results. This provides a standard way in which users can execute and share tests.</p>
<p>FlexUnit.9, Fluint and FlexUnit 4.x are properly referred to as testing frameworks. The same is true for ASUnit, or the JUnit and TestNG frameworks written for Java.</p>

<h2>Assertions</h2>

<p>Assertions are a tool used to reveal whether or not a piece of code is working as expected. They take the form of a strong statement indicating an expected result. For example, if you add the numbers 2 and 3.</p>

```
result = 2 + 3;
```

<p>You can assert that the result is 5. You do so as you are sure that no other answer is satisfactory and that a different answer is just plain wrong.</p> 

```
assertEquals( 5, result );
```

<p>If this assertion fails, meaning that <code>result</code> is not equal to <code>5</code>, then you can conclude that the plus operator no longer works correctly in all cases. This is the basis of testing.</p>

<h2>Tests</h2>

<p>Ultimately, assertions are the atom of a test. However, an assertion is only applicable to a given condition. The assertion made in the previous section only applies because the numbers 2 and 3 were added.</p> 

```
result = 2 + 3;
assertEquals( 5, result );
```

<p>If instead, the numbers 6 and 7 were added, a different assertion is needed, and this is the point of a test. A test sets up the necessary preconditions in order to make an assertion. Ideally, you will have one test for every possible branch in your class.</p>
<p>Continuing with the addition example, you would likely have tests to:</p>
<ol>
	<li>add two positive numbers</li>
	<li>add a positive and a negative number</li>
	<li>add two negative numbers</li>
	<li>add 0 to a number</li>
	<li>add NaN to a number</li>
	<li>add positive or negative infinity to a number</li>
</ol>
<p>Collectively all of the tests in a system, each making assertions, verify that the units of the system individually work as intended.</p>
<p>Even in the simplest cases, each unit of code generally requires at least two tests: one test to check positive results with valid inputs and another to check negative results with invalid input.</p>
<p>Most units will require more than two tests. It is best to test both positive and negative outcomes against a variety of inputs, strengthening the coverage of the test.</p>

<h2>Test Cases</h2>

<p>A test case is a collection of tests contained within one class that is designed to test related functionality. Often, a single test case tests a single class.</p>
<p>Continuing with the mathematics example, a test case might contain the following collection of test methods:</p>

```
[Test]
public function shouldAddTwoPosAndReturnPos() {
}
[Test]
public function shouldAddPosAndNegAndReturnPos() {
}
[Test]
public function shouldAddPosAndNegAndReturnNeg() {
}
[Test]
public function shouldAddTwoNegReturnNeg() {
}
[Test]
public function shouldReturnSamePosWhenAdd0() {
}
[Test]
public function shouldReturnSameNegWhenAdd0() {
}
```

<p>Again, all tests in a given case should be related, either by the fact that they test the same class or the same concept across multiple classes.</p>
<p>The test case may also specify the order of every test in a test case as well as exclude certain tests from running in specific circumstances. While unit tests may be ordered they should <b>never</b> depend on an order. In other words, if Test A <b>must</b> run before Test B, as Test A does some setup or precondition, you are no longer writing unit tests. Unit tests are isolated, and relationships are not a component of isolation.</p>

```
[Test(order=1)]
public function shouldReturnSamePosWhenAdd0() {
}
[Test(order=2)]
public function shouldReturnSameNegWhenAdd0() {
}
```

<p>As FlexUnit 4.x only executes methods marked with the [Test] metadata as tests, you can also add support methods for doing additional work in your class. This will become clearer as the course continues.</p>

<h2>Test Fixture</h2>

<p>The term <i>test fixture</i> refers to a well-known and fixed environment required to run a repeatable test. This environment, also referred to as a <i>test context</i>, is recreated before each test.</p>
<p>For example, if a given object must exist before your test can run, then that object is part of the test fixture.  A fixture contains everything that must be in a known state before the tests in the test case can be executed.</p>

```
[Test]
public function shouldBeBlueSky():void {
	var sky:Sky = new Sky();
	sky.color = "blue";
	assertTrue( sky.color == "blue" );
}
```

<p>In the example, the <code>assertTrue()</code> statement checks if the sky's color is blue. Notice that you must first have a Sky object before the value of its color can be tested. It is effectively a precondition to the test.</p>
<p>A fixture can create objects, set initial values, or perhaps even create substitute (you will learn to call these fake or mock) objects for use during testing. A well-formed test fixture can greatly decrease the time for adding new tests to a test case by factoring out code performed in each test to a common location.</p>
<p>Test cases should create all the elements required to create the fixture. No test case should ever reach outside of its class for objects instantiated elsewhere for use in its tests.</p> 

<h2>Test Suites</h2>

<p>A test suite is used to group test cases together for ease of handling. As your collection of test cases grows, it becomes more and more convenient to group these in a hierarchical fashion.</p>
<p>For example, all of your addition tests are in one test case. All of your subtraction tests might be in another. You can then create a suite which includes both of these cases. You can then instruct the testing framework to execute all tests in that suite.</p>
<p>Suites can also be included within other suites and can be run recursively from higher level suites. This usually results in single top-level suite that runs other suites, which can run suites or test cases of their own. This allows for ease of organization as the number of cases and suites increase.</p>

<h2>Walkthrough 1: Creating and Executing a Unit test</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Import the FlexUnit4Training.fxp file into Flash Builder.</li>
	<li>Write a single test method.</li>
	<li>Run a unit test case.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Start Flash Builder by choosing Start &#62; Programs &#62; Adobe &#62; Adobe Flash Builder.</p>
	</li>
	<li>
		<p>From the main menu of Flash Builder, choose File &#62; Import &#62; Flash Builder Project.   Flash Builder has the ability to import pre-existing projects packaged in the FXP format as a stand-alone file.</p>
	</li>
	<li>
		<p>In the Import Flash Builder Project dialog box that opens, click the first Browse button on the right of the screen. Navigate to the LocationContainingFXPFile/Unit 2/Start directory, and select the FlexUnit4Training.fxp file.</p>
		<p>The screen will change to show new Import method options with either "Import new copy of project" or "Overwrite existing project."</p>
	</li>
	<li>
		<p><b>If this is your first time opening the project:</b><br />
		   Choose "Import new copy of Project" and extract the project to your Flash Builder workspace. Making sure to replace "LocationContainingFXPFile" and "YourFlexWorkspace" with the location of the FXP file on your machine and your preferred directory for Flex projects (See Figure 1).</p>
		<p><b>If you have previously imported the FlexUnit4Training project:</b><br />
		   Choose "Overwrite existing project" and select the FlexUnit4Training project from the dropdown (See Figure 2).</p>
		<img alt='ImportFlexProject' id='shift' src='../images/unit2/image1.png' />
		<p class='caption' id='shift'>Figure 1: Importing a new project</p>
		<img alt='OverwriteFlexProject' id='shift' src='../images/unit2/image2.png' />
		<p class='caption' id='shift'>Figure 2: Overwriting an existing project</p>
		<p>Once the project has been imported, it should appear in the Package Explorer on the left.</p>
	</li>
	<li>
		<p>In the Package Explorer, expand the src folder's default package and double-click the FlexUnit4Training.mxml file to open it. The contents of this file will be explored in more detail in a future unit.</p>
		<img alt='PackageExplorer' id='shift' src='../images/unit2/image3.png' />
		<p class='caption' id='shift'>Figure 3: Opening files in the Package Explorer</p>
	</li>
	<li>
		<p>In the <code>&#60;fx:Script&#62;</code> block, you should see the following lines:</p>

```
import math.testcases.BasicCircleTest;
public function currentRunTestSuite():Array {
	var testsToRun:Array = new Array();
	testsToRun.push( BasicCircleTest );
	return testsToRun;
}
private function onCreationComplete():void {
	testRunner.runWithFlexUnit4Runner(currentRunTestSuite(),
"FlexUnit4Training");
}
```

</li>
	<li>
		<p>To open the <code>BasicCircleTest</code> class, you can either browse to it in the Package Explorer (test/math.testcases.BasicCircleTest), or you can move your mouse over the <code>BasicCircleTest</code> text in the line that reads <code>testsToRun.push( BasicCircleTest )</code>. Press control, when you see the <code>BasicCircleTest</code> turn blue, click on <code>BasicCircleTest</code>. Either way, this will open the <code>BasicCircleTest</code> class in Flash Builder.</p>
		<img alt='ControlClick' id='shift' src='../images/unit2/image4.png' />
		<p class='caption' id='shift'>Figure 4: Control Clicking BasicCircleTest</p>
		<p>The class should read as follows.</p>

```
package math.testcases {	
	public class BasicCircleTest {		
	}
}
```

</li>
	<li>
		<p>Add a new public function named <code>shouldReturnProvidedRadius()</code> to the class. The function needs to be marked with <code>[Test]</code> metadata, which is placed on the line just above the function.</p>

```
public class BasicCircleTest {		
	[Test]
	public function shouldReturnProvidedRadius():void {
	}
}
```

<p>This function is going to test a method of the <code>Circle</code> class. The <code>Circle</code> object is created by the <code>Circle</code> constructor which takes an origin argument of type <code>Point</code> and a radius argument of data type <code>Number</code>.</p>

```
Circle( origin:Point, radius:Number );
```

</li>
	<li>
		<p>Declare a variable named <code>circle</code> of type <code>Circle</code> in the <code>shouldReturnProvidedRadius()</code> function. This Circle should be instantiated with an origin of <code>(0, 0)</code> and a radius of <code>5</code>.</p>

```[Test]
public function shouldReturnProvidedRadius():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
}
```

<p>While you are typing <code>Circle</code>, Flash Builder will try to provide possible choices as you type. If you choose one of the items on the pop-up menu (or use the arrow keys and press Enter on the correct option), Flash Builder will complete the name for you and perform one other very important step: importing the class.</p>
		<p>If you choose one of the options on the pop-up menu, Flash Builder adds an import line just above the class definition. This line is an import statement that lets Flash Builder know where the class you are referencing resides. You can think of import statements as more or less the ActionScript equivalent of the namespaces you used in MXML:</p> 

```
import net.digitalprimates.math.Circle;
```

<p>and</p>

```
import flash.geom.Point;
```

<p>If you do not have these lines in your file, you have two options: You can place your cursor right after the closing e in Circle and t in Point and press Ctrl+Spacebar. This will cause Flash Builder to open the code-completion pop-up again. If there is only one matching option, Flash Builder automatically selects it and adds the import for you. Alternatively, you can just type the import statements just inside the package, outside of the class definition.</p>
	</li>
	<li>
		<p>Just below the circle instantiation, add a line that calls to the <code>assertEquals()</code> method with arguments <code>5</code> and <code>circle.radius</code>.</p>

```
[Test]
public function shouldReturnProvidedRadius():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	assertEquals( 5, circle.radius );
}
```

<p>If you did not use code completion, add the import statement for <code>org.flexunit.asserts.assertEquals</code> at this time. While you may be used to importing classes, <code>assertEquals()</code> is actually a package level function. These are functions that can be addressed directly without an associated class. While this concept may be new to many of you, it is actually used extensively in Flash Player with methods such as <code>trace()</code>, <code>getDefinitionByName()</code> and <code>setInterval()</code>.</p>
	</li>
	<li>
		<p>Save the BasicCircleTest.as file.</p>
	</li>
	<li>
	 	<p>Reopen the FlexUnit4Training.mxml file using the navigator view on the left.</p> 
	</li>
	<li>
		<p>Click on the run button in the upper toolbar as shown.</p>
		<img alt='RunButton' id='shift' src='../images/unit2/image5.png' />
		<p class='caption' id='shift'>Figure 5: The Flash Builder "Run" Button</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestPassed' id='shift' src='../images/unit2/image6.png' />
		<p class='caption' id='shift'>Figure 6: FlexUnit test passed</p>
	</li>		
</ol>

<h2>Summary</h2>

<ul>
	<li><p>There are many types of tests, including:</p></li>
	<ul>
		<li><p>Unit Tests</p></li>
		<li><p>Integration Tests</p></li>
		<li><p>Functional Tests</p></li>
		<li><p>Performance Tests</p></li>
	</ul>
	<li><p>Unit testing is about testing isolated blocks of code.</p></li>
	<li><p>FlexUnit 4 defines a test method with the [Test] metadata.</p></li>
	<li><p>Tests make one or more assertions.</p></li>
	<li><p>A class with one or more tests is called a Test Case.</p></li>
	<li><p>A Test Fixture includes all the elements needed to provide the correct environment for repeatable testing.</p></li>
	<li><p>A Test Suite is a collection of Test Cases.</p></li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-1.html">Unit 1 - Introducing FlexUnit 4.2</a></li>
    <li><a href="Unit-3.html">Unit 3 - FlexUnit Capabilities</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>