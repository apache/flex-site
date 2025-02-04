Title:  Unit 13 - Working with Asynchronous Operations

<a href="../code/Unit13.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>FlexUnit 4.x takes advantage of a variety of inherently asynchronous operations. Test Fixture, Test Theories, Loading External Data, and Parameterized testing take advantage of asynchronous setup. Some tests require a span of time in order to verify expected results. FlexUnit 4.x provides tools to validate asynchronous functionality.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Use asynchronous handling in test cases</li> 
	<li>Handle errors and timeouts in asynchronous style tests</li>
	<li>Write a chain of operations using sequences</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Understanding the need for async</li>
	<li>Introduction to the available async methods</li>
	<li>Understanding error handling with async</li>
	<li>Event based synchronous versus asynchronous</li>
	<li>Chaining async operations</li>
</ul>

<h2>Understanding the need for async</h2>

<p>Up until now, all tests in this text have been synchronous in nature. Tests run and assertions are made line by line. However, ActionScript 3.0 and Flex are asynchronous by nature. You may have to wait for an event, a database retrieval, or a timer to complete. Currently, any of these operations would be marked as a pass or failure immediately without waiting for the actual event to be received.</p>
<p>Consider the external data loading you have used so far in theories and parameter tests. Loading from an XML file is asynchronous, depending on the amount of data the load time of that file can change.</p>
<p>Without asynchronous support, a large portion of systems would remain untested creating an easy location for bugs to hide. Race conditions can potentially be the origin of huge bugs that, without asynchronous testing, can cause countless hours of debugging.</p>

<h2>Introduction to the available async methods</h2>

<p>FlexUnit 4 contains extensive support for asynchronous tests. All asynchronous tests are decorated with the annotation <code>async</code> which notifies the runner this test is not complete once the method has reached the closing brace.</p>

```
[Test( async )]
```

<p>Decorating a test with async causes the runner to hold that test in memory. The test runner relies on an async handler to notify when the test is complete. Omitting an async handler will cause the test to hang indefinitely. To prevent the test from hanging, we may also decorate the test with the timeout annotation.</p>

```
[Test( async, timeout="1000" )]
```

<p>The Async class in FlexUnit 4 contains numerous static methods for handling async testing.</p>
<ul>
	<li><p><code>Async.asyncHandler</code> - Most common asynchronous test. Returns a handler when the async test succeeds or fails from which additional testing can occur.</p></li>
	<li><p><code>Async.proceedOnEvent</code> - Used when you are concerned if an event is thrown, but not the condition under which it is thrown. If the event is received, the test will continue, otherwise the test will be marked as a failure.</p></li>
	<li><p><code>Async.failOnEvent</code> - Registers an event as an automatic failure. This handler will cause the test runner to wait a timeout period for the condition under test to fire the failure event. If no failure is received, test execution will complete under the timeout handler. If no handler is specified, the test will be marked as a success once the timeout has expired.</p></li>
	<li><p><code>Async.registerFailureEvent</code> - Used when a certain event can cause a test to fail, but the event itself is not under test. If the event is received anytime during test execution the test will immediately be marked as a failure.</p></li>
	<li><p><code>Async.handleEvent</code> - Used when the event is part of success of the test, but the throwing of the event itself does not indicate a success. Unlike <code>proceedOnEvent</code>, this handler will call a complete handler if the event is received within the timeout period.</p></li>
	<li><p><code>Async.asyncResponder</code> - Used in a similar fashion as <code>Async.handleEvent</code>, however works with AsyncTokens and Responders. Not usable in ActionScript only projects.</p></li>
	<li><p><code>Async.asyncNativeResponder</code> - Similar to <code>Async.asyncResponder</code> and used in a similar format. Used in ActionScript projects.</p></li>
</ul>

<h2>Walkthrough 1: Creating a Simple Async Test with Timers</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Create an async test method using a timer.</li>
	<li>Create a new suite for async tests.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Import the FlexUnit4Training_wt1.fxp project from the Unit13/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
	</li>
	<li>
		<p>Create a new package named async.testcases in the tests directory.</p>
		<h3><br />Create a basic async test</h3>
	</li>
	<li>
		<p>In the async.testcases package create a new ActionScript class named <code>BasicTimerTest</code>.</p>
	</li>
	<li>
		<p>Remove the automatically created constructor from the class.</p>

```
package async.testcases {
	public class BasicTimerTest {
	}
}
```

<h3><br />Create an async test case</h3>
	</li>
	<li>
		<p>Declare a new private property named <code>timer</code> of type <code>Timer</code> within the class.</p>

```
private var timer:Timer;
```

