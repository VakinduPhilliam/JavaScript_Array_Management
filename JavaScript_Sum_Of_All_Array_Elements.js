
/*Function to find the sum of all the elements in an array*/
/*Written by Vakindu Philliam*/

var m = function sum(list){

//Return list if one element or none

if(list.length<=1){

return list;

}

//Else, declare variable

var total =0;

//Iterate through all elements of the list

for(var i=0;i<list.length;i++){

//Add each element of the list to the total

total+=list[i];

}

//Return the total of list

return total;

}

//Run function

var array=[8,0,1,3,5,3,9,1,6,7,6,4];

console.log(m(array));
