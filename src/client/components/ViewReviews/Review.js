import React from 'react';
import ReactStars from 'react-stars';
import "./ViewReviews.scss"


const  Review = (props) => {
    const img = {
        display: 'inline-block',
        width: '180px',
        height: '160px',
        border: '1px solid black'
    };

    return <div className="review">
        <p className="user">added by User: {props.review.username}</p>
        <p className="date">Creation Date: {(props.review.creationDate).substring(0, 10)}</p>
        <div className="grid">
            <div className="rating">
                <p className='topic-label'>Staff Kindness</p>
                <ReactStars
                    value={props.review.staff}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>
            <div className="rating">
                <p className="topic-label">Comfort</p>
                <ReactStars
                    value={props.review.comfort}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>
            <div className="rating">
                <p className="topic-label">Cleanliness</p>
                <ReactStars
                    value={props.review.cleanliness}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>
            <div className="rating">
                <p className="topic-label">Wifi Reception</p>
                <ReactStars
                    value={props.review.freeWiFi}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>

            <div className="rating">
                <p className="topic-label">Facilities</p>
                <ReactStars
                    value={props.review.facilities}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>

            <div className="rating">
                <p className="topic-label">Value For Money</p>
                <ReactStars
                    value={props.review.valueForMoney}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>

            <div className="rating">
                <p className="topic-label">Attractiveness of the location</p>
                <ReactStars
                    value={props.review.location}
                    count={5}
                    size={30}
                    half={false}
                    edit={false}
                    color2={'#ffd700'} />
            </div>
        </div>
        {props.review.pictures.map((pic) => <img src={pic} style={img}/>)}
    </div>
};

export default Review;