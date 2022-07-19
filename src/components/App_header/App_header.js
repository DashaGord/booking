import React from "react";

const App_header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <a href="/" className="header-logo">
                    <img src="./iconcs/Logo.png" alt=""/>
                </a>
                <a href="#" className="text-style-400 text-color-dark50 margin-between-20">О нас</a>
                <a href="#" className="text-style-400 text-color-dark50 margin-between-20">Услуги
                    <div className="tick-header"></div>
                </a>
                <a href="#" className="text-style-400 text-color-dark50 margin-between-20">Вакансии</a>
                <a href="#" className="text-style-400 text-color-dark50 margin-between-20">Новости</a>
                <a href="#" className="text-style-400 text-color-dark50 margin-between-20">Соглашения
                    <div className="tick-header"></div>
                </a>
                <a href="/login" className="btn-radius pink-border-gradient-btn h34-w87-image margin-between-20">
                    <span className="text-style-700-12-15 text-color-primary line-height-34">ВОЙТИ</span>
                </a>
                <a href="/registration" className="btn-radius pink-gradient-btn margin-between-20">
                    <span className="text-style-700-12-15 text-color-white text-inside-btn">ЗАРЕГИСТРИРОВАТЬСЯ</span>
                </a>
            </div>
        </header>
    );
};

export default App_header;