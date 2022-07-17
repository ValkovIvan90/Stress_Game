import './Home.css'

export default function Home() {
    return (
        <>
            <div className="min-vh-100" style={{ backgroundImage: `url("/images/stress-man.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="container py-5">
                    <p className="col-lg-12 text-center py-5 fs-2 fw-bolder">Nowadays almost everyone is under stress, making the right decisions is a mission that very few people can handle.</p>
                    <div className="d-lg-flex d-sm-md-inline-flex justify-content-between  text-center lh-lg fs-3 fw-bolder">
                        <p className="col-lg-4">Do you think that you are one of those who manage to cope in difficult situations?</p>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="col-lg-4 w-50 w-md-sm-70">I challenge <span className="text-danger">YOU</span> to test your skills!</p>
                            <button className="btn btn-outline-success  border-2 fw-bold rounded-pill btn-lg">Are you Ready ? </button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}