import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Features from './Components/Features/Features';
import Calendar from './Components/Calendar/Calendar'
import Details from './Components/Details/Details'
import Footer from './Components/Footer/Footer';
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
      <BrowserRouter>
        <Header rockets = {this.state.rockets} changeRocket = {this.changeRocket} />

        <Route exact path = '/'>
            {this.state.company && <Home company={this.state.company} />}
        </Route>
        
        <Route path = '/rocket'>
            <Main rocket = {this.state.rocket} />
            {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
        </Route>
        
        <Route path = '/calendar' component={Calendar} />
        <Route path = '/details/:id' component={Details} />
        
        {this.state.company && <Footer {...this.state.company} />}
      </BrowserRouter>
    );
  };
};

export default App;

///<Route exact path = '/'> exect - не дает возможности отображаться на других страницах