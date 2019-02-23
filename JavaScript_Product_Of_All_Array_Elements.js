
/*Function to find the product of all the elements in an array*/
/*Written by Vakindu Philliam*/

var m = function product(list){

//Return list if one element or none

if(list.length<=1){

return list;

}

//Else, declare variable

//Initialize product to one

var multiply = 1;

//Iterate through all elements of the list

for(var i=0;i<list.length;i++){

//Multiply each element of the list to the multiple so far

multiply*=list[i];

}

//Return the product of list

return multiply;

}

//Run function

var array=[2,3,1,4,2,1,2,3];

//Output is 288

console.log(m(array));
