import React from 'react';
import './QuestionsAnswer.css';

const QuestionsAnswer = () => {
    return (
        <div className='question-and-answer'>
            <div>
                <h3>1. How dose react work?</h3>
                <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
                <br /><br />
                React is an excellent tool with which to create interactive applications for mobile, web, and other platforms.

                React. js developers design and implement user interface components for JavaScript-based web and mobile applications using the React open-source library ecosystem. </p>
            </div>
            <div>
                <h3>2. Difference between props and state?</h3>
                <p>Ans: Props are a Component’s attributes in React that are useful for customization. Since a prop modifies a component’s behavior or output, it can be compared to a parameter.
                <br /><br />
                A built-in React object called the state is used to store data or details about the component. A component may change over time, and a new rendering of the component is produced each time it happens. The component’s behavior and rendering are determined by changes in state, which may occur in reaction to user input or system-generated events.
                </p>
            </div>
            <div>
                <h3>3. What kinds of jobs being done with useEffect without data loading?</h3>
                <p>Ans: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi architecto deleniti expedita debitis laboriosam, soluta amet dignissimos voluptatibus totam accusantium. </p>
            </div>
            
        </div>
    );
};

export default QuestionsAnswer;