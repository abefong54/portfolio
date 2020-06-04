
import React, { Component } from "react";
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import { Fade } from "react-reveal";
import { workExperiences } from "../../portfolio";
import "./Slideshow.css";

export default function Slideshow() {
    if(workExperiences.viewExperiences) {
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
                <div className="achievement-main-div">
                    <div className="achievement-header">
                    <h1 className="heading achievement-heading">{workExperiences.title}</h1>
                    <p className="subTitle achievement-subtitle">{workExperiences.subtitle}</p>
                    </div>
                    <div className="carousel-main-div">
                    <Grid container>
                        <Grid item>
                        <Carousel>
                            {workExperiences.experience.map(slide => {
                                return (
                                    <Carousel.Item className="card-image slideshow-cards-div">
                                        <img className="work-image" src={slide.companylogo} alt={slide.company}/>
                                        <Carousel.Caption className="carousel-caption">
                                            <h3 className="heading card-company">{slide.company}</h3>
                                            <p className="subtitle card-role">{slide.role}</p>
                                            <p className="work-description">{slide.desc}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            })} 
                        </Carousel>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
            </Fade>
        );
    }
}