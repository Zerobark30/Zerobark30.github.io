today = new Date();
hourCount = (Math.floor(today/(3.6e6)) - 399500);
imgNum = hourCount % 104;
console.log(imgNum);
imgSrc = "images/IMG_" + imgNum + ".JPG";
document.getElementById('image').src=imgSrc;