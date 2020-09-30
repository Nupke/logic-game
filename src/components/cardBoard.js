import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTask} from "../reducer/actions";
import Swal from 'sweetalert2'


const  CardBoard = (props) =>{
    const [value, setValue] = useState('')
    const dispatch = useDispatch();


    const taskGenerator = () =>{
        let operator = ['+','-','*','/']
        let m = Math.floor(Math.random()*10) + 1;
        let n = Math.floor(Math.random()*10) + 1;
        let index = Math.floor(Math.random()*4)
        return `${n}${operator[index]}${m}`;

    }

    const submitHandler = event => {
        event.preventDefault()
        if(parseInt(value) >= 20 && parseInt(value) < 60){
            let data = new Array(parseInt(value)).fill(0).map(Number.call, taskGenerator);
            dispatch(createTask(data), [
            ]);
            setTimeout(()=> props.history.push(`/component`), 1000)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid number.',
                text: 'the entered number must be greater than 20 and less than 60',
            })
        }
    }

    const changeValueHandler = event => {
        event.persist()
        setValue(event.target.value)
        console.log(value)
    }


    return(
        <form onSubmit={submitHandler} >
            <div className="form-group">
                <label htmlFor='title'>set your number from 20 to 60</label>
                <input
                    type='title'
                    className='form-control'
                    id = 'title'
                    value={value}
                    name = 'title'
                    onChange={changeValueHandler}
                />
            </div>
            <button className='btn btn-primary' type='submit'>Start Game</button>
            {/* /.form-group */}
        </form>
    )
}
export default CardBoard