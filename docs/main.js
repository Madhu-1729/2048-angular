(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\game_2048\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'game_2048';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%]{ padding: 0px; margin: 0px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsWUFBWSxFQUFFLFdBQVcsRUFBRSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7IHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7IH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "jBAD":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["hiddenInput"];
function GameComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("box X_", box_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r3.getColor(box_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", box_r4 == 0 ? "" : box_r4, " ");
} }
function GameComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_11_div_1_Template, 2, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
class GameComponent {
    constructor() {
        this.board = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        this.board2 = [];
        // public board = [
        //   [256, 512, 1204, 2048],
        //   [4, 8, 4, 32],
        //   [2, 4, 16, 64],
        //   [2, 2, 8, 16]
        // ];
        this.tempBoard = [];
        this.score = 0;
        this.gameOver = false;
    }
    ngOnInit() {
        // this.getRandom();
        // this.getRandom();
        var myOptions = {
            touchAction: 'auto',
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_ALL }],
            ]
        };
        let _self = this;
        let ele = document.getElementById('container');
        var hammertime = new Hammer(ele, myOptions);
        _self.board2 = JSON.parse(JSON.stringify(this.board));
        if (!_self.gameOver) {
            hammertime.on('swipeleft', () => { _self.moveLeft(); });
            hammertime.on('swiperight', () => { _self.moveRight(); });
            hammertime.on('swipeup', () => { _self.moveUp(); });
            hammertime.on('swipedown', () => { _self.movedown(); });
        }
        if (_self.isGameOver(this.board)) {
            _self.gameOver = true;
            alert("Shit! Game is Over. Better luck next time");
        }
    }
    onKeyDown(event) {
        // console.table(this.board);
        this.board2 = JSON.parse(JSON.stringify(this.board));
        if (!this.gameOver) {
            if (event.key === 'ArrowUp') {
                console.log('Arrow Up pressed');
                this.moveUp();
            }
            else if (event.key === 'ArrowDown') {
                console.log('Arrow Down pressed');
                this.movedown();
            }
            else if (event.key === 'ArrowLeft') {
                console.log('Arrow Left pressed');
                this.moveLeft();
            }
            else if (event.key === 'ArrowRight') {
                console.log('Arrow Right pressed');
                this.moveRight();
            }
        }
        if (this.isGameOver(this.board)) {
            this.gameOver = true;
            alert("Shit! Game is Over. Better luck next time");
        }
    }
    onSwipe(event) {
        event.preventDefault();
    }
    movedown() {
        let tempArray = JSON.parse(JSON.stringify(this.board));
        for (let i = 0; i < this.board.length; i++) {
            let dArray = [];
            dArray.push(this.board[3][i]);
            dArray.push(this.board[2][i]);
            dArray.push(this.board[1][i]);
            dArray.push(this.board[0][i]);
            let it = this.reorderRow1(JSON.parse(JSON.stringify(dArray)));
            this.board[3][i] = it[0];
            this.board[2][i] = it[1];
            this.board[1][i] = it[2];
            this.board[0][i] = it[3];
        }
        if (!this.arraysEqual(tempArray, this.board)) {
            this.getRandom();
        }
    }
    moveUp() {
        let tempArray = JSON.parse(JSON.stringify(this.board));
        for (let i = 0; i < this.board.length; i++) {
            let dArray = [];
            dArray.push(this.board[0][i]);
            dArray.push(this.board[1][i]);
            dArray.push(this.board[2][i]);
            dArray.push(this.board[3][i]);
            let it = this.reorderRow1(JSON.parse(JSON.stringify(dArray)));
            this.board[0][i] = it[0];
            this.board[1][i] = it[1];
            this.board[2][i] = it[2];
            this.board[3][i] = it[3];
        }
        if (!this.arraysEqual(tempArray, this.board)) {
            this.getRandom();
        }
    }
    moveRight() {
        let tempArray = JSON.parse(JSON.stringify(this.board));
        for (let i = 0; i < this.board.length; i++) {
            let it = this.reorderRow1(JSON.parse(JSON.stringify(this.board[i].reverse())));
            this.board[i] = it.reverse();
        }
        if (!this.arraysEqual(tempArray, this.board)) {
            this.getRandom();
        }
    }
    moveLeft() {
        let tempArray = JSON.parse(JSON.stringify(this.board));
        for (let i = 0; i < this.board.length; i++) {
            this.reorderRow(this.board[i]);
        }
        if (!this.arraysEqual(tempArray, this.board)) {
            this.getRandom();
        }
    }
    reorderRow1(row) {
        if (!row.every((value) => value == 0)) {
            for (let i = 0; i < row.length; i++) {
                if (row[i] != 0) {
                    for (let p = i + 1; p < row.length; p++) {
                        if (row[p] == 0) {
                        }
                        else if (row[p] == row[i]) {
                            row[i] *= 2;
                            this.score = this.score + row[i];
                            row[p] = 0;
                        }
                        else {
                            i = p;
                        }
                    }
                }
            }
            let j = 0;
            let index = 0;
            while (j < 4) {
                if (row[index] == 0) {
                    let item = row.splice(index, 1)[0];
                    row.push(item);
                }
                else {
                    index++;
                }
                j++;
            }
        }
        return row;
    }
    reorderRow(row) {
        if (!row.every((value) => value == 0)) {
            for (let i = 0; i < row.length; i++) {
                if (row[i] != 0) {
                    for (let p = i + 1; p < row.length; p++) {
                        if (row[p] == 0) {
                        }
                        else if (row[p] == row[i]) {
                            row[i] *= 2;
                            this.score = this.score + row[i];
                            row[p] = 0;
                        }
                        else {
                            i = p;
                        }
                    }
                }
            }
            let j = 0;
            let index = 0;
            while (j < 4) {
                if (row[index] == 0) {
                    let item = row.splice(index, 1)[0];
                    row.push(item);
                }
                else {
                    index++;
                }
                j++;
            }
        }
    }
    ngAfterViewInit() {
        this.hiddenInputRef.nativeElement.focus();
    }
    getRandom() {
        let emptyBox = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] == 0) {
                    emptyBox.push(i + '*' + j);
                }
            }
        }
        let boxRandom = Math.floor(Math.random() * emptyBox.length);
        this.board[emptyBox[boxRandom].split('*')[0]][emptyBox[boxRandom].split('*')[1]] = 2;
    }
    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = 0; i < arr1.length; i++) {
            if (!arr1[i].every((value, index) => value === arr2[i][index])) {
                return false;
            }
        }
        return true;
    }
    getColor(value) {
        // Map each value to a specific color
        switch (value) {
            case 0:
                return 'rgba(238,228,218,.35)';
            case 2:
                return '#eee4da';
            case 4:
                return '#ede0c8';
            case 8:
                return '#f2b179';
            case 16:
                return '#f59563';
            case 32:
                return '#f67c5f';
            case 64:
                return '#f65e3b';
            case 128:
                return 'red';
            case 256:
                return 'blue';
            case 512:
                return 'green';
            case 1024:
                return 'yellow';
            case 2048:
                return 'orange';
            default:
                return 'black';
        }
    }
    // onSwipe(e){
    //   console.log(e)
    // }
    isGameOver(board) {
        // return false
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] == 0) {
                    return false;
                }
            }
        }
        for (let a = 0; a < board.length; a++) {
            for (let b = a; b < board.length; b++) {
                if (board[a][b] == 0) {
                    return false;
                }
                if (b < 3 && board[a][b] == board[a][b + 1]) {
                    return false;
                }
                if (a < 3 && board[a][b] == board[a + 1][b]) {
                    return false;
                }
            }
        }
        return true;
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hiddenInputRef = _t.first);
    } }, hostBindings: function GameComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function GameComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("swipe", function GameComponent_swipe_HostBindingHandler($event) { return ctx.onSwipe($event); });
    } }, decls: 12, vars: 2, consts: [["id", "container", 1, "container"], ["type", "text", "autofocus", "", 2, "visibility", "hidden", 3, "keydown"], ["hiddenInput", ""], [1, "container-secondary"], [1, "title"], [1, "score"], [1, "border"], ["class", "board_main", 4, "ngFor", "ngForOf"], [1, "board_main"], [3, "class", "background", 4, "ngFor", "ngForOf"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function GameComponent_Template_input_keydown_1_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "_2048_");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    color: #fff;\r\n    font-family: \"Cabin Sketch\";\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-family: \"Akaya Telivigala\"; \r\n    font-size: 25px;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\r\n    background: #414040;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n    padding: 4px;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 16px 7px rgba(0,0,0,0.7);\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   .board_main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: \"Chela One\";\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   .board_main[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n    background-color: antiquewhite;\r\n    margin: 3px;\r\n    height: 40px;\r\n    width: 40px;\r\n    transition: background-color 0.5s, color 0.5s;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 50px;\r\n    animation: slideIn 1s;\r\n    border-radius: 4px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   .board_main[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    animation: dataChangeAnimation 0.5s;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%] {\r\n    transition: all 1s;\r\n  }\r\n  \r\n  \r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   .board_main[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px) {\r\n    .container[_ngcontent-%COMP%]   .container-secondary[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   .board_main[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n      font-size: 30px;\r\n      width: 20px; height: 30px;\r\n    }\r\n  }\r\n  \r\n  .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    animation: titleAnimation 1.5s infinite alternate;\r\n  }\r\n  \r\n  @keyframes titleAnimation {\r\n    0% {\r\n      transform: scale(0.8);\r\n    }\r\n    100% {\r\n      transform: scale(1.2);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBR2xCLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBLHdDQUF3Qzs7RUFFeEM7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsZUFBZTtNQUNmLFdBQVcsRUFBRSxZQUFZO0lBQzNCO0VBQ0Y7O0VBR0E7SUFDRSxpREFBaUQ7RUFDbkQ7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCO0VBQ0YiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXNlY29uZGFyeSAudGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWJpbiBTa2V0Y2hcIjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXNlY29uZGFyeSAudGl0bGUgaDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1zZWNvbmRhcnkgLnNjb3JlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQWtheWEgVGVsaXZpZ2FsYVwiOyBcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXNlY29uZGFyeSAuYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MTQwNDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxNnB4IDdweCByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMTZweCA3cHggcmdiYSgwLDAsMCwwLjcpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxNnB4IDdweCByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1zZWNvbmRhcnkgLmJvcmRlciAuYm9hcmRfbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2hlbGEgT25lXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1zZWNvbmRhcnkgLmJvcmRlciAuYm9hcmRfbWFpbiAuYm94IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzLCBjb2xvciAwLjVzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1zZWNvbmRhcnkgLmJvcmRlciAuYm9hcmRfbWFpbiAuYm94IHtcclxuICAgIGFuaW1hdGlvbjogZGF0YUNoYW5nZUFuaW1hdGlvbiAwLjVzO1xyXG4gIH1cclxuICBcclxuICBkaXYge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBNZWRpYSBRdWVyaWVzIGZvciBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIC5jb250YWluZXItc2Vjb25kYXJ5IC5ib3JkZXIgLmJvYXJkX21haW4gLmJveCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250YWluZXIgLmNvbnRhaW5lci1zZWNvbmRhcnkgLmJvcmRlciAuYm9hcmRfbWFpbiAuYm94IHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB3aWR0aDogMjBweDsgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgLnRpdGxlIGgxIHtcclxuICAgIGFuaW1hdGlvbjogdGl0bGVBbmltYXRpb24gMS41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgdGl0bGVBbmltYXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map