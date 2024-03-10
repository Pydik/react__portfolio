import React from 'react';
import Trash from '../../home/categories/images/CellPhone.png';

function deleteItem() {
    return (
        <div>
            <img className="img__heart" src={Trash} alt="" />
        </div>
    );
}

export default deleteItem;
