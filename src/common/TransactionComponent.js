const TransactionComponent = ({transactions}) => {
    return (
        <>
    {transactions.map((item)=><p key={item.id}>{item.desc}</p>)}
    </>
    );
}
 
export default TransactionComponent;