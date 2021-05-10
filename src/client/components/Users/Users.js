import React from 'react'
import { useSelector } from 'react-redux'
import "./Users.scss"
import UserCard from "./UserCard";


const Users = (props) => {

    const { users } = useSelector(state => state.app);

    const viewReviewsUser = (username) => {
        props.history.push("/viewReviews/" + username);
    };

    return (
        <div className="grid_container">
            {users !== undefined ? users.map((user, id) => <UserCard key={id} user={user} viewReviewsUser={()=>viewReviewsUser(user.username)}/>) : <h1></h1>}
        </div>
    );
};

export default Users;