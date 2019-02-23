
/*Function to identify odd numbers inside an array of elements*/
/*Written by Vakindu Philliam*/

var m = function odd(list){

var n =[];

//Iterate through list

for(var i=0;i<list.length;i++){

var value=list[i];

//Identify Odd numbers and push into array

if(value%2>0){

n.push(value);

   }
 }

return n;

}

//Run function

var array=[3,1,2,6,9,7];

console.log(m(array));

