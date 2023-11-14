import PropTypes from 'prop-types';
import { Video } from './Video';

export const VideoList = (props) => {
    return props.list.map((item) => <Video url={item.url} date={item.date} key={item.id}/>);
};

VideoList.propTypes = {
    list: PropTypes.array.isRequired,
};
