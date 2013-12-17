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
 /*
  <div class='headline'><h4>%TITLE%</h4></div>
  <ul class="arrow_list">
  <li> Summary:  %SUMMARY%  </li>
  <li>Author:   %AUTHOR% </li>
  <li> Web site:   <A href="%WEBSITE%" target="_blank">%WEBSITE%</A></li>
  <li> Videos: <A href="%VIDEO%" target="_blank">%VIDEO%</A>  </li>
  </ul>
  <div><a class="gallery" rel="grp1" href="images/showcase/full/bCommunities/Communications Inbox.jpg" title="Communications Inbox">
  <img src="images/showcase/prev/bCommunities/Communications Inbox.jpg"/>
  </a>
  <a class="gallery" rel="grp1" href="images/showcase/full/bCommunities/Directory - Company Level.jpg" title="Directory - Company Level"></a>
  <a class="gallery" rel="grp1" href="images/showcase/full/bCommunities/Project Setup View.jpg" title="Project Setup View"></a>
  </div>

  */

 function addShowcaseEntry( props) {
     var i;

     // TITLE
    var entry = '<div class="headline"><h4>'+props.title+'</h4></div>' +
      ' <ul class="arrow_list">' +
        '<li> Summary:  '+props.description+'  </li>'  +
        '<li>Author:   '+props.author+' </li>' ;

     if (props.website) {
         entry += '<li> Web site:   <A href="'+ props.website+'" target="_blank">' + props.website + '</A></li>';
     }
     var links = props.links;
     if (links){
         for (i=0; i < links.length; i+= 2){
             entry += '<li> '+links[i]+':  <A href="' + links[i+1] + '" target="_blank">' + links[i+1] + '</A></li>';
         }
     }
     entry += '</ul>'    ;

    // image gallery
    var imgs = props.images;

    var img;
    var imgPath;
    if (imgs){
        for (i = 0; i < imgs.length; i++) {
            img = imgs[i];
            imgPath = props.imgDir + '/' + img ;
            entry += '<a class="gallery" rel="'+ props.imgDir +'" href="images/showcase/full/'+ imgPath + '" title="' + img + '">'
                + '<img src="images/showcase/prev/' + imgPath + '"/>';
        }
    }

    var entryDiv = document.createElement("div");
     entryDiv.innerHTML = entry ;
    var showcaseContainer = document.getElementById("showcaseContainer");
    showcaseContainer.appendChild(entryDiv);

}

/* init entries **/
$(document).ready(function () {

    $("a.gallery").fancybox({ cyclic: false});

    /* add showcase entries when document is loaded */
    addShowcaseEntry({
        title: 'bCommunities -  Secure B2B Collaboration',
        description: "We've created bCommunities, a disruptively efficient online platform that enables businesses to powerfully"+
        "and securely interconnect their operations with their clients and suppliers in minutes. "+
         "Features silo-bursting project management, communications, CRM and microblogging while fostering best practices and accountability.",
        author: "Dan Samper",
        website: 'http://bcommunities.com',
        imgDir: "bCommunities"  ,
        images: [ "Communications Inbox.jpg" , "Directory - Company Level.jpg" ]
    });

    addShowcaseEntry({
        title: "Goal Manager",
        description: "",
        author: "",
        website: "",
        imgDir: "",
        images: [  ]
    });

    addShowcaseEntry({
        title: "My Dojo for Dota 2",
        description: "My Dojo for Dota 2 is a mobile application that tracks personal statistics from the online video game Dota 2. " +
            "It shows the results of matches in a easy to understand interface with extended information of each player. ",
        author: "",
        links: [ "iTunes", "https://itunes.apple.com/us/app/my-dojo-for-dota-2/id689886683?ls=1&mt=8"]   ,
        imgDir: "Dojo",
        images: [ "1.png", "2.png", "3.png"]
    });

    addShowcaseEntry({
        title: "Online Designer Tool",
        description: "",
        author: "",
        website: "",
        imgDir: "",
        images: [  ]
    });

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
        description: "",
        author: "",
        website: "",
        imgDir: "",
        images: [  ]
    });

    /*  Template for new entry
     addShowcaseEntry({
     title: "",
     description: "" ,
     author: "",
     website: "",
     video: "",
     imgDir: "",
     images: [ "" ]
     });
    */


});
