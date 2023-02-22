import { useState } from "react";
import "./AlertCard.css";

const AlertCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>
        {children}
        <button onClick={() => setShow(!show)} className="trigger">
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
