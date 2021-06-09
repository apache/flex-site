Title:  Unit 8 - FlexUnit Theories


<a href="../code/Unit4.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>Theories are a tool for testing a class against a potentially infinite set of data points. While theories are a powerful concept, they must work in conjunction with static tests to ensure proper functionality.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Create theories</li>
	<li>Create theory data points</li>
	<li>Use assumptions in your theories</li>
	<li>Use complex objects with theories</li>
	<li>Use complex objects as data points</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Understand the use for data points</li>
	<li>Understanding triangulation of test cases</li>
	<li>Creating a theory</li>
	<li>Creating data points</li>
	<li>Understanding assumptions</li>
	<li>Understanding the theory success and failure model</li>
	<li>Using complex objects with theories</li>
	<li>Using the constructor of the TestCase</li>
</ul>

<h2>Understanding triangulation of test cases</h2>

<p>When testing formulas, there are a potentially infinite number of values that may be given and return an expected result. It is impossible in these cases to test all possible values that could be passed to a test case.</p> 
<p>Testing a single case is fairly weak, because any formula could return a hard-coded value. There is very little assurance in a single trial of anything. Likewise, a single test case is just slightly better than not testing at all.</p>
<p>If a test succeeds in two cases with two different values, already it has exponentially more assurance. If a test succeeds three or more times with three or more values, for each trial added it becomes substantially easier to trust the functionality being tested.</p> 
<p>A small range of values is acceptable. Granted, it does not cover every case, but it does give you a substantial degree of assurance. A small range of values can also include all the types of values that could be problematic. For instance:</p>

<code><pre>public function absoluteValue( value:int ):int {
	if ( value &#60; 0 ) {
		return value * -1;
	} else {
		return value;
	}
}</pre></code>

<p>A simple method like the one presented above should be tested with at least five values: Positive integers, negative integers, 0, NaN, Infinity. That kind of small combination is fairly standard for arithmetic functions, but sometimes it becomes more complicated, particularly when float types are involved in the calculation.</p> 
<p>While you may not be able to test every case, the more potential values that can be passed through the method to more assurance you have that the method does indeed function directly. We call this concept triangulation.</p>

<h2>Understanding Theories</h2>

<p>A FlexUnit theory is a method marked with the [Theory] metadata. Unlike the test methods you have worked with so far, theory methods can have parameters. Theory methods will be called multiple times with different data points, however, much like a mathematical theory; they are either valid or invalid, there is no sometimes.</p> 
<p>Any one case that fails disproves the whole theory. Therefore any one time the theory method is called when it fails marks the entire test as a failure.</p>
<p>A simple theory method:</p>

<code><pre>[Theory]
public function testTheory( value1:Number, value2:Number ):void</pre></code>

<h2>Understanding the use case for data points</h2>

<p>A test like the one in the previous section relies upon good data points to effectively triangulate. The tests you have used so far in this course have been statically coded and passed values to test for functionality. While that works for a small number of tests, it becomes increasingly more difficult to write and maintain as the number of tests and data points grow.</p>
<p>When attempting to triangulate a method, you need to be able to quickly create and add to a vast set of data points which will be provided to the test. In FlexUnit 4.x two special metadata tags named [DataPoint] and [DataPoints] can decorate data to indicate that it should be provided to the available tests as potential data points.</p>

<h2>Creating data points</h2>

<p>A data point is a single variable, or function that returns a value, which will be passed as an argument to a test for testing. A data point:</p>
<ul>
	<li>Must be defined as static</li>
	<li>Can be coded statically or be the result of a static method call</li>
</ul>
<p>For Instance:</p>

<code><pre>[DataPoint]
public static var value1:int = 10;</pre></code>

<p>Data points are an array of variables, or a function that returns an array, used as arguments to a theory. Data points allow you to quickly specify many values that will be passed to a single theory.</p>
<ul>
	<li>In addition to being decorated with the <code>[DataPoints]</code> metadata, must be decorated with <code>[ArrayElementType("TYPE")]</code> specifying the type of the array elements.</li>
	<li>Must be static</li>
	<li>Can be coded statically or be the result of a static method call</li>