<p>If you did not use code-completion, add the import for flash.utils.Timer at this time.</p>
	</li>
	<li>
		<p>Declare setup and teardown methods for the class, each marked with <code>[Before]</code> and <code>[After]</code> metadata. The setup method will instantiate <code>timer</code> with a delay of <code>100</code> and a repeat count of <code>1</code>. The teardown method will check if <code>timer</code> is running, stop it if necessary, and destroy the instance.</p>

```
[Before]
public function setUp():void {
	timer = new Timer( 100, 1 );
}
[After]
public function tearDown():void {
	if( timer && timer.running ) {
		timer.stop();
	}
	timer = null;
}
```

</li>
	<li>
		<p>Write a test method named <code>shouldCompleteTimer()</code>. It will add an event listener for the <code>TimerEvent.TIMER_COMPLETE</code> event which will call an <code>AsyncHandler()</code> method. This asynchronous test must be marked with <code>[Test( async )]</code> metadata in order to be run asynchronously.</p>

```
[Test( async )]
public function shouldCompleteTimer():void {
	timer.addEventListener( TimerEvent.TIMER_COMPLETE,
		Async.asyncHandler( this, handleWin, 100, timer, handleTimeout ),
		false, 0, true );
}
```

<p><code>asyncHandler()</code> calls a success handler or timeout handler depending on whether the <code>TimerEvent.TIMER_COMPLETE</code> event is dispatched before the <code>timeOut</code> limit.</p>
<p>If you did not use code-completion, add the import statements for org.flexunit.async.Async and flash.events.TimerEvent at this time.</p>
<p>Take a look at the <code>Async.asyncHandler()</code> method used within the <code>addEventListener()</code> method in the <code>testTimerComplete()</code> test.</p>

```
Async.asyncHandler( this, handleWin, 100, timer, handleTimeout )
```

<p>The prototype of this method is:</p>

```
Async.asyncHandler(testCase:Object, eventHandler:Function, timeout:int, passThroughData:Object=null,
 timeoutHandler:Function=null):Function
```

<p>This method references two functions: <code>handleWin()</code> and <code>handleTimeout()</code>. The method <code>handleWin()</code> is called if the <code>TimerEvent.TIMER_COMPLETE</code> occurs before the <code>timeout</code>, which is set at 100.  <code>handleTimeout()</code> is the function called if the event is not dispatched before the timeout. <code>handleWin()</code> will receive both the <code>event</code> and <code>passThroughData</code> objects as arguments. The method <code>handleTimeout()</code> will only receives the <code>passThroughData</code>.</p>
	</li>
	<li>
		<p>Add a call to the <code>timer.start()</code> method on the last line of the <code>shouldCompleteTimer()</code> test method.</p>

```
[Test( async )]
public function shouldCompleteTimer():void {
	timer.addEventListener( TimerEvent.TIMER_COMPLETE,
		Async.asyncHandler( this, handleWin, 100, timer, handleTimeout ),
		false, 0, true );
	timer.start();
}
```

<p>You will need to declare both the <code>handleWin()</code> and <code>handleTimeout()</code> functions. They can be specified as protected because they are only run within the specific test case and not by the runner itself.</p>
	</li>
	<li>
		<p>Declare the <code>handleWin()</code> function as protected. It should accept two parameters, one named <code>event</code> of type <code>Event</code>, and the other named <code>passThroughData</code> of type <code>Object</code>.</p>
	</li>
	<li>
		<p>The <code>handleTimeout()</code> method should also be declared as protected and accept a single parameter named <code>passThroughData</code> of type <code>Object</code>.</p>

```
protected function handleWin( event:Event, passThroughData:Object ):void {
}
protected function handleTimeout( passThroughData:Object ):void {
}
```

</li>
	<li>
		<p>Add a call to the <code>Assert.assertEquals()</code> method in the <code>handleWin()</code> method. It should take <code>( event.target as Timer ).currentCount</code> and <code>passThroughData.repeatCount</code> as its arguments.</p>

```
protected function handleWin( event:Event, passThroughData:Object ):void {
	Assert.assertEquals( ( event.target as Timer ).currentCount, passThroughData.repeatCount );
}
```

</li>
	<li>
		<p>Add a call to the <code>Assert.fail()</code> method in the <code>handleTimeout()</code> method. It should take the string <code>"Pending event timed out"</code> as its argument.</p>

```
protected function handleTimeout( passThroughData:Object ):void {
	Assert.fail("Pending event timed out");
}
```

<p>If you did not use code-completion, add the import statements for flash.events.Event and org.flexunit.Assert at this time.</p>
	</li>
	<li>
		<p>Save BasicTimerTest.as.</p>
		<h3><br />Create an async suite</h3>
	</li>
	<li>
		<p>In the async.testcases package create a new ActionScript class named AsyncSuite. The package directory should appear as follows:</p>
		<img alt='PackageDirectory' id='shift' src='../images/unit13/image1.png' /> 
		<p class='caption' id='shift'>Figure 1: Package directory structure</p>
		<p>The AsyncSuite class will behave similar to the CircleSuite, running with the suite runner and calling tests within the flexUnitTests.cases.async package.</p> 
	</li>
	<li>
		<p>Remove the automatically created constructor from AsyncSuite.as.</p>

