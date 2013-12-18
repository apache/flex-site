/* helper function to create the showcase
*  props:
*  title: app title
*  author: string
*  description: app description
*  [ website: url  ]
*  [dev : string ]
*  links : [( "linkTyp", "url " ) + ]
*  [ videos: url   ]
*  imgDir: subdirectory for images
*  images:  Array of file names
* */

 function addShowcaseEntry( props) {
     var i;

     // TITLE
    var entry = '<div class="headline"><h4>'+props.title+'</h4></div>' +
      ' <ul class="arrow_list">' +
        '<li><span class="sc_header">Summary:</span>&nbsp;&nbsp;'+props.description+'  </li>'  +
        '<li><span class="sc_header">Author:</span>&nbsp;&nbsp;'+props.author+' </li>' ;
    if (props.dev){
        entry += '<li><span class="sc_header">Dev details:</span>&nbsp;&nbsp;' + props.dev + '</li>';
    }
     if (props.website) {
         entry += '<li><span class="sc_header">Web site:</span>&nbsp;&nbsp;<A href="'+ props.website+'" target="_blank">' + props.website + '</A></li>';
     }
     var links = props.links;
     if (links){
         for (i=0; i < links.length; i+= 2){
             entry += '<li> <span class="sc_header">'+links[i]+':</span>&nbsp;&nbsp;<A href="' + links[i+1] + '" target="_blank">' + links[i+1] + '</A></li>';
         }
     }
     entry += '</ul>'    ;

    // image gallery
    var imgs = props.images;

    var img;
    var imgPath;
    if (imgs){
        entry+="<div class='gallery_strip'>";
        for (i = 0; i < imgs.length; i++) {
            img = imgs[i];
            imgPath = "images/showcase/"+ props.imgDir + "/"
            entry += '<a class="gallery" rel="'+ props.imgDir +'" href="'+ imgPath + img + '" title="' + img + '">'
                + '<img class="showcase" src="' + imgPath + 'prev/' + img +  '"/>';
        }
        entry+="</div>";
    }

    var entryDiv = document.createElement("div");
     entryDiv.innerHTML = entry ;
    var showcaseContainer = document.getElementById("showcaseContainer");
    showcaseContainer.appendChild(entryDiv);

}

/*  List of showcase entries, in alphabetical order
added when document is ready
 *  **/

