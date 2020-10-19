import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';



import './Features.css';

const rocketImg = {
    'Falcon 1' : 'falcon-1',
    'Falcon 9' : 'falcon-9',
    'Falcon Heavy' : 'falcon-heavy',
    'Starship' : 'starship'
};

const Features = ({
    name,
    height, 
    diameter, 
    mass, 
    payload_weights : payloadWeights, 
    description
    }) => (
                <section className="features">
                    <h2 className="features-title">
                        {name} <br/>Overview
                    </h2>
                    <div className="overview">

                        <table className="table">
                            <caption className="table-title">
                                Size
                            </caption>
                            <thead>
                                
                                <tr>
                                    <td className="table-column">Height</td>
                                    <td className="table-column">{height.meters} m / {height.feet} ft </td>
                                </tr>
                                <tr>
                                    <td className="table-column">Diameter</td>
                                    <td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
                                </tr>
                                <tr>
                                    <td className="table-column">Mass</td>
                                    <td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
                                </tr>

                                {payloadWeights.map((item) => (
                                    <tr key={item.id}>
                                        <td className="table-column">Payload to {item.id}</td>
                                        <td className="table-column"> {item.kg} kg / {item.lb} lb</td>
                                    </tr>
                                ))}
                            </thead>
                        </table>
                        <RellaxWrapper speed = {11}>
                            <img
                                    src={`img/${rocketImg[name]}.png`}
                                    alt="rocket"
                                    className="rocket"
                            />
                        </RellaxWrapper>

                        <article>
                            <h3 className="features-subtitle">DESCRIPTION</h3>
                            <p className="features-text"> {description}</p>
                        </article>
                    </div>
                </section>
        );

export default Features;