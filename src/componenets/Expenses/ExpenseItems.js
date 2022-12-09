import './ExpenseItems.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({date, title, amount, clickHandler}) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <button onClick={() => clickHandler()}>Click me</button>
            </div>
        </div>
    )
}


export default ExpenseItem