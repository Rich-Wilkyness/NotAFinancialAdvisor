
export type User = {
    id: string | number;
    email: string;
    password: string;
    expenses: Expense[];
    goals: Goal[];
}

export type Expense = {
    id: string | number;
    name: string;
    type: string;
    amount: number;
    fixed: boolean;
}
export type NewExpense = {
    name: string;
    type: string;
    amount: number;
    fixed: boolean;
}

export type Goal = {
    id: string | number;
    userId: string | number;
    name: string;
    cost: number;
    contribution: number;
    currentContribution: number;
}