import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Login from "../Login";
import Container from "react-bootstrap/Container";
import Register from "../Register";
import Users from "../Users";
import Hotels from "../Hotels/Hotels";
import AddHotel from "../AddHotel/AddHotel";
import ViewReviews from "../ViewReviews/ViewReviews";
import AddReview from "../AddReview/AddReview";
import './Bar.scss'
import Logout from "../App/Logout";

const Bar = () => {

    const { isConnected } = useSelector(state => state.app);

    return (
        <div className='bar'>
            <Container>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                        <ul className="navbar-nav">
                            {!isConnected ?
                                <div>
                                    <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                                    <li><NavLink className="nav-link" to="/register">Register</NavLink></li>
                                    <li><NavLink className="nav-link" to="/hotels">Hotels List</NavLink></li>
                                    <li><NavLink className="nav-link" to="/users">Users List</NavLink></li>
                                </div>
                                :
                                <div>
                                    <li><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
                                    <li><NavLink className="nav-link" to="/hotels">Hotels List</NavLink></li>
                                    <li><NavLink className="nav-link" to="/users">Users List</NavLink></li>
                                </div>
                            }
                        </ul>

                    </nav>
                    <Route path="/login" component={Login}/>
                    <Route path="/register/" component={Register} />
                    <Route path="/users" component={Users} />
                    <Route path="/hotels" component={Hotels} />
                    <Route path="/add_hotel" component={AddHotel} />
                    <Route path="/viewReviews/:hotelId" exact strict render={({match})=>(
                        <ViewReviews hotelId={match.params.hotelId} />)}/>
                    <Route path="/add_review/:hotelId" exact strict render={({match})=>(
                        <AddReview hotelId={match.params.hotelId} />)}/>
                        <Route path='/logout' component={Logout}/>

                </Router>
            </Container>
        </div>
    );
};

export default Bar;