var $inputHint = $('input.input_text');
var $labelHint = $('label[for="q"]');

var defaultText = $labelHint.html();
$inputHint.val(defaultText);

$labelHint.remove();

$inputHint.on('focus',function()
{
	$(this).val('');
});

$inputHint.on('blur',function()
{
	$(this).val(defaultText );
});