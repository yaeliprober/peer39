import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCharacterByName } from '../../redux/actions';
import { useNavigate, Link } from 'react-router-dom';
import './episode.css'

function mapStateToProps(state) {
    return (
        { episode: state.episodeReducer.episode }
    )
}
const mapDispatchToProps = (dispach) => ({
    getCharacterByName: (name) => dispach(getCharacterByName(name)),

})


export default connect(mapStateToProps, mapDispatchToProps)(
    function Episode(props) {
        const { episode, getCharacterByName } = props;
        const navigate = useNavigate();

        const getcharacter = (name) => {
            getCharacterByName(name)
            navigate('/character')
        };

        // Episode page: displays title, air date and the list of characters; each character links with character page; there's also link to all episodes on the page;
        return (
            <>

                <Link to='/'>back to episodeList</Link>
                <h1>Episodes Details:</h1>
                {episode && <div className="card-list" >
                    <div className="card" style={{backgroundColor:'#d9ffb3'}}>
                        <h3>title:  {episode[0].title}</h3>
                        <p>air_date:  {episode[0].air_date}</p>
                        <h3>occupation:</h3> {episode[0].characters?.length && episode[0].characters.map((character, key) => {
                            return (
                                <div className="chara" onClick={() => getcharacter(character)}>
                                    {character}
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </>
        )
    }
)


