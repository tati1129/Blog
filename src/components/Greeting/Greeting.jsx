import React from 'react';

const Greeting = (props) => {
    return (
        <div>
        <p>Hello, {props.name} {props.surname} {props.age ? (
          <p>
            {props.age}
          </p>
        ) : ""}</p>
      </div> 
    );
};

export default Greeting;