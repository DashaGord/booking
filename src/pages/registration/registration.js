import React from 'react';
import './registration.css';

const Registration = () => {
    return (
        <section id="section--regist">
            <form className="center-regist form-border">
                <h2 className="text-style-700 text-color-dark margin-bottom-20">Регистрация аккаунта</h2>

                <div className="row margin-bottom-20">

                    <input type="text"
                           className="form-style w-320px text-style-form text-color-dark75 none-transform margin-bottom-10"
                           placeholder="Имя"/>
                    <input type="text"
                           className="form-style w-320px text-style-form text-color-dark75 none-transform margin-bottom-10"
                           placeholder="Фамилия"/>


                    <div className="label-radio margin-bottom-20">
                        <input type="radio" id="men" name="first" value="men"/>
                        <label className="text-radio" htmlFor="men">
                        <span className="round margin-right-10"></span>
                            Мужчина
                        </label>

                        <input type="radio" id="women" name="first" value="women"/>
                        <label className="text-radio" htmlFor="women">
                            <span className="round margin-right-10"></span>
                            Женщина
                        </label>
                    </div>


                    <label>дата рождения</label>
                    <input type="date" className="form-style w-320px text-style-form text-color-dark75 tick"/>


                    <label className="margin-top-20">данные для входа в сервис</label>
                    <input type="text"
                           className="form-style w-320px text-style-form text-color-dark75 none-transform margin-bottom-10"
                           placeholder="Email"/>
                    <input type="password"
                           className="form-style w-320px text-style-form text-color-dark75 none-transform margin-bottom-10"
                           placeholder="Пароль"/>

                    <label className= "switch margin-top-10">
                        <input type="checkbox"/>
                        <span
                            className="text-style-400-14 text-color-dark50 none-transform height-24">Получать спецпредложения</span>
                    </label>

                </div>

                <a href="#" className="btn-radius pink-gradient-btn w-320px h-44px margin-bottom-30">
                    <span className="text-style-700-12-15 text-color-white text-inside-btn arrow_forward">ЗАРЕГИСТРИРОВАТЬСЯ</span>
                </a>
                <a className="text-color-dark text-style-400-14">Уже есть аккаунт на Toxin</a>
                <a href="#" className="btn-radius pink-border-gradient-btn h44-image w-99px relative-left-33">
                    <span className="text-style-700-12-15 text-color-primary line-height-44">ВОЙТИ</span>
                </a>
            </form>
        </section>
    );
};

export default Registration;
