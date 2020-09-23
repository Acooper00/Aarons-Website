var pic = 1
var max = 27
var portrait = [5,7,10,12,15,22]
var picnum = 1

function leftimg(){
	if (pic == 1) {
		return
	}
	else {
		pic -= 1
	}
	setimg()
}
function rightimg(){
	if (pic == max) {
		return
	}
	else {
		pic += 1
	}
	setimg()
}
function waitfor(){
	if (portrait.includes(pic)) {
		document.getElementById("DofE-img").style.transform="rotate(90deg)"

		document.getElementById("DofE-img").style.width="300px"
		document.getElementById("DofE-img").style.height="225px"

		document.getElementById("DofE-img").style.left="50px"
		document.getElementById("DofE-img").style.right="0px"
		document.getElementById("DofE-img").style.top="37.5px"
		document.getElementById("DofE-img").style.bottom="0px"
	}
	else {
		document.getElementById("DofE-img").style.transform="rotate(0deg)"

		document.getElementById("DofE-img").style.width="400px"
		document.getElementById("DofE-img").style.height="300px"

		document.getElementById("DofE-img").style.left="0px"
		document.getElementById("DofE-img").style.right="0px"
		document.getElementById("DofE-img").style.top="0px"
		document.getElementById("DofE-img").style.bottom="0px"
	}

	return
}
function setimg(){
	if (pic == 1) {
		document.getElementById("button-1").className="button light-grey"
	}
	else {
		document.getElementById("button-1").className="button dark-grey"
	}
	if (pic != max) {
		document.getElementById("button-2").className="button dark-grey"
	}
	else {
		document.getElementById("button-2").className="button light-grey"
	}

	var source = "./.MEDIA/IMAGE/"+pic.toString()+".jpg"
	document.getElementById("DofE-img").src=source

	document.getElementById("input-1").value = pic

	setTimeout(waitfor,100)

	return
}
function inputchange(){
	var picnum = parseInt(document.getElementById("input-1").value)
	if (picnum >= 1 && picnum <= max && picnum == Math.floor(picnum,1)) {
		pic = picnum
		setimg()
	}
	document.getElementById("input-1").value = pic
}
