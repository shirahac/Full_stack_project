import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import LoginAction from "./actions";
import './Login.scss'

const Login = (props) => {

    const { isConnected } =  useSelector(state => {console.log(state.app.isConnected); return state.app});
    const { username, password, errorMessage } = useSelector(state =>  state.login);
    const dispatch = useDispatch();

    useEffect( ()=>{
        if(isConnected === true) {
            props.history.push("/")
        }
    }, [isConnected]);

    const handleSubmit = () => {
        dispatch(LoginAction.loginAction(username, password))
    };

    return (
        <div>
            <div className="login_card">
                <h1 className='title'>Login</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={e => {dispatch(LoginAction.changeDetails(e.target.name, e.target.value))}}
                    />
                    <br />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={e => {dispatch(LoginAction.changeDetails(e.target.name, e.target.value))}}
                    />
                    <br />

                    <h5 style={{color: 'red'}}>{errorMessage}</h5>
                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    );
};

export default Login;
