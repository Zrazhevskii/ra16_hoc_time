import React from 'react';
import { DateTime } from './DateTime';


export const Video = (props) => {
    return (
        <div className='video'>
            <iframe
                src={props.url}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
            ></iframe>
            <DateTime date={props.date} />
        </div>
    );
};
