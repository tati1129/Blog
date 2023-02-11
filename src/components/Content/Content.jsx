import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import s from './content.module.css'


const fetchContent = () => {
    return axios.get('http://localhost:3001/parts')
}

const Content = () => {
    const [contents, setContent] = useState([])
    useEffect(() => {
        fetchContent()
            .then(res => {
                setContent(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const totalTask = contents.reduce((prev, {task}) => prev + task, 0);
    console.log(totalTask)

    return (
        <div>
            <h1>Темы занятий</h1>
            <div className={s.wrapper}> 
       {
        contents.map(content => <Note key={content.id} {...content} />)
       }
        </div>
            <div>
                <h2>Общее количество занятий: {totalTask} </h2>
            </div>
        </div>
    );
};

export default Content;