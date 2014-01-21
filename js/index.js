$(document).ready(function(){
  	$('.no-captions').bxSlider({

  		// GENERAL
  	captions: false,


  		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null

  		// mode: 'fade',
  		// speed: 100
 




  	});

  	$('.captions').bxSlider({

  		// GENERAL
  	captions: true,
  	adaptiveHeight: false,

  		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: true,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null

  		// mode: 'fade',
  		// speed: 100
 




  	});




	// $('.fit-height').bxSlider({
	//  	adaptiveHeight: true,
	//   // mode: 'fade'
	// });

});