import PropTypes from 'prop-types';
import { DateTime } from './DateTime';
import { WithCorectData } from './WithCorectData';

export const DateTimeCorect = WithCorectData(DateTime);

export const Video = (props) => {
    return (
        <div className='video'>
            <iframe
                src={props.url}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
            ></iframe>
            <DateTimeCorect date={props.date} />
        </div>
    );
};

Video.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
};
