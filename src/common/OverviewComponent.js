import { useState } from "react";
import BalanceForm from "./TransactionForm";
const OverviewComponent = ({ expense, income }) => {
    const [isShow,setIsShow] = useState(false)
  return (
    <>
      <div className="topSection">
        <p>balance :{income - expense}</p>
        <button onClick={()=>setIsShow(prevState => !prevState)}>{isShow ? "Cancel" : "Add"}</button>
      </div>
      {isShow && <BalanceForm/>}
      <div className="resultSection">
        <div>expense : {expense}</div>
        <div>income : {income}</div>
      </div>
    </>
  );
};

export default OverviewComponent;
