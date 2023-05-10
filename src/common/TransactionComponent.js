const TransactionComponent = ({transactions}) => {
    return (
        <>
    {transactions.map((item)=><p>{item.desc}</p>)}
    </>
    );
}
 
export default TransactionComponent;