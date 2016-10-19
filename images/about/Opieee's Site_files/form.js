function timer(){
	setInterval(function(){ alert("Hello"); }, 3000);
	break;
}

function stuff(){
var j = document.forms["myForm"]["name"].value;
var k = document.forms["myForm"]["email"].value;
var l = document.forms["myForm"]["user name"].value;
var m = document.forms["myForm"]["password"].value;

if (j == null || j == "") {
    alert("Didn't Fill Name Field");
    return false;
}
else if(k == null || k == "") {
    alert("Didn't Fill Email Field");
    return false;
}
else if(l == null || l == "") {
    alert("Didn't Fill User Name Field");
    return false;
}
else if(m == null || m == "") {
    alert("Didn't Fill Password Field");
    return false;
}
else{

var a=document.getElementById('name');
a.setAttribute('type','hidden');

var b=document.getElementById('email');
b.setAttribute('type','hidden');

var c=document.getElementById('user name');
c.setAttribute('type','hidden');

var d=document.getElementById('password');
d.setAttribute('type','hidden');

var e=document.getElementById('dob');
e.setAttribute('type','hidden');

var f=document.getElementById('male');
f.setAttribute('type','hidden');


var g=document.getElementById('female');
g.setAttribute('type','hidden');


var h=document.getElementById('other');
h.setAttribute('type','hidden');


var h=document.getElementById('label1');
h.innerHTML="";
var h=document.getElementById('label2');
h.innerHTML="";
var h=document.getElementById('label3');
h.innerHTML="";
var h=document.getElementById('label4');
h.innerHTML="";

var i=document.getElementById('sub');
i.innerHTML="Rick Rolled";

var a=document.getElementById('rickroll');
a.height= 700 ;
a.width= 700;
a.autoplay=true;
a.load();

document.getElementById('form').style.backgroundColor='black';
}
}