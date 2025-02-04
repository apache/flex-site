Title:  Unit 5 - Developing Static Tests

<a href="../code/Unit5.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>FlexUnit 4.x has available features for developers to plan ahead and prepare tests for classes still under development. Ignoring a test is a capability that will allow you to prototype or create tests that may not yet be relevant or operational.</p>
<p>While the basic assertions you have used so far will accomplish much, the more advanced assertions available by using Hamcrest inside of FlexUnit 4 will reduce complexity in your test cases and increase test legibility.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Set test methods to be ignored</li>
	<li>Refactor test methods for greater specificity</li>
	<li>Use <code>assertThat()</code> and extensible assertions in your test methods</li>
	<li>Write a custom matcher to be used in an <code>assertThat()</code> statement</li>
	<li>Write tests that expect an exception</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Adding additional tests</li>
	<li>Dealing with incomplete tests</li>
	<li>Ignoring a test and its benefits</li>
	<li>Understanding multiple assertions</li>
	<li>Extensible assertions</li>
	<li>Hamcrest</li>
	<li>Writing matchers</li>
</ul>

<h2>Adding additional tests</h2>

<p>If you are a practitioner of test-first development, then you create each test in your system just before you create the code to make that test pass. In essence, you are defining the interface progressively.</p> 
<p>However, if you are writing tests for legacy code, or writing your tests immediately after a class is written, you can inspect the code and note the expected outcome of each method. You can then write tests that will cover these conditions.</p>
<p>In the latter situation, it is common to write test stubs, empty functions for each required test, and implement them sequentially. The practice of creating these empty tests serves as documentation for the needed tests as they are discovered.</p>
<p>Consider the needed tests for the following objects:</p>
<ul>
	<li>A box of crayons contains 12 crayons each of which is a unique color.</li>  
	<li>Each crayon is made of wax, has a color, and a wrapper.</li>  
	<li>Each wrapper has the color name on it.</li>
</ul>
<p>You probably notice several things that need to be tested right away.  Minimally, you need to test that the box has 12 crayons. You would need to test that each crayon is of type wax, has a color and a wrapper.  You would need to test that the wrapper has a color name and that the color name is the same as the color of the crayon it wraps. Finally, you would need to test that each crayon color is unique.</p>

```
public class BoxOfCrayonsCase {
	[Test]
	public function shouldHaveTwelveCrayons():void {}
	[Test]
	public function shouldHaveUniqueColors():void {}
}

public class CrayonCase {
	[Test]
	public function shouldBeWax():void {}
	[Test]
	public function shouldHaveColor():void {}
	[Test]
	public function shouldBeWrapped():void {}
}

public class WrapperCase {
	[Test]
	public function shouldHaveColorName():void {}
	[Test]
	public function shouldMatchWrappedCrayon():void {}
}
```

<p>You now have a road map for testing.  Currently none of these tests actually verify functionality. As noted previously, the lack of a failing assertion is a success so all of these tests would pass.  Excellent, testing complete!</p>  
<p>If only the world were so easy.  In reality, these tests are far from complete, the fact that all these <i>incomplete</i> tests will pass is a problem that needs to be addressed.</p>

<h2>Dealing with incomplete tests</h2>

<p>There are several possible ways to deal with incomplete tests</p>
<ul>
	<li>
		<p>Leave them as stubs - Stubbed tests still show in the test complete dialogue.  They will always be marked as passing.  It is very easy to forget to implement these tests and it artificially appears as though you have many valid tests.</p>
	</li>
	<li>
		<p>Comment the tests out - These tests will not show in the complete dialogue.  Like stub tests, it is very easy to forget to complete these tests as there is no visible reminder.</p>
	</li>
	<li>
		<p>Add a special type of assertion named <code>fail()</code> inside each method - This type of assertion always marks a test as a failure.  This is effective, and certainly serves as a reminder that the test needs to be completed, but not the best solution as it artificially appears as though you have many failing tests.</p>
	</li>
	<li>
		<p>Ignoring - This will mark the tests in the complete dialogue without marking them as failures. When ignoring, you will receive a reminder that these tests need to be implemented but without the side effect of artificial statistics. This is the best way to deal with incomplete tests.</p>
	</li>
