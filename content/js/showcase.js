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

function addShowcaseEntry(props) {
    var i;

    // TITLE
    var entry = '<div class="headline"><h4>' + props.title + '</h4></div>' +
        ' <ul class="arrow_list">' +
        '<li><span class="sc_header">Summary:</span>&nbsp;&nbsp;' + props.description + '  </li>' +
        '<li><span class="sc_header">Author:</span>&nbsp;&nbsp;' + props.author + ' </li>';
    if (props.dev) {
        entry += '<li><span class="sc_header">Dev details:</span>&nbsp;&nbsp;' + props.dev + '</li>';
    }
    if (props.website) {
        entry += '<li><span class="sc_header">Web site:</span>&nbsp;&nbsp;<A href="' + props.website + '" target="_blank">' + props.website + '</A></li>';
    }
    var links = props.links;
    if (links) {
        for (i = 0; i < links.length; i += 2) {
            entry += '<li> <span class="sc_header">' + links[i] + ':</span>&nbsp;&nbsp;<A href="' + links[i + 1] + '" target="_blank">' + links[i + 1] + '</A></li>';
        }
    }
    entry += '</ul>';

    // image gallery
    var imgs = props.images;

    var img;
    var imgPath;
    if (imgs) {
        entry += "<div class='gallery_strip'>";
        for (i = 0; i < imgs.length; i++) {
            img = imgs[i];
            imgPath = "showcase/images/" + props.imgDir + "/"
            entry += '<a class="gallery" rel="' + props.imgDir + '" href="' + imgPath + img + '" title="' + img + '">'
                + '<img class="showcase" src="' + imgPath + 'prev/' + img + '"/>';
        }
        entry += "</div>";
    }

    var entryDiv = document.createElement("div");
    entryDiv.innerHTML = entry;
    var showcaseContainer = document.getElementById("showcaseContainer");
    showcaseContainer.appendChild(entryDiv);

}

$(document).ready(function () {

    if (!document.getElementById("showcaseContainer"))
        return;

    $("a.gallery").fancybox({ cyclic: false});

    // retrieve showcase XML file
    //   $.get("data/showcase.xml", "false", processShowcaseXML,"xml")   ;

    $.ajax({ url: "showcase/data/showcase.xml", type: "GET", dataType: "xml",
        complete: function (result, state) {
            if (state == "success") {
                processShowcaseXML(result.responseXML);
            }
        },
        error: function (result, state, error) {
            alert("showcase/data/showcase.xml file is not reachable:" + error)
        }
    });
});

/**
 *
 * @param xmlData  == document
 */
function processShowcaseXML(xmlDoc) {
    var items = xmlDoc.getElementsByTagName("app");
    var i;
    var item;

    for (i = 0; i < items.length; i++) {
        item = items[i];
        // build links Array
        var linksXML = item.getElementsByTagName("link");
        var j;
        var links = [];
        for (j = 0; j < linksXML.length; j++) {
            links.push(linksXML[j].getAttribute("header"));
            links.push(linksXML[j].getAttribute("url"));
        }
        // builds images array
        var imagesRootXML = item.getElementsByTagName("images");
        var images = [];
        if (imagesRootXML.length > 0) {
            imagesRootXML = imagesRootXML[0];
            var imgBaseDir = imagesRootXML.getAttribute("baseDir");
            var imagesXML = imagesRootXML.getElementsByTagName("image");
            for (j = 0; j < imagesXML.length; j++) {
                images.push(imagesXML[j].getAttribute("file"));
            }
        }

        addShowcaseEntry({
            title: item.getAttribute("title"),
            description: item.getElementsByTagName("description")[0].textContent,
            author: item.getAttribute("author"),
            website: item.getAttribute("website"),
            dev: item.getAttribute("dev"),
            links: links,
            imgDir: imgBaseDir,
            images: images
        });
    }
}

/* 1/12/2014 mamsellem : dummy change to force site update */
