'use server';

import { unstable_noStore as noStore } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { NewExpense } from "./definitions";
import { z } from "zod";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUserAccount(formData: FormData) {
    try {
        noStore();
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(8),
        });
        const data = schema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

    
        const emailExists = checkEmail(data.email);
        if (emailExists === false) {
            return "Email already exists";
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
            },
        });
        console.log('here');
        // initializeExpenses(user.id);
        console.log('expenses initialized');
        return true;
    }
    catch (error){
        console.log("Error creating user: ", error);
        return false;
    }
}

function checkEmail(email: string) {
    try {
        noStore();

        const user = prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return !!user;
    }
    catch (error){
        console.log("Error checking email: ", error);
        return false;
    }
}

function initializeExpenses(userId: string | number) {
    const expenses: NewExpense[] = [
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
    try {
        const expenseData = expenses.map((exp: NewExpense) => {
            return {
                userId: Number(userId),
                name: exp.name,
                type: exp.type,
                amount: exp.amount,
                fixed: exp.fixed,
            };
        });
        prisma.expense.createMany({
            data: expenseData,
        });
        console.log("Expenses initialized");
    }
    catch (error){
        console.log("Error initializing expenses: ", error);
        throw new Error("Error initializing expenses");
    }
}

export async function updateUserIncome(formData: FormData) {
    try {
        noStore();
        const schema = z.object({
            income: z.number(),
        });
        const data = schema.parse({
            income: Number(formData.get('income')),
        });
        const user = prisma.user.update({
            where: { id: 1 },
            data: {
                income: data.income,
            },
        });
        return true;
    }
    catch (error){
        console.log("Error updating income: ", error);
        return false;
    }
}

export async function userSignIn(formData: FormData) {
    try {
        noStore();
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(8),
        });
        const data = schema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        const user = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
            include: {
                // income: true,
                expenses: true,
                goals: true,
            },
        });
        if (user) {
            const passwordMatch = await bcrypt.compare(data.password, user.password);
            if (passwordMatch) {
                return true;
            }
        }
        return false;
    }
    catch (error){
        throw error;
    }
}

export async function fetchExpensesByType(type: string | undefined) {
    try {
      noStore();
        const expenses = await prisma.expense.findMany({
            where: {
            type: type,
            },                
        });
        return expenses;
    }
    catch (error){
        throw error;
    }
}