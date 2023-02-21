const ExpenseItem = (props) => {

const btnh = () =>{
console.log("title");
}

   /* const expDate=new Date()
    const expTitle="new MousePad"
    const expAmount=200*/
const month=props.expDate.toLocaleString('en-GB', { timeZone: 'UTC' });

    return (
        <div className="expense-item">
            <div>{month}</div>
            <div className="expense-item_description">
            <h2>{props.expTitle}</h2>
            <p className="expense-item_price">Rs {props.expAmount}</p>
        <button onClick={btnh}>Change title</button>
            </div>
        </div>

    )
}

export default ExpenseItem;