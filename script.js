alert("loading");
function addNewWEField()
{
//   console.log("Adding New Field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" , "Enter Here");
    
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");


    weOb.insertBefore(newNode , weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" , "Enter Here");
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");


    aqOb.insertBefore(newNode , aqAddButtonOb);
}

function addNewCERTField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" , "Enter Here");
    
    let certOb=document.getElementById("cert");
    let certAddButtonOb=document.getElementById("certAddButton");


    certOb.insertBefore(newNode , certAddButtonOb);
}


// generating CV
function generateCV()
{
//   console.log("generating CV");

let nameField=document.getElementById("nameField").value;

let nameT1=document.getElementById("nameT1");

nameT1.innerHTML=nameField;

// direct

document.getElementById("nameT2").innerHTML=nameField;

// contact

document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

// email

document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

// address

document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

// facebook

document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

// instagram

document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

// LinkedIn

document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

// carrer objective

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

// work experience

let wes = document.getElementsByClassName("weField");

let str = "";

for (let e of wes) {
    str = str + '<li>' + e.value + '</li>';
}

document.getElementById("weT").innerHTML = str;

// Academic Quaklification

let aqs = document.getElementsByClassName("aqField");

let str1 = " ";

for(let e of aqs){
    str1 = str1 + '<li>' + e.value + '</li>';
}
 document.getElementById("aqT").innerHTML = str1;

// Certification

let certFields = document.getElementsByClassName("certField");

let certList = " ";

for(let element of certFields){
    certList += '<li>' + element.value + '</li>';
}

document.getElementById("certT").innerHTML = certList;

// code for setting image

let file = document.getElementById("imgField").files[0]

console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

// set the image to template

reader.onloadend=function()
{
    document.getElementById("imgTemplate").src=reader.result;
}


document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";

// print CV
function printCV( ) {

    window.print();
}



}







