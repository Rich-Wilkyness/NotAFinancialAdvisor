import { Expense } from '@/lib/definitions';
import { updateUserIncome } from '@/lib/data';
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

export default function ExpenseForm(expenses: Expense[]) {
    return (
        <form action={async (formData) => {
            'use server';
            const updatedExpenses = await updateUserIncome(formData);
        }}>
            {expenses.map((expense) => {
                return (
                    <div key={expense.id}>
                        <div className="">
                            <label htmlFor={expense.name + 'Fixed'}></label>
                            <input id={expense.name + 'Fixed'} name={expense.name + 'Fixed'} type="checkbox" />
                        </div>
                        <div className="">
                            <label htmlFor={expense.name}>{expense.name}</label>
                            <input type="number" id={expense.name} name={expense.name} />
                        </div>
                    </div>
                )
            })}
        </form>
    )

}