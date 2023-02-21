// Axios is a promise-based HTTP client that works both in the browser and in a NodeJS environment.
// Axios is similar to the fetch API and it can be used in plain JavaScript as well as in modern JavaScript frameworks like React, Angular, and Vue.



//Axios Get request

const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
     const users = response.data.data;
     console.log(`Getting Users Details:`, users);
   })
    .catch(error => console.log(error.message));
   };
   getUsers();


//Axios Post request
const createUser = (user) => {
  axios.post('https://reqres.in/api/users', user)
  .then(response => {
  const addedUser = response.data;
  console.log(`POST: user is added`, addedUser);
  })
  .catch(error => console.log(error.message));
 };
 createUser({name:"Pavan", team:"UI",});


//Axios Delete request
 const deleteUser = () => {
  axios
    .delete(`https://reqres.in/api/users/2`)
    .then(response => {
      console.log(`DELETE: user is removed`)
    
    })
    .catch(error => console.error(error))
}

deleteUser();

//Axios Put request
