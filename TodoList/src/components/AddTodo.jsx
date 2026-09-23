import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [data, setData] = useState("")
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addTodo(data))
        setData("")
    }
    return (
        <>
            <input type="text" value={data} onChange={(e) => (setData(e.target.value))} />
            <button onClick={handleAdd} >Add Me</button>
        </>
    )
}

export default AddTodo