import React from 'react'
import PlayersForm from './form'
import List from './list'

export default class Players extends React.Component {
        
	constructor() {
		super();	 
	   	
        this.handleNewPlayer = this.handleNewPlayer.bind(this);              
        this.savePlayers = this.savePlayers.bind(this);              

        if (localStorage.players) {
            const players = JSON.parse(localStorage.players);
            this.state = {players:players}
        } else {
            this.state = {players: []};
        }        
	}
	
    handleNewPlayer(player) {     
        this.setState((prevState) => {
            return {
                players: prevState.players.concat(player)
            }
        })        
    }

    savePlayers() {
        const playersJSON = JSON.stringify(this.state.players)
        localStorage.players = playersJSON;
    }

    render() {    	    	
        return (
        	<div>
        		<h2>Adding Players</h2>        	
                <PlayersForm whenPlayerAdded={this.handleNewPlayer} />
        		<h2>Players:</h2>
                <List players={this.state.players}/>        		
                <button onClick={this.savePlayers}>Save</button>
        	</div>
        );
    }    

}


