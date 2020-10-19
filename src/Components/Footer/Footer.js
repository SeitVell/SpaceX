import React from 'react';

import logo from '../../img-logo/logo.svg';
import './Footer.css';

const Footer = ({links : {elon_twitter : elonTwitter, flickr, twitter, website}, summary}) => (

    <footer className="footer">
		<img src={logo} alt="logo Space X" className="logo"/>
		<nav className="footer-nav">
			<ul className="list">
				<li className="item">
					<a href={elonTwitter} rel="noopener noreferrer" target='_blank' className="item-link">
						Twitter
					</a>
				</li>
				<li className="item">	
					<a href={flickr} rel="noopener noreferrer" target='_blank' className="item-link">
						Flickr
					</a>
				</li>
				<li className="item">	
					<a href={twitter} rel="noopener noreferrer" target='_blank' className="item-link">
						Website
					</a>
				</li>
				<li className="item">	
					<a href={website} rel="noopener noreferrer" target='_blank' className="item-link">
						Elon Musk Twitter
					</a>
				</li>
			</ul>
		</nav>
		<p className="footer-text">
			{summary}
			<a className="footer-link" href="mailto:rideshare@spacex.com">rideshare@spacex.com</a>
		</p>

	</footer>
);

export default Footer;