</ul>

<h2>Ignoring a test</h2>

<p>The [Ignore] metadata is a special type of metadata recognized by FlexUnit 4.x. It can be used on a test, test case or test suite. It is often used when a test has been written but is not ready to run with any reasonable outcome or when refactoring of a class renders specific tests temporarily irrelevant or broken</p>
<p>The [Ignore] metadata can also be applied to tests that have been written for a particular case, but the actual components or methods that they need to test are non-existent. For example, in the crayon example above, you may want to write the wrapper test before the wrapper class.</p>
<p>Finally, they can also be useful to hold on to deprecated tests that may be relevant again at a later point.</p>
<p>Ignored tests:</p>
<ul>
	<li>Are neither passing nor failing tests</li>
	<li>Are counted and reported as Ignored by FlexUnit as a reminder</li>
	<li>Are easily identified and ignored through the <code>[Ignore]</code> decoration</li>
</ul>

```
[Ignore]
[Test]
public function ignoreTest() :void
```

<h2>Walkthrough 1: Commenting out and Ignoring Tests</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Comment out several test methods.</li>
	<li>Ignore several test methods.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the BasicCircleTest.as file from the previous exercise.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt1.fxp project from the Unit 5/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Commenting out tests</h3>
	</li>
	<li>
		<p>Highlight the text that comprises the <code>shouldGetBottomPointOnCircle()</code> function. Press Shift+Control+c (Shift+Command+C on MacOS) and the comment markers (/* and */) should be added as shown.</p>
		<img alt='CommentingCode' id='shift' src='../images/unit5/image1.png' />
		<p class='caption' id='shift'>Figure 1: Commenting code</p>
	</li>
	<li>
		<p>Save BasicCircleTest.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file again.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window. Note that there is one less test than previously results:</p>
		<img alt='TwoTestFailures' id='shift' src='../images/unit5/image2.png' />
		<p class='caption' id='shift'>Figure 2: Two test failures</p>	
		<h3><br />Using Ignore metadata</h3>
	</li>
	<li>
		<p>Re-Open the BasicCircleTest.as file. Remove the comments by highlighting the commented <code>shouldGetBottomPointOnCircle()</code> function and pressing Shift+Control+c. This command will remove the comment markers. The function should look as it did at the start of this walkthrough.</p>
	</li>
	<li>
		<p>Add a line with <code>[Ignore]</code> metadata above the <code>[Test]</code> metadata of the <code>shouldGetBottomPointOnCircle()</code> function.</p>

```
[Ignore]
[Test]
public function shouldGetBottomPointOnCircle():void {
...
}
```

</li>
	<li>
		<p>Save BasicCircleTest.as.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file again.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
 		<img alt='TwoTestsOneIgnore' id='shift' src='../images/unit5/image3.png' />
		<p class='caption' id='shift'>Figure 3: Two test failures and one has been ignored</p>
	</li>
	<li>
		<p>Similarly, mark the <code>shouldGetRightPointOnCircle</code>, <code>shouldGetLeftPointOnCircle()</code> and <code>shouldThrowRangeError()</code> test method with ignore metadata.</p>
		
```
[Ignore]
[Test]
public function shouldThrowRangeError():void {
}
```

</li>
	<li>
		<p>Save BasicCircleTest.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file again.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='FourIgnores' id='shift' src='../images/unit5/image4.png' /> 
		<p class='caption' id='shift'>Figure 4: Four tests have been ignored</p>
	</li>
</ol>

<h2>Benefits of Ignore over Comments</h2>

