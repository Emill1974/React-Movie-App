import React from 'react'
import "./movie.css"
export default function Movie(props) {


    const API_IMG = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className='card'>
            <div className='poster'>
                <img src={API_IMG + props.poster_path
                } />

            </div>

            <div className='info'>
                <p className='title'>{props.title}</p>
                <p className='vote'>{props.vote_average
                }</p>
            </div>

            <div className='overview'>
                <h2 className='title-overview'>
                    Overview
                </h2>
                <h3 className='overview-info'>{props.overview}

                </h3>
            </div>

        </div>
    )
}