```
package async.testcases {
	public class AsyncSuite {	
	}
}
```

</li>
	<li>
		<p>Mark the AsyncSuite class definition with <code>[Suite]</code> and <code>[RunWith("org.flexunit.runners.Suite")]</code> metadata.</p>

```
package async.testcases {
	[Suite]
	[RunWith("org.flexunit.runners.Suite")]
	public class AsyncSuite {
	}
}
```

</li>
	<li>
		<p>Add a public variable named <code>test1</code> of type <code>BasicTimerTest</code>.</p>

```
public var test1:BasicTimerTest;
```

</li>
	<li>
		<p>Save AsyncSuite.as.</p>
		<p>Normally, a suite is not created to contain a single test case. In this case, we know ahead of time that the <code>Async</code> class will eventually contain more test files.</p> 
		<h3><br />Create a new top-level suite</h3>
		<p>At this point, your testing environment includes test cases for the <code>Circle</code> class as well as a new one in the async.testcases package. Take this opportunity to create a new top-level suite that will run all the suites from the various packages.</p>
	</li>
	<li>
		<p>In the tests directory, create a new package named testcases.</p>
	</li>
	<li>
		<p>In the new testcases package, create an ActionScript class named <code>AllSuites</code>. This class has no superclass or interfaces.</p>
	</li>
	<li>
		<p>Remove the automatically created constructor from the new class and mark it with <code>[Suite]</code> and <code>[RunWith("org.flexunit.runners.Suite")]</code> metadata.</p>

```
package testcases {
	[Suite]
	[RunWith("org.flexunit.runners.Suite")]
	public class AllSuites {
	}
}
```

</li>
	<li>
		<p>Add a public variable named <code>circleSuite</code> of type <code>CircleSuite</code> to the new class.</p>
	</li>
	<li>
		<p>Add another public varibale named <code>asyncSuite</code> of type <code>AsyncSuite</code> to the class.</p>

```
[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class AllSuites {
	public var circleSuite:CircleSuite;
	public var asyncSuite:AsyncSuite;	
}
```

<p>If you did not use code-completion, add the imports for math.testcases.CircleSuite and async.testcases.AsynSuite at this time.</p>
	</li>
	<li>
		<p>Save AllSuites.as.</p>
		<h3><br />Run the new suite from the application</h3>
	</li>
	<li>
		<p>Open the FlexUnit4Training.mxml file.</p>
	</li>
	<li>
		<p>Replace <code>CircleSuite</code> with <code>AllSuites</code> in the <code>testsToRun.push()</code> statement.</p>

```
testsToRun.push( CircleSuite );
```

<p>Becomes:</p>

```
testsToRun.push( AllSuites );
```

<p>If you did not use code-completion, add the import for the testcases.AllSuites at this time.</p>
	</li>
	<li>
		<p>Remove the import statement for math.testcases.CircleSuite from the FlexUnit4Training.mxml file.</p>
	</li>
	<li>
		<p>Save FlexUnit4Training.mxml.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit13/image2.png' />
		<p class='caption' id='shift'>Figure 2: FlexUnit tests passed</p>
	</li>
</ol>


<h2>Understanding error handling with async</h2>

<p>In Unit 5 you learned how to handle errors using the <code>[Test(expects="ErrorType")]</code> metadata. Asynchronous methods can handle errors in the same way. Errors thrown in the handler are still dealt with in the test method.</p>

```
[Test( async, expects="Error" )]
public function testTimerComplete():void {
	timer.addEventListener( TimerEvent.TIMER_COMPLETE,
		Async.asyncHandler( this, handleWin, 100, timer, handleTimeout ),
		false, 0, true );
	timer.start();
}
protected function handleWin( event:Event, passThroughData:Object ):void {
	throw new Error();
}
```

<p>As you can see, the <code>Async.asyncHandler</code> is called upon the <code>TIMER_COMPLETE</code> event, just as in the previous walkthrough. The resulting handler is simplistic, but clearly illustrates how the error is then handled through the test, where the metadata reads <code>[Test( async, expects="Error" )]</code>. There are several situations in which you need the message or the resulting handler to utilize <code>passThroughData</code> or additional custom information within the error thrown. In these cases, the <code>expects</code> annotation is insufficient. Here, the handler can be outfitted with a <code>try-catch</code> statement that handles a specific error and data potentially carried with that error.</p>

