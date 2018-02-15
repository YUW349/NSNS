'use strict';
$('.deletingTask').click(function(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);

	})




/*		$('.menu').toggleClass('active');
	})*/