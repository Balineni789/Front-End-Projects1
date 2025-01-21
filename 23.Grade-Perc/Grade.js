
function pg(){
var percentage=document.getElementById("perc").value=(document.getElementById("om").value/document.getElementById("mm").value)*100;
var g;
switch(Math.floor(percentage/10))
{
               case 9 :
                
               case 8 : g="Outstanding";
                           break;
               case 7 : g="Distinction";
                           break;
               case 6 : g="Good";
                            break;
               case 5 : g="Average";
                            break;
               case 4 : g="Pass";
                            break;
               default  : g="Fail";
                            break;
}
document.getElementById("grade").value=g;         
}