```
[Test( async )]
public function testTimerComplete():void {
	timer.addEventListener( TimerEvent.TIMER_COMPLETE,
		Async.asyncHandler( this, handleWin, 100, timer, handleTimeout ),
		false, 0, true );
	timer.start();
}
protected function handleWin( event:Event, passThroughData:Object ):void {
	try {
		throw new TypeError();
	}
	catch ( e:TypeError ) {
		assertThat( passThroughData, equalTo( timer ) );
		return;
	}
	Assert.fail( "Incorrect error thrown" );
}
```

<p>The <code>try-catch</code> statement is looking for a <code>typeError</code>, and then it continues to evaluate with an <code>assertThat</code> statement, expecting the equality of the <code>timer</code> and <code>passThroughData</code>. In these cases, the <code>expects</code> annotation will weaken the test. The test will only expect the kind of error specified, and it will not assert equality, such as is shown through the <code>catch</code> above.</p>


<h2>Event based synchronous versus asynchronous</h2>

<p>FlexUnit testing is based on the idea of synchronous tests occurring in order. These tests can throw events, errors, and deliver results, but they don't wait around for anything to happen, they just run.</p>
<p>Asynchronous tests are set apart through their metadata, and the asynchronous handlers are the only thing that can bring the test to completion. There are three primary kinds:</p>

<h3>Normal asynchronous completion</h3>

<p>When the test dispatches the expected event within the time limit, the <code>eventHandler</code> method is then called. Even though the desired event has been dispatched, the test does not automatically pass.</p>

```
Async.asyncHandler(testCase:Object, <b>eventHandler:Function</b>, timeout:int, passThroughData:Object=null,
 timeoutHandler:Function=null)
```

<h3>Asynchronous timeout</h3>

<p>Most Async methods are created with timeout variables. If the desired event is not dispatched within the time limit, the <code>timeoutHandler</code> is called.</p>
<p>When a <code>timeoutHandler</code> is specified, a timeout does not mark a test as a failure. If a timeout indicates failure you need to assert as such in the timeout method.</p>
<p>If a <code>timeoutHandler</code> is not passed in, the test merely completes with a generic timeout failure.</p>

```
Async.asyncHandler(testCase:Object, eventHandler:Function, timeout:int, passThroughData:Object=null,
 <b>timeoutHandler:Function=null</b>)
```

<h3>Failure events</h3>

<p>When using the Async.failOnEvent or Async.registerFailureOnEvent methods, specific events can be registered as an instantaneous failure.</p>

<h2>Walkthrough 2: Handling an Event</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Load external data for a parameterized test.</li>
	<li>Create a test fixture using asynchronous startup.</li>
	<li>Setup a test to proceed on completion of a simulated prime calculation.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Create a new ActionScript class named PrimeNumberGeneratorTest.as in the async.testcases package within the tests directory.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt2.fxp project from the Unit13/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Create the fixture</h3>
	</li>
	<li>
		<p>Mark the <code>PrimeNumberGeneratorTest</code> class with <code>[RunWith("org.flexunit.runners.Parameterized")]</code> metadata.</p> 

```
[RunWith("org.flexunit.runners.Parameterized")]
public class PrimeNumberGeneratorTest {
	public function PrimeNumberGeneratorTest() {
	}
}
```

<p>You will be using JUnit style paramterized loading for this test. Because this style requires parameters to be set in the constructor, leave the constructor in place.</p>
	</li>
	<li>
		<p>Add a private variable named <code>primeGenerator</code> of type <code>PrimeNumberGenerator</code> to the class.</p>

```
private var primeNumberGenerator:PrimeNumberGenerator;
```

<p>If you did not use code-completion, add the import for net.digitalprimates.math.PrimeNumberGenerator at this time.</p>
	</li>
	<li>
		<p>Add a private static constant named <code>TIMEOUT</code> of data type <code>int</code> and set it to <code>500</code>.</p>

```
private static const TIMEOUT:int = 500;
```

</li>
	<li>
		<p>Add another public static variable named <code>numberLoader</code> of type <code>NumberDataHelper</code>. Instantiate the variable with a URL string: "<code>xml/numberList.xml</code>"</p>

```
public static var numberLoader:NumberDataHelper = new NumberDataHelper( "xml/numberList.xml" );
```

<p>If you did not use code-completion, add the import for helper.NumberDataHelper at this time.</p>
	</li>
	<li>
		<p>Create a new static variable named <code>data</code>. Decorate it with the <code>Parameters</code> metadata and pass it a <code>loader</code> of <code>numberLoader</code></p>

```
[Parameters(loader="numberLoader")]
public static var data:Array;
```

</li>
	<li>
		<p>Add two private instance variables of type <code>Number</code> named <code>value</code> and <code>length</code>. In typical JUnit style, make the constructor take values for each as arguments, and set the instance variables when the constructor is run.</p> 

```
private var value:Number;
private var length:Number;
public function PrimeNumberGeneratorTest( value:Number, length:Number ) {
	this.value = value;
	this.length = length;
}
```

