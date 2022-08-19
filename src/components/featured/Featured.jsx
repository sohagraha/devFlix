import './featured.scss';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
    return (
        <div className='featured'>
            {
                type && (
                    <div className='category'>
                        <span>{type === 'movie' ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="adventure">Adventure</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="documentary">Documentary</option>

                        </select>
                    </div>
                )
            }
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
            <div className='info'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                <span className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus, illum excepturi illo quae quaerat eum, amet, aliquam quis eveniet tenetur. Quas impedit magnam tenetur eos modi aspernatur aliquid expedita.
                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;