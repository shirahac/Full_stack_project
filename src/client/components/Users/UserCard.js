import React from "react";
import "./Users.scss"
import {Link} from "react-router-dom";
const UserCard = (props) => {

    return (
        <div className="card">
            <img className="card_avatar" src={props.user.picture} alt="User avatar"/>
                <div className="card_info">
                    <div className="card__name"> {props.user.name} </div>
                    <div className="card_location"> {props.user.location} </div>
                    {/*<Link className='reviews_link' to={"/viewReviews/" + props.user.username}>view {props.user.name} reviews</Link>*/}
                </div>
        </div>
    )
};

export default UserCard;


