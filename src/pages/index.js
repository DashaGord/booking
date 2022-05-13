import React from 'react';

const Home = () => {
    return (
        <section id="section">
            <form className="center">
                <h2 className="text-style-700 text-color-dark margin-vertical-between-21">Найдём номера под ваши
                    пожелания</h2>
                <div className="row margin-vertical-between-21">
                    <div className="column">
                        <label>прибытие</label>
                        <input type="date" className="form-style w-150px text-style-form text-color-dark75 tick"/>
                    </div>
                    <div className="column">
                        <label>выезд</label>
                        <input type="date" className="form-style w-150px text-style-form text-color-dark75 tick"/>
                    </div>
                </div>
                <div className="row margin-vertical-between-21">
                    <label>гости</label>
                    <div className="form-style select-tick w-320px text-style-form text-color-dark75 none-transform pad"
                         required="">
                        <span>Сколько гостей</span>
                    </div>
                    <div className="guests-choice">
                        <div className="guest-line margin-vertical-between-21">
                            <span className="name-guests text-style-700-12 text-transform">Взрослые</span>

                            <span className="counter">
                            <button className="btn-minus">-</button>
                            <input type="number" value="2" readOnly="" min="0" max="10" className="border-counter"/>
                            <button className="btn-plus">+</button>
                    </span>

                        </div>
                        <div className="guest-line margin-vertical-between-21">
                            <span className="name-guests text-style-700-12 text-transform">Дети</span>

                            <span className="counter">
                            <button className="btn-minus">-</button>
                            <input type="number" value="1" readOnly="" min="0" max="10" className="border-counter"/>
                            <button className="btn-plus">+</button>
                        </span>

                        </div>
                        <div className="guest-line margin-vertical-between-21">
                            <span className="name-guests text-style-700-12 text-transform">Младенцы</span>

                            <span className="counter">
                            <button className="btn-minus">-</button>
                            <input type="number" value="0" readOnly="" min="0" max="10" className="border-counter"/>
                            <button className="btn-plus">+</button>
                        </span>

                        </div>
                        <div className="text-style-700-12 text-transform text-color-primary margin-top-29">
                            <span className="clear">Очистить</span>
                            <span className="apply">Применить</span>
                        </div>
                    </div>

                </div>
                <a href="/SearchForm" className="btn-radius pink-gradient-btn margin-between-20 w-320px h-44px margin-top-31">
                    <span className="text-style-700-12-15 text-color-white text-inside-btn arrow_forward">ПОДОБРАТЬ НОМЕР</span>
                </a>
            </form>
            <div className="watermark text-style-400-14 text-color-dark75">Лучшие номера для вашей работы, отдыха и
                просто вдохновения
            </div>

        </section>
    );
};

export default Home;
