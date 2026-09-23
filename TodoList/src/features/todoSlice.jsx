import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "learn React", status: false }]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                status: false
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer