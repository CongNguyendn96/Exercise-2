import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../taskItem/index.jsx';
import './style.scss';
TaskList.propTypes = {
};

function TaskList() {
    return (
        <div>
            <div className="task-wrap">
                <TaskItem taskname="task-1" creator="Cong" version="New" desc='Wake up early to meet your friends'/>
                <TaskItem creator="Phong" taskname="task-2" desc="Complete your homework as soon as possible"/>
                <TaskItem version="New" taskname="task-3" creator="Vu" />
                <TaskItem taskname="task-4" creator="Thien" version="New" desc="You have an appoinment with customers."/>
                <TaskItem creator="Nam" taskname="task-5" desc="You will join in Thao's wedding at tomorrow."/>
            </div>
        </div>
    );
}

export default TaskList;