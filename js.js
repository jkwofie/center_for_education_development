//document.write("hello world  com");
function sidebar() {
	document.getElementById("sidebar").classList.toggle("active");
	// body...
}
var n=0;

//var slider=document.getElementById("slider");
//slider.addEventListener("load", slide);
function slide(){
	var arr=["centers/jude2.jpg", "centers/jude3.jpg", "centers/JUDE1.jpg",
	"centers/jude4.jpg", "centers/jude5.jpg" ];
	var x=document.getElementById('sliderImage');
	x.src=arr[n];
	n++;
	if(n==arr.length){
		n=0;
	}
}
var i=0;
	function quote(){
		var quotes= new Array("The poorest of all men  is not a man without a penny but a man without a dream"
		 , "The aim of education is the knowledge, not the facts, but of values" , 
		 "Education is the movement from darkness to light" ,
		  "Anyone who has never made a mistake has never try anything new",
		 "A man's mind, stretched by new ideas, may never return to its original dimensions"  ); 
		//var y = quotes.length;
		var para=document.createElement("p");
		var c= document.createTextNode(quotes[i]);
	
		para.appendChild(c); 
		//para.style.color="red";    
		var word=document.getElementById("message");
       var remove_word=document.getElementsByTagName("p");
       word.removeChild(remove_word[0]);
       word.appendChild(para);
       para.id="hii"; 
     i++; 
       if (i==quotes.length) {
       	i=0;
	}	  
}
setInterval(slide, 5000);
setInterval(quote, 4000);