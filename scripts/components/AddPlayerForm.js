import React from 'react'

export default class AddingPlayerForm extends React.Component {
    render() {
        return (
        	<div>
        		<h2>Adding Players</h2>
        		<form>
        			<input type="text" />
        			<button type="submit">Add Player</button>
        		</form>
        	</div>
        );
    }
}
