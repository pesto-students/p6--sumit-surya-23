//example for call
//call method calls a function by using a given this value and the arguments provided individually
//*****************************************************CALL********************************************//
function  company(location,state){
    console.log(this.name," Founded "+this.company+" in year "+this.year+" at "+location+" "+state);
}
var founder1={
    name:'LarryPage',
    company:'google',
    year:'1998',
}
var founder2={
    name:'Steve Jobs',
    company:'Apple',
    year:'1976',
}
company.call(founder1,"Menlo Park","united states");
company.call(founder2,"Los Altos","united states");


//*****************************************************BIND********************************************//

//example 1
var test ={
x:42,
y:6,
division:function(){
    return this.x%this.y;
}
}
var result =test.division;
console.log("Result of First  Example without Bind"+result()); //undefined OR NAN
var result =test.division.bind(test);
console.log("Result of First  Example with Bind"+result()); //remainder 0


//example2
function rem(a,b){
return a%b;
}
const remainder=rem.bind(null);
console.log("Result of Second Example"+remainder(5,2));

//**************************************************APPLY********************************************//


function  bike(place,year){
    console.log(this.bike_name," Was Founded By "+this.bike_founder+" at "+place+" "+year);
}
var bikefounder={
    bike_name:'Bajaj Pulsar',
    bike_founder:'Jamnalal bajaj',

}

bike.apply(bikefounder,['Pune','1945']);