<p>All instance variables for the class should now be declared.</p>		
	</li>
	<li>
		<p>Create a new method named <code>setup()</code> and a method named <code>teardown()</code>. Decorate them with the <code>[Before( async )]</code> and <code>[After( async )]</code> metadata, respectively.</p>

```
[Before( async )]
public function setup():void {
}
[After( async )]
public function teardown():void {
}
```

<p>The <code>async</code> annotation notifies the test runner the <code>setup()</code> and <code>teardown()</code> methods are not complete when the end brace is reached. The <code>PrimeNumberGenerator</code> simulates this event through the use of a timer. You will need to specify a complete condition just as you would for an asynchronous test or the startup will hang indefinitely.</p> 
	</li>
	<li>
		<p>Within the <code>setup()</code> method, create a new instance of <code>primeNumberGenerator</code>.  On the next line, add a call to the method <code>Async.proceedOnEvent()</code> passing the arguments <code>this</code>, <code>primeNumberGenerator</code> and <code>TIMEOUT</code>.</p>

```
[Before( async )]
public function setup():void {
	primeNumberGenerator = new PrimeNumberGenerator();
	Async.proceedOnEvent( this, primeNumberGenerator, PrimeGeneratorEvent.GENERATOR_READY,
	 TIMEOUT );
}
```

<p><code>Async.proceedOnEvent()</code> causes the test runner to wait for the parameter <code>IEventDispatcher</code> to dispatch an event before proceeding.  In this case the event is named: <code>PrimeGeneratorEvent.GENERATOR_READY</code>.</p>
		<p>If you did not use code completion, add the imports for org.flexunit.async.Async and net.digitalprimates.event.PrimeGeneratorEvent at this time.</p>
	</li>
	<li>
		<p>In the <code>teardown()</code> method, remove the instance of <code>primeNumberGenerator</code>.</p>

```
[After( async )]
public function tearDown():void {
	primeNumberGenerator = null;
}
```

</li>
	<li>
		<p>Your completed asynchrounous startup should now appear as:</p>

```
[RunWith("org.flexunit.runners.Parameterized")]
public class PrimeNumberGeneratorTest {
	private var primeNumberGenerator:PrimeNumberGenerator;
	public static const TIMEOUT : int = 500;
	public static var numberLoader:NumberDataHelper =
	 new NumberDataHelper( "xml/numberList.xml" );
	[Before( async )]
	public function setup():void {
		primeNumberGenerator = new PrimeNumberGenerator();
		Async.proceedOnEvent( this, primeNumberGenerator, PrimeGeneratorEvent.GENERATOR_READY,
		 TIMEOUT );
	}
	[After( async )]
	public function teardown():void {
		primeNumberGenerator = null;
	}
	private var value:Number;
	private var length:Number;
	public function PrimeNumberGeneratorTest( value:Number, length:Number ) {
		this.value = value;
		this.length = length;
	}
}
```

<h3><br />Create the generator test</h3>
	</li>
	<li>
		<p>Add a new test method named <code>shouldCreatePrimeArray()</code> to the class, mark it with <code>[Test(async)]</code> metadata.  This method creates a new async handler to the <code>handleEvent()</code> method, passing in the arguments <code>this</code>, <code>primeNumberGenerator</code>, <code>PrimeNumberGenerator.GENERATION_COMPLETE</code>, <code>handleComplete</code> and <code>TIMEOUT</code>.</p>

```
[Test(async)]
public function shouldCreatePrimeArray():void {
	Async.handleEvent( this, primeNumberGenerator, PrimeGeneratorEvent.GENERATION_COMPLETE,
	 handleComplete, TIMEOUT );
}
```

</li>
	<li>
		<p>Add a call to <code>primeNumberGenerator.generatePrimes()</code> method, passing in the instance variable <code>value</code> as its argument.</p>

```
[Test(async)]
public function shouldCreatePrimeArray():void {
	Async.handleEvent( this, primeNumberGenerator, PrimeGeneratorEvent.GENERATION_COMPLETE,
	 handleComplete, TIMEOUT );
	primeNumberGenerator.generatePrimes( value );
}
```

</li>
	<li>
		<p>Create the <code>handleComplete()</code> method referenced in the <code>Async.handleEvent()</code> method from the previous step. It needs to accept two parameters, one named <code>event</code> of type <code>PrimeGeneratorEvent</code>, and another named <code>passThroughData</code> of type Object.</p>

```
protected function handleComplete( event:PrimeGeneratorEvent, passThroughData:Object ):void {
}
```

<p>The <code>Async.handleEvent()</code> method above declares no <code>timeoutHandler()</code>, so it will just use the default message. This will suffice for this walkthrough, however it can be added as the last argument of the <code>Async.handleEvent()</code> method if necessary.</p>
	</li>
	<li>
		<p>Add a call to the <code>assertThat()</code> method within the <code>handleComplete</code> method. It should assert that <code>event.primeList.length</code> is equal to <code>length</code>.</p>

