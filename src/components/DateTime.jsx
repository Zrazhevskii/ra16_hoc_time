import PropTypes from 'prop-types';

export const DateTime = (props) => {
    return <p className='date'>{props.date}</p>;
};

DateTime.propTypes = {
    date: PropTypes.string.isRequired,
};
