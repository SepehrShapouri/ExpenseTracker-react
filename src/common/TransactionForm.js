import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };
  return (
    <form onSubmit={submitHandler}>
        <div className="inputHolder">
      <input
        type="text"
        name="desc"
        defaultValue={formValues.descp}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        defaultValue={formValues.amount}
        onChange={changeHandler}
      />
      </div>
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button className="btn primary">Add transaction</button>
    </form>
  );
};

export default TransactionForm;
