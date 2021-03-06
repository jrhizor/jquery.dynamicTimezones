jQuery dynamicTimezones Plugin
============================== 
- version: 1.0
- requires jQuery v1.4.2 or later
- Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php

This plugin allows developers to show dates and times on their websites which reflect the client's timezone by replacing the contents of an HTML tag with the client's time.

## Example

First, include jquery-1.4.2.min.js, phpjs.date.js, and jquery.dynamicTimezones.js within the `<head>` tags of your page.
```
<script type="text/javascript" src="jquery-1.4.2.min.js" charset="utf-8"></script>
<script type="text/javascript" src="phpjs.date.js" charset="utf-8"></script>
<script type="text/javascript" src="jquery.dynamicTimezones.js" charset="utf-8"></script>
```

Then, add a class to the paragraph or div that contains your date.
```
<p><span class="dtz 1278630213">7:03 EST</span></p>
```

The dtz class can be any unique identifier for a date of this type. The 1278630213 is the number of seconds from the Linux epoch given by the PHP time() function. Both the timestamp and the the "7:03 EST" should be generated on the server's side. For your $(document).ready function, use the following code. The one parameter `.dynamicTimezones()` takes is a string formatted like dates displayed with the PHP `date()` function. For more information on formatting dates, visit http://phpjs.org/functions/date:380.
```
$(document).ready(function() {
	$('.dtz').dynamicTimezones("g:i");
});
```

Now, when a client views the page (if they have JavaScript enabled) they will see the date/time represented by the timestamp in their own timezone, not the server's timezone. This can be used with differently formatted dates on the same page by giving alternate class names to the different formats.
