/**
 * jQLiteID - Lightweight jQuery input default text plugin
 * @version: 0.1 (2011/09/10)  
 * @author Maciej Lisiewski 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
**/

(function($) {		
	$.fn.jQLiteID = $.fn.jqliteid = function(){		
		
		init = function(el)
		{
			$(el).submit(function(){
				$(el).find('input[type=text]').each(function(){
					if ($(this).val() == $(this).attr('title'))
					{
						$(this).val('');
					}			
				});			
			});		
			
			$(el).find('input[type=text]').each(function(){
				$(this).focus(function(){
					if ($(this).val() == $(this).attr('title'))
					{
						$(this).val('');
						$(this).removeClass('defaultInput');
					}
				})
			});
			
			$(el).find('input[type=text]').each(function(){
				$(this).blur(function(){					
					if ($(this).val().trim() == '')
					{
						$(this).val($(this).attr('title'));
						$(this).addClass('defaultInput');
					}
				});				
			});
			$(el).find('input[type=text]').blur();	
		};
		
		this.each (
			function(){ init(this); }
		);				
	}
})(jQuery);