```
protected function handleComplete( event:PrimeGeneratorEvent, passThroughData:Object ):void {
	assertThat( event.primeList.length, equalTo( length ) );
}
```

<p>If you did not use code-completion, add the imports for org.flexunit.assertThat and org.hamcrest.object.equalTo at this time.</p>
	</li>
	<li>
		<p>Save PrimeNumberGeneratorTest.as.</p>
		<h3><br />Add NumberGeneratorTest to the AsyncSuite</h3>
	</li>
	<li>
		<p>Open AsyncSuite.as in the async.testcases package. Add a public variable named <code>test2</code> of type <code>PrimeNumberGeneratorTest</code>.</p>

```
package async.testcases {
	[Suite]
	[RunWith("org.flexunit.runners.Suite")]
	public class AsyncSuite {
		public var test1:BasicTimerTest;
		public var test2:PrimeNumberGeneratorTest;
	}
}
```

</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully, you should see the following in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit13/image3.png' />
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed</p>
	</li>
</ol>

<h2>Chaining async operations</h2>

<p>Frequently, integration tests require a sequence of events before the actual test can be performed. In simple event sequences, chaining async handlers is an effective way to test component behaviors.</p>
<p>Consider the case of an alarm clock that cycles a series of pictures on expiration:</p>
<ol>
	<li>A user sets an alarm.</li>
	<li>When the alarm expires, the system displays a series of pictures on an interval.</li>
</ol>
<p>Now consider all the steps that occur when testing this scenario:</p>
<ol>
	<li>The test would need to set an alarm.</li>
	<li>The system would need to wait for alarm expiration.</li>
	<li>The system would display a picture.</li>
	<li>The test would have to wait for the picture display time to expire.</li>
	<li>Repeat steps 3 and 4.</li>
	<li>The test would have to wait for the system to complete displaying all the pictures.</li>
</ol>
<p>This is a testable use case. The testing concern is whether the component fires the events and system displays all the pictures. You could use a chain of async handlers.</p> 

```
[Test( async, ui )]
public void shouldSubmitForm():void {
	//Create a new alarm clock
	//Set an alarm time
	//Proceed on event: "alarmExpired"
	//Wait for the picture
	//Proceed on event: "pictureLoaded"
	//Display the picture
	//Proceed on event: "pictureDisplayExpired"
	//Load and display other pictures
	//Proceed on event: "allPicturesDisplayed"
	//Verify expected number of pictures displayed
}
```

<p>As you can see, this can rapidly become very complex as we wait for event after event. Each of these asynchronous operations could require its own async handler leading to a very large test class. This is a simple example, but many UI components, which we will cover in the next unit, can rapidly devolve into a massive integration test. In addition, some components, especially higher level components, require user interaction that cannot be easily simulated through the use of async chains.</p>
<p>FlexUnit 4 contains a special tool for handling these types of use cases called sequences.</p>

<h2>Understanding sequences</h2>

<p>Sequences are methods by which a developer can create a series of tests, execute the steps and handle the resulting sequence completion. Sequences control the flow of a components execution.</p> 
<p>Sequences have the ability to:</p>
<ol>
	<li>Call methods</li>
	<li>Set properties</li>
	<li>Wait for events</li>
	<li>Dispatch events</li>
	<li>Wait for binding</li>
</ol>
<p>Sequences require the test case to use the custom runner named SequenceRunner. Each sequence is created by instantiating a sequence with the current test case, adding a series of tests, adding an optional assert handler and finally running the sequence.</p> 
<p>A simple sequence for a timer would appear as follows:</p>

```
[Test( async )]
public function shouldCompleteTimerSequence():void {
	var timer:Timer = new Timer( TIMEOUT );
	var sequence:SequenceRunner = new SequenceRunner( this );
	sequence.addStep( new SequenceCaller( timer, timer.start ) );
	sequence.addStep( new SequenceWaiter( timer, TimerEvent.TIMER, TIMEOUT2 ) );
	sequence.addStep( new SequenceWaiter( timer, TimerEvent.TIMER, TIMEOUT2 ) );
	sequence.addStep( new SequenceWaiter( timer, TimerEvent.TIMER, TIMEOUT2 ) );
	sequence.addStep( new SequenceCaller( timer, timer.stop );
	sequence.addAssertHandler( handleSequenceComplete, null );
	sequence.run();
}
```

<p>In this example, the sequence will: start a timer, wait for the timer to cycle three times, stop the timer and make an assertion. The advantage to this setup is if the timer needed to cycle two more times you would just need to add two more sequence waiters.</p>
<p>In the next walkthrough, you will create your own sequence.</p>

