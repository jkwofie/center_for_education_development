var n=0;
document.write("hello world cd");
function sidebar() {
	document.getElementById("sidebar").ClassList.toggle('active');
	// body...
}
//var slider=document.getElementById("slider");
//slider.addEventListener('load','slide');
function slide(){
	var arr=["logo.jpg", "hi.jpg"];
	var x=document.getElementById('sliderImage');
	x.src=arr[n];
	n++;
	if(arr.lenght==n){
		n=0;
	}
}
setInterval(slide, 2000);