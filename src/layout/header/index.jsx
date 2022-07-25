import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Header.propTypes = {
};

function Header(props) {
    return (
        <div>
            <div className="header">
                <input type="button" value=" Create New Task"/>
                <div className="header-btn">
                    <input type="text" placeholder="Type something to search" />
                    <input type="button" value="Search" />
                </div>
            </div>
        </div>
    );
}

export default Header;