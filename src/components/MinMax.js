import React from "react";

const MinMax = ({min, max, value, setter}) => {

    function applyCurrent(num) {
        let validNam = Math.max(min, Math.min(max, num));
        setter(validNam);
    }

    let inc = () => applyCurrent(value + 1);
    let dec = () => applyCurrent(value - 1);

    return <div>
        <button type="button" className="btn-minus" onClick={dec}>-</button>
        <span>{value}</span>
        <button type="button" className="btn-plus" onClick={inc}>+</button>
    </div>
}

export default MinMax;
