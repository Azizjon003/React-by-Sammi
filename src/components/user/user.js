import { useState } from "react";

const User = ({ firstname, lastname, link }) => {
  const [age, setAge] = useState(21);
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      // setCount(count - 1);
      setCount((prevCount) => prevCount - 1);
    }
  };

  const reset = () => {
    // setCount(0);
    setCount((prevCount) => 0);
  };
  return (
    <>
      <div className="w-50 mx-auto">
        <div className="border p-3 my-5">
          <h1>
            Mening ismim - {firstname},sharifim - {lastname} yosh - {age}
          </h1>
          <a href={link}> Youtube Kanalim</a>
          <p className="text-center">{count}</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success" onClick={increment}>
              +
            </button>
            <button className="btn btn-danger mx-2" onClick={decrement}>
              -
            </button>

            <button className="btn btn-dark" onClick={reset}>
              {" "}
              0{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
