import { FormEvent, useEffect, useState, useContext } from "react";
import TypewriterComponent from "typewriter-effect";

import { useNavigate } from 'react-router-dom';

import { reg_user } from "../services/user";

import { assertIsFormFieldElement } from "../utilities/getInputValue";
import MessageNot from "../utilities/MessageNot";
import UserContext from "../context/UserDataContext";



export default function Home() {
    const navigate = useNavigate();

    const { userData, setUserData }: any = useContext(UserContext);

    const [validationMsg, setValidationMsg] = useState<string[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoad, setIsload] = useState<boolean>(false);


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const firstField = e.currentTarget[0];
        assertIsFormFieldElement(firstField);


        if (firstField.value.length < 5 || firstField.value.length > 15) {
            setValidationMsg(['The Nickname should be between 5 and 15 characters long!']);
        } else {
            try {
                reg_user(firstField.value).then(res => {
                    if (res.ok) {
                        res.json().then(data => {
                            setUserData(data);
                            setIsload(true);
                            setTimeout(() => {
                                navigate('/game');
                            }, 3000);
                        });
                    } else {
                        res.json().then(msg => {
                            setIsError(false)
                            setValidationMsg(msg.message)
                        })
                    }
                });

            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        if (validationMsg) {
            setIsError(true);
        }
    }, [validationMsg, isError]);

    return (
        <>
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
                    {isLoad ?
                        <div className="spinner-border text-info" style={{ width: "6rem", height: "6rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div> : null
                    }

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
                                {isError ? < MessageNot message={validationMsg} /> : null}
                                <button type="submit" className="btn btn-submit btn-outline-success mt-2 px-5 rounded-pill text-white fw-bold">START</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}