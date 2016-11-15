import React from 'react'

export default class List extends React.Component {
        


	
    render() {              
        return (        	   
        	<ul id="players-list">    
    			{this.props.players.map(player => (
      			<li key={player.id}>{player.name}</li>
    			))}     			  		
        	</ul>        		        	
        );
    }    

}


