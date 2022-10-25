import React from "react";
import './terms-condition.css'
import { DUMMY_CONTENT } from "../../Config/Constant";
import Footer from "../Footer/Footer";

const Headings = [
    { value: 'Correction of Errors and Inaccuracie' },
    { value: 'Tax' },
    { value: 'Return Policy' },
    { value: 'Cancellations' },
    { value: 'Product Availability' },
    { value: 'Colors' },
    { value: 'Shipping & Delivery' }
]
const TermsAndConditions = () => {

    return (
        <>
         <h1 className="heading-style">Terms & Condition</h1>
          <div className="container mt-5">
            {Headings.map((item, index) => {
                return (
                    <>
                        <h3 className="sub-head-style" key={index}>{item.value}</h3>
                        <p className="content-style">{DUMMY_CONTENT}</p>
                        <hr />
                    </>
                );
            })}
            
           <p className="contact-style">For any query and complaint contact us at : <a href="email">abc@yopmail.com</a></p>
            </div>
            <hr />
            <Footer />
        </>
    );
}


export default TermsAndConditions;