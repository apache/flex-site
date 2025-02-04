Title:  Unit 14 - UIComponents

<a href="../code/Unit14.zip"><img src="../images/DownloadIcon.png" alt="Download" /> Download Unit Project Files</a>

<p>All user interface components in Flex extend the UIComponet class. When a UIComponent is added to the display list, the component must go through a complicated process before it appears on the screen and is ready to be tested. User interaction must also be simulated. Because of this, testing UIComponents is an inherently asynchronous process.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Handle the asynchronous functionality of component creation in the UI</li>
	<li>Test a component off the display list</li>
	<li>Create integration tests for components</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Understanding how the display list interacts with UIComponents</li>
	<li>Understanding inherent asynchronous behavior</li>
	<li>Understanding the UI Facade</li>
	<li>Waiting for a component to reach its ready state before testing</li>
</ul>

<h2>Walkthrough 1: Trying to Test a Component Off DisplayList</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Use the UIImpersonator to test UI components.</li>
	<li>Create an Async handler to test a component after its addition to the UIComponent.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>In the tests directory, create a new package named login.testcases.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training.fxp project from the Unit14/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Create the LoginStartupTest class</h3>
	</li>
	<li>
		<p>In the package <code>login.testcases</code>, create a new ActionScript class file named LoginStartupTest.as.</p>
		<p>Do not delete the automatically generated constructor. You will need it in the next section.</p>
	</li>
	<li>
		<p>Add a private static constant named <code>LONG_TIME</code> of data type <code>int</code>. Set the constant to <code>500</code>.</p>

```
private static const LONG_TIME:int = 500;
```

</li>
	<li>
		<p>Just below add a private variable named <code>loginComponent</code> of type <code>LoginComponent</code>.</p>

```
private var loginComponent:LoginComponent;
```

<p>If you did not use code-completion, add the import for net.digitalprimates.components.login.LoginComponent at this time.</p>
	</li>
	<li>
		<p>Create a new public method named <code>setup()</code> and a new public method named <code>teardown()</code>. Decorate them with <code>[Before(async, ui)]</code> and <code>[After(async, ui)]</code>.</p>

```
[Before(async, ui)]
public function setup():void {
}
[After(async, ui)]
public function teardown() {
}
```

</li>
	<li>
		<p>In the <code>setup()</code> method, create a new instance of <code>loginComponent</code>. On the line immediately following, add a call to <code>Async.proceedOnEvent()</code> passing it the values <code>this</code>, <code>loginComponent</code>, and <code>FlexEvent.CREATION_COMPLETE</code>.</p>

```
[Before(async, ui)]
public function setup():void {
	loginComponent = new LoginComponent();
	Async.proceedOnEvent( this, loginComponent, FlexEvent.CREATION_COMPLETE );
}
```

<p>If you did not use code completion, add the imports for org.flexunit.async.Async.</p>
	</li>
	<li>
		<p>Immediately after the async handler add the loginComponent to the UIImpersonator</p>

```
UIImpersonator.addChild( loginComponent )
```

<p>If you did not use code completion, add the import for org.fluint.uiImpersonation.UIImpersonator.</p>
		<p>The UIImpersonator acts as a facade for the UI allowing visual components to be created without being added to the display list. You will learn more about the UIImpersonator and UI facades in the next section.</p>
	</li>
	<li>
		<p>In the <code>teardown()</code> method, remove the loginComponent from the UIImpersonator and cleanup the instance of loginComponent.</p>

```
[After(async, ui)]
public function teardown():void {
	UIImpersonator.removeChild( loginComponent );
	loginComponent = null;
}
```

</li>
	<li>
		<p>Add a public function named <code>shouldReturnEmptyFieldsOnStartup()</code>, mark it with <code>[Test(ui)]</code> metadata.</p>  

```
[Test(ui)]
public function shouldReturnEmptyFieldsOnStartup():void {
}
```

</li>
	<li>
		<p>Add two calls to the <code>assertThat()</code> method in the <code>shouldReturnEmptyFieldsOnStartup()</code> function. The first should check that <code>loginComponent.usernameTI.text</code> is empty and the other should check that <code>loginComponent.passwordTI.text</code> is empty.</p>

```
[Test(ui)]
public function shouldReturnEmptyFieldsOnStartup():void {
	assertThat( loginComponent.usernameTI.text == '' );
	assertThat( loginComponent.passwordTI.text == '' ); 
}
```