<p>As you have just demonstrated, [Ignore] provides a useful way of indicating that a test exists but is, for whatever reason, not ready to run at this time. Ignoring a test ensures that the test is not lost in comments and forgotten.</p>
<p>The [Ignore] metadata provides a few additional benefits over commenting. First, the [Ignore] metadata can accept additional system and user defined arguments.</p> 
<p>For example:</p>

```
[Ignore(description="Phase II Requirement",category="Required"]
[Test]
public function shouldGetPointsOnCircle():void 
{
...
}
```

<p>This additional information can be used for filtering, sorting and reporting on some test systems. Unfortunately, at this time, Flash Builder does not display this extra information to its users. However, it does provide one useful function when using [Ignore]: Flash Builder Premium will display the ignored tests in the case hierarchy. This means you can easily find and click on an ignored method to quickly find it in a large project.</p>

<h2>Extensible Assertions</h2>

<p>So far we have discussed three types of assertions</p>
<ol>
	<li><code>assertTrue( condition:Boolean )</code></li>
	<ul>
		<li>Valid if the condition is true</li>
	</ul>
	<li><code>assertFalse( condition:Boolean )</code></li>
	<ul>
		<li>Valid if the condition is false</li>
	</ul>
	<li><code>assertEquals( value1:Object, value2:Object )</code></li>
	<ul>
		<li>Valid if value1 == value2</li>
	</ul>
</ol>
<p>Standard assertions work well for many cases. However, as the complexity of your tests increases, you may find yourself with long, complicated compound assertions. For example: what if you needed to ensure that the result of a method call was an array that contained at least two specific values?</p> 
<p>Ideally, tests not only verify functionality but are also a portion of the documentation for the system. This is only possible if the tests are clear, concise and legible.  Further, in cases like the array examples above, you would end up with significant logic in your tests. Any place where logic exists needs to be considered suspect unless there are tests to verify that functionality, and we simply can't recommend writing tests for your tests.</p>
<p>Additionally, the simplistic nature of the assertions you have learned so far, also means they provide simplistic error messages. Take the case of this slightly more complicated assertion that determines if a number is between two other numbers:</p>

```
assertTrue( num1 > num2 && num1 < num3 );
```

<p>If this test fails, it would yield the basic and uninformative failure message:</p>

```
"Expected <true> but was <false>."
```

<p>This information, while true, is not all that useful for instant problem identification. This lack of information forces the developer back to the original test to understand what was being tested and helps defeat one of the key advantages of having tests.</p>

<h2>Hamcrest</h2>

<p>Hamcrest is an open source library of matchers, which are simple classes that perform comparisons. These matchers, along with encompassing logic, allow Hamcrest to perform complicated matching with a simple and extensible syntax.</p>
<p>Hamcrest itself is neither a unit testing library, nor specifically made to work with unit tests, but the matchers it exposes are used by FlexUnit to provide a powerful and flexible way to move beyond basic assertions.</p>
<p>When using Hamcrest assertions in FlexUnit, you use a special function named <code>assertThat()</code>.</p> 

```
public function assertThat( value, matcher );
```

<p>Unlike the assertions used so far, the <code>assertThat()</code> method does not inherently prescribe any specific type of comparison or evaluation. Instead, you provide a value and a matcher. It is the matcher that dictates the type of comparison.</p>
<p>Referring back to the example from above, if you wished to know if num1 was between num2 and num3 using standard assert syntax, you would write:</p>

```
assertTrue( num2 < num1 && num1 < num3);
```

<p>Using Hamcrest, this same assertion would read:</p>

```
assertThat( num1, is( between( num2, num3 ) ) );
```

<p>There are several advantages to the Hamcrest assertion. First, this statement could be read by someone with little testing or development experience and would still be understandable.</p>
<p>Second, if the <code>assertThat()</code> statement above fails it would yield the following result:</p>

```
"Expected a number between <num2> and <num3> but was <num1>."
```

