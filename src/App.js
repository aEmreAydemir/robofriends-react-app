import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox.js'


class App extends React.Component {
    constructor() {
        super()
        this.state= {
            robots: robots,
            searchfield: ''
        }
    }

    /*
    create the function as given below instead of onSearchChange =(event) {}. This way
    we can reach the state inside constructor of App class
     */
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
 render() {

    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
    <div className='tc'>
    <h1>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <CardList robots={filteredRobots}/>
    </div>
    ) 
 }
    
}
export default App;