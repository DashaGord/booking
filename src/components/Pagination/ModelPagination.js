import React, {Component} from 'react';

export default class ModelPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,       //Суммарное кол-во элементов
            skip: 0,        //текущая страница
            skipQty: 12,    //сколько вообще страниц
            lastPage: 0,
            currentPage: 0,
            left2: 0,
            right2: 0
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const state = this.state;
        if (state.count !== prevState.count) {
            state.lastPage = Math.ceil(state.count / state.skipQty);
            state.currentPage = state.skip / state.skipQty;
            state.left2 = state.currentPage - 2;
            state.right2 = state.lastPage - state.currentPage - 1;
            this.forceUpdate();
        }
    }

    render() {
        const arrayLeft = [];
        for (let i = -1; i <= this.state.left2; i++) {
            arrayLeft.push(this.state.currentPage + i);
        }
        const arrayRight = [];
        for (let i = 0; i <= this.state.right2; i++) {
            arrayRight.push(this.state.currentPage + i);
            if (arrayRight.length === 2) {
                break;
            }
        }

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

        return (
            <div>
                {this.state.currentPage !== 1 && <b> 1 </b>}
                {this.state.left2 > 2 && <b> ... </b>}
                {arrayLeft.map((num) => <b> {num} </b>)}
                <b> {this.state.currentPage} </b>
                {arrayRight.map((num) => <b> {num} </b>)}
                {this.state.right2 > 2 && <b> ... </b>}
                {this.state.lastPage !== 1 && this.state.lastPage !== this.state.currentPage && <b> {this.state.lastPage} </b>}
            </div>
        )
    }
}

