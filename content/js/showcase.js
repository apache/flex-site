/* helper function to create the showcase
*  props:
*  title: app title
*  author: string
*  description: app description
*  [ website: url  ]
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
        '<li><span class="sc_header">Summary:</span>   '+props.description+'  </li>'  +
        '<li><span class="sc_header">Author:</span>   '+props.author+' </li>' ;

     if (props.website) {
         entry += '<li><span class="sc_header"> Web site:</span>   <A href="'+ props.website+'" target="_blank">' + props.website + '</A></li>';
     }
     var links = props.links;
     if (links){
         for (i=0; i < links.length; i+= 2){
             entry += '<li> <span class="sc_header">'+links[i]+':</span>  <A href="' + links[i+1] + '" target="_blank">' + links[i+1] + '</A></li>';
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
            imgPath = props.imgDir + '/' + img ;
            entry += '<a class="gallery" rel="'+ props.imgDir +'" href="images/showcase/full/'+ imgPath + '" title="' + img + '">'
                + '<img class="showcase" src="images/showcase/prev/' + imgPath + '"/>';
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
 links: [ "", "" ],
 imgDir: "",
 images: [ "" ]
 });
 */

  $(document).ready(function () {

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
        images: [ "Communications Inbox.jpg" , "Directory - Company Level.jpg" ]
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
        description: "Football Manager App for iOs and Android ",
        author: "GoalGames GmbH",
        website: "http://www.goal-games.de/",
        links: ["iTunes","https://itunes.apple.com/de/app/goal-manager/id575222774?mt=8&affId=1881396&ign-mpt=uo%3D4",
            "Google Play", "https://play.google.com/store/apps/details?id=air.de.goalgames.GoalManagerCH&hl=de"] ,
        imgDir: "Goal",
        images: [ "Finanzen.jpg" , "Liga.jpg", "Taktik.jpg"]
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

  /*  addShowcaseEntry({
        title: "Online Designer Tool",
        description: "",
        author: "",
        website: "",
        imgDir: "",
        images: [  ]
    });
*/
    addShowcaseEntry({
        title: 'TrafficLIVE AIR Application',
        description: "TrafficLIVE is a comprehensive creative business management system that provides visibility into resources, work and finances all in one place. " +
            "Creative businesses all over the globe are using TrafficLIVE to improve efficiency and increase profit. " ,
        author: "Marcus Wilkinson",
        website: 'http://trafficlive.com',
        imgDir: "TL",
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
