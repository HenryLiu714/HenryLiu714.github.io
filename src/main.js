function change_size(element, size, left, top) {
	document.getElementById(element).style.width = size;
	document.getElementById(element).style.left = left;
	document.getElementById(element).style.top = top;
}

function change_size2(element, size, left, top) {
	document.getElementById(element).style.width = size;
	document.getElementById(element).style.height = size;
	document.getElementById(element).style.left = left;
	document.getElementById(element).style.top = top;
	document.getElementById(element).style["boxShadow"] = "inset 0 0 5em 2em #F6E7CB, 0 0 5em 2.5em #F6E7CB"
}

function change_size3(element, size, left, top, box_shadow) {
	document.getElementById(element).style.width = size;
	document.getElementById(element).style.height = size;
	document.getElementById(element).style.left = left;
	document.getElementById(element).style.top = top;
	document.getElementById(element).style["boxShadow"] = box_shadow;
}

function open_new_tab(website) {
	window.open(website, "_blank");
}

function fade_in(element) {
	document.getElementById(element).style.opacity = "100%";
}

function fade_out(element) {
	document.getElementById(element).style.opacity = "0%";
}