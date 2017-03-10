
var a = prompt("Enter your name","Aamir");
var b = + prompt("Enter your English Numbers","Enter Obtained Marks");
if(b<30)
{
    alert("Sorry, You are Fail: " +b);
}
else
{
var c = + prompt("Enter your Mathematics Numbers","Enter Obtained Marks");
}
if(c<30)
{
    alert("Sorry, You are Fail: " +c);
}
else
{
var d = + prompt("Enter your Urdu Numbers","Enter Obtained Marks");
}
if(d<30)
{
    alert("Sorry, You are Fail: " +d);
}
else
{
var e = + prompt("Enter your Computer Numbers","Enter Obtained Marks");
}
if(e<30)
{
    alert("Sorry, You are Fail: " +e);
}
else
{
var f = + prompt("Enter your Physics Numbers","Enter Obtained Marks");
}
if(f<30)
{
    alert("Sorry, You are Fail: " +f);
}
else
{
    var sum = ( b + c + d + e + f );
    var per = ( (sum / 500 ) * 100) ;
}
if(per<40)
{
    alert( a + " " + "You are an Average student " + '\n' + "Your total numbers are:" + '\t' + sum + '\t' + "out of 500" + '\n' + "Your Percentage is:" + '\t' + per + "%" + '\n' + "Your GRADE is D");
}
else if(per>40 && per<60)
{
    alert( a + " " + "You are a Good student " + '\n' + "Your total numbers are:" +'\t' + sum + '\t' + "out of 500" +  '\n' + "Your Percentage is:" +'\t' + per + "%" + '\n' + "Your GRADE is C ");
}
else if(per>60 && per<80)
{
    alert( a +" " +"You are a Very Good student " +  '\n' + "Your total numbers are:" +'\t' + sum + '\t' + "out of 500" + '\n' + "Your Percentage is:" +'\t' + per + "%" + '\n' + "Your GRADE is B ");
}
else if(per>80 && per<100)
{
    alert( a +" " +"You are an Excellent student " +  '\n' + "Your total numbers are:" +'\t' + sum + '\t' + "out of 500" +  '\n' + "Your Percentage is:" +'\t' + per + "%" + '\n' + "Your GRADE is A ");
}
