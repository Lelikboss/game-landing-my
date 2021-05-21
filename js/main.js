$('.heade__select-bg, .header__lang').styler({
	fileBrowse: 'EN',
	singleSelectzIndex: '999',
	onFormStyled: function() {
		// к открытому селекту добавляется красная обводка
		$(this).css('background-color', 'red');
	}
});





$('.features__item-title').on('click', function(){

	$('.features__item').removeClass('features__item--active');
	$(this).parent().addClass('features__item--active');

});

$('.about__slider').slick({
	
});