</li>
	<li>
		<p>Save LoginStartupTest.as.</p>
		<h3><br />Add LoginStartupTest to the Suite</h3>
	</li>
	<li>
		<p>Add a new ActionScript class named LoginSuite to the login.testcases package within the tests directory. It should have no Superclass or interfaces.</p>
	</li>
	<li>
		<p>Remove the automatically created constructor from the class.</p>
	</li>
	<li>
		<p>Mark the class with <code>[Suite]</code> and <code>[RunWith("org.flexunit.runners.Suite")]</code> metadata.</p>

```
package login {
	[Suite]
	[RunWith("org.flexunit.runners.Suite")]
	public class LoginSuite {
	}
}
```

</li>
	<li>
		<p>Add a public variable named <code>test1</code> of type <code>LoginStartupTest</code> to the class.</p>

```
[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class LoginSuite {
	public var test1:LoginStartupTest;
}
```

<p>If you did not use code-completion, add the imports for login.testcases.LoginSequenceTest at this time.</p>
	</li>
	<li>
		<p>Save the LoginSuite.as file.</p>
	</li>
	<li>
		<p>Open the AllSuites.as file in the testcases package within the tests directory.</p>
	</li>
	<li>
		<p>Remove the loginSequenceTest variable.</p>
	</li>
	<li>
		<p>Add a public variable named <code>loginSuite</code> of type <code>LoginSuite</code> to the class.</p>

```
[Suite]
[RunWith("org.flexunit.runners.Suite")]
public class AllSuites {
	public var circleSuite:CircleSuite;
	public var layoutTest:LayoutTest;
	public var loginSuite:LoginSuite;
}
```

</li>
	<li>
		<p>Save the AllSuites.as file.</p>
	</li>
	<li>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If your MXML file ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit14/image1.png' />
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed</p>
	</li>
</ol>

<h2>Understanding how the display list interacts with UIComponents</h2>

<p>In AS3, UIComponents may be instantiated off the display list. When a component is instantiated, basic setup of the component is performed. However, styles, size, and children are not set or created. This means that when testing a component, merely instantiating the component is not enough to put it in a testable state. Creation of the component has only just begun.</p>
<p>When the component is added to the display list, the component creation continues. Once this cycle is complete, the component is in a testable state. Due to the asynchronous nature of all UIComponents, these components require a special way of testing.</p>

<h2>Understanding inherent asynchronous behavior</h2>

<p>UIComponent creation is broken down into a series of four stages: construction, configuration, attachment and initialization. The time it takes to fully create a component depends on the nature of the component and any children it may have.</p>

<h3>Construction Stage</h3>

<p>During this stage the component constructor is called. Frequently we add listeners to the component, set properties or initialize other non-display objects.</p>

<h3>Configuration Stage</h3>

<p>In this stage, properties set by setters are set internally for later configuration.</p>

<h3>Attachment Stage</h3>

<p>This stage is triggered by a UIComponent being added to the display list.  During this stage the parent property is set on the component. Once complete, the component begins initialization.</p>

<h3>Initialization Stage</h3>

<p>This stage comprises the largest portion of the components creation. During this stage children are created, the component is sized, and styles are set. A component with many children has to wait for each child component to complete creation before its initialization can be considered complete. If those children have children they will in turn need to wait for their children's creation complete event, and so on. During this stage the component goes through the following steps:</p>
<ol>
	<li>The <i>preinitialize</i> event is dispatched.</li>
	<li>The children of the component are created in the <code>createChildren()</code> method.</li>
	<li>The <i>initialize</i> event is dispatched.</li>
	<li>The state of the component is invalidated.</li>
	<li>The <code>commitProperties()</code>,  <code>measure()</code> and <code>updateDisplayList()</code> methods are called.</li>
	<li>The <i>creationComplete</i> event is dispatched.</li>
</ol>

<h2>Understanding the UI Facade</h2>

<p>The UI facade acts as a buffer between the actual UI and the main application. Through the use of a facade the UI can change without affecting the way the rest of the system interacts. In this way, the application needs to know only how to interact with the facade. As long as both the UI and business logic follow the facade's interface, both can change at will without a change from one requiring a change in the other.</p>
<p>The UI facade allows the testing of UIComponents without the display list. However, adding components to the facade will still cause them to go through their entire creation process. There is no need for a component to be visible for it to be tested.</p>
<p>In FlexUnit 4, the UIImpersonator acts as a facade for UI based components. The UIImpersonator contains addChild, removeChild, getChildAt and can be interacted with in the same way as the display list without the extra overhead.</p>

