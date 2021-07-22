import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';

import {setSearchfield} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchfield
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      humans: []
    }
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => {
        return response.json()
      })
      .then( users => {
        this.setState({ humans: users })
      })
    // async function fetchUsers() {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const data = await response.json()
    //   this.setState({humans: data})
    // }
  }

  render() {
    const filtredHumans = this.state.humans.filter(human => {
      return human.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
    })
    return !this.state.humans.length ? 
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Humans</h1>
          <SearchBox searchChange={this.props.onSearchChange}/>
          <Scroll>
            <CardList humans={filtredHumans}/>
          </Scroll>
        </div>    
      );  
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);