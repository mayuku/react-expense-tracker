import './ExpenseItem.css'

function ExpenseItem({title, amount, date}) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    const month = date.toLocaleString('en-US', { month: 'long'});
    const day = date.toLocaleString('en-US', { day: '2-digit'});
    const year = date.getFullYear();

    return  (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem