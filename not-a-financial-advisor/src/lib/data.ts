'use server';

import { unstable_noStore as noStore } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Expense, NewExpense } from "./definitions";

const prisma = new PrismaClient();

export async function createUserAccount(req: NextApiRequest, res: NextApiResponse) {
    noStore();

    const data = req.body;

    const emailExists = checkEmail(data.email);
    if (emailExists === false) {
        return { message: "Email already exists" };
    }
    const user = await prisma.user.create({
        data: {
            email,
            password,
        },
    });
    return user;
}

function checkEmail(email: string) {
    noStore();

    const user = prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        return false;
    } else {
        return true;
    }
}

function initializeExpenses(userId: string | number) {
    noStore();

    const expenses = [
        { name: "Mortgage / Rent", type:"housing", amount: 0, fixed: false },
        { name: "Home / Renters Insurance", type:"housing", amount: 0, fixed: false},
        { name: "Property Taxes", type:"housing", amount: 0, fixed: false},
        { name: "Home Maintenance", type:"housing", amount: 0, fixed: false},
        { name: "Home Owners Association", type:"housing", amount: 0, fixed: false},
        { name: "Utilities", type:"housing", amount: 0, fixed: false },
        { name: "Automobile Payment", type:"automobile", amount: 0, fixed: false },
        { name: "Automobile Insurance", type:"automobile", amount: 0, fixed: false },
        { name: "Gasoline", type:"automobile", amount: 0, fixed: false },
        { name: "Public Transportation", type:"automobile", amount: 0, fixed: false },
        { name: "Health Expenses (insurance, copays, etc.)", type:"health", amount: 0, fixed: false },
        { name: "Life Insurance", type:"health", amount: 0, fixed: false },
        { name: "Dental (insurance, copays, etc.)", type:"health", amount: 0, fixed: false },
        { name: "Vision (insurance, copays, etc.)", type:"health", amount: 0, fixed: false },
        { name: "Internet", type:"services", amount: 0, fixed: false },
        { name: "Cable", type:"services", amount: 0, fixed: false },
        { name: "Cell Phone", type:"services", amount: 0, fixed: false},
        { name: "Subscriptions (Netflix, Spotify, Gym, Lawn, etc.)", type:"services", amount: 0, fixed: false},
        { name: "Studen Loans", type:"loans", amount: 0, fixed: false },
        { name: "Credit Card Payments", type:"loans", amount: 0, fixed: false },
        { name: "Other Loans", type:"loans", amount: 0, fixed: false },
        { name: "Food (Groceries, Take-out)", type:"misc", amount: 0, fixed: false },
        { name: "Clothing", type:"misc", amount: 0, fixed: false },
        { name: "Child Care", type:"misc", amount: 0, fixed: false },
        { name: "Child Activities", type:"misc", amount: 0, fixed: false },
        { name: "Child Support", type:"misc", amount: 0, fixed: false },
        { name: "Pet Care (All Expenses)", type:"misc", amount: 0, fixed: false },

    ];
    expenses.map((exp: NewExpense) => {
        prisma.expense.create({
            data: {
                userId: Number(userId),
                name: exp.name,
                type: exp.type,
                amount: exp.amount,
                fixed: exp.fixed,
            },
        });
    });
}