<h2>Waiting for a component to reach its ready state before testing</h2>

<p>Attempting to test a UIComponent before it reaches its ready state may cause the test to fail. The component may not be properly measured, sized, or positioned and its children may not be fully created. Its properties may have unexpected values.</p>
<p>Fortunately, UIComponents notify us when they have reached their ready state by dispatching the <i>creationComplete</i> event. At this point, we can be reasonably sure all children are created and the component is ready for testing.</p>

<h3>Asynchronous Startup</h3>

<p>To use asynchronous startup, decorate the <code>Before</code> method with the <code>async</code> annotation. If the startup is due to UI, you will also want to decorate it with <code>ui</code>, as in:</p>

```
[Before(async, ui)]
public function setup():void {}
```

<p>The main body of the setup method has to instantiate the component, add the async handler and add it to the facade. The UIImpersonator is a static class that mimics a component on the display list. It contains several static functions that may be used in place of the real functions. To add a UIComponent to the facade, use the UIImpersonator's <code>addChild()</code> method, passing the component as the parameter:</p>

```
component = new UIComponent();
Async.proceedOnEvent( this, component, "creationComplete", TIMEOUT, timeoutHandler );
UIImpersonator.addChild( component );
```

<p>Once the <i>creationComplete</i> is dispatched, tests will continue. Be sure to remove the component from the UIImpersonator at the end of the test. Otherwise, the component will remain in memory.</p>

<h3>Using async startup chains</h3>

<p>In some cases, such as when using the ParameterizedRunner, async startup may not be possible. In this case, we will have to create an async startup chain at the beginning of the test. In this instance we create the component as we would in the setup of the asynchronous startup; however we do it at the beginning of the test. We then wait for the creationComplete call before proceeding with the test.</p>

```
[Test(async, ui)]
public function componentShouldDoSomething():void {
	Component = new UIComponent();
	Async.proceedOnEvent( this, component, "creationComplete", TIMEOUT, timeoutHandler );
	UIImpersonator.addChild( component );
	// rest of the test
}
```

<p>With this type of test, you will need to clean up the test by removing the component from the UIImpersonator in all async handlers.</p>

<h2>Walkthrough 2: Creating integration tests for a component</h2>

<p>In this walkthrough you will perform the following tasks:</p>
<ul>
	<li>Test that a login component dispatches an event with the entered login information when the user attempts to log in.</li>
</ul>

<h3>Steps</h3>

<ol>
	<li>
		<p>Open the file LoginIntegrationTest.as in the login.testcases package within the tests directory.</p>
		<p>Alternatively, if you didn't complete the previous lesson or your code is not functioning properly, you can import the FlexUnit4Training_wt2.fxp project from the Unit 14/Start folder. Please refer to Unit 2: Walkthrough 1 for instructions on importing a Flash Builder project.</p>
		<h3><br />Setup the Parameterized Test</h3>
	</li>
	<li>
		<p>Immediately before the class declaration, add the <code>RunWith</code> metadata for the Parameterized runner.</p>

```
[RunWith("org.flexunit.runners.Parameterized")]
```

<p>Declare two private variables of type <code>String</code> named <code>username</code> and <code>password</code>. Also, declare a protected variable named <code>loginComponent</code> of type <code>LoginComponent</code>.</p>

```
private var username:String;
private var password:String; 
protected var loginComponent:LoginComponent;
```

<p>If you did not use code-completion, add the import for net.digitalprimates.components.login at this time.</p>
	</li>
	<li>
		<p>Add the data loader for the login data points.</p>

```
public static var userAndPasswordDataLoader:UserAndPasswordDataHelper = 
	new UserAndPasswordDataHelper("xml/usersAndPasswords.xml" );
```

<p>If you did not use code-completion, add the import for helper.UserAndPasswordDataHelper at this time.</p>
		<h3><br />Create the login sequence test</h3>
	</li>
	<li>
		<p>Create a new test named <code>shouldLoginWithProvidedCredentials</code> that takes two arguments, a username of type <code>String</code> and a password of type <code>String</code>. Decorate it with the metadata <code>[Test( async, ui, id="userAndPasswordDataLoader" )]</code>.</p>

