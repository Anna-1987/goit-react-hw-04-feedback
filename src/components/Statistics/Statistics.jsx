 import React from 'react';
 import css from './Statistics.module.css';
  
export const Statistics =({good, neutral, bad, total, positivePercentage}) => {
        
  return (
            <div>
            <ul className={css.list}>
            <li>
              Good: <span>{good}</span>
            </li>
            <li>
              Neutral: <span>{neutral}</span>
            </li>
            <li>
              Bad: <span>{bad}</span>
            </li>
      
            <li>
              Total: <span>{total}</span>
            </li>
            <li >
              Positive feedback: <span>{positivePercentage}%</span>
            </li>
          </ul>
          </div>
        )
      }
  

// Statistics.prototype = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
//   total: PropTypes.number,
//   positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };
