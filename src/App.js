import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
    };
  }

    async componentDidMount() {
      //let { data: people} = await axios.get('/api/people');
      fetch('api/people')
        .then(res => this.setState({people: res}));
      //this.setState( {people: people});
    }

    
    render() {
    return (
      <div className="App">
      <header className="App-header">
      Setting-up1
      baruishi 
      {console.log(this.state)}
      
      </header>
      </div>
      );
    }
    
  }
    export default App;
    