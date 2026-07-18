
let display=document.getElementById("displaybox");
let buttons=document.getElementsByClassName("btn");
let expression="";

for(let i=0;i<buttons.length;i++){

    buttons[i].addEventListener("click",function(){
let value=buttons[i].textContent;

if(value==="C"){
expression="";
display.textContent="0";
}

else if(value==="del"){
    //slice(0,-1) ek inbuilt ftn hai that remove last value 
expression=expression.slice(0,-1);
display.textContent= expression;
}
  
else if(value==="="){
    expression=eval(expression);
    display.textContent= expression;
}

else{
    expression+=value; //add value to expression
    display.textContent= expression;
}
    });
}
