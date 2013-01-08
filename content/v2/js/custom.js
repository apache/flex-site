/*-----------------------------------------------------------------------------------
/* Custom JavaScript
-----------------------------------------------------------------------------------*/
	  
/* ----------------- Start Document ----------------- */
jQuery(document).ready(function() {

    /*----------------------------------------------------*/
    /*	Main Navigation
/*----------------------------------------------------*/

    /* Menu */
    (function() {

        var $mainNav    = $('#navigation').children('ul');

        $mainNav.on('mouseenter', 'li', function() {
            var $this    = $(this),
            $subMenu = $this.children('ul');
            if( $subMenu.length ) $this.addClass('hover');
            $subMenu.hide().stop(true, true).slideDown('fast');
        }).on('mouseleave', 'li', function() {
            $(this).removeClass('hover').children('ul').stop(true, true).slideUp('fast');
        });
		
    })();
	
    /* Responsive Menu */
    (function() {
        selectnav('nav', {
            label: 'Menu',
            nested: true,
            indent: '-'
        });
				
    })();


    /*----------------------------------------------------*/
    /*	Image Overlay
/*----------------------------------------------------*/

    $(document).ready(function () {
        $('.picture a').hover(function () {
            $(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 1);
        },function () {
            $(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 0);
        });
    });


    /*----------------------------------------------------*/
    /*	Back To Top Button
/*----------------------------------------------------*/

    jQuery('#scroll-top-top a').click(function(){
        jQuery('html, body').animate({
            scrollTop:0
        }, 300); 
        return false; 
    }); 
	

    /*----------------------------------------------------*/
    /*	Fancybox
/*----------------------------------------------------*/
    (function() {

        $('[rel=image]').fancybox({
            type        : 'image',
            openEffect  : 'fade',
            closeEffect	: 'fade',
            nextEffect  : 'fade',
            prevEffect  : 'fade',
            helpers     : {
                title   : {
                    type : 'inside'
                }
            }
        });
	
        $('[rel=image-gallery]').fancybox({
            nextEffect  : 'fade',
            prevEffect  : 'fade',
            helpers     : {
                title   : {
                    type : 'inside'
                },
                buttons  : {},
                media    : {}
            }
        });
	
	
    })();
	
        // tooltip for social media
    $('.tooltip-demo').tooltip({
      selector: "a[rel=tooltip]"
    })
    //tool tip for tool tips shortcode
    $('.tooltips').tooltip({
      selector: "a[rel=tooltip]"
    })
/* ------------------ End Document ------------------ */
});