<p>which is many, many times more useful than the <code>assertTrue()</code> statement's failure message in this same situation:</p>

```
"Expected <true> but was <false>."
```

<p>This particular assertion uses the <code>is()</code> and <code>between()</code> matchers to create a more readable assertion. These are just two of the many types of matchers offered by Hamcrest. Further, as each matcher is simply a class that implements a specific interface, you are encouraged to create your own matchers to make even the most difficult matching clear inside of your test cases.</p>
<p>For more information on Hamcrest and extensible matchers, check out the Hamcrest-as3 page on github available at <a class='contentlink' href='https://github.com/drewbourne/hamcrest-as3' target='_blank'>https://github.com/drewbourne/hamcrest-as3</a>.</p>

<h2>Understanding the Floating Point Issue</h2>

<p>There were three test failures in Unit 4: Walkthrough 3 because the <code>assertEquals()</code> statement is used to judge equality, which seems logical on the surface. However, there are many times when a computer's concept of equal and our concept of 'equal enough' are not the same.</p> 
<p>The <code>shouldGetTopPointOnCircle()</code> method was the only one of the four point tests that passed:</p>

```
[Test]
public function shouldGetTopPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( 0 );

	assertEquals( 5, point.x );
	assertEquals( 0, point.y );
}
```

<p>This was the only of the four new point tests that called <code>circle.getPointOnCircle()</code> with an argument of 0. The other three point tests called <code>circle.getPointOnCircle()</code> with <code>Math.PI/2</code>, <code>Math.PI</code>, and <code>(3*Math.PI)/2</code>.</p> 
<p>Pi is an irrational number that cannot be expressed exactly. Further, Flash Player itself can only store large numbers to a certain precision. This means that calculations involving any floating point value, and especially an irrational one like Pi, will always have a margin of error.</p>

```
[Test]
public function shouldGetBottomPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( Math.PI );

	assertEquals( -5, point.x );
	assertEquals( 0, point.y );
}
```

<img alt='FailureStackTrace' src='../images/unit5/image5.png' />
<p class='caption'>Figure 1: Failure Stack Trace</p>

<p>If you examine the failure in Flash Builder (Figure 1), you will quickly understand the issue. The result our <code>shouldGetBottomPointOnCircle()</code> method returned the following values for x and y:</p>
<ul>
	<li>point.x = -5</li>	
	<li>point.y = 6.123031769111886E-16 (which is actually 0.0000000000000006123031769111886, expressed in scientific notation)</li>
</ul>
<p>Both of these calculations are correct within a very acceptable margin of error. However, we told FlexUnit, and hence Flash Player, that they needed to be exactly equal. The problem comes with the specificity of our request, not the test. To that end, we need a way to explain to FlexUnit that we are okay with a margin of error. While the standard assertions can't provide that for us, Hamcrest can.</p>

<h2>Walkthrough 2: Using Hamcrest to deal with Floating Point Issues</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Use the <code>assertThat()</code> statement with extensible assertions.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the FlexUnit4Training.mxml file from the previous exercise.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt2.fxp project from the Unit 5/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Using the assertThat() method with extensible assertions</h3>
	</li>
	<li>
		<p>At the top of the <code>BasicCircleTest</code> class declare a private, static constant with the name of <code>TOLERANCE</code> and a data type of <code>Number</code>. Set the constant equal to <code>.0001</code>.</p> 

```
public class BasicCircleTest {
	private static const TOLERANCE:Number = .0001;
	...
}
```

<p>We will use this value to determine "close enough."  If the result is between our expected value plus or minus the tolerance, we are willing to consider the value to be close enough.</p>
	</li>
	<li>
		<p>Replace the first <code>assertEquals()</code> assertion of the <code>shouldgetTopPointOnCircle()</code> function with the <code>assertThat()</code> statement as shown.</p>
		<p>Replace this statement:</p>

```
assertEquals( 5, point.x );
```

