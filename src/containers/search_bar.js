import React,{Component} from 'react';
import {connect} from 'react-redux';
 


import {bindActionCreators} from 'redux';
import {fetchWeather } from '../actions/index';


 class SearhBar extends Component{

    constructor(props){
        super(props);

        this.state ={term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        //'this ' which is an instance of searchbar, has a function called
        //'onInputChange()', 'bind ' that function to 'this'.. which is
        //searcbar and then replace oninputchange with new .
 

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

onInputChange(event)
{
        console.log(event.target.value);
        this.setState  ({term: event.target.value}); //setting onChange Value //gives an error.. cuz this is not actual component
        
}

onFormSubmit(event)
{
    event.preventDefault(); //stops the default behaviour 

    //Fetch Weather data here.

    this.props.fetchWeather(this.state.term);
    this.setState({term:''});

}
     render(){

        return(
            <form onSubmit={this.onFormSubmit}  className = "input-group">

            <input
                placeholder ="Get a five day weather forecast in your favourite cities"
                className ="form-control"
                value ={this.state.term}
                onChange  ={this.onInputChange}
            />
            
            <span className ="input-group-btn">
                <button type ="submit" className = "btn btn-secondary">Submit</button>
            </span>
            </form>
        );
         
     }
}

//hook up action creator 'fetchweather' to the 'SearchBAr ' container
function mapDispatchToProps(dispatch){
    return bindActionCreators  ({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps )(SearhBar);