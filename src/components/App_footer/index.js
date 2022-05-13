import React from "react";

const App_footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <div className="footer__content">
                    <div className="logo">
                        <img src="./iconcs/Logo.png" alt=""/>
                        <div className="footer__info text-style-400-14 text-color-dark75">Бронирование номеров в
                            лучшем отеле 2019
                            года по версии ассоциации «Отельные
                            взгляды»
                        </div>
                    </div>
                    <div>
                        <div className="footer__title text-style-700-12 text-color-dark text-transform">навигация</div>
                        <div className="footer__menu text-style-400 text-color-dark50">
                            <a href="#">О нас</a>
                            <a href="#">Новости</a>
                            <a href="#">Служба поддержки</a>
                            <a href="#">Услуги</a>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title text-style-700-12 text-color-dark text-transform">о нас</div>
                        <div className="footer__menu text-style-400 text-color-dark50">
                            <a href="#">О сервисе</a>
                            <a href="#">Наша команда</a>
                            <a href="#">Вакансии</a>
                            <a href="#">Инвесторы</a>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title text-style-700-12 text-color-dark text-transform">Служба
                            поддержки
                        </div>
                        <div className="footer__menu text-style-400 text-color-dark50">
                            <a href="#">Соглашения</a>
                            <a href="#">Сообщества</a>
                            <a href="#">Связаться с нами</a>
                        </div>
                    </div>
                    <div className="last__footer_div">
                        <div className="footer__title text-style-700-12 text-color-dark text-transform">Подписка</div>
                        <div className="row_wide_indent">Получайте специальные предложения и новости сервиса</div>
                        <form>
                            <input type="email" placeholder="Email"
                                   className="form-style w-260px text-style-form text-color-dark75 arrow_forward-pink none-transform"/>
                        </form>
                    </div>
                </div>
                <hr className="footer__line"/>
                <div className="footer__copy">
                    <div className="footer_copyright text-style-400 text-color-dark75">Copyright © 2018 Toxin отель.
                        Все права
                        защищены.
                    </div>
                    <div className="footer__social">
                        <a href="#" className="footer__social-item"><img src="./img/twitter.png" alt="twitter"/></a>
                        <a href="#" className="footer__social-item"><img src="./img/face.png" alt="facebook"/></a>
                        <a href="#" className="footer__social-item"><img src="./img/inst.png" alt="inst"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default App_footer;