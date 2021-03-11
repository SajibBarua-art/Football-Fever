import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AllTeams from '../AllTeams/AllTeams';
import "./Home.css";
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    const teamsInfo = teams.teams || [];
    return (
        <div>
            <h1 className="text-center title-style">Football Fever</h1>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    teamsInfo.map(team => <AllTeams
                        team={team}
                        key={team.idTeam}
                    ></AllTeams>)
                }
            </div>
        </div>
    );
};

export default Home;