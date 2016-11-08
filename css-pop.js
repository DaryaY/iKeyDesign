//window.onbeforeunload = function(){};

// function saves scroll position
function fScroll(val)
{
        var hidScroll = document.getElementById('hidScroll');
	if(hidScroll){
        	hidScroll.value = val.scrollTop;
	}
}

// function moves scroll position to saved value
function fScrollMove(what)
{
        var hidScroll = document.getElementById('hidScroll');
	if(hidScroll){
		document.getElementById(what).scrollTop = hidScroll.value;
	}
}


function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}

function blanket_size(popUpNumber) {
        var popUpName = 'popUpDiv' + popUpNumber;
        var parentName = 'parentList' + popUpNumber;
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	if (typeof window.pageYOffset != 'undefined') {
		viewportY = window.pageYOffset;
	} else {
		viewportY = document.documentElement.scrollTop;
	}
	if ((viewportY > document.body.parentNode.scrollTop) && (viewportY > document.body.parentNode.clientTop)) {
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			viewportY = document.body.parentNode.clientTop;
		} else {
			viewportY = document.body.parentNode.scrollTop;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpParent = document.getElementById(parentName);
	var popUpDiv = document.getElementById(popUpName);
        var rect = popUpParent.getBoundingClientRect();
        blanket_height = rect.top;
        if(blanket_height < 80){
          blanket_height=80;
        }
//        if(document.body.parentNode.scrollTop != 0){
//          blanket_height=blanket_height+document.body.parentNode.scrollTop;
//        }
        if(viewportY != 0){
          blanket_height=blanket_height+viewportY;
        }
	popUpDiv.style.top = blanket_height + 'px';
}

function window_pos(popUpNumber) {
        var popUpName = 'popUpDiv' + popUpNumber;
        var parentName = 'parentList' + popUpNumber;
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpParent = document.getElementById(parentName);
	var popUpDiv = document.getElementById(popUpName);
        var rect = popUpParent.getBoundingClientRect();
	popUpDiv.style.left = rect.left + 'px';
}

function popup(windownumber) {
	blanket_size(windownumber);
	window_pos(windownumber);
	toggle('blanket');
	toggle('popUpDiv'+windownumber);
}

function remove(windownumber) {
	toggle('blanket');
	toggle('popUpDiv'+windownumber);
}
