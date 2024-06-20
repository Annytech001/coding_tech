// script.js
document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".like-button").forEach((button) => {
          button.addEventListener("click", function () {
            this.classList.toggle("liked");
          });
        });
      });
      









//console.log ('Hello World');

        //alert('Welcome Everyone')
        //prompt ('Please enter your age')
        //confirm('Are you sure you want to pay?')
    
// string 
//let name ='mary'
//console.log(name);

// Boolean
//let ismarried=true
//console.log(ismarried);

//Null
//let student=null;
//console.log(student);

//undefined
//let marks;
//console.log(marks)


//const colours = [ 30, 'james', null, true, 700]
                 // 0,   1,     2,      3,     4

//console.log(colours.length);
//console.log(colours[3]);

//let tech = ['glory', 27, 'female',];
//tech.push('male');
//console.log(tech);


//let World = ['glory', 27, 'female'];
//World.unshift('James'); 
//console.log(World);

//let Diver = ['glory', 27, 'female'];
//Diver.shift('glory'); 
//console.log(Diver);

//let black = ['glory', 27, 'female'];
//black.pop('female'); 
//console.log(black);

//const property= [
      //  'shoe',
      //  'Clothes',
      //  companies = ['Bua', 'Lipton','Bama', 'Power oil'],
      //  Houses = ['duplet','penthouse','bungalow', 'flats'],
      //  'school',
      //  cars = ['BMW', 'Lamborghini', benz = ['G-wagon', 'AMG63', 'AMG-LE',],'toyota-camry'],
     //   'supermarket'
//]
//const penthouse = property[3][1];
//console.log(penthouse);

//const toyotaCamry = property[5][3];
//console.log(toyotaCamry);

//const G_wagon = property[5][2][0]
//console.log (G_wagon);

//const supermarket = property[6];
//console.log (supermarket);


//const person = {
        //name: 'John',
        //age: 30,
       // married: true,
        //certificate: null,
        //christain: false,
       /* profession: {
                job: 'software Engineer',
                company: 'Apple',
                startDate: '20-8-2018',
                endDate: 'Currently work here',

        }
}

console.log (person.christain);
console.log (person.age);
console.log (person.married);
console.log (person.married);

console.log(person.profession.company);
console.log(person.profession.startDate);
console.log(person.profession.job);
*/
