import React from 'react'


export default class PlayersForm extends React.Component {      

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);              
        this.state = {name: ''};        
    }

    handleSubmit(e) {           
        e.preventDefault();     

        if (this.state.name.length == 0) {
            return
        }

        const newPlayer = {
            name: this.state.name,   
            id: Date.now()
        }

        this.setState({ name: '' })         

        this.props.whenPlayerAdded(newPlayer)        
    }

    handleInputChange(e) {      
        this.setState({ name: e.target.value })         
    }

    render() {              
        return (                        
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInputChange} type="text" value={this.state.name} />
                <button type="submit">Add Player</button>
            </form>                                       
        );
    }       
        
}


