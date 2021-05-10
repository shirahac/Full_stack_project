import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactStars from 'react-stars'
import AddReviewActions from './actions'
import { withRouter } from 'react-router-dom'
import Pictures from '../Pictures';
import "./addReview.scss"

const AddReview = (props) => {

    const { staff, comfort, cleanliness, freeWiFi, facilities, valueForMoney, location, hotel} = useSelector(state => state.addReview);
    const { user } = useSelector(state => state.app);
    const { pictures } = useSelector(state => state.pictures);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(AddReviewActions.loadHotelAction(props.hotelId));
    }, []);

    const handleClick = () => {
        let ratings = {
            staff:          staff,
            comfort:        comfort,
            cleanliness:    cleanliness,
            freeWiFi:       freeWiFi,
            facilities:     facilities,
            valueForMoney:  valueForMoney,
            location:       location
        };
        dispatch(AddReviewActions.submitReviewAction(user,
            props.hotelId,
            ratings,
            pictures));
        props.history.push("/hotels");
    };

    const staffRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("staff", rating))
    };

    const comfortRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("comfort", rating))
    };

    const cleanlinessRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("cleanliness", rating))
    };

    const freeWiFiRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("freeWiFi", rating))
    };

    const facilitiesRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("facilities", rating))
    };

    const valueForMoneyRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("valueForMoney", rating))
    };

    const locationRating = (rating) => {
        dispatch(AddReviewActions.changeRatingAction("location", rating))
    };

    return (
        <div className="add-page">
            <h1>Please rate {hotel!==undefined? hotel.name: ""} on the following:</h1>
            <p className='topic-label'>Staff Kindness</p>
            <ReactStars
                value={staff.valueOf()}
                count={5}
                onChange={staffRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <p className='topic-label'>Comfort</p>
            <ReactStars
                value={comfort.valueOf()}
                count={5}
                onChange={comfortRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <p className='topic-label'>Cleanliness</p>
            <ReactStars
                value={cleanliness.valueOf()}
                count={5}
                onChange={cleanlinessRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <p className='topic-label'>Wifi Reception</p>
            <ReactStars
                value={freeWiFi.valueOf()}
                count={5}
                onChange={freeWiFiRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <p className='topic-label'>Facilities</p>
            <ReactStars
                value={facilities.valueOf()}
                count={5}
                onChange={facilitiesRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <p className='topic-label'>Value For Money</p>
            <ReactStars
                value={valueForMoney.valueOf()}
                count={5}
                onChange={valueForMoneyRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <p className='topic-label'>Attractiveness of the location</p>
            <ReactStars
                value={location.valueOf()}
                count={5}
                onChange={locationRating}
                size={40}
                half={false}
                color2={'#ffd700'} />

            <Pictures/>

            <button className='myButton'
                    onClick={handleClick}>
                Submit
            </button>
        </div>
    )
};

export default withRouter(AddReview);