```
[Test(async, ui, id="userAndPasswordDataLoader")]
public function shouldLoginWithProvidedCredentials( username:String, password:String ):void {
}
```

</li>
	<li>
		<p>Add a variable named <code>sequence</code> of type <code>SequenceRunner</code> to the <code>shouldLoginWithProvidedCredentials()</code> method. Instantiate it with <code>this</code> as its argument.</p>

```
protected function handleComponentReady(event:FlexEvent, passThroughData:Object ):void {
	var sequence:SequenceRunner = new SequenceRunner( this );
}
```

<p>If you did not use auto complete, add the import for org.fluint.sequence.SequenceRunner.</p>
	</li>
	<li>
		<p>Create a new Object called <code>passThroughData</code>. Assign it the <code>username</code> and <code>password</code> constructor arguments.</p>

```
var passThroughData:Object = new Object();
passThroughData.username = username;
passThroughData.password = password;
```

</li>
	<li>
		<p>Add a call to the <code>sequence.addStep()</code> method, pass in <code>new SequenceSetter( loginComponent.usernameTI, {text:username} )</code> as its argument.</p>

```
sequence.addStep( new SequenceSetter( loginComponent.usernameTI, {text:username} ) );
```

<p>SequenceSetter simulates a call to the setter during sequence execution.</p>
		<p>If you did not use auto complete, add the import for org.fluint.sequence.SequenceSetter.</p>
	</li>
	<li>
		<p>Add another call to the <code>sequence.addStep()</code> method just below the last; pass in <code>new SequenceWaiter( loginComponent.usernameTI, FlexEvent.VALUE_COMMIT, LONG_TIME )</code> as its argument.</p>

```
sequence.addStep( new SequenceSetter( loginComponent.usernameTI, {text:username} ) );
sequence.addStep( new SequenceWaiter( loginComponent.usernameTI, FlexEvent.VALUE_COMMIT,
 LONG_TIME ) );
 ```

<p>If you did not use code-completion, add the imports for org.fluint.sequence.SequenceSetter and org.fluint.sequence.SequenceWaiter at this time.</p>
	</li>
	<li>
		<p>Add a call to the <code>sequence.addStep()</code> method; pass in <code>new SequenceSetter(  loginComponent.passwordTI, {text:password} )</code> as its argument.</p>
	</li>
	<li>
		<p>Add another call to the <code>sequence.addStep()</code> method just below the last; pass in  <code>new SequenceWaiter( loginComponent.passwordTI, FlexEvent.VALUE_COMMIT, LONG_TIME )</code> as its argument.</p>

```
sequence.addStep( new SequenceSetter( loginComponent.passwordTI, {text:password} ) );
sequence.addStep( new SequenceWaiter( loginComponent.passwordTI, FlexEvent.VALUE_COMMIT,
 LONG_TIME ) );
 ```

</li>
	<li>
		<p>Add a call to the <code>sequence.addStep()</code> method, pass in <code>new SequenceEventDispatcher( loginComponent.loginBtn, new MouseEvent( MouseEvent.CLICK, true, false ) )</code> as its argument.</p>
	</li>
	<li>
		<p>Add another call to the <code>sequence.addStep()</code> method, pass in <code>new SequenceWaiter( loginComponent, 'loginSuccess', LONG_TIME, handleSuccessTimeout ) )</code> as its argument.</p>

```
sequence.addStep( new SequenceEventDispatcher( loginComponent.loginBtn,
 new MouseEvent( MouseEvent.CLICK, true, false ) ) );
sequence.addStep( new SequenceWaiter( loginComponent, 'loginRequested', LONG_TIME,
 handleSuccessTimeout ) );
 ```

<p>If you did not use code-completion, add the imports for org.fluint.sequence.SequenceEventDispatcher and flash.events.MouseEvent at this time.</p>
	</li>
	<li>
		<p>Add a call to the <code>sequence.addAssertHandler()</code> method, pass in <code>handleLoginSuccess</code> and <code>passThroughData</code> as its arguments.</p>
	</li>
	<li>
		<p>Add a call to the run() method, which is required for the sequence to run.</p>

```
sequence.addAssertHandler( handleLoginRequested, passThroughData );	
sequence.run();
```

<p>With this setup, if the login is requested the event will be handled. If the login request is not fired, control will pass to the timeout handler.  The completed method should read as:</p>

