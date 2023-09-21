import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, updateCount}) => {

  return (  
    <div className={css.btn__block}>
      {options.map(option =>(
          <button
          key={option}
          type="button"
          name={option}
          className={css.btn}
          onClick={updateCount}
        >
          {option}
        </button>
      ))}

    </div>
);
      }
export default FeedbackOptions;