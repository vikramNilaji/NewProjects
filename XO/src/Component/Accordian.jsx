import data from "./data.js"



const Accordian=()=>{

  return (
    <>

      <h1>Accordian</h1>

      {data && data.length > 0 ?  data.map((value,index)=>
        

          <div key={index}>
          <h1>{value.id}</h1>
          {/* <h1>{value.question}</h1> */}
          <h1>{value.answer}</h1>

          </div> ) : <div> Nothing is here</div>

        
        }
    </>
  )


}


export default Accordian