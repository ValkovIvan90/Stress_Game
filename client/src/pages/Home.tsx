import TypewriterComponent from "typewriter-effect";

export default function Home() {

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
        </div>
    );
}