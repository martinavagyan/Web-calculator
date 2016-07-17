/*var a = 5;		//integer
var b = 10;	//float
var c = "test"; //string

var d = true;	//boolean
var d = false;	//boolean

var e = undefined; //

var c = a - b;

alert(c);
console.log("Hello world this is my first Java Script Programme"+"  "+c);

document.getElementById('test').style.background = "green";
document.getElementById('test').style.marginLeft = "100px";
document.getElementById('test').style.opacity = 0.6;
var element=document.getElementById('test').innerHTML;

*/

var ch=false;
var memory = 0;
var cv=undefined;
var scopCh=false;
function Equ()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = eval(cv);
	ch = false;
}
function Plus()
{
	
	cv = document.getElementById("calcDisplay").value;
	if(ch==false)
	{
		document.getElementById("calcDisplay").value = cv+"+";
		ch = true;
	}
	if(cv.slice(-1)=="-" || cv.slice(-1)=="*" || cv.slice(-1)=="/")
	{
		cv = cv.substring(0, cv.length -1);
		document.getElementById("calcDisplay").value = cv+"+";
	}
}
function Minus()
{
	cv = document.getElementById("calcDisplay").value;
	if(ch==false)
	{
		document.getElementById('calcDisplay').value = cv+"-";
		ch = true;
	}
	if(cv.slice(-1)=="+" || cv.slice(-1)=="*" || cv.slice(-1)=="/")
	{
		cv = cv.substring(0, cv.length -1);
		document.getElementById("calcDisplay").value = cv+"-";
	}
	
}
function Mul()
{
	cv = document.getElementById("calcDisplay").value;
	if(ch==false)
	{
		document.getElementById("calcDisplay").value = cv +"*";
		ch = true;
	}
	if(cv.slice(-1)=="-" || cv.slice(-1)=="+" || cv.slice(-1)=="/")
	{
		cv = cv.substring(0, cv.length -1);
		document.getElementById("calcDisplay").value = cv+"*";
	}
}
function Div()
{
	cv = document.getElementById("calcDisplay").value;
	if(ch==false)
	{
		document.getElementById("calcDisplay").value = cv +"/";
		ch = true;
	}
	if(cv.slice(-1)=="-" || cv.slice(-1)=="*" || cv.slice(-1)=="+")
	{
		cv = cv.substring(0, cv.length -1);
		document.getElementById("calcDisplay").value = cv+"/";
	}
}
function nmb1()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"1";
}
function nmb2()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"2";
}
function nmb3()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"3";
}
function nmb4()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"4";
}
function nmb5()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"5";
}
function nmb6()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"6";
}
function nmb7()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"7";
}
function nmb8()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"8";
}
function nmb9()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"9";
}
function nmb0()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +"0";
}
function Dot()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv +".";
}
function Clear()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = "";
}
function backSpace()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv.substring(0,cv.length -1);
}
function Copy()
{
	memory = document.getElementById("calcDisplay").value;
}
function Past()
{
	document.getElementById("calcDisplay").value = memory;
}



/*extensions*/
function scopL()
{
	if(scopCh==false)
	{
		cv = document.getElementById("calcDisplay").value;
		document.getElementById("calcDisplay").value = cv +"(";
		ch = false;
		scopCh=true;
	}
}
function scopR()
{
	if(scopCh==true)
	{
		cv = document.getElementById("calcDisplay").value;
		document.getElementById("calcDisplay").value = cv +")";
		ch = false;
		scopCh=false;
	}
}
function Perc()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = cv*0.01;
	ch = false;
}
function squareRoot()
{
	cv = document.getElementById("calcDisplay").value;
	document.getElementById("calcDisplay").value = Math.sqrt(cv);
	cv = document.getElementById("calcDisplay").value;
	ch = false;
}




















