
$(document).ready(function() {
	var $modules = $('div.module').hide();

	$nav = $('<ul>')
			.addClass('.tabs')
			.insertBefore($modules.eq(0));

	$modules.each(function(){
		var $module = $(this);
		var title = $module.find('h2').text();
		var $tab =$('<li>' + title + '</li>');
		$tab.appendTo($nav);

		$tab.click(function() {
			$tab.addClass('current').siblings().removeClass('current');
			$module.show().siblings('.module').hide();
		});
	});

	$modules.eq(0).show();
	$nav.find('li:first').addClass('current');
});