<h2>Walkthrough 3: Creating a chain of events with Sequences</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Write a sequence to test a fake database retrieval connection.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Create a new ActionScript class named ServiceSequenceTest.as in the async.testcases package within the tests directory.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt3.fxp project from the Unit13/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Create the fixture</h3>
	</li>
	<li>
		<p>Remove the automatically generated constructor.  You will not need it for this test.</p>
	</li>
	<li>
		<p>Add a new private static const named <code>TIMEOUT</code> of type <code>Number</code> and set it to the value <code>500</code>.</p>

```
private static const TIMEOUT:Number = 500;
```

</li>
	<li>
		<p>Add a private variable named <code>service</code> of type <code>ServiceStub</code> to the class.</p>

```
private var service:ServiceStub;
```

<p>If you did not use code-completion, add the import for net.digitalprimates.stub.ServiceStub at this time.</p>
	</li>
	<li>
		<p>Create the methods <code>setup()</code> and <code>teardown()</code> and decorate them with the <code>[Before]</code> and <code>[After]</code> metadata respectively. Inside the <code>setup()</code> method create a new instance of <code>service</code> variable. In the <code>teardown()</code> method, set it to null so that it may be garbage collected.</p>

```
[Before]
public function setup():void {
	service = new ServiceStub();
[After]
public function teardown():void {
	service = null;
}
```

<h3><br />Prepare the test case</h3>
	</li>
	<li>
		<p>Create a new test called <code>shouldCompleteRequest()</code>. Mark it with <code>[Test(async)]</code> metadata.</p>

```
[Test( async )]
public function shouldCompleteRequest():void {
}
```

<p>A request is considered complete when a call to the service instance's <code>shouldCompleteRequest()</code> method has created a connection, sent the request and shutdown the connection. To create a test that listens for all of these events you may either create an asynchrounous chain of handlers or use a sequence. For this test, you will be using a sequence.</p>
	</li>
	<li>
		<p>Inside the body of <code>shouldCompleteRequest()</code>, declare a new variable <code>sequence</code> of the type <code>org.fluint.sequence.SequenceRunner</code>. Make sure you are using the correct <code>SequenceRunner</code> class.</p>

```
[Test( async )]
public function shouldCompleteRequest():void {
	var sequence:SequenceRunner = new SequenceRunner( this );
}
```

<p>If you did not use code-completion, add the import for org.fluint.sequence.SequenceRunner at this time.</p>
		<h3><br />Create the Sequence</h3>
		<p>The next block will setup all the <code>SequenceCallers</code> and <code>SequenceWaiters</code> for the <code>SequenceRunner</code>. In this step you will want to test that when <code>sendRefreshRequest()</code> is called service creates a connection to the server, sends a refresh request and closes the connection.  It is phrased politely because the server may take longer to complete this request depending on various factors such as connection speed, number of requests, etc.</p>
		<p>To add these steps, you will use the sequence's <code>addStep()</code> method. This method has a single parameter, which must be of type <code>org.fluint.sequence.ISequenceStep</code>. A sequence does not execute until its <code>run()</code> method is called.</p>
	</li>
	<li>
		<p>Add a call to <code>sequence.addStep()</code> passing as an argument <code>new SequenceCaller()</code>. Pass the <code>SequenceCaller</code> constructor the arguments <code>service</code> and <code>service.sendRefreshRequest</code>.</p>

```
sequence.addStep( new SequenceCaller( service, service.sendRefreshRequest ) );
```

<p>If you did not use code-completion, add the import for org.fluint.sequence.SequenceCaller at this time.</p>
		<p><code>SequenceCaller</code> sets up an asynchronous delay for the method call. Instead of calling it now, the method will be called when the sequence runs.</p>
	</li>
	<li>
		<p>Next, add a step to the sequence passing as an argument a new instance of the <code>SequenceWaiter</code> class. Pass it <code>service</code>, <code>StubServiceEvent.CONNECTION_CREATED</code>, and <code>TIMEOUT</code> as its arguments.</p>

```
sequence.addStep( new SequenceWaiter( service, StubServiceEvent.CONNECTION_CREATED, TIMEOUT ) );
```

<p>If you did not use code-completion, add the imports for org.fluint.sequence.SequenceWaiter and net.digitalprimates.event.StubServiceEvent at this time.</p>
		<p>A <code>SequenceWaiter</code> creates an asynchronous handler for the parameter event. When this event is dispatched, the sequence will continue. If the event is not dispatched before the timeout, the timeout handler is called. In this case you are using the default timeout handler which will throw an error. When dealing with a long sequence it is generally best practice to create a custom handler for each <code>SequenceWaiter</code> to avoid confusion.</p>
	</li>
	<li>
		<p>On the next line add a call to the <code>addStep()</code> method that instantiates a <code>new SequenceWaiter</code> with arguments <code>service</code>, <code>StubServiceEvent.RECEIVED_REQUEST</code>, and <code>TIMEOUT</code>.</p>

