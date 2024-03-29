import React from 'react';
import Carousel from "nuka-carousel";


const Apartment = (props) => {


    function getStars(stars) {
        let content = []
        for (let i = 0; i < stars; i++) {
            content.push(<img src="./iconcs/star.png" alt=""/>);
        }
        let x = 5 - stars;
        for (let i = 0; i < x; i++) {
            content.push(<img src="./iconcs/star_border.png" alt=""/>);
        }
        return content;
    }


    return (<div className="apartment-card">
            <div className="apartment-card_inside">
                <div className="apartment-img">
                    <Carousel>
                        {props.appModel.images.map((a, i) => (
                            <img key={i} src={"./apartments/" + a + ".png"}/>
                        ))}
                    </Carousel>
                    <img className="apartment-arrow-left" src="./iconcs/arrow_left.svg" alt="arrow_left"/>
                    <img className="apartment-arrow-right" src="./iconcs/arrow_right.svg" alt="arrow_right"/>
                </div>
                <div className="apartment-card_info">
                    <div className="number text-style-700-14-17 text-color-dark">№ {props.appModel.id}</div>
                    <div className="price text-style-700-14 text-color-dark50">{props.appModel.avg_price}₽ <span
                        className="text-style-400 text-color-dark50 none-transform">в сутки</span></div>
                    <div className="line-card"><img src="./iconcs/line.svg" alt=""/></div>
                    <div className="star">
                        <div className="rating-mini">
                            {
                                getStars(props.appModel.stars)
                            }
                        </div>
                    </div>
                    <div className="comments text-style-700-14 text-color-dark50">{props.appModel.comments} <span
                        className="text-style-400 text-color-dark50 none-transform">Отзывов</span></div>
                </div>
            </div>
        </div>
    )

}

export {Apartment};

