import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getEpisodeById } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import './episodeList.css'



function mapStateToProps(state) {
    return ({ episodeList: state.episodeReducer.episodeList })

}
const mapDispatchToProps = (dispach) => ({
    // getEpisodesBySeasons: () => dispach(getEpisodesBySeasons()),
    getEpisodeById: (id) => dispach(getEpisodeById(id)),

})


export default connect(mapStateToProps, mapDispatchToProps)(
    function EpisodeList(props) {
        const { episodeList, getEpisodeById } = props;
        const navigate = useNavigate();
        const bgColors = ['#E75A7C', '#F2F5EA', '#D6DBD2', '#BBC7A4',' #bbff99','#ff8080','#ffc34d','#99ffff','#ff66ff','#8cd9b3','#80b3ff'];

        const getEpisode = (id) => {
            getEpisodeById(id)
            navigate('/episode');
        };
        useEffect(() => {
            // getEpisodesBySeasons();
            console.log(episodeList);
        }, [])

        return (
            <>
                <h1>Episodes List:</h1>
                <div className="card-list">

                    {episodeList && episodeList.map((currentEpisode, key) => {
                        return (
                            <>
                            <div key={currentEpisode.episode_id} className="card" style={{ backgroundColor: bgColors[Math.floor(Math.random() * (10 - 0) + 0)] }}>
                                <h3 onClick={() => getEpisode(currentEpisode.episode_id)}>{currentEpisode.title}</h3>
                                 <p>{currentEpisode.air_date}</p>
                            </div>
                            </>
                        )
                    })
                    }
                </div>
            </>
        )
    }
)