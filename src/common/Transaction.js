const Transaction = ({ desc, amount,type}) => {
  return (
    <div className="transaction" style={{borderRight:type === "expense" && "4px solid red"}}>
      <span>{desc}</span>
      <span>{amount}</span>
    </div>
  );
};

export default Transaction;
