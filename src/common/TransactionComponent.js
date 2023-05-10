import Transaction from "./Transaction";

const TransactionComponent = ({ transactions }) => {
  return (
    <>
      {transactions.map((item) => (
        <Transaction desc={item.desc} amount={item.amount} key={item.id} />
      ))}
    </>
  );
};

export default TransactionComponent;
