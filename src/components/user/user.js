import { useCallback, useEffect, useState } from "react";
import Item from "../item/item.js";

const User = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const color = {
    color: active ? "red" : "green",
    fontWeight: 700,
  };
  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const toogleFunction = () => {
    setActive((prevState) => !prevState);
  };

  const generateRandomArray = useCallback(() => {
    return Array(count)
      .fill(" ")
      .map((item, index) => `Item ${index + 1}`);
  }, [count]);

  return (
    <>
      <div className="w-50 mx-auto">
        <div className="border p-3 my-5">
          <p className="text-center" style={color}>
            User activited : {count}
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success" onClick={increment}>
              Increase
            </button>
            <button className="btn btn-warning mx-2" onClick={toogleFunction}>
              Toogle
            </button>
          </div>

          <Item generateRandomArray={generateRandomArray} />
        </div>
      </div>
    </>
  );
};

export default User;
