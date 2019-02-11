import React, { Component } from 'react';
import './LandingHero.css';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img6.jpg';

class LandingHero extends Component {
    state = {
        active_img: 1,
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            let x = this.state.active_img;
            let img = document.getElementById("img"+x);

            if (x === 6) {
                x = 1;
            } else {
                x++;
            }

            let next_img = document.getElementById("img"+x);
            img.classList.remove('active-img');
            next_img.classList.add('active-img');
            this.setState({
                active_img: x,
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="landing-area">
                <img src={img1} className="img-fluid img-slider active-img" id="img1"></img>
                <img src={img2} className="img-fluid img-slider" id="img2"></img>
                <img src={img3} className="img-fluid img-slider" id="img3"></img>
                <img src={img4} className="img-fluid img-slider" id="img4"></img>
                <img src={img5} className="img-fluid img-slider" id="img5"></img>
                <img src={img6} className="img-fluid img-slider" id="img6"></img>
            </div>
        );
    }
}

export default LandingHero;