<p>With this statement:</p>

```
assertThat( point.x, closeTo( 5, TOLERANCE ) );
```

<p>Be sure to either use the code complete with assertThat and closeTo, or manually add their imports.</p>

```
import org.flexunit.assertThat;<br />import org.hamcrest.number.closeTo;
```

</li>
	<li>
		<p>Remove [Ignore] metadata from the <code>shouldGetBottomPointOnCircle()</code>, <code>shouldGetLeftPointOnCircle()</code> and <code>shouldGetRightPointOnCircle()</code> methods.</p>
		<p>Unlike <code>assertEquals()</code>, the <code>closeTo()</code> Hamcrest matcher specifies that we need to look for numerical equivalence within a specific margin of error.</p>
	</li>
	<li>
		<p>Change all the point tests so that each uses the <code>assertThat()</code> statement in place of <code>assertEquals()</code>.</p> 

```
[Test]
public function shouldGetTopPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point;

	point = circle.getPointOnCircle( 0 );
	assertThat( point.x, closeTo( 5, TOLERANCE ) );
	assertThat( point.y, closeTo( 0, TOLERANCE ) );
}

[Test]
public function shouldGetBottomPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point;

	point = circle.getPointOnCircle( Math.PI );
	assertThat( point.x, closeTo( -5, TOLERANCE ) );
	assertThat( point.y, closeTo( 0, TOLERANCE ) );
}

[Test]
public function shouldGetRightPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point;

	point = circle.getPointOnCircle( Math.PI/2 );
	assertThat( point.x, closeTo( 0, TOLERANCE ) );
	assertThat( point.y, closeTo( 5, TOLERANCE ) );
}

[Test]
public function shouldGetLeftPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point;

	point = circle.getPointOnCircle( (3*Math.PI)/2 );
	assertThat( point.x, closeTo( 0, TOLERANCE ) );
	assertThat( point.y, closeTo( -5, TOLERANCE ) );
}
```

</li>
	<li>
		<p>Save the BasicCircleTest.as file.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file. If the tests ran successfully, you should see the following output.</p>
		<img alt='PassedOneIgnore' id='shift' src='../images/unit5/image6.png' /> 
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed, one ignored</p>
	</li>
</ol>

<h2>Writing Matchers</h2>

<p>The Hamcrest library includes base matchers to cover a wide variety of potential situations. You are encouraged to create your own custom matchers when encountering a situation that can be handled more easily, or more clearly, with a new matcher.</p> 
<p>One of the goals behind Hamcrest is to create highly readable matching. If you examine your unit tests, they are still legible but becoming less so as the complexity of testing increases. For example:</p>

```
assertThat( point.x, closeTo( -5, TOLERANCE ) );
assertThat( point.y, closeTo( 0, TOLERANCE ) );
```

<p>Neither you, nor another individual that may read this code later, really cares that the point's x and y properties are within a tolerance. What you really care about is that one Point is close to another Point within a given tolerance.</p>

```
assertThat( point, closeToPoint( otherPoint, TOLERANCE ) );
```

<p>While this is a simple example, custom matchers continue to become more effective as the complexity of your tests grows.</p>
<p>Custom matcher classes extend the <code>TypeSafeMatcher</code> class. Basic custom matchers are written with three methods.</p>
<ul>
	<li>Constructor</li>
	<ul> 
		<li>Used to provide the values being matched.</li>
	</ul>
	<li>Override of <code>matchesSafely()</code></li>
	<ul>
		<li>Accepts an item of data type <code>Object</code> that will be compared to the provided values.  You perform any logic to determine if the values match or not in this method and return a Boolean indicating the result.</li>
	</ul>
	<li>Override of <code>describeTo()</code></li>
	<ul>
		<li>Used to create the informative error descriptions characteristic of Hamcrest.  This should return the descriptive string.</li>
	</ul>
</ul>

