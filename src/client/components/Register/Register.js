import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { TextField, createMuiTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import RegisterActions from "./actions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import './Register.scss'

const Register = (props) => {

    const { name, username, password, location, failReason } = useSelector(state => state.register);
    const { file } = useSelector(state => state.profilePicture);
    const { locations, users } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const handleClick = () => {
        !username.length || username_exist(username) ?
            alert("Please pick a unique username!") :
            location_exist(location) ?
                addUserHelper() :
                alert("Please pick a valid Location!")
    };

    const location_exist = (location) => {
        return locations.filter(loc => loc.name === location).length
    };

    const username_exist = (username) => {
        return users !== undefined ? (users.filter(user => user.username === username).length) : false;
    };

    const addUserHelper = () => {
        dispatch(RegisterActions.addUserAction(name, username, password, file, location));
        dispatch(RegisterActions.setupInput());
        props.history.push("/login")
    };

    const theme = createMuiTheme({
        overrides: {
            MuiInputLabel: { 
                root: {
                    color: "grey",
                    width: '35%',
                    fontFamily: "Times New Roman",
                    "&$focused": {
                        color: "grey",
                        fontSize: '-1px',
                        fontFamily: "Times New Roman",
                        size: "0px"

                    }
                }
            }
        }
    });

    return (
        <form onSubmit={handleClick}>
            <div className='register_card'>
                <h1>Register</h1>
                <h2>Please fill in this form to create an account.</h2>

                <input
                    type="text"
                    placeholder="Enter your full name"
                    onChange={e => dispatch(RegisterActions.addNameAction(e.target.value))}/>
                <br/>

                <input
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) =>  dispatch(RegisterActions.addUsernameAction(e.target.value))}/>

                {username_exist(username) ?
                    <p style={{color: "red"}}>username is already taken</p> : <br/>}

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    onChange={e => dispatch(RegisterActions.addPasswordAction(e.target.value))}/>
                <p>{failReason!==undefined? failReason: ""}</p>
                <br/>

                <label><b>Location</b></label>
                {<div className='autocomplete'>
                    <Autocomplete
                        id="combo-box"
                        options={locations}
                        getOptionLabel={option => option.name}
                        onChange={e => dispatch(RegisterActions.addLocationAction(e.target.textContent))}
                        style={{width: 400}}
                        renderInput={params => (
                            <ThemeProvider theme={theme}>
                                <TextField {...params}
                                           InputLabelProps={{shrink: false}}
                                           label="" variant="outlined" fullWidth/>
                            </ThemeProvider>
                        )}
                    />
                </div>}
                <br/>

                <label><b>Profile Picture</b></label>
                <ProfilePicture/>
                <button type="submit"> Register</button>
                <div>
                    <p>Already have an account? <Link to="/login"> Sign in</Link></p>
                </div>
            </div>
        </form>
    )
};

export default Register;