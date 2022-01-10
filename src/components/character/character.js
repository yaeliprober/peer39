import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import './character.css'
function mapStateToProps(state) {
    return (
        { character: state.episodeReducer.character }
    )
}


export default connect(mapStateToProps)(
    function Character(props) {
        const { character } = props
        // const [character, setcharacter] = useState({
        //     char_id: 1,
        //     name: "Walter White",
        //     birthday: "09-07-1958",
        //     occupation: [
        //         "High Schoocharacterl Chemistry Teacher",
        //         "Meth King Pin"
        //     ],
        //     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        //     status: "Deceased",
        //     appearance: [1, 2, 3, 4, 5],
        //     nickname: "Heisenberg",
        //     portrayed: "Bryan Cranston"
        // })


        // displays name of the character, birth, nickname, image, status and the list of occupations
        return (<>
            <Link to='/e pisode'>back to episode</Link>
            <h1>Character Details:</h1>
            {character && <div className="card-list" >
                <div className="card" style={{ backgroundColor: '#ffcccc' }}>
                    <img src={character[0].img} width="300" height="280" />
                    <h3>name: {character[0].name}</h3>
                    <p>birthday: {character[0].birthday}</p>
                    <p>status: {character[0].status}</p>
                    <p>nickname: {character[0].nickname}</p>
                    <h3>occupation:</h3> {character[0].occupation?.length && character[0].occupation.map((occupation, key) => {
                        return (
                            <div>
                                {occupation}
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>
        );
    })