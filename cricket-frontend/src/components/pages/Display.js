import React from 'react'

function Display (props) {
    return(
        <div className = "playerdetails">
        
        <h1 >Player details : </h1>
                <table id="playerTable">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Nick Name</th>
                        <th>Gender</th>
                        <th>Date of Birth </th>
                        <th>Visual Classification</th>
                        <th>Nationality</th>
                        <th>Batting Style</th>
                        <th>Bowling Style </th>
                        <th>Player Role </th>
                        <th>Retired or Playing</th>
                        
                    </tr>
                    <tr>
                        <td>{props.playerfirstname}</td>
                        <td>{props.playerlastname}</td>
                        <td>{props.playernickname}</td>
                        <td>{props.playergender}</td>
                        <td>{props.playerdob}</td>
                        <td>{props.playervisuality}</td>
                        <td>{props.playernationality}</td>
                        <td> {props.playerbattingstyle}</td>
                        <td>{props.playerbowlingstyle}</td>
                        <td>{props.playerrole} </td>
                        <td>{props.stateofplayer}</td>
                    </tr>
                </table>
       </div>

    )
}

export default Display