</ul>
<p>For instance:</p>

<code><pre>[DataPoints]
[ArrayElementType("String")]
public static var stringValues:Array = ["one","two","three" ];</pre></code>

<p>The ArrayElementType metadata describes the type of data in the Array to the theories in this class.</p>

<h2>Creating theories</h2>

<p>Theories are written to test a small function or calculation over a potentially large set of data. Using theories with a range of data, you build assurance that the theory is actually performing the calculation as opposed to just returning the expected result.</p>
<p>Some notes on theories:</p>
<ul>
	<li>They are decorated with the <code>[Theory]</code> metadata</li>
	<li>They can take parameters</li>
	<li>Accepts parameters marked with <code>[DataPoint]</code> and <code>[DataPoints]</code> metadata</li>
	<li>They run with a special Theory runner</li>
</ul>

<code><pre>[RunWith("org.flexunit.experimental.theories.Theories")]
public class MyTheoryTest {
}</pre></code>

<p>Theories run with all matching data points. If any combination of <code>Datapoints</code> fail, the theory fails.</p> 

<code><pre>[DataPoints]
[ArrayElementType("Number")]
public static var radii:Array = [ 1, 2, 3, 4 ];

[Theory]
public function testTheory( value1:Number, value2:Number ):void</pre></code>

<p>This theory takes two parameters. All <code>Datapoints</code> referenced with the data type integer will be passed into each of these values for every possible combination.</p> 
<p>Test process:</p>

<code><pre>testTheory( 1, 1 )
testTheory( 1, 2 )
testTheory( 1, 3 )
...
testTheory( 4, 3 )
testTheory( 4, 4 )</pre></code>

<h2>Discussion on data typing and conversion</h2>

<p>Marking data points with the <code>[ArrayElementType("Type")]</code> metadata ensures that only the desired input type is contained within the collection. Additionally, it makes sure that these values are passed in wherever a parameter of the specified type is used in a theory.</p>
<p>The following theory takes two number inputs and a string, but there is only a single collection of numbers and a single collection of strings within the class.</p>

```
[DataPoints]
[ArrayElementType("Number")]
public static var numbers:Array = [ 1, 2, 3, 4, 5 ];

[DataPoints]
[ArrayElementType("String")]
public static var strings:Array = [ "Mike", "Tom", "Bob", "Cindy" ];

[Theory]
public function testNamesAndNumbers( name:String, numberOne:Number, numberTwo:Number ):void {
	assertTrue( name.length > 0 );
	assertTrue( numberOne > 0 );
	assertTrue( numberTwo > 0 );
	assertTrue( numberOne + numberTwo > 0 );
	assertTrue( numberOne + numberTwo + name.length > 0 );
}
```

<p>Numbers from the number array are used in the numberOne and numberTwo parameters, and the array of strings is used for the name parameter. The theory runs with all possible input combinations.</p>

<code><pre>testNamesAndNumbers( "Mike", 1, 1 )
testNamesAndNumbers( "Mike", 1, 2 ) 
testNamesAndNumbers( "Mike", 1, 3 ) 
...
testNamesAndNumbers( "Cindy", 5, 4 ) 
testNamesAndNumbers( "Cindy", 5, 5 )</pre></code>

<h2>Walkthrough 1: Creating a Circle Theory</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Create a new theory case for the Circle class.</li>
	<li>Create a new theory to test Circle radii.</li>
	<li>Create an array of parameterized data.</li>
	<li>Add the CircleTheory case to the CircleSuite.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Select the math.testcases package from the previous exercise. Create a new class in the math.testcases package named CircleTheory.as. This class has no superclass or interfaces.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt1.fxp project from the Unit 8/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Create the CircleTheory class</h3>
		<p>After the class has been created, the package directory should appear as follows:</p>
		<img alt='PackageDeliveryStructure' id='shift' src='../images/unit8/image1.png' />
		<p class='caption' id='shift'>Figure 1: Package directory structure</p>
	</li>
	<li>
		<p>Mark the new class with <code>[RunWith("org.flexunit.experimental.theories.Theories")]</code> metadata, which should be placed just above the class definition.</p>
		<code><pre>[RunWith("org.flexunit.experimental.theories.Theories")]
