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
                                <div className="cnt">
                                    <img src={el?.title?.image?.src} alt={el?.title?.image?.alt} />
                                    <p className="text_xxxxxs">{el?.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default RecognitionSection;
