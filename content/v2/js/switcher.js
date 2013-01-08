/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
        // Style Switcher	
		$('#style-switcher').animate({
			right: '-300px'
		});
		
		$('#style-switcher h2 a').click(function(e){
			e.preventDefault();
			var div = $('#style-switcher');
			console.log(div.css('right'));
			if (div.css('right') === '-300px') {
				$('#style-switcher').animate({
					right: '0px'
				}); 
			} else {
				$('#style-switcher').animate({
					right: '-300px'
				});
			}
		})
                
		// Color Changer
		$(".green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/green.css" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/blue.css" );
			return false;
		});
		
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/colors/orange.css" );
			return false;
		});
		
		$(".navy" ).click(function(){
			$("#colors" ).attr("href", "css/colors/navy.css" );
			return false;
		});
		
		$(".yellow" ).click(function(){
			$("#colors" ).attr("href", "css/colors/yellow.css" );
			return false;
		});
		
		$(".peach" ).click(function(){
			$("#colors" ).attr("href", "css/colors/peach.css" );
			return false;
		});
		
		$(".beige" ).click(function(){
			$("#colors" ).attr("href", "css/colors/beige.css" );
			return false;
		});

		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/purple.css" );
			return false;
		});

		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/red.css" );
			return false;
		});

		$(".pink" ).click(function(){
			$("#colors" ).attr("href", "css/colors/pink.css" );
			return false;
		});
		
		$(".celadon" ).click(function(){
			$("#colors" ).attr("href", "css/colors/celadon.css" );
			return false;
		});
		
		$(".brown" ).click(function(){
			$("#colors" ).attr("href", "css/colors/brown.css" );
			return false;
		});
		
		$(".cherry" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cherry.css" );
			return false;
		});
		
				
		$(".cyan" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cyan.css" );
			return false;
		});
		
		$(".olive" ).click(function(){
			$("#colors" ).attr("href", "css/colors/olive.css" );
			return false;
		});
		
		$(".gray" ).click(function(){
			$("#colors" ).attr("href", "css/colors/gray.css" );
			return false;
		});
		
		$(".dirty-green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dirty-green.css" );
			return false;
		});
		
		
		// Layout Switcher
		$(".boxed" ).click(function(){
			$("#layout" ).attr("href", "css/wide.css" );
			return false;
		});

		$("#layout-switcher").on('change', function() {
			$('#layout').attr('href', $(this).val() + '.css');
		});;

		
		
		
		$('.colors li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
		})
		
	
		$('.bg li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundImage');
			$('body').css('backgroundImage',bg)
		})
                
		
		$('.bgsolid li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundColor');
			$('body').css('backgroundColor',bg).css('backgroundImage','none')
		})
                
		$('.navcolor li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundColor');
			$('#navigation').css('backgroundColor',bg).css('backgroundImage','none');
			$('#navigation ul ul').css('backgroundColor',bg).css('backgroundImage','none');
                        
		})
		
		
		$('#reset a').click(function(e){
			var bg = $(this).css('backgroundImage');
			$('body').css('backgroundImage','url(./images/bg/noise.png)');
                        $('#navigation').css('backgroundColor','#333');
			$('#navigation ul ul').css('backgroundColor','#333');
                        $("#layout" ).attr("href", "css/wide.css" );
		})
			

	});