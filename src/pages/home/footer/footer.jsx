import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="footer__content">
                            <div className="content__block text">
                                <p className="block__title">Exclusive</p>
                                <p className="block__text">Subscribe</p>
                                <p className="block__text">Get 10% off your first order</p>
                                <div className="block__text">Get 10% off your first order</div>
                            </div>
                            <div className="content__block text">
                                <p className="block__title">Support</p>
                                <p className="block__text">
                                    111 Bijoy sarani,
                                    <br /> Dhaka, DH 1515, Bangladesh.
                                </p>
                                <p className="block__text">exclusive@gmail.com</p>
                                <div className="block__text">+88015-88888-9999</div>
                            </div>
                            <div className="content__block text">
                                <p className="block__title">Account</p>
                                <p className="block__text">My Account</p>
                                <p className="block__text">Login / Register</p>
                                <div className="block__text">Cart</div>
                                <div className="block__text">Wishlist</div>
                                <div className="block__text">Shop</div>
                            </div>
                            <div className="content__block text">
                                <p className="block__title">Quick Link</p>
                                <p className="block__text">Privacy Policy</p>
                                <p className="block__text">Terms Of Use</p>
                                <div className="block__text">FAQ</div>
                                <div className="block__text">Contact</div>
                            </div>
                            <div className="content__block text">
                                <p className="block__title">Download App</p>
                                <p className="block__text">Save $3 with App New User Only</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
