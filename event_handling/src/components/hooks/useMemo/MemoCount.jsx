import { useRef, memo } from "react";

// eslint-disable-next-line react/display-name
export const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div>
      <p>
        Nothing changed here but Ive now rendered:
        <span>{renderCount.current++} time(s)</span>
        <p>My name is {bioData.name}</p>
      </p>
    </div>
  );
});

// export default memo(Counts);