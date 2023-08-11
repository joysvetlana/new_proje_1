
//document.write(" Hello world! javascript say hello !!");
// console.log("Hello world! javascript say hello !!");
// console.error("Hello world! javascript say hello !!");
//console.warn("Hello world! javascript say hello !!");

/*
var number;
number = 34;
console.log( "Переменная: " + number);*/

/*
var num_1 = 7;
var num_2 = 5;
var res = num_1-num_2;
console.log(res );
console.log("Math:"+Math.min(2,8,1,-7,6));*/
/*
var num = 15;
var isHasHause = true;

if(num == 15 && isHasHause){
    console.log("ok!");
}
else if(num !=15) {
    console.log("ok");
    {
else {
    console.log("else");
}*/
/*
var stroka = "word";
switch (stroka){
    case "4":
    console.log("variable with value 4")
        break;
    case "45":
        console.log("variable with value 45")
        break;
    case "word":
        console.log("variable with value word")
        break;
    default:
        console.log("DEFAULT!")
}*/
/*
var arr=[5, true, "stroka", 5.7, 0, -100 ];
arr[3]= -4;
console.log(arr[3]);
console.log(arr.length);
var matrix=[
    [4, 6, 8], ["stroka", 5.7], [0, -100]
];
matrix[1][0]= 90;
console.log(matrix);*/
/*
 for (var i = 1; i <= 10; i++){
     console.log(i);
 }*/
/*alert("какая хорошая погода ");*/
/*
var data = confirm("You are now at home?");
if(data){
    alert("you are well done!")
}
*/
/*var data = prompt("How old are you ?");
console.log(data);*/

/*
var person = null;
if (confirm("are you sure?")){
    person = prompt("Enter your name:");
    alert("Hi " + person);
} else {
    alert("you clicked cancel");
}*/

/*function info() {
    console.log("Hi");
    console.log("!!!");
}
info();*/
/*function info(word) {
    console.log(word + "!");

}
function  sum  (a, b){
    var res = a + b;
    info(res);
}

sum(5, 7);*/

/*
function summa(arr) {
    var sum = 0;

    for( var i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}
var array = [6, 8, 1];

var res = summa(array);

console.log(res);*/

/*onClickButton()*/

/*var counter = 0;

function onClickButton(el){
counter++;
el.innerHTML = 'Hello :) ' + counter;
el.style.cssText = " border-radius: 5px; border:0; color: blue; font-size:16px;";
console.log(el.name);
}*/

<!--method by id-->

/*var text = document.getElementById('text');
text.title = 'New text';
console.log(text.title);

text.style.color = 'red';
text.style.backgroundColor = "blue";
text.innerHTML = "New<br>string";*/
/*document.getElementById('text').style.color = "white";*/

/*method by tag*/
/*var spans = document.getElementsByTagName('span');*/



/*method by class*/
/*var spans = document.getElementsByClassName('simple-text');

for( var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}
*/
        /*forms*/
/*document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event){
   event.preventDefault();
   var el = document.getElementById('main-form');
   /!* 1 method*!/
   /!*var name = document.getElementById("name").value;*!/
   /!* 2 method*!/
   var name = el.name.value;
   var pass = el.pass.value;
   var repass = el.repass.value;
   var state = el.state.value;

   var fail = "";

if(name == "" || pass == "" || state == "")
   fail = "fill in all input fields";
else if ( name.length <=1 || name.length >50 )
   fail = "enter a valid name";
else if (pass != repass)
   fail ="passwords must match";
else if (pass.split("&").length > 1)
   fail = "incorrect password";
if(fail != ""){
document.getElementById('error').innerHTML = fail;

}else {
   alert("all data is filled in correctly");
   window.location = 'https://www.w3schools.com/js'

   }
}*/
        /*Interval*/
/*setInterval(my_func, 1000);
var counter = 0;
function my_func(){
    counter++;
    console.log( "Counter:" + counter);
}*/
/*var counter = 0;
setInterval(function () {

    counter++;
    console.log( "Seconds have passed:" + counter);

}, 1000);*/

    /* stop Interval*/
/*var ItV = setInterval(my_func, 1000);
var counter = 0;
function my_func() {
    counter++;
    console.log("Counter:" + counter);
    if (counter == 3)
        clearInterval(ItV);
}*/
/*Timeout*/
/*setTimeout(function (){
    console.log("Timer is working");
},2000);*/

     /*Date*/

/*var date = new Date();*/

/*console.log(date.getFullYear());*/
/*console.log(date.getMonth()+1);*/
/*console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());*/
    /*Set Dete*/

/*var date = new Date();
date.setDate(11);
console.log("Date :"+ date.getDate());*/

    /*working with an array*/

/*var arr = [ 8, 90, 5, 6, 7, 9];*/
/*console.log(arr.sort());
console.log(arr.reverse());*/
/*console.log(arr.reverse().join(", "));*/
/*var stroka = arr.reverse().join(", ");
console.log(stroka.split(", "))*/

/*working with classes and objects*/

/* class Person{
     constructor(name, age, happiness) {
         this.name = name;
         this.age = age;
         this.happiness = happiness;
     }
     info(){
         console.log("Person: "+ this.name +". Age:" + this.age);
     }
 }

var alex = new Person( "Alex" ,45,true);
var bob = new Person( "Bob" ,35,false);
/!*
console.log( alex.name + " " + alex.age +" " + alex.happiness);
console.log( bob.name  + " " + bob.age +" " + bob.happiness);
*!/
alex.info();
bob.info();*/







