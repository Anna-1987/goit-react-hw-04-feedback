import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = () => {
  return <p className={css.msg}>There is no feedback</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};