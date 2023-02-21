// Promise and it's state.

    // Pending: Initial State, before the event has happened.
    // Resolved: After the operation completed successfully.
    // Rejected: If the operation had error during execution, the promise fails.

const promise = new Promise(function (resolve, reject) {
    const string1 = "Hello World";
    const string2 = "Hello World";
    if (string1 === string2) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(function () {
        console.log("Promise resolved successfully");
    })
    .catch(function () {
        console.log("Promise is rejected");
    });



    //Async/Await:
        
        /*Async/Await is used to work with promises in asynchronous functions. It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises easier to read and use. It makes asynchronous code look more like synchronous/procedural code, which is easier to understand.*/
    
        
        const helperPromise = function () {
            const promise = new Promise(function (resolve, reject) {
            const x = "hello";
            const y = "hello";
            if (x === y) {
                resolve("Strings are same");
            } else {
                reject("Strings are not same");
            }
            });
        
            return promise;
        };
        
        async function demoPromise() {
            try {
            let message = await helperPromise();
            console.log(message);
            } catch (error) {
            console.log("Error: " + error);
            }
        }
        
        demoPromise();




// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
 let result = myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
 console.log(result);



 //False Value

   /*A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.*/
   
   function truthyOrFalsy(input){
    if(input){
      console.log("Truthy Value");
    } else {
      console.log("Falsy Value");
    }
  } 
  truthyOrFalsy("");



 //Event Listner
//  An event listener in JavaScript is a way that you can wait for user interaction like a click or keypress and then run some code whenever that action happens. One common use case for event listeners is listening for click events on a button.

     document.getElementById("try").addEventListener("click", function(){
     document.getElementById("text").innerText = "Button Clicked";
    });
  


 
    
        