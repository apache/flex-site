Title:  Unit 6 - Working with the Test Fixture

<a href="../code/Unit6.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>Much like any significant amount of code that you develop, your tests will eventually begin to show signs of duplicate code. Fortunately, repeat operations can be factored into discrete methods allowing you to create an understandable test fixture. Instantiating objects, running methods, destroying objects, and loading data are all operations that can be factored into methods and classes with the help of FlexUnit 4.x features.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Use [Before] and [After] metadata to set up and tear down your test fixture</li>
	<li>Use [BeforeClass] and [AfterClass] metadata to set up and tear down portions of the fixture that persist across tests and cases</li>
</ul>

<h3>Topics</h3>
<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Setting up a fixture</li>
	<li>Refactoring tests to remove duplication</li>
	<li>Understand Before as an indication of cohesion</li>
	<li>The importance of cleaning up the fixture</li>
</ul>

<h2>Setting up the test fixture</h2>

<p>In the last few lessons you have briefly learned about the concept of a test fixture, which is the collection of all of the state required to run a test repeatedly. So far you have created that state in each test by creating objects and setting properties. Unfortunately, this leads to a fair amount of duplication when many tests share the same setup requirements.</p> 
<p>FlexUnit offers several ways to factor this repeated setup out into new methods that can be run to create your fixture.</p>

<h3>Before methods</h3>

<p>FlexUnit allows developers to mark any method inside of a test case with a special metadata tag named <code>[Before]</code>. Methods marked with <code>[Before]</code> metadata run before each test method in the test case class.</p>
<ul>
	<li>A class may contain any number of <code>[Before]</code> methods.</li>
	<li>Unless an order is specified, the order of multiple methods marked with <code>[Before]</code> is indeterminate.</li>
	<li>Methods must be public, accept no arguments and return void.</li>
	<li>To use, simply decorate the method with <code>[Before]</code> metadata.</li>
</ul>

<code><pre>[Before]
public function runMeBeforeEveryTest():void {
}</pre></code>

<h3>After methods</h3>

<p>The logical opposite of the <code>[Before]</code> metadata is the <code>[After]</code> metadata. Methods marked with <code>[After]</code> run after each test method in the test case class.</p>
<ul>
	<li>A class may contain any number of <code>[After]</code> methods.</li>
	<li>Unless an order is specified, the order of multiple methods marked with <code>[After]</code> is indeterminate.</li>
	<li>Methods must be public, accept no arguments and return void.</li>
	<li>To use, simply decorate the method with <code>[After]</code> metadata.</li>
</ul>

<code><pre>[After]
public function runMeAfterEveryTest():void {
}</pre></code>

<h3>Order of Execution</h3>

<p>As indicated above Before and After methods run before and after every test. Therefore, the execution of a method with three tests is indicated below:</p>

<code><pre>	[Before]
		[Test1]
	[After] 
	[Before]
		[Test2]
	[After] 
	[Before]
		[Test3]
	[After]</pre></code>

<p>The setup of your test fixture occurs before each test to ensure the test runs in isolation from others in the test case.</p>

<h2>Refactoring to remove duplication</h2>

<p>The methods decorated with <code>[Before]</code> and <code>[After]</code> can be used to remove duplicate code from tests. Once extracted to an independent method, this duplicated code no longer needs to be maintained in each test but rather it can be maintained once for all tests in the test case.</p>
<p>Ideally, the majority of your test fixture is established through the use of the Before methods, and destroyed through the use of the After methods. This is particularly important. For a test to truly be a unit test it must be isolated. The use of the Before and After methods ensure that a new test fixture is built, tested against and destroyed for each test.</p>

