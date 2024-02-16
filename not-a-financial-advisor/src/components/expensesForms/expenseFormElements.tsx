
// dont need to build functionality for project

export function DeleteExpenseButton() {
    return (
        <button type='submit' className="">
            Delete Expense
        </button>
    )
};

export function AddExpenseButton() {
    return (
        <button type='submit' className="">
            Add Expense
        </button>
    )
};

export function UpdateButton() {
    return (
        <button type='submit' className="">
            Update Expenses
        </button>
    )
};

export function IsFixed({ id }: { id: string }) {
    return (
        <div className="">
            <label htmlFor={id}></label>
            <input id={id} name={id} type="checkbox" />
        </div>
    )
};

export function InputExpenses({ id, name }: { id: string, name: string }) {
    return (
        <div className="">
            <label htmlFor={id}>{name}</label>
            <input type="number" id={id} name={id} />
        </div>
    )
};


