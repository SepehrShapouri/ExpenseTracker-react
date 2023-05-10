const Transaction = ({ desc, amount,type}) => {
  return (
    <div className="transaction">
      <p>{desc}</p>
      <p>{amount}</p>
    </div>
  );
};

export default Transaction;
