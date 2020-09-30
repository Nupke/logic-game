import React from "react";
import {Redirect} from "react-router";
import {resetTask} from "../reducer/actions";
import {useDispatch} from "react-redux";

const padTime = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor(time / 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
};
export default function Timer(props) {
    const dispatch = useDispatch();

    const [counter, setCounter] = React.useState(10);
    React.useEffect(() => {
        let timer;
        if (counter > 0) {
            timer = setTimeout(() => setCounter(c => c - 1), 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter]);

    const resetHandler = () => {
        dispatch(resetTask());
        return <Redirect to={`/`}/>
    }

    return (
        <div className="App">
            {counter === 0 ?  resetHandler() : <div>time: {format(counter)}</div>}
        </div>
    );
}