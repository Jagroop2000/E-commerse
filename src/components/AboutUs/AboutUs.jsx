import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from "../Footer/Footer";
import './about-us.css'
const AboutUs = () => {

    return (
        <>
            <section className="bacground-style-about-us">
                <div className="row">

                    <div className="profile__img col-md-4"><img src="http://placehold.jp/400x400.png?text=sample" alt="" /></div>

                    <div className="profile__text col-md-8">
                        <p className="about-us-style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam ipsam, molestias at nobis rem eaque
                            in suscipit minima laudantium, qui exercitationem accusantium ducimus magnam voluptatibus quod, ad inventore?
                            Ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam ipsam, molestias at nobis rem eaque
                            in suscipit minima laudantium, qui exercitationem accusantium ducimus magnam voluptatibus quod, ad inventore?
                            Ipsa
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam ipsam, molestias at nobis rem eaque
                            in suscipit minima laudantium, qui exercitationem accusantium ducimus magnam voluptatibus quod, ad inventore?
                            Ipsa
                            </p>

                        <div className="icon">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    )
}

export default AboutUs;