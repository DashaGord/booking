import React, {createContext, useEffect, useState} from 'react';
import AvailableRoomsService from "../services/AvailableRoomsService";
import {ModelPagination} from "../components/Pagination/ModelPagination";
import {ApartmentsList} from "../components/ApartmentsList";
import {AvailableRoomsModel} from "../Model/AvailableRoomsModel";
import {Navigate, useLocation} from "react-router-dom";
import {MyShow} from "../components/MyShow";
import {ContextMyShow} from "./Home";
import Range from "../components/Range";




export const DataContext = createContext();

const availableRoomsService = new AvailableRoomsService();

const SearchForm = () => {
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    const [dateIn, setDateIn] = useState(usp.get('dateIn'));
    const [dateOut, setDateOut] = useState(usp.get('dateOut'));
    const [show, toggleShow] = useState(false);
    const [adults, setAdults] = useState(usp.get('adults'));
    const [children, setChildren] = useState(usp.get('children'));
    const [baby, setBaby] = useState(usp.get('baby'));
    const [data, setData] = useState(new AvailableRoomsModel(0, []));
    let skip = usp.get('skip');

    useEffect(() => {
        fetchAvailableRooms(skip);
    }, [location]);

    if (dateIn === null || dateOut === null){
        return(<Navigate to="/" />);
    }

    function fetchAvailableRooms(skip) {
        availableRoomsService.getAvailableRooms(skip).then(res => {
            setData(res);
        })
    }
    function showGuest(){
        return 'взрослые:' + adults + ' дети:' + children + ' младенцы:' + baby;
    }

    return (
        <section id="section--search">
            <aside>
                <form action="" className="search-filter">

                    <label className="text-style-700-12-15 text-color-dark">даты прибытия в отель</label>
                    <input
                        id="dateIn"
                        name="dateIn"
                        type="date"
                        onChange={e => setDateIn(e.target.value)}
                        value={dateIn}
                        className="form-style w-320px text-style-form text-color-dark75 tick"
                    />
                    <label className="text-style-700-12-15 text-color-dark margin-top-20">гости</label>
                    <div
                        onClick={() => toggleShow(!show)}
                        className="form-style select-tick w-320px text-style-form text-color-dark75 none-transform pad"
                        required="">
                        <span>{showGuest()}</span>
                    </div>

                    <ContextMyShow.Provider
                        value={{show, toggleShow, adults, setAdults, children, setChildren, baby, setBaby}}>
                        <MyShow/>
                    </ContextMyShow.Provider>
                    {/*<input*/}
                    {/*    id="adults"*/}
                    {/*    name="adults"*/}
                    {/*    type="hidden"*/}
                    {/*    onChange={handleChange}*/}
                    {/*    value={adults}*/}
                    {/*/>*/}
                    {/*<input*/}
                    {/*    id="children"*/}
                    {/*    name="children"*/}
                    {/*    type="hidden"*/}
                    {/*    onChange={handleChange}*/}
                    {/*    value={children}*/}
                    {/*/>*/}
                    {/*<input*/}
                    {/*    id="baby"*/}
                    {/*    name="baby"*/}
                    {/*    type="hidden"*/}
                    {/*    onChange={handleChange}*/}
                    {/*    value={baby}*/}
                    {/*/>*/}

                    <Range/>

                    {/*<label*/}
                    {/*    className="text-style-700-12-15 text-color-dark float-left margin-between-40 margin-top-10">диапазон*/}
                    {/*    цены</label>*/}
                    {/*<span id="prices-label"*/}
                    {/*      className="float-left margin-between-40 text-style-pagination text-color-dark50 margin-top-10">*/}
                    {/*    <span id="visible-min-price">5000₽</span> - <span id="visible-max-price">10000₽</span></span>*/}
                    {/*<br/>*/}
                    {/*<input type="hidden" id="min-price" name="min_price" value="5000"/>*/}
                    {/*<input type="hidden" id="max-price" name="max_price" value="50000"/>*/}
                    {/*<div className="clear margin-top-20">*/}
                    {/*    <span className="range-1"></span>*/}
                    {/*    <span className="range-2"></span>*/}
                    {/*    <span className="rectangle-1"></span>*/}
                    {/*    <span className="rectangle-2"></span>*/}
                    {/*</div>*/}

                    {/*<div className="text-style-400-12 text-color-dark50 height-15 margin-top-10">Стоимость за*/}
                    {/*    сутки пребывания в номере*/}
                    {/*</div>*/}

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
                <h2 className="text-color-dark text-style-700 header-catalog">Номера, которые мы для вас
                    подобрали</h2>
                <DataContext.Provider value={data}>
                    <ApartmentsList/>
                    <ModelPagination/>
                </DataContext.Provider>
            </div>
            <hr className="line-end"/>

        </section>
    )
}

export {SearchForm};