<h2>Walkthrough 1: Creating a Fixture for the Circle Tests</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Create <code>setMeUp()</code> and <code>tearMeDown()</code> functions for the test case.</li>
	<li>Remove circle instantiation from individual tests.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the BasicCircleTest.as file from the previous exercise.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt1.fxp project from the Unit 6/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>

		<h3><br />[Before] &#38; [After] metadata</h3>
	
	</li>
	<li>
		<p>Add a private variable with the name of <code>circle</code> and a data type of <code>Circle</code> to the class.</p>

		<code><pre>public class BasicCircleTest {		
	private static const TOLERANCE:Number = .0001;
	private var circle:Circle;
	...
}		</pre></code>

	</li>
	<li>
		<p>Add a public function named <code>setMeUp()</code> to the class. Mark the function with a <code>[Before]</code> metadata tag. This function will set the <code>circle</code> property to a new <code>Circle</code> instance with arguments <code>new Point( 0, 0 )</code> and <code>5</code>.</p>

		<code><pre>[Before]
public function setMeUp():void {
	circle = new Circle( new Point( 0, 0 ), 5 );
}		</pre></code>
		
		<p>Note, the name of the function is unimportant. It is only the Before metadata that makes this a Before method.</p>
	</li>
	<li>
		<p>Similarly, add another public function named <code>tearMeDown()</code>. In this case you are going to mark the function with an <code>[After]</code> metadata tag. This function will set the class <code>circle</code> variable to null.</p> 

		<code><pre>[After]
public function tearMeDown():void {
	circle = null;
}		</pre></code>

	</li>
	<li>
		<p>Remove the <code>circle</code> variable instantiations from each of the test methods. Using the first test as a model:</p>

		<code><pre>[Test]
public function shouldReturnProvidedRadius():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	assertEquals( 5, circle.radius );
}		</pre></code>
		
		<p>Becomes:</p>
		
		<code><pre>[Test]
public function shouldReturnProvidedRadius():void {
	assertEquals( 5, circle.radius );
}		</pre></code>
		
		<h3><br />Running the test case</h3>
	
	</li>
	<li>
		<p>After the instantiations have been removed, the test class should read as follows:</p>

		<code><pre>public class BasicCircleTest {	
	private static const TOLERANCE:Number = .0001;
	private var circle:Circle;

	[Before]
	public function setMeUp():void {
		circle = new Circle( new Point( 0, 0 ), 5 );
	}

	[After]
	public function tearMeDown():void {
		circle = null;
	}

	[Test]
	public function shouldReturnProvidedRadius():void {
		assertEquals( 5, circle.radius );
	}

	[Test]
	public function shouldComputeCorrectDiameter():void {
		assertEquals( 10, circle.diameter );
	}

	[Test]
	public function shouldReturnProvidedOrigin():void {
		assertEquals( 0, circle.origin.x );
		assertEquals( 0, circle.origin.y );
	}

	[Test]
	public function shouldReturnTrueForEqualCircle():void {
		var circle2:Circle = new Circle( new Point( 0, 0 ), 5 );
		
		assertTrue( circle.equals( circle2 ) );
	}

	[Test]
	public function shouldReturnFalseForUnequalOrigin():void {
		var circle2:Circle = new Circle( new Point( 0, 5 ), 5);
		
		assertFalse( circle.equals( circle2 ) );
	}

	[Test]
	public function shouldReturnFalseForUnequalRadius():void {
		var circle2:Circle = new Circle( new Point( 0, 0 ), 7);
		
		assertFalse( circle.equals( circle2 ) );
	}

	[Test]
	public function shouldGetTopPointOnCircle():void {
		var point:Point = circle.getPointOnCircle( 0 );
		
		assertThat( point, new CloseToPointMatcher ( new Point( 5, 0 ), TOLERANCE ) );
	}

	[Test]
	public function shouldGetBottomPointOnCircle():void {
		var point:Point = circle.getPointOnCircle( Math.PI );
		
		assertThat( point, new CloseToPointMatcher ( new Point( -5, 0 ), TOLERANCE ) );
	}

	[Test]
	public function shouldGetRightPointOnCircle():void {
		var point:Point = circle.getPointOnCircle( Math.PI/2 );
		
		assertThat( point, new CloseToPointMatcher ( new Point( 0, 5 ), TOLERANCE ) );
	}

	[Test]
	public function shouldGetLeftPointOnCircle():void {
		var point:Point = circle.getPointOnCircle( (3*Math.PI)/2 );
		
		assertThat( point, new CloseToPointMatcher ( new Point( 0, -5 ), TOLERANCE ) );
	}

	[Test(expects="RangeError")]
	public function shouldThrowRangeError():void {
		var someCircle:Circle = new Circle( new Point( 10, 10 ), -5 );
	}
}		</pre></code>

		<p>Other circles, such as <code>circle2</code> are still instantiated in its respective methods, because it is unique in each case.</p>
	</li>
	<li>
		<p>Save BasicCircleTest.as.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>

		<img alt='TestsPassed' id='shift' src='../images/unit6/image1.png' />
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed</p>
	</li>
