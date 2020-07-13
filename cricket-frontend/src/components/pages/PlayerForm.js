import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import '../styles/PlayerForm.css'


class PlayerForm extends React.Component{

    constructor(){
        super()
        this.state = {
            playerfirstname : "",
            playerlastname : "",
            playernickname : "",
            playergender : "Female",
            playerdob : "",
            playernationality : "",
            playerbattingstyle : "Stance",
            playerbowlingstyle : "Spin bowler",
            playerrole : "",
            stateofplayer : "Retired",
            playervisuality : "B1"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        ReactDOM.render(<Display
            playerfirstname = {this.state.playerfirstname}
            playerlastname = {this.state.playerlastname}
            playernickname = {this.state.playernickname}
            playergender = {this.state.playergender}
            playervisuality = {this.state.playervisuality}
            playerdob = {this.state.playerdob}
            playerbattingstyle = {this.state.playerbattingstyle}
            playerbowlingstyle = {this.state.playerbowlingstyle}
            stateofplayer = {this.state.stateofplayer}
            playerrole = {this.state.playerrole}
            playernationality = {this.state.playernationality}
            />,
            document.getElementById('root'))
    }

    render(){
    return(
        <div className = 'playerform'>
            <h3>The following details must be filled to add a player</h3>
            <form className='alignLabel'>
            <label>Enter First Name : </label>
                <input type = "text" className='i' placeholder ="player first name" name="playerfirstname" onChange={this.handleChange}/><br></br><br></br>
                <label>Enter last Name : </label>
                <input type = "text" className='i' placeholder ="player last name" name="playerlastname" onChange={this.handleChange}/><br></br><br></br>
                <label>Enter Nick Name : </label>
                <input type = "text" className='i' placeholder ="player nick name" name="playernickname" onChange={this.handleChange}/><br></br><br></br>
                <label>Visual Classification : </label>
                
                        <select name="playervisuality" className='i' value ={this.state.playervisuality} onChange={this.handleChange}>
                        <option value = "B1">B1</option>
                        <option value = "B2">B2</option>
                        <option value = "B3">B3</option>
                        </select>
                        <br></br><br></br>
                        <label>Gender : </label>
            
                    <select name="playergender" className='i' value={this.state.playergender} onChange={this.handleChange}>
                    <option value = "Female">Female</option>
                    <option value = "Male">Male</option>
                    </select>
                    <br></br><br></br>
                    <label>Date of Birth : </label>
                <input type = "text" className='i' placeholder = "DOB" name="playerdob" onChange={this.handleChange}/><br></br><br></br>
                <label>Nationality : </label>
                <input type = "text" className='i' placeholder ="player nationality" name="playernationality" onChange={this.handleChange}/><br></br><br></br>
                <label>Batting Style : </label>
                
                    <select name="playerbattingstyle"  className='i' value={this.state.playerbattingstyle} onChange={this.handleChange}>
                        <option value = "Stance">Stance</option>
                        <option value = "Uppercut">Upper Cut</option>
                        <option value = "Backlift">BackLift</option>
                        <option value = "Leave">Leave</option>
                    </select>
                    <br></br><br></br>
                    <label>Bowling Style : </label>
                
                    <select name="playerbowlingstyle" className='i' value ={this.state.playerbowlingstyle} onChange={this.handleChange}>
                        <option value = "Spin bowler">Spin Bowler</option>
                        <option value = "Swing bowler">Swing Blower</option>
                        <option value = "Mixed bowler">Mixed Bowler</option>
                    </select>
                    <br></br><br></br>
                    <label>Player Role : </label>
            <input type = "text" className='i' placeholder ="player role" name="playerrole" onChange={this.handleChange}/><br></br><br></br>
            <label>Retired or Playing : </label>
            
                    <select name="stateofplayer" className='i' value={this.state.stateofplayer} onChange={this.handleChange}>
                    <option value = "Retired">Retired</option>
                    <option value = "Playing">Playing</option>
                    </select>
                    <br></br><br></br>
            
            <button onClick ={this.handleSubmit}>Save</button>
            </form>
        </div>
    )
    }
}

export default PlayerForm;