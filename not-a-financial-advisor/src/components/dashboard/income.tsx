

export default function Income() {
    return (
        <div>
            <h1>Income</h1>
            <form action={async (formData) => {
                'use server';
                console.log(formData);
                const isCreated = await updateUserIncome(formData); 
            }}>
                <label htmlFor="income">Income: </label>
                <input type='number' placeholder='Income' name="income" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}