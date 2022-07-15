import React from 'react';
import Apartment from "../components/Apartment";

const SearchForm = () => {
    return (
        <section id="section--search">
            <aside>
                <form action="" className="search-filter">

                    <label className="text-style-700-12-15 text-color-dark">даты прибытия в отель</label>
                    <input type="date" className="form-style w-320px text-style-form text-color-dark75 tick"/>
                    <label className="text-style-700-12-15 text-color-dark margin-top-20">гости</label>
                    <div
                        className="form-style select-tick w-320px text-style-form text-color-dark75 none-transform pad"
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


                    <label className="text-style-700-12-15 text-color-dark float-left margin-between-40 margin-top-10">диапазон
                        цены</label>
                    <span id="prices-label"
                          className="float-left margin-between-40 text-style-pagination text-color-dark50 margin-top-10"><span
                        id="visible-min-price">5000₽</span> - <span id="visible-max-price">10000₽</span></span>
                    <br/>
                    <input type="hidden" id="min-price" name="min_price" value="5000"/>
                    <input type="hidden" id="max-price" name="max_price" value="50000"/>
                    <div className="clear margin-top-20">
                        <span className="range-1"></span>
                        <span className="range-2"></span>
                        <span className="rectangle-1"></span>
                        <span className="rectangle-2"></span>
                    </div>
                    <div className="text-style-400-12 text-color-dark50 height-15 margin-top-10">Стоимость за
                        сутки пребывания в номере
                    </div>

                    <label className="text-style-700-12-15 text-color-dark margin-top-31">правила дома</label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Можно курить</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Можно с питомцами</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box check-box-w text-style-400-14 none-transform text-color-dark50">Можно пригласить гостей (до 10 человек)</span></label>


                    <label className="text-style-700-12-15 text-color-dark margin-top-30">доступность</label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-700-14 none-transform text-color-dark75">Широкий коридор</span></label>
                    <span className="check-text text-style-400-12 text-color-dark50">Ширина коридоров в номере не менее 91 см.</span>

                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-700-14 none-transform text-color-dark75">Помощник для инвалидов</span></label>
                    <span className="check-text text-style-400-12 text-color-dark50">На 1 этаже вас встретит специалист и проводит до номера.</span>


                    <label className="text-style-700-12-15 text-color-dark margin-top-31">удобства
                        номера</label>
                    <div
                        className="form-style select-tick w-320px text-style-form text-color-dark75 none-transform pad"
                        required="">
                        <span>2 спальни, 2 кровати...</span>
                    </div>
                    <div className="choice-comfort">
                        <div className="guest-line margin-vertical-between-21">
                            <span className="name-guests text-style-700-12 text-transform">спальни</span>

                            <span className="counter">
                            <button className="btn-minus">-</button>
                            <input type="number" value="2" readOnly="" min="0" max="10" className="border-counter"/>
                            <button className="btn-plus">+</button>
                    </span>

                        </div>
                        <div className="guest-line margin-vertical-between-21">
                            <span className="name-guests text-style-700-12 text-transform">кровати</span>

                            <span className="counter">
                            <button className="btn-minus">-</button>
                            <input type="number" value="1" readOnly="" min="0" max="10" className="border-counter"/>
                            <button className="btn-plus">+</button>
                        </span>

                        </div>
                        <div className="guest-line margin-vertical-between-21">
                            <span className="name-guests text-style-700-12 text-transform">ванные комнаты</span>

                            <span className="counter">
                            <button className="btn-minus">-</button>
                            <input type="number" value="0" readOnly="" min="0" max="10" className="border-counter"/>
                            <button className="btn-plus">+</button>
                        </span>

                        </div>
                    </div>

                    <label className="text-style-700-12-15 text-color-dark margin-top-31 margin-bottom-20">дополнительные
                        удобства<span className="tick-filter"></span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Завтрак</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Письменный стол</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Стул для кормления</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Кроватка</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Телевизор</span></label>
                    <label className="check option margin-top-10"><input className="check_input"
                                                                         type="checkbox"/><span
                        className="check_box text-style-400-14 none-transform text-color-dark50">Шампунь</span></label>

                </form>
            </aside>

            <div className="catalog-apartments">
                <h2 className="text-color-dark text-style-700 header-catalog">Номера, которые мы для вас подобрали</h2>


                {/*<Apartment img={1} price={9900} id={888} stars={5} comments={52}/>*/}
                {/*<Apartment img={2} price={5800} id={654} stars={4} comments={123}/>*/}
                {/*<Apartment img={3} price={6900} id={658} stars={3} comments={152}/>*/}
                {/*<Apartment img={4} price={7900} id={666} stars={5} comments={72}/>*/}
                {/*<Apartment img={5} price={9500} id={723} stars={4} comments={62}/>*/}
                {/*<Apartment img={6} price={9300} id={321} stars={3} comments={80}/>*/}
                {/*<Apartment img={7} price={5200} id={852} stars={5} comments={49}/>*/}
                {/*<Apartment img={8} price={6400} id={838} stars={3} comments={53}/>*/}
                {/*<Apartment img={9} price={9900} id={896} stars={4} comments={85}/>*/}
                {/*<Apartment img={10} price={8900} id={588} stars={5} comments={96}/>*/}
                {/*<Apartment img={11} price={7900} id={788} stars={4} comments={100}/>*/}
                {/*<Apartment img={12} price={6900} id={458} stars={5} comments={73}/>*/}


                <div className="pagination">

                    <div href="#" className="current-page">
                        <span className="text-style-pagination text-color-white text-inside-btn">1</span>
                    </div>
                    <a href="#" className="">
                        <span className="text-style-pagination text-color-dark50 text-inside-btn">2</span>
                    </a>
                    <a href="#" className="">
                        <span className="text-style-pagination text-color-dark50 text-inside-btn">3</span>
                    </a>
                    <a href="#" className="">
                        <span className="text-style-pagination text-color-dark50 text-inside-btn">...</span>
                    </a>
                    <a href="#" className="">
                        <span className="text-style-pagination text-color-dark50 text-inside-btn">15</span>
                    </a>
                    <a href="#" className="btn-next">
                        <span className="next">&nbsp;</span>
                    </a>
                </div>
                <h4 className="pagination-text text-style-400-14 text-color-dark75">1 – 12 из 100+ вариантов аренды</h4>
            </div>
            <hr className="line-end"/>

        </section>
    );
};

export default SearchForm;
