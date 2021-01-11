import React, { useState } from 'react';

const scrollList = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incre</button>
    </>
  );
};

export default scrollList;
