import { FormEvent, useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

import { assertIsFormFieldElement } from "../utilities/getInputValue";
import MessageNot from "../utilities/MessageNot";


export default function Home() {


    const [validationMsg, setValidationMsg] = useState("");
    const [isError, setIsError] = useState<boolean>(false);
    const [msg, setMsg] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const firstField = e.currentTarget[0];
        assertIsFormFieldElement(firstField);
        setMsg(firstField.value)

        if (firstField.value.length < 5 || firstField.value.length > 15) {
            setValidationMsg('The Nickname should be between 5 and 15 characters long!');
        }
    }

    useEffect(() => {
        if (msg.length < 5 || msg.length > 15) {
            setIsError(true);
        } else {
            setIsError(false)
        }
    }, [msg.length]);
    
    return (
        <div className="container-fluid min-vh-100" style={{ backgroundImage: `url("/images/dark_st.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container py-5 text-center">
                <h1 className="fw-bold py-5 text-white">
                    The challenge consists of 20 questions, and for each question you will have several options.
                </h1>
                <h2 className="fs-2 fw-bold pb-4 text-warning">
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2000)
                                .changeDelay(85)
                                .typeString("As in the real world, there is only one rule here - ")
                                .pauseFor(2000)
                                .changeDelay(50)
                                .typeString("Be Quick!")
                                .start();
                        }}
                    />
                </h2>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="text-white text-center">Enter Your Nickname :</h4>
                    </div>
                    <div className="col-lg-4 mx-auto text-center">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Nickname*"
                                className="form-control bg-transparent border-secondary small text-white mb-4"
                            />
                            {isError ? < MessageNot message={validationMsg} msg={msg} /> : null}
                            <button type="submit" className="btn btn-submit btn-outline-success mt-2 px-5 rounded-pill text-white fw-bold">START</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}