import React, {useContext} from 'react';
import {ContextMyShow} from '../pages/Home';
import MinMax from "./MinMax";


const MyShow = () => {
    const {show, toggleShow, adults, setAdults, children, setChildren, baby, setBaby} = useContext(ContextMyShow);

    function clear() {
        setAdults(2);
        setChildren(1);
        setBaby(0);
        toggleShow(false);
    }

    function guestSearch (){
        toggleShow(false);
    }

    return (<div>
            {show === true &&
                <div className="guests-choice">
                    <div className="guest-line margin-vertical-between-21">
                        <span className="name-guests text-style-700-12 text-transform">Взрослые</span>

                        <span className="counter">
                            <MinMax min={2} max={9} value={adults} setter={(v) => setAdults(v)}/>
                </span>

                    </div>
                    <div className="guest-line margin-vertical-between-21">
                        <span className="name-guests text-style-700-12 text-transform">Дети</span>

                        <span className="counter">
                            <MinMax min={1} max={5} value={children} setter={(v) => setChildren(v)}/>
                </span>

                    </div>
                    <div className="guest-line margin-vertical-between-21">
                        <span className="name-guests text-style-700-12 text-transform">Младенцы</span>

                        <span className="counter">
                             <MinMax min={0} max={5} value={baby} setter={(v) => setBaby(v)}/>
                </span>
                    </div>
                    <div className="text-style-700-12 text-transform text-color-primary margin-top-29">
                        <span className="clear" onClick={clear}>Очистить</span>
                        <span className="apply" onClick={guestSearch}>Применить</span>
                    </div>
                </div>
            }
        </div>
    )
}
export {MyShow};