const Data = () => {
  const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      id: 2,
      question: "What is 5 + 7?",
      answer: "12"
    },
    {
      id: 3,
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "William Shakespeare"
    },
    {
      id: 4,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter"
    },
    {
      id: 5,
      question: "What is the boiling point of water?",
      answer: "100°C"
    }
  ];

  return <>
  {data.map((value,index)=>{

    return(
    <div key={index}>

    <h1>{value.id}</h1>
    <h1>{value.question}</h1>
    <h1>{value.answer}</h1>
    </div>

  )})}</>;
};

export default Data;
