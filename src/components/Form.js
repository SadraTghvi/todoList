import React from "react";


function Form(props){
    const inputTextHandler = (e) =>{
        props.setInputText(e.target.value)
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if (props.inputText === ""){
            return props.setTodos([...props.todos, {text:"Not Set",completed:false, id:Math.random() * 100},]);
        }

        props.setTodos([
            ...props.todos, {text:props.inputText,completed:false, id:Math.random() * 100},
        ]);
        props.setInputText("")
    }

    return(
        <form>
            <input 
                value={props.inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}


export default Form