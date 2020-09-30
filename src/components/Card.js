import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTimer} from "../reducer/actions";


export default ({task, task_id}, props) => {
    const[valueInput, setValueInput] = useState('');
    const dispatch = useDispatch()

    const submitHandlerInput = event => {
        if(event.key ==='Enter'){
            if(parseInt(valueInput) === eval(task)){
                document.getElementById(`value${task_id}`).classList.add('bg-success')
                event.preventDefault()
                document.getElementById(`input${task_id}`).readOnly = true;
                dispatch(createTimer(+1))

            } else {
                document.getElementById(`value${task_id}`).classList.add('bg-danger')
                event.preventDefault()
                document.getElementById(`input${task_id}`).readOnly = true;
            }
        } else {
            console.log(valueInput)
        }
    }

    const changeHandleInputValue = event => {
        setValueInput(event.target.value)
        console.log(valueInput)
    }

    return (
        <form >
            <div className={`form-group card mb-4 board-card`} id={`value${task_id}`}>
                <div className='card-title text-center mt-2'> {task}</div>
                    <div className='card-body'>
                        <input
                            type='title'
                            className='form-control'
                            id = {`input${task_id}`}
                            value={valueInput}
                            onChange = {changeHandleInputValue}
                            onKeyDown={submitHandlerInput}
                            size={2}
                        />
                    </div>
                </div>
        </form>
    )
}