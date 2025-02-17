

import './App.css'

function App() {
let promise1 =new Promise((resolve,reject)=> {
  setTimeout(()=>{

    console.log("Good Morning1")
    resolve(true)
  },4000) 
  
});


let promise2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    alert("Try Again")
    reject(new Error("Error Occurred"))
  },3000)
  
})

promise1
    .then((value) => {
      console.log(value);
      let promise3=  new Promise((resolve) => {
        setTimeout(() => {
          console.log("Learning with Good Mood")
          resolve("Great, we are done");
        }, 2000); 
      }); promise3.then((message) => console.log(message)) 
    })
    

  promise2.catch((error) => console.log("There is some error in fetching data"));
  return (
    <>
    
       {/* {console.log(promise1,promise2,p3)} */}
    </>
  )
}

export default App
