import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Main from '../Main/Main';

import useLaunches from '../Hooks/useLaunches';
import './Details.css';



const Details = (props) => {
  
    const [launch, setLaunch] = useState(null);
    const { getLaunche } = useLaunches();

    useEffect ( () => {
        setLaunch(getLaunche(props.match.params.id));
    }, [getLaunche])

    console.log(launch);
    const history = useHistory();

    if (!launch) return null;

    return(
        <>
            <Main name={launch.name} /> 
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name} />
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch.details}</p>
                        </div>
                    </div>

                </div>
                    <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
)};

export default Details;