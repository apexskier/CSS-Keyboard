/* Author: Cameron Little

*/

var caps = false;

$(document).ready(function() {
	$('.key').click(function() {
		var value = $(this).find('span').html();
		
		switch(value) {
			case 'esc':
				break;
			case 'F1':
				break;
			case 'F2':
				break;
			case 'F3':
				break;
			case 'F4':
				break;
			case 'F5':
				break;
			case 'F6':
				break;
			case 'F6':
				break;
			case 'F7':
				break;
			case 'F8':
				break;
			case 'F9':
				break;
			case 'F10':
				break;
			case 'F11':
				break;
			case 'F12':
				break;
			case 'Eject':
				break;
			case 'fn':
				break;
			case 'control':
				break;
			case 'option':
				break;
			case 'command':
				break;
			case 'tab':
				$('#paper3').append('&nbsp;&nbsp;&nbsp;&nbsp;');
				break;
			case 'Shift':
				break;
			case 'return':
				$('#paper3').append('<br />');
				break;
			case 'caps lock':
				$('#caps').toggleClass('keydown');
				caps = (caps) ? false : true;
				break;
			case 'Delete':
				var content = $('#paper3').html().slice(0, -1);
				$('#paper3').html(content);
				break;
			default:
				if (caps) {
					$('#paper3').append(value.toUpperCase());
				} else {
					$('#paper3').append(value);
				}
		}
	});
	$('.shift').mousedown(function() {
		caps = true;
	});
	$('.shift').mouseup(function() {
		caps = false;
	});
});