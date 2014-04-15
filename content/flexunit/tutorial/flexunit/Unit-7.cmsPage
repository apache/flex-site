Title:  Unit 7 - Using Suites

<a href="../code/Unit7.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>As you learned in the last unit, test cases are groups of tests which share a common test fixture. Inherently this means as the number of tests in any project grows, there will become a need for a significant number of test cases which needed to organized and executed.</p>
<p>Suites are the organizational tool used to establish a reasonable scheme for organizing these test cases, allowing you to create a hierarchy of tests that can be executed as one object.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Create new test case files</li>
	<li>Create new test suite files</li>
	<li>Apply [RunWith] metadata in test suites</li>
	<li>Refactor existing cases for better organization and hierarchy</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Writing test suites</li>
	<li>Creating a suite</li>
	<li>Refactoring test cases within suites</li>
	<li>Understanding hierarchy and test result reporting</li>
	<li>Discuss directory structure and approach for new projects</li>
</ul>

<h2>Writing test suites</h2>

<p>In previous lessons, we have run several test methods, but they have always been contained within a single test case. Given the nature of test fixtures, almost any project is going to require more than a single test case. Many production applications run thousands of different tests, which may make up hundreds of different cases. Remembering the functions in each test case and knowing which to run in a given situation would be difficult, if not impossible.</p>
<p>To keep all of our test cases organized, and to allow us to run these tests as a group, we use a special type of class called a Suite. A test suite is primarily a collection of test cases that will be executed together. To allow further organization and a hierarchical organization, a suite may also contain other suites.</p>
<p>The suite runner is org.flexunit.runners.Suite. This runner interrogates a class looking for each public variable. It determines the type (Class) of the variable and attempts to run that class.</p>
<p>While it is possible to sort the order of suites and test cases, by default the order in which they execute is indeterminate and not governed by the order of their definition in the suite class.</p>

