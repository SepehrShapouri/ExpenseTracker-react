import { useState } from "react";
import TransactionForm from "./TransactionForm";
const OverviewComponent = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p className="balance">balance : {income - expense} $</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn ${isShow && "cancel"}`}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div className="expenseBox">
          expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          income <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverviewComponent;
