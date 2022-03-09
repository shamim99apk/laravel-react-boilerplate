import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Style from "./style.module.css";

const Home = () => {
    return (
        <>
            <header
                className={`${Style[`l-header-outer`]} p-corp-login-header`}
            >
                <div className="l-header">
                    <div className="l-header-left">
                        <h1>CheerCareer</h1>
                        <a href="/admin-company/login">企業管理ログイン</a>
                    </div>
                    <div className="l-header-right">
                        <a href="/login">
                            <i className="fas fa-user"></i> 求職者の方はこちら
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Home;
