
/*Function to identify numbers that appear in both list A and list B*/
/*Written by Vakindu Philliam*/


var m = function common(list1,list2){

//Declare variables

var list=[];

//For each element of array 1

$.each(list1, function (j){

//Iterate through list 2

for(var i=0;i<list2.length;i++){

//Compare each element of lisy1 to each element of list2

if(list2[i]==j){

list.push(list2[i]);

  }
 }

});

//Return list

return list;

}

//Run function

var array1=[4,1,5,6,1,4];
var array2=[8,9,7,4,3,1,10];

console.log(m(array1,array2));
