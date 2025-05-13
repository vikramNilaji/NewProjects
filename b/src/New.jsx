import { useState } from "react";

const New = () => {
  const items = [2,4,6,7,8,9,10];
  let sum=0

  return (
    <>
      {items.map((i, index) => {
        sum= sum+i;
        return <div key={index}> {sum} </div>;
      })}
    </>
  );
};

export default New;
