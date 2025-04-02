 //function 
    function apple(){
    console.log("apple")
}
apple();

console.log("hello")


//While Loop
 var a=1
    while (a<3){
    console.log(a)
    a++
    }



//For Loop    
    for(var i=1; i<3; i++){
    console.log(i)
}



// Do While Loop
var c=120;
 
do {
    console.log("hii")
    c++;
 } while (c<20);


//Creating Array
A = [1,2,3,4,5]





//Execaution context & Lexical Environment
function abcd(){
    var a=12;
    child();
    console.log(a)
    function child(){
        var b=10;
        console.log(b);  
    }

}
abcd(); 



//ForEach Loop- works only on array
var a = [1,2,3];
a.forEach(function(val){
    console.log(val+2)
})




// forin Loop- objects pr loop kaene keliye hota hai forin loop
var obj = {
    name:"Harsh",
    age : "24",
    city : "Pune"
}

for(var key in obj){
    console.log(key, obj[key]);
}



// call back functions- 
function hello(){
    setTimeout(function () {
        console.log("Hello");
    }, 5000);
}

// besic ft arrow fnc
var a = (abhi)=>{
    console.log(abhi);
}

a(2);


//Higher Order fnc
function abcd (val){
}

abcd(function(){})




