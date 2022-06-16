// devo scrivere un programma che stampi numeri da 1 a 100
// il programma deve stampare la parola "Fizz" quando i = multiplo di 3 (% 3 = 0)
// il programma deve stampare la parola "Buzz" quando i = multiplo di 5 (% 5 = 0)
// il programma deve stampare la parola "FizzBuzz" quando i = multiplo di 3 e 5 [(% 3 = 0)  &&  (% 5 = 0)]

for (let i = 1; i <= 100; i++) {

   let fizz = i % 3 == 0;
   let buzz = i % 5 == 0;
   let fizzBuzz = ((fizz) && (buzz));

   if (fizzBuzz) {
      console.log("FizzBuzz");
   } else if (fizz) {
      console.log("Fizz");
   } else if (buzz) {
      console.log("Buzz");
   } else {
      console.log(i);
   }

}
