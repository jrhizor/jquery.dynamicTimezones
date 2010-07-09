/*
 * jQuery dynamicTimezones Plugin
 * version: 1.0
 * @requires jQuery v1.4.2 or later
 *	
 * Licensed under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * You can find the latest version of this plugin at 
 * http://github.com/jrhizor/jquery.dynamicTimezones
 *
 * @version 1.0
 * @author Jared Rhizor (http://jaredrhizor.com)
 *
 */

(function($) {
	$.fn.dynamicTimezones = function(datestring) {		
		return this.each(function() {
			timestamp = getTimestamp(this.getAttribute('class'));
			this.innerHTML = date(datestring,timestamp);
		});
	};
	getTimestamp = function(el) {
		return parseInt((el.split(' '))[1]);
	}
	
})(jQuery);