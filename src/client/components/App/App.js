import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import AppActions from "./actions";
import Bar from "../Bar";
import "./App.scss"

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(AppActions.loadLocations());
            dispatch(AppActions.loadUsers());
            dispatch(AppActions.loadHotels());
        }, []);

    return (
        <div>
            <Bar/>
        </div>
    );
};

export default App;