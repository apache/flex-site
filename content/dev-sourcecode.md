Title:  Source Code

We use [Git][1] for version control. You can [browse our repository][2] in your web browser. The development of the Flex SDK is done on branches and merged on 'develop' branch, while release candidates are done on the 'release' branch and merged to the 'master' for the production releases, see [A successful Git branching model][9] for more details.

For further information see the [Git Tutorials & Training][3] page.  Committers need to [properly configure][7] their git client and know the [Suggested Practices][8].

<div class="headline"><h4>Getting the source code</h4></div>

If you are looking for the cutting edge development branch of the Flex SDK:

    git clone https://git-wip-us.apache.org/repos/asf/flex-sdk.git flex-sdk
	cd flex-sdk
	git checkout develop
	
	You will also need:
	git clone https://git-wip-us.apache.org/repos/asf/flex-tlf.git flex-tlf
	
	See the README at the root of the sdk for further details on how to set it up.

If you are looking for the FlexJS™ SDK:

    git clone https://git-wip-us.apache.org/repos/asf/flex-asjs.git flex-asjs

If you are looking for the Flex "Falcon" Compiler:

    git clone https://git-wip-us.apache.org/repos/asf/flex-falcon.git flex-falcon

If you are looking for the TLF Project:

    git clone https://git-wip-us.apache.org/repos/asf/flex-tlf.git flex-tlf

If you are looking for FlexUnit:

    git clone https://git-wip-us.apache.org/repos/asf/flex-flexunit.git flex-flexunit

If you are looking for BlazeDS:

    git clone https://git-wip-us.apache.org/repos/asf/flex-blazeds.git flex-blazeds

If you are looking for the Apache Flex SDK Installer or the Apache Flex SDK Mavenizer Project:

    git clone https://git-wip-us.apache.org/repos/asf/flex-utilities.git flex-utilities

<div><h4>Apache Flex SDK Automated Testing Libraries</h4></div>

We use [FlexUnit][4] for unit testing.

We use [Mockolate][5] for mocks and test spies in unit tests. Read more about Mockolate on the project [homepage][5].

We use Mustella for functional testing of the SDK. You can find more information on the [Wiki page][6].



<div><h4>Browse the repositories</h4></div>

If you would like to browse the project progress before downloading the source code, you can do that using the [Apache Fisheye instance][10].

* [Flex SDK][11]

* [TLF][12]

* [Falcon][13]

* [Utilities][14]

* [FlexUnit][15]

* [FlexJS][16]

* [BlazeDS][17]


[1]: https://git-scm.com/
[2]: https://git-wip-us.apache.org/repos/asf/flex-sdk/repo?p=flex-sdk.git;a=summary
[3]: https://www.atlassian.com/git/tutorial/git-basics
[4]: /flexunit/tutorial/
[5]: https://mockolate.org/
[6]: https://cwiki.apache.org/confluence/display/FLEX/Mustella+Overview
[7]: https://git-wip-us.apache.org/
[8]: https://git-wip-us.apache.org/docs/committer-practices.html
[9]: https://nvie.com/posts/a-successful-git-branching-model/
[10]: https://fisheye6.atlassian.com/
[11]: https://fisheye6.atlassian.com/graph/flex-sdk
[12]: https://fisheye6.atlassian.com/graph/flex-tlf
[13]: https://fisheye6.atlassian.com/graph/flex-falcon
[14]: https://fisheye6.atlassian.com/graph/flex-utilities
[15]: https://fisheye6.atlassian.com/graph/flex-flexunit-git
[16]: https://fisheye6.atlassian.com/graph/flex-asjs
[17]: https://fisheye6.atlassian.com/graph/flex-blazeds
