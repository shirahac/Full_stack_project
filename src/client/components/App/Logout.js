import React, {useEffect} from "react"
import AppActions from "./actions";
import {useDispatch} from "react-redux";

const Logout = (props) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(AppActions.logout());
        props.history.push('/login')
    },[]);

    return (
        <div></div>
    )
};

export default Logout;