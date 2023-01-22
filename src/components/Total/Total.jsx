import React from 'react';

const Total = (props) => {
    return (
        <p>
           {'Общее количество задач: '} {props.tasks1 + props.tasks2 + props.tasks3}
        </p>
        
    );
};

export default Total;