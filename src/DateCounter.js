import { useReducer, useState } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };

    case "inc":
      return { ...state, count: state.count + 1 };

    case "setCount":
      return { ...state, count: state.count + action.paylaod };
    default:
      return "Unknown Action";
  }
};

const initialState = {
  count: 0,
  step: 1,
};

function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) =>
            dispatch({ type: "setStep", paylaod: e.target.value })
          }
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
        <input
          value={count}
          onChange={(e) =>
            dispatch({ type: "setCount", paylaod: Number(e.target.value) })
          }
        />
        <button onClick={() => dispatch({ type: "inc" })}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
