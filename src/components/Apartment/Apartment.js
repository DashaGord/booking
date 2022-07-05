import React from 'react';
import Carousel from "nuka-carousel";


class Apartment extends React.Component {
    images;
    price;
    id;
    stars;
    comments;

    constructor(props) {
        super(props);
        this.images = props.images;
        this.price = props.price;
        this.id = props.id;
        this.stars = props.stars;
        this.comments = props.comments;
    }


    getStars(stars) {
        let content = []
        for (let i = 0; i < stars; i++) {
            content.push(<img src="./iconcs/star.png" alt=""/>);
        }
        let x = 5 - stars;
        for (let i = 0; i < x; i++) {
            content.push(<img src="./iconcs/star_border.png" alt=""/>);
        }
        return content
    }


    render() {

        return <div className="apartment-card">
            <div className="apartment-card_inside">
                <div className="apartment-img">
                    <Carousel>
                        {this.images.map(a => (
                            <img src={"./apartments/" + a + ".png"}/>
                        ))}
                    </Carousel>
                    <img className="apartment-arrow-left" src="./iconcs/arrow_left.svg" alt="arrow_left"/>
                    <img className="apartment-arrow-right" src="./iconcs/arrow_right.svg" alt="arrow_right"/>
                </div>
                <div className="apartment-card_info">
                    <div className="number text-style-700-14-17 text-color-dark">№ {this.id}</div>
                    <div className="price text-style-700-14 text-color-dark50">{this.price}₽ <span
                        className="text-style-400 text-color-dark50 none-transform">в сутки</span></div>
                    <div className="line-card"><img src="./iconcs/line.svg" alt=""/></div>
                    <div className="star">
                        <div className="rating-mini">
                            {
                                this.getStars(this.stars)
                            }
                        </div>
                    </div>
                    <div className="comments text-style-700-14 text-color-dark50">{this.comments} <span
                        className="text-style-400 text-color-dark50 none-transform">Отзывов</span></div>
                </div>
            </div>
        </div>;
    }
}

export default Apartment;