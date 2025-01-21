



function add()
{
  input1 =document.getElementById("input1").value;
  
  input2=document.getElementById("input2").value;
  
  res=Number(input1) + Number(input2);
  
document.getElementById("res").innerHTML=res;
}

function sub()
{
  input1 =document.getElementById("input1").value;

  input2=document.getElementById("input2").value;
  
  res=input1 - input2;
  
document.getElementById("res").innerHTML=res;
}

function mul()
{
  input1 =document.getElementById("input1").value;
  
  input2=document.getElementById("input2").value;
  
   res=input1 * input2;
  
document.getElementById("res").innerHTML=res;
}

function div()
{
  input1 =document.getElementById("input1").value;
  
  input2=document.getElementById("input2").value;
  
   res=input1 / input2;
   
document.getElementById("res").innerHTML=res;
}
