import React from 'react';

const Login = () => {
    return (
        <section id="section--regist">
            <form className="center-login form-border">
                <h2 className="text-style-700 text-color-dark margin-bottom-20">Войти</h2>

                <div className="row margin-bottom-20">

                    <input type="text"
                           className="form-style w-320px text-style-form text-color-dark75 none-transform margin-bottom-10"
                           placeholder="Email"/>
                    <input type="password"
                           className="form-style w-320px text-style-form text-color-dark75 none-transform margin-bottom-10"
                           placeholder="Пароль"/>

                </div>

                <a href="#" className="btn-radius pink-gradient-btn w-320px h-44px margin-bottom-30">
                    <span className="text-style-700-12-15 text-color-white text-inside-btn arrow_forward">ВОЙТИ</span>
                </a>
                <a className="text-color-dark text-style-400-14">Нет аккаунта на Toxin?</a>
                <a href="#" className="btn-radius pink-border-gradient-btn h44-image w-99px relative-left-57">
                    <span className="text-style-700-12-15 text-color-primary line-height-44">СОЗДАТЬ</span>
                </a>
            </form>
        </section>
    );
};

export default Login;
