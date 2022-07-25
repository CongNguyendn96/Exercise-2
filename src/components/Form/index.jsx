import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
Form.propTypes = {
    
};

function Form(props) {
    return (
        <div>
            <div className='form'>
                <div>
                    <label htmlFor=''>Title</label>
                    <input type="text" placeholder='Enter Title'/>
                </div>
                <div>
                    <label htmlFor="">Creator</label>
                    <input type="text" placeholder='Enter Name'/>
                </div>
                <div>
                    <label htmlFor=''>Description</label>
                    <textarea name="" id="" cols="35" rows="8" placeholder='Enter description'></textarea>
                </div>
            </div>
        </div>
    );
}

export default Form;