import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Doctors from '../components/Doctors'
// import Reviews from '../components/Reviews'
// import Users from '../components/Users'
import { render } from '@testing-library/react';

class App extends Component {
  state = {
   doctorsList: [],
   reviewsList: [],
   usersList: [],
  };
  componentDidMount() {
    return (
      fetch('http://localhost:3000/doctors')
      .then(resp => resp.json())
      .then((json) => {
        debugger
        this.setState({
        doctorsList: []
      })
      }))
  };
  render() {
  return (
    <div className="App">
          < Doctors doctorsList={this.state.doctorsList}/>
          {/* < Reviews reviewsList={this.state.reviewsList}/>
          < Users usersList={this.state.usersList}/>   */}
    </div>
  );
}
}

export default App;