public class CircleTheory {
...
}		</pre></code>
		<h3><br />Creating theories</h3>
	</li>
	<li>
		<p>Create a new public function named <code>shouldShowAllRadiiEqual()</code> with a parameter named <code>radius</code> of data type <code>Number</code>. Mark the function with <code>[Theory]</code> metadata:</p>
		<code><pre>[Theory]
public function shouldShowAllRadiiEqual( radius:Number ):void {
}		</pre></code>
	</li>
	<li>
		<p>Add a variable named <code>circle</code> of type <code>Circle</code> to the <code>shouldShowAllRadiiEqual()</code> method. Instantiate circle with an origin at <code>(0, 0)</code> and the <code>radius</code> parameter passed in as its radius.</p>
		<code><pre>[Theory]
public function shouldShowAllRadiiEqual( radius:Number ):void {
	var circle:Circle = new Circle( new Point( 0, 0 ), radius );
}		</pre></code>
		<p>If you did not use code-completion, add the imports for net.digitalprimates.math.Circle and flash.geom.Point at this time.</p> 
	</li>
	<li>
		<p>Add a call to the <code>assertEquals()</code> method. Assert that the <code>circle.radius</code> is equal to the <code>radius</code> parameter.</p>
		<code><pre>[Theory]
public function shouldShowAllRadiiEqual( radius:Number ):void {
	var circle:Circle = new Circle( new Point( 0, 0 ), radius );
	assertEquals( radius, circle.radius );
}		</pre></code>
		<p>If you did not use code-completion, add an import for org.flexunit.asserts.assertEquals at this time.</p>
	</li>
	<li>
		<p>Add a public static array to the class. Fill it with a variety of positive integer values. Here is an example:</p>
		<code><pre>public static var radii:Array = [ 1,2,3,4,5,6,7,8,9,10 ];</pre></code>
	</li>
	<li>
		<p>Mark the array with two lines of metadata, <code>[DataPoints]</code> and <code>[ArrayElementType("Number")]</code>.</p>
		<code><pre>[DataPoints]
