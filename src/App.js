import React, {Component} from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './SearchBox.js'
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {return response.json()})
        .then(users=>{this.setState({robots:users})})
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
    
    if(this.state.robots.length===0) {
        return <h1 className='tc'>Loading</h1>
    }else {
       return (
    <div className='tc'>
    <h1>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <CardList robots={filteredRobots}/>
    </div>
    ) 
    }
     
 }
    
}
export default App;