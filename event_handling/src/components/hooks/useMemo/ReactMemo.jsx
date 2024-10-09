import { useMemo, useState } from "react";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  //  {};

  const myBioData = useMemo(() => {
    return {
      name: "thapa",
      age: 30,
    };
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBioData} />
    </>
  );
};