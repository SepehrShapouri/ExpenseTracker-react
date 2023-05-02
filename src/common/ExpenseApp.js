import { useState } from "react";
import TransactionComponent from "./TransactionComponent";
import OverviewComponent from "./OverviewComponent";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  return (
    <section className="container">
      <OverviewComponent expense={expense} income={income} />
      <TransactionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
