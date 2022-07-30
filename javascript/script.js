function slide1(){
    document.getElementById('foto1').src="1.bmp";
    setTimeout("slide2()", 1000)
    }
    
    function slide2(){
    document.getElementById('foto1').src="2.bmp";
    setTimeout("slide3()", 1000)
    }
    
    function slide3(){
    document.getElementById('foto3').src="3.bmp";
    setTimeout("slide1()", 1000)
    }