import React, {Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import InputBox from '../components/InputBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state = {
	        nameInput:'',
	        emailInput:'',
	        nationInput:'',
	        titleInput:'',
	        linkedinInput:'',
	        githubInput:'',
	        searchfield:'',
	        robots: [],
	        
		}
	}

	componentDidMount() {
	  fetch('https://robofriendserver.herokuapp.com/', {
   			method: 'get',})
	  .then(response=> response.json())
	  .then(user=> this.setState({robots:user}))

	  	}      
            

	onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
  }
	

    nameInputChange =(event)=>{
    this.setState({nameInput: event.target.value})
	}

	emailInputChange =(event)=>{
    this.setState({emailInput: event.target.value})  
	}

	nationInputChange =(event)=>{
    this.setState({nationInput: event.target.value})  
	}

	titleInputChange =(event)=>{
    this.setState({titleInput: event.target.value})  
	}

	linkedinInputChange =(event)=>{
    this.setState({linkedinInput: event.target.value})  
	}

	githubInputChange =(event)=>{
    this.setState({githubInput: event.target.value})  
	}



   onButtonSubmit =()=>{
       
     fetch('https://robofriendserver.herokuapp.com/create',{
   			method: 'post',
   			headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            name:this.state.nameInput,
            email:this.state.emailInput,
            nation:this.state.nationInput,
            title:this.state.titleInput,
            linkedin:this.state.linkedinInput,
            github:this.state.githubInput
            })
        })
 }
   	

   	

	render() {
	    const {robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
		   <h1>Loading</h1>:

	    (
	    
	      <div className='tc'>
	      <h1 className='f1'>RoboFriends</h1>
	      <InputBox nameInputChange = {this.nameInputChange} 
	                emailInputChange = {this.emailInputChange}
	                titleInputChange= {this.titleInputChange}
	                nationInputChange= {this.nationInputChange}
	                linkedinInputChange= {this.linkedinInputChange} 
	                githubInputChange = {this.githubInputChange}
	                onButtonSubmit= {this.onButtonSubmit} />
	      <SearchBox searchChange = {this.onSearchChange}/>
	      <Scroll>
          <CardList robots = {filterRobots}/>
          </Scroll>
          </div>
		);
}
}

export default App;