[ArrayElementType("Number")]
public static var radii:Array = [ 1,2,3,4,5,6,7,8,9,10 ];</pre></code>
	</li>
	<li>
		<p>Save CircleTheory.as.</p>
		<h3><br />Adding theories to your test suite</h3>
	</li>
	<li>
		<p>Open the CircleSuite.as file within the math.testcases package. Add a new public variable named <code>test3</code> with a type of <code>CircleTheory</code>.</p>
		<code><pre>[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class CircleSuite {
	public var test1:BasicCircleTest;
	public var test2:CircleConstructorTest;
	public var test3:CircleTheory;
}		</pre></code>
		<p>If you did not use code-completion, add the import for math.testcases.CircleTheory at this time.</p>
	</li>
	<li>
		<p>Save the CircleSuite.as file.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='12UnitsPassed' id='shift' src='../images/unit8/image2.png' /> 
		<p class='caption' id='shift'>Figure 2: FlexUnit tests passed</p>
	</li>
</ol>

<h2>Understanding Assumptions</h2>

<p>Assumptions are used in conjunction with theories to limit acceptable data points. Assumptions allow theories to setup basic constraints and limitations for the methods and formulae being tested.</p> 
<p>Some notes on assumptions:</p>
<ul>
	<li>Assumptions use Hamcrest matchers</li>
	<li>If an assumption fails, the theory will advance to the next set of data points</li>
	<li>If no <code>Datapoint</code> sets pass the assumptions the test is marked as a failure</li>
	<li>Assumptions still require an assert or expectation that tests the result</li>
	<li>For instance</li>
</ul>

<code><pre>assumeThat( value, greaterThan(0) );</pre></code>

<p>If the parameter is greater than 0, the assumption passes and the test moves onto its next line. If the parameter value is not greater than 0 the assumption fails and the runner will move on to the next data point without running any other lines of this test. Even though the assumption fails for values under 0, the test does not fail or throw an error, because those data points have been essentially marked as invalid for the test theory.</p>

<h2>Walkthrough 2: Adding an assumption</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Add invalid data to theory parameters.</li>
	<li>Create an assumption that handles invalid data.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the CircleTheory.as file from the previous exercise.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt2.fxp project from the Unit8/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Adding invalid values to your data points</h3>	
	</li>
	<li>
		<p>Add a single negative value to the beginning of the class's radii array. Here is an example:</p>
		<code><pre>public static var radii:Array = [ -5,1,2,3,4,5,6,7,8,9,10 ];</pre></code>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='SingleFailure' id='shift' src='../images/unit8/image3.png' /> 
		<p class='caption' id='shift'>Figure 1: A single test failure</p>
		<p>The theory failed because -5 is an invalid radius for a Circle object. If one of the theories assertions fails, the entire theory fails.</p> 
		<h3><br />Adding an assumption</h3>
	</li>
	<li>
		<p>Add a new line to the <code>shouldShowAllRadiiEqual()</code> method. On the line, add an assumption indicating that this test only works for positive radii. The method should read as follows:</p>
		<code><pre>[Theory]
public function shouldShowAllRadiiEqual( radius:Number ):void {
	assumeThat( radius, greaterThan( 0 ) );
	var circle:Circle = new Circle( new Point( 0, 0 ), radius );
	assertEquals( radius, circle.radius );
}		</pre></code>
		<p>If you did not use code-completion, add the import statements for org.flexunit.assumeThat and org.hamcrest.number.greaterThan at this time.</p>
	</li>
	<li>
		<p>Save the CircleTheory.as file.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit8/image4.png' />
		<p class='caption' id='shift'>Figure 2: FlexUnit tests passed</p>
		<p>The <code>assumeThat( radius, greaterThan( 0 ) )</code> statement assures that the theory is only testing radii that are valid, or in this case, positive. The theory ignores the -5 input and all negative inputs thanks to this statement.</p>
	</li>
</ol>

<h2>Using complex objects with theories</h2>

<p>FlexUnit 4 theories include support for complex objects as data points. Because ActionScript uses so many complex objects, it's not uncommon to have them passed as arguments in tests and theories. Theories are much more useful given the ability to deal with complex data points.</p> 
<p>Some notes on complex data points:</p>
<ul>
	<li>To use a complex object as data, simply specify it as the <code>ArrayElementType</code> in the <code>DataPoints</code></li>
	<li>The <code>ArrayElementType</code> requires the full class path for the type, such as <code>flash.geom.Point</code> or <code>mx.collections.ArrayCollection</code>.</li>
</ul>
<p>For Instance:</p>

<code><pre>[DataPoints]
[ArrayElementType("flash.geom.Point")]
Public static var points:Array = [ new Point( 0, 0 ) ];</pre></code>

<h2>Using the constructor of the Theory Case</h2>

<p>Theory case constructors can be used like the constructors of many classes. In test cases and theories, constructors can be passed initial data for use by all or some of the methods within the class. For instance:</p>

```
public class TestCase {

	[DataPoints]
	[ArrayElementType("flash.geom.Point")]
	public static var points:Array = [ new Point( 0, 0 ),
					new Point( 10, 10 ),
					new Point( -5, 5 ) ];

	[DataPoints]
	[ArrayElementType("Number")]
	public static var radii:Array = [ 0, 5, 10 ];

	public static var circle:Circle;

	public function TestCase( origin:Point, radius:Number ):void {
		circle = new Circle( origin, radius );
	}
	...
}
```

<p>This method can help to reduce the complexity of the created complex objects, or it can serve to convert existing sets of data points into use within other complex objects.</p> 
<p>If the complex objects are passed to the class constructor, they no longer need to be passed in as arguments to the theories. The constructor will be run before each test or theory in the case. Each test method can then use the newly instantiated class variables, which will be re-instantiated before each test is run.</p> 
<p>In this way, the class tends to be more cohesive and about a specific set of data rather than a free for all of unrelated theories working on data points.</p>

<h2>Walkthrough 3: Using Complex Objects as DataPoints</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Create a new theory for testing point distance.</li>
	<li>Pass Point objects into CircleTheory as DataPoints.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the CircleTheory.as file from the previous exercise.</p> 
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt3.fxp project from the Unit8/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Create a method for testing points on the circle</h3>
	</li>
	<li>
		<p>Add a private static constant named <code>TOLERANCE</code> of data type <code>Number</code> to the CircleTheory class.</p>
		<code><pre>private static const TOLERANCE:Number = .0001;</pre></code>
	</li>
	<li>
		<p>Add a new method named <code>shouldShowAllPointsEqual()</code> to the class.</p> 
		<code><pre>[Theory]
public function shouldShowAllPointsEqual(origin:Point):void {
}		</pre></code>
	</li>
	<li>
		<p>Create a new circle with the function's origin argument and a radius of 10.</p> 
		<code><pre>[Theory]
public function shouldShowAllPointsEqual(origin:Point):void {
	var circle:Circle = new Circle(origin, 10);
}		</pre></code>
	</li>
	<li>
		<p>Call the <code>circle.getPointOnCircle()</code> method with argument <code>Math.PI</code>.</p>
		<code><pre>[Theory]
public function shouldShowAllPointsEqual( origin:Point ):void {
	var circle:Circle = new Circle( origin, 10 );
	var pointOnCircle:Point = circle.getPointOnCircle( Math.PI );
}		</pre></code>
	</li>
	<li>
		<p>Declare a variable named <code>distance</code> of data type <code>Number</code> within the <code>shouldShowAllPointsEqual()</code> method. Instantiate it to <code>Point.distance( origin, pointOnCircle )</code>.</p>
		<code><pre>[Theory]
public function shouldShowAllPointsEqual( origin:Point ):void {
	var circle:Circle = new Circle( origin, 10 );
	var pointOnCircle:Point = circle.getPointOnCircle( Math.PI );
	var distance:Number = Point.distance( origin, pointOnCircle );
}		</pre></code>
	</li>
	<li>
		<p>Add a call to the <code>assertThat()</code> method. It should assert that <code>distance</code> variable is <code>closeTo( circle.radius, TOLERANCE )</code>.</p>
		<code><pre>[Theory]
public function shouldShowAllPointsEqual( origin:Point ):void {
	var circle:Circle = new Circle( origin, 10 );
	var pointOnCircle:Point = circle.getPointOnCircle( Math.PI );
	var distance:Number = Point.distance( origin, pointOnCircle );
	assertThat( distance, closeTo( circle.radius, TOLERANCE ) );
}		</pre></code>
		<p>If you did not use code-completion, add the imports for org.flexunit.assertThat and org.hamcrest.number.closeTo at this time.</p>
	</li>
	<li>
		<p>Add a new public static array named <code>points</code> to the class. Initialize the array with six point values, representing a gamut of potential points.</p> 
		<code><pre>public static var points:Array = [ new Point( 0, 0 ),
					new Point( 10, 10 ),
					new Point( -5, 5 ),
					new Point( 20, -20 ),
					new Point( -17, -16 ),
					new Point( 5.2, -11.3 ) ];</pre></code>
	</li>
	<li>
		<p>Mark the array with <code>[DataPoints]</code> and <code>[ArrayElementType("flash.geom.Point")]</code> metadata. Place these tags on the two lines above the array:</p>
		<code><pre>[DataPoints]
[ArrayElementType("flash.geom.Point")]
public static var points:Array = [ new Point( 0, 0 ),
					new Point( 10, 10 ),
					new Point( -5, 5 ),
					new Point( 20, -20 ),
					new Point( -17, -16 ),
					new Point( 5.2, -11.3 ) ];</pre></code>
	</li>
	<li>
		<p>Save CircleTheory.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit8/image5.png' /> 
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed</p>
		<h3><br />Adding multiple parameters to a theory</h3>
	</li>
	<li>
		<p>Alter the <code>shouldShowAllPointsEqual()</code> method to accept a second parameter named <code>radius</code> of data type <code>Number</code>. The <code>radius</code> parameter will be passed to the circle constructor. You will need to add an <code>assumeThat( radius, greaterThan(0) );</code> statement to the first line of the <code>shouldShowAllPointsEqual()</code> method.</p>
		<code><pre>[Theory]
public function shouldShowAllPointsEqual( origin:Point, radius:Number ):void {
	assumeThat( radius, greaterThan( 0 ) );
	var circle:Circle = new Circle( origin, radius );
	var pointOnCircle:Point = circle.getPointOnCircle( Math.PI );
	var distance:Number = Point.distance( origin, pointOnCircle );
	assertThat( distance, closeTo( circle.radius, TOLERANCE ) );
}		</pre></code>
	</li>
	<li>
		<p>Save CircleTheory.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit8/image5.png' />
		<p class='caption' id='shift'>Figure 2: FlexUnit tests passed</p>
		<p>Because the <code>shouldShowAllRadiiEqual()</code> theory passes by constructing valid Circle objects with radius parameters from the radii array, it should be no surprise that the <code>shouldShowAllPointsEqual()</code> method passes using those data points.</p>
		<p>Valid data points should be consistent for all theories.</p> 
		<h3><br />Add a radians parameter to the test method</h3>
	</li>
	<li>
		<p>Re-Open to the CircleTheory.as file.</p>
	</li>
	<li>
		<p>Add a parameter to the <code>shouldShowAllPointsEqual()</code> method named <code>radians</code> of data type <code>Number</code>. Alter the <code>circle.getPointOnCircle()</code> method so that it takes <code>radians</code> as its arguments.</p>
		<code><pre>[Theory]
public function shouldShowAllPointsEqual( origin:Point, radius:Number, radians:Number ):void {
	assumeThat( radius, greaterThan( 0 ) );
	var circle:Circle = new Circle( origin, radius );
	var pointOnCircle:Point = circle.getPointOnCircle( radians );
	var distance:Number = Point.distance( origin, pointOnCircle );
	assertThat( distance, closeTo( circle.radius, TOLERANCE ) );
}		</pre></code>
	</li>
	<li>
		<p>Save CircleTheory.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
	</li>
	<li>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit8/image5.png' />
		<p class='caption' id='shift'>Figure 3: FlexUnit tests passed</p>
		<p>The <code>circle.getPointOnCircle()</code> method should return a valid point on the circle regardless of the value of the radians field. Any number within the radii array should be a valid radians argument, and therefore the theory passes with these data points.</p> 
	</li>
</ol>

<h2>Summary</h2>

<ul>
	<li><p>Data points and theories allow many values to be tested without a great deal of complexity.</p></li>
	<li><p>Metadata:</p></li>
	<ul>
		<li><p>Theory classes are marked with <code>[RunWith("org.flexunit.experimental.theories.Theories")]</code> metadata.</p></li>
		<li><p>Single data points are marked with <code>[DataPoint]</code> metadata.</p></li>
		<li><p>Arrays of data points are marked with <code>[DataPoints]</code> and <code>[ArrayElementType("TYPE")]</code> metadata.</p></li>
		<li><p>Theories are marked with <code>[Theory]</code> metadata.</p></li>
	</ul> 
	<li><p>Theories can create a test fixture using the class constructor.</p></li>
	<li><p>Complex objects can be passed as data points.</p></li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-7.html">Unit 7 - Using Suites</a></li>
    <li><a href="Unit-9.html">Unit 9 - External Data</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>