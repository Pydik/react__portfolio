import React, { Component } from 'react';
import '../preHeader/preHeader.css'
import '../../../container.css'

class PreHeader extends Component {
    render() {
        return (
            <div className='preHeader'>
                <p className='preHeader__text'>
                    This project create only to study
                </p>
            </div>
        );
    }
}

export default PreHeader;