</ol>

<h2>Understanding Before as an indication of cohesion</h2>

<p>In general, it is a good practice to group similar tests together. One advantage gained by using Before and After methods is that it quickly becomes apparent when tests do not share the same test fixture.</p> 
<p>If you find yourself with methods that need significantly different setup, or are not using much of the setup created in the Before methods, then it is likely that your tests are grouped in a way that is not particularly cohesive.</p> 
<p>If your methods successfully share the test fixture, then each new method added to a case requires less duplicate code and hence less effort. Ideally, your tests become a line or two of code and an assertion.</p>

<h2>The importance of cleaning up the fixture</h2>

<p>Methods marked with <code>[After]</code> are generally intended to mirror the instantiations or creations of the <code>[Before]</code> method. They are responsible for destroying the test fixture to ensure open connections are closed, references and listeners are removed, and objects are made available for garbage collection.</p>
<p>Destroying the fixture correctly lowers the overhead of the test run by ensuring memory leaks are resolved and objects are appropriately collected. Left uncollected during large test runs, this additional overhead can become significant quickly.</p>

<h2>BeforeClass and AfterClass Metadata</h2>

<p>In rare cases, you may wish to create a portion of the test fixture that remains constant or maintains desired state across all tests. For example, perhaps each of your tests needs to read data from the same large XML file. Rather than reload and reparse this file in each of your [Begin] methods, you might decide to do this once for all tests in a given test case or suite.</p>
<p>FlexUnit allows you to specify static methods to run before the test case (or suite) is instantiated and after the execution is complete. These methods allow you to perform operations that should only occur once per case or suite execution, as opposed to the test by test manipulation that [Before] and [After] offer.</p>
<p>These methods, marked with [BeforeClass] and [AfterClass] metadata, are often used to facilitate tests that connect to a live system, such as a database. However, it is important to note a few pitfalls of this approach.</p> 
<p>First, as soon as you use BeforeClass or AfterClass, your tests are no longer completely independent of each other. A side effect of one test has the potential to manipulate the test fixture, creating a situation where the order of tests now influences their success or failure. Therefore, it is best to try to limit items created in BeforeClass to items that will be consumed or read and avoid items which will be manipulated in any way.</p>
<p>Second, if you do find yourself heavily relying upon items created in this way, you may have moved into the territory of integration tests and away from unit tests. Remember, a unit is the smallest piece of testable code. The combination of your code, the network stack, an application server, a database connection, and a database server rarely qualifies.</p>
<p>As items created in BeforeClass are created before the test case constructor is called, they must be static. Unlike items created in Before which have the possibility of being garbage collected, these static items will not. Therefore, the cleanup performed by the AfterClass methods is extremely important.</p>
<p>Static functions marked with [BeforeClass] and [AfterClass] can exist on a test case or a test suite and are run once per execution. The method execution of a three-test hierarchy is illustrated below:</p>

<code><pre>[BeforeClass]
	[Before]
		[Test]
	[After] 
	[Before]
		[Test]
	[After] 
	[Before]
		[Test]
	[After] 
[AfterClass]</pre></code>

