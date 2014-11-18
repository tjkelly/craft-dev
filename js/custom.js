/**
 *  Craft.Digital Javascript
 *
 *  @author TJ Kelly - http://www.tjkelly.com
 *
 *  @date 2014-11-08
 *
 *  @desc Custom javascript & jQuery functions
 */
// Call Foundation & wait for DOM ready
jQuery(document).foundation().ready(function($){




	
	/**
	 *  Panel 1 Dimensions
	 *
	 *  @author TJ Kelly - http://www.tjkelly.com
	 *
	 *  @date 2014-11-17
	 *
	 *  @desc Read viewport dimensions & define panel 1 dimensions accordingly
	 */
	var intViewportHeight = window.screen.availHeight;
	
	// Cache selectors
	var panel_1 = $('section.panel-1'), panel_1_content = $('section.panel-1 article.panel-content'), header_wrap = $('div.header-wrap');
	
	// If 641+
	if($(window).width() >= 641){
		
		// Set dimensions
		panel_1_content.css({
			'padding-top' : (panel_1.height() / 2 * .8)
		});
	
	// Else - If 600 or less
	} else {
		
		//
		header_wrap.prependTo(panel_1);
			
	// End - If 641+
	}

// End - wait for DOM ready	
});