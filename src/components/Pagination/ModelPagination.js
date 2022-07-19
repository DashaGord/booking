import React, { useContext } from 'react';
import {DataContext} from "../../pages/test";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {TestPage} from "../../pages/test";

const ModelPagination = () => {
    const skipQty = 12;
    const paginationElem = 3;
    const response = useContext(DataContext);

    let count = response.count;
    let lastPage = Math.floor(count / skipQty);


    const location = useLocation();

    const usp = new URLSearchParams(location.search);
    let skip = usp.get('skip');
    const currentSkip = "skip=" + skip;

    let currentPage = skip / skipQty;
    if (currentPage === 0) {
        currentPage = 1;
    }

    const arrayLeft = [];
    for (let i = currentPage - 1; i > 1; i--) {
        arrayLeft.push(i);
        if (arrayLeft.length === paginationElem - 1) {
            break;
        }
    }
    arrayLeft.reverse();
    const arrayRight = [];
    for (let i = currentPage + 1; i < lastPage; i++) {
        arrayRight.push(i);
        if (arrayRight.length === paginationElem - 1) {
            break;
        }
    }

    function renderLink(num) {
        let rnum = Math.round(num);
        let newSkip = skipQty * rnum;
        if (newSkip >= count) {
            newSkip = count - 1;
        }
        return (
            <Link key={rnum}
                  to={location.pathname + location.search.replace(currentSkip, "skip=" + newSkip)}
            >{rnum}</Link>
        )
    }


    return (
        <div id="pagination">
            <span style={{fontSize: 20 + 'px'}} >{currentPage !== 1 && renderLink(1)}</span>
            {currentPage > paginationElem + 1 && <b> ... </b>}
            <span style={{fontSize: 40 + 'px'}} >{arrayLeft.map((num) => renderLink(num))}</span>
            <span style={{fontSize: 60 + 'px'}} >{renderLink(currentPage)}</span>
            <span style={{fontSize: 40 + 'px'}} >{arrayRight.map((num) => renderLink(num))}</span>
            {lastPage - currentPage > paginationElem && <b> ... </b>}
            <span style={{fontSize: 20 + 'px'}} >{lastPage !== 0 && lastPage !== 1 && lastPage !== currentPage && renderLink(lastPage)}</span>
        </div>
    )
}
export {ModelPagination};

/**
 * {this.state.currentPage !== 1 &&
 *                     <a href="#" className="">
 *                         <span className="text-style-pagination text-inside-btn">1</span>
 *                     </a>
 *                 }
 *                 {this.state.left2 > 2 &&
 *                     <a href="#" className="">
 *                         <span className="text-style-pagination text-color-dark50 text-inside-btn">...</span>
 *                     </a>
 *                 }
 *                 {arrayLeft.map((num) => <a href="#" className="">
 *                         <span className="text-style-pagination text-color-dark50 text-inside-btn">{num}</span>
 *                     </a>
 *                 )}
 *                 <a href="#" className="current-page">
 *                     <span
 *                         className="text-style-pagination text-color-white text-inside-btn">{this.state.currentPage}</span>
 *                 </a>
 *                 {arrayRight.map((num) => <a href="#" className="">
 *                         <span className="text-style-pagination text-color-dark50 text-inside-btn">{num}</span>
 *                     </a>
 *                 )}
 *                 {this.state.right2 > 2 &&
 *                     <a href="#" className="">
 *                         <span className="text-style-pagination text-color-dark50 text-inside-btn">...</span>
 *                     </a>
 *                 }
 *                 {this.state.lastPage !== 1 && this.state.lastPage !== this.state.currentPage &&
 *                     <a href="#" className="">
 *                         <span className="text-style-pagination text-color-white text-inside-btn">1</span>
 *                     </a>
 *                 }
 */