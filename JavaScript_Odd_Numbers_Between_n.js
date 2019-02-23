/*Function to identify odd numbers from zero to a given number n */
/*Written by Vakindu Philliam*/

var m = function odd(n){

//Declare variable to store odd numbers

var odd =[];

for (var i=1;i<=n;i++){

//Identify odd numbers and store them into array odd

if(i%2>0){

odd.push(i);

   }
}

//Return odd numbers

return odd;

};

//Run function

console.log(m(10));
