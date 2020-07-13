import React, { Component } from 'react'
import Axios from "axios";
import ReactDOM from 'react-dom'
import PlayerForm from './PlayerForm'
import { Container } from 'reactstrap'


function handleAddPlayer(){
    ReactDOM.render(<PlayerForm/>,document.getElementById('root'))
  }
  
class Players extends Component {
    state = {

        players: []
      };
    
      async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/players');
        const body = await response.json();
        this.setState({ players: body});
      }
    
    render() {
        const {players} = this.state;

    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }
      return (
        <div>
          <center>
            {/* <h2
              style={{
                color: "#B1095D",
                fontWeight: 600,
              }}
            >
              Player Data
            </h2> */}
            <br />
            <form class="form-inline" style={{alignItems: 'center', justifyContent: 'center'}}>
                <input class="form-control mr-sm-2" type="search"  style={{width: 350}} placeholder="Search" aria-label="Search" />
                <button class="btn my-2 my-sm-0" type="submit" style={{border: 0, padding: 10, color: '#ffffff', backgroundColor: '#B1095D', borderRadius: 5}}>Search</button>
                <button onClick={handleAddPlayer} class="btn my-2 my-sm-0 ml-5" type="submit" style={{border: 0, padding: 10, color: '#ffffff', backgroundColor: '#B1095D', borderRadius: 5}}>Add Player</button>
            </form>
            
            <table
              width="1050"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 10px 20px #555",
                borderRadius: "20px",
                marginTop: 20
              }}
            >
              <tr
                style={{
                  backgroundColor: "#B1095D",
                }}
              >
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p className="my-auto">Player Id</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>First Name</p>
                </td>
  
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Last Name</p>
                </td>
  
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Date of Birth</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Gender</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Category</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Nationality</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Player Role</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Batting Style</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Bowling Style</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p>Retired Or Playing</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p className="my-auto">Update</p>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    color: "white",
                    padding: "15px",
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                  }}
                >
                  <p className="my-auto">Delete</p>
                </td>
              </tr>
              {players.map((item) => {
                return (
                  <tr>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p key={item.player_id}>{item.player_id}</p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>{item.p_firstname}</p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_lastname}
                          
                      </p>
                    </td>
  
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_dob}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_gender}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_category}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_nationality}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.player_role}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_batting_style}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.p_bowling_style}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                      <p>
                        {item.retired_or_playing}
                          
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >
                    <button style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',padding: 10, color: '#ffffff', backgroundColor: '#282c34', borderRadius: 5, border:0}}>Edit
                    </button>
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        color: "#042331",
                        padding: "15px",
                        textAlign: "left",
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                      }}
                    >                       
                    <button style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, color: '#ffffff', backgroundColor: '#282c34', borderRadius: 5, border: 0}}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <br />
          </center>
        </div>
      );
    }
// function Players(props) {
//         return (
//             <div className = "playerdetails">
        
//             <h1 >Player details : </h1>
//                     <table id="playerTable">
//                         <tr>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Nick Name</th>
//                             <th>Gender</th>
//                             <th>Date of Birth </th>
//                             <th>Visual Classification</th>
//                             <th>Nationality</th>
//                             <th>Batting Style</th>
//                             <th>Bowling Style </th>
//                             <th>Player Role </th>
//                             <th>Retired or Playing</th>
                            
//                         </tr>
//                         <tr>
//                             <td>{props.playerfirstname}</td>
//                             <td>{props.playerlastname}</td>
//                             <td>{props.playernickname}</td>
//                             <td>{props.playergender}</td>
//                             <td>{props.playerdob}</td>
//                             <td>{props.playervisuality}</td>
//                             <td>{props.playernationality}</td>
//                             <td> {props.playerbattingstyle}</td>
//                             <td>{props.playerbowlingstyle}</td>
//                             <td>{props.playerrole} </td>
//                             <td>{props.stateofplayer}</td>
//                         </tr>
//                     </table>
//            </div>
//         )
    }

export default Players