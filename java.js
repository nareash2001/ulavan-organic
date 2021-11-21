var btn=document.getElementById('add-animation');
const spn=document.getElementById('counter');
let countr=0;
function count()
{


var rice=document.getElementById('vari').value;
var amount=document.getElementById('order').value;
var rate;
rate=0;
if(rice=="Basmati")
{
   rate=84;
}
if(rice=="Ponni")
{
    rate=74;
}
if(rice=="Karuppukavuni")
{
    rate=88;
}
if(rice=="Seeraga")
{
    rate=110;
}
if(rice=="Bhavani")
{
    rate=85;

}
if(rice=="Idli")
{
    rate=59;
}
if(rate!=0&&amount!=0)
{
alert("Add to Cart \n Total amount is "+amount*rate+".00");
 countr++;
counter.innerText=countr;

console.log(countr); 
    counter.classList.add('animated-counter')
}
else
{
alert("Pls Select");
}
}