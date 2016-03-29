
// Get all of the div elements that have a class of "module"
$('div.module');

// Come up with three selectors that you could use to get the third item in the #myList unordered list.

$('#myListItem');
// this one is best -- IDs are *always* the fastest selector

$('#myList li:eq(2)');
// this one would be best if the list item didn't have an ID

$('#myList #myListItem');
// this one is redundant



// Get the label for the search input using an attribute selector.
$('label[for="q"]');

// Figure out how many elements on the page are hidden (hint: .length).
$(':hidden').length;

// Figure out how many image elements on the page have an alt attribute.
$('img[alt]').length;

// Get all the odd table rows in the table body.
$('#fruits tbody tr:odd');


/********************************
 * Traversing					*
 ********************************/

// Get all the image elements on the page; log each image’s alt attribute.
$('img').each(function(i) {
	var $img = $(this);
	console.log($img.attr('alt'));
});

// Get the search input text box, then traverse up to the form and add a class to the form that contains it.
$('input[name="q"]').closest('form').addClass('foo');

$('#myList .current')
	.removeClass('current')
	.next()
		.addClass('current');
// Get the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().next().find('input.input_submit');

$('#slideshow li:first')
	.addClass('current')
	.siblings()
		.addClass('disabled');

var $ul = $('#myList');
for(var i = 0; i<5; i++)
{
	$ul.append('<li>Element ' + i + '</li>');
}

// Remove the odd list items (hint: .remove()).
$('#myList ul:odd').remove();

var $lastModule = ('div.module:last');
$('<h2> test </h2> ').appendTo($lastModule);

$('select option[value=tuesday]').after($('<option value="wednesday">Wednesday</option>'));


var $divModuleIMG = $('<div class="module"></div>');
var $image = $('img[alt=vegetables]').clone();
$image.appendTo($divModuleIMG);
$('#main').append($divModuleIMG);