<h2>Walkthrough 3: Writing your own matcher</h2>
<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Create a new ActionScript package.</li>
	<li>Write a custom matcher.</li>
	<li>Use the custom matcher in the <code>getPointOnCircle()</code> tests.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the BasicCircleTest.as file from the previous exercise.</p> 
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt3.fxp project from the Unit 5/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Create the matcher package</h3>
	</li>
	<li>
		<p>Within the tests directory, create another package named matcher.  Right click on the tests directory and choose New > Package.</p> 
		<img alt='CreateNewPackage' id='shift' src='../images/unit5/image7.png' /> 
		<p class='caption' id='shift'>Figure 1: Create a new package</p>
	</li>
	<li>
		<p>The Name should be matcher.</p>
		<img alt='NewPackageWindow' id='shift' src='../images/unit5/image8.png' />
		<p class='caption' id='shift'>Figure 2: New package window</p>
		<h3><br />Create the matcher class</h3>
	</li>
	<li>
		<p>You will now need to create a new class within the helper package. Right click on the package and choose New &#62; ActionScript Class.</p>
		<img alt='NewHelperClass' id='shift' src='../images/unit5/image9.png' />
		<p class='caption' id='shift'>Figure 3: Create a new class in the helper package</p>
	</li>
	<li>
		<p>The class should be named CloseToPointMatcher and its Superclass should be org.hamcrest.TypeSafeMatcher. Modifiers should be set to public and the Generate constructor from superclass option should be checked. Click Finish.</p>
		<img alt='NewCloseToPointMatcher' id='shift' src='../images/unit5/image10.png' /> 
		<p class='caption' id='shift'>Figure 4: New ActionScript Class CloseToPointMatcher</p>
	</li>
	<li>
		<p>Open the CloseToPointMatcher.as file from the matcher package.</p>
		<img alt='PackageDirectoryStructure' id='shift' src='../images/unit5/image11.png' /> 
		<p class='caption' id='shift'>Figure 5: Package directory structure</p>
	</li>
	<li>
		<p>Add a private variable named <code>point</code> of type <code>Point</code> and another named <code>tolerance</code> of data type <code>Number</code> to the class.</p> 

```
private var point:Point;
private var tolerance:Number;
```

<p>If you did not use code-completion, add the import for flash.geom.Point at this time.</p>
	</li>
	<li>
		<p>Modify the automatically created <code>CloseToPointMatcher()</code> constructor. To accept point and tolerance parameters, instead of an <code>expectedType</code>.  Pass a reference of the Point class to the superclass's constructor, and populate the local circle and offset properties with the appropriate argument from the constructor.</p>

```
public function CloseToPointMatcher( point:Point, tolerance:Number ) {
	super(Point);
	this.point = point;
	this.tolerance = tolerance;
}
```

<p>The <code>super(Point)</code> declaration is informing the classes the data types that the class will be dealing with is a Point class.</p>
	</li>
	<li>
		<p>Override the <code>matchesSafely()</code> method of the class. It will take an argument named <code>item</code> of data type <code>Object</code>, and will return a Boolean.</p>

```
override public function matchesSafely(item:Object):Boolean {
}
```

</li>
	<li>
		<p>In the <code>matchesSafely()</code> method, declare a variable named <code>distance</code> of data type <code>Number</code>. Set it equal to <code>Point.distance( item as Point, point )</code>;</p>

```
override public function matchesSafely(item:Object):Boolean {
	var distance:Number = Point.distance( item as Point, point );
}
```

</li>
	<li>
		<p>Add a return statement that checks if the <code>tolerance</code> subtracted from the absolute value of the <code>distance</code> is less than 0.</p>

```
override public function matchesSafely(item:Object):Boolean {
	var distance:Number = Point.distance( item as Point, point );
	return( Math.abs( distance ) - tolerance < 0 );
}
```

