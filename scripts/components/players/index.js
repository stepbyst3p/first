import React from 'react'
import PlayersForm from './form'
import List from './list'

export default class Players extends React.Component {
        
	constructor() {
		super();	 
	   	this.state = {players: []};
        this.handleNewPlayer = this.handleNewPlayer.bind(this);              
	}
	
    handleNewPlayer(player) {     
        this.setState((prevState) => {
            return {
                players: prevState.players.concat(player)
            }
        })        
    }

    render() {    	    	
        return (
        	<div>
        		<h2>Adding Players</h2>        	
                <PlayersForm whenPlayerAdded={this.handleNewPlayer} />
        		<h2>Players:</h2>
                <List players={this.state.players}/>        		
        	</div>
        );
    }    

}


