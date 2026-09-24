import React, { useEffect, useState } from 'react'

const AddExpense = () => {
    const [expense, setExpense] = useState([])
    const [item, setItem] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")
    console.log(`${item} ${amount} ${category}`)
    // const [total, setToal] = useState(0)

    const handleExpense = () => {
        setExpense([...expense, {
            it: item,
            am: amount,
            cat: category
        }])
        // setItem("")
        // setAmount(0)
        // setCategory("")
    }

    const total = expense.reduce((sum, ex) => {
        return sum + Number(ex.am);
    }, 0);

    return (
        <>
            <div>AddExpense</div>
            <input type='text' onChange={(e) => setItem(e.target.value)} />
            <input type='number' onChange={(e) => setAmount(e.target.value)} />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
            </select>
            <button onClick={handleExpense}>Add Expense</button>

            <div
                className="font-bold border-b px-4 py-3"
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr",
                    gap: "16px"
                }}
            >
                <div>Item</div>
                <div>Amount</div>
                <div>Category</div>
            </div>
            {expense.map((ex, index) => (
                <div
                    key={index}
                    className="border-b px-4 py-3"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr",
                        gap: "16px"
                    }}
                >
                    <div>{ex.it}</div>
                    <div>₹{ex.am}</div>
                    <div className="capitalize">{ex.cat}</div>
                </div>
            ))}
        </>

    )
}

export default AddExpense