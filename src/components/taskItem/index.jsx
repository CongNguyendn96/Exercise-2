import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TaskItem.propTypes = {
    taskname: PropTypes.string,
    creator: PropTypes.string,
    status: PropTypes.string,
    desc: PropTypes.string,
};
TaskItem.defaultProps = {
    taskname: "Task name",
    creator: "Tag name",
    version: "Old",
    desc: "Doing something positive."
}

function TaskItem(props) {
    const {taskname, creator, version, desc} = props;
    const [status, setStatus] = useState("Start");
    return (
        <div>
            <div className='card'>
                 <p>Title: <span>{taskname}</span></p>
                 <p>Creator:<span>{creator}</span></p>   
                 <p>Status:<span>{version}</span></p>   
                 <p>Description:<span>{desc}</span></p>   
                 <p>{status}</p>
                 <button onClick = {() => setStatus("Done")}>Done</button>
                 <button onClick={() => setStatus("Doing")}>Doing</button>
                 <button>Cancle</button>
            </div>
        </div>
    );
}

export default TaskItem;