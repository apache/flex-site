/* helper function to create the showcase
*  props:
*  title: app title
*  author: string
*  description: app description
*  website: url
*  videos: url
*  images:  Array
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

alert("showcase2.js");

 function addShowcaseEntry( props) {

     // TITLE
    var entry = '<div class="headline"><h4>'+props.title+'</h4></div>' +
      ' <ul class="arrow_list">' +
        '<li> Summary:  %SUMMARY%  </li>'  +
        '<li>Author:   %AUTHOR% </li>' ;
     if (props.website) {
         entry += '<li> Web site:   <A href="%WEBSITE%" target="_blank">%WEBSITE%</A></li>';
     }
     if (props.video) {
         entry += '<li> Video:   <A href="%VIDEO%" target="_blank">%VIDEO%</A></li>';
     }
     entry += '</ul>'    ;

    // image gallery
    var imgs = props.images;
    var i;
    var img;
    for (  i = 0 ; i < imgs.length; i++){
         img = imgs[i];
        entry += '<a class="gallery" rel="grp1" href="images/showcase/full/bCommunities/'+img + '.jpg" title="'+img+'">'
          +  '<img src="images/showcase/prev/bCommunities/'+img+'.jpg"/>' ;
    }

    var entryDiv = document.createElement("div");
     alert("Entry="+entry);
     entryDiv.innerHTML = entry ;
    var showcaseContainer = document.getElementById("showcaseContainer");
    showcaseContainer.appendChild(entryDiv);

}

/* init entries **/
$(document).ready(function () {

    $("a.gallery").fancybox({ cyclic: false});

    addShowcaseEntry({
        title: 'bCommunities',
        description: 'Test descriptui',
        author: "john@doe",
        website: 'http://www.flex.org',
        video: "http://youtube.com",
        images: [ "Communications Inbox" , "Directory - Company Level" ]
    });
});
