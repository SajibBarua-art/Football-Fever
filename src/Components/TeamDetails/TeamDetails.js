import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import "./TeamDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFlag, faFutbol, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const LeagueDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + id)
            .then(res => res.json())
            .then(data => setTeam(data));
    }, [id])

    const teamDetails = team.teams || [];
    const { 
        strTeamBadge, strDescriptionEN, strTeam, strGender,
        intFormedYear, strCountry, strSport, strFacebook,
        strTwitter, strYoutube } = teamDetails[0] || {};

    // To change gender
    let genderImage = "";
    let genderLogo;
    if (strGender === "Female") {
        genderLogo = faVenus;
        genderImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.footballpakistan.com%2Fwp-content%2Fuploads%2F2017%2F12%2FKarachi-United-women-team.jpg&f=1&nofb=1";
    } else {
        genderLogo = faMars;
        genderImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aw-3zXfV5ziuchLUEXYHRQHaEo%26pid%3DApi&f=1";
    }

    // To handle empty string of social media URL
    const twitterUrl = "https://" + (strTwitter || "www.twitter.com");
    const facebookUrl = "https://" + (strFacebook || "www.facebook.com");
    const youtubeUrl = "https://" + (strYoutube || "www.youtube.com");

    return (
        <div>
            <div className="background-image">
                <img src={strTeamBadge} className="logo" alt="none" />
            </div>
            <div className="container">
                <div className="row details">
                    <div className="col-md-6 col-sm-12 p-5">
                        <h2> {strTeam}</h2>
                        <h6> <FontAwesomeIcon icon={faFlag} /> Founded: {intFormedYear}</h6>
                        <h6> <FontAwesomeIcon icon={faBuilding} /> Country: {strCountry}</h6>
                        <h6> <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h6>
                        <h6> <FontAwesomeIcon icon={genderLogo} /> Gender: {strGender}</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-md-6 col-sm-12">
                        <img id="genderImage" src={genderImage} alt="No gender picture!" />
                    </div>
                </div>
                <p id="description">{strDescriptionEN}</p>
            </div>
            <div className="d-flex justify-content-center social-icon">
                <a id="twitter-icon" href={twitterUrl} target="_blank"> <FontAwesomeIcon size="4x" icon={faTwitter} /> </a>
                <a href={facebookUrl} target="_blank"><FontAwesomeIcon size="4x" icon={faFacebook} /></a>
                <a id="youtube-icon" href={youtubeUrl} target="_blank"> <FontAwesomeIcon size="4x" icon={faYoutube} /> </a>
            </div>
        </div>
    );
};

export default LeagueDetails;