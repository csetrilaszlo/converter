function calc1(){
	var a = parseInt(document.getElementById("text1").value);
	var sum1 = a * 2.204623 ;
	

	if(isNaN(a)){
		document.getElementById("demo1").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo1").innerHTML = sum1;
	}

}

function calc2(){
	var b = parseInt(document.getElementById("text2").value);
	var sum2 = b * 0.453592;
	

	if(isNaN(b)){
		document.getElementById("demo2").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo2").innerHTML = sum2;
	}

}

function calc3(){
	var c = parseInt(document.getElementById("text3").value);
	var sum3 = c * 33.8;
	

	if(isNaN(c)){
		document.getElementById("demo3").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo3").innerHTML = sum3;
	}

}

function calc4(){
	var d = parseInt(document.getElementById("text4").value);
	var sum4 = (d - 32) / 1.8;
	
	

	if(isNaN(d)){
		document.getElementById("demo4").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo4").innerHTML = sum4;
	}

}

function calc5(){
	var e = parseInt(document.getElementById("text5").value);
	var sum5 = e * 3.28084;
	

	if(isNaN(e)){
		document.getElementById("demo5").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo5").innerHTML = sum5;
	}

}

function calc6(){
	var f = parseInt(document.getElementById("text6").value);
	var sum6 = f * 0.3048;
	
	

	if(isNaN(f)){
		document.getElementById("demo6").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo6").innerHTML = sum6;
	}

}

function calc7(){
	var g = parseInt(document.getElementById("text7").value);
	var sum7 = g * 0.621371;
	

	if(isNaN(g)){
		document.getElementById("demo7").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo7").innerHTML = sum7;
	}

}

function calc8(){
	var h = parseInt(document.getElementById("text8").value);
	var sum8 = h * 1.609344;
	
	

	if(isNaN(h)){
		document.getElementById("demo8").innerHTML = ("Please enter numbers!");
	} else {
		document.getElementById("demo8").innerHTML = sum8;
	}

}

