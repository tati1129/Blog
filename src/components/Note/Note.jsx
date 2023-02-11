import React from 'react';
import s from './note.module.css'


const Note = ({id, part,category,task,totalTask}) => {
    return (
        <div className={s.note}>
            <h5 className={s.category}>{category}</h5>
            <p className={s.title}>{part}</p>
            <p>{task} занятий</p>
            
        </div>
    );
};

export default Note;