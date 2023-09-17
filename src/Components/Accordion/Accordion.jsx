// @ts-nocheck
import React, { useState } from "react";
import "#assets/styles/Accordion.css";
import { RiAddLine } from "react-icons/ri";

const Accordion = ({ items, index }) => {
    const { method, url, description } = items;
    const [accActive, setAccActive] = useState();

    const handleActive = (index) => {
        if (accActive === index) {
            setAccActive();
        } else {
            setAccActive(index);
        }
    };

    return (
        <div className="accordionContainer my-3 ">
            <div
                className={`accordion accordion-${method} w-100"`}
                onClick={() => handleActive(index)}
            >
                <div className="accordionHeading d-flex jc-sb align-center jc-sb">
                    <div className="d-flex d-flex jc-sb align-center gap-4">
                        <h3 className="py-1">{method}</h3>
                        <p>{url}</p>
                    </div>
                    <span
                        className="addIcon"
                        style={{
                            transform: `${
                                accActive === index
                                    ? "rotate(45deg)"
                                    : "rotate(0deg)"
                            }`,
                        }}
                    >
                        <RiAddLine size={25} />
                    </span>
                </div>
                {accActive === index ? (
                    <div className="accordionContent">
                        <div className="action d-flex gap-3 w-100 mb-2 p-2">
                            <span>Action :</span>
                            <span>{description.action}</span>
                        </div>
                        <div className="schema">
                            <span>Schema :</span>
                            {
                                Array.isArray(description.schema) ? <pre>{description.schema}</pre> : <span className="mx-3">{description.schema}</span>
                            }
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Accordion;
