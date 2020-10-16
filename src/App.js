import React from 'react';

import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

  fetchData = new FetchData();
//информация о обьекте 
  state = {
    rocket : 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  };
//

  componentDidMount() {
      this.updatesRocket();
      this.updateCompany();
  };

  updatesRocket () {
    this.fetchData.getRocket()
      .then (data => {
        this.setState({rockets: data.map(item => item.name)
        })
        return data;
      })
      .then( (data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => {
        this.setState({rocketFeatures});
    });
    
  };

  changeRocket = (rocket) => {
    this.setState({
      rocket
    }, this.updatesRocket )
  };

  updateCompany = () => {
    this.fetchData.getCompany()
    .then(company => this.setState({company}))

  };

  render () {
    
    return (
      <>
      <Header rockets = {this.state.rockets} changeRocket = {this.changeRocket} />
      <Main rocket = {this.state.rocket} />
      {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
      {this.state.company && <Footer {...this.state.company.links} />}
      </>
    );
  };
};

export default App;
