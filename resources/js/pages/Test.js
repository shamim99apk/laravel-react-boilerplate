import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Test = ({ user }) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Test Component of {user}
                            </div>

                            <div className="card-body">
                                I'm an Test component!
                                <Link href="/">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test;
