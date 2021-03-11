import React from 'react';
import LeagueDetails from '../TeamDetails/TeamDetails';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./AllTeams.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AllLeagues = ({ team }) => {
    const { strAlternate, strTeam, strTeamBadge, strSport, idTeam } = team;
    const teamName = strTeam || strAlternate;

    return (
        <div className="card card-style m-3 p-3">
            <div className="team-info-style mb-2">
                <img src={strTeamBadge} className="card-img-top pb-3" alt="Image Not Found!" />
                <h2 className="text-center">{teamName}</h2>
                <p className="text-center">Sports Type: {strSport}</p>
            </div>
            <Link to={ `/team/${idTeam}` }>
                <button className="btn btn-primary">More <FontAwesomeIcon icon={faArrowRight}/></button>
            </Link>
        </div>
    );
};

export default AllLeagues;