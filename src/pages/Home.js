import React, {useState} from 'react';
import {createContext} from 'react';
import {MyShow} from "../components/MyShow";

export const ContextMyShow = createContext();

const Home = () => {
    const [show, toggleShow] = useState(false);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(1);
    const [baby, setBaby] = useState(0);
    const [dateIn, setDateIn] = useState('');
    const [dateOut, setDateOut] = useState('');

    function showGuest() {
        if (adults === 2 && children === 1 && baby === 0) {
            return "Сколько гостей";
        } else {
            return 'взрослые:' + adults + ' дети:' + children + ' младенцы:' + baby;
        }
    }

    function handleChange(e) {
        console.log(e.target.value);
    }


    return (
        <section id="section">
            <form action="/SearchForm" className="center">
                <h2 className="text-style-700 text-color-dark margin-vertical-between-21">Найдём номера под ваши
                    пожелания</h2>
                <div className="row margin-vertical-between-21">
                    <div className="column">
                        <label>прибытие</label>
                        <input
                            id="dateIn"
                            name="dateIn"
                            type="date"
                            onChange={e => setDateIn(e.target.value)}
                            value={dateIn}
                            className="form-style w-150px text-style-form text-color-dark75 tick"
                            required={true}
                        />
                    </div>
                    <div className="column">
                        <label>выезд</label>
                        <input
                            id="dateOut"
                            name="dateOut"
                            type="date"
                            onChange={e => setDateOut(e.target.value)}
                            value={dateOut}
                            className="form-style w-150px text-style-form text-color-dark75 tick"
                            required={true}
                        />
                    </div>
                </div>
                <div className="row margin-vertical-between-21">
                    <label>гости</label>
                    <div
                        onClick={() => toggleShow(!show)}
                        className="form-style select-tick w-320px text-style-form text-color-dark75 none-transform pad"
                        required="" defaultValue="false">
                        <span>{showGuest()}</span>
                    </div>

                    <input
                        id="adults"
                        name="adults"
                        type="hidden"
                        onChange={handleChange}
                        value={adults}
                    />
                    <input
                        id="children"
                        name="children"
                        type="hidden"
                        onChange={handleChange}
                        value={children}
                    />
                    <input
                        id="baby"
                        name="baby"
                        type="hidden"
                        onChange={handleChange}
                        value={baby}
                    />


                    <ContextMyShow.Provider
                        value={{show, toggleShow, adults, setAdults, children, setChildren, baby, setBaby}}>
                        <MyShow/>
                    </ContextMyShow.Provider>

                </div>
                <input type="submit"
                       className="btn-radius-1 pink-gradient-btn w-320px h-44px margin-top-31 text-style-700-12-15 text-color-white"
                       value="ПОДОБРАТЬ НОМЕР"/>
                {/*<span className="text-style-700-12-15 text-color-white text-inside-btn arrow_forward">ПОДОБРАТЬ НОМЕР</span>*/}
            </form>
            <div className="watermark text-style-400-14 text-color-dark75">Лучшие номера для вашей работы, отдыха и
                просто вдохновения
            </div>

        </section>
    )
}
export default Home;