</li>
	<li>
		<p>Add an override for the public function <code>describeTo()</code>. It will take an argument named <code>description</code> of type <code>Description</code>. Because there are two available <code>Description</code> classes, make sure to choose the <code>org.hamcrest.Description</code> class when you use code completion.</p>

```
override public function describeTo(description:Description):void {
	description.appendText( "point " ).appendText( point.toString() );
}
```

<p>If you did not use code-completion, add the import for <code>org.hamcrest.Description</code>.</p>
	</li>
	<li>
		<p>Save CloseToPointMatcher.as.</p>
	</li>
	<li>
		<p>Open the BasicCircleTest.as file.</p>
	</li>
	<li>
		<p>Modify the <code>shouldGetTopPointOnCircle()</code> method so that it reads as follows.</p>

```
[Test]
public function shouldGetTopPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( 0 );
	assertThat( point, new CloseToPointMatcher( new Point( 5, 0 ), TOLERANCE ) );
}
```

<p>Be sure to either choose CloseToPointMatcher from the code-completion, or manually add the import:</p>

```
import matcher.CloseToPointMatcher;
```

</li>
	<li>
		<p>Each of the point testing functions should follow this format. Instantiate the circle, instantiate the expected point, and finish with the assertion.</p>

```
[Test]
public function shouldGetTopPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( 0 );
	assertThat( point, new CloseToPointMatcher( new Point( 5, 0 ), TOLERANCE ) );
}
[Test]
public function shouldGetBottomPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( Math.PI );
	assertThat( point, new CloseToPointMatcher( new Point( -5, 0 ), TOLERANCE ) );
}
[Test]
public function shouldGetRightPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( Math.PI/2 );
	assertThat( point, new CloseToPointMatcher( new Point( 0, 5 ), TOLERANCE ) );
}
[Test]
public function shouldGetLeftPointOnCircle():void {
	var circle:Circle = new Circle( new Point( 0, 0 ), 5 );
	var point:Point = circle.getPointOnCircle( (3*Math.PI)/2 );
	assertThat( point, new CloseToPointMatcher( new Point( 0, -5 ), TOLERANCE ) );
}
```

</li>
	<li>
		<p>Save BasicCircleTest.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='PassedOneIgnored' id='shift' src='../images/unit5/image6.png' /> 
		<p class='caption' id='shift'>Figure 6: FlexUnit tests passed, one test ignored</p>
	</li>
</ol>

<h2>Exceptions</h2>

<p>There are times when your code should throw an error in response to a given situation, such as when an illegal value or null is provided to a required property. In these cases the actual outcome of a test is not to assert a condition but to verify that the error was thrown as expected.</p> 
<p>If an error is NOT thrown in this situation, it should be considered a failure while throwing the error would be a success. This logical inversion is often handled by wrapping all testing functionality in try-catch blocks. However, this leads to ugly, illegible and difficult to maintain code.</p>
<p>FlexUnit 4 simplifies this process by allowing an <i>expects</i> argument in the Test annotation for this purpose.</p>
<ul>
	<li>To use the <i>expects</i> annotation, simply provide the type of error expected.</li>

```	
[Test (expects="full.package.ThrownError")]
public function testError():void {}						

```

<li>If the tested method throws the <code>ThrownError</code>, FlexUnit 4.x will recognize this method as a success and mark the test as passed.</li>
	<li>If the error is not thrown, then the test is marked as a failure.</li> 
	<li>If the method throws an error that is not of type <code>ThrownError</code> then FlexUnit 4 marks that test as a failure, since the expected error type did not match the error that was thrown, and something else is causing your method to fail.</li>
</ul>	
<p>The <code>expects=""</code> attribute only verifies the type of the error, it does not evaluate the properties of the error instance. If you need to verify data internal to the error you must catch the error yourself and perform assertions.</p>
<p>In most cases, the <code>expects=""</code> attribute works well as the existence of the error is often most important.</p>

