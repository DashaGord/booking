import React from "react";

const ApartmentPage = () => {
    return (
        <div>
            <section id="section-photo">
                <div className="first-block">
                    <img className="img-apartment-page" src="./apartments/image-1.svg" alt="Photo"/>
                </div>
                <div className="second-block">
                    <img src="./apartments/image-1-2.png" alt="Photo"/>
                </div>
                <div className="third-block">
                    <img src="./apartments/image-1-3.png" alt="Photo"/>
                </div>
            </section>

            <section id="section-inform">

                <div className="room-information">
                    <div className="room-gen">
                        <h2 className="text-style-700-19-23 text-color-dark">Сведения о номере</h2>
                        <div className="margin-top-31">
                            <img className="img-icons margin-right-20"
                                 src="./iconcs/apartmen-page/insert_emoticon.svg" alt=""/>
                            <div className="comfort">
                                <span className="text-style-700-14-24 text-color-dark75">Комфорт</span><br/>
                                <span className="text-style-400-14 text-color-dark75">Шумопоглощающие стены</span>
                            </div>
                        </div>
                        <img src="./iconcs/apartmen-page/Rectangle%202.png" className="margin-top-17"/>
                        <div className="margin-top-23">
                            <img className="img-icons margin-right-20"
                                 src="./iconcs/apartmen-page/location_city.svg"
                                 alt=""/>
                            <div className="boon">
                                <span className="text-style-700-14-24 text-color-dark75">Удобство</span><br/>
                                <span className="text-style-400-14 text-color-dark75">Окно в каждой из спален</span>
                            </div>
                        </div>
                        <img src="./iconcs/apartmen-page/Rectangle%202.png" className="margin-top-17"/>
                        <div className="margin-top-23">
                            <img className="img-icons margin-right-20"
                                 src="./iconcs/apartmen-page/whatshot.svg"
                                 alt=""/>
                            <div className="cosiness">
                                <span className="text-style-700-14-24 text-color-dark75">Уют</span><br/>
                                <span className="text-style-400-14 text-color-dark75">Номер оснащён камином</span>
                            </div>
                        </div>
                    </div>

                    <div className="room-feeling">
                        <h2 className="text-style-700-19-23 text-color-dark margin-bottom-30">Впечатления от номера</h2>

                        <div className="feeling-box">
                            <div id="d1">
                                <div id="s1"></div>
                                <div id="s2">
                                    <span className="ids2"><img src="./iconcs/apartmen-page/fine.png"
                                                                alt=""/></span>
                                    <span className="ids2"><img src="./iconcs/apartmen-page/cool.png"
                                                                alt=""/></span>
                                </div>
                                <div className="vote">
                                    <span className="text-color-primary text-style-700">260</span>
                                    <span className="text-color-primary text-style-700-12 text-transform">голосов</span>
                                </div>
                            </div>

                            <div className="feeling-text margin-left-5">
                                <ul className="text-style-400-14 text-color-dark75">
                                    <li><img src="./iconcs/apartmen-page/Ellipse%20(1).png"
                                             className="margin-right-5" alt=""/>Великолепно
                                    </li>
                                    <li><img src="./iconcs/apartmen-page/Ellipse%20(2).png"
                                             className="margin-right-5" alt=""/>Хорошо
                                    </li>
                                    <li><img src="./iconcs/apartmen-page/Ellipse%20(3).png"
                                             className="margin-right-5" alt=""/>Удовлетворительно
                                    </li>
                                    <li><img src="./iconcs/apartmen-page/Ellipse%20(4).png"
                                             className="margin-right-5" alt=""/>Разочарован
                                    </li>
                                </ul>

                            </div>
                        </div>


                    </div>
                </div>


                <div className="margin-top-31">
                    <div className="line-box margin-bottom-20">
                        <span className="text-style-700-19-23 text-color-dark ">Отзывы посетителей номера</span>
                        <span className="all-comment text-style-400-14-14 text-color-dark50">2 отзыва</span>
                    </div>

                    <div className="comment-box">
                        <img className="icons-comment" src="./img/comments/men.png" alt=""/>
                        <div className="comments-name margin-right-10">
                            <h3 className="text-style-700-14-24 text-color-dark75">Мурад Сарафанов</h3>
                            <h4 className="text-style-400-14 text-color-dark75">5 дней назад</h4>
                        </div>
                        <div className="comments-text text-style-400-14 text-color-dark75">
                <span>Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие.
                    Выкрикивал комплименты повару — никто не жаловался из соседей.</span>
                        </div>
                    </div>
                    <div className="comment-box margin-top-23">
                        <img className="" src="./img/comments/women.png" alt=""/>
                        <div className="comments-name margin-right-10">
                            <h3 className="text-style-700-14-24 text-color-dark75">Патрисия Стёклышкова</h3>
                            <h4 className="text-style-400-14 text-color-dark75">Неделю назад</h4>
                        </div>
                        <div className="comments-text text-style-400-14 text-color-dark75">
                            <span>Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент</span>
                        </div>
                    </div>
                </div>

                <div className="last-info margin-top-31">
                    <div className="rules">
                        <h2 className="text-style-700-19-23 text-color-dark">Правила</h2>
                        <ul className="text-color-dark75 margin-top-20">
                            <li className="text-style-400-14 margin-bottom-10"><img
                                src="./iconcs/apartmen-page/Ellipse.svg"
                                className="margin-right-10"/>Нельзя
                                с питомцами
                            </li>
                            <li className="text-style-400-14 margin-bottom-10"><img
                                src="./iconcs/apartmen-page/Ellipse.svg"
                                className="margin-right-10"/>Без
                                вечеринок и мероприятий
                            </li>
                            <li className="text-style-400-14"><img src="./iconcs/apartmen-page/Ellipse.svg"
                                                                   className="margin-right-10"/>Время
                                прибытия — после 13:00, а выезд до 12:00
                            </li>
                        </ul>
                    </div>
                    <div className="cancel">
                        <h2 className="text-style-700-19-23 text-color-dark">Отмена</h2>
                        <p className="text-style-400-14 text-color-dark75 margin-top-20">Бесплатная отмена в течение 48
                            ч. После
                            этого при отмене не позднее чем за 5 дн.
                            До прибытия вы получите полный возврат за вычетом сбора за услуги.</p>
                    </div>
                </div>

                <hr className="line-end-apart"/>


                <form className="apartment-form">

                <span
                    className="form-price_calculation-1 text-style-700-14-17 text-color-dark margin-bottom-20 text-transform">№ 888</span>
                    <span
                        className="form-price-1 text-style-700-14 text-color-dark75 margin-bottom-20">9 990₽ в сутки</span>

                    <div className="row">
                        <div className="column">
                            <label className="text-style-700-12 text-color-dark">прибытие</label>
                            <input type="date" className="form-style w-150px text-style-form text-color-dark75 tick"/>
                        </div>
                        <div className="column margin-left">
                            <label className="text-style-700-12 text-color-dark">выезд</label>
                            <input type="date" className="form-style w-150px text-style-form text-color-dark75 tick"/>
                        </div>
                    </div>
                    <div className="row margin-vertical-between-21 margin-top-20">
                        <label>гости</label>
                        <select name="guests"
                                className="form-style select-tick w-320px text-style-form text-color-dark75 none-transform"
                                required="">
                            <option className="" value="" disabled="" selected="" hidden="">Сколько гостей</option>
                            <option value="">взрослые</option>
                            <option value="">дети</option>
                            <option value="">младенцы</option>
                        </select>
                    </div>

                    <div
                        className="form-price_calculation text-style-400-14 text-color-dark75 margin-top-20 margin-bottom-10">9
                        990₽ х 4 суток
                    </div>
                    <div className="form-price text-style-400-14 text-color-dark75 margin-top-20">39 960₽</div>

                    <div className="form-price_calculation text-style-400-14 text-color-dark75 margin-bottom-10">Сбор за
                        услуги: скидка 2 179₽
                        <img src="./iconcs/apartmen-page/btn-i.png" alt="" className="btn-i"/>
                    </div>
                    <div className="form-price text-style-400-14 text-color-dark75">0₽</div>

                    <div className="form-price_calculation text-style-400-14 text-color-dark75">Сбор за дополнительные
                        услуги
                        <img src="./iconcs/apartmen-page/btn-i.png" alt="" className="btn-i"/>
                    </div>
                    <div className="form-price text-style-400-14 text-color-dark75 margin-top-10">300₽</div>

                    <div className="form-price_calculation text-style-700-19-23 text-color-dark margin-top-23">Итого
                        <img src="./iconcs/apartmen-page/Rectangle%202.svg" alt="" className="results-line"/>
                    </div>
                    <div className="form-price text-style-700-19-23 text-color-dark margin-top-23">38 081₽</div>


                    <a href="#" className="btn-radius pink-gradient-btn margin-between-20 w-320px h-44px ">
                    <span
                        className="text-style-700-12-15 text-color-white text-inside-btn arrow_forward">ЗАБРОНИРОВАТЬ</span>
                    </a>
                </form>

            </section>
        </div>

    );
};

export default ApartmentPage;
