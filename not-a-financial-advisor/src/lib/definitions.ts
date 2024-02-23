
export type User = {
    id: string;
    email: string;
    password: string;
    income: string | number;
    expenses: Expense[];
    goals: Goal[];
}

export type NewUser = {
    email: string;
    password: string;
}


export type Expense = {
    id: number;
    userId: number;
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