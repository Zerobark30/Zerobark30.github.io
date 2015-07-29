today = new Date();
dayCount = (Math.floor(today/8.64e7) - 16644);
function imgCount(e) {
	if(e > 104)
		return e - 104;
	else
		return e;
};
imgNum = imgCount(dayCount);
console.log(imgNum);
imgSrc = "images/IMG_" + imgNum + ".JPG";
document.getElementById('image').src=imgSrc;