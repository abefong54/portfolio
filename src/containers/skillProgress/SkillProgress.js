  
import React from "react";
import "./SkillProgress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import SkillCard from "../../components/skillCard/SkillCard";


export default function SkillProgress() {
    if(techStack.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="technical-skills">
                    <div>
                        <h1 className="experience-heading">Technical Skillset</h1>
                        <div className="experience-cards-div border">
                        {techStack.experience.map((card) => {
                            return (
                                <SkillCard
                                    cardInfo={{
                                        level: card.level,
                                        technology: card.technology,
                                        projects: card.projects,
                                        colorlogo: card.colorlogo,
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}