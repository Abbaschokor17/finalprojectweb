import React, { Component } from 'react';

import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { FcAssistant, FcDepartment, FcVoicePresentation, FcGlobe, FcMoneyTransfer, FcInTransit } from "react-icons/fc";   
import CompanyFeatureCard from '../useme/CompanyFeatureCard.js';
import '../App.css';

import Upload from "../uploadfeedback/Upload";
class Contact extends Component {

   

    render() {
        let ourLocationMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.891535755304!2d35.485083576082936!3d33.891050528618344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1727dfc2b34f%3A0xa1f25c5ff5caec04!2sSanayeh%2C%20Beirut!5e0!3m2!1sen!2slb!4v1635763213662!5m2!1sen!2slb"width="400" height="300"></iframe>';
        return(
            <div className="container">
                <div className="row">
                   
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            Av. A place somewhere,<br />
                            899<br />
                            <i className="fa fa-phone"></i>: 81 690 128<br />
                            <i className="fa fa-fax"></i>: 03 456 456<br />
                            <i className="fa fa-envelope"></i>: <a href="GuideLebanon@trips.com">GuideLebanon@trips.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <div dangerouslySetInnerHTML={{__html: ourLocationMap}}></div>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" href="tel:+85212345678" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="GuideLebanon@trips.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>  
                <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>In August 2019 a japanese girl came to Lebanon named Tokyo and fell in love with the country.
                     She became extremely passionate about Lebanese food, its culture, nature and people. She felt here like home.</p>
                    <p>So the long relationship between Tokyo and Lebanon has started.</p>   
                    <p> Tokyo started sharing her experiences from every place she visited on instagram stories .
                     then after reaching a big number of followers because people loved her content so she decides to start her first website guide and do her own trips.</p>
                    <p><em>Guide Trip Lebanon</em></p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Some:</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">10 August 2019</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">30</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">“Lebanon is one of the most beautiful mountainous areas on Earth. It has greatness and prestige that capture the attention of the tourist.”</p>
                                <footer className="blockquote-footer">Victor Guérin,
                                <cite title="Source Title">French intellectual, explorer and amateur archaeologist</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
                
                    <br />
                    <h3>Our Mission</h3>
                    <span>Discover Lebanon with our daily tours allowing you to see the best of what Lebanon has to offer.
                    </span>
                    <br />
                    <h3>Why choose us?</h3>
                    <span>By choosing us, you will discover and go to new places in Lebanon with a full guide.
                    </span>
                    <h3>Why us?</h3>
                <div className="container">
                    <div className="row" id="show-features">
                            <div className="row">
                                <CompanyFeatureCard icon={<FcAssistant size="64"/>} feature="24/7 Support"/>
                                <CompanyFeatureCard icon={<FcMoneyTransfer size="64"/>} feature="Competitive Prices"/>
                            </div>
                            <div className="row">
                                <CompanyFeatureCard icon={<FcGlobe size="64"/>} feature="Variety Tours"/>
                                <CompanyFeatureCard icon={<FcVoicePresentation size="64"/>} feature="Tourism Guide" />
                            </div>
                            <div className="row">
                                <CompanyFeatureCard icon={<FcInTransit size="64"/>} feature="Transportation" />
                                <CompanyFeatureCard icon={<FcDepartment size="64"/>} feature="Hotels" />
                            </div>
                        </div>
                </div>
                <div className="Card">
                 <Upload />
              </div>
                
                
            </div>
                
                
                              
            </div>
            
                       
    
            
        );
    }

}

export default Contact;