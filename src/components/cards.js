import React from "react";
import Card from "./Card";
import {connect} from 'react-redux'

const Cards = ({syncTasks, doneCount}) => {
    let count = 0;
    if(!syncTasks.length){
        return <p className='text-center'>Data is not defined {doneCount}</p>
    }

    return syncTasks.map(task => <Card task={task} task_id={parseInt(count++)} key={count++}/>);
}

const mapStateToProps = state => {
    return{
        syncTasks: state.app.example,
        doneCount: state.app.count
    }
}
export default connect(mapStateToProps,null)(Cards)