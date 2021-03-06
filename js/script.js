// devo scrivere un programma che stampi numeri da 1 a 100
// il programma deve stampare la parola "Fizz" quando i = multiplo di 3 (% 3 = 0)
// il programma deve stampare la parola "Buzz" quando i = multiplo di 5 (% 5 = 0)
// il programma deve stampare la parola "FizzBuzz" quando i = multiplo di 3 e 5 [(% 3 = 0)  &&  (% 5 = 0)]
const fizzbuzzContainer = document.getElementById('fizz-buzz-wrapper');

for (let i = 1; i <= 100; i++) {

   // create a div
   const boxWrapper = document.createElement('div');
   // add col-2 class to boxWrapper
   boxWrapper.classList.add('col-2', 'text-center', 'text-white', 'm-2', 'px-3', 'py-5');
   // append boxWrapper in the row #fizz-buzz-wrapper
   fizzbuzzContainer.append(boxWrapper);

   
   let fizz = i % 3 == 0;
   let buzz = i % 5 == 0;
   let fizzBuzz = ((fizz) && (buzz));

   if (fizzBuzz) {
      boxWrapper.innerHTML = 'FizzBuzz';
      boxWrapper.classList.add('fizz-buzz-box');
   } else if (fizz) {
      boxWrapper.innerHTML = 'Fizz';
      boxWrapper.classList.add('fizz-box');
   } else if (buzz) {
      boxWrapper.innerHTML = 'Buzz';
      boxWrapper.classList.add('buzz-box');
   } else {
      boxWrapper.innerHTML = i;
   }

}