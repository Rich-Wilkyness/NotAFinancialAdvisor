import { fetchExpensesByType, updateUserIncome } from '@/lib/data';
import ExpensesNav from '@/components/expensesForms/expensesNav';
import ExpenseForm from '@/components/expensesForms/expenseFormElements';

export default async function ExpensesPage({ params }: { params: { expenseType: string } }) {

    const expenses = await fetchExpensesByType(params.expenseType);
    console.log(expenses);
    return (
        <div>
            <h1>Expenses</h1>
            <div>
                {/* <ExpensesNav expenseType={params.expenseType} /> */}
            </div>
            <div>
                {/* <ExpenseForm expenses={expenses} /> */}
            </div>
        </div>
    )
}