/*  Template for new entry:
 addShowcaseEntry({
 title: "",
 description: "" ,
 author: "",
 website: "",
 dev: "" ,
 links: [ "", "" ],
 imgDir: "",
 images: [ "" ]
 });
 */

  $(document).ready(function () {

      if (!document.getElementById("showcaseContainer"))
            return;

    $("a.gallery").fancybox({ cyclic: false});

    /* add showcase entries when document is loaded */
    addShowcaseEntry({
        title: 'bCommunities -  Secure B2B Collaboration',
        description: "A disruptively efficient online platform that enables businesses to powerfully "+
        "and securely interconnect their operations with their clients and suppliers in minutes. "+
         "Features silo-bursting project management, communications, CRM and microblogging while fostering best practices and accountability.",
        author: "Dan Samper",
        website: 'http://bcommunities.com',
        imgDir: "bCommunities"  ,
        images: [ "Communications Inbox.jpg" , "Directory - Company Level.jpg" , "Project Setup View.jpg","User Settings.jpg"]
    });

      addShowcaseEntry({
          title: "Documobile - Electronic Parts Catalog Interface",
          description: "Documobile allows users to view parts catalogs, technical documents, find technical information visually with our icon driven platform or search by keywords, descriptions, part numbers or other identifying information. " +
              "With a few swipes of a finger, Documobile helps users quickly and easily access the exact document or part they want. ",
          author: "Digabit, Inc.",
          website: "http://www.digabit.com/",
          links: [ "iTunes", "https://itunes.apple.com/us/app/documobile/id731514836" ],
          imgDir: "Documobile",
          images: [ "documobile1.png", "documobile2.png", "documobile3.png"]
      });

    addShowcaseEntry({
        title: "Goal Manager",
        description: "GOAL 2014 - Football Manager is a free football management game for mobile phones and tablets, now available for iOS and Android. " +
            "In this game a growing community of more than 3000 daily active managers from all over Europe face each other in a multi-level League system and a general Cup competition. " +
            "To achieve victory, the managers have to decide tactics and formations, buy and sell players, plan individual trainings, study their opponents, build up a stadium and manage finances and sponsorships.",
        author: "GoalGames GmbH",
        dev: "Apache Flex 4.10 - PureMVC - Native Extentions",
        website: "http://www.goal-games.de/",
        links: ["iTunes","https://itunes.apple.com/de/app/goal-manager/id575222774?mt=8&affId=1881396&ign-mpt=uo%3D4",
            "Google Play", "https://play.google.com/store/apps/details?id=air.de.goalgames.GoalManagerCH&hl=de"] ,
        imgDir: "Goal",
        images: [ "Login.jpg" , "Stadion.jpg", "Taktik.jpg"]
    });

    addShowcaseEntry({
        title: "My Dojo for Dota 2",
        description: "My Dojo for Dota 2 is a mobile application that tracks personal statistics from the online video game Dota 2. " +
            "It shows the results of matches in a easy to understand interface with extended information of each player. ",
        author: "Jorge Yabra",
        links: [ "iTunes", "https://itunes.apple.com/us/app/my-dojo-for-dota-2/id689886683?ls=1&mt=8"]   ,
        imgDir: "Dojo",
        images: [ "1.png", "2.png", "3.png"]
    });

  /*   TODO Online Designer Tool
    addShowcaseEntry({
        title: "Online Designer Tool",
        description: "",
        author: "",
        website: "",
        imgDir: "",
        images: [  ]
    });
*/

       addShowcaseEntry({
       title: "ReDiLab Reaction Diffusion Laboratory",
       description: "ReDiLab is my reaction diffusion (http://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system) explorer written in Apache Flex that uses AGAL and Stage3D to run cellular automata simulating a variety of RD models. " ,
       author: "Simon Gladman",
       website: "http://flexmonkey.blogspot.co.uk/search/label/ReDiLab",
       links: [ "Demo", "http://www.flexmonkey.co.uk/redilab-bin-release-005/ReactionDiffusionLab.html" ],
       imgDir: "Redilab",
       images: [ "Screen Shot 1.png", "Screen Shot 2.png", "Screen Shot 3.png"]
       });

      addShowcaseEntry({
          title: "6Play : digital platform for French TV channels (M6, W9 and 6ter)",
          description: "Award winning Social TV platform for M6 and all the group's channels (M6, W9 and 6ter), including live TV ( from France only ), premium video features , Facebook and Twitter integration<br>"
       +"M6, french broadcast group, has launched a unique digital entrance platform to all the group's channels, and recently won a national 'Best Social TV application' price. " +
          "This application is a perfect demonstration of skinning, animation and data management capabilities given by Apache Flex SDK.",
          author: "Erick Ghaumez",
          dev: "ApacheFlex 4.10",
          links: [ "Live app", "http://www.6play.fr" ],
          imgDir: "6Play",
          images: [ "6play.png", "6play-6ter.png", "6play-M6-programmes.png" ]
      });

      addShowcaseEntry({
        title: 'TrafficLIVE AIR Application',
        description: "TrafficLIVE is a comprehensive creative business management system that provides visibility into resources, work and finances all in one place. " +
            "Creative businesses all over the globe are using TrafficLIVE to improve efficiency and increase profit. " ,
        author: "Marcus Wilkinson",
        website: 'http://trafficlive.com',
        imgDir: "Traffic",
        images: [ "TrafficLIVE-data-visualisation.png" ]
    });

    addShowcaseEntry({
        title: "VeraType",
        description: "VeraType converts images into text and text into images. It is also called ASCII Art but in this case you can write your own message and form into an image. ",
        author: "Judah Frangipane",
        website: "http://www.velara3.com/wp/2013/03/21/veratype-for-win-and-mac/ ",
        imgDir: "VeraType",
        images: [ "feature-graphic.png","screenshot01.png" ]
    });


});