```
[Test(async, ui, dataProver="userData")]
public function shouldLoginWithProvidedCredentials( username:String, password:String ):void {
	var sequence:SequenceRunner = new SequenceRunner( this );
	var passThroughData:Object = new Object();
	passThroughData.username = username;
	passThroughData.password = password;
	sequence.addStep( new SequenceSetter( loginComponent.usernameTI, {text:username} ) );
	sequence.addStep( new SequenceWaiter( loginComponent.usernameTI, FlexEvent.VALUE_COMMIT,
	 LONG_TIME ) );
	sequence.addStep( new SequenceSetter( loginComponent.passwordTI, {text:password} ) );
	sequence.addStep( new SequenceWaiter( loginComponent.passwordTI, FlexEvent.VALUE_COMMIT,
	 LONG_TIME ) );
	sequence.addStep( new SequenceEventDispatcher( loginComponent.loginBtn,
	 new MouseEvent( MouseEvent.CLICK, true, false ) ) );
	sequence.addStep( new SequenceWaiter( loginComponent, 'loginRequested', LONG_TIME,
	 handleSuccessTimeout ) );
	sequence.addAssertHandler( handleLoginRequested, passThroughData );	
	sequence.run();
}
```

</li>
	<li>
		<p>Add a protected function named <code>handleLoginRequested()</code>. It should take a parameter named <code>event</code> of type <code>Event</code> and a parameter named <code>passThroughData</code> of data type <code>Object</code>.</p>  

```
protected function handleLoginRequested( event:Event, passThroughData:Object ):void {
}
```

</li>
	<li>
		<p>Add a call to the <code>assertThat()</code>. It should assert that the <code>passThroughData.username</code> variable is <code>equalTo( loginComponent.usernameTI.text.)</code>.</p>
	</li>
	<li>
		<p>Add a call to the <code>assertThat()</code>. It should assert that the <code>passThroughData.password</code> instance variable is equalTo( loginComponent.passwordTI.text ).</p>

```
protected function handleLoginRequested( event:Event, passThroughData:Object ):void {
	assertThat( passThroughData.username, equalTo( loginComponent.usernameTI.text ) );
	assertThat( passThroughData.password, equalTo( loginComponent.passwordTI.text ) );
}
```

<p>If you did not use code-completion, add the imports for org.flexunit.assertThat and org.hamcrest.object.equalTo.</p>
	</li>
	<li>
		<p>Add a protected function named <code>handleSuccessTimeout()</code> in the class. It should take a parameter named <code>passThroughData</code> of type <code>Object</code>.</p>

```
protected function handleSuccessTimeout(passThroughData:Object):void{
}
```

</li>
	<li>
		<p>In the timeout handler, add a call to <code>fail()</code>, passing it the message "Login request was not received as expected".</p>
	</li>
	<li>
		<p>Add another call to the <code>assertThat()</code> method. It should assert that the instance variable <code>password</code> is <code>not( equalTo( LoginComponent.PASSWORD ) )</code>.</p>

```
protected function handleSuccessTimeout(passThroughData:Object):void {
	fail( "Login request was not received as expected" );
}
```

</li>
	<li>
		<p>Save LoginStartupTest.as.</p>
		<p>Run the FlexUnit4Training.mxml file.</p>
		<p>If your mxml file ran successfully you should see the following output in your browser window:</p>
		<img alt='TestsPassed' id='shift' src='../images/unit14/image2.png' />
		<p class='caption' id='shift'>Figure 1: FlexUnit tests passed</p>
	</li>
</ol>

<h2>Summary</h2>

<ul>
	<li><p>Adding components to the display list is an inherently asynchronous process.</p></li>
	<li><p>UIImpersonator</p></li>
	<ul>
		<li><p>UI facade for testing components UI components off the display list.</p></li>
		<li><p>Uses the addChild() method to add components.</p></li>
	</ul>
	<li><p>Uses the removeChild() method to remove components. UI components must reach a ready state before testing.</p></li>
	<li><p>UI integration testing</p></li>
	<ul>
		<li><p>Tests properties and methods of components present in the UI.</p></li>
		<li><p>May require sequential operation</p></li>
	</ul>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-13.html">Unit 13 - Working with Asynchronous Operations</a></li>
    <li><a href="Unit-15.html">Unit 15 - Creating Testable Code</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>
