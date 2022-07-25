import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TaskItem.propTypes = {
    taskname: PropTypes.string,
    creator: PropTypes.string,
    desc: PropTypes.string,
};
TaskItem.defaultProps = {
    taskname: "Task name",
    creator: "Tag name",
    desc: "Doing something positive."
}

function TaskItem(props) {
    const {taskname, creator, desc} = props;
    const [status, setStatus] = useState("New");
    const [change, setButton] = useState("Start");
    const [color, setColor] = useState("green");
    function handleAction() {
        if(status === "New" ) {
            setStatus("Doing");
            setButton("Done");
            setColor('purple');
        }
        else if (status === "Doing") {
            setStatus("Done");
            setButton("Renew");
            setColor('blue');
        } else if (status === "Done") {
            setStatus("New");
            setButton("Start");
            setColor('green');
        }
    }
    return (
        <div>
            <div className='card'>
                 <p>Title: <span>{taskname}</span></p>
                 <p>Creator:<span>{creator}</span></p>   
                 <p style={{color:`${color}`}}>Status:<span>{status}</span></p>   
                 <p>Description:<span>{desc}</span></p>
                 <button onClick={handleAction}>{change}</button>   
            </div>
        </div>
    );
}

export default TaskItem;