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
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="text-white text-center">Enter a Nickname :</h4>
                    </div>
                    <div className="col-lg-4 mx-auto text-center">
                        <form>
                            <div className="m-3">
                                <input type="text" className="form-control bg-transparent border-secondary small text-white"
                                    placeholder="Your Nickname*" required name="visitors_name" />
                            </div>
                            <button className="btn btn-submit btn-outline-success mt-2 px-5 rounded-pill text-white fw-bold" type="submit">START</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}