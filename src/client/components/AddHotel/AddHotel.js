import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import addHotelActions from "./actions";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./AddHotel.scss"
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const addHotel = (props) => {

    const { name, location, link } = useSelector(state => state.addHotel);
    const picture = useSelector(state => state.profilePicture.file);
    const locations = useSelector(state => state.app.locations);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addHotelActions.addHotelAction(name, location, link, picture));
        props.history.push("/hotels");
    };

    const theme = createMuiTheme({
        overrides: {
            MuiInputLabel: {
                root: {
                    color: "grey",
                    width: '35%',
                    fontFamily: "Times New Roman",
                    "&$focused": { // increase the specificity for the pseudo class
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
        <div className="add_hotel_page">
            <form onSubmit={handleClick}>
                <div>
                    <h1>Add Hotel</h1>
                    <p style={{fontSize:'26px'}}>Please fill in this form to add a new hotel</p>
                    <input  className='field' id="name" type="text" placeholder="Enter Hotel Name"
                            onChange = {(e) => dispatch(addHotelActions.addNameAction(e.target.value))}/>

                    <input  className='field' id="link" type="text" placeholder="Enter Hotel Link"
                            onChange = {(e) => dispatch(addHotelActions.addLinkAction(e.target.value))}/>
                    <br/>
                    <label className = "field-label"><b>Location</b></label>
                    <Autocomplete
                        id="combo-box-demo"
                        options={locations}
                        getOptionLabel={option => option.name}
                        onChange={e => dispatch(addHotelActions.addLocationAction(e.target.textContent))}
                        style={{ width: 400 }}
                        renderInput={params => (
                            <ThemeProvider theme={theme}>
                                <TextField {...params} label="Enter Location" variant="outlined" fullWidth />
                            </ThemeProvider>
                        )}
                    />
                    <br/>
                    <label><b>Hotel Picture</b></label>
                    <ProfilePicture/>
                    <button type="submit">
                        Submit new hotel
                    </button>
                </div>
            </form>
        </div>
    );
};


export default addHotel;