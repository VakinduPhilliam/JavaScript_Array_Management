
/*Function to identify even numbers from zero to a given number n */
/*Written by Vakindu Philliam*/

var m = function even(n){

//Declare variable to store even numbers

var even =[];

for (var i=1;i<=n;i++){

//Identify even numbers and store them into array even

if(i%2==0){

even.push(i);

   }
}

//Return even numbers

return even;

};

//Run function

console.log(m(10));
