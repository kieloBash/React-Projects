import React from 'react';

export default function Categories({filterItems}){
    return (
        <div className='btn-container'>
            <button onClick={()=>filterItems('breakfast')}>Breakfast</button>
            <button onClick={()=>filterItems('lunch')}>Lunch</button>
            <button onClick={()=>filterItems('shakes')}>Shakes</button>
        </div>
    );
}