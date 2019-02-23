
/*Function to find the largest element in an array*/
/*Written by Vakindu Philliam*/

var m = function biggest(list){

//Return list if one element or none

if(list.length<=1){

return list;

}

//Else, declare variable

var largest=0;

//Iterate through the elements of array

for(var i=0;i<list.length;i++){

//Compare each element in the list to the largest element found so far

if(list[i]>largest){

//Replace largest if current element is larger than largest found so far

largest=list[i];

  }
 }
 
//Return largest element

return largest;

}

//Run function

var array=[78,45,63,12,39,4,2,357,2,9,4,11,78,93,21,33,67,89,32,674,12,45];

//Outputs 674

console.log(m(array)); 
