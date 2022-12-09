import ExpenseItems from "./ExpenseItems";
import './ExpenseDisplay.css'

const  ExpenseDisplay = (props) => {
    return (
        <div className='expenses'>
            {props.expenses.map((el, key) => {
                return <ExpenseItems key={key} title={el.title} amount={el.amount} date={el.date} clickHandler={props.clickHandler}/>
            })}
        </div>
    )
}

export default ExpenseDisplay