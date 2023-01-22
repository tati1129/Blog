import React from 'react';

const Content = (props) => {
    return (
        <div>
            <p>
            {props.part1}  {props.tasks1}
        </p>
        <p>
            {props.part2} {props.tasks2}
        </p>
        <p>
            {props.part3} {props.tasks3}
        </p>
        </div>
    );
};

export default Content;