import React, {useState, useReducer} from 'react';
import todosReducer from '../../Reducer/todo';

export default function TodosComponentes () {

    const [state, dispatch] = useReducer(todosReducer, {todos: []});
    const [dados, setDados] = useState({ inputTodo : ""})
    

    function addTodo(){
        dispatch({ type: "ADD_TODO", title : dados.inputTodo})
    }

    function changeText(e){
        setDados({...dados, inputTodo: e.target.value});
    }
    
    return (
        <>
        <ul>
            {state.todos.map(t=> <li key={t}>{t}</li>)}
        </ul>
        <input type="text" name="add_todo"  value={dados.inputTodo} onChange={changeText}/>
        <button onClick={addTodo}>Adicionar Todo</button>
        </>
    );
}