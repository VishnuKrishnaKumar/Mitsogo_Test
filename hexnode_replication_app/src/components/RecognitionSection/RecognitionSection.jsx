import React from "react";
import { data } from "../../data/dummyData";
import './recognitionSection.scss';

const RecognitionSection = () => {
    const recognitionData = data.recognitions;
    return (
        <section className="recognition_section bg_dark_700 bg_dark">
            <div className="container">
                <ul className="recognition_list">
                    {recognitionData?.map((el, index) => {
                        return (
                            <li key={index}>
                                <a href={el?.cta_link} className="cnt">
                                    <div>
                                        <img src={el?.title?.image?.src} alt={el?.title?.image?.alt} loading="lazy" />
                                        <p className="text_xxxxxs">{el?.description}</p>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default RecognitionSection;
