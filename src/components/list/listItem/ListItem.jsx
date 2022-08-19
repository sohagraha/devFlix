import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import './listItem.scss';

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className='listItem'
            style={
                { left: isHovered && index * 225 - 50 + index * 2.5 }
            }

            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
            {
                isHovered && (
                    <>
                        <video src={trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrowIcon className='icon' />
                                <AddIcon className='icon' />
                                <ThumbUpOutlinedIcon className='icon' />
                                <ThumbDownOutlinedIcon className='icon' />
                            </div>
                            <div className="itemInfoTop">
                                <span>1 hour 14 mins</span>
                                <span className="limit">+16</span>
                                <span>1999</span>
                            </div>
                            <video src={trailer} autoPlay={true} loop />
                            <div className="desc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, repellendus ducimus. Ad deleniti vero expedita aliquid possimus?
                            </div>
                            <div className="genre">Action</div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default ListItem;