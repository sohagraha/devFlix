import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './watch.scss'

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackIcon />
            </div>
            <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" className='video' autoPlay progress controls></video>
        </div>
    );
};

export default Watch;