<code><pre>[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class SampleSuite {
	public var testCase:TestCase;
	public var anotherTestCase:AnotherTestCase;
	public var yetAnotherTestCase:YetAnotherTestCase;
	public var anotherSuite:AnotherSuite;
}</pre></code>

<h2>Walkthrough 1: Creating a new case for the Constructor Test</h2>

<p>In this walkthrough you will reorganize your test cases and prepare to create a new suite. You will perform the following tasks:</p>
<ul>
	<li>Create a new case named CircleConstructorTest.</li>
	<li>Move the <code>shouldThrowRangeError()</code> method out of the BasicCircleTest case into the CircleConstructorTest case.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the BasicCircleTest.as file from the previous exercise.</p>
	</li>
	<li>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt1.fxp project from the Unit 7/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		
		<h3><br />Creating the CircleConstructorTest.as file</h3>
		
	</li>
	<li>
		<p>In Flash Builder's Package Explorer, select the math.testcases package in which your BasicCircleTest.as file is located. Right click on the package and select New &#62; ActionScript Class as shown below:</p>

		<img alt='PackageExplorer' id='shift' src='../images/unit7/image1.png' />
		<p class='caption' id='shift'>Figure 1: Package Explorer, creating new objects</p>
	</li>
	<li>
		<p>Set the Package to math.testcases and the Name to CircleConstructorTest, and leave all other fields with the defaults. Click Finish to create the file.</p>

		<img alt='NewActionScriptClass' id='shift' src='../images/unit7/image2.png' /> 
		<p class='caption' id='shift'>Figure 2: New ActionScript Class window</p>
	</li>
	<li>
		<p>Remove the automatically created constructor from the new ActionScript class, so that it reads as shown.</p>

		<code><pre>package math.testcases {
	public class CircleConstructorTest {		
	}
}		</pre></code>

	</li>
	<li>
		<p>Highlight and cut the <code>shouldThrowRangeError()</code> method from the BasicCircleTest.as file and paste it into the CircleConstructorTest class.</p>

		<code><pre>public class CircleConstructorTest {		
	[Test(expects="RangeError")]
	public function shouldThrowRangeError():void {
		trace("Test");
		var someCircle:Circle = 
			new Circle( new Point( 10, 10 ), -5 );
	}
}
		</pre></code>
		
		<p>Because you cut and pasted the above function into a new class you will need to manually add the appropriate import statements.</p>
	</li>
	<li>
		<p>Add the import statements for <code>flash.geom.Point</code> and <code>net.digitalprimates.math.Circle</code> to the class.</p>
	</li>
	<li>
		<p>Remove the line that reads <code>trace("Test");</code> from the <code>shouldThrowRangeError()</code> method.</p>
	</li>
	<li>
		<p>Save the CircleConstructorTest.as and the BasicCircleTest.as files.</p>

		<code><pre>package flexUnitTests.cases {
	import flash.geom.Point;
	
	import net.digitalprimates.math.Circle;

	public class CircleConstructorTest {
		[Test(expects="RangeError")]
		public function shouldThrowRangeError():void {
			var someCircle:Circle = 
                          new Circle( new Point( 10, 10 ), -5 );
		}
	}
}		</pre></code>

	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>

		<img alt='FlexUnitTestsPassed' id='shift' src='../images/unit7/image3.png' /> 
		<p class='caption' id='shift'>Figure 3: FlexUnit tests passed</p>
		
		<p>Notice that only ten tests were run. Although CircleConstructorTest case has been created, the test runner is unaware of the new test case, and therefore it does not run. In the FlexUnit4Training.mxml, which was generated by Flash Builder, the BasicCircleTest case is the only set of tests pushed into the <code>testsToRun</code> array.</p> 
		<p>In Walkthrough 2, you will create a test suite in order to run both test cases as well as others you will create.</p>
	</li>
</ol>

<h2>Creating a suite</h2>

<p>Suites are simply ActionScript class files with public properties. The class is decorated with two very important pieces of metadata. First, the [Suite] tag, which tells Flash Builder and FlexUnit that this class is intended to be a test suite.</p> 
<p>Second, the [RunWith] metadata tells FlexUnit to use the org.flexunit.runners.Suite class to execute this class. You will learn more about extensibility and the [RunWith] metadata later in this unit.</p>

<code><pre>[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class mySuite</pre></code>

<h3>Test cases within suites</h3>

<p>Within a test suite, all the test cases and other suites are represented by public properties within the class. The sample suite below includes three test cases and additional suite.</p>

<code><pre>[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class MySuite {
	public var testCase:TestCase;
	public var anotherTestCase:AnotherTestCase;
	public var yetAnotherTestCase:YetAnotherTestCase;
	public var anotherSuite:AnotherSuite;
}</pre></code>

<p>The <code>anotherSuite</code> variable is another suite that can contain any number of tests and suites. There is no limit to the hierarchy of test suites and each level of suite is only aware of its immediate children</p>	
<p>An empty suite (one with no tests or no public tests or suites) will throw an <code>InitializationError</code>.</p>

<h2>Understanding the RunWith metadata</h2>

<p>A primary goal of FlexUnit was extensibility based on unknown future requirements. While FlexUnit 4 natively includes support for FlexUnit 4.x, FlexUnit .9 and Fluint 1.0 style tests, it was imperative to provide developers an easy way to accommodate new functionality without restricting their freedom to FlexUnit's concept of a test. The [RunWith] metadata is one of the primary means of accomplishing this goal.</p>
<p>When the [RunWith] metadata is used on a class file, it overrides all internal logic that FlexUnit uses to determine the appropriate type of test. Instead it specifies a class that implements the IRunner interface which should be used to execute the contents of this file.</p>
<p>FlexUnit simply instantiates the specified runner and hands over all control until the runner is complete. In this way new test runners can be developed that act and work in radically different ways than the standard components but will integrate cleanly and easily.</p>
<p>The suite runner uses this technique to create test suites. As you have seen so far, the standard FlexUnit runner looks for methods marked with the [Test] metadata and executes each. However, suites are radically different. They are simply a class of properties wherein the type specifies the case or suite. In this case the [RunWith] metadata indicates that the Suite class understands how to execute the contents of this class, facilitating the concept of suites.</p>
<p>At every level of test, FlexUnit re-performs this same logic. This means that different cases and suites can use different runners while all co-existing in the same project and top-level suite.</p>
<p>Support for new testing environments can be added by creating new custom runners and using the [RunWith] metadata with the new runner. The suite runner is only one example of the provided runners with FlexUnit 4.x.</p>

<h2>Walkthrough 2: Creating a Test Suite</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Create a test suite to run the two test cases for the Circle class.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the testcases package from the previous exercise.</p> 
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt2.fxp project from the Unit 7/ Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		
		<h3><br />Create a test suite</h3>
		
	</li>
	<li>
		<p>Create an ActionScript class named CircleSuite in the testcases package. Do not specify a superclass or interfaces.</p> 
		<p>The Package Explorer should look like this after the suite has been created:</p>

		<img alt='PackageDirectoryStructure' id='shift' src='../images/unit7/image4.png' />
		<p class='caption' id='shift'>Figure 1: Package directory structure after the suite has been created</p>	
	</li>
	<li>
		<p>Remove the automatically created constructor from the new ActionScript class. Mark the class with <code>[Suite]</code> and <code>[RunWith(" org.flexunit.runners.Suite")]</code> metadata tags, which should be placed above the class declaration.</p>

		<code><pre>[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class CircleSuite {
...
}		</pre></code>
		
	</li>
	<li>
		<p>Add a public variable named <code>test1</code> of type <code>BasicCircleTest</code> and another public variable named <code>test2</code> of type <code>CircleConstructorTest</code> to the class.</p>

		<code><pre>[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class CircleSuite {
	public var test1:BasicCircleTest;
	public var test2:CircleConstructorTest;
}		</pre></code>

	</li>
	<li>
		<p>Open the FlexUnit4Training.mxml file.</p>
	</li>
	<li>
		<p>Look under the <code>&#60;fx:Script&#62;</code> block.</p>
		<p>Replace this line:</p>
		<code><pre>testsToRun.push( BasicCircleTest );</pre></code>
		<p>with this line:</p>
		<code><pre>testsToRun.push( CircleSuite );</pre></code>
		<p>If you did not use code completion, add the import for testcases.CircleSuite at this time.</p>
	</li>
	<li>
		<p>Save FlexUnit4Training.mxml.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>

		<img alt='TestsPassed' id='shift' src='../images/unit7/image5.png' /> 
		<p class='caption' id='shift'>Figure 2: FlexUnit tests passed</p>
	</li>
</ol>

<h2>Understanding hierarchy</h2>

<p>Suites allow for the creation of a hierarchy that can be extremely useful when dealing with large projects. The nature of suites or cases would allow you to execute a particular case in the hierarchy by itself, or execute it as a part of any of the suites where it is contained within. For example, you could execute Suite 1 to run the cases beneath it, or execute Suite 0 to run all of Suite 1 plus additional cases.</p>
<img alt='Hierarchy' src='../images/unit7/hierarchy.png' />
<p>Test results are not organized by suite inside of Flash Builder premium, which simply sees all of the cases as a flat list. However, it does allow you to see the full package name which still provides some understanding of hierarchy.</p>
<img alt='FlexUnitResults' src='../images/unit7/image6.png' />

<h2>Possible directory structures</h2>

<p>The unit test package structure for a project should mirror the suite hierarchy, which, in a perfect world, should mirror the hierarchy of the classes being tested.</p> 
<p>While there are no rules for how to organize your test cases, the following information can be helpful.</p>
<ol>
	<li>Think of the organization in terms of an outline. Each topic and subtopic in the outline gets a new package, recursively.</li>
	<ol type='a'>
		<li>Just like an outline shouldn't get a subtopic if there is only one item inside of it, do not create a package for just one case.</li>
		<li>Do not be afraid of making the packages deep with fewer cases in each.</li>
	</ol>
	<li>Each time you create a new package, the package should automatically get a test suite to organize the child cases and suites.</li>
	<li>Avoid reach down, meaning that a Suite should only include cases in its own package.</li>
	<li>A suite may include other suites from any package one level below.</li>
</ol>
<p>Take the family structure presented, for example.</p>
<img alt='TestStructure' src='../images/unit7/image7.png' />
<p>The test structure creates test for a nuclear family. The top level package is testcases, which contains the FamilySuite.as file. Because this application objectifies the nuclear family, the FamilySuite.as file can be arranged accordingly.</p>

<code><pre>import tests.children.ChildrenSuite;
import tests.father.FatherSuite;
import tests.mother.MotherSuite;

[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class FamilySuite {		
	public var fatherSuite:FatherSuite;
	public var motherSuite:MotherSuite;
	public var childrenSuite:ChildrenSuite;
}</pre></code>

<p>This is a valid suite despite the fact that it only contains other suites and does not directly contain any test cases.</p>
<ul> 
	<li><p>The <code>FatherSuite</code> may include a <code>FatherCase</code>, which is a case specifically for testing the Father object, as well as cases, or other suites, to test items within the <code>tests.father.parents</code> package and the <code>tests.father.siblings</code> package.</p></li>
	<li><p>The <code>MotherSuite</code> includes the <code>MotherCase</code> as well as those cases within the <code>tests.mother.parents</code> package, because the Mother has only one sibling, TwinSisterCase is included in the mother package.</p></li>
	<li><p>The <code>OldestSonSuite</code> includes the <code>OldestSonCase</code> as well as the <code>WifeCase</code> and an empty package named children.</p></li>
	<li><p>Finally <code>MiddleDaughterCase</code> and <code>YoungestDaughterCase</code> do not require a separate package or suite, because all of their family members are represented in the available test cases.</p></li>
</ul>
<p>The important thing to note is that the model for organization is based on the actual entity being tested. We could have easily chosen a father-centric model for organization, one where all cases and suites extend in terms of their relationship to the father. In this case, the family is being tested, and the suites and cases are organized as such.</p>
<p>The architecture allows for naming consistency within different packages. Many families have two sets of Grandparents. Fortunately, both the father's parents and the mother's parents can use the names Grandpa.as and Grandma.as for their class files, and ParentsSuite for their suite files.</p>
<img alt='NamingConsistency' src='../images/unit7/image8.png' />
<p>Also, this organization allows for extensibility. The oldestson package contains an empty package named children, which we can assume is eventually going to contain test cases. If we were to include cousins, for instance, we would want to make suites for the siblings and corresponding packages for them and their children.</p>
<img alt='EmptyChildrenPackage' src='../images/unit7/image9.png' />
<p>Although Flash Builder makes it fairly easy to reorganize class files and directory structure, it is ideal to plan out the application ahead of time, and use a structure that brings organization and consistency to your testing.</p>

<h2>Summary</h2>
<ul>
	<li><p>Test suites are used to run multiple FlexUnit cases or suites.</p></li>
	<li><p>Tests should be refactored into new cases when:</p></li>
	<ul>
		<li><p>They require different fixture</p></li>
		<li><p>They require different inputs (i.e. valid vs. invalid)</p></li>
	</ul>
	<li><p><code>[RunWith= ""]</code> metadata can be used to run suites, FlexUnit .9 tests, Fluint 1.x tests and other developer-provided runners.</p></li> 
	<li><p>Test package hierarchy should ideally reflect the package hierarchy of the project under test.</p></li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-6.html">Unit 6 - Working with the Test Fixture</a></li>
    <li><a href="Unit-8.html">Unit 8 - FlexUnit Theories</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>