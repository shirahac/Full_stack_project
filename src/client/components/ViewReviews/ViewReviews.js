import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {withRouter} from 'react-router-dom';
import ReactStars from 'react-stars';
import Review from "./Review"
import "./ViewReviews.scss"
import ViewReviewsActions from "./actions";
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, EmailIcon, TwitterIcon, WhatsappIcon } from "react-share";


const ViewReviews = (props) => {

    const { hotels, isConnected } = useSelector(state => state.app);
    const { hotel, filterFlag, displayReviews, threshold, fromNewest, fromOldest, byTopic, flagChange} = useSelector(state => state.viewReviews);
    const dispatch = useDispatch();

    useEffect( ()=> {
        let res = hotels.filter(hotel => hotel.id === props.hotelId)[0];
        if(res){
            dispatch(ViewReviewsActions.saveHotelAction(res));
            dispatch(ViewReviewsActions.loadReviewsAction(res))
        }
    }, []);

    const handleFilterByDate = (event) => {
        dispatch(ViewReviewsActions.setFilterByDateAction(event.target.value))
    };

    const handleClick = () => {
        if(isConnected)
            props.history.push("/add_review/" + hotel.id);
        else
            alert("Please login to add a review")
    };

    let dateSelection = null;
    let topicSelection  = null;
    let sortByTopic =  null;
    if(byTopic)
        sortByTopic = (
            <div className="sort-by-topic">
                <select onChange={(event) => dispatch(ViewReviewsActions.setSortTopicAction(event.target.value))}>
                    <option value="None"> None </option>
                    <option value="staff">Staff Kindness</option>
                    <option value="comfort">Comfort</option>
                    <option value="cleanliness">Cleanliness</option>
                    <option value="freeWiFi">Wifi Reception</option>
                    <option value="facilities">Facilities</option>
                    <option value="valueForMoney">Value For Money</option>
                    <option value="location">Attractiveness of the location</option>
                </select>
            </div>
        );

    if(filterFlag){
        dateSelection = ( <div style={{display: 'flex', fontSize:'24px',
            fontFamily: "Times New Roman"}}>
            <form >
                <p className="date-filter-label">filter by creation date:</p>
                <select style={{color: 'black'}}
                        onChange={(event) => dispatch(ViewReviewsActions.setFilterByDateAction(event.target.value))}>
                    <option value="None"> None </option>
                    <option value="since last week">since last week</option>
                    <option value="since last month">since last month</option>
                    <option value="since last year">since last year</option>
                </select>
            </form>
        </div>);
        topicSelection = (<div style={{display: 'flex', fontSize:'24px',
            fontFamily: "Times New Roman"}}>
            <p style={{marginLeft: '10px'}}>Show results with </p>
            <ReactStars
                value={threshold}
                onChange={(event) => dispatch(ViewReviewsActions.changeThresholdAction(event.target.value))}
                count={5}
                size={20}
                half={false}
                color2={"yellow"} />
            <form >
                <p style={{marginRight: '10px'}}> score and above for topic: </p>
                <select style={{color: 'black', fontFamily: "Times New Roman"}}
                        onChange={(event) =>  dispatch(ViewReviewsActions.setFilterByTopicAction(event.target.value))}>
                    <option value="None"> None </option>
                    <option value="staff">Staff Kindness</option>
                    <option value="comfort">Comfort</option>
                    <option value="cleanliness">Cleanliness</option>
                    <option value="freeWiFi">Wifi Reception</option>
                    <option value="facilities">Facilities</option>
                    <option value="valueForMoney">Value For Money</option>
                    <option value="location">Attractiveness of the location</option>
                </select>

            </form>
        </div>  )

    }

    if(!hotel)
        return (<h1></h1>)
    else
        return (
            <div className="review_page">

                <div>
                    <div>
                        <h1>{hotel.name}</h1>
                        <h3>{hotel.location}</h3>
                        <div className="avg-score-warpper">
                            <ReactStars className="stars"
                                        value={hotel.avgScore}
                                        count={5}
                                        size={50}
                                        half={true}
                                        edit={false}
                                        color2={'#ffd700'} />
                        </div>
                        <div className="button-wrapper">
                            <button
                                onClick={() => handleClick()}>
                                Add Review
                            </button>
                        </div>
                    </div>
                    <div className="order_by">
                        <form>
                            <div>
                                <input className='checkbox-round'
                                       name="from newest"
                                       type="checkbox"
                                       checked={fromNewest}
                                       onChange={() =>
                                           dispatch(ViewReviewsActions.sortFromNewestAction())} />
                                <br/>
                                <label className="sort-label"> from newest</label>
                            </div>
                        </form>
                        <form>
                            <div>
                                <input className='checkbox-round'
                                       name="from oldest"
                                       type="checkbox"
                                       checked={fromOldest}
                                       onChange={() =>
                                           dispatch(ViewReviewsActions.sortFromOldestAction())} />
                                <br/>
                                <label className="sort-label"> from oldest </label>
                            </div>
                        </form>
                        <form>
                            <div>
                                <input className='checkbox-round'
                                       name="by topic"
                                       type="checkbox"
                                       checked={byTopic}
                                       onChange={() =>
                                           dispatch(ViewReviewsActions.sortByTopicAction())} />
                                <br/>
                                <label className="sort-label"> by topic </label>
                            </div>
                        </form>
                    </div>
                    <br/>
                    {sortByTopic}
                </div>
                {displayReviews !== undefined?
                    <ul>
                        {displayReviews.map((h, id) =>
                            <li key={id}>
                                <Review review={h}/>
                            </li>
                        )}
                    </ul>
                    : <li> </li>
                }
                <div className="share_icons">
                <FacebookShareButton url={"https://she-codes.org/he/home-heb/"}
                                     quote={"Check out this hotel!"} className="share">
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <EmailShareButton url={"https://she-codes.org/he/home-heb/"}
                                  quote={"Check out this hotel!"} className="share">
                    <EmailIcon size={32} round={true}/>
                </EmailShareButton>
                <WhatsappShareButton url={"https://she-codes.org/he/home-heb/"}
                                     title={"Check out this hotel!"} separator={"   "} className="share">
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
                <TwitterShareButton url={"https://she-codes.org/he/home-heb/"}
                                    quote={"Check out this hotel!"} className="share">
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                </div>
            </div>

        )
};


export default withRouter(ViewReviews);