<h2>Walkthrough 2: Using BeforeClass and AfterClass</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Use <code>[BeforeClass]</code> and <code>[AfterClass]</code> to demonstrate test hierarchy.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the BasicCircleTest.as file from the previous exercise.</p> 
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt2.fxp project from the Unit 6/start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>

		<h3><br />Using [BeforeClass] &#38; [AfterClass] metadata</h3>
		
	</li>
	<li>
		<p>Declare a public static function named <code>setUpClass()</code>, mark it with <code>[BeforeClass]</code> metadata. In the function body, add a trace statement that merely states "Before Class."</p>

		<code><pre>[BeforeClass]
public static function setUpClass():void {
	trace( "Before Class" );
}		</pre></code>

	</li>
	<li>
		<p>Similarly, declare another public static function named <code>tearDownClass()</code>, mark it with <code>[AfterClass]</code> metadata.</p> 

		<code><pre>[AfterClass]
public static function tearDownClass():void {
	trace( "After Class" );
}		</pre></code>
		
		<h3><br />Visualizing test order</h3>
		
	</li>
	<li>
		<p>A similar trace statement should be added to the existing <code>setMeUp()</code> and <code>tearMeDown()</code> methods.</p>

		<code><pre>[Before]
public function setMeUp():void {
	circle = new Circle( new Point( 0, 0 ), 5 );
	trace( "Before Test" );
}

[After]
public function tearMeDown():void {
	circle = null;
	trace( "After Test" );
}		</pre></code>

	</li>
	<li>
		<p>Finally, add a trace statement to every test method on the first line.</p>
		
		<code><pre>[Test]
public function shouldReturnProvidedRadius():void {
	trace( "Test" );
	assertEquals( 5, circle.radius );
}		</pre></code>
		
	</li>
	<li>
		<p>Save BasicCircleTest.as</p>
	</li>
	<li>
		<p>Run FlexUnit4Training.mxml file in Debug Mode.</p> 

 		<img alt='DebugMode' id='shift' src='../images/unit6/image2.png' />
		<p class='caption' id='shift'>Figure 1: Running in Debug Mode</p>
	</li>
	<li>
		<p>Nothing is going to change about how the tests display in the browser, in this walkthrough we are interested in Flash Builder's Console View, which is usually located at the bottom of the screen.</p>

		<img alt='ConsoleTab' id='shift' src='../images/unit6/image3.png' />
		<p class='caption' id='shift'>Figure 2: Console in the tab navigator</p>
	</li>
	<li>
		<p>Take a look at the console view; if all the functions ran to completion, you should see the following show up in order.</p>
		
		<code><pre>
Before Class
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
Before Test
Test
After Test
After Class
		</pre></code>
		
	</li>
	<li>
		<p>Based on the exhibited call hierarchy, you should be able to tell that the <code>setUpClass()</code> and <code>tearDownClass()</code> functions are being called before the first test method and after the last. Meanwhile, the <code>setMeUp()</code> and <code>tearMeDown()</code> methods are being called respectively before and after every test.</p>
	</li>
</ol>

<h2>Summary</h2>

<ul>
	<li><p>Test fixture metadata:</p></li>
	<ul>
		<li><p>[Before], marks a method that runs before each test.</p></li>
		<li><p>[After], marks a method that runs after each test.</p></li>
		<li><p>[BeforeClass], marks a method that is run before the test case or suite is created and run.</p></li>
		<li><p>[AfterClass], marks a method that is run after the test case or suite has run completely.</p></li>
	</ul>
	<li><p>[Before] and [BeforeClass] methods can indicate test case cohesion, because tests should be grouped together based on their similarity.</p></li>
	<li><p>[After] and [AfterClass] methods are useful for cleaning up the fixture and minimizing overhead.</p></li>
	<li><p>These methods, when used correctly, allow you to factor duplicated code out of the test methods.</p></li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-5.html">Unit 5 - Developing Static Tests</a></li>
    <li><a href="Unit-7.html">Unit 7 - Using Suites</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>