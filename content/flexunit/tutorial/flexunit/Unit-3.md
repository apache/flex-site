Title:  Unit 3 - FlexUnit Capabilities

<p>Flexunit 4.x was designed to address many of the shortcomings of available Flex testing frameworks while enabling the extensibility needed by an evolving Flex community.</p>

<h3>Objectives:</h3>

<p>After completing this lesson, you should be able to:</p>
<ul>
	<li>Explain the role of listeners, runners, and rules</li>
	<li>Explain the roles of the default runners available in FlexUnit 4.x</li>
</ul>

<h3>Topics</h3>

<p>In this unit, you will learn about the following topics:</p>
<ul>
	<li>Goals of FlexUnit 4</li>
	<li>Integration Points</li>
	<li>Extensibility</li>
	<li>Integration with other frameworks</li>
	<li>Provided Runners</li>
</ul>

<h2>Goals of FlexUnit 4.x</h2>

<p>FlexUnit 4.x is an extensible testing framework designed to provide unit and integration testing to its users. It was designed with several important goals in mind:</p>
<ul>
	<li>It needed to handle both ActionScript and Flex projects.</li>
	<li>It needed to run legacy FlexUnit .9 tests.</li>
	<li>It needed to run legacy Fluint 1.x tests.</li>
	<li>It needed to provide test results to a continually growing variety of external systems.</li>
	<li>It needed to reach parity with modern testing frameworks for other languages.</li>
	<li>It needed to support future expansion without another complete rewrite.</li>
	<li>It needed to be extensible by individuals for their own types of testing.</li>
</ul>
<p>It achieves these goals through the use of several concepts referred to as runners, rules and listeners which you will explore in this unit.</p> 

<h2>Integration Points</h2>

<p>FlexUnit is simply a testing framework responsible for executing user-created tests. It neither has a user interface for reporting the failure of specific tests to its users nor a way to launch a new test run. Instead, FlexUnit provides simple integration points for other tools and applications to use its capabilities and monitor the results.</p>
<p>This integration occurs mainly through the concept of listeners. Listeners allow an external class to register with the FlexUnit framework and receive progress notifications as tests progress. This progress information includes key data such as when a test begins, ends and how much time it took to execute. It also provides information about the success and failure of each test, with additional information provided about the cause of any failure.</p>
<p>Developers can use this information to provide simple visual representations of test status, such as the UIListener project, or complex interactive pieces. The Adobe Flash Builder 4, IntelliJ and FDT integrated development environments have all used this same technique to provide advanced testing integration to their users.</p>
<p>It should be noted that the FlexUnit team only maintains the testing framework and directly associated projects. Features and continuing integration into the IDEs mentioned above is solely at the discretion and hard work of teams at these companies.</p>

<h2>Extensibility</h2>

<p>A major goal of FlexUnit 4 was the ability to add new testing features in the future without the need for another rewrite. Further, it was important that developers be able to add new testing features for their own specific use cases that they may not be able to share nor wish to contribute back to the project. FlexUnit 4 provides this capability via two concepts: runners and rules.</p>
<p>A runner is a class which contains the necessary functionality to find and execute tests in a specific class. As you will continue to learn throughout this course, there are many types of tests ranging from simple static tests to those requiring parameters and data points.</p>
<p>With FlexUnit 4, developers are allowed to create their own runners for any unique circumstance present in their environment and register that runner with the testing framework. This allows a developer to replace the specific functionality around test execution but still maintain all of the integration with tools and IDE provided by the FlexUnit team.</p>
<p>Creating an entirely custom runner is a powerful but complex feature of FlexUnit. However, if you simply need to add additional features to the existing FlexUnit runners, you can use a concept called rules.</p>
<p>Rules allow you to 'bolt-on' additional functionality to the existing runners, giving developers the opportunity to execute additional code before and after tests or add extra layers of evaluation and comparison not present in the existing framework.</p>
<p>Later in this course you will use a rule implementation to handle mocking of objects during testing.</p>

<h2>Integration with other frameworks</h2>

<p>While FlexUnit 4 provides significant new features, there are many thousands of unit tests written in the original FlexUnit and Fluint framework which developers are rightfully reluctant to migrate. To allow developers access to these new features, it was necessary to run the existing unit tests precisely as they executed today without changes to timing or other errors that could be introduced in a port of these technologies.</p>
<p>Instead, FlexUnit 4 uses the concept of the runner, explained above, to wrap the entire FlexUnit .9 and Fluint frameworks. This means that when FlexUnit 4 encounters a legacy test, it instantiates the original framework and uses that object to execute that particular test.</p>
<p>Quite literally, the entire FlexUnit .9 and Fluint frameworks are available inside of FlexUnit 4.x as runners which can be used at anytime to ensure that legacy tests are executed precisely as originally intended.</p>

<h2>Provided Runners</h2>

<p>Although FlexUnit 4.x is intended to be extended by developers as needed, it still ships with a rich set of available test runners. These runners provide the ability to run a variety of test types. Standard runners include:</p>
<ul>
	<li>Fluint1ClassRunner which executes Fluint 1.x test classes. *</li>
	<li>FlexUnit1ClassRunner which executes FlexUnit .9 test classes.</li>
	<li>BlockFlexUnit4ClassRunner the default runner for FlexUnit 4.x with features and functionality that you will use throughout this course.</li>
	<li>Suite which executes FlexUnit 4 Suite classes.</li>
	<li>ParameterizedRunner which executes test cases that use parameterized data.</li>
	<li>TheoryBlockRunner which executes a special type of test case called a Theory.</li>
	<li>IgnoredRunner which understands how to ignore and skip tests and test cases marked with special [Ignore] metadata.</li>
</ul>
<p style='font-size:0.9em;'>* Note: Due to the nature of Fluint, this runner is only available with the Flex-specific version of FlexUnit.</p>

<h2>Summary</h2>

<ul>
	<li>FlexUnit 4 was designed with a priority on extensibility.</li>
	<li>Extensibility is achieved through the use of runners, listeners and rules.</li>
	<li>FlexUnit 4 has built in support for FlexUnit .9 and Fluint 1.</li>
	<li>Support for additional testing frameworks may be integrated by an individual developer or by the FlexUnit team.</li>
	<li>Adding additional support does not require any change to the FlexUnit 4 framework.</li>
</ul>

<h2>Navigation</h2>
<ul>
    <li><a href="Unit-2.html">Unit 2 - Overview of Testing Terms and Terminology</a></li>
    <li><a href="Unit-4.html">Unit 4 - FlexUnit Basics</a></li>
    <li><a href="../index.html">Table of Contents / Introduction</a></li>
</ul>