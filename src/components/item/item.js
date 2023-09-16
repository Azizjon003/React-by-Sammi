import { useEffect, useState } from "react";

const Item = ({ generateRandomArray }) => {
  const [item, SetArray] = useState([]);

  useEffect(() => {
    let item = generateRandomArray();
    console.log("Render");
    SetArray(item);
  }, [generateRandomArray]);
  return (
    <>
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Item;