```
sequence.addStep( new SequenceWaiter( service, StubServiceEvent.RECEIVED_REQUEST, TIMEOUT ) );
```

</li>
	<li>
		<p>Add a final SequenceWaiter with arguments <code>service</code>, <code>StubServiceEvent.SHUTDOWN_RECEIVED</code>, and <code>TIMEOUT</code>.</p>

```
sequence.addStep( new SequenceWaiter( service, StubServiceEvent.SHUTDOWN_RECEIVED, TIMEOUT ) );
```

<p>The expected sequence is now set. However, there is no assert set for the completion of the sequence. Currently, as long as all the events are received in order the test is a success. If any of the events are not received within the specified timeout limit, the test fails.</p>
	</li>
	<li>
		<p>Add a call to <code>service.addAssertHandler()</code> passing <code>handleCompleteRequest</code> and <code>null</code>.</p>

```
sequence.addAssertHandler( handleCompleteRequest, null );
```

<p>The <code>addAssertHandler</code> adds an async handler for when the sequence completes successfully and will call the method specified. In this case, it will call <code>handleCompleteRequest()</code>.</p>
	</li>
	<li>
		<p>To complete the sequence, call <code>sequence.run()</code> within the <code>shouldCompleteRequest()</code> method.</p>

```
sequence.run();
```

<p>Your complete <code>shouldCompleteRequest()</code> method should now appear as follows:</p>

```
[Test( async )]
public function shouldCompleteRequest():void {
	var sequence:SequenceRunner = new SequenceRunner( this );
	sequence.addStep( new SequenceCaller( service, service.sendRefreshRequest ) );
	sequence.addStep( new SequenceWaiter( service, StubServiceEvent.CONNECTION_CREATED,
	 TIMEOUT ) );
	sequence.addStep( new SequenceWaiter( service, StubServiceEvent.RECEIVED_REQUEST,
	 TIMEOUT ) );
	sequence.addStep( new SequenceWaiter( service, StubServiceEvent.SHUTDOWN_RECEIVED,
	 TIMEOUT ) );
	sequence.addAssertHandler( handleCompleteRequest, null );
	sequence.run();
}
```

<p>If you did not use code-completion, add import statements for, org.fluint.sequence package.SequenceCaller and org.fluint.sequence package .SequenceWaiter at this time.</p>
	</li>
	<li>
		<p>Create the <code>handleCompleteRequest()</code> function.  This function takes two paramters; one named <code>event</code> of type <code>Event</code> and another named <code>passThroughData</code> of type <code>Object</code>.</p>

```
protected function handleCompleteRequest( event:Event, passThroughData:Object ):void {
}
```

<p>If you did not use code-completion, add the import for flash.events.Event at this time.</p>
	</li>
	<li>
		<p>Add a call to <code>assertFalse()</code> within the <code>handleCompleteRequest()</code> method, asserting that service connection has been terminated.</p>

```
protected function handleCompleteRequest( event:Event, passThroughData:Object ):void {
	assertFalse( service.connected );
}
```

<p>If you did not use code-completion, add the imports for org.flexunit.assertThat at this time.</p>
	</li>
	<li>
		<p>Save ServiceSequenceTest.as.</p>
		<h3><br />Add the new case to AsyncSuite</h3>
	</li>
	<li>
		<p>Open the AsyncSuite.as file in the async.testcases package.</p>
	</li>
	<li>
		<p>Add a new public variable named <code>test3</code> of type <code>ServiceSequenceTest</code> to the class.</p>

```
package async.testcases {
	[Suite]
	[RunWith("org.flexunit.runners.Suite")]
	public class AsyncSuite {
		public var test1:BasicTimerTest;
		public var test2:PrimeNumberGeneratorTest;
		public var test3:ServiceSequenceTest;
	}
}
```

</li>
	<li>
		<p>Save the AsyncSuite.as file.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If FlexUnit4Training.mxml ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit13/image4.png' />
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed.</p>
	</li>
</ol>

<h2>Summary</h2>

<ul>
	<li><p>Fully testing the behavior of a class often involves calling methods, waiting for asynchronous events and verifying the response.</p></li>
	<li><p>Decorating the <code>[Test]</code> metadata with the <code>async</code> annotation notifies the runner that the test is not complete once the method has reached its closing brace.</p></li>
	<li><p>The <code>Async</code> class is used to set up completion and timeout handlers for the test.</p></li>
	<li><p>Annotating the <code>[Test]</code> metadata with <code>expects</code> allows for asynchronous error handling.</p></li>
	<li><p>Sequences can be used to test a series of asynchronous operations.</p></li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-12.html">Unit 12 - Running Tests from Different Versions</a></li>
    <li><a href="Unit-14.html">Unit 14 - UIComponents</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>