<h2>Walkthrough 4: Handling an exception in a Test</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Add a statement that will throw an error when the tests are run.</li>
	<li>Handle a desired exception using <code>expects=""</code> attribute.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the BasicCircleTest.as file from the previous exercise.</p> 
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt4.fxp project from the Unit5/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Run a new test</h3>
	</li>
	<li>
		<p>At the end of the <code>BasicCircleTest</code> class there is an ignored test method named <code>shouldThrowRangeError()</code>. Remove the <code>[Ignore]</code> metadata from this function and declare a variable named <code>someCircle</code> of type <code>Circle</code>. Instantiate the <code>Circle</code> with an origin of <code>(10, 10)</code> and a radius of <code>-5</code>.</p>

```
[Test]
public function shouldThrowRangeError():void {
	var someCircle:Circle = new Circle( new Point( 10, 10 ), -5 );
}
```

</li>
	<li>
		<p>Save BasicCircleTest.as</p>
	</li>
	<li>
		<p>Run FlexUnit4Training.mxml.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='SingleErrorThrown' id='shift' src='../images/unit5/image12.png' />
		<p class='caption' id='shift'>Figure 1: A single test has thrown an error</p>
		<p>The <code>shouldThrowRangeError()</code> test is throwing an error. The error comes from the test's attempt to instantiate a Circle object with a radius of -5. Even without looking at the code, one could conclude that a Circle with a negative radius has conceptual issues.</p> 
		<p>Notice that FlexUnit is registering the error without any assertion statement present in the function. If a test method throws an error at any point, FlexUnit will register that method as an error.</p> 
		<p>When a test fails due to a failed assertion, it is considered a failure. When it fails due to a run time exception, it is considered an error. While the result is the same, a test that does not pass, errors are generally considered more heinous as they indicate an unhandled exception.</p>
		<h3><br />Using "expects" metadata to deal with anticipated errors</h3>
	</li>
	<li>
		<p>Return to the BasicCircleTest class. Modify the <code>[Test]</code> metadata tag on the line above the <code>shouldThrowRangeError()</code> function to indicate that it expects a <code>RangeError</code>.</p>

```
[Test(expects="RangeError")]
public function shouldThrowRangeError():void {
	var someCircle:Circle = new Circle( new Point( 10, 10 ), -5 );
}
```

<p>RangeError exists in the default package, and hence appears to just be the class name. For your own custom errors or errors defined in the Flex framework, it is important you provide the full path.</p>
	</li>
	<li>
		<p>Save BasicCircleTest.as</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file again.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit5/image13.png' /> 
		<p class='caption' id='shift'>Figure 2: FlexUnit tests passed</p>
		<p>The <code>shouldThrowRangeError()</code> method has still thrown an error. Because of the <code>expects="RangeError"</code> metadata, FlexUnit knows that this is the expected condition. If that particular error is not thrown, FlexUnit considers it a failure for the test.</p>
	</li>
</ol>

<h2>Summary</h2>

<ul>
	<li>
		<p>You can create a roadmap for testing by writing out all the expected tests without functionality.</p>
	</li>
	<li>
		<p>Marking tests with [Ignore] metadata is the best way to ensure that you are aware of incomplete test methods.</p>
	</li>
	<li>
		<p>Test methods should be written with as few assertions per test as possible.</p>
	</li>
	<li>
		<p>Hamcrest can:</p>
	</li>
	<ul>
		<li>Increase code readability</li>
		<li>Increase test report specificity</li>
		<li>Customize tests to assert better conditions</li>
	</ul>
	<li>
		<p>You can write custom matchers for use with the <code>assertThat()</code> method.</p>
	</li>
	<li> 
		<p>The <code>expects=""</code> attribute of [Test] annotation can be used to handle expected exceptions in your tests.</p>
	</li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-4.html">Unit 4 - FlexUnit Basics</a></li>
    <li><a href="Unit-6.html">Unit 6 - Working with the Test Fixture</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>