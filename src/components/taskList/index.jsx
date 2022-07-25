import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../taskItem/index.jsx';
import './style.scss';
TaskList.propTypes = {
};

 function TaskList() {
    return (
        <div className="task-list">
            <div className="task-wrap">
                <TaskItem taskname="Task-1" creator="Công" status="Doing" desc='Wake up early to meet your friends'/>
                <TaskItem creator="Phong" taskname="Task-2" desc="Complete your homework as soon as possible" />
                <TaskItem taskname="Task-3" creator="Thiên" status="Done" desc="You have an appoinment with customers."/>
                <TaskItem taskname="Task-4" creator="Thành" status="Doing"/>
            </div>
            <div className="task-wrap">
                <TaskItem taskname="Task-5" creator="Công" status="Done" desc='Wake up early to meet your friends'/>
                <TaskItem creator="Phong" taskname="Task-6" desc="Complete your homework as soon as possible"/>
                <TaskItem taskname="Task-7" creator="Thiên" status="Doing" desc="You have an appoinment with customers."/>
                <TaskItem taskname="Task-8" creator="Thành" status="Done"/>
            </div>
            <div className="task-wrap">
                <TaskItem taskname="Task-9" creator="Công" status="Done" desc='Wake up early to meet your friends'/>
                <TaskItem creator="Phong" taskname="Task-10" desc="Complete your homework as soon as possible"/>
                <TaskItem taskname="Task-11" creator="Thiên" status="Done" desc="You have an appoinment with customers."/>
                <TaskItem taskname="Task-12" creator="Thành" status="Doing"/>
            </div>
        </div>
    );
}

export default TaskList;