/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/air-datepicker/air-datepicker.js":
/*!*******************************************************!*\
  !*** ./node_modules/air-datepicker/air-datepicker.js ***!
  \*******************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(){"use strict";var e={d:function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return R}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,fixedHeight:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?t.querySelector(e):e}function n(){let{tagName:e="div",className:t="",innerHtml:i="",id:s="",attrs:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement(e);return t&&n.classList.add(...t.split(" ")),s&&(n.id=s),i&&(n.innerHTML=i),a&&r(n,a),n}function r(e,t){for(let[i,s]of Object.entries(t))void 0!==s&&e.setAttribute(i,s);return e}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function h(e){let t=e.getHours(),{hours:i,dayPeriod:s}=l(t);return{year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:d(t),hours12:i,dayPeriod:s,fullHours12:d(i),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return{dayPeriod:e>11?"pm":"am",hours:e%12==0?12:e%12}}function d(e){return e<10?"0"+e:e}function c(e){let t=10*Math.floor(e.getFullYear()/10);return[t,t+9]}function u(){let e=[];for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return i.forEach((t=>{if("object"==typeof t)for(let i in t)t[i]&&e.push(i);else t&&e.push(t)})),e.join(" ")}function p(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.days;if(!e||!t)return!1;let a=h(e),n=h(t);return{[i.days]:a.date===n.date&&a.month===n.month&&a.year===n.year,[i.months]:a.month===n.month&&a.year===n.year,[i.years]:a.year===n.year}[s]}function m(e,t,i){let s=g(e,!1).getTime(),a=g(t,!1).getTime();return i?s>=a:s>a}function v(e,t){return!m(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=new Date(e.getTime());return"boolean"!=typeof t||t||function(e){e.setHours(0,0,0,0)}(i),i}function D(e,t,i){e.length?e.forEach((e=>{e.addEventListener(t,i)})):e.addEventListener(t,i)}function y(e,t){return!(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:y(e.parentNode,t))}function f(e,t,i){return e>i?i:e<t?t:e}function w(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return i.filter((e=>e)).forEach((t=>{for(let[i,s]of Object.entries(t))if(void 0!==s&&"[object Object]"===s.toString()){let t=void 0!==e[i]?e[i].toString():void 0,a=s.toString(),n=Array.isArray(s)?[]:{};e[i]=e[i]?t!==a?n:e[i]:n,w(e[i],s)}else e[i]=s})),e}function b(e){let t=e;return e instanceof Date||("string"==typeof e&&/^\d{4}-\d{2}-\d{2}$/.test(e)&&(e+="T00:00:00"),t=new Date(e)),isNaN(t.getTime())&&(console.log(`Unable to convert value "${e}" to Date object`),t=!1),t}function k(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function $(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class C{constructor(){let{type:e,date:t,dp:i,opts:s,body:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0})),$(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1})),$(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0})),$(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1})),$(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())})),$(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=p(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()})),$(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this._handleClasses(),this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=i,this.opts=s,this.body=a,this.customData=!1,this.init()}init(){var e;let{onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),null!==(e=this.customData)&&void 0!==e&&e.disabled&&this.dp.disableDate(this.date)}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){var e;let{year:t,month:i,date:s}=h(this.date),a=(null===(e=this.customData)||void 0===e?void 0:e.attrs)||{};this.$cell=n({attrs:{"data-year":t,"data-month":i,"data-date":s,...a}}),this.$cell.adpCell=this}_getClassName(){var e;let t=new Date,{selectOtherMonths:s,selectOtherYears:a}=this.opts,{minDate:n,maxDate:r,isDateDisabled:o}=this.dp,{day:l}=h(this.date),d=this._isOutOfMinMaxRange(),c=o(this.date),m=u("air-datepicker-cell",`-${this.singleType}-`,{"-current-":p(t,this.date,this.type),"-min-date-":n&&p(n,this.date,this.type),"-max-date-":r&&p(r,this.date,this.type)}),v="";switch(this.type){case i.days:v=u({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!s||d||c});break;case i.months:v=u({"-disabled-":d});break;case i.years:v=u({"-other-decade-":this.isOtherDecade,"-disabled-":d||this.isOtherDecade&&!a})}return u(m,v,null===(e=this.customData)||void 0===e?void 0:e.classes).split(" ")}_getHtml(){var e;let{year:t,month:s,date:a}=h(this.date),{showOtherMonths:n,showOtherYears:r}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case i.days:return!n&&this.isOtherMonth?"":a;case i.months:return this.dp.locale[this.opts.monthsField][s];case i.years:return!r&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:s,date:a}=this,{month:n,year:r,date:o}=h(a),l=s===i.days,d=s===i.years,c=!!e&&new Date(r,d?e.getMonth():n,l?o:e.getDate()),u=!!t&&new Date(r,d?t.getMonth():n,l?o:t.getDate());return e&&t?v(c,e)||m(u,t):e?v(c,e):t?m(u,t):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){const{selectedDates:e,focusDate:t,rangeDateTo:i,rangeDateFrom:s}=this.dp,a=e.length;if(!a)return;let n=s,r=i;if(1===a&&t){const i=m(t,e[0]);n=i?e[0]:t,r=i?t:e[0]}let o=u({"-in-range-":n&&r&&(h=this.date,l=n,d=r,m(h,l)&&v(h,d)),"-range-from-":n&&p(this.date,n,this.type),"-range-to-":r&&p(this.date,r,this.type)});var h,l,d;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),o&&this.$cell.classList.add(...o.split(" "))}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){p(this.dp.focusDate,this.date,this.type)&&this.focus()}_handleClasses(){this.$cell.setAttribute("class",""),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),this.dp.opts.range&&this._handleRangeStatus()),this.$cell.classList.add(...this._getClassName())}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function _(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let M={[i.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,[i.months]:`<div class="air-datepicker-body--cells -${i.months}-"></div>`,[i.years]:`<div class="air-datepicker-body--cells -${i.years}-"></div>`};const S=".air-datepicker-cell";class T{constructor(e){let{dp:t,type:s,opts:a}=e;_(this,"handleClick",(e=>{let t=e.target.closest(S).adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let i=this.dp._checkIfDateIsSelected(t.date,t.type);i?this.dp._handleAlreadySelectedDates(i,t.date):this.dp.selectDate(t.date)})),_(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp})})),_(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render())})),_(this,"onMouseOverCell",(e=>{let t=y(e.target,S);this.dp.setFocusDate(!!t&&t.adpCell.date)})),_(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1)})),_(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,i=e.target;i.closest(S)&&this.handleClick(e),t&&i.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e)})),_(this,"onMouseDown",(e=>{this.pressed=!0;let t=y(e.target,S),i=t&&t.adpCell;p(i.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),p(i.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)})),_(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=y(e.target,S),i=t&&t.adpCell,{selectedDates:s,rangeDateTo:a,rangeDateFrom:n}=this.dp;if(!i||i.isDisabled)return;let{date:r}=i;if(2===s.length){if(this.rangeFromFocused&&!m(r,a)){let{hours:e,minutes:t}=h(n);r.setHours(e),r.setMinutes(t),this.dp.rangeDateFrom=r,this.dp.replaceDate(n,r)}if(this.rangeToFocused&&!v(r,n)){let{hours:e,minutes:t}=h(a);r.setHours(e),r.setMinutes(t),this.dp.rangeDateTo=r,this.dp.replaceDate(a,r)}}})),_(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1})),_(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let s=c(e),a=c(t);switch(this.dp.currentView){case i.days:if(p(e,t,i.months))return;break;case i.months:if(p(e,t,i.years))return;break;case i.years:if(s[0]===a[0]&&s[1]===a[1])return}this.render()})),_(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render())}))})),this.dp=t,this.type=s,this.opts=a,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;D(this.$el,"mouseover",this.onMouseOverCell),D(this.$el,"mouseout",this.onMouseOutCell),D(this.$el,"click",this.onClickBody),e&&t&&(D(this.$el,"mousedown",this.onMouseDown),D(this.$el,"mousemove",this.onMouseMove),D(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=n({className:`air-datepicker-body -${this.type}-`,innerHtml:M[this.type]}),this.$names=a(".air-datepicker-body--day-names",this.$el),this.$cells=a(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",s=this.dp.isWeekend,{onClickDayName:a}=this.opts,n=e,r=0;for(;r<7;){let e=n%7;t+=`<div class="${u("air-datepicker-body--day-name",{[i.cssClassWeekend]:s(e),"-clickable-":!!a})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`,r++,n++}return t}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCell(e){let{type:t,dp:i,opts:s}=this;return new C({type:t,dp:i,opts:s,date:e,body:this})}_generateCells(){T.getDatesFunction(this.type)(this.dp,(e=>{this.cells.push(this._generateCell(e))}))}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView)}static getDaysDates(e,t){let{viewDate:i,opts:{fixedHeight:s},locale:{firstDay:a}}=e,n=o(i),{year:r,month:l}=h(i),d=new Date(r,l,1),c=new Date(r,l,n),u=d.getDay()-a,p=6-c.getDay()+a;u=u<0?u+7:u,p=p>6?p-7:p;let m=function(e,t){let{year:i,month:s,date:a}=h(e);return new Date(i,s,a-t)}(d,u),v=n+u+p,g=m.getDate(),{year:D,month:y}=h(m),f=0;s&&(v=42);const w=[];for(;f<v;){let e=new Date(D,y,g+f);t&&t(e),w.push(e),f++}return w}static getMonthsDates(e,t){let{year:i}=e.parsedViewDate,s=0,a=[];for(;s<12;){const e=new Date(i,s);a.push(e),t&&t(e),s++}return a}static getYearsDates(e,t){let i=c(e.viewDate),s=i[0]-1,a=i[1]+1,n=s,r=[];for(;n<=a;){const e=new Date(n,0);r.push(e),t&&t(e),n++}return r}static getDatesFunction(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return{[i.days]:T.getDaysDates,[i.months]:T.getMonthsDates,[i.years]:T.getYearsDates}[e]}}function F(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class V{constructor(e){let{dp:t,opts:i}=e;F(this,"onClickNav",(e=>{let t=y(e.target,".air-datepicker-nav--action");if(!t)return;let i=t.dataset.action;this.dp[i]()})),F(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),F(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),F(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up()})),F(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus()})),F(this,"renderDelay",(()=>{setTimeout(this.render)})),F(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let i in t)t[i]?e.classList.add(i):e.classList.remove(i)}(this.$title,{"-disabled-":this.dp.isFinalView})})),this.dp=t,this.opts=i,this.init()}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=a(".air-datepicker-nav--title",this.$el),this.$prev=a('[data-action="prev"]',this.$el),this.$next=a('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render))}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render))}_createElement(){this.$el=n({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:e,opts:t}=this,i=t.navTitles[e.currentView];return"function"==typeof i?i(e):e.formatDate(e.viewDate,i)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:s}=this.dp;if(!t&&!s||!e)return;let{year:a,month:n}=this.dp.parsedViewDate,r=!!t&&h(t),o=!!s&&h(s);switch(this.dp.currentView){case i.days:t&&r.month>=n&&r.year>=a&&this._disableNav("prev"),s&&o.month<=n&&o.year<=a&&this._disableNav("next");break;case i.months:t&&r.year>=a&&this._disableNav("prev"),s&&o.year<=a&&this._disableNav("next");break;case i.years:{let e=c(this.dp.viewDate);t&&r.year>=e[0]&&this._disableNav("prev"),s&&o.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){a('[data-action="'+e+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){!function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];e.length?e.forEach((e=>{e.classList.remove(...i)})):e.classList.remove(...i)}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}}var x={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class H{constructor(e){let{dp:t,opts:i}=e;this.dp=t,this.opts=i,this.init()}init(){this.createElement(),this.render()}createElement(){this.$el=n({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&x[e]&&(t=x[e]);let i=this.createButton(t);t.onClick&&this.attachEventToButton(i,t.onClick),this.$el.appendChild(i)}))}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp)}))}createButton(e){let{content:t,className:i,tagName:s="button",attrs:a={}}=e;return n({tagName:s,innerHtml:`<span tabindex='-1'>${"function"==typeof t?t(this.dp):t}</span>`,className:u("air-datepicker-button",i),attrs:a})}render(){this.generateButtons()}}function E(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class L{constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e})),E(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:i=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!i&&t),this.addTimeToDate(t))})),E(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render())})),E(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes})})),E(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),i=this.$minutesText;"hours"===t&&(i=this.$hoursText),i.classList.toggle("-focus-")})),E(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0)})),E(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1)})),this.opts=e,this.dp=t;let{timeFormat:s}=this.dp.locale;s&&(s.match(k("h"))||s.match(k("hh")))&&(this.ampm=!0),this.init()}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),D(this.$ranges,e,this.onChangeInputRange),D(this.$ranges,"mouseenter",this.onMouseEnterLeave),D(this.$ranges,"mouseleave",this.onMouseEnterLeave),D(this.$ranges,"focus",this.onFocus),D(this.$ranges,"mousedown",this.onFocus),D(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=n({className:u("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:e,hours:t,displayHours:i,minutes:s,minHours:a,minMinutes:n,maxHours:r,maxMinutes:o,dayPeriod:h,opts:{hoursStep:l,minutesStep:c}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   `+(e?`<span class='air-datepicker-time--current-ampm'>${h}</span>`:"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+`      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">`+`      <input type="range" name="minutes" value="${s}" min="${n}" max="${o}" step="${c}"/>   </div></div>`}defineDOM(){let e=e=>a(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm")}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e)}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes))}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:i}=this.dp;t&&p(e,t)&&this.setMinTimeFromMinDate(t),i&&p(e,i)&&this.setMaxTimeFromMaxDate(i)}}setCurrentTime(e){let{hours:t,minutes:i}=e?h(e):this;this.hours=f(t,this.minHours,this.maxHours),this.minutes=f(i,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:i,maxMinutes:s}=this.opts;this.minHours=f(e,0,23),this.minMinutes=f(t,0,59),this.maxHours=f(i,0,23),this.maxMinutes=f(s,0,59)}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes()}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes()}updateSliders(){r(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,r(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=d(this.displayHours),this.$minutesText.innerHTML=d(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(e){this._hours=e;let{hours:t,dayPeriod:i}=l(e);this.displayHours=this.ampm?t:e,this.dayPeriod=i}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}}function O(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class A{constructor(e){let{dp:t,opts:i}=e;O(this,"pressedKeys",new Set),O(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),O(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),i=h(this.getInitialFocusDate());t(i,this.dp);let{year:s,month:a,date:n}=i,r=o(new Date(s,a));r<n&&(n=r);let l=this.dp.getClampedDate(new Date(s,a,n));this.dp.setFocusDate(l,{viewDateTransition:!0})})),O(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,i=e=>this.pressedKeys.has(e);for(let[s]of this.hotKeys){if(e)break;if(Array.isArray(s[0]))s.forEach((a=>{e||t!==a.length||(e=a.every(i)&&s)}));else{if(t!==s.length)continue;e=s.every(i)&&s}}return e})),O(this,"isArrow",(e=>e>=37&&e<=40)),O(this,"onKeyDown",(e=>{let{key:t,which:i}=e,{dp:s,dp:{focusDate:a},opts:n}=this;this.registerKey(t);let r=this.isHotKeyPressed();if(r)return e.preventDefault(),void this.handleHotKey(r);if(this.isArrow(i))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(s.currentView!==n.minView)return void s.down();if(a){let e=s._checkIfDateIsSelected(a);return void(e?s._handleAlreadySelectedDates(e,a):s.selectDate(a))}}"Escape"===t&&this.dp.hide()})),O(this,"onKeyUp",(e=>{this.removeKey(e.key)})),this.dp=t,this.opts=i,this.init()}init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:s,parsedViewDate:{year:a,month:n}}=this.dp,r=e||s[s.length-1];if(!r)switch(t){case i.days:r=new Date(a,n,(new Date).getDate());break;case i.months:r=new Date(a,n,1);break;case i.years:r=new Date(a,0,1)}return r}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:s}=this.dp,{days:a,months:n,years:r}=i,o=h(t),l=o.year,d=o.month,c=o.date;switch(e){case"ArrowLeft":s===a&&(c-=1),s===n&&(d-=1),s===r&&(l-=1);break;case"ArrowUp":s===a&&(c-=7),s===n&&(d-=3),s===r&&(l-=4);break;case"ArrowRight":s===a&&(c+=1),s===n&&(d+=1),s===r&&(l+=1);break;case"ArrowDown":s===a&&(c+=7),s===n&&(d+=3),s===r&&(l+=4)}let u=this.dp.getClampedDate(new Date(l,d,c));this.dp.setFocusDate(u,{viewDateTransition:!0})}registerKey(e){this.pressedKeys.add(e)}removeKey(e){this.pressedKeys.delete(e)}}let N={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t]},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)))},removeAllEvents(){this.__events={}},trigger(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...i)}))}};function I(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let P="",j="",B=!1;class R{static buildGlobalContainer(e){B=!0,P=n({className:e,id:e}),a("body").appendChild(P)}constructor(e,t){var r=this;if(I(this,"viewIndexes",[i.days,i.months,i.years]),I(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t+1,1));break;case i.months:this.setViewDate(new Date(e+1,t,1));break;case i.years:this.setViewDate(new Date(e+10,0,1))}})),I(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t-1,1));break;case i.months:this.setViewDate(new Date(e-1,t,1));break;case i.years:this.setViewDate(new Date(e-10,0,1))}})),I(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)})),I(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||r.opts.position))return void(r.customHide=e({$datepicker:r.$datepicker,$target:r.$el,$pointer:r.$pointer,isViewChange:t,done:r._finishHide}));let i,s,{isMobile:a}=r.opts,n=r.$el.getBoundingClientRect(),o=r.$el.getBoundingClientRect(),h=r.$datepicker.offsetParent,l=r.$el.offsetParent,d=r.$datepicker.getBoundingClientRect(),c=e.split(" "),u=window.scrollY,p=window.scrollX,m=r.opts.offset,v=c[0],g=c[1];if(a)r.$datepicker.style.cssText="left: 50%; top: 50%";else{if(h===l&&h!==document.body&&(o={top:r.$el.offsetTop,left:r.$el.offsetLeft,width:n.width,height:r.$el.offsetHeight},u=0,p=0),h!==l&&h!==document.body){let e=h.getBoundingClientRect();o={top:n.top-e.top,left:n.left-e.left,width:n.width,height:n.height},u=0,p=0}switch(v){case"top":i=o.top-d.height-m;break;case"right":s=o.left+o.width+m;break;case"bottom":i=o.top+o.height+m;break;case"left":s=o.left-d.width-m}switch(g){case"top":i=o.top;break;case"right":s=o.left+o.width-d.width;break;case"bottom":i=o.top+o.height-d.height;break;case"left":s=o.left;break;case"center":/left|right/.test(v)?i=o.top+o.height/2-d.height/2:s=o.left+o.width/2-d.width/2}r.$datepicker.style.cssText=`left: ${s+p}px; top: ${i+u}px`}})),I(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:i}}=this,{altFieldDateFormat:s,altField:a}=e;a&&t&&(t.value=this._getInputValue(s)),this.$el.value=this._getInputValue(i)})),I(this,"_getInputValue",(e=>{let{selectedDates:t,opts:i}=this,{multipleDates:s,multipleDatesSeparator:a}=i;if(!t.length)return"";let n="function"==typeof e,r=n?e(s?t:t[0]):t.map((t=>this.formatDate(t,e)));return r=n?r:r.join(a),r})),I(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.days,s=!1;return r.selectedDates.some((i=>{let a=p(e,i,t);return s=a&&i,a})),s})),I(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})})),I(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)})),I(this,"setViewDate",(e=>{if(!((e=b(e))instanceof Date))return;if(p(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:s}=this.opts;if(s){let{month:e,year:t}=this.parsedViewDate;s({month:e,year:t,decade:this.curDecade})}this.trigger(i.eventChangeViewDate,e,t)})),I(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=b(e))instanceof Date)&&(r.focusDate=e,r.trigger(i.eventChangeFocusDate,e,t))})),I(this,"setCurrentView",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r.viewIndexes.includes(e)){if(r.currentView=e,r.elIsInput&&r.visible&&r.setPosition(void 0,!0),r.trigger(i.eventChangeCurrentView,e),!r.views[e]){let t=r.views[e]=new T({dp:r,opts:r.opts,type:e});r.shouldUpdateDOM&&r.$content.appendChild(t.$el)}r.opts.onChangeView&&!t.silent&&r.opts.onChangeView(e)}})),I(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(i.eventChangeLastSelectedDate,e)})),I(this,"destroy",(()=>{let{showEvent:e,isMobile:t}=this.opts,i=this.$datepicker.parentNode;i&&i.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null})),I(this,"update",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=w({},r.opts),{silent:a}=t;w(r.opts,e);let{timepicker:n,buttons:o,range:h,selectedDates:l,isMobile:d}=r.opts,c=r.visible||r.treatAsInline;r._createMinMaxDates(),r._limitViewDateByMaxMinDates(),r._handleLocale(),l&&(r.selectedDates=[],r.selectDate(l,{silent:a})),e.view&&r.setCurrentView(e.view,{silent:a}),r._setInputValue(),s.range&&!h?(r.rangeDateTo=!1,r.rangeDateFrom=!1):!s.range&&h&&r.selectedDates.length&&(r.rangeDateFrom=r.selectedDates[0],r.rangeDateTo=r.selectedDates[1]),s.timepicker&&!n?(c&&r.timepicker.destroy(),r.timepicker=!1,r.$timepicker.parentNode.removeChild(r.$timepicker)):!s.timepicker&&n&&r._addTimepicker(),!s.buttons&&o?r._addButtons():s.buttons&&!o?(r.buttons.destroy(),r.$buttons.parentNode.removeChild(r.$buttons)):c&&s.buttons&&o&&r.buttons.clearHtml().render(),!s.isMobile&&d?(r.treatAsInline||j||r._createMobileOverlay(),r._addMobileAttributes(),r.visible&&r._showMobileOverlay()):s.isMobile&&!d&&(r._removeMobileAttributes(),r.visible&&(j.classList.remove("-active-"),"function"!=typeof r.opts.position&&r.setPosition())),c&&(r.nav.update(),r.views[r.currentView].render(),r.currentView===i.days&&r.views[r.currentView].renderDayNames())})),I(this,"disableDate",((e,t)=>{(Array.isArray(e)?e:[e]).forEach((e=>{let i=b(e);if(!i)return;let s=t?"delete":"add";this.disabledDates[s](this.formatDate(i,"yyyy-MM-dd"));let a=this.getCell(i,this.currentViewSingular);a&&a.adpCell.render()}),[])})),I(this,"enableDate",(e=>{this.disableDate(e,!0)})),I(this,"isDateDisabled",(e=>{let t=b(e);return this.disabledDates.has(this.formatDate(t,"yyyy-MM-dd"))})),I(this,"isOtherMonth",(e=>{let{month:t}=h(e);return t!==this.parsedViewDate.month})),I(this,"isOtherYear",(e=>{let{year:t}=h(e);return t!==this.parsedViewDate.year})),I(this,"isOtherDecade",(e=>{let{year:t}=h(e),[i,s]=c(this.viewDate);return t<i||t>s})),I(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect()}))})),I(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let i=!1;t&&(i=r.isOtherMonth(e)||r.isOtherYear(e)||r.isOtherDecade(e)),i&&r.setViewDate(e),r.opts.onFocus&&r.opts.onFocus({datepicker:r,date:e})})),I(this,"_onChangeTime",(e=>{let{hours:t,minutes:i}=e,s=new Date,{lastSelectedDate:a,opts:{onSelect:n}}=this,r=a;a||(r=s);let o=this.getCell(r,this.currentViewSingular),h=o&&o.adpCell;h&&h.isDisabled||(r.setHours(t),r.setMinutes(i),a?(this._setInputValue(),n&&this._triggerOnSelect()):this.selectDate(r))})),I(this,"_onFocus",(e=>{this.visible||this.show()})),I(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()})),I(this,"_onMouseDown",(e=>{this.inFocus=!0})),I(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus()})),I(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition()})),I(this,"_onClickOverlay",(()=>{this.visible&&this.hide()})),I(this,"getViewDates",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return T.getDatesFunction(e)(r)})),I(this,"isWeekend",(e=>this.opts.weekends.includes(e))),I(this,"getClampedDate",(e=>{let{minDate:t,maxDate:i}=this,s=e;return i&&m(e,i)?s=i:t&&v(e,t)&&(s=t),s})),this.$el=a(e),!this.$el)return;this.$datepicker=n({className:"air-datepicker"}),this.opts=w({},s,t),this.$customContainer=!!this.opts.container&&a(this.opts.container),this.$altField=a(this.opts.altField||!1);let{view:o,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=b(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=o,this.selectedDates=[],this.disabledDates=new Set,this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}init(){let{opts:e,treatAsInline:t,opts:{inline:i,isMobile:s,selectedDates:n,keyboardNav:r,onlyTimepicker:o}}=this,h=a("body");(!B||B&&P&&!h.contains(P))&&!i&&this.elIsInput&&!this.$customContainer&&R.buildGlobalContainer(R.defaultGlobalContainerId),!s||j||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(i||this._bindEvents(),r&&!o&&(this.keyboardNav=new A({dp:this,opts:e}))),n&&this.selectDate(n,{silent:!0}),this.opts.visible&&!t&&this.show(),s&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents()}_createMobileOverlay(){j=n({className:"air-datepicker-overlay"}),P.appendChild(j)}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:i,buttons:s,timepicker:a,position:n,classes:r,onlyTimepicker:o,isMobile:h}}=this;this._buildBaseHtml(),this.elIsInput&&(i||this._setPositionClasses(n)),!i&&this.elIsInput||this.$datepicker.classList.add("-inline-"),r&&this.$datepicker.classList.add(...r.split(" ")),o&&this.$datepicker.classList.add("-only-timepicker-"),h&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new T({dp:this,type:this.currentView,opts:e}),this.nav=new V({dp:this,opts:e}),a&&this._addTimepicker(),s&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){j.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){j.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&b(e),this.maxDate=!!t&&b(t)}_addTimepicker(){this.$timepicker=n({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new L({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=n({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new H({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:e}=this.opts;var t,i;this.elIsInput?e?(t=this.$datepicker,(i=this.$el).parentNode.insertBefore(t,i.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=a(".air-datepicker--content",this.$datepicker),this.$pointer=a(".air-datepicker--pointer",this.$datepicker),this.$nav=a(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:e,dateFormat:t,firstDay:i,timepicker:s,onlyTimepicker:a,timeFormat:n,dateTimeSeparator:r}=this.opts;var o;this.locale=(o=e,JSON.parse(JSON.stringify(o))),t&&(this.locale.dateFormat=t),void 0!==n&&""!==n&&(this.locale.timeFormat=n);let{timeFormat:h}=this.locale;if(""!==i&&(this.locale.firstDay=i),s&&"function"!=typeof t){let e=h?r:"";this.locale.dateFormat=[this.locale.dateFormat,h||""].join(e)}a&&"function"!=typeof t&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],i=`air-datepicker -${t}-${e[1]}- -from-${t}-`;this.$datepicker.classList.add(...i.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:i}=this;i&&m(e,i)&&this.setViewDate(i),t&&v(e,t)&&this.setViewDate(t)}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=b(e),!(e instanceof Date))return;let i=t,s=this.locale,a=h(e),n=a.dayPeriod,r=c(e),o=R.replacer,l={T:e.getTime(),m:a.minutes,mm:a.fullMinutes,h:a.hours12,hh:a.fullHours12,H:a.hours,HH:a.fullHours,aa:n,AA:n.toUpperCase(),E:s.daysShort[a.day],EEEE:s.days[a.day],d:a.date,dd:a.fullDate,M:a.month+1,MM:a.fullMonth,MMM:s.monthsShort[a.month],MMMM:s.months[a.month],yy:a.year.toString().slice(-2),yyyy:a.year,yyyy1:r[0],yyyy2:r[1]};for(let[e,t]of Object.entries(l))i=o(i,k(e),t);return i}down(e){this._handleUpDownActions(e,"down")}up(e){this._handleUpDownActions(e,"up")}selectDate(e){let t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:a,parsedViewDate:n,selectedDates:r}=this,{updateTime:o}=s,{moveToOtherMonthsOnSelect:h,moveToOtherYearsOnSelect:l,multipleDates:d,range:c,autoClose:u,onBeforeSelect:p}=this.opts,v=r.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,s)})),new Promise((e=>{setTimeout(e)}));if((e=b(e))instanceof Date){if(p&&!p({date:e,datepicker:this}))return Promise.resolve();if(a===i.days&&e.getMonth()!==n.month&&h&&(t=new Date(e.getFullYear(),e.getMonth(),1)),a===i.years&&e.getFullYear()!==n.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),d&&!c){if(v===d)return;this._checkIfDateIsSelected(e)||r.push(e)}else if(c)switch(v){case 1:r.push(e),this.rangeDateTo||(this.rangeDateTo=e),m(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e}else this.selectedDates=[e];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:null==s?void 0:s.silent,date:e,updateTime:o}),this._updateLastSelectedDate(e),u&&!this.timepickerIsActive&&this.visible&&(d||c?c&&1===v&&this.hide():this.hide()),new Promise((e=>{setTimeout(e)}))}}unselectDate(e){let t=this.selectedDates,s=this;if((e=b(e))instanceof Date)return t.some(((a,n)=>{if(p(a,e))return t.splice(n,1),s.selectedDates.length?s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length-1]):(s.rangeDateFrom="",s.rangeDateTo="",s._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let s=this.selectedDates.find((t=>p(t,e,this.currentView))),a=this.selectedDates.indexOf(s);a<0||p(this.selectedDates[a],t,this.currentView)||(this.selectedDates[a]=t,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.lastSelectedDate=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e)}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay()}hide(){let{onHide:e,isMobile:t}=this.opts,i=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&i||!t&&!i)&&this._finishHide(),e&&e(t)})),t&&j.classList.remove("-active-")}_triggerOnSelect(){let e=[],t=[],{selectedDates:i,locale:s,opts:{onSelect:a,multipleDates:n,range:r}}=this,o=n||r,h="function"==typeof s.dateFormat;i.length&&(e=i.map(g),t=h?n?s.dateFormat(e):e.map((e=>s.dateFormat(e))):e.map((e=>this.formatDate(e,s.dateFormat)))),a({date:o?e:e[0],formattedDate:o?t:t[0],datepicker:this})}_handleAlreadySelectedDates(e,t){let{selectedDates:i,rangeDateFrom:s,rangeDateTo:a}=this,{range:n,toggleSelected:r}=this.opts,o=i.length,h="function"==typeof r?r({datepicker:this,date:t}):r,l=Boolean(n&&1===o&&e),d=l?g(t):t;n&&!h&&(2!==o&&this.selectDate(d),2===o&&p(s,a))||(h?this.unselectDate(d):this._updateLastSelectedDate(l?d:e))}_handleUpDownActions(e,t){if(!((e=b(e||this.focusDate||this.viewDate))instanceof Date))return;let i="up"===t?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),i<0&&(i=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[i])}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.day;if(!((e=b(e))instanceof Date))return;let{year:s,month:a,date:n}=h(e),r=`[data-year="${s}"]`,o=`[data-month="${a}"]`,l={[i.day]:`${r}${o}[data-date="${n}"]`,[i.month]:`${r}${o}`,[i.year]:`${r}`};return this.views[this.currentView]?this.views[this.currentView].$el.querySelector(l[t]):void 0}_showMobileOverlay(){j.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return h(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return c(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||P}static replacer(e,t,i){return e.replace(t,(function(e,t,s,a){return t+i+a}))}}var K;return I(R,"defaults",s),I(R,"version","3.5.0"),I(R,"defaultGlobalContainerId","air-datepicker-global-container"),K=R.prototype,Object.assign(K,N),t.default}()}));

/***/ }),

/***/ "./node_modules/air-datepicker/index.es.js":
/*!*************************************************!*\
  !*** ./node_modules/air-datepicker/index.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./air-datepicker */ "./node_modules/air-datepicker/air-datepicker.js");
/* harmony import */ var _air_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_air_datepicker__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_air_datepicker__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./node_modules/air-datepicker/locale/en.js":
/*!**************************************************!*\
  !*** ./node_modules/air-datepicker/locale/en.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm aa',
  firstDay: 0
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/air-datepicker/air-datepicker.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/air-datepicker/air-datepicker.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}
.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}
.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}
.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}
.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:"Century Gothic",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:"";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}
.air-datepicker{--adp-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--adp-font-size: 14px;--adp-width: 246px;--adp-z-index: 100;--adp-padding: 4px;--adp-grid-areas: "nav" "body" "timepicker" "buttons";--adp-transition-duration: .3s;--adp-transition-ease: ease-out;--adp-transition-offset: 8px;--adp-background-color: #fff;--adp-background-color-hover: #f0f0f0;--adp-background-color-active: #eaeaea;--adp-background-color-in-range: rgba(92, 196, 239, .1);--adp-background-color-in-range-focused: rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused: #8ad5f4;--adp-background-color-selected-other-month: #a2ddf6;--adp-color: #4a4a4a;--adp-color-secondary: #9c9c9c;--adp-accent-color: #4eb5e6;--adp-color-current-date: var(--adp-accent-color);--adp-color-other-month: #dedede;--adp-color-disabled: #aeaeae;--adp-color-disabled-in-range: #939393;--adp-color-other-month-hover: #c5c5c5;--adp-border-color: #dbdbdb;--adp-border-color-inner: #efefef;--adp-border-radius: 4px;--adp-border-color-inline: #d7d7d7;--adp-nav-height: 32px;--adp-nav-arrow-color: var(--adp-color-secondary);--adp-nav-action-size: 32px;--adp-nav-color-secondary: var(--adp-color-secondary);--adp-day-name-color: #ff9a19;--adp-day-name-color-hover: #8ad5f4;--adp-day-cell-width: 1fr;--adp-day-cell-height: 32px;--adp-month-cell-height: 42px;--adp-year-cell-height: 56px;--adp-pointer-size: 10px;--adp-poiner-border-radius: 2px;--adp-pointer-offset: 14px;--adp-cell-border-radius: 4px;--adp-cell-background-color-hover: var(--adp-background-color-hover);--adp-cell-background-color-selected: #5cc4ef;--adp-cell-background-color-selected-hover: #45bced;--adp-cell-background-color-in-range: rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover: rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range: var(--adp-cell-background-color-selected);--adp-btn-height: 32px;--adp-btn-color: var(--adp-accent-color);--adp-btn-color-hover: var(--adp-color);--adp-btn-border-radius: var(--adp-border-radius);--adp-btn-background-color-hover: var(--adp-background-color-hover);--adp-btn-background-color-active: var(--adp-background-color-active);--adp-time-track-height: 1px;--adp-time-track-color: #dedede;--adp-time-track-color-hover: #b1b1b1;--adp-time-thumb-size: 12px;--adp-time-padding-inner: 10px;--adp-time-day-period-color: var(--adp-color-secondary);--adp-mobile-font-size: 16px;--adp-mobile-nav-height: 40px;--adp-mobile-width: 320px;--adp-mobile-day-cell-height: 38px;--adp-mobile-month-cell-height: 48px;--adp-mobile-year-cell-height: 64px}.air-datepicker-overlay{--adp-overlay-background-color: rgba(0, 0, 0, .3);--adp-overlay-transition-duration: .3s;--adp-overlay-transition-ease: ease-out;--adp-overlay-z-index: 99}
.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size: var(--adp-mobile-font-size);--adp-day-cell-height: var(--adp-mobile-day-cell-height);--adp-month-cell-height: var(--adp-mobile-month-cell-height);--adp-year-cell-height: var(--adp-mobile-year-cell-height);--adp-nav-height: var(--adp-mobile-nav-height);--adp-nav-action-size: var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size: calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:"";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}
`, "",{"version":3,"sources":["webpack://./node_modules/air-datepicker/air-datepicker.css"],"names":[],"mappings":"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","sourcesContent":[".air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}\n.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}\n.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}\n.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}\n.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:\"\";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}\n.air-datepicker{--adp-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--adp-font-size: 14px;--adp-width: 246px;--adp-z-index: 100;--adp-padding: 4px;--adp-grid-areas: \"nav\" \"body\" \"timepicker\" \"buttons\";--adp-transition-duration: .3s;--adp-transition-ease: ease-out;--adp-transition-offset: 8px;--adp-background-color: #fff;--adp-background-color-hover: #f0f0f0;--adp-background-color-active: #eaeaea;--adp-background-color-in-range: rgba(92, 196, 239, .1);--adp-background-color-in-range-focused: rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused: #8ad5f4;--adp-background-color-selected-other-month: #a2ddf6;--adp-color: #4a4a4a;--adp-color-secondary: #9c9c9c;--adp-accent-color: #4eb5e6;--adp-color-current-date: var(--adp-accent-color);--adp-color-other-month: #dedede;--adp-color-disabled: #aeaeae;--adp-color-disabled-in-range: #939393;--adp-color-other-month-hover: #c5c5c5;--adp-border-color: #dbdbdb;--adp-border-color-inner: #efefef;--adp-border-radius: 4px;--adp-border-color-inline: #d7d7d7;--adp-nav-height: 32px;--adp-nav-arrow-color: var(--adp-color-secondary);--adp-nav-action-size: 32px;--adp-nav-color-secondary: var(--adp-color-secondary);--adp-day-name-color: #ff9a19;--adp-day-name-color-hover: #8ad5f4;--adp-day-cell-width: 1fr;--adp-day-cell-height: 32px;--adp-month-cell-height: 42px;--adp-year-cell-height: 56px;--adp-pointer-size: 10px;--adp-poiner-border-radius: 2px;--adp-pointer-offset: 14px;--adp-cell-border-radius: 4px;--adp-cell-background-color-hover: var(--adp-background-color-hover);--adp-cell-background-color-selected: #5cc4ef;--adp-cell-background-color-selected-hover: #45bced;--adp-cell-background-color-in-range: rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover: rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range: var(--adp-cell-background-color-selected);--adp-btn-height: 32px;--adp-btn-color: var(--adp-accent-color);--adp-btn-color-hover: var(--adp-color);--adp-btn-border-radius: var(--adp-border-radius);--adp-btn-background-color-hover: var(--adp-background-color-hover);--adp-btn-background-color-active: var(--adp-background-color-active);--adp-time-track-height: 1px;--adp-time-track-color: #dedede;--adp-time-track-color-hover: #b1b1b1;--adp-time-thumb-size: 12px;--adp-time-padding-inner: 10px;--adp-time-day-period-color: var(--adp-color-secondary);--adp-mobile-font-size: 16px;--adp-mobile-nav-height: 40px;--adp-mobile-width: 320px;--adp-mobile-day-cell-height: 38px;--adp-mobile-month-cell-height: 48px;--adp-mobile-year-cell-height: 64px}.air-datepicker-overlay{--adp-overlay-background-color: rgba(0, 0, 0, .3);--adp-overlay-transition-duration: .3s;--adp-overlay-transition-ease: ease-out;--adp-overlay-z-index: 99}\n.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size: var(--adp-mobile-font-size);--adp-day-cell-height: var(--adp-mobile-day-cell-height);--adp-month-cell-height: var(--adp-mobile-month-cell-height);--adp-year-cell-height: var(--adp-mobile-year-cell-height);--adp-nav-height: var(--adp-mobile-nav-height);--adp-nav-action-size: var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size: calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:\"\";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  min-height: 100vh;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.1s linear;
}
@media (max-width: 600px) {
  .modal-container {
    padding: 1rem;
  }
}
.modal-container.fade-in {
  opacity: 1;
}
.modal-container.fade-in .modal-box {
  transform: scale(1);
}
.modal-container .modal-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1.1);
  padding: 2rem 3rem 1.7rem;
  background-color: #fff;
  box-shadow: 0 2px 20px 0 rgba(213, 217, 217, 0.8);
  border-radius: 7px;
  transition: transform 0.05s ease-in-out;
}
@media (max-width: 600px) {
  .modal-container .modal-box {
    padding: 1rem 1rem 0.7rem;
  }
}
.modal-container .modal-box h3 {
  margin: 1rem 0;
  font-size: 1.3rem;
}
.modal-container .modal-box p {
  text-align: center;
  margin: 0 0 2.5rem;
}
.modal-container .modal-box div {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.7rem;
}
.modal-container .modal-box .modal-confirm,
.modal-container .modal-box .modal-cancel {
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0.7rem 1.8rem;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border-radius: 7px;
  cursor: pointer;
}
.modal-container .modal-box .modal-confirm {
  background-color: crimson;
  border-color: crimson;
  color: #fff;
}
.modal-container .modal-box .modal-confirm:hover {
  background-color: rgb(179, 0, 36);
}
.modal-container .modal-box .modal-cancel:hover {
  background-color: #f0f0f0;
}

.air-datepicker-body--day-name {
  color: #000 !important;
  font-weight: bold;
}

.air-datepicker-cell.-current- {
  color: orange !important;
}

@media (max-width: 600px) {
  .-bottom-right- {
    left: 1rem !important;
  }
}

@media (max-width: 600px) {
  .-bottom-right- .air-datepicker--pointer {
    right: 80% !important;
  }
}

.-selected- {
  background-color: dodgerblue !important;
}

#todo-app-container {
  display: flex;
  min-height: 93vh;
  max-width: 100%;
}
@media (max-width: 991px) {
  #todo-app-container {
    flex-direction: column;
  }
}

aside {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 30%;
  max-width: 380px;
  padding: 2.4rem 1rem 2.2rem 1rem;
  border-color: #eee;
  border-style: solid;
  border-width: 0 1px 0 0;
}
@media (max-width: 991px) {
  aside {
    width: 100%;
    max-width: 100%;
    border-width: 0 0 1px 0;
  }
}
aside .add-project {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 46px;
  max-width: 100%;
  margin: 0 0.5rem;
  padding: 0.7rem 1rem 0.7rem 0.5rem;
  border: 0;
  background-color: #fff;
  font-size: inherit;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #888;
  border-radius: 12px;
  cursor: pointer;
}
aside .add-project span {
  padding-bottom: 0.4rem;
  font-weight: 200;
  font-size: 2rem;
  line-height: 0;
  color: #aaa;
}
aside .add-project:hover {
  background-color: #f7f7f7;
  color: #333;
}
aside .add-project:hover span {
  color: #444;
}
aside .add-project.highlighted {
  padding-left: 1rem;
  background-color: dodgerblue;
  color: #fff;
  border-color: dodgerblue;
}
aside .add-project.highlighted span {
  color: #fff;
}
aside .add-project.highlighted:hover {
  background-color: #006ad3;
  border-color: #006ad3;
}
aside .project-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  max-width: 100%;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem 0.7rem;
  border-radius: 12px;
}
aside .project-item:hover {
  background-color: #f9f9f9;
}
aside .project-item.active {
  background-color: #eee;
}
aside .project-item:not(.active) span {
  pointer-events: none;
}
aside .project-item i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 0 1px 1px 0;
  font-style: normal;
  font-size: 0.8rem;
  color: #fff;
  background-color: dodgerblue;
  border-radius: 50%;
}
aside .project-item span {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 26px;
  max-width: 100%;
  margin: 0.4rem 0.3rem 0.3rem;
  letter-spacing: 0.1px;
}
aside .project-item input {
  width: 86%;
  height: 26px;
  max-width: 100%;
  font-size: 0.99rem;
  letter-spacing: 0.15px;
  margin: 0.4rem 0.1rem 0.3rem 0.07rem;
}
aside .project-item span,
aside .project-item input {
  vertical-align: middle;
  line-height: 120%;
  font-family: "Inter";
}
aside .project-item .hide {
  display: none;
}

#content {
  width: 70%;
  max-width: 1200px;
  padding: 1rem 2rem 3rem;
}
@media (max-width: 991px) {
  #content {
    width: 100%;
    max-width: 100%;
  }
}
#content .title-container {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}
@media (max-width: 991px) {
  #content .title-container {
    flex-direction: column;
    gap: 0;
  }
}
#content .title-container .project-headline {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
}
#content .title-container .project-headline h1 {
  color: dodgerblue;
}
#content .title-container .project-headline h1.no-project {
  color: #d0d0d0;
}
#content .title-container .project-headline .remove-project {
  display: flex;
  gap: 0.5rem;
  padding: 0.1rem 0.3rem;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  font-size: 0.7rem;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 350;
  color: #808080;
  border-radius: 4px;
  cursor: pointer;
}
#content .title-container .project-headline .remove-project:hover {
  color: #fff;
  background-color: crimson;
  border-color: crimson;
}
#content .title-container .project-headline .remove-project.disabled {
  display: none;
  cursor: default;
}
#content .title-container .add-todo-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: center;
  padding: 0.7rem 1rem 0.7rem 0.5rem;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border-radius: 7px;
  box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
  cursor: pointer;
}
@media (max-width: 991px) {
  #content .title-container .add-todo-item {
    align-self: flex-start;
  }
}
#content .title-container .add-todo-item span {
  padding-bottom: 0.4rem;
  font-weight: 400;
  font-size: 2rem;
  line-height: 0;
  color: dodgerblue;
}
#content .title-container .add-todo-item:hover {
  background-color: dodgerblue;
  color: #fff;
  border-color: dodgerblue;
}
#content .title-container .add-todo-item:hover span {
  color: #fff;
}
#content .title-container .add-todo-item.disabled {
  box-shadow: none;
  color: #ccc;
  cursor: default;
}
#content .title-container .add-todo-item.disabled span {
  color: #d0d0d0;
}
#content .title-container .add-todo-item.disabled:hover {
  background-color: inherit;
  border-color: #e0e0e0;
}
#content .title-container .add-todo-item.disabled:hover span {
  color: inherit;
}
#content .todo-container {
  height: 90%;
  padding-top: 0.4rem;
}
@media (max-width: 991px) {
  #content .todo-container {
    padding-top: 1rem;
  }
}
#content .empty-todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 20%;
  color: #000;
  font-weight: 500;
}
#content .empty-todo-list img {
  width: 100%;
  max-width: 160px;
}
#content .todo-item {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1rem 1.2rem 0;
  border-bottom: 1px solid #e0e0e0;
}
@media (max-width: 600px) {
  #content .todo-item {
    flex-wrap: wrap;
  }
}
#content .todo-item__name {
  width: 80%;
  margin-right: auto;
}
#content .todo-item__name:focus-visible {
  outline: 0;
}
#content .todo-item [class*=datepicker-] {
  width: 124px;
  cursor: pointer;
  border: 0;
  font-size: 1rem;
  text-align: right;
}
@media (max-width: 600px) {
  #content .todo-item [class*=datepicker-] {
    text-align: left;
  }
}
#content .todo-item [class*=datepicker-].expired {
  color: crimson;
}
#content .todo-item [class*=datepicker-]::placeholder {
  color: #000;
}
#content .todo-item [class*=datepicker-]:focus-visible {
  outline: 0;
}
#content .todo-item .checkmark-container {
  display: inline;
  position: relative;
  height: 24px;
  padding-left: 30px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  /* Hide the browser's default radio button */
  /* Create a custom radio button */
  /* On mouse-over, add a grey background color */
  /* When the radio button is checked, add a blue background */
  /* Create the indicator (the dot/circle - hidden when not checked) */
  /* Show the indicator (dot/circle) when checked */
  /* Style the indicator (dot/circle) */
}
#content .todo-item .checkmark-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
#content .todo-item .checkmark-container .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #999;
}
#content .todo-item .checkmark-container:hover input ~ .checkmark {
  background-color: #f7f7f7;
}
#content .todo-item .checkmark-container input:checked ~ .checkmark {
  background-color: #fff;
}
#content .todo-item .checkmark-container .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
#content .todo-item .checkmark-container input:checked ~ .checkmark:after {
  display: block;
}
#content .todo-item .checkmark-container .checkmark:after {
  top: 1.7px;
  left: 1.5px;
  width: 84%;
  height: 84%;
  border-radius: 50%;
  background: #2196f3;
}
#content .todo-item.checked .checkmark:after {
  content: "";
  position: absolute;
  display: block;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  font-size: 0.9rem;
  line-height: 160%;
  font-weight: 300;
  color: #aaa;
  border-top: 1px solid #eee;
}
@media (max-width: 600px) {
  footer {
    display: block;
    text-align: center;
    padding: 1rem;
  }
}
footer a,
footer a:hover,
footer a:visited,
footer a:active {
  text-decoration: none;
  border-bottom: 1px solid;
  color: dodgerblue;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap\");\n\nhtml,\nbody {\n  min-height: 100vh;\n  margin: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Inter\", sans-serif;\n}\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n\n  @media (max-width: 600px) {\n    padding: 1rem;\n  }\n\n  &.fade-in {\n    opacity: 1;\n\n    .modal-box {\n      transform: scale(1);\n    }\n  }\n\n  .modal-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    transform: scale(1.1);\n    padding: 2rem 3rem 1.7rem;\n    background-color: #fff;\n    box-shadow: 0 2px 20px 0 rgba(213, 217, 217, 0.8);\n    border-radius: 7px;\n    transition: transform 0.05s ease-in-out;\n\n    @media (max-width: 600px) {\n      padding: 1rem 1rem 0.7rem;\n    }\n\n    h3 {\n      margin: 1rem 0;\n      font-size: 1.3rem;\n    }\n\n    // Modal text\n    p {\n      text-align: center;\n      margin: 0 0 2.5rem;\n    }\n\n    // Button container\n    div {\n      display: flex;\n      flex-direction: row-reverse;\n      gap: 0.7rem;\n    }\n\n    .modal-confirm,\n    .modal-cancel {\n      display: flex;\n      align-items: center;\n      align-self: center;\n      padding: 0.7rem 1.8rem;\n      border: 1px solid #e0e0e0;\n      background-color: #fff;\n      font-size: 0.9rem;\n      font-family: \"Inter\", sans-serif;\n      font-weight: 500;\n      border-radius: 7px;\n      cursor: pointer;\n    }\n\n    .modal-confirm {\n      background-color: crimson;\n      border-color: crimson;\n      color: #fff;\n\n      &:hover {\n        background-color: rgb(179, 0, 36);\n      }\n    }\n\n    .modal-cancel {\n      &:hover {\n        background-color: #f0f0f0;\n      }\n    }\n  }\n}\n\n.air-datepicker-body--day-name {\n  color: #000 !important;\n  font-weight: bold;\n}\n\n.air-datepicker-cell.-current- {\n  color: orange !important;\n}\n\n.-bottom-right- {\n  @media (max-width: 600px) {\n    left: 1rem !important;\n  }\n}\n\n.-bottom-right- .air-datepicker--pointer {\n  @media (max-width: 600px) {\n    right: 80% !important;\n  }\n}\n\n.-selected- {\n  background-color: dodgerblue !important;\n}\n\n#todo-app-container {\n  display: flex;\n  min-height: 93vh;\n  max-width: 100%;\n\n  @media (max-width: 991px) {\n    flex-direction: column;\n  }\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  width: 30%;\n  max-width: 380px;\n  padding: 2.4rem 1rem 2.2rem 1rem;\n  border-color: #eee;\n  border-style: solid;\n  border-width: 0 1px 0 0;\n\n  @media (max-width: 991px) {\n    width: 100%;\n    max-width: 100%;\n    border-width: 0 0 1px 0;\n  }\n\n  .add-project {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    height: 46px;\n    max-width: 100%;\n    margin: 0 0.5rem;\n    padding: 0.7rem 1rem 0.7rem 0.5rem;\n    border: 0;\n    background-color: #fff;\n    font-size: inherit;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    color: #888;\n    border-radius: 12px;\n    cursor: pointer;\n\n    span {\n      padding-bottom: 0.4rem;\n      font-weight: 200;\n      font-size: 2rem;\n      line-height: 0;\n      color: #aaa;\n    }\n\n    &:hover {\n      background-color: #f7f7f7;\n      color: #333;\n\n      span {\n        color: #444;\n      }\n    }\n\n    &.highlighted {\n      padding-left: 1rem;\n      background-color: dodgerblue;\n      color: #fff;\n      border-color: dodgerblue;\n\n      span {\n        color: #fff;\n      }\n\n      &:hover {\n        background-color: #006ad3;\n        border-color: #006ad3;\n      }\n    }\n  }\n\n  .project-item {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n    max-width: 100%;\n    cursor: pointer;\n    margin: 0.5rem;\n    padding: 0.5rem 0.7rem;\n\n    border-radius: 12px;\n\n    &:hover {\n      background-color: #f9f9f9;\n    }\n\n    &.active {\n      background-color: #eee;\n    }\n\n    &:not(.active) {\n      span {\n        pointer-events: none;\n      }\n    }\n\n    i {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 25px;\n      height: 25px;\n      padding: 0 1px 1px 0;\n      font-style: normal;\n      font-size: 0.8rem;\n      color: #fff;\n      background-color: dodgerblue;\n      border-radius: 50%;\n    }\n\n    span {\n      display: flex;\n      gap: 0.5rem;\n      align-items: center;\n      height: 26px;\n      max-width: 100%;\n      margin: 0.4rem 0.3rem 0.3rem;\n      letter-spacing: 0.1px;\n    }\n\n    input {\n      width: 86%;\n      height: 26px;\n      max-width: 100%;\n      font-size: 0.99rem;\n      letter-spacing: 0.15px;\n      margin: 0.4rem 0.1rem 0.3rem 0.07rem;\n    }\n\n    span,\n    input {\n      vertical-align: middle;\n      line-height: 120%;\n      font-family: \"Inter\";\n    }\n\n    .hide {\n      display: none;\n    }\n  }\n}\n\n#content {\n  width: 70%;\n  max-width: 1200px;\n  padding: 1rem 2rem 3rem;\n\n  @media (max-width: 991px) {\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .title-container {\n    display: flex;\n    gap: 2rem;\n    justify-content: space-between;\n\n    @media (max-width: 991px) {\n      flex-direction: column;\n      gap: 0;\n    }\n\n    .project-headline {\n      display: flex;\n      align-items: baseline;\n      gap: 0.8rem;\n\n      h1 {\n        color: dodgerblue;\n\n        &.no-project {\n          color: #d0d0d0;\n        }\n      }\n\n      .remove-project {\n        display: flex;\n        gap: 0.5rem;\n        padding: 0.1rem 0.3rem;\n        border: 1px solid #e9e9e9;\n        background-color: #fff;\n        font-size: 0.7rem;\n        font-family: \"Inter\", sans-serif;\n        text-transform: uppercase;\n        letter-spacing: 0.2px;\n        font-weight: 350;\n        color: #808080;\n        border-radius: 4px;\n        cursor: pointer;\n\n        &:hover {\n          color: #fff;\n          background-color: crimson;\n          border-color: crimson;\n        }\n\n        &.disabled {\n          display: none;\n          cursor: default;\n        }\n      }\n    }\n\n    .add-todo-item {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      align-self: center;\n      padding: 0.7rem 1rem 0.7rem 0.5rem;\n      border: 1px solid #e0e0e0;\n      background-color: #fff;\n      font-size: 0.9rem;\n      font-family: \"Inter\", sans-serif;\n      font-weight: 500;\n      border-radius: 7px;\n      box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);\n      cursor: pointer;\n\n      @media (max-width: 991px) {\n        align-self: flex-start;\n      }\n\n      span {\n        padding-bottom: 0.4rem;\n        font-weight: 400;\n        font-size: 2rem;\n        line-height: 0;\n        color: dodgerblue;\n      }\n\n      &:hover {\n        background-color: dodgerblue;\n        color: #fff;\n        border-color: dodgerblue;\n\n        span {\n          color: #fff;\n        }\n      }\n\n      &.disabled {\n        box-shadow: none;\n        color: #ccc;\n        cursor: default;\n\n        span {\n          color: #d0d0d0;\n        }\n\n        &:hover {\n          background-color: inherit;\n          border-color: #e0e0e0;\n\n          span {\n            color: inherit;\n          }\n        }\n      }\n    }\n  }\n\n  .todo-container {\n    height: 90%;\n    padding-top: 0.4rem;\n\n    @media (max-width: 991px) {\n      padding-top: 1rem;\n    }\n  }\n\n  .empty-todo-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding-top: 20%;\n    color: #000;\n    font-weight: 500;\n\n    img {\n      width: 100%;\n      max-width: 160px;\n    }\n  }\n\n  .todo-item {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1rem 1.2rem 0;\n    border-bottom: 1px solid #e0e0e0;\n\n    @media (max-width: 600px) {\n      flex-wrap: wrap;\n    }\n\n    &__name {\n      width: 80%;\n      margin-right: auto;\n\n      &:focus-visible {\n        outline: 0;\n      }\n    }\n\n    [class*=\"datepicker-\"] {\n      width: 124px;\n      cursor: pointer;\n      border: 0;\n      font-size: 1rem;\n      text-align: right;\n\n      @media (max-width: 600px) {\n        text-align: left;\n      }\n\n      &.expired {\n        color: crimson;\n      }\n\n      &::placeholder {\n        color: #000;\n      }\n\n      &:focus-visible {\n        outline: 0;\n      }\n    }\n\n    .checkmark-container {\n      display: inline;\n      position: relative;\n      height: 24px;\n      padding-left: 30px;\n      cursor: pointer;\n      font-size: 22px;\n      user-select: none;\n\n      /* Hide the browser's default radio button */\n      input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        height: 0;\n        width: 0;\n      }\n\n      /* Create a custom radio button */\n      .checkmark {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 22px;\n        width: 22px;\n        background-color: #fff;\n        border-radius: 50%;\n        border: 2px solid #999;\n      }\n\n      /* On mouse-over, add a grey background color */\n      &:hover input ~ .checkmark {\n        background-color: #f7f7f7;\n      }\n\n      /* When the radio button is checked, add a blue background */\n      input:checked ~ .checkmark {\n        background-color: #fff;\n      }\n\n      /* Create the indicator (the dot/circle - hidden when not checked) */\n      .checkmark:after {\n        content: \"\";\n        position: absolute;\n        display: none;\n      }\n\n      /* Show the indicator (dot/circle) when checked */\n      input:checked ~ .checkmark:after {\n        display: block;\n      }\n\n      /* Style the indicator (dot/circle) */\n      .checkmark:after {\n        top: 1.7px;\n        left: 1.5px;\n        width: 84%;\n        height: 84%;\n        border-radius: 50%;\n        background: #2196f3;\n      }\n    }\n\n    &.checked {\n      .checkmark:after {\n        content: \"\";\n        position: absolute;\n        display: block;\n      }\n    }\n  }\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 100%;\n  font-size: 0.9rem;\n  line-height: 160%;\n  font-weight: 300;\n  color: #aaa;\n  border-top: 1px solid #eee;\n\n  @media (max-width: 600px) {\n    display: block;\n    text-align: center;\n    padding: 1rem;\n  }\n\n  a,\n  a:hover,\n  a:visited,\n  a:active {\n    text-decoration: none;\n    border-bottom: 1px solid;\n    color: dodgerblue;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module) {

/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  const {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze,
    seal,
    create
  } = Object; // eslint-disable-line import/no-mutable-exports
  let {
    apply,
    construct
  } = typeof Reflect !== 'undefined' && Reflect;
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return new Func(...args);
    };
  }
  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);

  /**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param {Function} func - The function to be wrapped and called.
   * @returns {Function} A new function that calls the given function with a specified thisArg and arguments.
   */
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }

  /**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param {Function} func - The constructor function to be wrapped and called.
   * @returns {Function} A new function that constructs an instance of the given constructor function with the provided arguments.
   */
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }

  /**
   * Add properties to a lookup table
   *
   * @param {Object} set - The set to which elements will be added.
   * @param {Array} array - The array containing elements to be added to the set.
   * @param {Function} transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns {Object} The modified set with added elements.
   */
  function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === 'string') {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }

  /**
   * Clean up an array to harden against CSPP
   *
   * @param {Array} array - The array to be cleaned.
   * @returns {Array} The cleaned version of the array
   */
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }

  /**
   * Shallow clone an object
   *
   * @param {Object} object - The object to be cloned.
   * @returns {Object} A new object that copies the original.
   */
  function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === 'object' && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }

  /**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param {Object} object - The object to look up the getter function in its prototype chain.
   * @param {String} prop - The property name for which to find the getter function.
   * @returns {Function} The getter function found in the prototype chain or a fallback function.
   */
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }

  const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  const text = freeze(['#text']);

  const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );

  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  const DOCTYPE_NAME = seal(/^html$/i);

  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    ERB_EXPR: ERB_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR,
    DATA_ATTR: DATA_ATTR,
    ARIA_ATTR: ARIA_ATTR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    DOCTYPE_NAME: DOCTYPE_NAME
  });

  const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return {TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */
  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html) {
          return html;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = root => createDOMPurify(root);

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '3.0.9';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    let {
      document
    } = window;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      const template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document;
    const {
      importNode
    } = originalDocument;
    let hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR,
      ERB_EXPR,
      TMPLIT_EXPR,
      DATA_ATTR,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);

    /* Allowed attribute names */
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);

    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    let FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    let FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    let ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    let ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    let ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */
    let ALLOW_SELF_CLOSE_IN_ATTR = true;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    let SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    let WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    let SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    let FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    let RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    let RETURN_DOM_FRAGMENT = false;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    let RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */
    let SANITIZE_DOM = true;

    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';

    /* Keep element content when removing element? */
    let KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    let IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    let USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;

    /* Allowed XHTML+XML namespaces */
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);

    /* Parsing of strict XHTML documents */
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;

    /* Keep a reference to config to pass to hooks */
    let CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || typeof cfg !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;

      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;

      /* Set configuration parameters */
      ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }

        // Overwrite existing TrustedTypes policy.
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;

        // Sign local variables required by `sanitize`.
        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        }

        // If creating the internal policy succeeded sign internal variables.
        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    const HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);

    /**
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    const _checkValidNamespace = function _checkValidNamespace(element) {
      let parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // For XHTML and XML documents that support custom namespaces
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    const _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        node.remove();
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    const _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    const _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param  {Node} root The root element or node to start traversing on.
     * @return {NodeIterator} The created NodeIterator
     */
    const _createNodeIterator = function _createNodeIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    const _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };

    /**
     * Checks whether the given object is a DOM node.
     *
     * @param  {Node} object object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    const _isNode = function _isNode(object) {
      return typeof Node === 'function' && object instanceof Node;
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    const _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], hook => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    const _sanitizeElements = function _sanitizeElements(currentNode) {
      let content = null;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      const tagName = transformCaseFunc(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }

        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Make sure that older browsers don't get fallback-tag mXSS */
      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          content = stringReplace(content, expr, ' ');
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);
      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
        return false;
      } else ;
      return true;
    };

    /**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param {string} tagName name of the tag of the node to sanitize
     * @returns {boolean} Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */
    const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
      return tagName !== 'annotation-xml' && tagName.indexOf('-') > 0;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);
      const {
        attributes
      } = currentNode;

      /* Check if we have attributes; if not we might have a text node */
      if (!attributes) {
        return;
      }
      const hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      let l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        let value = name === 'value' ? attrValue : stringTrim(attrValue);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
            value = stringReplace(value, expr, ' ');
          });
        }

        /* Is `value` valid for this attribute? */
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */
        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode);

          // Prefix the value and later re-create the attribute with the sanitized value
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }

        /* Handle attributes that require Trusted Types */
        if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} cfg object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }

      /* Return dirty HTML if DOMPurify cannot run */
      if (!DOMPurify.isSupported) {
        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);
      }

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Serialize doctype if allowed */
      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          serializedHTML = stringReplace(serializedHTML, expr, ' ');
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function () {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {String} tag Tag name of containing element.
     * @param  {String} attr Attribute name.
     * @param  {String} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/air-datepicker/air-datepicker.css":
/*!********************************************************!*\
  !*** ./node_modules/air-datepicker/air-datepicker.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_air_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./air-datepicker.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/air-datepicker/air-datepicker.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_air_datepicker_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_air_datepicker_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_air_datepicker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_air_datepicker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAndStoreNewProject: () => (/* binding */ createAndStoreNewProject),
/* harmony export */   createAndStoreNewTodoItem: () => (/* binding */ createAndStoreNewTodoItem),
/* harmony export */   defaultProject: () => (/* binding */ defaultProject),
/* harmony export */   emptyOldArrayAndPopulateWithNewItems: () => (/* binding */ emptyOldArrayAndPopulateWithNewItems),
/* harmony export */   findProjectById: () => (/* binding */ findProjectById),
/* harmony export */   findTodoItemById: () => (/* binding */ findTodoItemById),
/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),
/* harmony export */   getActiveTodoItemObjects: () => (/* binding */ getActiveTodoItemObjects),
/* harmony export */   getIndexOfProjectInProjectsArray: () => (/* binding */ getIndexOfProjectInProjectsArray),
/* harmony export */   isProjectsArrayNotEmpty: () => (/* binding */ isProjectsArrayNotEmpty),
/* harmony export */   projectHasTodoItems: () => (/* binding */ projectHasTodoItems),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   reconstructAllProjectObjects: () => (/* binding */ reconstructAllProjectObjects),
/* harmony export */   reconstructAllTodoItems: () => (/* binding */ reconstructAllTodoItems),
/* harmony export */   removeTodoItemById: () => (/* binding */ removeTodoItemById),
/* harmony export */   saveTodoItemDate: () => (/* binding */ saveTodoItemDate),
/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject),
/* harmony export */   storeProjectName: () => (/* binding */ storeProjectName),
/* harmony export */   storeProjects: () => (/* binding */ storeProjects),
/* harmony export */   storeTodoItemTitle: () => (/* binding */ storeTodoItemTitle)
/* harmony export */ });
/* harmony import */ var _todoItemClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemClass */ "./src/todoItemClass.js");
/* harmony import */ var _todoProjectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProjectClass */ "./src/todoProjectClass.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





/* DEFAULT DATA CREATION
####################################################################*/
// Creates default project1 + todo item
function createDefaultElements() {
  const defaultProject = new _todoProjectClass__WEBPACK_IMPORTED_MODULE_1__.TodoProjectItem("Default Project", true);
  const defaultItem = new _todoItemClass__WEBPACK_IMPORTED_MODULE_0__.TodoItem("1", "Default Task");
  defaultProject.array.push(defaultItem);

  return defaultProject;
}

// Default project variables
const defaultProject = createDefaultElements();

/* PROJECT DATA MANAGEMENT
####################################################################*/
// Array that holds all project items
const projectsArray = [];

// Returns true if the projectsArray[] is NOT empty
function isProjectsArrayNotEmpty() {
  return projectsArray.length > 0;
}

// Adds new project to projectsArrray[]
function storeProjects(...newProjects) {
  newProjects.forEach((project) => {
    projectsArray.push(project);
  });
}

/*
Finds and returns a project in projectsArray[] by it's ID.
Same ID is added as attribute to project button and todo item
*/
function findProjectById(projectId) {
  return projectsArray.find((project) => project.id === projectId);
}

// Creates new project from name string and stores it in projectsArray[]
function createAndStoreNewProject(projectName) {
  const newProject = new _todoProjectClass__WEBPACK_IMPORTED_MODULE_1__.TodoProjectItem(projectName);
  storeProjects(newProject);

  return newProject.id;
}

// Finds the active project and returns it
function getActiveProject() {
  let activeProject = null;

  projectsArray.forEach((project) => {
    if (project.active === true) {
      activeProject = project;
    }
  });

  return activeProject;
}

function setActiveProject(project) {
  if (isProjectsArrayNotEmpty) {
    projectsArray.forEach((item) => {
      if (item.id !== project.id) {
        item.active = false;
      } else {
        item.active = true;
      }
    });
  }
}

function getIndexOfProjectInProjectsArray(project) {
  return projectsArray.findIndex((item) => item === project);
}

// Sanitizes input value and stores it as new name for the project
function storeProjectName(event) {
  const sanitizedValue = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.sanitizeUserData)(event.target.value);
  const activeProject = getActiveProject();
  activeProject.name = sanitizedValue;
}

// Get all projects from local storage and reconstruct them with the ProjectItem class to reestablish inheritance, methods, etc.
function reconstructAllProjectObjects(storedProjectsArray) {
  const newProjectsArray = [];

  storedProjectsArray.forEach((storedProject) => {
    let newProject = new _todoProjectClass__WEBPACK_IMPORTED_MODULE_1__.TodoProjectItem(
      storedProject.name,
      storedProject.active
    );
    newProject.array = reconstructAllTodoItems(storedProject.array);

    newProjectsArray.push(newProject);
  });

  return newProjectsArray;
}

// Takes the current projects array, empties it and pushes all items from a new array onto it
function emptyOldArrayAndPopulateWithNewItems(newArray) {
  projectsArray.splice(0, projectsArray.length);
  projectsArray.push(...newArray);
}

/* TODO ITEM DATA MANAGEMENT
####################################################################*/
function getActiveTodoItemObjects() {
  const activeProject = getActiveProject();

  return activeProject.array;
}

// Creates new todo item with default name and adds it to the active project
function createAndStoreNewTodoItem() {
  const activeProject = getActiveProject();
  const newTodoItem = new _todoItemClass__WEBPACK_IMPORTED_MODULE_0__.TodoItem(activeProject.id, "New Task");
  activeProject.array.push(newTodoItem);

  return newTodoItem.id;
}

function projectHasTodoItems(project) {
  return project.array.length > 0;
}

// Changes the title of a todo item object
function storeTodoItemTitle(event) {
  const sanitizedValue = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.sanitizeUserData)(event.target.textContent);
  const activeTodoItemId = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.getElementId)(event.target.parentNode);
  const activeTodoItem = findTodoItemById(activeTodoItemId);
  activeTodoItem.title = sanitizedValue;
}

// Finds a todo item by it's ID within an active project
function findTodoItemById(itemId) {
  const activeProject = getActiveProject();
  return activeProject.array.find((item) => item.id === itemId);
}

// Removes a todo item by it's ID from an active project
function removeTodoItemById(itemId) {
  const activeProject = getActiveProject();
  const itemIndex = activeProject.array.findIndex((item) => item.id === itemId);
  activeProject.array.splice(itemIndex, 1);
}

// Saves a date selected via datepicker in the todo item object
function saveTodoItemDate(todoItemId, date) {
  const activeProject = getActiveProject();
  const todoItem = findTodoItemById(todoItemId);

  todoItem.dueDate = date;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.populateContent)(activeProject);
}

function reconstructAllTodoItems(projectArray) {
  const newProjectArray = [];

  projectArray.forEach((storedTodoItem) => {
    let newTodoItem = new _todoItemClass__WEBPACK_IMPORTED_MODULE_0__.TodoItem(
      storedTodoItem.projectId,
      storedTodoItem.title,
      storedTodoItem.dueDate,
      storedTodoItem.checked,
      storedTodoItem.id
    );

    newProjectArray.push(newTodoItem);
  });

  return newProjectArray;
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addActiveClassToActiveProject: () => (/* binding */ addActiveClassToActiveProject),
/* harmony export */   addActiveClassToElement: () => (/* binding */ addActiveClassToElement),
/* harmony export */   addHighlightClassToNewProjectButton: () => (/* binding */ addHighlightClassToNewProjectButton),
/* harmony export */   createModalBox: () => (/* binding */ createModalBox),
/* harmony export */   createPlaceholderWithImage: () => (/* binding */ createPlaceholderWithImage),
/* harmony export */   disableNewTaskButton: () => (/* binding */ disableNewTaskButton),
/* harmony export */   disableRemoveProjectButton: () => (/* binding */ disableRemoveProjectButton),
/* harmony export */   enableNewTaskButton: () => (/* binding */ enableNewTaskButton),
/* harmony export */   enableRemoveProjectButton: () => (/* binding */ enableRemoveProjectButton),
/* harmony export */   findActiveProjectId: () => (/* binding */ findActiveProjectId),
/* harmony export */   focusElementAndClearContent: () => (/* binding */ focusElementAndClearContent),
/* harmony export */   getBody: () => (/* binding */ getBody),
/* harmony export */   getContent: () => (/* binding */ getContent),
/* harmony export */   getContentHeadline: () => (/* binding */ getContentHeadline),
/* harmony export */   getContentHeadlineContainer: () => (/* binding */ getContentHeadlineContainer),
/* harmony export */   getDataProjectId: () => (/* binding */ getDataProjectId),
/* harmony export */   getElementByDataProjectId: () => (/* binding */ getElementByDataProjectId),
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   getElementId: () => (/* binding */ getElementId),
/* harmony export */   getNav: () => (/* binding */ getNav),
/* harmony export */   getNewProjectButton: () => (/* binding */ getNewProjectButton),
/* harmony export */   getNewTaskButton: () => (/* binding */ getNewTaskButton),
/* harmony export */   getProjectLinks: () => (/* binding */ getProjectLinks),
/* harmony export */   getRemoveProjectButton: () => (/* binding */ getRemoveProjectButton),
/* harmony export */   getTodoItemNameFieldById: () => (/* binding */ getTodoItemNameFieldById),
/* harmony export */   getTodoItems: () => (/* binding */ getTodoItems),
/* harmony export */   hideProjectInputField: () => (/* binding */ hideProjectInputField),
/* harmony export */   isProjectInput: () => (/* binding */ isProjectInput),
/* harmony export */   isProjectLink: () => (/* binding */ isProjectLink),
/* harmony export */   isProjectName: () => (/* binding */ isProjectName),
/* harmony export */   isTextContentEmpty: () => (/* binding */ isTextContentEmpty),
/* harmony export */   isTodoItemTitle: () => (/* binding */ isTodoItemTitle),
/* harmony export */   populateContent: () => (/* binding */ populateContent),
/* harmony export */   refreshNav: () => (/* binding */ refreshNav),
/* harmony export */   removeHighlightClassFromNewProjectButton: () => (/* binding */ removeHighlightClassFromNewProjectButton),
/* harmony export */   sanitizeUserData: () => (/* binding */ sanitizeUserData),
/* harmony export */   showEmptyPojectPageHeadline: () => (/* binding */ showEmptyPojectPageHeadline),
/* harmony export */   showEmptyProjectsArrayMessage: () => (/* binding */ showEmptyProjectsArrayMessage),
/* harmony export */   showEmptyTodoListMessage: () => (/* binding */ showEmptyTodoListMessage),
/* harmony export */   showProjectInputField: () => (/* binding */ showProjectInputField),
/* harmony export */   updateContentHeadline: () => (/* binding */ updateContentHeadline),
/* harmony export */   updateProjectName: () => (/* binding */ updateProjectName)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var air_datepicker_air_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! air-datepicker/air-datepicker.css */ "./node_modules/air-datepicker/air-datepicker.css");
/* harmony import */ var air_datepicker_locale_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! air-datepicker/locale/en */ "./node_modules/air-datepicker/locale/en.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _img_undraw_no_data_re_kwbl_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/undraw_no_data_re_kwbl.svg */ "./src/img/undraw_no_data_re_kwbl.svg");
/* harmony import */ var _img_undraw_add_files_re_v09g_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/undraw_add_files_re_v09g.svg */ "./src/img/undraw_add_files_re_v09g.svg");









/*
###############################################################################
DOM ELEMENT SELECTION
###############################################################################
*/
function getBody() {
  return document.querySelector("body");
}
function getContent() {
  return document.querySelector("#content .todo-container");
}
function getNav() {
  return document.querySelector("nav");
}
function getProjectLinks() {
  const nav = getNav();
  return nav.querySelectorAll(".project-item");
}
function getContentHeadlineContainer() {
  return document.querySelector(".project-headline");
}
function getContentHeadline() {
  return document.querySelector("h1");
}
function getTodoItems() {
  const content = getContent();
  return content.querySelectorAll(".todo-item");
}
function getNewTaskButton() {
  return document.querySelector(".add-todo-item");
}
function getNewProjectButton() {
  return document.querySelector(".add-project");
}
function getRemoveProjectButton() {
  return document.querySelector(".remove-project");
}

/*
###############################################################################
NAV UPDATES (Project List)
###############################################################################
*/
/*
Accesses the projects array, wraps all properties in a div container and appends it to the <nav>.
The name property of all projects is wrapped in a span tag and an input field. Those are appended to the container.
*/
function refreshNav() {
  const nav = getNav();
  nav.innerHTML = "";

  _data__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project) => {
    let container = createProjectContainer(project);
    const icon = createIcon();
    let span = createSpan(project);
    let input = createInputField(project);

    container.appendChild(icon);
    container.appendChild(span);
    container.appendChild(input);
    nav.appendChild(container);
  });
}

/* 
###############################################################################
CONTENT UPDATES (todo item list)
###############################################################################
*/
/* 
Displays all todo items associated with a project object inside the content section.
All properties are wrapped in a div container.
The individual properties are wrapped in a span tag and appended to the container
*/
function populateContent(project) {
  const content = getContent();
  content.innerHTML = "";

  project.array.forEach((todoItem) => {
    const todoItemContainer = createTodoItemContainer(todoItem);
    const todoDateInput = createTodoItemDateInput(todoItem.id);

    const todoItemCheckComplete = createTodoItemCheckComplete();
    todoItemContainer.appendChild(todoItemCheckComplete);

    for (let key in todoItem) {
      /* 
        Checks if the key belongs to the item's instance and renders it in the DOM.
        It also checks if the key is not part of the isHiddenProperty array.
        */
      if (todoItem.hasOwnProperty(key) && !todoItem.isHiddenProperty(key)) {
        if (key === "title") {
          const todoItemTitleWrapper = createTodoItemTitleWrapper();
          todoItemTitleWrapper.textContent = todoItem[key];
          todoItemContainer.appendChild(todoItemTitleWrapper);
        } else if (key === "dueDate") {
          if (todoItem[key] !== "") {
            const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(new Date(), "yyyy-MM-dd");
            todoDateInput.value = todoItem[key];

            if (todoItem[key] < date) {
              todoDateInput.classList.add("expired");
            }
          }
        } else {
          const todoItemKeyWrapper = document.createElement("span");
          todoItemKeyWrapper.textContent = todoItem[key];
          todoItemContainer.appendChild(todoItemKeyWrapper);
        }
        // Checks if a todo item has been marked as complete
      } else if (key === "checked") {
        if (todoItem[key] === "true") {
          todoItemContainer.classList.add("checked");
        }
      }
    }

    todoItemContainer.appendChild(todoDateInput);
    content.appendChild(todoItemContainer);
  });
  /* } else {
    showEmptyTodoListMessage();
  } */
  removeDatepickersFromTodoItems();
  addDatepickersToTodoItems();
}

/*
###############################################################################
DOM ELEMENT CREATION
###############################################################################
*/
// Creates <span> that contains the prject name
function createSpan(project) {
  const span = document.createElement("span");

  span.textContent = project.name;

  return span;
}

// Creates icon that represents any project
function createIcon() {
  const icon = document.createElement("i");

  icon.textContent = "☰";

  return icon;
}

// Creates an input field and sets a project name as it's value
function createInputField(project) {
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = "30";
  input.classList.add("hide");
  input.value = project.name;

  return input;
}

// Creates a div container for a project
function createProjectContainer(project) {
  const container = document.createElement("div");
  container.classList.add("project-item");
  container.setAttribute("data-project-id", project.id);

  return container;
}

// Creates a div container for a todo item
function createTodoItemContainer(todoItem) {
  const container = document.createElement("div");
  container.classList.add("todo-item");
  container.setAttribute("data-project-id", todoItem.projectId);
  container.id = todoItem.id;

  return container;
}

/*
Creates a wrapper for a todo item title.
Makes the title editable by contenteditable attribute.
*/
function createTodoItemTitleWrapper() {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("todo-item__name");
  titleWrapper.contentEditable = "true";
  titleWrapper.tabIndex = "1";

  return titleWrapper;
}

// Creates a radio button to mark a todo item as complete
function createTodoItemCheckComplete() {
  const label = document.createElement("label");
  label.classList.add("checkmark-container");

  const input = document.createElement("input");
  input.type = "radio";

  const span = document.createElement("span");
  span.classList.add("checkmark");

  label.appendChild(input);
  label.appendChild(span);

  return label;
}

// Creates a date input field to attach the AirDatepicker
function createTodoItemDateInput(id) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "No date selected";
  input.classList.add(`datepicker-${id}`);

  return input;
}

const datepickerInstances = [];

/*
Creates an AirDatepicker instance.
A date selected via the picker is stored in the todo item dueDate property.
If dueDate isn't defined, no date will be preselected.
@param {string} id - The ID of the todo item the datepicker will be attached.
@param {string} dueDate - Optional date if provided is preselected in the datepicker.
*/
function createDatePickerObject(id, dueDate) {
  const config = {
    locale: air_datepicker_locale_en__WEBPACK_IMPORTED_MODULE_4__["default"],
    autoClose: true,
    dateFormat: "yyyy-MM-dd",
    position: "bottom right",
    // Fires when user selects a date in the datepicker
    onSelect: ({ date, formattedDate }) => {
      // Saves the selected date in the todo item's dueDate property
      if (date !== undefined) {
        (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveTodoItemDate)(id, formattedDate);
      } else {
        // Hide the datepicker if a date was deselected (returns undefined)
        datepicker.hide();
      }
    },
  };

  // If dueDate has been set, preselect this date in the datepicker
  if (dueDate) {
    config.selectedDates = [dueDate];
  }

  // Create a new datepicker instance with the above config settings
  const datepicker = new air_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"](`.datepicker-${id}`, config);

  datepickerInstances.push(datepicker);

  return datepicker;
}

// Attaches a datepicker to the todo items in the DOM
function addDatepickersToTodoItems() {
  const todoItems = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getActiveTodoItemObjects)();

  todoItems.forEach((item) => {
    createDatePickerObject(item.id, item.dueDate);
  });
}

// Removes datepickers from the todo items in the DOM
function removeDatepickersFromTodoItems() {
  datepickerInstances.length = 0;
}

// Creates a modal box to confirm removing projects
function createModalBox() {
  const projectName = getContentHeadline().textContent;

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-container");

  const modalBox = document.createElement("div");
  modalBox.classList.add("modal-box");
  modalOverlay.appendChild(modalBox);

  const modalHeadline = document.createElement("h3");
  modalHeadline.textContent = "Remove Project";
  modalBox.appendChild(modalHeadline);

  const modalText = document.createElement("p");
  modalText.innerHTML = `Are you sure you want to remove ${projectName}?`;
  modalBox.appendChild(modalText);

  const buttonContainer = document.createElement("div");
  modalBox.appendChild(buttonContainer);

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Remove";
  confirmButton.classList.add("modal-confirm");
  buttonContainer.appendChild(confirmButton);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("modal-cancel");
  buttonContainer.appendChild(cancelButton);

  return modalOverlay;
}

// Creates a placeholder message with image + text
function createPlaceholderWithImage(img, message) {
  const container = document.createElement("div");
  container.classList.add("empty-todo-list");

  const image = document.createElement("img");
  image.src = img;
  container.appendChild(image);

  const text = document.createElement("p");
  text.textContent = message;
  container.appendChild(text);

  return container;
}

// Creates a placeholder message when there are no todo items
function showEmptyTodoListMessage() {
  const content = getContent();
  const message = createPlaceholderWithImage(
    _img_undraw_no_data_re_kwbl_svg__WEBPACK_IMPORTED_MODULE_5__,
    "There are no active todo items."
  );

  content.appendChild(message);
}

// Creates a placeholder message when there are no projects
function showEmptyProjectsArrayMessage() {
  const content = getContent();
  const message = createPlaceholderWithImage(
    _img_undraw_add_files_re_v09g_svg__WEBPACK_IMPORTED_MODULE_6__,
    "Start by adding a project."
  );

  content.appendChild(message);
}

function addHighlightClassToNewProjectButton() {
  const newProjectButton = getNewProjectButton();

  if (!newProjectButton.classList.contains("highlighted")) {
    newProjectButton.classList.add("highlighted");
  }
}

function removeHighlightClassFromNewProjectButton() {
  const newProjectButton = getNewProjectButton();

  if (newProjectButton.classList.contains("highlighted")) {
    newProjectButton.classList.remove("highlighted");
  }
}

/*
###############################################################################
DOM ELEMENT MANIPULATION
###############################################################################
*/
// Removes all "active" classes from the links that represent the project objects
function removeAllActiveClasses() {
  const projectLinks = getProjectLinks();
  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) link.classList.remove("active");
  });
}

// Adds the class "active" to a link that represents a project object
function addActiveClassToElement(htmlElement) {
  removeAllActiveClasses();
  htmlElement.classList.add("active");
}

function addActiveClassToActiveProject() {
  if ((0,_data__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)() !== null) {
    const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
    const activeProjectLink = getElementByDataProjectId(activeProject.id);

    addActiveClassToElement(activeProjectLink);

    return activeProject;
  }
}

// Sets the headline above the todo items to the title property of the active project object
function updateContentHeadline(project) {
  const headline = getContentHeadline();

  headline.innerHTML = "";
  headline.textContent = project.name;

  if (headline.classList.contains("no-project")) {
    headline.classList.remove("no-project");
  }
}

// Displays a "No project selected" message for the project page title
function showEmptyPojectPageHeadline() {
  const headline = getContentHeadline();

  headline.innerHTML = "&nbsp;";
  headline.classList.add("no-project");
}

// Focuses the pointer on a specific todo element identified by it's ID and clears it's textContent
function focusElementAndClearContent(id) {
  const newTodoItem = getTodoItemNameFieldById(id);
  newTodoItem.focus();
  newTodoItem.textContent = "";
}

// Gets the value from the project name input field, sanitizes it and sets it as textContent for the projects name
function updateProjectName(event) {
  const projectLink = event.target.parentNode;
  const name = projectLink.querySelector("span");
  const sanitizedValue = sanitizeUserData(event.target.value);

  name.textContent = sanitizedValue;
}

// Adds the class "disabled" to the remove project button
function disableRemoveProjectButton() {
  const removeProjectButton = getRemoveProjectButton();

  if (!removeProjectButton.classList.contains("disabled")) {
    removeProjectButton.classList.add("disabled");
  }
}

// Removes the class "disabled" from the remove project button
function enableRemoveProjectButton() {
  const removeProjectButton = getRemoveProjectButton();

  if (removeProjectButton.classList.contains("disabled")) {
    removeProjectButton.classList.remove("disabled");
  }
}

// Adds the class "disabled" to the add new task button
function disableNewTaskButton() {
  const newTaskButton = getNewTaskButton();

  if (!newTaskButton.classList.contains("disabled")) {
    newTaskButton.classList.add("disabled");
  }
}

// Removes the class "disabled" from the add new task button
function enableNewTaskButton() {
  const newTaskButton = getNewTaskButton();

  if (newTaskButton.classList.contains("disabled")) {
    newTaskButton.classList.remove("disabled");
  }
}

/* 
###############################################################################
DOM ELEMENT DATA RETRIEVAL
###############################################################################
*/
// Retrieves the data-project-id attribute from an element
function getDataProjectId(htmlElement) {
  return htmlElement.getAttribute("data-project-id");
}

// Retrieves an element by it's data-project-id
function getElementByDataProjectId(id) {
  const allProjectLinks = getProjectLinks();
  let projectLink = null;

  allProjectLinks.forEach((link) => {
    let dataProjectId = getDataProjectId(link);

    if (dataProjectId === id) {
      projectLink = link;
    }
  });

  return projectLink;
}

// Retrieves the ID from an HTML element
function getElementId(htmlElement) {
  return htmlElement.id;
}

// Retrieves HTML element by ID
function getElementById(id) {
  return document.getElementById(id);
}

// Retrieves an HTML element by its ID
function getTodoItemNameFieldById(id) {
  const todoItem = document.getElementById(id);
  return todoItem.querySelector(".todo-item__name");
}

// Checks all links that reference project objects and returns the one that has the "active" class.
function findActiveProjectId() {
  const projectLinks = getProjectLinks();
  let activeProjectId = "";

  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      activeProjectId = getDataProjectId(link);
    }
  });

  return activeProjectId;
}

/* 
Removes the class "hide" from the project name input field, making it visible.
Adds the class "hide" to the project'S name wrapping span at the same time.
Finnally selects the text inside the input field for convenience.
*/
function showProjectInputField(event) {
  const projectLink = event.target.parentNode;
  const name = projectLink.querySelector("span");
  const input = projectLink.querySelector("input");

  name.classList.add("hide");
  input.classList.remove("hide");
  input.select();
}

/* 
Adds the class "hide" to the project name input field, thus hiding it from display.
Removes the class "hide" from the project's name wrapping span at the same time.
*/
function hideProjectInputField(event) {
  const projectLink = event.target.parentNode;
  const name = projectLink.querySelector("span");
  const input = projectLink.querySelector("input");

  name.classList.remove("hide");
  input.classList.add("hide");
}

// Checks if an event happened on the title of a todo item
function isTodoItemTitle(event) {
  return event.target.matches(".todo-item__name");
}

// Checks if an event happened on .project-item or a child of .project-item
function isProjectLink(event) {
  return event.target.matches(".project-item");
}

// Checks if event.target is the name of a project button
function isProjectName(event) {
  return event.target.matches(".project-item span");
}

// Checks if event.target is the input field in a project button
function isProjectInput(event) {
  return event.target.matches(".project-item input");
}

// Checks if the textContent of an element is empty
function isTextContentEmpty(event) {
  return event.target.textContent === "";
}

/* DATA INPUT
####################################################################*/
// Sanitizes data entered by users to prevent XSS attacks
function sanitizeUserData(data) {
  return dompurify__WEBPACK_IMPORTED_MODULE_1___default().sanitize(data);
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectsFromLocalStorage: () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   isLocalStorageAvailable: () => (/* binding */ isLocalStorageAvailable),
/* harmony export */   isProjectsArrayInStorage: () => (/* binding */ isProjectsArrayInStorage),
/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


function isLocalStorageAvailable() {
  try {
    const test = "test";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function saveProjectsToLocalStorage() {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("projectsArray", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsArray));
  }
}

function getProjectsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("projectsArray"));
}

function isProjectsArrayInStorage() {
  return localStorage.getItem("projectsArray") !== null;
}


/***/ }),

/***/ "./src/todoItemClass.js":
/*!******************************!*\
  !*** ./src/todoItemClass.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItem: () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
  static hiddenProperties = ["projectId", "id", "checked"]; // Define properties, that should not be visible to the public
  static globalId = 0;

  constructor(projectId, title = "New Task", dueDate = "", checked = "false") {
    this.projectId = projectId;
    this.title = title;
    this.dueDate = dueDate;
    this.checked = checked;
    TodoItem.globalId += 1; // increment static variable globalId with each new instance
    this.id = TodoItem.globalId.toString(); // assigns unique id to every new todo item
  }

  isHiddenProperty(property) {
    return TodoItem.hiddenProperties.includes(property);
  }
}

TodoItem.prototype.resetTitle = function () {
  this.title = "New Task";
};


/***/ }),

/***/ "./src/todoProjectClass.js":
/*!*********************************!*\
  !*** ./src/todoProjectClass.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoProjectItem: () => (/* binding */ TodoProjectItem)
/* harmony export */ });
class TodoProjectItem {
  static globalId = 0;

  constructor(name = "New Project", active = false) {
    TodoProjectItem.globalId += 1;
    this.id = TodoProjectItem.globalId.toString();
    this.name = name;
    this.array = [];
    this.active = active;
  }
}


/***/ }),

/***/ "./src/img/undraw_add_files_re_v09g.svg":
/*!**********************************************!*\
  !*** ./src/img/undraw_add_files_re_v09g.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1989881f1e2032e86c93.svg";

/***/ }),

/***/ "./src/img/undraw_no_data_re_kwbl.svg":
/*!********************************************!*\
  !*** ./src/img/undraw_no_data_re_kwbl.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25f44d7526c9fa6cccd5.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





/* 
####################################################################
CONTENT UPDATE & REFRESH
Creates the todo items and projects,
shows the headline, adds datepickers
####################################################################
*/
function updateContent() {
  const content = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getContent)();
  content.innerHTML = "";

  // Checks whether there are projects to display
  if ((0,_data__WEBPACK_IMPORTED_MODULE_2__.isProjectsArrayNotEmpty)()) {
    const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();

    // Checks if a project is marked active -> if not mark the first project in the array
    if (activeProject === null) {
      (0,_data__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_data__WEBPACK_IMPORTED_MODULE_2__.projectsArray[0]);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
    }

    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addActiveClassToActiveProject)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.updateContentHeadline)(activeProject);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.enableNewTaskButton)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.enableRemoveProjectButton)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeHighlightClassFromNewProjectButton)();

    // Checks whether the active project has todo items
    if ((0,_data__WEBPACK_IMPORTED_MODULE_2__.projectHasTodoItems)(activeProject)) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
    } else {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showEmptyTodoListMessage)();
    }
  } else {
    // If projectsArray[] is empty change the look of the app
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showEmptyProjectsArrayMessage)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showEmptyPojectPageHeadline)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.disableNewTaskButton)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.disableRemoveProjectButton)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addHighlightClassToNewProjectButton)();
  }
}

/* 
####################################################################
PROJECT ACTIVATION
Returns project from projectsArray[] by it's ID.
ID is retrieved from a <div> referencing the project's name.
####################################################################
*/
function initializeProjectNavigation() {
  const nav = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getNav)();

  nav.addEventListener("click", (event) => {
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isProjectLink)(event)) {
      const projectLink = event.target;
      const projectId = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getDataProjectId)(projectLink);
      const clickedProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.findProjectById)(projectId);

      (0,_data__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(clickedProject);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
      updateContent();
    }
  });
}

/* 
###############################################################################
PROJECT CREATION
Creates new project via click on "New Project" 
###############################################################################
*/
(function initializeNewProjectButton() {
  const newProjectButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getNewProjectButton)();
  const body = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getBody)();

  newProjectButton.addEventListener("click", () => {
    const newProjectId = (0,_data__WEBPACK_IMPORTED_MODULE_2__.createAndStoreNewProject)(); // returns the new project's ID
    const newProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.findProjectById)(newProjectId);

    (0,_data__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(newProject);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshNav)();
    updateContent();
    body.focus();
  });
})();

/* 
###############################################################################
PROJECT NAME INTERACTION
Manages user interaction/updates to project name 
###############################################################################
*/
function handleProjectNameInteraction() {
  const nav = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getNav)();

  /* 
  Hides name field & shows input when a project name is clicked & project is active.
  If not active, a click will activate the project (handled by initializeProjectNavigation()).
  The <span> that wraps the project name has "pointer-events: none" while the project is not active.
  */
  nav.addEventListener("click", (event) => {
    const allProjectLinks = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getProjectLinks)();

    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isProjectLink)(event)) {
      const projectLink = event.target;

      allProjectLinks.forEach((link) => {
        // Hides name & shows input field of any project other than event.target
        if (link !== projectLink) {
          const name = link.querySelector("span");
          const input = link.querySelector("input");

          name.classList.remove("hide");
          input.classList.add("hide");
        }
      });
    }

    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isProjectName)(event)) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showProjectInputField)(event);
    }
  });

  // Stores & updates a project name when a user updates the input field.
  nav.addEventListener("input", (event) => {
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isProjectInput)(event)) {
      (0,_data__WEBPACK_IMPORTED_MODULE_2__.storeProjectName)(event);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.updateProjectName)(event);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
    }
  });

  /* 
  Hides the input field when the focus is lost. 
  Updates the right hand side content, to reflect any possible updates to the name.
  */
  nav.addEventListener("focusout", (event) => {
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isProjectInput)(event)) {
      const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();

      if (activeProject.name === "") {
        activeProject.name = "Unnamed Project";
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
      }

      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.hideProjectInputField)(event);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshNav)();
      updateContent();
    }
  });

  // Same functionality as above for Escape & Enter key.
  nav.addEventListener("keydown", (event) => {
    if (
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.isProjectInput)(event) &&
      (event.key === "Escape" || event.key === "Enter")
    ) {
      const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();

      if (activeProject.name === "") {
        activeProject.name = "Unnamed Project";
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
      }

      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.hideProjectInputField)(event);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshNav)();
      updateContent();
    }
  });
}

/* 
###############################################################################
PROJECT REMOVAL
Removes a project when clicking "remove" next to the project's page title
###############################################################################
*/
function initializeRemoveProjectButton() {
  const body = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getBody)();
  const projectHeadlineContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getContentHeadlineContainer)();

  projectHeadlineContainer.addEventListener("click", (event) => {
    if ((0,_data__WEBPACK_IMPORTED_MODULE_2__.isProjectsArrayNotEmpty)()) {
      if (event.target.matches(".remove-project")) {
        const modalBox = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createModalBox)();
        body.appendChild(modalBox);

        // Short timeout so the browser recongnizes the new class
        setTimeout(() => {
          modalBox.classList.add("fade-in");
        }, 2);

        initializeModalBox();
        body.focus();
      }
    }
  });
}

function initializeModalBox() {
  const modalBox = document.querySelector(".modal-container");
  const cancelButton = modalBox.querySelector(".modal-cancel");
  const confirmButton = modalBox.querySelector(".modal-confirm");

  const handleKeydownEvent = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      if (event.key === "Enter") {
        const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();
        const activeProjectIndex =
          (0,_data__WEBPACK_IMPORTED_MODULE_2__.getIndexOfProjectInProjectsArray)(activeProject);
        const projectLinks = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getProjectLinks)();

        _data__WEBPACK_IMPORTED_MODULE_2__.projectsArray.splice(activeProjectIndex, 1); // remove the active project from the projectsArray[]
        if (_data__WEBPACK_IMPORTED_MODULE_2__.projectsArray.length > 0) {
          (0,_data__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_data__WEBPACK_IMPORTED_MODULE_2__.projectsArray[0]);
        }
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshNav)();
        updateContent();
      }
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    }
  };

  modalBox.addEventListener("click", (event) => {
    if (event.target === modalBox && event.target !== modalBox.firstChild) {
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    } else if (event.target === cancelButton) {
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    } else if (event.target === confirmButton) {
      const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();
      const activeProjectIndex =
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.getIndexOfProjectInProjectsArray)(activeProject);
      const projectLinks = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getProjectLinks)();

      _data__WEBPACK_IMPORTED_MODULE_2__.projectsArray.splice(activeProjectIndex, 1); // remove the active project from the projectsArray[]
      if (_data__WEBPACK_IMPORTED_MODULE_2__.projectsArray.length > 0) {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_data__WEBPACK_IMPORTED_MODULE_2__.projectsArray[0]);
      }
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshNav)();
      updateContent();
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    }
  });

  document.addEventListener("keydown", handleKeydownEvent);
}

/* 
###############################################################################
TODO ITEM CREATION
Creates new todo item via click on "Add Task" 
###############################################################################
*/
function initializeNewTaskButton() {
  const newTaskButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getNewTaskButton)();

  newTaskButton.addEventListener("click", () => {
    if ((0,_data__WEBPACK_IMPORTED_MODULE_2__.isProjectsArrayNotEmpty)()) {
      const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();
      const newTodoItemId = (0,_data__WEBPACK_IMPORTED_MODULE_2__.createAndStoreNewTodoItem)(); // returns the new todo item's ID

      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.focusElementAndClearContent)(newTodoItemId);
    }
  });
}

/*
###############################################################################
TODO ITEM TITLE INTERACTION
Manages user interaction with a todo item title 
###############################################################################
*/
function handleTodoItemTitleInteraction() {
  const content = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getContent)();

  /* 
  Stores updates to a todo item title.
  Exceptions: "Enter" & "Escape" -> see below. 
  */
  content.addEventListener("input", (event) => {
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTodoItemTitle)(event)) {
      (0,_data__WEBPACK_IMPORTED_MODULE_2__.storeTodoItemTitle)(event);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
    }
  });

  // Updates a todo item title when the focus is lost. Removes it when title is empty.
  content.addEventListener("focusout", (event) => {
    const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();
    const todoItemId = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getElementId)(event.target.parentNode);

    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTodoItemTitle)(event)) {
      if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTextContentEmpty)(event)) {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.removeTodoItemById)(todoItemId);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
      } else {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.storeTodoItemTitle)(event);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
      }
    }
  });

  // Creates new todo item when ENTER is pressed. Removes it when title is empty.
  content.addEventListener("keydown", (event) => {
    const body = document.querySelector("body");
    const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();
    const todoItemId = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getElementId)(event.target.parentNode);

    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTodoItemTitle)(event) && event.key === "Enter") {
      if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTextContentEmpty)(event)) {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.removeTodoItemById)(todoItemId);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
      } else {
        event.preventDefault();

        const newTodoItemId = (0,_data__WEBPACK_IMPORTED_MODULE_2__.createAndStoreNewTodoItem)(); // returns the new item's id
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.focusElementAndClearContent)(newTodoItemId);
      }
    }

    // Focuses <body> when ESCAPE is pressed. Resets the title to the default value when empty.
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTodoItemTitle)(event) && event.key === "Escape") {
      const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();
      const todoItem = (0,_data__WEBPACK_IMPORTED_MODULE_2__.findTodoItemById)(todoItemId);

      if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTextContentEmpty)(event)) {
        todoItem.resetTitle();
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
      } else {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.storeTodoItemTitle)(event);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        body.focus();
      }
    }
  });
}

function handleTodoItemCheckComplete() {
  const content = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getContent)();

  content.addEventListener("click", (event) => {
    const activeProject = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();

    if (event.target.matches(".todo-item .checkmark-container .checkmark")) {
      const todoItemId = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getElementId)(event.target.parentNode.parentNode);
      const todoItem = (0,_data__WEBPACK_IMPORTED_MODULE_2__.findTodoItemById)(todoItemId);

      // Mark as complete so checkbox will stay checked when content is refreshed
      todoItem.checked = "true";

      setTimeout(function () {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.removeTodoItemById)(todoItemId);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateContent)(activeProject);
      }, 1100);
    }
  });
}

/* APP INITIALIZATION
####################################################################*/
// Gets all projects from local storage if available or loads default data
if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.isLocalStorageAvailable)() && (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.isProjectsArrayInStorage)()) {
  const localStorageProjectsArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getProjectsFromLocalStorage)();
  // Reconstructs all project objects to reestablish prototype inheritance and methods
  const newProjectsArray = (0,_data__WEBPACK_IMPORTED_MODULE_2__.reconstructAllProjectObjects)(
    localStorageProjectsArray
  );
  (0,_data__WEBPACK_IMPORTED_MODULE_2__.emptyOldArrayAndPopulateWithNewItems)(newProjectsArray);
} else {
  (0,_data__WEBPACK_IMPORTED_MODULE_2__.storeProjects)(_data__WEBPACK_IMPORTED_MODULE_2__.defaultProject); // load default data
}

document.addEventListener("DOMContentLoaded", () => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshNav)();
  updateContent();
  // Associates the project names with the actual poject objects
  initializeProjectNavigation();
  // Handles updates of project name by the user
  handleProjectNameInteraction();
  // Handles removal of projects via button next to project page title
  initializeRemoveProjectButton();
  // Handles creation of new todo items via a button on top right
  initializeNewTaskButton();
  // Handles updates of todo item title by the user
  handleTodoItemTitleInteraction();
  // Handles the "check as complete" action
  handleTodoItemCheckComplete();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFP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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQLE1BQU0sdURBQWdCO0FBQ3RCLDBCQUEwQix1REFBZ0I7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3VCO0FBQ047QUFDK0M7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHlCQUF5QiwyREFBVTtBQUNuQywwQkFBMEIsMkRBQVU7O0FBRXBDO0FBQ0Esc0JBQXNCLHlHQUErQjtBQUNyRDtBQUNBLHVCQUF1Qix5R0FBK0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2REFBaUI7QUFDeEU7O0FBRUE7QUFDQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERpQjtBQUNLO0FBQ0o7QUFDUTtBQUs5QjtBQUNJO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdDOztBQUVoQztBQUNBLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXLHlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsU0FBUyx5RUFBZTtBQUN4QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVILGFBQWEseUVBQWU7QUFDNUI7QUFD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eUVBQTBCO0FBQ2xDLFFBQVEscURBQWU7QUFDdkIsUUFBUTtBQUNSLFFBQVEseURBQWtCO0FBQzFCLFFBQVEseUVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGtCQUFrQixnREFBVTs7QUFFNUI7QUFDQSwwQkFBMEIsdURBQWdCOztBQUUxQztBQUNBLHlCQUF5QixrREFBWTtBQUNyQyx1QkFBdUIsdURBQWdCOztBQUV2QztBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBa0I7QUFDMUIsUUFBUSx5RUFBMEI7QUFDbEMsUUFBUSxxREFBZTtBQUN2QixPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBdUIsTUFBTSx1RUFBd0I7QUFDekQsb0NBQW9DLDBFQUEyQjtBQUMvRDtBQUNBLDJCQUEyQixtRUFBNEI7QUFDdkQ7QUFDQTtBQUNBLEVBQUUsMkVBQW9DO0FBQ3RDLEVBQUU7QUFDRixFQUFFLG9EQUFhLENBQUMsaURBQWMsR0FBRztBQUNqQzs7QUFFQTtBQUNBLEVBQUUsZ0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvYWlyLWRhdGVwaWNrZXIvYWlyLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Fpci1kYXRlcGlja2VyL2luZGV4LmVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9haXItZGF0ZXBpY2tlci9sb2NhbGUvZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Fpci1kYXRlcGlja2VyL2Fpci1kYXRlcGlja2VyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvZGlzdC9wdXJpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Fpci1kYXRlcGlja2VyL2Fpci1kYXRlcGlja2VyLmNzcz83Yzc2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Qcm9qZWN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQWlyRGF0ZXBpY2tlcj10KCk6ZS5BaXJEYXRlcGlja2VyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17ZDpmdW5jdGlvbih0LGkpe2Zvcih2YXIgcyBpbiBpKWUubyhpLHMpJiYhZS5vKHQscykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHMse2VudW1lcmFibGU6ITAsZ2V0Omlbc119KX0sbzpmdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX19LHQ9e307ZS5kKHQse2RlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUn19KTt2YXIgaT17ZGF5czpcImRheXNcIixtb250aHM6XCJtb250aHNcIix5ZWFyczpcInllYXJzXCIsZGF5OlwiZGF5XCIsbW9udGg6XCJtb250aFwiLHllYXI6XCJ5ZWFyXCIsZXZlbnRDaGFuZ2VWaWV3RGF0ZTpcImNoYW5nZVZpZXdEYXRlXCIsZXZlbnRDaGFuZ2VDdXJyZW50VmlldzpcImNoYW5nZUN1cnJlbnRWaWV3XCIsZXZlbnRDaGFuZ2VGb2N1c0RhdGU6XCJjaGFuZ2VGb2N1c0RhdGVcIixldmVudENoYW5nZVNlbGVjdGVkRGF0ZTpcImNoYW5nZVNlbGVjdGVkRGF0ZVwiLGV2ZW50Q2hhbmdlVGltZTpcImNoYW5nZVRpbWVcIixldmVudENoYW5nZUxhc3RTZWxlY3RlZERhdGU6XCJjaGFuZ2VMYXN0U2VsZWN0ZWREYXRlXCIsYWN0aW9uU2VsZWN0RGF0ZTpcInNlbGVjdERhdGVcIixhY3Rpb25VbnNlbGVjdERhdGU6XCJ1bnNlbGVjdERhdGVcIixjc3NDbGFzc1dlZWtlbmQ6XCItd2Vla2VuZC1cIn0scz17Y2xhc3NlczpcIlwiLGlubGluZTohMSxsb2NhbGU6e2RheXM6W1wi0JLQvtGB0LrRgNC10YHQtdC90YzQtVwiLFwi0J/QvtC90LXQtNC10LvRjNC90LjQulwiLFwi0JLRgtC+0YDQvdC40LpcIixcItCh0YDQtdC00LBcIixcItCn0LXRgtCy0LXRgNCzXCIsXCLQn9GP0YLQvdC40YbQsFwiLFwi0KHRg9Cx0LHQvtGC0LBcIl0sZGF5c1Nob3J0OltcItCS0L7RgVwiLFwi0J/QvtC9XCIsXCLQktGC0L5cIixcItCh0YDQtVwiLFwi0KfQtdGCXCIsXCLQn9GP0YJcIixcItCh0YPQsVwiXSxkYXlzTWluOltcItCS0YFcIixcItCf0L1cIixcItCS0YJcIixcItCh0YBcIixcItCn0YJcIixcItCf0YJcIixcItCh0LFcIl0sbW9udGhzOltcItCv0L3QstCw0YDRjFwiLFwi0KTQtdCy0YDQsNC70YxcIixcItCc0LDRgNGCXCIsXCLQkNC/0YDQtdC70YxcIixcItCc0LDQuVwiLFwi0JjRjtC90YxcIixcItCY0Y7Qu9GMXCIsXCLQkNCy0LPRg9GB0YJcIixcItCh0LXQvdGC0Y/QsdGA0YxcIixcItCe0LrRgtGP0LHRgNGMXCIsXCLQndC+0Y/QsdGA0YxcIixcItCU0LXQutCw0LHRgNGMXCJdLG1vbnRoc1Nob3J0OltcItCv0L3QslwiLFwi0KTQtdCyXCIsXCLQnNCw0YBcIixcItCQ0L/RgFwiLFwi0JzQsNC5XCIsXCLQmNGO0L1cIixcItCY0Y7Qu1wiLFwi0JDQstCzXCIsXCLQodC10L1cIixcItCe0LrRglwiLFwi0J3QvtGPXCIsXCLQlNC10LpcIl0sdG9kYXk6XCLQodC10LPQvtC00L3Rj1wiLGNsZWFyOlwi0J7Rh9C40YHRgtC40YLRjFwiLGRhdGVGb3JtYXQ6XCJkZC5NTS55eXl5XCIsdGltZUZvcm1hdDpcIkhIOm1tXCIsZmlyc3REYXk6MX0sc3RhcnREYXRlOm5ldyBEYXRlLGZpcnN0RGF5OlwiXCIsd2Vla2VuZHM6WzYsMF0sZGF0ZUZvcm1hdDpcIlwiLGFsdEZpZWxkOlwiXCIsYWx0RmllbGREYXRlRm9ybWF0OlwiVFwiLHRvZ2dsZVNlbGVjdGVkOiEwLGtleWJvYXJkTmF2OiEwLHNlbGVjdGVkRGF0ZXM6ITEsY29udGFpbmVyOlwiXCIsaXNNb2JpbGU6ITEsdmlzaWJsZTohMSxwb3NpdGlvbjpcImJvdHRvbSBsZWZ0XCIsb2Zmc2V0OjEyLHZpZXc6aS5kYXlzLG1pblZpZXc6aS5kYXlzLHNob3dPdGhlck1vbnRoczohMCxzZWxlY3RPdGhlck1vbnRoczohMCxtb3ZlVG9PdGhlck1vbnRoc09uU2VsZWN0OiEwLHNob3dPdGhlclllYXJzOiEwLHNlbGVjdE90aGVyWWVhcnM6ITAsbW92ZVRvT3RoZXJZZWFyc09uU2VsZWN0OiEwLG1pbkRhdGU6XCJcIixtYXhEYXRlOlwiXCIsZGlzYWJsZU5hdldoZW5PdXRPZlJhbmdlOiEwLG11bHRpcGxlRGF0ZXM6ITEsbXVsdGlwbGVEYXRlc1NlcGFyYXRvcjpcIiwgXCIscmFuZ2U6ITEsZHluYW1pY1JhbmdlOiEwLGJ1dHRvbnM6ITEsbW9udGhzRmllbGQ6XCJtb250aHNTaG9ydFwiLHNob3dFdmVudDpcImZvY3VzXCIsYXV0b0Nsb3NlOiExLGZpeGVkSGVpZ2h0OiExLHByZXZIdG1sOic8c3ZnPjxwYXRoIGQ9XCJNIDE3LDEyIGwgLTUsNSBsIDUsNVwiPjwvcGF0aD48L3N2Zz4nLG5leHRIdG1sOic8c3ZnPjxwYXRoIGQ9XCJNIDE0LDEyIGwgNSw1IGwgLTUsNVwiPjwvcGF0aD48L3N2Zz4nLG5hdlRpdGxlczp7ZGF5czpcIk1NTU0sIDxpPnl5eXk8L2k+XCIsbW9udGhzOlwieXl5eVwiLHllYXJzOlwieXl5eTEgLSB5eXl5MlwifSx0aW1lcGlja2VyOiExLG9ubHlUaW1lcGlja2VyOiExLGRhdGVUaW1lU2VwYXJhdG9yOlwiIFwiLHRpbWVGb3JtYXQ6XCJcIixtaW5Ib3VyczowLG1heEhvdXJzOjI0LG1pbk1pbnV0ZXM6MCxtYXhNaW51dGVzOjU5LGhvdXJzU3RlcDoxLG1pbnV0ZXNTdGVwOjEsb25TZWxlY3Q6ITEsb25DaGFuZ2VWaWV3RGF0ZTohMSxvbkNoYW5nZVZpZXc6ITEsb25SZW5kZXJDZWxsOiExLG9uU2hvdzohMSxvbkhpZGU6ITEsb25DbGlja0RheU5hbWU6ITF9O2Z1bmN0aW9uIGEoZSl7bGV0IHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOmRvY3VtZW50O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3QucXVlcnlTZWxlY3RvcihlKTplfWZ1bmN0aW9uIG4oKXtsZXR7dGFnTmFtZTplPVwiZGl2XCIsY2xhc3NOYW1lOnQ9XCJcIixpbm5lckh0bWw6aT1cIlwiLGlkOnM9XCJcIixhdHRyczphPXt9fT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3JldHVybiB0JiZuLmNsYXNzTGlzdC5hZGQoLi4udC5zcGxpdChcIiBcIikpLHMmJihuLmlkPXMpLGkmJihuLmlubmVySFRNTD1pKSxhJiZyKG4sYSksbn1mdW5jdGlvbiByKGUsdCl7Zm9yKGxldFtpLHNdb2YgT2JqZWN0LmVudHJpZXModCkpdm9pZCAwIT09cyYmZS5zZXRBdHRyaWJ1dGUoaSxzKTtyZXR1cm4gZX1mdW5jdGlvbiBvKGUpe3JldHVybiBuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksZS5nZXRNb250aCgpKzEsMCkuZ2V0RGF0ZSgpfWZ1bmN0aW9uIGgoZSl7bGV0IHQ9ZS5nZXRIb3VycygpLHtob3VyczppLGRheVBlcmlvZDpzfT1sKHQpO3JldHVybnt5ZWFyOmUuZ2V0RnVsbFllYXIoKSxtb250aDplLmdldE1vbnRoKCksZnVsbE1vbnRoOmUuZ2V0TW9udGgoKSsxPDEwP1wiMFwiKyhlLmdldE1vbnRoKCkrMSk6ZS5nZXRNb250aCgpKzEsZGF0ZTplLmdldERhdGUoKSxmdWxsRGF0ZTplLmdldERhdGUoKTwxMD9cIjBcIitlLmdldERhdGUoKTplLmdldERhdGUoKSxkYXk6ZS5nZXREYXkoKSxob3Vyczp0LGZ1bGxIb3VyczpkKHQpLGhvdXJzMTI6aSxkYXlQZXJpb2Q6cyxmdWxsSG91cnMxMjpkKGkpLG1pbnV0ZXM6ZS5nZXRNaW51dGVzKCksZnVsbE1pbnV0ZXM6ZS5nZXRNaW51dGVzKCk8MTA/XCIwXCIrZS5nZXRNaW51dGVzKCk6ZS5nZXRNaW51dGVzKCl9fWZ1bmN0aW9uIGwoZSl7cmV0dXJue2RheVBlcmlvZDplPjExP1wicG1cIjpcImFtXCIsaG91cnM6ZSUxMj09MD8xMjplJTEyfX1mdW5jdGlvbiBkKGUpe3JldHVybiBlPDEwP1wiMFwiK2U6ZX1mdW5jdGlvbiBjKGUpe2xldCB0PTEwKk1hdGguZmxvb3IoZS5nZXRGdWxsWWVhcigpLzEwKTtyZXR1cm5bdCx0KzldfWZ1bmN0aW9uIHUoKXtsZXQgZT1bXTtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSh0KSxzPTA7czx0O3MrKylpW3NdPWFyZ3VtZW50c1tzXTtyZXR1cm4gaS5mb3JFYWNoKCh0PT57aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpZm9yKGxldCBpIGluIHQpdFtpXSYmZS5wdXNoKGkpO2Vsc2UgdCYmZS5wdXNoKHQpfSkpLGUuam9pbihcIiBcIil9ZnVuY3Rpb24gcChlLHQpe2xldCBzPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTppLmRheXM7aWYoIWV8fCF0KXJldHVybiExO2xldCBhPWgoZSksbj1oKHQpO3JldHVybntbaS5kYXlzXTphLmRhdGU9PT1uLmRhdGUmJmEubW9udGg9PT1uLm1vbnRoJiZhLnllYXI9PT1uLnllYXIsW2kubW9udGhzXTphLm1vbnRoPT09bi5tb250aCYmYS55ZWFyPT09bi55ZWFyLFtpLnllYXJzXTphLnllYXI9PT1uLnllYXJ9W3NdfWZ1bmN0aW9uIG0oZSx0LGkpe2xldCBzPWcoZSwhMSkuZ2V0VGltZSgpLGE9Zyh0LCExKS5nZXRUaW1lKCk7cmV0dXJuIGk/cz49YTpzPmF9ZnVuY3Rpb24gdihlLHQpe3JldHVybiFtKGUsdCwhMCl9ZnVuY3Rpb24gZyhlKXtsZXQgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdLGk9bmV3IERhdGUoZS5nZXRUaW1lKCkpO3JldHVyblwiYm9vbGVhblwiIT10eXBlb2YgdHx8dHx8ZnVuY3Rpb24oZSl7ZS5zZXRIb3VycygwLDAsMCwwKX0oaSksaX1mdW5jdGlvbiBEKGUsdCxpKXtlLmxlbmd0aD9lLmZvckVhY2goKGU9PntlLmFkZEV2ZW50TGlzdGVuZXIodCxpKX0pKTplLmFkZEV2ZW50TGlzdGVuZXIodCxpKX1mdW5jdGlvbiB5KGUsdCl7cmV0dXJuISghZXx8ZT09PWRvY3VtZW50fHxlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkmJihlLm1hdGNoZXModCk/ZTp5KGUucGFyZW50Tm9kZSx0KSl9ZnVuY3Rpb24gZihlLHQsaSl7cmV0dXJuIGU+aT9pOmU8dD90OmV9ZnVuY3Rpb24gdyhlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSh0PjE/dC0xOjApLHM9MTtzPHQ7cysrKWlbcy0xXT1hcmd1bWVudHNbc107cmV0dXJuIGkuZmlsdGVyKChlPT5lKSkuZm9yRWFjaCgodD0+e2ZvcihsZXRbaSxzXW9mIE9iamVjdC5lbnRyaWVzKHQpKWlmKHZvaWQgMCE9PXMmJlwiW29iamVjdCBPYmplY3RdXCI9PT1zLnRvU3RyaW5nKCkpe2xldCB0PXZvaWQgMCE9PWVbaV0/ZVtpXS50b1N0cmluZygpOnZvaWQgMCxhPXMudG9TdHJpbmcoKSxuPUFycmF5LmlzQXJyYXkocyk/W106e307ZVtpXT1lW2ldP3QhPT1hP246ZVtpXTpuLHcoZVtpXSxzKX1lbHNlIGVbaV09c30pKSxlfWZ1bmN0aW9uIGIoZSl7bGV0IHQ9ZTtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGV8fChcInN0cmluZ1wiPT10eXBlb2YgZSYmL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvLnRlc3QoZSkmJihlKz1cIlQwMDowMDowMFwiKSx0PW5ldyBEYXRlKGUpKSxpc05hTih0LmdldFRpbWUoKSkmJihjb25zb2xlLmxvZyhgVW5hYmxlIHRvIGNvbnZlcnQgdmFsdWUgXCIke2V9XCIgdG8gRGF0ZSBvYmplY3RgKSx0PSExKSx0fWZ1bmN0aW9uIGsoZSl7bGV0IHQ9XCJcXFxcc3xcXFxcLnwtfC98XFxcXFxcXFx8LHxcXFxcJHxcXFxcIXxcXFxcP3w6fDtcIjtyZXR1cm4gbmV3IFJlZ0V4cChcIihefD58XCIrdCtcIikoXCIrZStcIikoJHw8fFwiK3QrXCIpXCIsXCJnXCIpfWZ1bmN0aW9uICQoZSx0LGkpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBpPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1pKXt2YXIgcz1pLmNhbGwoZSxcInN0cmluZ1wiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcylyZXR1cm4gczt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuIFN0cmluZyhlKX0oZSk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWNsYXNzIEN7Y29uc3RydWN0b3IoKXtsZXR7dHlwZTplLGRhdGU6dCxkcDppLG9wdHM6cyxib2R5OmF9PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTskKHRoaXMsXCJmb2N1c1wiLCgoKT0+e3RoaXMuJGNlbGwuY2xhc3NMaXN0LmFkZChcIi1mb2N1cy1cIiksdGhpcy5mb2N1c2VkPSEwfSkpLCQodGhpcyxcInJlbW92ZUZvY3VzXCIsKCgpPT57dGhpcy4kY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiLWZvY3VzLVwiKSx0aGlzLmZvY3VzZWQ9ITF9KSksJCh0aGlzLFwic2VsZWN0XCIsKCgpPT57dGhpcy4kY2VsbC5jbGFzc0xpc3QuYWRkKFwiLXNlbGVjdGVkLVwiKSx0aGlzLnNlbGVjdGVkPSEwfSkpLCQodGhpcyxcInJlbW92ZVNlbGVjdFwiLCgoKT0+e3RoaXMuJGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIi1zZWxlY3RlZC1cIixcIi1yYW5nZS1mcm9tLVwiLFwiLXJhbmdlLXRvLVwiKSx0aGlzLnNlbGVjdGVkPSExfSkpLCQodGhpcyxcIm9uQ2hhbmdlU2VsZWN0ZWREYXRlXCIsKCgpPT57dGhpcy5pc0Rpc2FibGVkfHwodGhpcy5faGFuZGxlU2VsZWN0ZWRTdGF0dXMoKSx0aGlzLm9wdHMucmFuZ2UmJnRoaXMuX2hhbmRsZVJhbmdlU3RhdHVzKCkpfSkpLCQodGhpcyxcIm9uQ2hhbmdlRm9jdXNEYXRlXCIsKGU9PntpZighZSlyZXR1cm4gdm9pZCh0aGlzLmZvY3VzZWQmJnRoaXMucmVtb3ZlRm9jdXMoKSk7bGV0IHQ9cChlLHRoaXMuZGF0ZSx0aGlzLnR5cGUpO3Q/dGhpcy5mb2N1cygpOiF0JiZ0aGlzLmZvY3VzZWQmJnRoaXMucmVtb3ZlRm9jdXMoKSx0aGlzLm9wdHMucmFuZ2UmJnRoaXMuX2hhbmRsZVJhbmdlU3RhdHVzKCl9KSksJCh0aGlzLFwicmVuZGVyXCIsKCgpPT4odGhpcy4kY2VsbC5pbm5lckhUTUw9dGhpcy5fZ2V0SHRtbCgpLHRoaXMuX2hhbmRsZUNsYXNzZXMoKSx0aGlzLiRjZWxsKSkpLHRoaXMudHlwZT1lLHRoaXMuc2luZ2xlVHlwZT10aGlzLnR5cGUuc2xpY2UoMCwtMSksdGhpcy5kYXRlPXQsdGhpcy5kcD1pLHRoaXMub3B0cz1zLHRoaXMuYm9keT1hLHRoaXMuY3VzdG9tRGF0YT0hMSx0aGlzLmluaXQoKX1pbml0KCl7dmFyIGU7bGV0e29uUmVuZGVyQ2VsbDp0fT10aGlzLm9wdHM7dCYmKHRoaXMuY3VzdG9tRGF0YT10KHtkYXRlOnRoaXMuZGF0ZSxjZWxsVHlwZTp0aGlzLnNpbmdsZVR5cGUsZGF0ZXBpY2tlcjp0aGlzLmRwfSkpLHRoaXMuX2NyZWF0ZUVsZW1lbnQoKSx0aGlzLl9iaW5kRGF0ZXBpY2tlckV2ZW50cygpLG51bGwhPT0oZT10aGlzLmN1c3RvbURhdGEpJiZ2b2lkIDAhPT1lJiZlLmRpc2FibGVkJiZ0aGlzLmRwLmRpc2FibGVEYXRlKHRoaXMuZGF0ZSl9X2JpbmREYXRlcGlja2VyRXZlbnRzKCl7dGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHRoaXMub25DaGFuZ2VTZWxlY3RlZERhdGUpLHRoaXMuZHAub24oaS5ldmVudENoYW5nZUZvY3VzRGF0ZSx0aGlzLm9uQ2hhbmdlRm9jdXNEYXRlKX11bmJpbmREYXRlcGlja2VyRXZlbnRzKCl7dGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlU2VsZWN0ZWREYXRlKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlRm9jdXNEYXRlLHRoaXMub25DaGFuZ2VGb2N1c0RhdGUpfV9jcmVhdGVFbGVtZW50KCl7dmFyIGU7bGV0e3llYXI6dCxtb250aDppLGRhdGU6c309aCh0aGlzLmRhdGUpLGE9KG51bGw9PT0oZT10aGlzLmN1c3RvbURhdGEpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmF0dHJzKXx8e307dGhpcy4kY2VsbD1uKHthdHRyczp7XCJkYXRhLXllYXJcIjp0LFwiZGF0YS1tb250aFwiOmksXCJkYXRhLWRhdGVcIjpzLC4uLmF9fSksdGhpcy4kY2VsbC5hZHBDZWxsPXRoaXN9X2dldENsYXNzTmFtZSgpe3ZhciBlO2xldCB0PW5ldyBEYXRlLHtzZWxlY3RPdGhlck1vbnRoczpzLHNlbGVjdE90aGVyWWVhcnM6YX09dGhpcy5vcHRzLHttaW5EYXRlOm4sbWF4RGF0ZTpyLGlzRGF0ZURpc2FibGVkOm99PXRoaXMuZHAse2RheTpsfT1oKHRoaXMuZGF0ZSksZD10aGlzLl9pc091dE9mTWluTWF4UmFuZ2UoKSxjPW8odGhpcy5kYXRlKSxtPXUoXCJhaXItZGF0ZXBpY2tlci1jZWxsXCIsYC0ke3RoaXMuc2luZ2xlVHlwZX0tYCx7XCItY3VycmVudC1cIjpwKHQsdGhpcy5kYXRlLHRoaXMudHlwZSksXCItbWluLWRhdGUtXCI6biYmcChuLHRoaXMuZGF0ZSx0aGlzLnR5cGUpLFwiLW1heC1kYXRlLVwiOnImJnAocix0aGlzLmRhdGUsdGhpcy50eXBlKX0pLHY9XCJcIjtzd2l0Y2godGhpcy50eXBlKXtjYXNlIGkuZGF5czp2PXUoe1wiLXdlZWtlbmQtXCI6dGhpcy5kcC5pc1dlZWtlbmQobCksXCItb3RoZXItbW9udGgtXCI6dGhpcy5pc090aGVyTW9udGgsXCItZGlzYWJsZWQtXCI6dGhpcy5pc090aGVyTW9udGgmJiFzfHxkfHxjfSk7YnJlYWs7Y2FzZSBpLm1vbnRoczp2PXUoe1wiLWRpc2FibGVkLVwiOmR9KTticmVhaztjYXNlIGkueWVhcnM6dj11KHtcIi1vdGhlci1kZWNhZGUtXCI6dGhpcy5pc090aGVyRGVjYWRlLFwiLWRpc2FibGVkLVwiOmR8fHRoaXMuaXNPdGhlckRlY2FkZSYmIWF9KX1yZXR1cm4gdShtLHYsbnVsbD09PShlPXRoaXMuY3VzdG9tRGF0YSl8fHZvaWQgMD09PWU/dm9pZCAwOmUuY2xhc3Nlcykuc3BsaXQoXCIgXCIpfV9nZXRIdG1sKCl7dmFyIGU7bGV0e3llYXI6dCxtb250aDpzLGRhdGU6YX09aCh0aGlzLmRhdGUpLHtzaG93T3RoZXJNb250aHM6bixzaG93T3RoZXJZZWFyczpyfT10aGlzLm9wdHM7aWYobnVsbCE9PShlPXRoaXMuY3VzdG9tRGF0YSkmJnZvaWQgMCE9PWUmJmUuaHRtbClyZXR1cm4gdGhpcy5jdXN0b21EYXRhLmh0bWw7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZSBpLmRheXM6cmV0dXJuIW4mJnRoaXMuaXNPdGhlck1vbnRoP1wiXCI6YTtjYXNlIGkubW9udGhzOnJldHVybiB0aGlzLmRwLmxvY2FsZVt0aGlzLm9wdHMubW9udGhzRmllbGRdW3NdO2Nhc2UgaS55ZWFyczpyZXR1cm4hciYmdGhpcy5pc090aGVyRGVjYWRlP1wiXCI6dH19X2lzT3V0T2ZNaW5NYXhSYW5nZSgpe2xldHttaW5EYXRlOmUsbWF4RGF0ZTp0fT10aGlzLmRwLHt0eXBlOnMsZGF0ZTphfT10aGlzLHttb250aDpuLHllYXI6cixkYXRlOm99PWgoYSksbD1zPT09aS5kYXlzLGQ9cz09PWkueWVhcnMsYz0hIWUmJm5ldyBEYXRlKHIsZD9lLmdldE1vbnRoKCk6bixsP286ZS5nZXREYXRlKCkpLHU9ISF0JiZuZXcgRGF0ZShyLGQ/dC5nZXRNb250aCgpOm4sbD9vOnQuZ2V0RGF0ZSgpKTtyZXR1cm4gZSYmdD92KGMsZSl8fG0odSx0KTplP3YoYyxlKTp0P20odSx0KTp2b2lkIDB9ZGVzdHJveSgpe3RoaXMudW5iaW5kRGF0ZXBpY2tlckV2ZW50cygpfV9oYW5kbGVSYW5nZVN0YXR1cygpe2NvbnN0e3NlbGVjdGVkRGF0ZXM6ZSxmb2N1c0RhdGU6dCxyYW5nZURhdGVUbzppLHJhbmdlRGF0ZUZyb206c309dGhpcy5kcCxhPWUubGVuZ3RoO2lmKCFhKXJldHVybjtsZXQgbj1zLHI9aTtpZigxPT09YSYmdCl7Y29uc3QgaT1tKHQsZVswXSk7bj1pP2VbMF06dCxyPWk/dDplWzBdfWxldCBvPXUoe1wiLWluLXJhbmdlLVwiOm4mJnImJihoPXRoaXMuZGF0ZSxsPW4sZD1yLG0oaCxsKSYmdihoLGQpKSxcIi1yYW5nZS1mcm9tLVwiOm4mJnAodGhpcy5kYXRlLG4sdGhpcy50eXBlKSxcIi1yYW5nZS10by1cIjpyJiZwKHRoaXMuZGF0ZSxyLHRoaXMudHlwZSl9KTt2YXIgaCxsLGQ7dGhpcy4kY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXJhbmdlLWZyb20tXCIsXCItcmFuZ2UtdG8tXCIsXCItaW4tcmFuZ2UtXCIpLG8mJnRoaXMuJGNlbGwuY2xhc3NMaXN0LmFkZCguLi5vLnNwbGl0KFwiIFwiKSl9X2hhbmRsZVNlbGVjdGVkU3RhdHVzKCl7bGV0IGU9dGhpcy5kcC5fY2hlY2tJZkRhdGVJc1NlbGVjdGVkKHRoaXMuZGF0ZSx0aGlzLnR5cGUpO2U/dGhpcy5zZWxlY3QoKTohZSYmdGhpcy5zZWxlY3RlZCYmdGhpcy5yZW1vdmVTZWxlY3QoKX1faGFuZGxlSW5pdGlhbEZvY3VzU3RhdHVzKCl7cCh0aGlzLmRwLmZvY3VzRGF0ZSx0aGlzLmRhdGUsdGhpcy50eXBlKSYmdGhpcy5mb2N1cygpfV9oYW5kbGVDbGFzc2VzKCl7dGhpcy4kY2VsbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiXCIpLHRoaXMuX2hhbmRsZUluaXRpYWxGb2N1c1N0YXR1cygpLHRoaXMuZHAuaGFzU2VsZWN0ZWREYXRlcyYmKHRoaXMuX2hhbmRsZVNlbGVjdGVkU3RhdHVzKCksdGhpcy5kcC5vcHRzLnJhbmdlJiZ0aGlzLl9oYW5kbGVSYW5nZVN0YXR1cygpKSx0aGlzLiRjZWxsLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5fZ2V0Q2xhc3NOYW1lKCkpfWdldCBpc0Rpc2FibGVkKCl7cmV0dXJuIHRoaXMuJGNlbGwubWF0Y2hlcyhcIi4tZGlzYWJsZWQtXCIpfWdldCBpc090aGVyTW9udGgoKXtyZXR1cm4gdGhpcy5kcC5pc090aGVyTW9udGgodGhpcy5kYXRlKX1nZXQgaXNPdGhlckRlY2FkZSgpe3JldHVybiB0aGlzLmRwLmlzT3RoZXJEZWNhZGUodGhpcy5kYXRlKX19ZnVuY3Rpb24gXyhlLHQsaSl7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIGk9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PWkpe3ZhciBzPWkuY2FsbChlLFwic3RyaW5nXCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBzKXJldHVybiBzO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4gU3RyaW5nKGUpfShlKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9bGV0IE09e1tpLmRheXNdOmA8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWVzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzIC0ke2kuZGF5c30tXCI+PC9kaXY+YCxbaS5tb250aHNdOmA8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMgLSR7aS5tb250aHN9LVwiPjwvZGl2PmAsW2kueWVhcnNdOmA8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMgLSR7aS55ZWFyc30tXCI+PC9kaXY+YH07Y29uc3QgUz1cIi5haXItZGF0ZXBpY2tlci1jZWxsXCI7Y2xhc3MgVHtjb25zdHJ1Y3RvcihlKXtsZXR7ZHA6dCx0eXBlOnMsb3B0czphfT1lO18odGhpcyxcImhhbmRsZUNsaWNrXCIsKGU9PntsZXQgdD1lLnRhcmdldC5jbG9zZXN0KFMpLmFkcENlbGw7aWYodC5pc0Rpc2FibGVkKXJldHVybjtpZighdGhpcy5kcC5pc01pblZpZXdSZWFjaGVkKXJldHVybiB2b2lkIHRoaXMuZHAuZG93bigpO2xldCBpPXRoaXMuZHAuX2NoZWNrSWZEYXRlSXNTZWxlY3RlZCh0LmRhdGUsdC50eXBlKTtpP3RoaXMuZHAuX2hhbmRsZUFscmVhZHlTZWxlY3RlZERhdGVzKGksdC5kYXRlKTp0aGlzLmRwLnNlbGVjdERhdGUodC5kYXRlKX0pKSxfKHRoaXMsXCJoYW5kbGVEYXlOYW1lQ2xpY2tcIiwoZT0+e2xldCB0PWUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZGF5LWluZGV4XCIpO3RoaXMub3B0cy5vbkNsaWNrRGF5TmFtZSh7ZGF5SW5kZXg6TnVtYmVyKHQpLGRhdGVwaWNrZXI6dGhpcy5kcH0pfSkpLF8odGhpcyxcIm9uQ2hhbmdlQ3VycmVudFZpZXdcIiwoZT0+e2UhPT10aGlzLnR5cGU/dGhpcy5oaWRlKCk6KHRoaXMuc2hvdygpLHRoaXMucmVuZGVyKCkpfSkpLF8odGhpcyxcIm9uTW91c2VPdmVyQ2VsbFwiLChlPT57bGV0IHQ9eShlLnRhcmdldCxTKTt0aGlzLmRwLnNldEZvY3VzRGF0ZSghIXQmJnQuYWRwQ2VsbC5kYXRlKX0pKSxfKHRoaXMsXCJvbk1vdXNlT3V0Q2VsbFwiLCgoKT0+e3RoaXMuZHAuc2V0Rm9jdXNEYXRlKCExKX0pKSxfKHRoaXMsXCJvbkNsaWNrQm9keVwiLChlPT57bGV0e29uQ2xpY2tEYXlOYW1lOnR9PXRoaXMub3B0cyxpPWUudGFyZ2V0O2kuY2xvc2VzdChTKSYmdGhpcy5oYW5kbGVDbGljayhlKSx0JiZpLmNsb3Nlc3QoXCIuYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWVcIikmJnRoaXMuaGFuZGxlRGF5TmFtZUNsaWNrKGUpfSkpLF8odGhpcyxcIm9uTW91c2VEb3duXCIsKGU9Pnt0aGlzLnByZXNzZWQ9ITA7bGV0IHQ9eShlLnRhcmdldCxTKSxpPXQmJnQuYWRwQ2VsbDtwKGkuZGF0ZSx0aGlzLmRwLnJhbmdlRGF0ZUZyb20pJiYodGhpcy5yYW5nZUZyb21Gb2N1c2VkPSEwKSxwKGkuZGF0ZSx0aGlzLmRwLnJhbmdlRGF0ZVRvKSYmKHRoaXMucmFuZ2VUb0ZvY3VzZWQ9ITApfSkpLF8odGhpcyxcIm9uTW91c2VNb3ZlXCIsKGU9PntpZighdGhpcy5wcmVzc2VkfHwhdGhpcy5kcC5pc01pblZpZXdSZWFjaGVkKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCk7bGV0IHQ9eShlLnRhcmdldCxTKSxpPXQmJnQuYWRwQ2VsbCx7c2VsZWN0ZWREYXRlczpzLHJhbmdlRGF0ZVRvOmEscmFuZ2VEYXRlRnJvbTpufT10aGlzLmRwO2lmKCFpfHxpLmlzRGlzYWJsZWQpcmV0dXJuO2xldHtkYXRlOnJ9PWk7aWYoMj09PXMubGVuZ3RoKXtpZih0aGlzLnJhbmdlRnJvbUZvY3VzZWQmJiFtKHIsYSkpe2xldHtob3VyczplLG1pbnV0ZXM6dH09aChuKTtyLnNldEhvdXJzKGUpLHIuc2V0TWludXRlcyh0KSx0aGlzLmRwLnJhbmdlRGF0ZUZyb209cix0aGlzLmRwLnJlcGxhY2VEYXRlKG4scil9aWYodGhpcy5yYW5nZVRvRm9jdXNlZCYmIXYocixuKSl7bGV0e2hvdXJzOmUsbWludXRlczp0fT1oKGEpO3Iuc2V0SG91cnMoZSksci5zZXRNaW51dGVzKHQpLHRoaXMuZHAucmFuZ2VEYXRlVG89cix0aGlzLmRwLnJlcGxhY2VEYXRlKGEscil9fX0pKSxfKHRoaXMsXCJvbk1vdXNlVXBcIiwoKCk9Pnt0aGlzLnByZXNzZWQ9ITEsdGhpcy5yYW5nZUZyb21Gb2N1c2VkPSExLHRoaXMucmFuZ2VUb0ZvY3VzZWQ9ITF9KSksXyh0aGlzLFwib25DaGFuZ2VWaWV3RGF0ZVwiLCgoZSx0KT0+e2lmKCF0aGlzLmlzVmlzaWJsZSlyZXR1cm47bGV0IHM9YyhlKSxhPWModCk7c3dpdGNoKHRoaXMuZHAuY3VycmVudFZpZXcpe2Nhc2UgaS5kYXlzOmlmKHAoZSx0LGkubW9udGhzKSlyZXR1cm47YnJlYWs7Y2FzZSBpLm1vbnRoczppZihwKGUsdCxpLnllYXJzKSlyZXR1cm47YnJlYWs7Y2FzZSBpLnllYXJzOmlmKHNbMF09PT1hWzBdJiZzWzFdPT09YVsxXSlyZXR1cm59dGhpcy5yZW5kZXIoKX0pKSxfKHRoaXMsXCJyZW5kZXJcIiwoKCk9Pnt0aGlzLmRlc3Ryb3lDZWxscygpLHRoaXMuX2dlbmVyYXRlQ2VsbHMoKSx0aGlzLmNlbGxzLmZvckVhY2goKGU9Pnt0aGlzLiRjZWxscy5hcHBlbmRDaGlsZChlLnJlbmRlcigpKX0pKX0pKSx0aGlzLmRwPXQsdGhpcy50eXBlPXMsdGhpcy5vcHRzPWEsdGhpcy5jZWxscz1bXSx0aGlzLiRlbD1cIlwiLHRoaXMucHJlc3NlZD0hMSx0aGlzLmlzVmlzaWJsZT0hMCx0aGlzLmluaXQoKX1pbml0KCl7dGhpcy5fYnVpbGRCYXNlSHRtbCgpLHRoaXMudHlwZT09PWkuZGF5cyYmdGhpcy5yZW5kZXJEYXlOYW1lcygpLHRoaXMucmVuZGVyKCksdGhpcy5fYmluZEV2ZW50cygpLHRoaXMuX2JpbmREYXRlcGlja2VyRXZlbnRzKCl9X2JpbmRFdmVudHMoKXtsZXR7cmFuZ2U6ZSxkeW5hbWljUmFuZ2U6dH09dGhpcy5vcHRzO0QodGhpcy4kZWwsXCJtb3VzZW92ZXJcIix0aGlzLm9uTW91c2VPdmVyQ2VsbCksRCh0aGlzLiRlbCxcIm1vdXNlb3V0XCIsdGhpcy5vbk1vdXNlT3V0Q2VsbCksRCh0aGlzLiRlbCxcImNsaWNrXCIsdGhpcy5vbkNsaWNrQm9keSksZSYmdCYmKEQodGhpcy4kZWwsXCJtb3VzZWRvd25cIix0aGlzLm9uTW91c2VEb3duKSxEKHRoaXMuJGVsLFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZSksRCh3aW5kb3cuZG9jdW1lbnQsXCJtb3VzZXVwXCIsdGhpcy5vbk1vdXNlVXApKX1fYmluZERhdGVwaWNrZXJFdmVudHMoKXt0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VWaWV3RGF0ZSx0aGlzLm9uQ2hhbmdlVmlld0RhdGUpLHRoaXMuZHAub24oaS5ldmVudENoYW5nZUN1cnJlbnRWaWV3LHRoaXMub25DaGFuZ2VDdXJyZW50Vmlldyl9X2J1aWxkQmFzZUh0bWwoKXt0aGlzLiRlbD1uKHtjbGFzc05hbWU6YGFpci1kYXRlcGlja2VyLWJvZHkgLSR7dGhpcy50eXBlfS1gLGlubmVySHRtbDpNW3RoaXMudHlwZV19KSx0aGlzLiRuYW1lcz1hKFwiLmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lc1wiLHRoaXMuJGVsKSx0aGlzLiRjZWxscz1hKFwiLmFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzXCIsdGhpcy4kZWwpfV9nZXREYXlOYW1lc0h0bWwoKXtsZXQgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5kcC5sb2NhbGUuZmlyc3REYXksdD1cIlwiLHM9dGhpcy5kcC5pc1dlZWtlbmQse29uQ2xpY2tEYXlOYW1lOmF9PXRoaXMub3B0cyxuPWUscj0wO2Zvcig7cjw3Oyl7bGV0IGU9biU3O3QrPWA8ZGl2IGNsYXNzPVwiJHt1KFwiYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWVcIix7W2kuY3NzQ2xhc3NXZWVrZW5kXTpzKGUpLFwiLWNsaWNrYWJsZS1cIjohIWF9KX1cIiBkYXRhLWRheS1pbmRleD0nJHtlfSc+JHt0aGlzLmRwLmxvY2FsZS5kYXlzTWluW2VdfTwvZGl2PmAscisrLG4rK31yZXR1cm4gdH1yZW5kZXJEYXlOYW1lcygpe3RoaXMuJG5hbWVzLmlubmVySFRNTD10aGlzLl9nZXREYXlOYW1lc0h0bWwoKX1fZ2VuZXJhdGVDZWxsKGUpe2xldHt0eXBlOnQsZHA6aSxvcHRzOnN9PXRoaXM7cmV0dXJuIG5ldyBDKHt0eXBlOnQsZHA6aSxvcHRzOnMsZGF0ZTplLGJvZHk6dGhpc30pfV9nZW5lcmF0ZUNlbGxzKCl7VC5nZXREYXRlc0Z1bmN0aW9uKHRoaXMudHlwZSkodGhpcy5kcCwoZT0+e3RoaXMuY2VsbHMucHVzaCh0aGlzLl9nZW5lcmF0ZUNlbGwoZSkpfSkpfXNob3coKXt0aGlzLmlzVmlzaWJsZT0hMCx0aGlzLiRlbC5jbGFzc0xpc3QucmVtb3ZlKFwiLWhpZGRlbi1cIil9aGlkZSgpe3RoaXMuaXNWaXNpYmxlPSExLHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoXCItaGlkZGVuLVwiKX1kZXN0cm95Q2VsbHMoKXt0aGlzLmNlbGxzLmZvckVhY2goKGU9PmUuZGVzdHJveSgpKSksdGhpcy5jZWxscz1bXSx0aGlzLiRjZWxscy5pbm5lckhUTUw9XCJcIn1kZXN0cm95KCl7dGhpcy5kZXN0cm95Q2VsbHMoKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlVmlld0RhdGUsdGhpcy5vbkNoYW5nZVZpZXdEYXRlKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlQ3VycmVudFZpZXcsdGhpcy5vbkNoYW5nZUN1cnJlbnRWaWV3KX1zdGF0aWMgZ2V0RGF5c0RhdGVzKGUsdCl7bGV0e3ZpZXdEYXRlOmksb3B0czp7Zml4ZWRIZWlnaHQ6c30sbG9jYWxlOntmaXJzdERheTphfX09ZSxuPW8oaSkse3llYXI6cixtb250aDpsfT1oKGkpLGQ9bmV3IERhdGUocixsLDEpLGM9bmV3IERhdGUocixsLG4pLHU9ZC5nZXREYXkoKS1hLHA9Ni1jLmdldERheSgpK2E7dT11PDA/dSs3OnUscD1wPjY/cC03OnA7bGV0IG09ZnVuY3Rpb24oZSx0KXtsZXR7eWVhcjppLG1vbnRoOnMsZGF0ZTphfT1oKGUpO3JldHVybiBuZXcgRGF0ZShpLHMsYS10KX0oZCx1KSx2PW4rdStwLGc9bS5nZXREYXRlKCkse3llYXI6RCxtb250aDp5fT1oKG0pLGY9MDtzJiYodj00Mik7Y29uc3Qgdz1bXTtmb3IoO2Y8djspe2xldCBlPW5ldyBEYXRlKEQseSxnK2YpO3QmJnQoZSksdy5wdXNoKGUpLGYrK31yZXR1cm4gd31zdGF0aWMgZ2V0TW9udGhzRGF0ZXMoZSx0KXtsZXR7eWVhcjppfT1lLnBhcnNlZFZpZXdEYXRlLHM9MCxhPVtdO2Zvcig7czwxMjspe2NvbnN0IGU9bmV3IERhdGUoaSxzKTthLnB1c2goZSksdCYmdChlKSxzKyt9cmV0dXJuIGF9c3RhdGljIGdldFllYXJzRGF0ZXMoZSx0KXtsZXQgaT1jKGUudmlld0RhdGUpLHM9aVswXS0xLGE9aVsxXSsxLG49cyxyPVtdO2Zvcig7bjw9YTspe2NvbnN0IGU9bmV3IERhdGUobiwwKTtyLnB1c2goZSksdCYmdChlKSxuKyt9cmV0dXJuIHJ9c3RhdGljIGdldERhdGVzRnVuY3Rpb24oKXtsZXQgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06aS5kYXlzO3JldHVybntbaS5kYXlzXTpULmdldERheXNEYXRlcyxbaS5tb250aHNdOlQuZ2V0TW9udGhzRGF0ZXMsW2kueWVhcnNdOlQuZ2V0WWVhcnNEYXRlc31bZV19fWZ1bmN0aW9uIEYoZSx0LGkpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBpPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1pKXt2YXIgcz1pLmNhbGwoZSxcInN0cmluZ1wiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcylyZXR1cm4gczt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuIFN0cmluZyhlKX0oZSk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWNsYXNzIFZ7Y29uc3RydWN0b3IoZSl7bGV0e2RwOnQsb3B0czppfT1lO0YodGhpcyxcIm9uQ2xpY2tOYXZcIiwoZT0+e2xldCB0PXkoZS50YXJnZXQsXCIuYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb25cIik7aWYoIXQpcmV0dXJuO2xldCBpPXQuZGF0YXNldC5hY3Rpb247dGhpcy5kcFtpXSgpfSkpLEYodGhpcyxcIm9uQ2hhbmdlVmlld0RhdGVcIiwoKCk9Pnt0aGlzLnJlbmRlcigpLHRoaXMuX3Jlc2V0TmF2U3RhdHVzKCksdGhpcy5oYW5kbGVOYXZTdGF0dXMoKX0pKSxGKHRoaXMsXCJvbkNoYW5nZUN1cnJlbnRWaWV3XCIsKCgpPT57dGhpcy5yZW5kZXIoKSx0aGlzLl9yZXNldE5hdlN0YXR1cygpLHRoaXMuaGFuZGxlTmF2U3RhdHVzKCl9KSksRih0aGlzLFwib25DbGlja05hdlRpdGxlXCIsKCgpPT57dGhpcy5kcC5pc0ZpbmFsVmlld3x8dGhpcy5kcC51cCgpfSkpLEYodGhpcyxcInVwZGF0ZVwiLCgoKT0+e2xldHtwcmV2SHRtbDplLG5leHRIdG1sOnR9PXRoaXMub3B0czt0aGlzLiRwcmV2LmlubmVySFRNTD1lLHRoaXMuJG5leHQuaW5uZXJIVE1MPXQsdGhpcy5fcmVzZXROYXZTdGF0dXMoKSx0aGlzLnJlbmRlcigpLHRoaXMuaGFuZGxlTmF2U3RhdHVzKCl9KSksRih0aGlzLFwicmVuZGVyRGVsYXlcIiwoKCk9PntzZXRUaW1lb3V0KHRoaXMucmVuZGVyKX0pKSxGKHRoaXMsXCJyZW5kZXJcIiwoKCk9Pnt0aGlzLiR0aXRsZS5pbm5lckhUTUw9dGhpcy5fZ2V0VGl0bGUoKSxmdW5jdGlvbihlLHQpe2ZvcihsZXQgaSBpbiB0KXRbaV0/ZS5jbGFzc0xpc3QuYWRkKGkpOmUuY2xhc3NMaXN0LnJlbW92ZShpKX0odGhpcy4kdGl0bGUse1wiLWRpc2FibGVkLVwiOnRoaXMuZHAuaXNGaW5hbFZpZXd9KX0pKSx0aGlzLmRwPXQsdGhpcy5vcHRzPWksdGhpcy5pbml0KCl9aW5pdCgpe3RoaXMuX2NyZWF0ZUVsZW1lbnQoKSx0aGlzLl9idWlsZEJhc2VIdG1sKCksdGhpcy5fZGVmaW5lRE9NKCksdGhpcy5yZW5kZXIoKSx0aGlzLmhhbmRsZU5hdlN0YXR1cygpLHRoaXMuX2JpbmRFdmVudHMoKSx0aGlzLl9iaW5kRGF0ZXBpY2tlckV2ZW50cygpfV9kZWZpbmVET00oKXt0aGlzLiR0aXRsZT1hKFwiLmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGVcIix0aGlzLiRlbCksdGhpcy4kcHJldj1hKCdbZGF0YS1hY3Rpb249XCJwcmV2XCJdJyx0aGlzLiRlbCksdGhpcy4kbmV4dD1hKCdbZGF0YS1hY3Rpb249XCJuZXh0XCJdJyx0aGlzLiRlbCl9X2JpbmRFdmVudHMoKXt0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2tOYXYpLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGlja05hdlRpdGxlKX1fYmluZERhdGVwaWNrZXJFdmVudHMoKXt0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VWaWV3RGF0ZSx0aGlzLm9uQ2hhbmdlVmlld0RhdGUpLHRoaXMuZHAub24oaS5ldmVudENoYW5nZUN1cnJlbnRWaWV3LHRoaXMub25DaGFuZ2VDdXJyZW50VmlldyksdGhpcy5pc05hdklzRnVuY3Rpb24mJih0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5yZW5kZXJEZWxheSksdGhpcy5kcC5vcHRzLnRpbWVwaWNrZXImJnRoaXMuZHAub24oaS5ldmVudENoYW5nZVRpbWUsdGhpcy5yZW5kZXIpKX1kZXN0cm95KCl7dGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZVZpZXdEYXRlLHRoaXMub25DaGFuZ2VWaWV3RGF0ZSksdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZUN1cnJlbnRWaWV3LHRoaXMub25DaGFuZ2VDdXJyZW50VmlldyksdGhpcy5pc05hdklzRnVuY3Rpb24mJih0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHRoaXMucmVuZGVyRGVsYXkpLHRoaXMuZHAub3B0cy50aW1lcGlja2VyJiZ0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlVGltZSx0aGlzLnJlbmRlcikpfV9jcmVhdGVFbGVtZW50KCl7dGhpcy4kZWw9bih7dGFnTmFtZTpcIm5hdlwiLGNsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLW5hdlwifSl9X2dldFRpdGxlKCl7bGV0e2RwOmUsb3B0czp0fT10aGlzLGk9dC5uYXZUaXRsZXNbZS5jdXJyZW50Vmlld107cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgaT9pKGUpOmUuZm9ybWF0RGF0ZShlLnZpZXdEYXRlLGkpfWhhbmRsZU5hdlN0YXR1cygpe2xldHtkaXNhYmxlTmF2V2hlbk91dE9mUmFuZ2U6ZX09dGhpcy5vcHRzLHttaW5EYXRlOnQsbWF4RGF0ZTpzfT10aGlzLmRwO2lmKCF0JiYhc3x8IWUpcmV0dXJuO2xldHt5ZWFyOmEsbW9udGg6bn09dGhpcy5kcC5wYXJzZWRWaWV3RGF0ZSxyPSEhdCYmaCh0KSxvPSEhcyYmaChzKTtzd2l0Y2godGhpcy5kcC5jdXJyZW50Vmlldyl7Y2FzZSBpLmRheXM6dCYmci5tb250aD49biYmci55ZWFyPj1hJiZ0aGlzLl9kaXNhYmxlTmF2KFwicHJldlwiKSxzJiZvLm1vbnRoPD1uJiZvLnllYXI8PWEmJnRoaXMuX2Rpc2FibGVOYXYoXCJuZXh0XCIpO2JyZWFrO2Nhc2UgaS5tb250aHM6dCYmci55ZWFyPj1hJiZ0aGlzLl9kaXNhYmxlTmF2KFwicHJldlwiKSxzJiZvLnllYXI8PWEmJnRoaXMuX2Rpc2FibGVOYXYoXCJuZXh0XCIpO2JyZWFrO2Nhc2UgaS55ZWFyczp7bGV0IGU9Yyh0aGlzLmRwLnZpZXdEYXRlKTt0JiZyLnllYXI+PWVbMF0mJnRoaXMuX2Rpc2FibGVOYXYoXCJwcmV2XCIpLHMmJm8ueWVhcjw9ZVsxXSYmdGhpcy5fZGlzYWJsZU5hdihcIm5leHRcIik7YnJlYWt9fX1fZGlzYWJsZU5hdihlKXthKCdbZGF0YS1hY3Rpb249XCInK2UrJ1wiXScsdGhpcy4kZWwpLmNsYXNzTGlzdC5hZGQoXCItZGlzYWJsZWQtXCIpfV9yZXNldE5hdlN0YXR1cygpeyFmdW5jdGlvbihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSh0PjE/dC0xOjApLHM9MTtzPHQ7cysrKWlbcy0xXT1hcmd1bWVudHNbc107ZS5sZW5ndGg/ZS5mb3JFYWNoKChlPT57ZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmkpfSkpOmUuY2xhc3NMaXN0LnJlbW92ZSguLi5pKX0odGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChcIi5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvblwiKSxcIi1kaXNhYmxlZC1cIil9X2J1aWxkQmFzZUh0bWwoKXtsZXR7cHJldkh0bWw6ZSxuZXh0SHRtbDp0fT10aGlzLm9wdHM7dGhpcy4kZWwuaW5uZXJIVE1MPWA8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb25cIiBkYXRhLWFjdGlvbj1cInByZXZcIj4ke2V9PC9kaXY+PGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGVcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb25cIiBkYXRhLWFjdGlvbj1cIm5leHRcIj4ke3R9PC9kaXY+YH1nZXQgaXNOYXZJc0Z1bmN0aW9uKCl7bGV0e25hdlRpdGxlczplfT10aGlzLm9wdHM7cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZpbmQoKHQ9PlwiZnVuY3Rpb25cIj09dHlwZW9mIGVbdF0pKX19dmFyIHg9e3RvZGF5Ontjb250ZW50OmU9PmUubG9jYWxlLnRvZGF5LG9uQ2xpY2s6ZT0+ZS5zZXRWaWV3RGF0ZShuZXcgRGF0ZSl9LGNsZWFyOntjb250ZW50OmU9PmUubG9jYWxlLmNsZWFyLG9uQ2xpY2s6ZT0+ZS5jbGVhcigpfX07Y2xhc3MgSHtjb25zdHJ1Y3RvcihlKXtsZXR7ZHA6dCxvcHRzOml9PWU7dGhpcy5kcD10LHRoaXMub3B0cz1pLHRoaXMuaW5pdCgpfWluaXQoKXt0aGlzLmNyZWF0ZUVsZW1lbnQoKSx0aGlzLnJlbmRlcigpfWNyZWF0ZUVsZW1lbnQoKXt0aGlzLiRlbD1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci1idXR0b25zXCJ9KX1kZXN0cm95KCl7dGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRlbCl9Y2xlYXJIdG1sKCl7cmV0dXJuIHRoaXMuJGVsLmlubmVySFRNTD1cIlwiLHRoaXN9Z2VuZXJhdGVCdXR0b25zKCl7bGV0e2J1dHRvbnM6ZX09dGhpcy5vcHRzO0FycmF5LmlzQXJyYXkoZSl8fChlPVtlXSksZS5mb3JFYWNoKChlPT57bGV0IHQ9ZTtcInN0cmluZ1wiPT10eXBlb2YgZSYmeFtlXSYmKHQ9eFtlXSk7bGV0IGk9dGhpcy5jcmVhdGVCdXR0b24odCk7dC5vbkNsaWNrJiZ0aGlzLmF0dGFjaEV2ZW50VG9CdXR0b24oaSx0Lm9uQ2xpY2spLHRoaXMuJGVsLmFwcGVuZENoaWxkKGkpfSkpfWF0dGFjaEV2ZW50VG9CdXR0b24oZSx0KXtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgoKT0+e3QodGhpcy5kcCl9KSl9Y3JlYXRlQnV0dG9uKGUpe2xldHtjb250ZW50OnQsY2xhc3NOYW1lOmksdGFnTmFtZTpzPVwiYnV0dG9uXCIsYXR0cnM6YT17fX09ZTtyZXR1cm4gbih7dGFnTmFtZTpzLGlubmVySHRtbDpgPHNwYW4gdGFiaW5kZXg9Jy0xJz4ke1wiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCh0aGlzLmRwKTp0fTwvc3Bhbj5gLGNsYXNzTmFtZTp1KFwiYWlyLWRhdGVwaWNrZXItYnV0dG9uXCIsaSksYXR0cnM6YX0pfXJlbmRlcigpe3RoaXMuZ2VuZXJhdGVCdXR0b25zKCl9fWZ1bmN0aW9uIEUoZSx0LGkpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBpPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1pKXt2YXIgcz1pLmNhbGwoZSxcInN0cmluZ1wiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcylyZXR1cm4gczt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuIFN0cmluZyhlKX0oZSk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWNsYXNzIEx7Y29uc3RydWN0b3IoKXtsZXR7b3B0czplLGRwOnR9PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtFKHRoaXMsXCJ0b2dnbGVUaW1lcGlja2VySXNBY3RpdmVcIiwoZT0+e3RoaXMuZHAudGltZXBpY2tlcklzQWN0aXZlPWV9KSksRSh0aGlzLFwib25DaGFuZ2VTZWxlY3RlZERhdGVcIiwoZT0+e2xldHtkYXRlOnQsdXBkYXRlVGltZTppPSExfT1lO3QmJih0aGlzLnNldE1pbk1heFRpbWUodCksdGhpcy5zZXRDdXJyZW50VGltZSghIWkmJnQpLHRoaXMuYWRkVGltZVRvRGF0ZSh0KSl9KSksRSh0aGlzLFwib25DaGFuZ2VMYXN0U2VsZWN0ZWREYXRlXCIsKGU9PntlJiYodGhpcy5zZXRUaW1lKGUpLHRoaXMucmVuZGVyKCkpfSkpLEUodGhpcyxcIm9uQ2hhbmdlSW5wdXRSYW5nZVwiLChlPT57bGV0IHQ9ZS50YXJnZXQ7dGhpc1t0LmdldEF0dHJpYnV0ZShcIm5hbWVcIildPXQudmFsdWUsdGhpcy51cGRhdGVUZXh0KCksdGhpcy5kcC50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VUaW1lLHtob3Vyczp0aGlzLmhvdXJzLG1pbnV0ZXM6dGhpcy5taW51dGVzfSl9KSksRSh0aGlzLFwib25Nb3VzZUVudGVyTGVhdmVcIiwoZT0+e2xldCB0PWUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIiksaT10aGlzLiRtaW51dGVzVGV4dDtcImhvdXJzXCI9PT10JiYoaT10aGlzLiRob3Vyc1RleHQpLGkuY2xhc3NMaXN0LnRvZ2dsZShcIi1mb2N1cy1cIil9KSksRSh0aGlzLFwib25Gb2N1c1wiLCgoKT0+e3RoaXMudG9nZ2xlVGltZXBpY2tlcklzQWN0aXZlKCEwKX0pKSxFKHRoaXMsXCJvbkJsdXJcIiwoKCk9Pnt0aGlzLnRvZ2dsZVRpbWVwaWNrZXJJc0FjdGl2ZSghMSl9KSksdGhpcy5vcHRzPWUsdGhpcy5kcD10O2xldHt0aW1lRm9ybWF0OnN9PXRoaXMuZHAubG9jYWxlO3MmJihzLm1hdGNoKGsoXCJoXCIpKXx8cy5tYXRjaChrKFwiaGhcIikpKSYmKHRoaXMuYW1wbT0hMCksdGhpcy5pbml0KCl9aW5pdCgpe3RoaXMuc2V0VGltZSh0aGlzLmRwLmxhc3RTZWxlY3RlZERhdGV8fHRoaXMuZHAudmlld0RhdGUpLHRoaXMuY3JlYXRlRWxlbWVudCgpLHRoaXMuYnVpbGRIdG1sKCksdGhpcy5kZWZpbmVET00oKSx0aGlzLnJlbmRlcigpLHRoaXMuYmluZERhdGVwaWNrZXJFdmVudHMoKSx0aGlzLmJpbmRET01FdmVudHMoKX1iaW5kRGF0ZXBpY2tlckV2ZW50cygpe3RoaXMuZHAub24oaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlU2VsZWN0ZWREYXRlKSx0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VMYXN0U2VsZWN0ZWREYXRlLHRoaXMub25DaGFuZ2VMYXN0U2VsZWN0ZWREYXRlKX1iaW5kRE9NRXZlbnRzKCl7bGV0IGU9XCJpbnB1dFwiO25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3RyaWRlbnQvZ2kpJiYoZT1cImNoYW5nZVwiKSxEKHRoaXMuJHJhbmdlcyxlLHRoaXMub25DaGFuZ2VJbnB1dFJhbmdlKSxEKHRoaXMuJHJhbmdlcyxcIm1vdXNlZW50ZXJcIix0aGlzLm9uTW91c2VFbnRlckxlYXZlKSxEKHRoaXMuJHJhbmdlcyxcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VFbnRlckxlYXZlKSxEKHRoaXMuJHJhbmdlcyxcImZvY3VzXCIsdGhpcy5vbkZvY3VzKSxEKHRoaXMuJHJhbmdlcyxcIm1vdXNlZG93blwiLHRoaXMub25Gb2N1cyksRCh0aGlzLiRyYW5nZXMsXCJibHVyXCIsdGhpcy5vbkJsdXIpfWNyZWF0ZUVsZW1lbnQoKXt0aGlzLiRlbD1uKHtjbGFzc05hbWU6dShcImFpci1kYXRlcGlja2VyLXRpbWVcIix7XCItYW0tcG0tXCI6dGhpcy5kcC5hbXBtfSl9KX1kZXN0cm95KCl7dGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlU2VsZWN0ZWREYXRlKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlTGFzdFNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlTGFzdFNlbGVjdGVkRGF0ZSksdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRlbCl9YnVpbGRIdG1sKCl7bGV0e2FtcG06ZSxob3Vyczp0LGRpc3BsYXlIb3VyczppLG1pbnV0ZXM6cyxtaW5Ib3VyczphLG1pbk1pbnV0ZXM6bixtYXhIb3VyczpyLG1heE1pbnV0ZXM6byxkYXlQZXJpb2Q6aCxvcHRzOntob3Vyc1N0ZXA6bCxtaW51dGVzU3RlcDpjfX09dGhpczt0aGlzLiRlbC5pbm5lckhUTUw9YDxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50XCI+ICAgPHNwYW4gY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWhvdXJzXCI+JHtkKGkpfTwvc3Bhbj4gICA8c3BhbiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtY29sb25cIj46PC9zcGFuPiAgIDxzcGFuIGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1taW51dGVzXCI+JHtkKHMpfTwvc3Bhbj4gICBgKyhlP2A8c3BhbiBjbGFzcz0nYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1hbXBtJz4ke2h9PC9zcGFuPmA6XCJcIikrJzwvZGl2PjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1zbGlkZXJzXCI+ICAgPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLXJvd1wiPicrYCAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwiaG91cnNcIiB2YWx1ZT1cIiR7dH1cIiBtaW49XCIke2F9XCIgbWF4PVwiJHtyfVwiIHN0ZXA9XCIke2x9XCIvPiAgIDwvZGl2PiAgIDxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1yb3dcIj5gK2AgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbmFtZT1cIm1pbnV0ZXNcIiB2YWx1ZT1cIiR7c31cIiBtaW49XCIke259XCIgbWF4PVwiJHtvfVwiIHN0ZXA9XCIke2N9XCIvPiAgIDwvZGl2PjwvZGl2PmB9ZGVmaW5lRE9NKCl7bGV0IGU9ZT0+YShlLHRoaXMuJGVsKTt0aGlzLiRyYW5nZXM9dGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9XCJyYW5nZVwiXScpLHRoaXMuJGhvdXJzPWUoJ1tuYW1lPVwiaG91cnNcIl0nKSx0aGlzLiRtaW51dGVzPWUoJ1tuYW1lPVwibWludXRlc1wiXScpLHRoaXMuJGhvdXJzVGV4dD1lKFwiLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnNcIiksdGhpcy4kbWludXRlc1RleHQ9ZShcIi5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LW1pbnV0ZXNcIiksdGhpcy4kYW1wbT1lKFwiLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtYW1wbVwiKX1zZXRUaW1lKGUpe3RoaXMuc2V0TWluTWF4VGltZShlKSx0aGlzLnNldEN1cnJlbnRUaW1lKGUpfWFkZFRpbWVUb0RhdGUoZSl7ZSYmKGUuc2V0SG91cnModGhpcy5ob3VycyksZS5zZXRNaW51dGVzKHRoaXMubWludXRlcykpfXNldE1pbk1heFRpbWUoZSl7aWYodGhpcy5zZXRNaW5NYXhUaW1lRnJvbU9wdGlvbnMoKSxlKXtsZXR7bWluRGF0ZTp0LG1heERhdGU6aX09dGhpcy5kcDt0JiZwKGUsdCkmJnRoaXMuc2V0TWluVGltZUZyb21NaW5EYXRlKHQpLGkmJnAoZSxpKSYmdGhpcy5zZXRNYXhUaW1lRnJvbU1heERhdGUoaSl9fXNldEN1cnJlbnRUaW1lKGUpe2xldHtob3Vyczp0LG1pbnV0ZXM6aX09ZT9oKGUpOnRoaXM7dGhpcy5ob3Vycz1mKHQsdGhpcy5taW5Ib3Vycyx0aGlzLm1heEhvdXJzKSx0aGlzLm1pbnV0ZXM9ZihpLHRoaXMubWluTWludXRlcyx0aGlzLm1heE1pbnV0ZXMpfXNldE1pbk1heFRpbWVGcm9tT3B0aW9ucygpe2xldHttaW5Ib3VyczplLG1pbk1pbnV0ZXM6dCxtYXhIb3VyczppLG1heE1pbnV0ZXM6c309dGhpcy5vcHRzO3RoaXMubWluSG91cnM9ZihlLDAsMjMpLHRoaXMubWluTWludXRlcz1mKHQsMCw1OSksdGhpcy5tYXhIb3Vycz1mKGksMCwyMyksdGhpcy5tYXhNaW51dGVzPWYocywwLDU5KX1zZXRNaW5UaW1lRnJvbU1pbkRhdGUoZSl7bGV0e2xhc3RTZWxlY3RlZERhdGU6dH09dGhpcy5kcDt0aGlzLm1pbkhvdXJzPWUuZ2V0SG91cnMoKSx0JiZ0LmdldEhvdXJzKCk+ZS5nZXRIb3VycygpP3RoaXMubWluTWludXRlcz10aGlzLm9wdHMubWluTWludXRlczp0aGlzLm1pbk1pbnV0ZXM9ZS5nZXRNaW51dGVzKCl9c2V0TWF4VGltZUZyb21NYXhEYXRlKGUpe2xldHtsYXN0U2VsZWN0ZWREYXRlOnR9PXRoaXMuZHA7dGhpcy5tYXhIb3Vycz1lLmdldEhvdXJzKCksdCYmdC5nZXRIb3VycygpPGUuZ2V0SG91cnMoKT90aGlzLm1heE1pbnV0ZXM9dGhpcy5vcHRzLm1heE1pbnV0ZXM6dGhpcy5tYXhNaW51dGVzPWUuZ2V0TWludXRlcygpfXVwZGF0ZVNsaWRlcnMoKXtyKHRoaXMuJGhvdXJzLHttaW46dGhpcy5taW5Ib3VycyxtYXg6dGhpcy5tYXhIb3Vyc30pLnZhbHVlPXRoaXMuaG91cnMscih0aGlzLiRtaW51dGVzLHttaW46dGhpcy5taW5NaW51dGVzLG1heDp0aGlzLm1heE1pbnV0ZXN9KS52YWx1ZT10aGlzLm1pbnV0ZXN9dXBkYXRlVGV4dCgpe3RoaXMuJGhvdXJzVGV4dC5pbm5lckhUTUw9ZCh0aGlzLmRpc3BsYXlIb3VycyksdGhpcy4kbWludXRlc1RleHQuaW5uZXJIVE1MPWQodGhpcy5taW51dGVzKSx0aGlzLmFtcG0mJih0aGlzLiRhbXBtLmlubmVySFRNTD10aGlzLmRheVBlcmlvZCl9c2V0IGhvdXJzKGUpe3RoaXMuX2hvdXJzPWU7bGV0e2hvdXJzOnQsZGF5UGVyaW9kOml9PWwoZSk7dGhpcy5kaXNwbGF5SG91cnM9dGhpcy5hbXBtP3Q6ZSx0aGlzLmRheVBlcmlvZD1pfWdldCBob3Vycygpe3JldHVybiB0aGlzLl9ob3Vyc31yZW5kZXIoKXt0aGlzLnVwZGF0ZVNsaWRlcnMoKSx0aGlzLnVwZGF0ZVRleHQoKX19ZnVuY3Rpb24gTyhlLHQsaSl7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIGk9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PWkpe3ZhciBzPWkuY2FsbChlLFwic3RyaW5nXCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBzKXJldHVybiBzO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4gU3RyaW5nKGUpfShlKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9Y2xhc3MgQXtjb25zdHJ1Y3RvcihlKXtsZXR7ZHA6dCxvcHRzOml9PWU7Tyh0aGlzLFwicHJlc3NlZEtleXNcIixuZXcgU2V0KSxPKHRoaXMsXCJob3RLZXlzXCIsbmV3IE1hcChbW1tbXCJDb250cm9sXCIsXCJBcnJvd1JpZ2h0XCJdLFtcIkNvbnRyb2xcIixcIkFycm93VXBcIl1dLGU9PmUubW9udGgrK10sW1tbXCJDb250cm9sXCIsXCJBcnJvd0xlZnRcIl0sW1wiQ29udHJvbFwiLFwiQXJyb3dEb3duXCJdXSxlPT5lLm1vbnRoLS1dLFtbW1wiU2hpZnRcIixcIkFycm93UmlnaHRcIl0sW1wiU2hpZnRcIixcIkFycm93VXBcIl1dLGU9PmUueWVhcisrXSxbW1tcIlNoaWZ0XCIsXCJBcnJvd0xlZnRcIl0sW1wiU2hpZnRcIixcIkFycm93RG93blwiXV0sZT0+ZS55ZWFyLS1dLFtbW1wiQWx0XCIsXCJBcnJvd1JpZ2h0XCJdLFtcIkFsdFwiLFwiQXJyb3dVcFwiXV0sZT0+ZS55ZWFyKz0xMF0sW1tbXCJBbHRcIixcIkFycm93TGVmdFwiXSxbXCJBbHRcIixcIkFycm93RG93blwiXV0sZT0+ZS55ZWFyLT0xMF0sW1tcIkNvbnRyb2xcIixcIlNoaWZ0XCIsXCJBcnJvd1VwXCJdLChlLHQpPT50LnVwKCldXSkpLE8odGhpcyxcImhhbmRsZUhvdEtleVwiLChlPT57bGV0IHQ9dGhpcy5ob3RLZXlzLmdldChlKSxpPWgodGhpcy5nZXRJbml0aWFsRm9jdXNEYXRlKCkpO3QoaSx0aGlzLmRwKTtsZXR7eWVhcjpzLG1vbnRoOmEsZGF0ZTpufT1pLHI9byhuZXcgRGF0ZShzLGEpKTtyPG4mJihuPXIpO2xldCBsPXRoaXMuZHAuZ2V0Q2xhbXBlZERhdGUobmV3IERhdGUocyxhLG4pKTt0aGlzLmRwLnNldEZvY3VzRGF0ZShsLHt2aWV3RGF0ZVRyYW5zaXRpb246ITB9KX0pKSxPKHRoaXMsXCJpc0hvdEtleVByZXNzZWRcIiwoKCk9PntsZXQgZT0hMSx0PXRoaXMucHJlc3NlZEtleXMuc2l6ZSxpPWU9PnRoaXMucHJlc3NlZEtleXMuaGFzKGUpO2ZvcihsZXRbc11vZiB0aGlzLmhvdEtleXMpe2lmKGUpYnJlYWs7aWYoQXJyYXkuaXNBcnJheShzWzBdKSlzLmZvckVhY2goKGE9PntlfHx0IT09YS5sZW5ndGh8fChlPWEuZXZlcnkoaSkmJnMpfSkpO2Vsc2V7aWYodCE9PXMubGVuZ3RoKWNvbnRpbnVlO2U9cy5ldmVyeShpKSYmc319cmV0dXJuIGV9KSksTyh0aGlzLFwiaXNBcnJvd1wiLChlPT5lPj0zNyYmZTw9NDApKSxPKHRoaXMsXCJvbktleURvd25cIiwoZT0+e2xldHtrZXk6dCx3aGljaDppfT1lLHtkcDpzLGRwOntmb2N1c0RhdGU6YX0sb3B0czpufT10aGlzO3RoaXMucmVnaXN0ZXJLZXkodCk7bGV0IHI9dGhpcy5pc0hvdEtleVByZXNzZWQoKTtpZihyKXJldHVybiBlLnByZXZlbnREZWZhdWx0KCksdm9pZCB0aGlzLmhhbmRsZUhvdEtleShyKTtpZih0aGlzLmlzQXJyb3coaSkpcmV0dXJuIGUucHJldmVudERlZmF1bHQoKSx2b2lkIHRoaXMuZm9jdXNOZXh0Q2VsbCh0KTtpZihcIkVudGVyXCI9PT10KXtpZihzLmN1cnJlbnRWaWV3IT09bi5taW5WaWV3KXJldHVybiB2b2lkIHMuZG93bigpO2lmKGEpe2xldCBlPXMuX2NoZWNrSWZEYXRlSXNTZWxlY3RlZChhKTtyZXR1cm4gdm9pZChlP3MuX2hhbmRsZUFscmVhZHlTZWxlY3RlZERhdGVzKGUsYSk6cy5zZWxlY3REYXRlKGEpKX19XCJFc2NhcGVcIj09PXQmJnRoaXMuZHAuaGlkZSgpfSkpLE8odGhpcyxcIm9uS2V5VXBcIiwoZT0+e3RoaXMucmVtb3ZlS2V5KGUua2V5KX0pKSx0aGlzLmRwPXQsdGhpcy5vcHRzPWksdGhpcy5pbml0KCl9aW5pdCgpe3RoaXMuYmluZEtleWJvYXJkRXZlbnRzKCl9YmluZEtleWJvYXJkRXZlbnRzKCl7bGV0eyRlbDplfT10aGlzLmRwO2UuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLm9uS2V5RG93biksZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLm9uS2V5VXApfWRlc3Ryb3koKXtsZXR7JGVsOmV9PXRoaXMuZHA7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMub25LZXlEb3duKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMub25LZXlVcCksdGhpcy5ob3RLZXlzPW51bGwsdGhpcy5wcmVzc2VkS2V5cz1udWxsfWdldEluaXRpYWxGb2N1c0RhdGUoKXtsZXR7Zm9jdXNEYXRlOmUsY3VycmVudFZpZXc6dCxzZWxlY3RlZERhdGVzOnMscGFyc2VkVmlld0RhdGU6e3llYXI6YSxtb250aDpufX09dGhpcy5kcCxyPWV8fHNbcy5sZW5ndGgtMV07aWYoIXIpc3dpdGNoKHQpe2Nhc2UgaS5kYXlzOnI9bmV3IERhdGUoYSxuLChuZXcgRGF0ZSkuZ2V0RGF0ZSgpKTticmVhaztjYXNlIGkubW9udGhzOnI9bmV3IERhdGUoYSxuLDEpO2JyZWFrO2Nhc2UgaS55ZWFyczpyPW5ldyBEYXRlKGEsMCwxKX1yZXR1cm4gcn1mb2N1c05leHRDZWxsKGUpe2xldCB0PXRoaXMuZ2V0SW5pdGlhbEZvY3VzRGF0ZSgpLHtjdXJyZW50VmlldzpzfT10aGlzLmRwLHtkYXlzOmEsbW9udGhzOm4seWVhcnM6cn09aSxvPWgodCksbD1vLnllYXIsZD1vLm1vbnRoLGM9by5kYXRlO3N3aXRjaChlKXtjYXNlXCJBcnJvd0xlZnRcIjpzPT09YSYmKGMtPTEpLHM9PT1uJiYoZC09MSkscz09PXImJihsLT0xKTticmVhaztjYXNlXCJBcnJvd1VwXCI6cz09PWEmJihjLT03KSxzPT09biYmKGQtPTMpLHM9PT1yJiYobC09NCk7YnJlYWs7Y2FzZVwiQXJyb3dSaWdodFwiOnM9PT1hJiYoYys9MSkscz09PW4mJihkKz0xKSxzPT09ciYmKGwrPTEpO2JyZWFrO2Nhc2VcIkFycm93RG93blwiOnM9PT1hJiYoYys9Nykscz09PW4mJihkKz0zKSxzPT09ciYmKGwrPTQpfWxldCB1PXRoaXMuZHAuZ2V0Q2xhbXBlZERhdGUobmV3IERhdGUobCxkLGMpKTt0aGlzLmRwLnNldEZvY3VzRGF0ZSh1LHt2aWV3RGF0ZVRyYW5zaXRpb246ITB9KX1yZWdpc3RlcktleShlKXt0aGlzLnByZXNzZWRLZXlzLmFkZChlKX1yZW1vdmVLZXkoZSl7dGhpcy5wcmVzc2VkS2V5cy5kZWxldGUoZSl9fWxldCBOPXtvbihlLHQpe3RoaXMuX19ldmVudHN8fCh0aGlzLl9fZXZlbnRzPXt9KSx0aGlzLl9fZXZlbnRzW2VdP3RoaXMuX19ldmVudHNbZV0ucHVzaCh0KTp0aGlzLl9fZXZlbnRzW2VdPVt0XX0sb2ZmKGUsdCl7dGhpcy5fX2V2ZW50cyYmdGhpcy5fX2V2ZW50c1tlXSYmKHRoaXMuX19ldmVudHNbZV09dGhpcy5fX2V2ZW50c1tlXS5maWx0ZXIoKGU9PmUhPT10KSkpfSxyZW1vdmVBbGxFdmVudHMoKXt0aGlzLl9fZXZlbnRzPXt9fSx0cmlnZ2VyKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGk9bmV3IEFycmF5KHQ+MT90LTE6MCkscz0xO3M8dDtzKyspaVtzLTFdPWFyZ3VtZW50c1tzXTt0aGlzLl9fZXZlbnRzJiZ0aGlzLl9fZXZlbnRzW2VdJiZ0aGlzLl9fZXZlbnRzW2VdLmZvckVhY2goKGU9PntlKC4uLmkpfSkpfX07ZnVuY3Rpb24gSShlLHQsaSl7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIGk9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PWkpe3ZhciBzPWkuY2FsbChlLFwic3RyaW5nXCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBzKXJldHVybiBzO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4gU3RyaW5nKGUpfShlKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9bGV0IFA9XCJcIixqPVwiXCIsQj0hMTtjbGFzcyBSe3N0YXRpYyBidWlsZEdsb2JhbENvbnRhaW5lcihlKXtCPSEwLFA9bih7Y2xhc3NOYW1lOmUsaWQ6ZX0pLGEoXCJib2R5XCIpLmFwcGVuZENoaWxkKFApfWNvbnN0cnVjdG9yKGUsdCl7dmFyIHI9dGhpcztpZihJKHRoaXMsXCJ2aWV3SW5kZXhlc1wiLFtpLmRheXMsaS5tb250aHMsaS55ZWFyc10pLEkodGhpcyxcIm5leHRcIiwoKCk9PntsZXR7eWVhcjplLG1vbnRoOnR9PXRoaXMucGFyc2VkVmlld0RhdGU7c3dpdGNoKHRoaXMuY3VycmVudFZpZXcpe2Nhc2UgaS5kYXlzOnRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZSx0KzEsMSkpO2JyZWFrO2Nhc2UgaS5tb250aHM6dGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlKzEsdCwxKSk7YnJlYWs7Y2FzZSBpLnllYXJzOnRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZSsxMCwwLDEpKX19KSksSSh0aGlzLFwicHJldlwiLCgoKT0+e2xldHt5ZWFyOmUsbW9udGg6dH09dGhpcy5wYXJzZWRWaWV3RGF0ZTtzd2l0Y2godGhpcy5jdXJyZW50Vmlldyl7Y2FzZSBpLmRheXM6dGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlLHQtMSwxKSk7YnJlYWs7Y2FzZSBpLm1vbnRoczp0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUtMSx0LDEpKTticmVhaztjYXNlIGkueWVhcnM6dGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlLTEwLDAsMSkpfX0pKSxJKHRoaXMsXCJfZmluaXNoSGlkZVwiLCgoKT0+e3RoaXMuaGlkZUFuaW1hdGlvbj0hMSx0aGlzLl9kZXN0cm95Q29tcG9uZW50cygpLHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLiRkYXRlcGlja2VyKX0pKSxJKHRoaXMsXCJzZXRQb3NpdGlvblwiLChmdW5jdGlvbihlKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGU9ZXx8ci5vcHRzLnBvc2l0aW9uKSlyZXR1cm4gdm9pZChyLmN1c3RvbUhpZGU9ZSh7JGRhdGVwaWNrZXI6ci4kZGF0ZXBpY2tlciwkdGFyZ2V0OnIuJGVsLCRwb2ludGVyOnIuJHBvaW50ZXIsaXNWaWV3Q2hhbmdlOnQsZG9uZTpyLl9maW5pc2hIaWRlfSkpO2xldCBpLHMse2lzTW9iaWxlOmF9PXIub3B0cyxuPXIuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89ci4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaD1yLiRkYXRlcGlja2VyLm9mZnNldFBhcmVudCxsPXIuJGVsLm9mZnNldFBhcmVudCxkPXIuJGRhdGVwaWNrZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz1lLnNwbGl0KFwiIFwiKSx1PXdpbmRvdy5zY3JvbGxZLHA9d2luZG93LnNjcm9sbFgsbT1yLm9wdHMub2Zmc2V0LHY9Y1swXSxnPWNbMV07aWYoYSlyLiRkYXRlcGlja2VyLnN0eWxlLmNzc1RleHQ9XCJsZWZ0OiA1MCU7IHRvcDogNTAlXCI7ZWxzZXtpZihoPT09bCYmaCE9PWRvY3VtZW50LmJvZHkmJihvPXt0b3A6ci4kZWwub2Zmc2V0VG9wLGxlZnQ6ci4kZWwub2Zmc2V0TGVmdCx3aWR0aDpuLndpZHRoLGhlaWdodDpyLiRlbC5vZmZzZXRIZWlnaHR9LHU9MCxwPTApLGghPT1sJiZoIT09ZG9jdW1lbnQuYm9keSl7bGV0IGU9aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtvPXt0b3A6bi50b3AtZS50b3AsbGVmdDpuLmxlZnQtZS5sZWZ0LHdpZHRoOm4ud2lkdGgsaGVpZ2h0Om4uaGVpZ2h0fSx1PTAscD0wfXN3aXRjaCh2KXtjYXNlXCJ0b3BcIjppPW8udG9wLWQuaGVpZ2h0LW07YnJlYWs7Y2FzZVwicmlnaHRcIjpzPW8ubGVmdCtvLndpZHRoK207YnJlYWs7Y2FzZVwiYm90dG9tXCI6aT1vLnRvcCtvLmhlaWdodCttO2JyZWFrO2Nhc2VcImxlZnRcIjpzPW8ubGVmdC1kLndpZHRoLW19c3dpdGNoKGcpe2Nhc2VcInRvcFwiOmk9by50b3A7YnJlYWs7Y2FzZVwicmlnaHRcIjpzPW8ubGVmdCtvLndpZHRoLWQud2lkdGg7YnJlYWs7Y2FzZVwiYm90dG9tXCI6aT1vLnRvcCtvLmhlaWdodC1kLmhlaWdodDticmVhaztjYXNlXCJsZWZ0XCI6cz1vLmxlZnQ7YnJlYWs7Y2FzZVwiY2VudGVyXCI6L2xlZnR8cmlnaHQvLnRlc3Qodik/aT1vLnRvcCtvLmhlaWdodC8yLWQuaGVpZ2h0LzI6cz1vLmxlZnQrby53aWR0aC8yLWQud2lkdGgvMn1yLiRkYXRlcGlja2VyLnN0eWxlLmNzc1RleHQ9YGxlZnQ6ICR7cytwfXB4OyB0b3A6ICR7aSt1fXB4YH19KSksSSh0aGlzLFwiX3NldElucHV0VmFsdWVcIiwoKCk9PntsZXR7b3B0czplLCRhbHRGaWVsZDp0LGxvY2FsZTp7ZGF0ZUZvcm1hdDppfX09dGhpcyx7YWx0RmllbGREYXRlRm9ybWF0OnMsYWx0RmllbGQ6YX09ZTthJiZ0JiYodC52YWx1ZT10aGlzLl9nZXRJbnB1dFZhbHVlKHMpKSx0aGlzLiRlbC52YWx1ZT10aGlzLl9nZXRJbnB1dFZhbHVlKGkpfSkpLEkodGhpcyxcIl9nZXRJbnB1dFZhbHVlXCIsKGU9PntsZXR7c2VsZWN0ZWREYXRlczp0LG9wdHM6aX09dGhpcyx7bXVsdGlwbGVEYXRlczpzLG11bHRpcGxlRGF0ZXNTZXBhcmF0b3I6YX09aTtpZighdC5sZW5ndGgpcmV0dXJuXCJcIjtsZXQgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLHI9bj9lKHM/dDp0WzBdKTp0Lm1hcCgodD0+dGhpcy5mb3JtYXREYXRlKHQsZSkpKTtyZXR1cm4gcj1uP3I6ci5qb2luKGEpLHJ9KSksSSh0aGlzLFwiX2NoZWNrSWZEYXRlSXNTZWxlY3RlZFwiLChmdW5jdGlvbihlKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06aS5kYXlzLHM9ITE7cmV0dXJuIHIuc2VsZWN0ZWREYXRlcy5zb21lKChpPT57bGV0IGE9cChlLGksdCk7cmV0dXJuIHM9YSYmaSxhfSkpLHN9KSksSSh0aGlzLFwiX3NjaGVkdWxlQ2FsbEFmdGVyVHJhbnNpdGlvblwiLChlPT57dGhpcy5fY2FuY2VsU2NoZWR1bGVkQ2FsbCgpLGUmJmUoITEpLHRoaXMuX29uVHJhbnNpdGlvbkVuZD0oKT0+e2UmJmUoITApfSx0aGlzLiRkYXRlcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5fb25UcmFuc2l0aW9uRW5kLHtvbmNlOiEwfSl9KSksSSh0aGlzLFwiX2NhbmNlbFNjaGVkdWxlZENhbGxcIiwoKCk9Pnt0aGlzLiRkYXRlcGlja2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5fb25UcmFuc2l0aW9uRW5kKX0pKSxJKHRoaXMsXCJzZXRWaWV3RGF0ZVwiLChlPT57aWYoISgoZT1iKGUpKWluc3RhbmNlb2YgRGF0ZSkpcmV0dXJuO2lmKHAoZSx0aGlzLnZpZXdEYXRlKSlyZXR1cm47bGV0IHQ9dGhpcy52aWV3RGF0ZTt0aGlzLnZpZXdEYXRlPWU7bGV0e29uQ2hhbmdlVmlld0RhdGU6c309dGhpcy5vcHRzO2lmKHMpe2xldHttb250aDplLHllYXI6dH09dGhpcy5wYXJzZWRWaWV3RGF0ZTtzKHttb250aDplLHllYXI6dCxkZWNhZGU6dGhpcy5jdXJEZWNhZGV9KX10aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZVZpZXdEYXRlLGUsdCl9KSksSSh0aGlzLFwic2V0Rm9jdXNEYXRlXCIsKGZ1bmN0aW9uKGUpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTsoIWV8fChlPWIoZSkpaW5zdGFuY2VvZiBEYXRlKSYmKHIuZm9jdXNEYXRlPWUsci50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VGb2N1c0RhdGUsZSx0KSl9KSksSSh0aGlzLFwic2V0Q3VycmVudFZpZXdcIiwoZnVuY3Rpb24oZSl7bGV0IHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O2lmKHIudmlld0luZGV4ZXMuaW5jbHVkZXMoZSkpe2lmKHIuY3VycmVudFZpZXc9ZSxyLmVsSXNJbnB1dCYmci52aXNpYmxlJiZyLnNldFBvc2l0aW9uKHZvaWQgMCwhMCksci50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VDdXJyZW50VmlldyxlKSwhci52aWV3c1tlXSl7bGV0IHQ9ci52aWV3c1tlXT1uZXcgVCh7ZHA6cixvcHRzOnIub3B0cyx0eXBlOmV9KTtyLnNob3VsZFVwZGF0ZURPTSYmci4kY29udGVudC5hcHBlbmRDaGlsZCh0LiRlbCl9ci5vcHRzLm9uQ2hhbmdlVmlldyYmIXQuc2lsZW50JiZyLm9wdHMub25DaGFuZ2VWaWV3KGUpfX0pKSxJKHRoaXMsXCJfdXBkYXRlTGFzdFNlbGVjdGVkRGF0ZVwiLChlPT57dGhpcy5sYXN0U2VsZWN0ZWREYXRlPWUsdGhpcy50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VMYXN0U2VsZWN0ZWREYXRlLGUpfSkpLEkodGhpcyxcImRlc3Ryb3lcIiwoKCk9PntsZXR7c2hvd0V2ZW50OmUsaXNNb2JpbGU6dH09dGhpcy5vcHRzLGk9dGhpcy4kZGF0ZXBpY2tlci5wYXJlbnROb2RlO2kmJmkucmVtb3ZlQ2hpbGQodGhpcy4kZGF0ZXBpY2tlciksdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHRoaXMuX29uRm9jdXMpLHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX29uUmVzaXplKSx0JiZ0aGlzLl9yZW1vdmVNb2JpbGVBdHRyaWJ1dGVzKCksdGhpcy5rZXlib2FyZE5hdiYmdGhpcy5rZXlib2FyZE5hdi5kZXN0cm95KCksdGhpcy52aWV3cz1udWxsLHRoaXMubmF2PW51bGwsdGhpcy4kZGF0ZXBpY2tlcj1udWxsLHRoaXMub3B0cz1udWxsLHRoaXMuJGN1c3RvbUNvbnRhaW5lcj1udWxsLHRoaXMudmlld0RhdGU9bnVsbCx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMuc2VsZWN0ZWREYXRlcz1udWxsLHRoaXMucmFuZ2VEYXRlRnJvbT1udWxsLHRoaXMucmFuZ2VEYXRlVG89bnVsbH0pKSxJKHRoaXMsXCJ1cGRhdGVcIiwoZnVuY3Rpb24oKXtsZXQgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scz13KHt9LHIub3B0cykse3NpbGVudDphfT10O3coci5vcHRzLGUpO2xldHt0aW1lcGlja2VyOm4sYnV0dG9uczpvLHJhbmdlOmgsc2VsZWN0ZWREYXRlczpsLGlzTW9iaWxlOmR9PXIub3B0cyxjPXIudmlzaWJsZXx8ci50cmVhdEFzSW5saW5lO3IuX2NyZWF0ZU1pbk1heERhdGVzKCksci5fbGltaXRWaWV3RGF0ZUJ5TWF4TWluRGF0ZXMoKSxyLl9oYW5kbGVMb2NhbGUoKSxsJiYoci5zZWxlY3RlZERhdGVzPVtdLHIuc2VsZWN0RGF0ZShsLHtzaWxlbnQ6YX0pKSxlLnZpZXcmJnIuc2V0Q3VycmVudFZpZXcoZS52aWV3LHtzaWxlbnQ6YX0pLHIuX3NldElucHV0VmFsdWUoKSxzLnJhbmdlJiYhaD8oci5yYW5nZURhdGVUbz0hMSxyLnJhbmdlRGF0ZUZyb209ITEpOiFzLnJhbmdlJiZoJiZyLnNlbGVjdGVkRGF0ZXMubGVuZ3RoJiYoci5yYW5nZURhdGVGcm9tPXIuc2VsZWN0ZWREYXRlc1swXSxyLnJhbmdlRGF0ZVRvPXIuc2VsZWN0ZWREYXRlc1sxXSkscy50aW1lcGlja2VyJiYhbj8oYyYmci50aW1lcGlja2VyLmRlc3Ryb3koKSxyLnRpbWVwaWNrZXI9ITEsci4kdGltZXBpY2tlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIuJHRpbWVwaWNrZXIpKTohcy50aW1lcGlja2VyJiZuJiZyLl9hZGRUaW1lcGlja2VyKCksIXMuYnV0dG9ucyYmbz9yLl9hZGRCdXR0b25zKCk6cy5idXR0b25zJiYhbz8oci5idXR0b25zLmRlc3Ryb3koKSxyLiRidXR0b25zLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoci4kYnV0dG9ucykpOmMmJnMuYnV0dG9ucyYmbyYmci5idXR0b25zLmNsZWFySHRtbCgpLnJlbmRlcigpLCFzLmlzTW9iaWxlJiZkPyhyLnRyZWF0QXNJbmxpbmV8fGp8fHIuX2NyZWF0ZU1vYmlsZU92ZXJsYXkoKSxyLl9hZGRNb2JpbGVBdHRyaWJ1dGVzKCksci52aXNpYmxlJiZyLl9zaG93TW9iaWxlT3ZlcmxheSgpKTpzLmlzTW9iaWxlJiYhZCYmKHIuX3JlbW92ZU1vYmlsZUF0dHJpYnV0ZXMoKSxyLnZpc2libGUmJihqLmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlLVwiKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiByLm9wdHMucG9zaXRpb24mJnIuc2V0UG9zaXRpb24oKSkpLGMmJihyLm5hdi51cGRhdGUoKSxyLnZpZXdzW3IuY3VycmVudFZpZXddLnJlbmRlcigpLHIuY3VycmVudFZpZXc9PT1pLmRheXMmJnIudmlld3Nbci5jdXJyZW50Vmlld10ucmVuZGVyRGF5TmFtZXMoKSl9KSksSSh0aGlzLFwiZGlzYWJsZURhdGVcIiwoKGUsdCk9PnsoQXJyYXkuaXNBcnJheShlKT9lOltlXSkuZm9yRWFjaCgoZT0+e2xldCBpPWIoZSk7aWYoIWkpcmV0dXJuO2xldCBzPXQ/XCJkZWxldGVcIjpcImFkZFwiO3RoaXMuZGlzYWJsZWREYXRlc1tzXSh0aGlzLmZvcm1hdERhdGUoaSxcInl5eXktTU0tZGRcIikpO2xldCBhPXRoaXMuZ2V0Q2VsbChpLHRoaXMuY3VycmVudFZpZXdTaW5ndWxhcik7YSYmYS5hZHBDZWxsLnJlbmRlcigpfSksW10pfSkpLEkodGhpcyxcImVuYWJsZURhdGVcIiwoZT0+e3RoaXMuZGlzYWJsZURhdGUoZSwhMCl9KSksSSh0aGlzLFwiaXNEYXRlRGlzYWJsZWRcIiwoZT0+e2xldCB0PWIoZSk7cmV0dXJuIHRoaXMuZGlzYWJsZWREYXRlcy5oYXModGhpcy5mb3JtYXREYXRlKHQsXCJ5eXl5LU1NLWRkXCIpKX0pKSxJKHRoaXMsXCJpc090aGVyTW9udGhcIiwoZT0+e2xldHttb250aDp0fT1oKGUpO3JldHVybiB0IT09dGhpcy5wYXJzZWRWaWV3RGF0ZS5tb250aH0pKSxJKHRoaXMsXCJpc090aGVyWWVhclwiLChlPT57bGV0e3llYXI6dH09aChlKTtyZXR1cm4gdCE9PXRoaXMucGFyc2VkVmlld0RhdGUueWVhcn0pKSxJKHRoaXMsXCJpc090aGVyRGVjYWRlXCIsKGU9PntsZXR7eWVhcjp0fT1oKGUpLFtpLHNdPWModGhpcy52aWV3RGF0ZSk7cmV0dXJuIHQ8aXx8dD5zfSkpLEkodGhpcyxcIl9vbkNoYW5nZVNlbGVjdGVkRGF0ZVwiLChlPT57bGV0e3NpbGVudDp0fT1lO3NldFRpbWVvdXQoKCgpPT57dGhpcy5fc2V0SW5wdXRWYWx1ZSgpLHRoaXMub3B0cy5vblNlbGVjdCYmIXQmJnRoaXMuX3RyaWdnZXJPblNlbGVjdCgpfSkpfSkpLEkodGhpcyxcIl9vbkNoYW5nZUZvY3VzZWREYXRlXCIsKGZ1bmN0aW9uKGUpe2xldHt2aWV3RGF0ZVRyYW5zaXRpb246dH09YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O2lmKCFlKXJldHVybjtsZXQgaT0hMTt0JiYoaT1yLmlzT3RoZXJNb250aChlKXx8ci5pc090aGVyWWVhcihlKXx8ci5pc090aGVyRGVjYWRlKGUpKSxpJiZyLnNldFZpZXdEYXRlKGUpLHIub3B0cy5vbkZvY3VzJiZyLm9wdHMub25Gb2N1cyh7ZGF0ZXBpY2tlcjpyLGRhdGU6ZX0pfSkpLEkodGhpcyxcIl9vbkNoYW5nZVRpbWVcIiwoZT0+e2xldHtob3Vyczp0LG1pbnV0ZXM6aX09ZSxzPW5ldyBEYXRlLHtsYXN0U2VsZWN0ZWREYXRlOmEsb3B0czp7b25TZWxlY3Q6bn19PXRoaXMscj1hO2F8fChyPXMpO2xldCBvPXRoaXMuZ2V0Q2VsbChyLHRoaXMuY3VycmVudFZpZXdTaW5ndWxhciksaD1vJiZvLmFkcENlbGw7aCYmaC5pc0Rpc2FibGVkfHwoci5zZXRIb3Vycyh0KSxyLnNldE1pbnV0ZXMoaSksYT8odGhpcy5fc2V0SW5wdXRWYWx1ZSgpLG4mJnRoaXMuX3RyaWdnZXJPblNlbGVjdCgpKTp0aGlzLnNlbGVjdERhdGUocikpfSkpLEkodGhpcyxcIl9vbkZvY3VzXCIsKGU9Pnt0aGlzLnZpc2libGV8fHRoaXMuc2hvdygpfSkpLEkodGhpcyxcIl9vbkJsdXJcIiwoZT0+e3RoaXMuaW5Gb2N1c3x8IXRoaXMudmlzaWJsZXx8dGhpcy5vcHRzLmlzTW9iaWxlfHx0aGlzLmhpZGUoKX0pKSxJKHRoaXMsXCJfb25Nb3VzZURvd25cIiwoZT0+e3RoaXMuaW5Gb2N1cz0hMH0pKSxJKHRoaXMsXCJfb25Nb3VzZVVwXCIsKGU9Pnt0aGlzLmluRm9jdXM9ITEsdGhpcy4kZWwuZm9jdXMoKX0pKSxJKHRoaXMsXCJfb25SZXNpemVcIiwoKCk9Pnt0aGlzLnZpc2libGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMub3B0cy5wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbigpfSkpLEkodGhpcyxcIl9vbkNsaWNrT3ZlcmxheVwiLCgoKT0+e3RoaXMudmlzaWJsZSYmdGhpcy5oaWRlKCl9KSksSSh0aGlzLFwiZ2V0Vmlld0RhdGVzXCIsKGZ1bmN0aW9uKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmkuZGF5cztyZXR1cm4gVC5nZXREYXRlc0Z1bmN0aW9uKGUpKHIpfSkpLEkodGhpcyxcImlzV2Vla2VuZFwiLChlPT50aGlzLm9wdHMud2Vla2VuZHMuaW5jbHVkZXMoZSkpKSxJKHRoaXMsXCJnZXRDbGFtcGVkRGF0ZVwiLChlPT57bGV0e21pbkRhdGU6dCxtYXhEYXRlOml9PXRoaXMscz1lO3JldHVybiBpJiZtKGUsaSk/cz1pOnQmJnYoZSx0KSYmKHM9dCksc30pKSx0aGlzLiRlbD1hKGUpLCF0aGlzLiRlbClyZXR1cm47dGhpcy4kZGF0ZXBpY2tlcj1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlclwifSksdGhpcy5vcHRzPXcoe30scyx0KSx0aGlzLiRjdXN0b21Db250YWluZXI9ISF0aGlzLm9wdHMuY29udGFpbmVyJiZhKHRoaXMub3B0cy5jb250YWluZXIpLHRoaXMuJGFsdEZpZWxkPWEodGhpcy5vcHRzLmFsdEZpZWxkfHwhMSk7bGV0e3ZpZXc6byxzdGFydERhdGU6bH09dGhpcy5vcHRzO2x8fCh0aGlzLm9wdHMuc3RhcnREYXRlPW5ldyBEYXRlKSxcIklOUFVUXCI9PT10aGlzLiRlbC5ub2RlTmFtZSYmKHRoaXMuZWxJc0lucHV0PSEwKSx0aGlzLmluaXRlZD0hMSx0aGlzLnZpc2libGU9ITEsdGhpcy52aWV3RGF0ZT1iKHRoaXMub3B0cy5zdGFydERhdGUpLHRoaXMuZm9jdXNEYXRlPSExLHRoaXMuaW5pdGlhbFJlYWRvbmx5PXRoaXMuJGVsLmdldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIpLHRoaXMuY3VzdG9tSGlkZT0hMSx0aGlzLmN1cnJlbnRWaWV3PW8sdGhpcy5zZWxlY3RlZERhdGVzPVtdLHRoaXMuZGlzYWJsZWREYXRlcz1uZXcgU2V0LHRoaXMudmlld3M9e30sdGhpcy5rZXlzPVtdLHRoaXMucmFuZ2VEYXRlRnJvbT1cIlwiLHRoaXMucmFuZ2VEYXRlVG89XCJcIix0aGlzLnRpbWVwaWNrZXJJc0FjdGl2ZT0hMSx0aGlzLnRyZWF0QXNJbmxpbmU9dGhpcy5vcHRzLmlubGluZXx8IXRoaXMuZWxJc0lucHV0LHRoaXMuaW5pdCgpfWluaXQoKXtsZXR7b3B0czplLHRyZWF0QXNJbmxpbmU6dCxvcHRzOntpbmxpbmU6aSxpc01vYmlsZTpzLHNlbGVjdGVkRGF0ZXM6bixrZXlib2FyZE5hdjpyLG9ubHlUaW1lcGlja2VyOm99fT10aGlzLGg9YShcImJvZHlcIik7KCFCfHxCJiZQJiYhaC5jb250YWlucyhQKSkmJiFpJiZ0aGlzLmVsSXNJbnB1dCYmIXRoaXMuJGN1c3RvbUNvbnRhaW5lciYmUi5idWlsZEdsb2JhbENvbnRhaW5lcihSLmRlZmF1bHRHbG9iYWxDb250YWluZXJJZCksIXN8fGp8fHR8fHRoaXMuX2NyZWF0ZU1vYmlsZU92ZXJsYXkoKSx0aGlzLl9oYW5kbGVMb2NhbGUoKSx0aGlzLl9iaW5kU3ViRXZlbnRzKCksdGhpcy5fY3JlYXRlTWluTWF4RGF0ZXMoKSx0aGlzLl9saW1pdFZpZXdEYXRlQnlNYXhNaW5EYXRlcygpLHRoaXMuZWxJc0lucHV0JiYoaXx8dGhpcy5fYmluZEV2ZW50cygpLHImJiFvJiYodGhpcy5rZXlib2FyZE5hdj1uZXcgQSh7ZHA6dGhpcyxvcHRzOmV9KSkpLG4mJnRoaXMuc2VsZWN0RGF0ZShuLHtzaWxlbnQ6ITB9KSx0aGlzLm9wdHMudmlzaWJsZSYmIXQmJnRoaXMuc2hvdygpLHMmJiF0JiZ0aGlzLiRlbC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCEwKSx0JiZ0aGlzLl9jcmVhdGVDb21wb25lbnRzKCl9X2NyZWF0ZU1vYmlsZU92ZXJsYXkoKXtqPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLW92ZXJsYXlcIn0pLFAuYXBwZW5kQ2hpbGQoail9X2NyZWF0ZUNvbXBvbmVudHMoKXtsZXR7b3B0czplLHRyZWF0QXNJbmxpbmU6dCxvcHRzOntpbmxpbmU6aSxidXR0b25zOnMsdGltZXBpY2tlcjphLHBvc2l0aW9uOm4sY2xhc3NlczpyLG9ubHlUaW1lcGlja2VyOm8saXNNb2JpbGU6aH19PXRoaXM7dGhpcy5fYnVpbGRCYXNlSHRtbCgpLHRoaXMuZWxJc0lucHV0JiYoaXx8dGhpcy5fc2V0UG9zaXRpb25DbGFzc2VzKG4pKSwhaSYmdGhpcy5lbElzSW5wdXR8fHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1pbmxpbmUtXCIpLHImJnRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZCguLi5yLnNwbGl0KFwiIFwiKSksbyYmdGhpcy4kZGF0ZXBpY2tlci5jbGFzc0xpc3QuYWRkKFwiLW9ubHktdGltZXBpY2tlci1cIiksaCYmIXQmJnRoaXMuX2FkZE1vYmlsZUF0dHJpYnV0ZXMoKSx0aGlzLnZpZXdzW3RoaXMuY3VycmVudFZpZXddPW5ldyBUKHtkcDp0aGlzLHR5cGU6dGhpcy5jdXJyZW50VmlldyxvcHRzOmV9KSx0aGlzLm5hdj1uZXcgVih7ZHA6dGhpcyxvcHRzOmV9KSxhJiZ0aGlzLl9hZGRUaW1lcGlja2VyKCkscyYmdGhpcy5fYWRkQnV0dG9ucygpLHRoaXMuJGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3XS4kZWwpLHRoaXMuJG5hdi5hcHBlbmRDaGlsZCh0aGlzLm5hdi4kZWwpfV9kZXN0cm95Q29tcG9uZW50cygpe2ZvcihsZXQgZSBpbiB0aGlzLnZpZXdzKXRoaXMudmlld3NbZV0uZGVzdHJveSgpO3RoaXMudmlld3M9e30sdGhpcy5uYXYuZGVzdHJveSgpLHRoaXMudGltZXBpY2tlciYmdGhpcy50aW1lcGlja2VyLmRlc3Ryb3koKX1fYWRkTW9iaWxlQXR0cmlidXRlcygpe2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fb25DbGlja092ZXJsYXkpLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1pcy1tb2JpbGUtXCIpLHRoaXMuJGVsLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsITApfV9yZW1vdmVNb2JpbGVBdHRyaWJ1dGVzKCl7ai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLl9vbkNsaWNrT3ZlcmxheSksdGhpcy4kZGF0ZXBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwiLWlzLW1vYmlsZS1cIiksdGhpcy5pbml0aWFsUmVhZG9ubHl8fFwiXCI9PT10aGlzLmluaXRpYWxSZWFkb25seXx8dGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIil9X2NyZWF0ZU1pbk1heERhdGVzKCl7bGV0e21pbkRhdGU6ZSxtYXhEYXRlOnR9PXRoaXMub3B0czt0aGlzLm1pbkRhdGU9ISFlJiZiKGUpLHRoaXMubWF4RGF0ZT0hIXQmJmIodCl9X2FkZFRpbWVwaWNrZXIoKXt0aGlzLiR0aW1lcGlja2VyPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLS10aW1lXCJ9KSx0aGlzLiRkYXRlcGlja2VyLmFwcGVuZENoaWxkKHRoaXMuJHRpbWVwaWNrZXIpLHRoaXMudGltZXBpY2tlcj1uZXcgTCh7ZHA6dGhpcyxvcHRzOnRoaXMub3B0c30pLHRoaXMuJHRpbWVwaWNrZXIuYXBwZW5kQ2hpbGQodGhpcy50aW1lcGlja2VyLiRlbCl9X2FkZEJ1dHRvbnMoKXt0aGlzLiRidXR0b25zPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLS1idXR0b25zXCJ9KSx0aGlzLiRkYXRlcGlja2VyLmFwcGVuZENoaWxkKHRoaXMuJGJ1dHRvbnMpLHRoaXMuYnV0dG9ucz1uZXcgSCh7ZHA6dGhpcyxvcHRzOnRoaXMub3B0c30pLHRoaXMuJGJ1dHRvbnMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25zLiRlbCl9X2JpbmRTdWJFdmVudHMoKXt0aGlzLm9uKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5fb25DaGFuZ2VTZWxlY3RlZERhdGUpLHRoaXMub24oaS5ldmVudENoYW5nZUZvY3VzRGF0ZSx0aGlzLl9vbkNoYW5nZUZvY3VzZWREYXRlKSx0aGlzLm9uKGkuZXZlbnRDaGFuZ2VUaW1lLHRoaXMuX29uQ2hhbmdlVGltZSl9X2J1aWxkQmFzZUh0bWwoKXtsZXR7aW5saW5lOmV9PXRoaXMub3B0czt2YXIgdCxpO3RoaXMuZWxJc0lucHV0P2U/KHQ9dGhpcy4kZGF0ZXBpY2tlciwoaT10aGlzLiRlbCkucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxpLm5leHRTaWJsaW5nKSk6dGhpcy4kY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJGRhdGVwaWNrZXIpOnRoaXMuJGVsLmFwcGVuZENoaWxkKHRoaXMuJGRhdGVwaWNrZXIpLHRoaXMuJGRhdGVwaWNrZXIuaW5uZXJIVE1MPSc8aSBjbGFzcz1cImFpci1kYXRlcGlja2VyLS1wb2ludGVyXCI+PC9pPjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci0tbmF2aWdhdGlvblwiPjwvZGl2PjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci0tY29udGVudFwiPjwvZGl2PicsdGhpcy4kY29udGVudD1hKFwiLmFpci1kYXRlcGlja2VyLS1jb250ZW50XCIsdGhpcy4kZGF0ZXBpY2tlciksdGhpcy4kcG9pbnRlcj1hKFwiLmFpci1kYXRlcGlja2VyLS1wb2ludGVyXCIsdGhpcy4kZGF0ZXBpY2tlciksdGhpcy4kbmF2PWEoXCIuYWlyLWRhdGVwaWNrZXItLW5hdmlnYXRpb25cIix0aGlzLiRkYXRlcGlja2VyKX1faGFuZGxlTG9jYWxlKCl7bGV0e2xvY2FsZTplLGRhdGVGb3JtYXQ6dCxmaXJzdERheTppLHRpbWVwaWNrZXI6cyxvbmx5VGltZXBpY2tlcjphLHRpbWVGb3JtYXQ6bixkYXRlVGltZVNlcGFyYXRvcjpyfT10aGlzLm9wdHM7dmFyIG87dGhpcy5sb2NhbGU9KG89ZSxKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG8pKSksdCYmKHRoaXMubG9jYWxlLmRhdGVGb3JtYXQ9dCksdm9pZCAwIT09biYmXCJcIiE9PW4mJih0aGlzLmxvY2FsZS50aW1lRm9ybWF0PW4pO2xldHt0aW1lRm9ybWF0Omh9PXRoaXMubG9jYWxlO2lmKFwiXCIhPT1pJiYodGhpcy5sb2NhbGUuZmlyc3REYXk9aSkscyYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCl7bGV0IGU9aD9yOlwiXCI7dGhpcy5sb2NhbGUuZGF0ZUZvcm1hdD1bdGhpcy5sb2NhbGUuZGF0ZUZvcm1hdCxofHxcIlwiXS5qb2luKGUpfWEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJih0aGlzLmxvY2FsZS5kYXRlRm9ybWF0PXRoaXMubG9jYWxlLnRpbWVGb3JtYXQpfV9zZXRQb3NpdGlvbkNsYXNzZXMoZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gdm9pZCB0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoXCItY3VzdG9tLXBvc2l0aW9uLVwiKTtsZXQgdD0oZT1lLnNwbGl0KFwiIFwiKSlbMF0saT1gYWlyLWRhdGVwaWNrZXIgLSR7dH0tJHtlWzFdfS0gLWZyb20tJHt0fS1gO3RoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZCguLi5pLnNwbGl0KFwiIFwiKSl9X2JpbmRFdmVudHMoKXt0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKHRoaXMub3B0cy5zaG93RXZlbnQsdGhpcy5fb25Gb2N1cyksdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpLHRoaXMuJGRhdGVwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX29uTW91c2VEb3duKSx0aGlzLiRkYXRlcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5fb25Nb3VzZVVwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX29uUmVzaXplKX1fbGltaXRWaWV3RGF0ZUJ5TWF4TWluRGF0ZXMoKXtsZXR7dmlld0RhdGU6ZSxtaW5EYXRlOnQsbWF4RGF0ZTppfT10aGlzO2kmJm0oZSxpKSYmdGhpcy5zZXRWaWV3RGF0ZShpKSx0JiZ2KGUsdCkmJnRoaXMuc2V0Vmlld0RhdGUodCl9Zm9ybWF0RGF0ZSgpe2xldCBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLnZpZXdEYXRlLHQ9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDA7aWYoZT1iKGUpLCEoZSBpbnN0YW5jZW9mIERhdGUpKXJldHVybjtsZXQgaT10LHM9dGhpcy5sb2NhbGUsYT1oKGUpLG49YS5kYXlQZXJpb2Qscj1jKGUpLG89Ui5yZXBsYWNlcixsPXtUOmUuZ2V0VGltZSgpLG06YS5taW51dGVzLG1tOmEuZnVsbE1pbnV0ZXMsaDphLmhvdXJzMTIsaGg6YS5mdWxsSG91cnMxMixIOmEuaG91cnMsSEg6YS5mdWxsSG91cnMsYWE6bixBQTpuLnRvVXBwZXJDYXNlKCksRTpzLmRheXNTaG9ydFthLmRheV0sRUVFRTpzLmRheXNbYS5kYXldLGQ6YS5kYXRlLGRkOmEuZnVsbERhdGUsTTphLm1vbnRoKzEsTU06YS5mdWxsTW9udGgsTU1NOnMubW9udGhzU2hvcnRbYS5tb250aF0sTU1NTTpzLm1vbnRoc1thLm1vbnRoXSx5eTphLnllYXIudG9TdHJpbmcoKS5zbGljZSgtMikseXl5eTphLnllYXIseXl5eTE6clswXSx5eXl5MjpyWzFdfTtmb3IobGV0W2UsdF1vZiBPYmplY3QuZW50cmllcyhsKSlpPW8oaSxrKGUpLHQpO3JldHVybiBpfWRvd24oZSl7dGhpcy5faGFuZGxlVXBEb3duQWN0aW9ucyhlLFwiZG93blwiKX11cChlKXt0aGlzLl9oYW5kbGVVcERvd25BY3Rpb25zKGUsXCJ1cFwiKX1zZWxlY3REYXRlKGUpe2xldCB0LHM9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHtjdXJyZW50VmlldzphLHBhcnNlZFZpZXdEYXRlOm4sc2VsZWN0ZWREYXRlczpyfT10aGlzLHt1cGRhdGVUaW1lOm99PXMse21vdmVUb090aGVyTW9udGhzT25TZWxlY3Q6aCxtb3ZlVG9PdGhlclllYXJzT25TZWxlY3Q6bCxtdWx0aXBsZURhdGVzOmQscmFuZ2U6YyxhdXRvQ2xvc2U6dSxvbkJlZm9yZVNlbGVjdDpwfT10aGlzLm9wdHMsdj1yLmxlbmd0aDtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLmZvckVhY2goKGU9Pnt0aGlzLnNlbGVjdERhdGUoZSxzKX0pKSxuZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoZSl9KSk7aWYoKGU9YihlKSlpbnN0YW5jZW9mIERhdGUpe2lmKHAmJiFwKHtkYXRlOmUsZGF0ZXBpY2tlcjp0aGlzfSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO2lmKGE9PT1pLmRheXMmJmUuZ2V0TW9udGgoKSE9PW4ubW9udGgmJmgmJih0PW5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSxlLmdldE1vbnRoKCksMSkpLGE9PT1pLnllYXJzJiZlLmdldEZ1bGxZZWFyKCkhPT1uLnllYXImJmwmJih0PW5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSwwLDEpKSx0JiZ0aGlzLnNldFZpZXdEYXRlKHQpLGQmJiFjKXtpZih2PT09ZClyZXR1cm47dGhpcy5fY2hlY2tJZkRhdGVJc1NlbGVjdGVkKGUpfHxyLnB1c2goZSl9ZWxzZSBpZihjKXN3aXRjaCh2KXtjYXNlIDE6ci5wdXNoKGUpLHRoaXMucmFuZ2VEYXRlVG98fCh0aGlzLnJhbmdlRGF0ZVRvPWUpLG0odGhpcy5yYW5nZURhdGVGcm9tLHRoaXMucmFuZ2VEYXRlVG8pJiYodGhpcy5yYW5nZURhdGVUbz10aGlzLnJhbmdlRGF0ZUZyb20sdGhpcy5yYW5nZURhdGVGcm9tPWUpLHRoaXMuc2VsZWN0ZWREYXRlcz1bdGhpcy5yYW5nZURhdGVGcm9tLHRoaXMucmFuZ2VEYXRlVG9dO2JyZWFrO2Nhc2UgMjp0aGlzLnNlbGVjdGVkRGF0ZXM9W2VdLHRoaXMucmFuZ2VEYXRlRnJvbT1lLHRoaXMucmFuZ2VEYXRlVG89XCJcIjticmVhaztkZWZhdWx0OnRoaXMuc2VsZWN0ZWREYXRlcz1bZV0sdGhpcy5yYW5nZURhdGVGcm9tPWV9ZWxzZSB0aGlzLnNlbGVjdGVkRGF0ZXM9W2VdO3JldHVybiB0aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx7YWN0aW9uOmkuYWN0aW9uU2VsZWN0RGF0ZSxzaWxlbnQ6bnVsbD09cz92b2lkIDA6cy5zaWxlbnQsZGF0ZTplLHVwZGF0ZVRpbWU6b30pLHRoaXMuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUoZSksdSYmIXRoaXMudGltZXBpY2tlcklzQWN0aXZlJiZ0aGlzLnZpc2libGUmJihkfHxjP2MmJjE9PT12JiZ0aGlzLmhpZGUoKTp0aGlzLmhpZGUoKSksbmV3IFByb21pc2UoKGU9PntzZXRUaW1lb3V0KGUpfSkpfX11bnNlbGVjdERhdGUoZSl7bGV0IHQ9dGhpcy5zZWxlY3RlZERhdGVzLHM9dGhpcztpZigoZT1iKGUpKWluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gdC5zb21lKCgoYSxuKT0+e2lmKHAoYSxlKSlyZXR1cm4gdC5zcGxpY2UobiwxKSxzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoP3MuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUocy5zZWxlY3RlZERhdGVzW3Muc2VsZWN0ZWREYXRlcy5sZW5ndGgtMV0pOihzLnJhbmdlRGF0ZUZyb209XCJcIixzLnJhbmdlRGF0ZVRvPVwiXCIscy5fdXBkYXRlTGFzdFNlbGVjdGVkRGF0ZSghMSkpLHRoaXMudHJpZ2dlcihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHthY3Rpb246aS5hY3Rpb25VbnNlbGVjdERhdGUsZGF0ZTplfSksITB9KSl9cmVwbGFjZURhdGUoZSx0KXtsZXQgcz10aGlzLnNlbGVjdGVkRGF0ZXMuZmluZCgodD0+cCh0LGUsdGhpcy5jdXJyZW50VmlldykpKSxhPXRoaXMuc2VsZWN0ZWREYXRlcy5pbmRleE9mKHMpO2E8MHx8cCh0aGlzLnNlbGVjdGVkRGF0ZXNbYV0sdCx0aGlzLmN1cnJlbnRWaWV3KXx8KHRoaXMuc2VsZWN0ZWREYXRlc1thXT10LHRoaXMudHJpZ2dlcihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHthY3Rpb246aS5hY3Rpb25TZWxlY3REYXRlLGRhdGU6dCx1cGRhdGVUaW1lOiEwfSksdGhpcy5fdXBkYXRlTGFzdFNlbGVjdGVkRGF0ZSh0KSl9Y2xlYXIoKXtsZXQgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlcz1bXSx0aGlzLnJhbmdlRGF0ZUZyb209ITEsdGhpcy5yYW5nZURhdGVUbz0hMSx0aGlzLmxhc3RTZWxlY3RlZERhdGU9ITEsdGhpcy50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUse2FjdGlvbjppLmFjdGlvblVuc2VsZWN0RGF0ZSxzaWxlbnQ6ZS5zaWxlbnR9KSxuZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoZSl9KSl9c2hvdygpe2xldHtvblNob3c6ZSxpc01vYmlsZTp0fT10aGlzLm9wdHM7dGhpcy5fY2FuY2VsU2NoZWR1bGVkQ2FsbCgpLHRoaXMudmlzaWJsZXx8dGhpcy5oaWRlQW5pbWF0aW9ufHx0aGlzLl9jcmVhdGVDb21wb25lbnRzKCksdGhpcy5zZXRQb3NpdGlvbih0aGlzLm9wdHMucG9zaXRpb24pLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1hY3RpdmUtXCIpLHRoaXMudmlzaWJsZT0hMCxlJiZ0aGlzLl9zY2hlZHVsZUNhbGxBZnRlclRyYW5zaXRpb24oZSksdCYmdGhpcy5fc2hvd01vYmlsZU92ZXJsYXkoKX1oaWRlKCl7bGV0e29uSGlkZTplLGlzTW9iaWxlOnR9PXRoaXMub3B0cyxpPXRoaXMuX2hhc1RyYW5zaXRpb24oKTt0aGlzLnZpc2libGU9ITEsdGhpcy5oaWRlQW5pbWF0aW9uPSEwLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmUtXCIpLHRoaXMuY3VzdG9tSGlkZSYmdGhpcy5jdXN0b21IaWRlKCksdGhpcy5lbElzSW5wdXQmJnRoaXMuJGVsLmJsdXIoKSx0aGlzLl9zY2hlZHVsZUNhbGxBZnRlclRyYW5zaXRpb24oKHQ9PnshdGhpcy5jdXN0b21IaWRlJiYodCYmaXx8IXQmJiFpKSYmdGhpcy5fZmluaXNoSGlkZSgpLGUmJmUodCl9KSksdCYmai5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZS1cIil9X3RyaWdnZXJPblNlbGVjdCgpe2xldCBlPVtdLHQ9W10se3NlbGVjdGVkRGF0ZXM6aSxsb2NhbGU6cyxvcHRzOntvblNlbGVjdDphLG11bHRpcGxlRGF0ZXM6bixyYW5nZTpyfX09dGhpcyxvPW58fHIsaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLmRhdGVGb3JtYXQ7aS5sZW5ndGgmJihlPWkubWFwKGcpLHQ9aD9uP3MuZGF0ZUZvcm1hdChlKTplLm1hcCgoZT0+cy5kYXRlRm9ybWF0KGUpKSk6ZS5tYXAoKGU9PnRoaXMuZm9ybWF0RGF0ZShlLHMuZGF0ZUZvcm1hdCkpKSksYSh7ZGF0ZTpvP2U6ZVswXSxmb3JtYXR0ZWREYXRlOm8/dDp0WzBdLGRhdGVwaWNrZXI6dGhpc30pfV9oYW5kbGVBbHJlYWR5U2VsZWN0ZWREYXRlcyhlLHQpe2xldHtzZWxlY3RlZERhdGVzOmkscmFuZ2VEYXRlRnJvbTpzLHJhbmdlRGF0ZVRvOmF9PXRoaXMse3JhbmdlOm4sdG9nZ2xlU2VsZWN0ZWQ6cn09dGhpcy5vcHRzLG89aS5sZW5ndGgsaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3Ioe2RhdGVwaWNrZXI6dGhpcyxkYXRlOnR9KTpyLGw9Qm9vbGVhbihuJiYxPT09byYmZSksZD1sP2codCk6dDtuJiYhaCYmKDIhPT1vJiZ0aGlzLnNlbGVjdERhdGUoZCksMj09PW8mJnAocyxhKSl8fChoP3RoaXMudW5zZWxlY3REYXRlKGQpOnRoaXMuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUobD9kOmUpKX1faGFuZGxlVXBEb3duQWN0aW9ucyhlLHQpe2lmKCEoKGU9YihlfHx0aGlzLmZvY3VzRGF0ZXx8dGhpcy52aWV3RGF0ZSkpaW5zdGFuY2VvZiBEYXRlKSlyZXR1cm47bGV0IGk9XCJ1cFwiPT09dD90aGlzLnZpZXdJbmRleCsxOnRoaXMudmlld0luZGV4LTE7aT4yJiYoaT0yKSxpPDAmJihpPTApLHRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZS5nZXRGdWxsWWVhcigpLGUuZ2V0TW9udGgoKSwxKSksdGhpcy5zZXRDdXJyZW50Vmlldyh0aGlzLnZpZXdJbmRleGVzW2ldKX1nZXRDZWxsKGUpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTppLmRheTtpZighKChlPWIoZSkpaW5zdGFuY2VvZiBEYXRlKSlyZXR1cm47bGV0e3llYXI6cyxtb250aDphLGRhdGU6bn09aChlKSxyPWBbZGF0YS15ZWFyPVwiJHtzfVwiXWAsbz1gW2RhdGEtbW9udGg9XCIke2F9XCJdYCxsPXtbaS5kYXldOmAke3J9JHtvfVtkYXRhLWRhdGU9XCIke259XCJdYCxbaS5tb250aF06YCR7cn0ke299YCxbaS55ZWFyXTpgJHtyfWB9O3JldHVybiB0aGlzLnZpZXdzW3RoaXMuY3VycmVudFZpZXddP3RoaXMudmlld3NbdGhpcy5jdXJyZW50Vmlld10uJGVsLnF1ZXJ5U2VsZWN0b3IobFt0XSk6dm9pZCAwfV9zaG93TW9iaWxlT3ZlcmxheSgpe2ouY2xhc3NMaXN0LmFkZChcIi1hY3RpdmUtXCIpfV9oYXNUcmFuc2l0aW9uKCl7cmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGRhdGVwaWNrZXIpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpLnNwbGl0KFwiLCBcIikucmVkdWNlKCgoZSx0KT0+cGFyc2VGbG9hdCh0KStlKSwwKT4wfWdldCBzaG91bGRVcGRhdGVET00oKXtyZXR1cm4gdGhpcy52aXNpYmxlfHx0aGlzLnRyZWF0QXNJbmxpbmV9Z2V0IHBhcnNlZFZpZXdEYXRlKCl7cmV0dXJuIGgodGhpcy52aWV3RGF0ZSl9Z2V0IGN1cnJlbnRWaWV3U2luZ3VsYXIoKXtyZXR1cm4gdGhpcy5jdXJyZW50Vmlldy5zbGljZSgwLC0xKX1nZXQgY3VyRGVjYWRlKCl7cmV0dXJuIGModGhpcy52aWV3RGF0ZSl9Z2V0IHZpZXdJbmRleCgpe3JldHVybiB0aGlzLnZpZXdJbmRleGVzLmluZGV4T2YodGhpcy5jdXJyZW50Vmlldyl9Z2V0IGlzRmluYWxWaWV3KCl7cmV0dXJuIHRoaXMuY3VycmVudFZpZXc9PT1pLnllYXJzfWdldCBoYXNTZWxlY3RlZERhdGVzKCl7cmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGg+MH1nZXQgaXNNaW5WaWV3UmVhY2hlZCgpe3JldHVybiB0aGlzLmN1cnJlbnRWaWV3PT09dGhpcy5vcHRzLm1pblZpZXd8fHRoaXMuY3VycmVudFZpZXc9PT1pLmRheXN9Z2V0ICRjb250YWluZXIoKXtyZXR1cm4gdGhpcy4kY3VzdG9tQ29udGFpbmVyfHxQfXN0YXRpYyByZXBsYWNlcihlLHQsaSl7cmV0dXJuIGUucmVwbGFjZSh0LChmdW5jdGlvbihlLHQscyxhKXtyZXR1cm4gdCtpK2F9KSl9fXZhciBLO3JldHVybiBJKFIsXCJkZWZhdWx0c1wiLHMpLEkoUixcInZlcnNpb25cIixcIjMuNS4wXCIpLEkoUixcImRlZmF1bHRHbG9iYWxDb250YWluZXJJZFwiLFwiYWlyLWRhdGVwaWNrZXItZ2xvYmFsLWNvbnRhaW5lclwiKSxLPVIucHJvdG90eXBlLE9iamVjdC5hc3NpZ24oSyxOKSx0LmRlZmF1bHR9KCl9KSk7IiwiaW1wb3J0IEFpckRhdGVwaWNrZXIgZnJvbSAnLi9haXItZGF0ZXBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBBaXJEYXRlcGlja2VyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIGRheXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgZGF5c1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICBkYXlzTWluOiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIG1vbnRoczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXG4gIG1vbnRoc1Nob3J0OiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHRvZGF5OiAnVG9kYXknLFxuICBjbGVhcjogJ0NsZWFyJyxcbiAgZGF0ZUZvcm1hdDogJ01NL2RkL3l5eXknLFxuICB0aW1lRm9ybWF0OiAnaGg6bW0gYWEnLFxuICBmaXJzdERheTogMFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLW90aGVyLW1vbnRoKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS06aG92ZXIsLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLTpob3Zlcntjb2xvcjp2YXIoLS1hZHAtY29sb3Itb3RoZXItbW9udGgtaG92ZXIpfS4tZGlzYWJsZWQtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1kaXNhYmxlZC0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLW90aGVyLW1vbnRoKX0uLXNlbGVjdGVkLS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuLXNlbGVjdGVkLS5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoKX0uLXNlbGVjdGVkLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC4tc2VsZWN0ZWQtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQtb3RoZXItbW9udGgtZm9jdXNlZCl9Li1pbi1yYW5nZS0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1pbi1yYW5nZS0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UpO2NvbG9yOnZhcigtLWFkcC1jb2xvcil9Li1pbi1yYW5nZS0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuLWluLXJhbmdlLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlLWZvY3VzZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLTplbXB0eSwuYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgtOmVtcHR5e2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZX0uYWlyLWRhdGVwaWNrZXItY2VsbHtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1jZWxsLWJvcmRlci1yYWRpdXMpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ei1pbmRleDoxfS5haXItZGF0ZXBpY2tlci1jZWxsLi1mb2N1cy17YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tY3VycmVudC17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLWN1cnJlbnQtZGF0ZSl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQtLi1mb2N1cy17Y29sb3I6dmFyKC0tYWRwLWNvbG9yKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tY3VycmVudC0uLWluLXJhbmdlLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItY3VycmVudC1kYXRlKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGlzYWJsZWQte2N1cnNvcjpkZWZhdWx0O2NvbG9yOnZhcigtLWFkcC1jb2xvci1kaXNhYmxlZCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLS4tZm9jdXMte2NvbG9yOnZhcigtLWFkcC1jb2xvci1kaXNhYmxlZCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLS4taW4tcmFuZ2Ute2NvbG9yOnZhcigtLWFkcC1jb2xvci1kaXNhYmxlZC1pbi1yYW5nZSl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLS4tY3VycmVudC0uLWZvY3VzLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1pbi1yYW5nZS17YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtib3JkZXItcmFkaXVzOjB9LmFpci1kYXRlcGlja2VyLWNlbGwuLWluLXJhbmdlLTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UtaG92ZXIpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1yYW5nZS1mcm9tLXtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC1jZWxsLWJvcmRlci1jb2xvci1pbi1yYW5nZSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1jZWxsLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tcmFuZ2UtdG8te2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLWNvbG9yLWluLXJhbmdlKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UpO2JvcmRlci1yYWRpdXM6MCB2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKSAwfS5haXItZGF0ZXBpY2tlci1jZWxsLi1yYW5nZS10by0uLXJhbmdlLWZyb20te2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cyl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXNlbGVjdGVkLXtjb2xvcjojZmZmO2JvcmRlcjpub25lO2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXNlbGVjdGVkLS4tY3VycmVudC17Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1zZWxlY3RlZC0uLWZvY3VzLXtiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQtaG92ZXIpfVxuLmFpci1kYXRlcGlja2VyLWJvZHl7dHJhbnNpdGlvbjphbGwgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC10cmFuc2l0aW9uLWVhc2UpfS5haXItZGF0ZXBpY2tlci1ib2R5Li1oaWRkZW4te2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWVze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDcsIHZhcigtLWFkcC1kYXktY2VsbC13aWR0aCkpO21hcmdpbjo4cHggMCAzcHh9LmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1le2NvbG9yOnZhcigtLWFkcC1kYXktbmFtZS1jb2xvcik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXg6MTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOi44ZW19LmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lLi1jbGlja2FibGUte2N1cnNvcjpwb2ludGVyfS5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZS4tY2xpY2thYmxlLTpob3Zlcntjb2xvcjp2YXIoLS1hZHAtZGF5LW5hbWUtY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxsc3tkaXNwbGF5OmdyaWR9LmFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzLi1kYXlzLXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDcsIHZhcigtLWFkcC1kYXktY2VsbC13aWR0aCkpO2dyaWQtYXV0by1yb3dzOnZhcigtLWFkcC1kYXktY2VsbC1oZWlnaHQpfS5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxscy4tbW9udGhzLXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7Z3JpZC1hdXRvLXJvd3M6dmFyKC0tYWRwLW1vbnRoLWNlbGwtaGVpZ2h0KX0uYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMuLXllYXJzLXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDQsIDFmcik7Z3JpZC1hdXRvLXJvd3M6dmFyKC0tYWRwLXllYXItY2VsbC1oZWlnaHQpfVxuLmFpci1kYXRlcGlja2VyLW5hdntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbm5lcik7bWluLWhlaWdodDp2YXIoLS1hZHAtbmF2LWhlaWdodCk7cGFkZGluZzp2YXIoLS1hZHAtcGFkZGluZyk7Ym94LXNpemluZzpjb250ZW50LWJveH0uLW9ubHktdGltZXBpY2tlci0gLmFpci1kYXRlcGlja2VyLW5hdntkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGUsLmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9ue2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb257d2lkdGg6dmFyKC0tYWRwLW5hdi1hY3Rpb24tc2l6ZSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtYm9yZGVyLXJhZGl1cyk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbjpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb246YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb24uLWRpc2FibGVkLXt2aXNpYmlsaXR5OmhpZGRlbn0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb24gc3Zne3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uIHBhdGh7ZmlsbDpub25lO3N0cm9rZTp2YXIoLS1hZHAtbmF2LWFycm93LWNvbG9yKTtzdHJva2Utd2lkdGg6MnB4fS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxle2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpO3BhZGRpbmc6MCA4cHh9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGUgaXtmb250LXN0eWxlOm5vcm1hbDtjb2xvcjp2YXIoLS1hZHAtbmF2LWNvbG9yLXNlY29uZGFyeSk7bWFyZ2luLWxlZnQ6LjNlbX0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZTphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpfS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlLi1kaXNhYmxlZC17Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZDpub25lfVxuLmFpci1kYXRlcGlja2VyLWJ1dHRvbnN7ZGlzcGxheTpncmlkO2dyaWQtYXV0by1jb2x1bW5zOjFmcjtncmlkLWF1dG8tZmxvdzpjb2x1bW59LmFpci1kYXRlcGlja2VyLWJ1dHRvbntkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWFkcC1idG4tY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJ0bi1ib3JkZXItcmFkaXVzKTtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6dmFyKC0tYWRwLWJ0bi1oZWlnaHQpO2JvcmRlcjpub25lO2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwKX0uYWlyLWRhdGVwaWNrZXItYnV0dG9uOmhvdmVye2NvbG9yOnZhcigtLWFkcC1idG4tY29sb3ItaG92ZXIpO2JhY2tncm91bmQ6dmFyKC0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItYnV0dG9uOmZvY3Vze2NvbG9yOnZhcigtLWFkcC1idG4tY29sb3ItaG92ZXIpO2JhY2tncm91bmQ6dmFyKC0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtvdXRsaW5lOm5vbmV9LmFpci1kYXRlcGlja2VyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1hZHAtYnRuLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYWlyLWRhdGVwaWNrZXItYnV0dG9uIHNwYW57b3V0bGluZTpub25lO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfVxuLmFpci1kYXRlcGlja2VyLXRpbWV7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczptYXgtY29udGVudCAxZnI7Z3JpZC1jb2x1bW4tZ2FwOjEycHg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MCB2YXIoLS1hZHAtdGltZS1wYWRkaW5nLWlubmVyKX0uLW9ubHktdGltZXBpY2tlci0gLmFpci1kYXRlcGlja2VyLXRpbWV7Ym9yZGVyLXRvcDpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleDoxO2ZvbnQtc2l6ZToxNHB4O3RleHQtYWxpZ246Y2VudGVyfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWNvbG9ue21hcmdpbjowIDJweCAzcHg7bGluZS1oZWlnaHQ6MX0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1ob3VycywuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1taW51dGVze2xpbmUtaGVpZ2h0OjE7Zm9udC1zaXplOjE5cHg7Zm9udC1mYW1pbHk6XCJDZW50dXJ5IEdvdGhpY1wiLENlbnR1cnlHb3RoaWMsQXBwbGVHb3RoaWMsc2Fucy1zZXJpZjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnM6YWZ0ZXIsLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlczphZnRlcntjb250ZW50OlwiXCI7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtYm9yZGVyLXJhZGl1cyk7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMnB4O3RvcDotM3B4O3JpZ2h0Oi0ycHg7Ym90dG9tOi0ycHg7ei1pbmRleDotMTtvcGFjaXR5OjB9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnMuLWZvY3VzLTphZnRlciwuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1taW51dGVzLi1mb2N1cy06YWZ0ZXJ7b3BhY2l0eToxfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWFtcG17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2FsaWduLXNlbGY6ZmxleC1lbmQ7Y29sb3I6dmFyKC0tYWRwLXRpbWUtZGF5LXBlcmlvZC1jb2xvcik7bWFyZ2luLWxlZnQ6NnB4O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206MXB4fS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MTFweDtoZWlnaHQ6MTdweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpLCB2YXIoLS1hZHAtdGltZS10cmFjay1jb2xvcikpIGxlZnQgNTAlLzEwMCUgdmFyKC0tYWRwLXRpbWUtdHJhY2staGVpZ2h0KSBuby1yZXBlYXR9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdzpmaXJzdC1jaGlsZHttYXJnaW4tYm90dG9tOjRweH0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2Vde2JhY2tncm91bmQ6bm9uZTtjdXJzb3I6cG9pbnRlcjtmbGV4OjE7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwYWRkaW5nOjA7bWFyZ2luOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRvb2x0aXB7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06aG92ZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtdGltZS10cmFjay1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTpob3Zlcjo6LW1vei1yYW5nZS10aHVtYntib3JkZXItY29sb3I6dmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06aG92ZXI6Oi1tcy10aHVtYntib3JkZXItY29sb3I6dmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXN7b3V0bGluZTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tb3otcmFuZ2UtdGh1bWJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtib3JkZXItY29sb3I6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCl9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbik7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1ie2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjstbW96LXRyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbik7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWJ7Ym94LXNpemluZzpib3JkZXItYm94O2hlaWdodDoxMnB4O3dpZHRoOjEycHg7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1hZHAtdGltZS10cmFjay1jb2xvcik7YmFja2dyb3VuZDojZmZmO2N1cnNvcjpwb2ludGVyOy1tcy10cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWFkcC10aW1lLXRodW1iLXNpemUpLzIqLTEpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2JvcmRlcjpub25lO2hlaWdodDp2YXIoLS1hZHAtdGltZS10cmFjay1oZWlnaHQpO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsMCk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2t7Ym9yZGVyOm5vbmU7aGVpZ2h0OnZhcigtLWFkcC10aW1lLXRyYWNrLWhlaWdodCk7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6cmdiYSgwLDAsMCwwKTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCl9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNre2JvcmRlcjpub25lO2hlaWdodDp2YXIoLS1hZHAtdGltZS10cmFjay1oZWlnaHQpO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsMCk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCl9XG4uYWlyLWRhdGVwaWNrZXJ7LS1hZHAtZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiOy0tYWRwLWZvbnQtc2l6ZTogMTRweDstLWFkcC13aWR0aDogMjQ2cHg7LS1hZHAtei1pbmRleDogMTAwOy0tYWRwLXBhZGRpbmc6IDRweDstLWFkcC1ncmlkLWFyZWFzOiBcIm5hdlwiIFwiYm9keVwiIFwidGltZXBpY2tlclwiIFwiYnV0dG9uc1wiOy0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb246IC4zczstLWFkcC10cmFuc2l0aW9uLWVhc2U6IGVhc2Utb3V0Oy0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0OiA4cHg7LS1hZHAtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjZjBmMGYwOy0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAjZWFlYWVhOy0tYWRwLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2U6IHJnYmEoOTIsIDE5NiwgMjM5LCAuMSk7LS1hZHAtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZS1mb2N1c2VkOiByZ2JhKDkyLCAxOTYsIDIzOSwgLjIpOy0tYWRwLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQtb3RoZXItbW9udGgtZm9jdXNlZDogIzhhZDVmNDstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoOiAjYTJkZGY2Oy0tYWRwLWNvbG9yOiAjNGE0YTRhOy0tYWRwLWNvbG9yLXNlY29uZGFyeTogIzljOWM5YzstLWFkcC1hY2NlbnQtY29sb3I6ICM0ZWI1ZTY7LS1hZHAtY29sb3ItY3VycmVudC1kYXRlOiB2YXIoLS1hZHAtYWNjZW50LWNvbG9yKTstLWFkcC1jb2xvci1vdGhlci1tb250aDogI2RlZGVkZTstLWFkcC1jb2xvci1kaXNhYmxlZDogI2FlYWVhZTstLWFkcC1jb2xvci1kaXNhYmxlZC1pbi1yYW5nZTogIzkzOTM5MzstLWFkcC1jb2xvci1vdGhlci1tb250aC1ob3ZlcjogI2M1YzVjNTstLWFkcC1ib3JkZXItY29sb3I6ICNkYmRiZGI7LS1hZHAtYm9yZGVyLWNvbG9yLWlubmVyOiAjZWZlZmVmOy0tYWRwLWJvcmRlci1yYWRpdXM6IDRweDstLWFkcC1ib3JkZXItY29sb3ItaW5saW5lOiAjZDdkN2Q3Oy0tYWRwLW5hdi1oZWlnaHQ6IDMycHg7LS1hZHAtbmF2LWFycm93LWNvbG9yOiB2YXIoLS1hZHAtY29sb3Itc2Vjb25kYXJ5KTstLWFkcC1uYXYtYWN0aW9uLXNpemU6IDMycHg7LS1hZHAtbmF2LWNvbG9yLXNlY29uZGFyeTogdmFyKC0tYWRwLWNvbG9yLXNlY29uZGFyeSk7LS1hZHAtZGF5LW5hbWUtY29sb3I6ICNmZjlhMTk7LS1hZHAtZGF5LW5hbWUtY29sb3ItaG92ZXI6ICM4YWQ1ZjQ7LS1hZHAtZGF5LWNlbGwtd2lkdGg6IDFmcjstLWFkcC1kYXktY2VsbC1oZWlnaHQ6IDMycHg7LS1hZHAtbW9udGgtY2VsbC1oZWlnaHQ6IDQycHg7LS1hZHAteWVhci1jZWxsLWhlaWdodDogNTZweDstLWFkcC1wb2ludGVyLXNpemU6IDEwcHg7LS1hZHAtcG9pbmVyLWJvcmRlci1yYWRpdXM6IDJweDstLWFkcC1wb2ludGVyLW9mZnNldDogMTRweDstLWFkcC1jZWxsLWJvcmRlci1yYWRpdXM6IDRweDstLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTstLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6ICM1Y2M0ZWY7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLWhvdmVyOiAjNDViY2VkOy0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZTogcmdiYSg5MiwgMTk2LCAyMzksIDAuMSk7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlLWhvdmVyOiByZ2JhKDkyLCAxOTYsIDIzOSwgMC4yKTstLWFkcC1jZWxsLWJvcmRlci1jb2xvci1pbi1yYW5nZTogdmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7LS1hZHAtYnRuLWhlaWdodDogMzJweDstLWFkcC1idG4tY29sb3I6IHZhcigtLWFkcC1hY2NlbnQtY29sb3IpOy0tYWRwLWJ0bi1jb2xvci1ob3ZlcjogdmFyKC0tYWRwLWNvbG9yKTstLWFkcC1idG4tYm9yZGVyLXJhZGl1czogdmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpOy0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7LS1hZHAtYnRuLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiB2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpOy0tYWRwLXRpbWUtdHJhY2staGVpZ2h0OiAxcHg7LS1hZHAtdGltZS10cmFjay1jb2xvcjogI2RlZGVkZTstLWFkcC10aW1lLXRyYWNrLWNvbG9yLWhvdmVyOiAjYjFiMWIxOy0tYWRwLXRpbWUtdGh1bWItc2l6ZTogMTJweDstLWFkcC10aW1lLXBhZGRpbmctaW5uZXI6IDEwcHg7LS1hZHAtdGltZS1kYXktcGVyaW9kLWNvbG9yOiB2YXIoLS1hZHAtY29sb3Itc2Vjb25kYXJ5KTstLWFkcC1tb2JpbGUtZm9udC1zaXplOiAxNnB4Oy0tYWRwLW1vYmlsZS1uYXYtaGVpZ2h0OiA0MHB4Oy0tYWRwLW1vYmlsZS13aWR0aDogMzIwcHg7LS1hZHAtbW9iaWxlLWRheS1jZWxsLWhlaWdodDogMzhweDstLWFkcC1tb2JpbGUtbW9udGgtY2VsbC1oZWlnaHQ6IDQ4cHg7LS1hZHAtbW9iaWxlLXllYXItY2VsbC1oZWlnaHQ6IDY0cHh9LmFpci1kYXRlcGlja2VyLW92ZXJsYXl7LS1hZHAtb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTstLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb246IC4zczstLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZWFzZTogZWFzZS1vdXQ7LS1hZHAtb3ZlcmxheS16LWluZGV4OiA5OX1cbi5haXItZGF0ZXBpY2tlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3IpO2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4xNSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtYm9yZGVyLXJhZGl1cyk7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDQsIG1heC1jb250ZW50KTtncmlkLXRlbXBsYXRlLWFyZWFzOnZhcigtLWFkcC1ncmlkLWFyZWFzKTtmb250LWZhbWlseTp2YXIoLS1hZHAtZm9udC1mYW1pbHkpLHNhbnMtc2VyaWY7Zm9udC1zaXplOnZhcigtLWFkcC1mb250LXNpemUpO2NvbG9yOnZhcigtLWFkcC1jb2xvcik7d2lkdGg6dmFyKC0tYWRwLXdpZHRoKTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC10cmFuc2l0aW9uLWVhc2UpLHRyYW5zZm9ybSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tYWRwLXRyYW5zaXRpb24tZWFzZSk7ei1pbmRleDp2YXIoLS1hZHAtei1pbmRleCl9LmFpci1kYXRlcGlja2VyOm5vdCguLWN1c3RvbS1wb3NpdGlvbi0pe29wYWNpdHk6MH0uYWlyLWRhdGVwaWNrZXIuLWZyb20tdG9wLXt0cmFuc2Zvcm06dHJhbnNsYXRlWShjYWxjKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkgKiAtMSkpfS5haXItZGF0ZXBpY2tlci4tZnJvbS1yaWdodC17dHJhbnNmb3JtOnRyYW5zbGF0ZVgodmFyKC0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0KSl9LmFpci1kYXRlcGlja2VyLi1mcm9tLWJvdHRvbS17dHJhbnNmb3JtOnRyYW5zbGF0ZVkodmFyKC0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0KSl9LmFpci1kYXRlcGlja2VyLi1mcm9tLWxlZnQte3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGModmFyKC0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0KSAqIC0xKSl9LmFpci1kYXRlcGlja2VyLi1hY3RpdmUtOm5vdCguLWN1c3RvbS1wb3NpdGlvbi0pe3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCk7b3BhY2l0eToxfS5haXItZGF0ZXBpY2tlci4tYWN0aXZlLS4tY3VzdG9tLXBvc2l0aW9uLXt0cmFuc2l0aW9uOm5vbmV9LmFpci1kYXRlcGlja2VyLi1pbmxpbmUte2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtYm9yZGVyLWNvbG9yLWlubGluZSk7Ym94LXNoYWRvdzpub25lO3Bvc2l0aW9uOnN0YXRpYztsZWZ0OmF1dG87cmlnaHQ6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmV9LmFpci1kYXRlcGlja2VyLi1pbmxpbmUtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLi1pcy1tb2JpbGUtey0tYWRwLWZvbnQtc2l6ZTogdmFyKC0tYWRwLW1vYmlsZS1mb250LXNpemUpOy0tYWRwLWRheS1jZWxsLWhlaWdodDogdmFyKC0tYWRwLW1vYmlsZS1kYXktY2VsbC1oZWlnaHQpOy0tYWRwLW1vbnRoLWNlbGwtaGVpZ2h0OiB2YXIoLS1hZHAtbW9iaWxlLW1vbnRoLWNlbGwtaGVpZ2h0KTstLWFkcC15ZWFyLWNlbGwtaGVpZ2h0OiB2YXIoLS1hZHAtbW9iaWxlLXllYXItY2VsbC1oZWlnaHQpOy0tYWRwLW5hdi1oZWlnaHQ6IHZhcigtLWFkcC1tb2JpbGUtbmF2LWhlaWdodCk7LS1hZHAtbmF2LWFjdGlvbi1zaXplOiB2YXIoLS1hZHAtbW9iaWxlLW5hdi1oZWlnaHQpO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOnZhcigtLWFkcC1tb2JpbGUtd2lkdGgpO2JvcmRlcjpub25lfS5haXItZGF0ZXBpY2tlci4taXMtbW9iaWxlLSAqey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci4taXMtbW9iaWxlLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci4taXMtbW9iaWxlLTpub3QoLi1jdXN0b20tcG9zaXRpb24tKXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIGNhbGMoLTUwJSArIHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkpKX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS0uLWFjdGl2ZS06bm90KC4tY3VzdG9tLXBvc2l0aW9uLSl7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX0uYWlyLWRhdGVwaWNrZXIuLWN1c3RvbS1wb3NpdGlvbi17dHJhbnNpdGlvbjpub25lfS5haXItZGF0ZXBpY2tlci1nbG9iYWwtY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MH0uYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7LS1wb2ludGVyLWhhbGYtc2l6ZTogY2FsYyh2YXIoLS1hZHAtcG9pbnRlci1zaXplKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLWFkcC1wb2ludGVyLXNpemUpO2hlaWdodDp2YXIoLS1hZHAtcG9pbnRlci1zaXplKTt6LWluZGV4Oi0xfS5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDojZmZmO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5saW5lKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5saW5lKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1hZHAtcG9pbmVyLWJvcmRlci1yYWRpdXMpO3dpZHRoOnZhcigtLWFkcC1wb2ludGVyLXNpemUpO2hlaWdodDp2YXIoLS1hZHAtcG9pbnRlci1zaXplKTtib3gtc2l6aW5nOmJvcmRlci1ib3h9Li10b3AtbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tdG9wLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tdG9wLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7dG9wOmNhbGMoMTAwJSAtIHZhcigtLXBvaW50ZXItaGFsZi1zaXplKSArIDFweCl9Li10b3AtbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tdG9wLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tdG9wLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfS4tcmlnaHQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1yaWdodC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7cmlnaHQ6Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLXJpZ2h0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tcmlnaHQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1yaWdodC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1yaWdodF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVye3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKX0uLWJvdHRvbS1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1ib3R0b21dIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntib3R0b206Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLWJvdHRvbS1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1ib3R0b20tY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1ib3R0b20tcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1ib3R0b21dIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyl9Li1sZWZ0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tbGVmdC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWxlZnQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49bGVmdF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2xlZnQ6Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLWxlZnQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1sZWZ0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tbGVmdC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1sZWZ0XSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Li10b3AtbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tYm90dG9tLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntsZWZ0OnZhcigtLWFkcC1wb2ludGVyLW9mZnNldCl9Li10b3AtcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWJvdHRvbS1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3JpZ2h0OnZhcigtLWFkcC1wb2ludGVyLW9mZnNldCl9Li10b3AtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7bGVmdDpjYWxjKDUwJSAtIHZhcigtLWFkcC1wb2ludGVyLXNpemUpLzIpfS4tbGVmdC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3RvcDp2YXIoLS1hZHAtcG9pbnRlci1vZmZzZXQpfS4tbGVmdC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2JvdHRvbTp2YXIoLS1hZHAtcG9pbnRlci1vZmZzZXQpfS4tbGVmdC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3RvcDpjYWxjKDUwJSAtIHZhcigtLWFkcC1wb2ludGVyLXNpemUpLzIpfS5haXItZGF0ZXBpY2tlci0tbmF2aWdhdGlvbntncmlkLWFyZWE6bmF2fS5haXItZGF0ZXBpY2tlci0tY29udGVudHtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3BhZGRpbmc6dmFyKC0tYWRwLXBhZGRpbmcpO2dyaWQtYXJlYTpib2R5fS4tb25seS10aW1lcGlja2VyLSAuYWlyLWRhdGVwaWNrZXItLWNvbnRlbnR7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci0tdGltZXtncmlkLWFyZWE6dGltZXBpY2tlcn0uYWlyLWRhdGVwaWNrZXItLWJ1dHRvbnN7Z3JpZC1hcmVhOmJ1dHRvbnN9LmFpci1kYXRlcGlja2VyLS1idXR0b25zLC5haXItZGF0ZXBpY2tlci0tdGltZXtwYWRkaW5nOnZhcigtLWFkcC1wYWRkaW5nKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yLWlubmVyKX0uYWlyLWRhdGVwaWNrZXItb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kOnZhcigtLWFkcC1vdmVybGF5LWJhY2tncm91bmQtY29sb3IpO2xlZnQ6MDt0b3A6MDt3aWR0aDowO2hlaWdodDowO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1lYXNlKSxsZWZ0IDBzLGhlaWdodCAwcyx3aWR0aCAwczt0cmFuc2l0aW9uLWRlbGF5OjBzLHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pLHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pLHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pO3otaW5kZXg6dmFyKC0tYWRwLW92ZXJsYXktei1pbmRleCl9LmFpci1kYXRlcGlja2VyLW92ZXJsYXkuLWFjdGl2ZS17b3BhY2l0eToxO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZWFzZSksaGVpZ2h0IDBzLHdpZHRoIDBzfVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvYWlyLWRhdGVwaWNrZXIvYWlyLWRhdGVwaWNrZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9GQUFvRixrQ0FBa0MsQ0FBQyxnR0FBZ0csd0NBQXdDLENBQUMsMEhBQTBILGtDQUFrQyxDQUFDLDBHQUEwRyxVQUFVLENBQUMsMkRBQTJELENBQUMsMEhBQTBILG1FQUFtRSxDQUFDLDBHQUEwRyxxREFBcUQsQ0FBQyxzQkFBc0IsQ0FBQywwSEFBMEgsNkRBQTZELENBQUMsZ0dBQWdHLGVBQWUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLDJDQUEyQyxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLDZCQUE2QixpREFBaUQsQ0FBQywrQkFB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RCxDQUFDLHFEQUFxRCxDQUFDLHVEQUF1RCxDQUFDLDZCQUE2QixDQUFDLDhCQUE4QixDQUFDLHFCQUFxQixDQUFDLHdLQUF3SywrQ0FBK0MsQ0FBQyxnTUFBZ00sd0JBQXdCLENBQUMsZ0xBQWdMLGlEQUFpRCxDQUFDLHdNQUF3TSx3QkFBd0IsQ0FBQyxvTEFBb0wsa0RBQWtELENBQUMsNE1BQTRNLHdCQUF3QixDQUFDLDRLQUE0SyxnREFBZ0QsQ0FBQyxvTUFBb00sdUJBQXVCLENBQUMsNkVBQTZFLDhCQUE4QixDQUFDLCtFQUErRSwrQkFBK0IsQ0FBQyxpRkFBaUYsMENBQTBDLENBQUMsMkVBQTJFLDZCQUE2QixDQUFDLGlGQUFpRixnQ0FBZ0MsQ0FBQyxpRkFBaUYseUNBQXlDLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyx5QkFBeUIsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDLDRDQUE0QyxZQUFZLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLHlCQUF5QixpQkFBaUIsQ0FBQywrQ0FBK0MsMEJBQTBCLENBQUMsa0RBQWtELENBQUMsd0JBQXdCLGNBQWMsQ0FBQyw4Q0FBOEMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHVIQUF1SCxDQUFDLHdJQUF3SSxDQUFDLGtDQUFrQyxDQUFDLGlDQUFpQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQywrR0FBK0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLW90aGVyLW1vbnRoKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS06aG92ZXIsLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLTpob3Zlcntjb2xvcjp2YXIoLS1hZHAtY29sb3Itb3RoZXItbW9udGgtaG92ZXIpfS4tZGlzYWJsZWQtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1kaXNhYmxlZC0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLW90aGVyLW1vbnRoKX0uLXNlbGVjdGVkLS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuLXNlbGVjdGVkLS5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoKX0uLXNlbGVjdGVkLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC4tc2VsZWN0ZWQtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQtb3RoZXItbW9udGgtZm9jdXNlZCl9Li1pbi1yYW5nZS0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1pbi1yYW5nZS0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UpO2NvbG9yOnZhcigtLWFkcC1jb2xvcil9Li1pbi1yYW5nZS0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuLWluLXJhbmdlLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlLWZvY3VzZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLTplbXB0eSwuYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgtOmVtcHR5e2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZX0uYWlyLWRhdGVwaWNrZXItY2VsbHtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1jZWxsLWJvcmRlci1yYWRpdXMpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ei1pbmRleDoxfS5haXItZGF0ZXBpY2tlci1jZWxsLi1mb2N1cy17YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tY3VycmVudC17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLWN1cnJlbnQtZGF0ZSl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQtLi1mb2N1cy17Y29sb3I6dmFyKC0tYWRwLWNvbG9yKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tY3VycmVudC0uLWluLXJhbmdlLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItY3VycmVudC1kYXRlKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGlzYWJsZWQte2N1cnNvcjpkZWZhdWx0O2NvbG9yOnZhcigtLWFkcC1jb2xvci1kaXNhYmxlZCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLS4tZm9jdXMte2NvbG9yOnZhcigtLWFkcC1jb2xvci1kaXNhYmxlZCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLS4taW4tcmFuZ2Ute2NvbG9yOnZhcigtLWFkcC1jb2xvci1kaXNhYmxlZC1pbi1yYW5nZSl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLS4tY3VycmVudC0uLWZvY3VzLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1pbi1yYW5nZS17YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtib3JkZXItcmFkaXVzOjB9LmFpci1kYXRlcGlja2VyLWNlbGwuLWluLXJhbmdlLTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UtaG92ZXIpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1yYW5nZS1mcm9tLXtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC1jZWxsLWJvcmRlci1jb2xvci1pbi1yYW5nZSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1jZWxsLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tcmFuZ2UtdG8te2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLWNvbG9yLWluLXJhbmdlKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UpO2JvcmRlci1yYWRpdXM6MCB2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKSAwfS5haXItZGF0ZXBpY2tlci1jZWxsLi1yYW5nZS10by0uLXJhbmdlLWZyb20te2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cyl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXNlbGVjdGVkLXtjb2xvcjojZmZmO2JvcmRlcjpub25lO2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXNlbGVjdGVkLS4tY3VycmVudC17Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1zZWxlY3RlZC0uLWZvY3VzLXtiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQtaG92ZXIpfVxcbi5haXItZGF0ZXBpY2tlci1ib2R5e3RyYW5zaXRpb246YWxsIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1lYXNlKX0uYWlyLWRhdGVwaWNrZXItYm9keS4taGlkZGVuLXtkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lc3tkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg3LCB2YXIoLS1hZHAtZGF5LWNlbGwtd2lkdGgpKTttYXJnaW46OHB4IDAgM3B4fS5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZXtjb2xvcjp2YXIoLS1hZHAtZGF5LW5hbWUtY29sb3IpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZTouOGVtfS5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZS4tY2xpY2thYmxlLXtjdXJzb3I6cG9pbnRlcn0uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWUuLWNsaWNrYWJsZS06aG92ZXJ7Y29sb3I6dmFyKC0tYWRwLWRheS1uYW1lLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHN7ZGlzcGxheTpncmlkfS5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxscy4tZGF5cy17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg3LCB2YXIoLS1hZHAtZGF5LWNlbGwtd2lkdGgpKTtncmlkLWF1dG8tcm93czp2YXIoLS1hZHAtZGF5LWNlbGwtaGVpZ2h0KX0uYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMuLW1vbnRocy17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLCAxZnIpO2dyaWQtYXV0by1yb3dzOnZhcigtLWFkcC1tb250aC1jZWxsLWhlaWdodCl9LmFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzLi15ZWFycy17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg0LCAxZnIpO2dyaWQtYXV0by1yb3dzOnZhcigtLWFkcC15ZWFyLWNlbGwtaGVpZ2h0KX1cXG4uYWlyLWRhdGVwaWNrZXItbmF2e2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yLWlubmVyKTttaW4taGVpZ2h0OnZhcigtLWFkcC1uYXYtaGVpZ2h0KTtwYWRkaW5nOnZhcigtLWFkcC1wYWRkaW5nKTtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS4tb25seS10aW1lcGlja2VyLSAuYWlyLWRhdGVwaWNrZXItbmF2e2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZSwuYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb257ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbnt3aWR0aDp2YXIoLS1hZHAtbmF2LWFjdGlvbi1zaXplKTtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1ib3JkZXItcmFkaXVzKTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpfS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbi4tZGlzYWJsZWQte3Zpc2liaWxpdHk6aGlkZGVufS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbiBzdmd7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb24gcGF0aHtmaWxsOm5vbmU7c3Ryb2tlOnZhcigtLWFkcC1uYXYtYXJyb3ctY29sb3IpO3N0cm9rZS13aWR0aDoycHh9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGV7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtYm9yZGVyLXJhZGl1cyk7cGFkZGluZzowIDhweH0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZSBpe2ZvbnQtc3R5bGU6bm9ybWFsO2NvbG9yOnZhcigtLWFkcC1uYXYtY29sb3Itc2Vjb25kYXJ5KTttYXJnaW4tbGVmdDouM2VtfS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSl9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGUuLWRpc2FibGVkLXtjdXJzb3I6ZGVmYXVsdDtiYWNrZ3JvdW5kOm5vbmV9XFxuLmFpci1kYXRlcGlja2VyLWJ1dHRvbnN7ZGlzcGxheTpncmlkO2dyaWQtYXV0by1jb2x1bW5zOjFmcjtncmlkLWF1dG8tZmxvdzpjb2x1bW59LmFpci1kYXRlcGlja2VyLWJ1dHRvbntkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWFkcC1idG4tY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJ0bi1ib3JkZXItcmFkaXVzKTtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6dmFyKC0tYWRwLWJ0bi1oZWlnaHQpO2JvcmRlcjpub25lO2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwKX0uYWlyLWRhdGVwaWNrZXItYnV0dG9uOmhvdmVye2NvbG9yOnZhcigtLWFkcC1idG4tY29sb3ItaG92ZXIpO2JhY2tncm91bmQ6dmFyKC0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItYnV0dG9uOmZvY3Vze2NvbG9yOnZhcigtLWFkcC1idG4tY29sb3ItaG92ZXIpO2JhY2tncm91bmQ6dmFyKC0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtvdXRsaW5lOm5vbmV9LmFpci1kYXRlcGlja2VyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1hZHAtYnRuLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYWlyLWRhdGVwaWNrZXItYnV0dG9uIHNwYW57b3V0bGluZTpub25lO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfVxcbi5haXItZGF0ZXBpY2tlci10aW1le2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO2dyaWQtY29sdW1uLWdhcDoxMnB4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjAgdmFyKC0tYWRwLXRpbWUtcGFkZGluZy1pbm5lcil9Li1vbmx5LXRpbWVwaWNrZXItIC5haXItZGF0ZXBpY2tlci10aW1le2JvcmRlci10b3A6bm9uZX0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXg6MTtmb250LXNpemU6MTRweDt0ZXh0LWFsaWduOmNlbnRlcn0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1jb2xvbnttYXJnaW46MCAycHggM3B4O2xpbmUtaGVpZ2h0OjF9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnMsLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlc3tsaW5lLWhlaWdodDoxO2ZvbnQtc2l6ZToxOXB4O2ZvbnQtZmFtaWx5OlxcXCJDZW50dXJ5IEdvdGhpY1xcXCIsQ2VudHVyeUdvdGhpYyxBcHBsZUdvdGhpYyxzYW5zLXNlcmlmO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1ob3VyczphZnRlciwuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1taW51dGVzOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtYm9yZGVyLXJhZGl1cyk7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMnB4O3RvcDotM3B4O3JpZ2h0Oi0ycHg7Ym90dG9tOi0ycHg7ei1pbmRleDotMTtvcGFjaXR5OjB9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnMuLWZvY3VzLTphZnRlciwuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1taW51dGVzLi1mb2N1cy06YWZ0ZXJ7b3BhY2l0eToxfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWFtcG17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2FsaWduLXNlbGY6ZmxleC1lbmQ7Y29sb3I6dmFyKC0tYWRwLXRpbWUtZGF5LXBlcmlvZC1jb2xvcik7bWFyZ2luLWxlZnQ6NnB4O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206MXB4fS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MTFweDtoZWlnaHQ6MTdweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpLCB2YXIoLS1hZHAtdGltZS10cmFjay1jb2xvcikpIGxlZnQgNTAlLzEwMCUgdmFyKC0tYWRwLXRpbWUtdHJhY2staGVpZ2h0KSBuby1yZXBlYXR9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdzpmaXJzdC1jaGlsZHttYXJnaW4tYm90dG9tOjRweH0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2Vde2JhY2tncm91bmQ6bm9uZTtjdXJzb3I6cG9pbnRlcjtmbGV4OjE7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwYWRkaW5nOjA7bWFyZ2luOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRvb2x0aXB7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06aG92ZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtdGltZS10cmFjay1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTpob3Zlcjo6LW1vei1yYW5nZS10aHVtYntib3JkZXItY29sb3I6dmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06aG92ZXI6Oi1tcy10aHVtYntib3JkZXItY29sb3I6dmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXN7b3V0bGluZTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tb3otcmFuZ2UtdGh1bWJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtib3JkZXItY29sb3I6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCl9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbik7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1ie2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjstbW96LXRyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbik7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWJ7Ym94LXNpemluZzpib3JkZXItYm94O2hlaWdodDoxMnB4O3dpZHRoOjEycHg7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1hZHAtdGltZS10cmFjay1jb2xvcik7YmFja2dyb3VuZDojZmZmO2N1cnNvcjpwb2ludGVyOy1tcy10cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWFkcC10aW1lLXRodW1iLXNpemUpLzIqLTEpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2JvcmRlcjpub25lO2hlaWdodDp2YXIoLS1hZHAtdGltZS10cmFjay1oZWlnaHQpO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsMCk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2t7Ym9yZGVyOm5vbmU7aGVpZ2h0OnZhcigtLWFkcC10aW1lLXRyYWNrLWhlaWdodCk7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6cmdiYSgwLDAsMCwwKTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCl9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNre2JvcmRlcjpub25lO2hlaWdodDp2YXIoLS1hZHAtdGltZS10cmFjay1oZWlnaHQpO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsMCk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2Vye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCl9XFxuLmFpci1kYXRlcGlja2Vyey0tYWRwLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7LS1hZHAtZm9udC1zaXplOiAxNHB4Oy0tYWRwLXdpZHRoOiAyNDZweDstLWFkcC16LWluZGV4OiAxMDA7LS1hZHAtcGFkZGluZzogNHB4Oy0tYWRwLWdyaWQtYXJlYXM6IFxcXCJuYXZcXFwiIFxcXCJib2R5XFxcIiBcXFwidGltZXBpY2tlclxcXCIgXFxcImJ1dHRvbnNcXFwiOy0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb246IC4zczstLWFkcC10cmFuc2l0aW9uLWVhc2U6IGVhc2Utb3V0Oy0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0OiA4cHg7LS1hZHAtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjZjBmMGYwOy0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAjZWFlYWVhOy0tYWRwLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2U6IHJnYmEoOTIsIDE5NiwgMjM5LCAuMSk7LS1hZHAtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZS1mb2N1c2VkOiByZ2JhKDkyLCAxOTYsIDIzOSwgLjIpOy0tYWRwLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQtb3RoZXItbW9udGgtZm9jdXNlZDogIzhhZDVmNDstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoOiAjYTJkZGY2Oy0tYWRwLWNvbG9yOiAjNGE0YTRhOy0tYWRwLWNvbG9yLXNlY29uZGFyeTogIzljOWM5YzstLWFkcC1hY2NlbnQtY29sb3I6ICM0ZWI1ZTY7LS1hZHAtY29sb3ItY3VycmVudC1kYXRlOiB2YXIoLS1hZHAtYWNjZW50LWNvbG9yKTstLWFkcC1jb2xvci1vdGhlci1tb250aDogI2RlZGVkZTstLWFkcC1jb2xvci1kaXNhYmxlZDogI2FlYWVhZTstLWFkcC1jb2xvci1kaXNhYmxlZC1pbi1yYW5nZTogIzkzOTM5MzstLWFkcC1jb2xvci1vdGhlci1tb250aC1ob3ZlcjogI2M1YzVjNTstLWFkcC1ib3JkZXItY29sb3I6ICNkYmRiZGI7LS1hZHAtYm9yZGVyLWNvbG9yLWlubmVyOiAjZWZlZmVmOy0tYWRwLWJvcmRlci1yYWRpdXM6IDRweDstLWFkcC1ib3JkZXItY29sb3ItaW5saW5lOiAjZDdkN2Q3Oy0tYWRwLW5hdi1oZWlnaHQ6IDMycHg7LS1hZHAtbmF2LWFycm93LWNvbG9yOiB2YXIoLS1hZHAtY29sb3Itc2Vjb25kYXJ5KTstLWFkcC1uYXYtYWN0aW9uLXNpemU6IDMycHg7LS1hZHAtbmF2LWNvbG9yLXNlY29uZGFyeTogdmFyKC0tYWRwLWNvbG9yLXNlY29uZGFyeSk7LS1hZHAtZGF5LW5hbWUtY29sb3I6ICNmZjlhMTk7LS1hZHAtZGF5LW5hbWUtY29sb3ItaG92ZXI6ICM4YWQ1ZjQ7LS1hZHAtZGF5LWNlbGwtd2lkdGg6IDFmcjstLWFkcC1kYXktY2VsbC1oZWlnaHQ6IDMycHg7LS1hZHAtbW9udGgtY2VsbC1oZWlnaHQ6IDQycHg7LS1hZHAteWVhci1jZWxsLWhlaWdodDogNTZweDstLWFkcC1wb2ludGVyLXNpemU6IDEwcHg7LS1hZHAtcG9pbmVyLWJvcmRlci1yYWRpdXM6IDJweDstLWFkcC1wb2ludGVyLW9mZnNldDogMTRweDstLWFkcC1jZWxsLWJvcmRlci1yYWRpdXM6IDRweDstLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTstLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6ICM1Y2M0ZWY7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLWhvdmVyOiAjNDViY2VkOy0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZTogcmdiYSg5MiwgMTk2LCAyMzksIDAuMSk7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlLWhvdmVyOiByZ2JhKDkyLCAxOTYsIDIzOSwgMC4yKTstLWFkcC1jZWxsLWJvcmRlci1jb2xvci1pbi1yYW5nZTogdmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7LS1hZHAtYnRuLWhlaWdodDogMzJweDstLWFkcC1idG4tY29sb3I6IHZhcigtLWFkcC1hY2NlbnQtY29sb3IpOy0tYWRwLWJ0bi1jb2xvci1ob3ZlcjogdmFyKC0tYWRwLWNvbG9yKTstLWFkcC1idG4tYm9yZGVyLXJhZGl1czogdmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpOy0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7LS1hZHAtYnRuLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiB2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpOy0tYWRwLXRpbWUtdHJhY2staGVpZ2h0OiAxcHg7LS1hZHAtdGltZS10cmFjay1jb2xvcjogI2RlZGVkZTstLWFkcC10aW1lLXRyYWNrLWNvbG9yLWhvdmVyOiAjYjFiMWIxOy0tYWRwLXRpbWUtdGh1bWItc2l6ZTogMTJweDstLWFkcC10aW1lLXBhZGRpbmctaW5uZXI6IDEwcHg7LS1hZHAtdGltZS1kYXktcGVyaW9kLWNvbG9yOiB2YXIoLS1hZHAtY29sb3Itc2Vjb25kYXJ5KTstLWFkcC1tb2JpbGUtZm9udC1zaXplOiAxNnB4Oy0tYWRwLW1vYmlsZS1uYXYtaGVpZ2h0OiA0MHB4Oy0tYWRwLW1vYmlsZS13aWR0aDogMzIwcHg7LS1hZHAtbW9iaWxlLWRheS1jZWxsLWhlaWdodDogMzhweDstLWFkcC1tb2JpbGUtbW9udGgtY2VsbC1oZWlnaHQ6IDQ4cHg7LS1hZHAtbW9iaWxlLXllYXItY2VsbC1oZWlnaHQ6IDY0cHh9LmFpci1kYXRlcGlja2VyLW92ZXJsYXl7LS1hZHAtb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTstLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb246IC4zczstLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZWFzZTogZWFzZS1vdXQ7LS1hZHAtb3ZlcmxheS16LWluZGV4OiA5OX1cXG4uYWlyLWRhdGVwaWNrZXJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yKTtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMTUpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpO2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7Z3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCg0LCBtYXgtY29udGVudCk7Z3JpZC10ZW1wbGF0ZS1hcmVhczp2YXIoLS1hZHAtZ3JpZC1hcmVhcyk7Zm9udC1mYW1pbHk6dmFyKC0tYWRwLWZvbnQtZmFtaWx5KSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTp2YXIoLS1hZHAtZm9udC1zaXplKTtjb2xvcjp2YXIoLS1hZHAtY29sb3IpO3dpZHRoOnZhcigtLWFkcC13aWR0aCk7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1lYXNlKSx0cmFuc2Zvcm0gdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC10cmFuc2l0aW9uLWVhc2UpO3otaW5kZXg6dmFyKC0tYWRwLXotaW5kZXgpfS5haXItZGF0ZXBpY2tlcjpub3QoLi1jdXN0b20tcG9zaXRpb24tKXtvcGFjaXR5OjB9LmFpci1kYXRlcGlja2VyLi1mcm9tLXRvcC17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpICogLTEpKX0uYWlyLWRhdGVwaWNrZXIuLWZyb20tcmlnaHQte3RyYW5zZm9ybTp0cmFuc2xhdGVYKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkpfS5haXItZGF0ZXBpY2tlci4tZnJvbS1ib3R0b20te3RyYW5zZm9ybTp0cmFuc2xhdGVZKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkpfS5haXItZGF0ZXBpY2tlci4tZnJvbS1sZWZ0LXt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkgKiAtMSkpfS5haXItZGF0ZXBpY2tlci4tYWN0aXZlLTpub3QoLi1jdXN0b20tcG9zaXRpb24tKXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApO29wYWNpdHk6MX0uYWlyLWRhdGVwaWNrZXIuLWFjdGl2ZS0uLWN1c3RvbS1wb3NpdGlvbi17dHJhbnNpdGlvbjpub25lfS5haXItZGF0ZXBpY2tlci4taW5saW5lLXtib3JkZXItY29sb3I6dmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbmxpbmUpO2JveC1zaGFkb3c6bm9uZTtwb3NpdGlvbjpzdGF0aWM7bGVmdDphdXRvO3JpZ2h0OmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfS5haXItZGF0ZXBpY2tlci4taW5saW5lLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci4taXMtbW9iaWxlLXstLWFkcC1mb250LXNpemU6IHZhcigtLWFkcC1tb2JpbGUtZm9udC1zaXplKTstLWFkcC1kYXktY2VsbC1oZWlnaHQ6IHZhcigtLWFkcC1tb2JpbGUtZGF5LWNlbGwtaGVpZ2h0KTstLWFkcC1tb250aC1jZWxsLWhlaWdodDogdmFyKC0tYWRwLW1vYmlsZS1tb250aC1jZWxsLWhlaWdodCk7LS1hZHAteWVhci1jZWxsLWhlaWdodDogdmFyKC0tYWRwLW1vYmlsZS15ZWFyLWNlbGwtaGVpZ2h0KTstLWFkcC1uYXYtaGVpZ2h0OiB2YXIoLS1hZHAtbW9iaWxlLW5hdi1oZWlnaHQpOy0tYWRwLW5hdi1hY3Rpb24tc2l6ZTogdmFyKC0tYWRwLW1vYmlsZS1uYXYtaGVpZ2h0KTtwb3NpdGlvbjpmaXhlZDt3aWR0aDp2YXIoLS1hZHAtbW9iaWxlLXdpZHRoKTtib3JkZXI6bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS0gKnstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS06bm90KC4tY3VzdG9tLXBvc2l0aW9uLSl7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgKyB2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpKSl9LmFpci1kYXRlcGlja2VyLi1pcy1tb2JpbGUtLi1hY3RpdmUtOm5vdCguLWN1c3RvbS1wb3NpdGlvbi0pe3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSl9LmFpci1kYXRlcGlja2VyLi1jdXN0b20tcG9zaXRpb24te3RyYW5zaXRpb246bm9uZX0uYWlyLWRhdGVwaWNrZXItZ2xvYmFsLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LmFpci1kYXRlcGlja2VyLS1wb2ludGVyey0tcG9pbnRlci1oYWxmLXNpemU6IGNhbGModmFyKC0tYWRwLXBvaW50ZXItc2l6ZSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS1hZHAtcG9pbnRlci1zaXplKTtoZWlnaHQ6dmFyKC0tYWRwLXBvaW50ZXItc2l6ZSk7ei1pbmRleDotMX0uYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbmxpbmUpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbmxpbmUpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWFkcC1wb2luZXItYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0tYWRwLXBvaW50ZXItc2l6ZSk7aGVpZ2h0OnZhcigtLWFkcC1wb2ludGVyLXNpemUpO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uLXRvcC1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi10b3AtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi10b3AtcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj10b3BdIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcnt0b3A6Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLXRvcC1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi10b3AtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi10b3AtcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj10b3BdIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9Li1yaWdodC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tcmlnaHQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49cmlnaHRdIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntyaWdodDpjYWxjKDEwMCUgLSB2YXIoLS1wb2ludGVyLWhhbGYtc2l6ZSkgKyAxcHgpfS4tcmlnaHQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1yaWdodC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLXJpZ2h0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpfS4tYm90dG9tLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWJvdHRvbS1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWJvdHRvbS1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2JvdHRvbTpjYWxjKDEwMCUgLSB2YXIoLS1wb2ludGVyLWhhbGYtc2l6ZSkgKyAxcHgpfS4tYm90dG9tLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLWJvdHRvbS1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLWJvdHRvbS1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVye3RyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKX0uLWxlZnQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1sZWZ0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tbGVmdC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1sZWZ0XSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7bGVmdDpjYWxjKDEwMCUgLSB2YXIoLS1wb2ludGVyLWhhbGYtc2l6ZSkgKyAxcHgpfS4tbGVmdC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLWxlZnQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1sZWZ0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uLXRvcC1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2xlZnQ6dmFyKC0tYWRwLXBvaW50ZXItb2Zmc2V0KX0uLXRvcC1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tYm90dG9tLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7cmlnaHQ6dmFyKC0tYWRwLXBvaW50ZXItb2Zmc2V0KX0uLXRvcC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWJvdHRvbS1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntsZWZ0OmNhbGMoNTAlIC0gdmFyKC0tYWRwLXBvaW50ZXItc2l6ZSkvMil9Li1sZWZ0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tcmlnaHQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7dG9wOnZhcigtLWFkcC1wb2ludGVyLW9mZnNldCl9Li1sZWZ0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tcmlnaHQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7Ym90dG9tOnZhcigtLWFkcC1wb2ludGVyLW9mZnNldCl9Li1sZWZ0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tcmlnaHQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7dG9wOmNhbGMoNTAlIC0gdmFyKC0tYWRwLXBvaW50ZXItc2l6ZSkvMil9LmFpci1kYXRlcGlja2VyLS1uYXZpZ2F0aW9ue2dyaWQtYXJlYTpuYXZ9LmFpci1kYXRlcGlja2VyLS1jb250ZW50e2JveC1zaXppbmc6Y29udGVudC1ib3g7cGFkZGluZzp2YXIoLS1hZHAtcGFkZGluZyk7Z3JpZC1hcmVhOmJvZHl9Li1vbmx5LXRpbWVwaWNrZXItIC5haXItZGF0ZXBpY2tlci0tY29udGVudHtkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLS10aW1le2dyaWQtYXJlYTp0aW1lcGlja2VyfS5haXItZGF0ZXBpY2tlci0tYnV0dG9uc3tncmlkLWFyZWE6YnV0dG9uc30uYWlyLWRhdGVwaWNrZXItLWJ1dHRvbnMsLmFpci1kYXRlcGlja2VyLS10aW1le3BhZGRpbmc6dmFyKC0tYWRwLXBhZGRpbmcpO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5uZXIpfS5haXItZGF0ZXBpY2tlci1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO2JhY2tncm91bmQ6dmFyKC0tYWRwLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcik7bGVmdDowO3RvcDowO3dpZHRoOjA7aGVpZ2h0OjA7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWVhc2UpLGxlZnQgMHMsaGVpZ2h0IDBzLHdpZHRoIDBzO3RyYW5zaXRpb24tZGVsYXk6MHMsdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1kdXJhdGlvbiksdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1kdXJhdGlvbiksdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1kdXJhdGlvbik7ei1pbmRleDp2YXIoLS1hZHAtb3ZlcmxheS16LWluZGV4KX0uYWlyLWRhdGVwaWNrZXItb3ZlcmxheS4tYWN0aXZlLXtvcGFjaXR5OjE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1lYXNlKSxoZWlnaHQgMHMsd2lkdGggMHN9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG4ubW9kYWwtY29udGFpbmVyLmZhZGUtaW4ge1xuICBvcGFjaXR5OiAxO1xufVxuLm1vZGFsLWNvbnRhaW5lci5mYWRlLWluIC5tb2RhbC1ib3gge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBwYWRkaW5nOiAycmVtIDNyZW0gMS43cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgyMTMsIDIxNywgMjE3LCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA1cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3gge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjdyZW07XG4gIH1cbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCBoMyB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgMCAyLjVyZW07XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3ggZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBnYXA6IDAuN3JlbTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCAubW9kYWwtY29uZmlybSxcbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCAubW9kYWwtY2FuY2VsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjdyZW0gMS44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3ggLm1vZGFsLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICBib3JkZXItY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm94IC5tb2RhbC1jb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMCwgMzYpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm94IC5tb2RhbC1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWUge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQtIHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLi1ib3R0b20tcmlnaHQtIHtcbiAgICBsZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC4tYm90dG9tLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIge1xuICAgIHJpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uLXNlbGVjdGVkLSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWUgIWltcG9ydGFudDtcbn1cblxuI3RvZG8tYXBwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDkzdmg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjdG9kby1hcHAtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbmFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjFyZW07XG4gIHdpZHRoOiAzMCU7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDIuNHJlbSAxcmVtIDIuMnJlbSAxcmVtO1xuICBib3JkZXItY29sb3I6ICNlZWU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAxcHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGFzaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIH1cbn1cbmFzaWRlIC5hZGQtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgcGFkZGluZzogMC43cmVtIDFyZW0gMC43cmVtIDAuNXJlbTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hc2lkZSAuYWRkLXByb2plY3Qgc3BhbiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNvbG9yOiAjYWFhO1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICMzMzM7XG59XG5hc2lkZSAuYWRkLXByb2plY3Q6aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0LmhpZ2hsaWdodGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0LmhpZ2hsaWdodGVkIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbmFzaWRlIC5hZGQtcHJvamVjdC5oaWdobGlnaHRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZhZDM7XG4gIGJvcmRlci1jb2xvcjogIzAwNmFkMztcbn1cbmFzaWRlIC5wcm9qZWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuYXNpZGUgLnByb2plY3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5hc2lkZSAucHJvamVjdC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5hc2lkZSAucHJvamVjdC1pdGVtOm5vdCguYWN0aXZlKSBzcGFuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5hc2lkZSAucHJvamVjdC1pdGVtIGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMCAxcHggMXB4IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5hc2lkZSAucHJvamVjdC1pdGVtIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC40cmVtIDAuM3JlbSAwLjNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbn1cbmFzaWRlIC5wcm9qZWN0LWl0ZW0gaW5wdXQge1xuICB3aWR0aDogODYlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjk5cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xuICBtYXJnaW46IDAuNHJlbSAwLjFyZW0gMC4zcmVtIDAuMDdyZW07XG59XG5hc2lkZSAucHJvamVjdC1pdGVtIHNwYW4sXG5hc2lkZSAucHJvamVjdC1pdGVtIGlucHV0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG59XG5hc2lkZSAucHJvamVjdC1pdGVtIC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgcGFkZGluZzogMXJlbSAycmVtIDNyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNjb250ZW50IC50aXRsZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwO1xuICB9XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5wcm9qZWN0LWhlYWRsaW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDAuOHJlbTtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLnByb2plY3QtaGVhZGxpbmUgaDEge1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLnByb2plY3QtaGVhZGxpbmUgaDEubm8tcHJvamVjdCB7XG4gIGNvbG9yOiAjZDBkMGQwO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAucHJvamVjdC1oZWFkbGluZSAucmVtb3ZlLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4xcmVtIDAuM3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAucHJvamVjdC1oZWFkbGluZSAucmVtb3ZlLXByb2plY3Q6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAucHJvamVjdC1oZWFkbGluZSAucmVtb3ZlLXByb2plY3QuZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43cmVtIDFyZW0gMC43cmVtIDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgyMTMsIDIxNywgMjE3LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAuYWRkLXRvZG8taXRlbSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAuYWRkLXRvZG8taXRlbSBzcGFuIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLmFkZC10b2RvLWl0ZW06aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAuYWRkLXRvZG8taXRlbS5kaXNhYmxlZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtLmRpc2FibGVkIHNwYW4ge1xuICBjb2xvcjogI2QwZDBkMDtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLmFkZC10b2RvLWl0ZW0uZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtLmRpc2FibGVkOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbiNjb250ZW50IC50b2RvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogOTAlO1xuICBwYWRkaW5nLXRvcDogMC40cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNjb250ZW50IC50b2RvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbn1cbiNjb250ZW50IC5lbXB0eS10b2RvLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuI2NvbnRlbnQgLmVtcHR5LXRvZG8tbGlzdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxLjJyZW0gMXJlbSAxLjJyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2NvbnRlbnQgLnRvZG8taXRlbSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4jY29udGVudCAudG9kby1pdGVtX19uYW1lIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbV9fbmFtZTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMDtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gW2NsYXNzKj1kYXRlcGlja2VyLV0ge1xuICB3aWR0aDogMTI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNjb250ZW50IC50b2RvLWl0ZW0gW2NsYXNzKj1kYXRlcGlja2VyLV0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gW2NsYXNzKj1kYXRlcGlja2VyLV0uZXhwaXJlZCB7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSBbY2xhc3MqPWRhdGVwaWNrZXItXTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gW2NsYXNzKj1kYXRlcGlja2VyLV06Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDA7XG59XG4jY29udGVudCAudG9kby1pdGVtIC5jaGVja21hcmstY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuICAvKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuICAvKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gIC8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuICAvKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuICAvKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSAuY2hlY2ttYXJrLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSAuY2hlY2ttYXJrLWNvbnRhaW5lciAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzk5OTtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSAuY2hlY2ttYXJrLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSAuY2hlY2ttYXJrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSAuY2hlY2ttYXJrLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgdG9wOiAxLjdweDtcbiAgbGVmdDogMS41cHg7XG4gIHdpZHRoOiA4NCU7XG4gIGhlaWdodDogODQlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG59XG4jY29udGVudCAudG9kby1pdGVtLmNoZWNrZWQgLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjYWFhO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5mb290ZXIgYSxcbmZvb3RlciBhOmhvdmVyLFxuZm9vdGVyIGE6dmlzaXRlZCxcbmZvb3RlciBhOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFLGlCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBOzs7RUFHRSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0NBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFBRjtBQUVFO0VBZEY7SUFlSSxhQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBQ0UsVUFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtB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QUFBO0VBQ0EsY0FBQTtBQXhEUjs7QUE4REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBM0RGO0FBNkRFO0VBWkY7SUFhSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VBMURGO0FBQ0Y7QUE0REU7Ozs7RUFJRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUExREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgJi5mYWRlLWluIHtcXG4gICAgb3BhY2l0eTogMTtcXG5cXG4gICAgLm1vZGFsLWJveCB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vZGFsLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtIDEuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoMjEzLCAyMTcsIDIxNywgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjdyZW07XFxuICAgIH1cXG5cXG4gICAgaDMge1xcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIE1vZGFsIHRleHRcXG4gICAgcCB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG1hcmdpbjogMCAwIDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAvLyBCdXR0b24gY29udGFpbmVyXFxuICAgIGRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgZ2FwOiAwLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWNvbmZpcm0sXFxuICAgIC5tb2RhbC1jYW5jZWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMC43cmVtIDEuOHJlbTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1jb25maXJtIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICAgIGJvcmRlci1jb2xvcjogY3JpbXNvbjtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDAsIDM2KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWNhbmNlbCB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWUge1xcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWlyLWRhdGVwaWNrZXItY2VsbC4tY3VycmVudC0ge1xcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uLWJvdHRvbS1yaWdodC0ge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLi1ib3R0b20tcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgcmlnaHQ6IDgwJSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4uLXNlbGVjdGVkLSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbiN0b2RvLWFwcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDkzdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuYXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuMXJlbTtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcbiAgcGFkZGluZzogMi40cmVtIDFyZW0gMi4ycmVtIDFyZW07XFxuICBib3JkZXItY29sb3I6ICNlZWU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XFxuICB9XFxuXFxuICAuYWRkLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiA0NnB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDAuN3JlbSAwLjVyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgc3BhbiB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICBjb2xvcjogI2FhYTtcXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgIGNvbG9yOiAjMzMzO1xcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgY29sb3I6ICM0NDQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYuaGlnaGxpZ2h0ZWQge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcXG5cXG4gICAgICBzcGFuIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZhZDM7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDZhZDM7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAucHJvamVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gICAgfVxcblxcbiAgICAmLmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgfVxcblxcbiAgICAmOm5vdCguYWN0aXZlKSB7XFxuICAgICAgc3BhbiB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgaSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICBwYWRkaW5nOiAwIDFweCAxcHggMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDAuNXJlbTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luOiAwLjRyZW0gMC4zcmVtIDAuM3JlbTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiA4NiU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBmb250LXNpemU6IDAuOTlyZW07XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcXG4gICAgICBtYXJnaW46IDAuNHJlbSAwLjFyZW0gMC4zcmVtIDAuMDdyZW07XFxuICAgIH1cXG5cXG4gICAgc3BhbixcXG4gICAgaW5wdXQge1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIH1cXG5cXG4gICAgLmhpZGUge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtIDNyZW07XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDA7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaGVhZGxpbmUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICAgIGdhcDogMC44cmVtO1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIGNvbG9yOiBkb2RnZXJibHVlO1xcblxcbiAgICAgICAgJi5uby1wcm9qZWN0IHtcXG4gICAgICAgICAgY29sb3I6ICNkMGQwZDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5yZW1vdmUtcHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzNTA7XFxuICAgICAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5kaXNhYmxlZCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFkZC10b2RvLWl0ZW0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDAuNXJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMC43cmVtIDFyZW0gMC43cmVtIDAuNXJlbTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgyMTMsIDIxNywgMjE3LCAwLjUpO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICAgIGNvbG9yOiBkb2RnZXJibHVlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgJi5kaXNhYmxlZCB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgY29sb3I6ICNjY2M7XFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgY29sb3I6ICNkMGQwZDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcblxcbiAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnRvZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHBhZGRpbmctdG9wOiAwLjRyZW07XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZW1wdHktdG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAudG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMS4ycmVtIDFyZW0gMS4ycmVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgJl9fbmFtZSB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIFtjbGFzcyo9XFxcImRhdGVwaWNrZXItXFxcIl0ge1xcbiAgICAgIHdpZHRoOiAxMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG5cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgfVxcblxcbiAgICAgICYuZXhwaXJlZCB7XFxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcXG4gICAgICB9XFxuXFxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgfVxcblxcbiAgICAgICY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY2hlY2ttYXJrLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgICAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXFxuICAgICAgLmNoZWNrbWFyayB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xcbiAgICAgICAgd2lkdGg6IDIycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk5OTtcXG4gICAgICB9XFxuXFxuICAgICAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAgICAgJjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgICB9XFxuXFxuICAgICAgLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgICAgIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcbiAgICAgIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xcbiAgICAgIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xcbiAgICAgIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxLjdweDtcXG4gICAgICAgIGxlZnQ6IDEuNXB4O1xcbiAgICAgICAgd2lkdGg6IDg0JTtcXG4gICAgICAgIGhlaWdodDogODQlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzIxOTZmMztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5jaGVja2VkIHtcXG4gICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOmhvdmVyLFxcbiAgYTp2aXNpdGVkLFxcbiAgYTphY3RpdmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAzLjAuOSB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMy4wLjkvTElDRU5TRSAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ET01QdXJpZnkgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IHtcbiAgICBlbnRyaWVzLFxuICAgIHNldFByb3RvdHlwZU9mLFxuICAgIGlzRnJvemVuLFxuICAgIGdldFByb3RvdHlwZU9mLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvclxuICB9ID0gT2JqZWN0O1xuICBsZXQge1xuICAgIGZyZWV6ZSxcbiAgICBzZWFsLFxuICAgIGNyZWF0ZVxuICB9ID0gT2JqZWN0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbiAgbGV0IHtcbiAgICBhcHBseSxcbiAgICBjb25zdHJ1Y3RcbiAgfSA9IHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0O1xuICBpZiAoIWZyZWV6ZSkge1xuICAgIGZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG4gIGlmICghc2VhbCkge1xuICAgIHNlYWwgPSBmdW5jdGlvbiBzZWFsKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cbiAgaWYgKCFhcHBseSkge1xuICAgIGFwcGx5ID0gZnVuY3Rpb24gYXBwbHkoZnVuLCB0aGlzVmFsdWUsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcbiAgICB9O1xuICB9XG4gIGlmICghY29uc3RydWN0KSB7XG4gICAgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEZ1bmMsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBuZXcgRnVuYyguLi5hcmdzKTtcbiAgICB9O1xuICB9XG4gIGNvbnN0IGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICBjb25zdCBhcnJheVBvcCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnBvcCk7XG4gIGNvbnN0IGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICBjb25zdCBzdHJpbmdUb0xvd2VyQ2FzZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b0xvd2VyQ2FzZSk7XG4gIGNvbnN0IHN0cmluZ1RvU3RyaW5nID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nKTtcbiAgY29uc3Qgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuICBjb25zdCBzdHJpbmdSZXBsYWNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuICBjb25zdCBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuICBjb25zdCBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuICBjb25zdCBvYmplY3RIYXNPd25Qcm9wZXJ0eSA9IHVuYXBwbHkoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gIGNvbnN0IHJlZ0V4cFRlc3QgPSB1bmFwcGx5KFJlZ0V4cC5wcm90b3R5cGUudGVzdCk7XG4gIGNvbnN0IHR5cGVFcnJvckNyZWF0ZSA9IHVuY29uc3RydWN0KFR5cGVFcnJvcik7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgZ2l2ZW4gZnVuY3Rpb24gd2l0aCBhIHNwZWNpZmllZCB0aGlzQXJnIGFuZCBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgLSBUaGUgZnVuY3Rpb24gdG8gYmUgd3JhcHBlZCBhbmQgY2FsbGVkLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlIGdpdmVuIGZ1bmN0aW9uIHdpdGggYSBzcGVjaWZpZWQgdGhpc0FyZyBhbmQgYXJndW1lbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5hcHBseShmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzQXJnKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB0aGF0IGNvbnN0cnVjdHMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBiZSB3cmFwcGVkIGFuZCBjYWxsZWQuXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCBjb25zdHJ1Y3RzIGFuIGluc3RhbmNlIG9mIHRoZSBnaXZlbiBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gICAqL1xuICBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGVcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHNldCAtIFRoZSBzZXQgdG8gd2hpY2ggZWxlbWVudHMgd2lsbCBiZSBhZGRlZC5cbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgY29udGFpbmluZyBlbGVtZW50cyB0byBiZSBhZGRlZCB0byB0aGUgc2V0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm1DYXNlRnVuYyAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSB0aGUgY2FzZSBvZiBlYWNoIGVsZW1lbnQgYmVmb3JlIGFkZGluZyB0byB0aGUgc2V0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbW9kaWZpZWQgc2V0IHdpdGggYWRkZWQgZWxlbWVudHMuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5KSB7XG4gICAgbGV0IHRyYW5zZm9ybUNhc2VGdW5jID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBzdHJpbmdUb0xvd2VyQ2FzZTtcbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIC8vIE1ha2UgJ2luJyBhbmQgdHJ1dGh5IGNoZWNrcyBsaWtlIEJvb2xlYW4oc2V0LmNvbnN0cnVjdG9yKVxuICAgICAgLy8gaW5kZXBlbmRlbnQgb2YgYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiBPYmplY3QucHJvdG90eXBlLlxuICAgICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2V0LCBudWxsKTtcbiAgICB9XG4gICAgbGV0IGwgPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSBhcnJheVtsXTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgbGNFbGVtZW50ID0gdHJhbnNmb3JtQ2FzZUZ1bmMoZWxlbWVudCk7XG4gICAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgICBpZiAoIWlzRnJvemVuKGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXlbbF0gPSBsY0VsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnQgPSBsY0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW4gdXAgYW4gYXJyYXkgdG8gaGFyZGVuIGFnYWluc3QgQ1NQUFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byBiZSBjbGVhbmVkLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBjbGVhbmVkIHZlcnNpb24gb2YgdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBjbGVhbkFycmF5KGFycmF5KSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgaXNQcm9wZXJ0eUV4aXN0ID0gb2JqZWN0SGFzT3duUHJvcGVydHkoYXJyYXksIGluZGV4KTtcbiAgICAgIGlmICghaXNQcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIGFycmF5W2luZGV4XSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBjbG9uZWQuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEEgbmV3IG9iamVjdCB0aGF0IGNvcGllcyB0aGUgb3JpZ2luYWwuXG4gICAqL1xuICBmdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgICBjb25zdCBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIHZhbHVlXSBvZiBlbnRyaWVzKG9iamVjdCkpIHtcbiAgICAgIGNvbnN0IGlzUHJvcGVydHlFeGlzdCA9IG9iamVjdEhhc093blByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgaWYgKGlzUHJvcGVydHlFeGlzdCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gY2xlYW5BcnJheSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IGNsb25lKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5IGNoZWNrcyBpZiB0aGUgcHJvcCBpcyBmdW5jdGlvbiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXMgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGxvb2sgdXAgdGhlIGdldHRlciBmdW5jdGlvbiBpbiBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcCAtIFRoZSBwcm9wZXJ0eSBuYW1lIGZvciB3aGljaCB0byBmaW5kIHRoZSBnZXR0ZXIgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGdldHRlciBmdW5jdGlvbiBmb3VuZCBpbiB0aGUgcHJvdG90eXBlIGNoYWluIG9yIGEgZmFsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBsb29rdXBHZXR0ZXIob2JqZWN0LCBwcm9wKSB7XG4gICAgd2hpbGUgKG9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGVzYy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICB9XG5cbiAgY29uc3QgaHRtbCQxID0gZnJlZXplKFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRlcicsICduYXYnLCAnbm9icicsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ10pO1xuXG4gIC8vIFNWR1xuICBjb25zdCBzdmckMSA9IGZyZWV6ZShbJ3N2ZycsICdhJywgJ2FsdGdseXBoJywgJ2FsdGdseXBoZGVmJywgJ2FsdGdseXBoaXRlbScsICdhbmltYXRlY29sb3InLCAnYW5pbWF0ZW1vdGlvbicsICdhbmltYXRldHJhbnNmb3JtJywgJ2NpcmNsZScsICdjbGlwcGF0aCcsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmaWx0ZXInLCAnZm9udCcsICdnJywgJ2dseXBoJywgJ2dseXBocmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyZ3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbXBhdGgnLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsZ3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N0eWxlJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0cGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJywgJ3ZpZXcnLCAndmtlcm4nXSk7XG4gIGNvbnN0IHN2Z0ZpbHRlcnMgPSBmcmVlemUoWydmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLCAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJywgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRHJvcFNoYWRvdycsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVJbWFnZScsICdmZU1lcmdlJywgJ2ZlTWVyZ2VOb2RlJywgJ2ZlTW9ycGhvbG9neScsICdmZU9mZnNldCcsICdmZVBvaW50TGlnaHQnLCAnZmVTcGVjdWxhckxpZ2h0aW5nJywgJ2ZlU3BvdExpZ2h0JywgJ2ZlVGlsZScsICdmZVR1cmJ1bGVuY2UnXSk7XG5cbiAgLy8gTGlzdCBvZiBTVkcgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWxsb3dlZCBieSBkZWZhdWx0LlxuICAvLyBXZSBzdGlsbCBuZWVkIHRvIGtub3cgdGhlbSBzbyB0aGF0IHdlIGNhbiBkbyBuYW1lc3BhY2VcbiAgLy8gY2hlY2tzIHByb3Blcmx5IGluIGNhc2Ugb25lIHdhbnRzIHRvIGFkZCB0aGVtIHRvXG4gIC8vIGFsbG93LWxpc3QuXG4gIGNvbnN0IHN2Z0Rpc2FsbG93ZWQgPSBmcmVlemUoWydhbmltYXRlJywgJ2NvbG9yLXByb2ZpbGUnLCAnY3Vyc29yJywgJ2Rpc2NhcmQnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXNyYycsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21pc3NpbmctZ2x5cGgnLCAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3Vua25vd24nLCAndXNlJ10pO1xuICBjb25zdCBtYXRoTWwkMSA9IGZyZWV6ZShbJ21hdGgnLCAnbWVuY2xvc2UnLCAnbWVycm9yJywgJ21mZW5jZWQnLCAnbWZyYWMnLCAnbWdseXBoJywgJ21pJywgJ21sYWJlbGVkdHInLCAnbW11bHRpc2NyaXB0cycsICdtbicsICdtbycsICdtb3ZlcicsICdtcGFkZGVkJywgJ21waGFudG9tJywgJ21yb290JywgJ21yb3cnLCAnbXMnLCAnbXNwYWNlJywgJ21zcXJ0JywgJ21zdHlsZScsICdtc3ViJywgJ21zdXAnLCAnbXN1YnN1cCcsICdtdGFibGUnLCAnbXRkJywgJ210ZXh0JywgJ210cicsICdtdW5kZXInLCAnbXVuZGVyb3ZlcicsICdtcHJlc2NyaXB0cyddKTtcblxuICAvLyBTaW1pbGFybHkgdG8gU1ZHLCB3ZSB3YW50IHRvIGtub3cgYWxsIE1hdGhNTCBlbGVtZW50cyxcbiAgLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG4gIGNvbnN0IG1hdGhNbERpc2FsbG93ZWQgPSBmcmVlemUoWydtYWN0aW9uJywgJ21hbGlnbmdyb3VwJywgJ21hbGlnbm1hcmsnLCAnbWxvbmdkaXYnLCAnbXNjYXJyaWVzJywgJ21zY2FycnknLCAnbXNncm91cCcsICdtc3RhY2snLCAnbXNsaW5lJywgJ21zcm93JywgJ3NlbWFudGljcycsICdhbm5vdGF0aW9uJywgJ2Fubm90YXRpb24teG1sJywgJ21wcmVzY3JpcHRzJywgJ25vbmUnXSk7XG4gIGNvbnN0IHRleHQgPSBmcmVlemUoWycjdGV4dCddKTtcblxuICBjb25zdCBodG1sID0gZnJlZXplKFsnYWNjZXB0JywgJ2FjdGlvbicsICdhbGlnbicsICdhbHQnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9waWN0dXJlaW5waWN0dXJlJywgJ2F1dG9wbGF5JywgJ2JhY2tncm91bmQnLCAnYmdjb2xvcicsICdib3JkZXInLCAnY2FwdHVyZScsICdjZWxscGFkZGluZycsICdjZWxsc3BhY2luZycsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3MnLCAnY2xlYXInLCAnY29sb3InLCAnY29scycsICdjb2xzcGFuJywgJ2NvbnRyb2xzJywgJ2NvbnRyb2xzbGlzdCcsICdjb29yZHMnLCAnY3Jvc3NvcmlnaW4nLCAnZGF0ZXRpbWUnLCAnZGVjb2RpbmcnLCAnZGVmYXVsdCcsICdkaXInLCAnZGlzYWJsZWQnLCAnZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmUnLCAnZGlzYWJsZXJlbW90ZXBsYXliYWNrJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsICdlbmN0eXBlJywgJ2VudGVya2V5aGludCcsICdmYWNlJywgJ2ZvcicsICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZsYW5nJywgJ2lkJywgJ2lucHV0bW9kZScsICdpbnRlZ3JpdHknLCAnaXNtYXAnLCAna2luZCcsICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9hZGluZycsICdsb29wJywgJ2xvdycsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21lZGlhJywgJ21ldGhvZCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJywgJ25hbWUnLCAnbm9uY2UnLCAnbm9zaGFkZScsICdub3ZhbGlkYXRlJywgJ25vd3JhcCcsICdvcGVuJywgJ29wdGltdW0nLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwbGF5c2lubGluZScsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwdWJkYXRlJywgJ3JhZGlvZ3JvdXAnLCAncmVhZG9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldicsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd3MnLCAncm93c3BhbicsICdzcGVsbGNoZWNrJywgJ3Njb3BlJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcmNsYW5nJywgJ3N0YXJ0JywgJ3NyYycsICdzcmNzZXQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JywgJ3RhYmluZGV4JywgJ3RpdGxlJywgJ3RyYW5zbGF0ZScsICd0eXBlJywgJ3VzZW1hcCcsICd2YWxpZ24nLCAndmFsdWUnLCAnd2lkdGgnLCAneG1sbnMnLCAnc2xvdCddKTtcbiAgY29uc3Qgc3ZnID0gZnJlZXplKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhc2NlbnQnLCAnYXR0cmlidXRlbmFtZScsICdhdHRyaWJ1dGV0eXBlJywgJ2F6aW11dGgnLCAnYmFzZWZyZXF1ZW5jeScsICdiYXNlbGluZS1zaGlmdCcsICdiZWdpbicsICdiaWFzJywgJ2J5JywgJ2NsYXNzJywgJ2NsaXAnLCAnY2xpcHBhdGh1bml0cycsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2N4JywgJ2N5JywgJ2QnLCAnZHgnLCAnZHknLCAnZGlmZnVzZWNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZHVyJywgJ2VkZ2Vtb2RlJywgJ2VsZXZhdGlvbicsICdlbmQnLCAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmaWx0ZXJ1bml0cycsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmeCcsICdmeScsICdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBocmVmJywgJ2dyYWRpZW50dW5pdHMnLCAnZ3JhZGllbnR0cmFuc2Zvcm0nLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5pbmcnLCAna2V5cG9pbnRzJywgJ2tleXNwbGluZXMnLCAna2V5dGltZXMnLCAnbGFuZycsICdsZW5ndGhhZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAna2VybmVsbWF0cml4JywgJ2tlcm5lbHVuaXRsZW5ndGgnLCAnbGlnaHRpbmctY29sb3InLCAnbG9jYWwnLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJoZWlnaHQnLCAnbWFya2VydW5pdHMnLCAnbWFya2Vyd2lkdGgnLCAnbWFza2NvbnRlbnR1bml0cycsICdtYXNrdW5pdHMnLCAnbWF4JywgJ21hc2snLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21vZGUnLCAnbWluJywgJ25hbWUnLCAnbnVtb2N0YXZlcycsICdvZmZzZXQnLCAnb3BlcmF0b3InLCAnb3BhY2l0eScsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ3BhaW50LW9yZGVyJywgJ3BhdGgnLCAncGF0aGxlbmd0aCcsICdwYXR0ZXJuY29udGVudHVuaXRzJywgJ3BhdHRlcm50cmFuc2Zvcm0nLCAncGF0dGVybnVuaXRzJywgJ3BvaW50cycsICdwcmVzZXJ2ZWFscGhhJywgJ3ByZXNlcnZlYXNwZWN0cmF0aW8nLCAncHJpbWl0aXZldW5pdHMnLCAncicsICdyeCcsICdyeScsICdyYWRpdXMnLCAncmVmeCcsICdyZWZ5JywgJ3JlcGVhdGNvdW50JywgJ3JlcGVhdGR1cicsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3BlY3VsYXJjb25zdGFudCcsICdzcGVjdWxhcmV4cG9uZW50JywgJ3NwcmVhZG1ldGhvZCcsICdzdGFydG9mZnNldCcsICdzdGRkZXZpYXRpb24nLCAnc3RpdGNodGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlc2NhbGUnLCAnc3lzdGVtbGFuZ3VhZ2UnLCAndGFiaW5kZXgnLCAndGFyZ2V0eCcsICd0YXJnZXR5JywgJ3RyYW5zZm9ybScsICd0cmFuc2Zvcm0tb3JpZ2luJywgJ3RleHQtYW5jaG9yJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LXJlbmRlcmluZycsICd0ZXh0bGVuZ3RoJywgJ3R5cGUnLCAndTEnLCAndTInLCAndW5pY29kZScsICd2YWx1ZXMnLCAndmlld2JveCcsICd2aXNpYmlsaXR5JywgJ3ZlcnNpb24nLCAndmVydC1hZHYteScsICd2ZXJ0LW9yaWdpbi14JywgJ3ZlcnQtb3JpZ2luLXknLCAnd2lkdGgnLCAnd29yZC1zcGFjaW5nJywgJ3dyYXAnLCAnd3JpdGluZy1tb2RlJywgJ3hjaGFubmVsc2VsZWN0b3InLCAneWNoYW5uZWxzZWxlY3RvcicsICd4JywgJ3gxJywgJ3gyJywgJ3htbG5zJywgJ3knLCAneTEnLCAneTInLCAneicsICd6b29tYW5kcGFuJ10pO1xuICBjb25zdCBtYXRoTWwgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuICBjb25zdCB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG4gIGNvbnN0IE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG4gIGNvbnN0IEVSQl9FWFBSID0gc2VhbCgvPCVbXFx3XFxXXSp8W1xcd1xcV10qJT4vZ20pO1xuICBjb25zdCBUTVBMSVRfRVhQUiA9IHNlYWwoL1xcJHtbXFx3XFxXXSp9L2dtKTtcbiAgY29uc3QgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgY29uc3QgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIGNvbnN0IElTX0FMTE9XRURfVVJJID0gc2VhbCgvXig/Oig/Oig/OmZ8aHQpdHBzP3xtYWlsdG98dGVsfGNhbGx0b3xzbXN8Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuXG4gIGNvbnN0IElTX1NDUklQVF9PUl9EQVRBID0gc2VhbCgvXig/OlxcdytzY3JpcHR8ZGF0YSk6L2kpO1xuICBjb25zdCBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG5cbiAgY29uc3QgRE9DVFlQRV9OQU1FID0gc2VhbCgvXmh0bWwkL2kpO1xuXG4gIHZhciBFWFBSRVNTSU9OUyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgTVVTVEFDSEVfRVhQUjogTVVTVEFDSEVfRVhQUixcbiAgICBFUkJfRVhQUjogRVJCX0VYUFIsXG4gICAgVE1QTElUX0VYUFI6IFRNUExJVF9FWFBSLFxuICAgIERBVEFfQVRUUjogREFUQV9BVFRSLFxuICAgIEFSSUFfQVRUUjogQVJJQV9BVFRSLFxuICAgIElTX0FMTE9XRURfVVJJOiBJU19BTExPV0VEX1VSSSxcbiAgICBJU19TQ1JJUFRfT1JfREFUQTogSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgQVRUUl9XSElURVNQQUNFOiBBVFRSX1dISVRFU1BBQ0UsXG4gICAgRE9DVFlQRV9OQU1FOiBET0NUWVBFX05BTUVcbiAgfSk7XG5cbiAgY29uc3QgZ2V0R2xvYmFsID0gZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3c7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKiBEb24ndCBleHBvcnQgdGhpcyBmdW5jdGlvbiBvdXRzaWRlIHRoaXMgbW9kdWxlIVxuICAgKiBAcGFyYW0ge1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAgICogQHBhcmFtIHtIVE1MU2NyaXB0RWxlbWVudH0gcHVyaWZ5SG9zdEVsZW1lbnQgVGhlIFNjcmlwdCBlbGVtZW50IHVzZWQgdG8gbG9hZCBET01QdXJpZnkgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpLlxuICAgKiBAcmV0dXJuIHtUcnVzdGVkVHlwZVBvbGljeX0gVGhlIHBvbGljeSBjcmVhdGVkIChvciBudWxsLCBpZiBUcnVzdGVkIFR5cGVzXG4gICAqIGFyZSBub3Qgc3VwcG9ydGVkIG9yIGNyZWF0aW5nIHRoZSBwb2xpY3kgZmFpbGVkKS5cbiAgICovXG4gIGNvbnN0IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgcHVyaWZ5SG9zdEVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIHRydXN0ZWRUeXBlcyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEFsbG93IHRoZSBjYWxsZXJzIHRvIGNvbnRyb2wgdGhlIHVuaXF1ZSBwb2xpY3kgbmFtZVxuICAgIC8vIGJ5IGFkZGluZyBhIGRhdGEtdHQtcG9saWN5LXN1ZmZpeCB0byB0aGUgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgRE9NUHVyaWZ5LlxuICAgIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cbiAgICBsZXQgc3VmZml4ID0gbnVsbDtcbiAgICBjb25zdCBBVFRSX05BTUUgPSAnZGF0YS10dC1wb2xpY3ktc3VmZml4JztcbiAgICBpZiAocHVyaWZ5SG9zdEVsZW1lbnQgJiYgcHVyaWZ5SG9zdEVsZW1lbnQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgIHN1ZmZpeCA9IHB1cmlmeUhvc3RFbGVtZW50LmdldEF0dHJpYnV0ZShBVFRSX05BTUUpO1xuICAgIH1cbiAgICBjb25zdCBwb2xpY3lOYW1lID0gJ2RvbXB1cmlmeScgKyAoc3VmZml4ID8gJyMnICsgc3VmZml4IDogJycpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICAgIGNyZWF0ZUhUTUwoaHRtbCkge1xuICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVTY3JpcHRVUkwoc2NyaXB0VXJsKSB7XG4gICAgICAgICAgcmV0dXJuIHNjcmlwdFVybDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KCkge1xuICAgIGxldCB3aW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldEdsb2JhbCgpO1xuICAgIGNvbnN0IERPTVB1cmlmeSA9IHJvb3QgPT4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuXG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBsYWJlbCwgZXhwb3NlZCBmb3IgZWFzaWVyIGNoZWNrc1xuICAgICAqIGlmIERPTVB1cmlmeSBpcyB1cCB0byBkYXRlIG9yIG5vdFxuICAgICAqL1xuICAgIERPTVB1cmlmeS52ZXJzaW9uID0gJzMuMC45JztcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGVsZW1lbnRzIHRoYXQgRE9NUHVyaWZ5IHJlbW92ZWQgZHVyaW5nIHNhbml0YXRpb24uXG4gICAgICogRW1wdHkgaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgICB9XG4gICAgbGV0IHtcbiAgICAgIGRvY3VtZW50XG4gICAgfSA9IHdpbmRvdztcbiAgICBjb25zdCBvcmlnaW5hbERvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgY3VycmVudFNjcmlwdCA9IG9yaWdpbmFsRG9jdW1lbnQuY3VycmVudFNjcmlwdDtcbiAgICBjb25zdCB7XG4gICAgICBEb2N1bWVudEZyYWdtZW50LFxuICAgICAgSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgIE5vZGUsXG4gICAgICBFbGVtZW50LFxuICAgICAgTm9kZUZpbHRlcixcbiAgICAgIE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcCxcbiAgICAgIEhUTUxGb3JtRWxlbWVudCxcbiAgICAgIERPTVBhcnNlcixcbiAgICAgIHRydXN0ZWRUeXBlc1xuICAgIH0gPSB3aW5kb3c7XG4gICAgY29uc3QgRWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgIGNvbnN0IGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gICAgY29uc3QgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gICAgY29uc3QgZ2V0Q2hpbGROb2RlcyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2hpbGROb2RlcycpO1xuICAgIGNvbnN0IGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTtcblxuICAgIC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAgIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAgIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAgIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gICAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgICAvLyBpcyBpbmhlcml0ZWQuXG4gICAgaWYgKHR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0cnVzdGVkVHlwZXNQb2xpY3k7XG4gICAgbGV0IGVtcHR5SFRNTCA9ICcnO1xuICAgIGNvbnN0IHtcbiAgICAgIGltcGxlbWVudGF0aW9uLFxuICAgICAgY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lXG4gICAgfSA9IGRvY3VtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgIGltcG9ydE5vZGVcbiAgICB9ID0gb3JpZ2luYWxEb2N1bWVudDtcbiAgICBsZXQgaG9va3MgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICAgKi9cbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZW50cmllcyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZ2V0UGFyZW50Tm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpbXBsZW1lbnRhdGlvbiAmJiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7XG4gICAgICBNVVNUQUNIRV9FWFBSLFxuICAgICAgRVJCX0VYUFIsXG4gICAgICBUTVBMSVRfRVhQUixcbiAgICAgIERBVEFfQVRUUixcbiAgICAgIEFSSUFfQVRUUixcbiAgICAgIElTX1NDUklQVF9PUl9EQVRBLFxuICAgICAgQVRUUl9XSElURVNQQUNFXG4gICAgfSA9IEVYUFJFU1NJT05TO1xuICAgIGxldCB7XG4gICAgICBJU19BTExPV0VEX1VSSTogSVNfQUxMT1dFRF9VUkkkMVxuICAgIH0gPSBFWFBSRVNTSU9OUztcblxuICAgIC8qKlxuICAgICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgICAqL1xuXG4gICAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG4gICAgbGV0IEFMTE9XRURfVEFHUyA9IG51bGw7XG4gICAgY29uc3QgREVGQVVMVF9BTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgWy4uLmh0bWwkMSwgLi4uc3ZnJDEsIC4uLnN2Z0ZpbHRlcnMsIC4uLm1hdGhNbCQxLCAuLi50ZXh0XSk7XG5cbiAgICAvKiBBbGxvd2VkIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICAgIGxldCBBTExPV0VEX0FUVFIgPSBudWxsO1xuICAgIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9BVFRSID0gYWRkVG9TZXQoe30sIFsuLi5odG1sLCAuLi5zdmcsIC4uLm1hdGhNbCwgLi4ueG1sXSk7XG5cbiAgICAvKlxuICAgICAqIENvbmZpZ3VyZSBob3cgRE9NUFVyaWZ5IHNob3VsZCBoYW5kbGUgY3VzdG9tIGVsZW1lbnRzIGFuZCB0aGVpciBhdHRyaWJ1dGVzIGFzIHdlbGwgYXMgY3VzdG9taXplZCBidWlsdC1pbiBlbGVtZW50cy5cbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSB0YWdOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGN1c3RvbSBlbGVtZW50cylcbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIGFsbG93IGN1c3RvbSBlbGVtZW50cyBkZXJpdmVkIGZyb20gYnVpbHQtaW5zIGlmIHRoZXkgcGFzcyBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2suIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgbGV0IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoY3JlYXRlKG51bGwsIHtcbiAgICAgIHRhZ05hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiB0YWdzIChvdmVycmlkZXMgQUxMT1dFRF9UQUdTL0FERF9UQUdTKSAqL1xuICAgIGxldCBGT1JCSURfVEFHUyA9IG51bGw7XG5cbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuICAgIGxldCBGT1JCSURfQVRUUiA9IG51bGw7XG5cbiAgICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gICAgbGV0IEFMTE9XX0FSSUFfQVRUUiA9IHRydWU7XG5cbiAgICAvKiBEZWNpZGUgaWYgY3VzdG9tIGRhdGEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICAgIGxldCBBTExPV19EQVRBX0FUVFIgPSB0cnVlO1xuXG4gICAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG4gICAgbGV0IEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgc2VsZi1jbG9zaW5nIHRhZ3MgaW4gYXR0cmlidXRlcyBhcmUgYWxsb3dlZC5cbiAgICAgKiBVc3VhbGx5IHJlbW92ZWQgZHVlIHRvIGEgbVhTUyBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgbGV0IEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IHRydWU7XG5cbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxuICAgICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICAgKi9cbiAgICBsZXQgU0FGRV9GT1JfVEVNUExBVEVTID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gICAgbGV0IFdIT0xFX0RPQ1VNRU5UID0gZmFsc2U7XG5cbiAgICAvKiBUcmFjayB3aGV0aGVyIGNvbmZpZyBpcyBhbHJlYWR5IHNldCBvbiB0aGlzIGluc3RhbmNlIG9mIERPTVB1cmlmeS4gKi9cbiAgICBsZXQgU0VUX0NPTkZJRyA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGFsbCBlbGVtZW50cyAoZS5nLiBzdHlsZSwgc2NyaXB0KSBtdXN0IGJlIGNoaWxkcmVuIG9mXG4gICAgICogZG9jdW1lbnQuYm9keS4gQnkgZGVmYXVsdCwgYnJvd3NlcnMgbWlnaHQgbW92ZSB0aGVtIHRvIGRvY3VtZW50LmhlYWQgKi9cbiAgICBsZXQgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBIVE1MQm9keUVsZW1lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkuXG4gICAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAgICovXG4gICAgbGV0IFJFVFVSTl9ET00gPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkgKi9cbiAgICBsZXQgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGZhbHNlO1xuXG4gICAgLyogVHJ5IHRvIHJldHVybiBhIFRydXN0ZWQgVHlwZSBvYmplY3QgaW5zdGVhZCBvZiBhIHN0cmluZywgcmV0dXJuIGEgc3RyaW5nIGluXG4gICAgICogY2FzZSBUcnVzdGVkIFR5cGVzIGFyZSBub3Qgc3VwcG9ydGVkICAqL1xuICAgIGxldCBSRVRVUk5fVFJVU1RFRF9UWVBFID0gZmFsc2U7XG5cbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzP1xuICAgICAqIFRoaXMgc2FuaXRpemVzIG1hcmt1cHMgbmFtZWQgd2l0aCBjb2xsaWRpbmcsIGNsb2JiZXJhYmxlIGJ1aWx0LWluIERPTSBBUElzLlxuICAgICAqL1xuICAgIGxldCBTQU5JVElaRV9ET00gPSB0cnVlO1xuXG4gICAgLyogQWNoaWV2ZSBmdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gYnkgaXNvbGF0aW5nIHRoZSBuYW1lc3BhY2Ugb2YgbmFtZWRcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBKUyB2YXJpYWJsZXMsIG1pdGlnYXRpbmcgYXR0YWNrcyB0aGF0IGFidXNlIHRoZSBIVE1ML0RPTSBzcGVjIHJ1bGVzLlxuICAgICAqXG4gICAgICogSFRNTC9ET00gc3BlYyBydWxlcyB0aGF0IGVuYWJsZSBET00gQ2xvYmJlcmluZzpcbiAgICAgKiAgIC0gTmFtZWQgQWNjZXNzIG9uIFdpbmRvdyAowqc3LjMuMylcbiAgICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxuICAgICAqICAgLSBGb3JtIEVsZW1lbnQgUGFyZW50LUNoaWxkIFJlbGF0aW9ucyAowqc0LjEwLjMpXG4gICAgICogICAtIElmcmFtZSBzcmNkb2MgLyBOZXN0ZWQgV2luZG93UHJveGllcyAowqc0LjguNSlcbiAgICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXG4gICAgICpcbiAgICAgKiBOYW1lc3BhY2UgaXNvbGF0aW9uIGlzIGltcGxlbWVudGVkIGJ5IHByZWZpeGluZyBgaWRgIGFuZCBgbmFtZWAgYXR0cmlidXRlc1xuICAgICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxuICAgICAqL1xuICAgIGxldCBTQU5JVElaRV9OQU1FRF9QUk9QUyA9IGZhbHNlO1xuICAgIGNvbnN0IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCA9ICd1c2VyLWNvbnRlbnQtJztcblxuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cbiAgICBsZXQgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAgIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG4gICAgbGV0IElOX1BMQUNFID0gZmFsc2U7XG5cbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gICAgbGV0IFVTRV9QUk9GSUxFUyA9IHt9O1xuXG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG4gICAgbGV0IEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gICAgY29uc3QgREVGQVVMVF9GT1JCSURfQ09OVEVOVFMgPSBhZGRUb1NldCh7fSwgWydhbm5vdGF0aW9uLXhtbCcsICdhdWRpbycsICdjb2xncm91cCcsICdkZXNjJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGVhZCcsICdpZnJhbWUnLCAnbWF0aCcsICdtaScsICdtbicsICdtbycsICdtcycsICdtdGV4dCcsICdub2VtYmVkJywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JywgJ3BsYWludGV4dCcsICdzY3JpcHQnLCAnc3R5bGUnLCAnc3ZnJywgJ3RlbXBsYXRlJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3ZpZGVvJywgJ3htcCddKTtcblxuICAgIC8qIFRhZ3MgdGhhdCBhcmUgc2FmZSBmb3IgZGF0YTogVVJJcyAqL1xuICAgIGxldCBEQVRBX1VSSV9UQUdTID0gbnVsbDtcbiAgICBjb25zdCBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgWydhdWRpbycsICd2aWRlbycsICdpbWcnLCAnc291cmNlJywgJ2ltYWdlJywgJ3RyYWNrJ10pO1xuXG4gICAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cbiAgICBsZXQgVVJJX1NBRkVfQVRUUklCVVRFUyA9IG51bGw7XG4gICAgY29uc3QgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuICAgIGNvbnN0IE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgY29uc3QgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gICAgLyogRG9jdW1lbnQgbmFtZXNwYWNlICovXG4gICAgbGV0IE5BTUVTUEFDRSA9IEhUTUxfTkFNRVNQQUNFO1xuICAgIGxldCBJU19FTVBUWV9JTlBVVCA9IGZhbHNlO1xuXG4gICAgLyogQWxsb3dlZCBYSFRNTCtYTUwgbmFtZXNwYWNlcyAqL1xuICAgIGxldCBBTExPV0VEX05BTUVTUEFDRVMgPSBudWxsO1xuICAgIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTID0gYWRkVG9TZXQoe30sIFtNQVRITUxfTkFNRVNQQUNFLCBTVkdfTkFNRVNQQUNFLCBIVE1MX05BTUVTUEFDRV0sIHN0cmluZ1RvU3RyaW5nKTtcblxuICAgIC8qIFBhcnNpbmcgb2Ygc3RyaWN0IFhIVE1MIGRvY3VtZW50cyAqL1xuICAgIGxldCBQQVJTRVJfTUVESUFfVFlQRSA9IG51bGw7XG4gICAgY29uc3QgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUyA9IFsnYXBwbGljYXRpb24veGh0bWwreG1sJywgJ3RleHQvaHRtbCddO1xuICAgIGNvbnN0IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgPSAndGV4dC9odG1sJztcbiAgICBsZXQgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBudWxsO1xuXG4gICAgLyogS2VlcCBhIHJlZmVyZW5jZSB0byBjb25maWcgdG8gcGFzcyB0byBob29rcyAqL1xuICAgIGxldCBDT05GSUcgPSBudWxsO1xuXG4gICAgLyogSWRlYWxseSwgZG8gbm90IHRvdWNoIGFueXRoaW5nIGJlbG93IHRoaXMgbGluZSAqL1xuICAgIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cblxuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGlzUmVnZXhPckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNSZWdleE9yRnVuY3Rpb24odGVzdFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGVzdFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHRlc3RWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfcGFyc2VDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICBjb25zdCBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoKSB7XG4gICAgICBsZXQgY2ZnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIGlmIChDT05GSUcgJiYgQ09ORklHID09PSBjZmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cbiAgICAgIGlmICghY2ZnIHx8IHR5cGVvZiBjZmcgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgICBjZmcgPSBjbG9uZShjZmcpO1xuICAgICAgUEFSU0VSX01FRElBX1RZUEUgPVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTLmluZGV4T2YoY2ZnLlBBUlNFUl9NRURJQV9UWVBFKSA9PT0gLTEgPyBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogY2ZnLlBBUlNFUl9NRURJQV9UWVBFO1xuXG4gICAgICAvLyBIVE1MIHRhZ3MgYW5kIGF0dHJpYnV0ZXMgYXJlIG5vdCBjYXNlLXNlbnNpdGl2ZSwgY29udmVydGluZyB0byBsb3dlcmNhc2UuIEtlZXBpbmcgWEhUTUwgYXMgaXMuXG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyA/IHN0cmluZ1RvU3RyaW5nIDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIEFMTE9XRURfVEFHUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0FMTE9XRURfVEFHUycpID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgICAgQUxMT1dFRF9BVFRSID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnQUxMT1dFRF9BVFRSJykgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgICBBTExPV0VEX05BTUVTUEFDRVMgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdBTExPV0VEX05BTUVTUEFDRVMnKSA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9OQU1FU1BBQ0VTLCBzdHJpbmdUb1N0cmluZykgOiBERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUztcbiAgICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdBRERfVVJJX1NBRkVfQVRUUicpID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTKSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICBjZmcuQUREX1VSSV9TQUZFX0FUVFIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIDogREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTO1xuICAgICAgREFUQV9VUklfVEFHUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0FERF9EQVRBX1VSSV9UQUdTJykgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX0RBVEFfVVJJX1RBR1MpLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIGNmZy5BRERfREFUQV9VUklfVEFHUyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgICBGT1JCSURfQ09OVEVOVFMgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdGT1JCSURfQ09OVEVOVFMnKSA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICAgIEZPUkJJRF9UQUdTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnRk9SQklEX1RBR1MnKSA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdGT1JCSURfQVRUUicpID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XG4gICAgICBVU0VfUFJPRklMRVMgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdVU0VfUFJPRklMRVMnKSA/IGNmZy5VU0VfUFJPRklMRVMgOiBmYWxzZTtcbiAgICAgIEFMTE9XX0FSSUFfQVRUUiA9IGNmZy5BTExPV19BUklBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGNmZy5BTExPV19EQVRBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gY2ZnLkFMTE9XX1VOS05PV05fUFJPVE9DT0xTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSBjZmcuQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBTQUZFX0ZPUl9URU1QTEFURVMgPSBjZmcuU0FGRV9GT1JfVEVNUExBVEVTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBXSE9MRV9ET0NVTUVOVCA9IGNmZy5XSE9MRV9ET0NVTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX0RPTSA9IGNmZy5SRVRVUk5fRE9NIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gY2ZnLlJFVFVSTl9ET01fRlJBR01FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBjZmcuUkVUVVJOX1RSVVNURURfVFlQRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgRk9SQ0VfQk9EWSA9IGNmZy5GT1JDRV9CT0RZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBTQU5JVElaRV9ET00gPSBjZmcuU0FOSVRJWkVfRE9NICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBTQU5JVElaRV9OQU1FRF9QUk9QUyA9IGNmZy5TQU5JVElaRV9OQU1FRF9QUk9QUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIElTX0FMTE9XRURfVVJJJDEgPSBjZmcuQUxMT1dFRF9VUklfUkVHRVhQIHx8IElTX0FMTE9XRURfVVJJO1xuICAgICAgTkFNRVNQQUNFID0gY2ZnLk5BTUVTUEFDRSB8fCBIVE1MX05BTUVTUEFDRTtcbiAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HIHx8IHt9O1xuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrO1xuICAgICAgfVxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrO1xuICAgICAgfVxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XG4gICAgICB9XG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFBhcnNlIHByb2ZpbGUgaW5mbyAqL1xuICAgICAgaWYgKFVTRV9QUk9GSUxFUykge1xuICAgICAgICBBTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgdGV4dCk7XG4gICAgICAgIEFMTE9XRURfQVRUUiA9IFtdO1xuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGh0bWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBodG1sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmdGaWx0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2Zyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGNmZy5BRERfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZmcuRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgIGlmIChGT1JCSURfQ09OVEVOVFMgPT09IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgICAgRk9SQklEX0NPTlRFTlRTID0gY2xvbmUoRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUb1NldChGT1JCSURfQ09OVEVOVFMsIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG4gICAgICBpZiAoS0VFUF9DT05URU5UKSB7XG4gICAgICAgIEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFkZCBodG1sLCBoZWFkIGFuZCBib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIFdIT0xFX0RPQ1VNRU5UIGlzIHRydWUgKi9cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEFkZCB0Ym9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSB0YWJsZXMgYXJlIHBlcm1pdHRlZCwgc2VlICMyODYsICMzNjUgKi9cbiAgICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ3Rib2R5J10pO1xuICAgICAgICBkZWxldGUgRk9SQklEX1RBR1MudGJvZHk7XG4gICAgICB9XG4gICAgICBpZiAoY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZLmNyZWF0ZUhUTUwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ1RSVVNURURfVFlQRVNfUE9MSUNZIGNvbmZpZ3VyYXRpb24gb3B0aW9uIG11c3QgcHJvdmlkZSBhIFwiY3JlYXRlSFRNTFwiIGhvb2suJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjZmcuVFJVU1RFRF9UWVBFU19QT0xJQ1kuY3JlYXRlU2NyaXB0VVJMICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdUUlVTVEVEX1RZUEVTX1BPTElDWSBjb25maWd1cmF0aW9uIG9wdGlvbiBtdXN0IHByb3ZpZGUgYSBcImNyZWF0ZVNjcmlwdFVSTFwiIGhvb2suJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdmVyd3JpdGUgZXhpc3RpbmcgVHJ1c3RlZFR5cGVzIHBvbGljeS5cbiAgICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5ID0gY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZO1xuXG4gICAgICAgIC8vIFNpZ24gbG9jYWwgdmFyaWFibGVzIHJlcXVpcmVkIGJ5IGBzYW5pdGl6ZWAuXG4gICAgICAgIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVuaW5pdGlhbGl6ZWQgcG9saWN5LCBhdHRlbXB0IHRvIGluaXRpYWxpemUgdGhlIGludGVybmFsIGRvbXB1cmlmeSBwb2xpY3kuXG4gICAgICAgIGlmICh0cnVzdGVkVHlwZXNQb2xpY3kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBjdXJyZW50U2NyaXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGNyZWF0aW5nIHRoZSBpbnRlcm5hbCBwb2xpY3kgc3VjY2VlZGVkIHNpZ24gaW50ZXJuYWwgdmFyaWFibGVzLlxuICAgICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICE9PSBudWxsICYmIHR5cGVvZiBlbXB0eUhUTUwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAgIC8vIE5vdCBhdmFpbGFibGUgaW4gSUU4LCBTYWZhcmkgNSwgZXRjLlxuICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICBmcmVlemUoY2ZnKTtcbiAgICAgIH1cbiAgICAgIENPTkZJRyA9IGNmZztcbiAgICB9O1xuICAgIGNvbnN0IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ21pJywgJ21vJywgJ21uJywgJ21zJywgJ210ZXh0J10pO1xuICAgIGNvbnN0IEhUTUxfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnZm9yZWlnbm9iamVjdCcsICdkZXNjJywgJ3RpdGxlJywgJ2Fubm90YXRpb24teG1sJ10pO1xuXG4gICAgLy8gQ2VydGFpbiBlbGVtZW50cyBhcmUgYWxsb3dlZCBpbiBib3RoIFNWRyBhbmQgSFRNTFxuICAgIC8vIG5hbWVzcGFjZS4gV2UgbmVlZCB0byBzcGVjaWZ5IHRoZW0gZXhwbGljaXRseVxuICAgIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25lb3VzbHkgZGVsZXRlZCBmcm9tXG4gICAgLy8gSFRNTCBuYW1lc3BhY2UuXG4gICAgY29uc3QgQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UUyA9IGFkZFRvU2V0KHt9LCBbJ3RpdGxlJywgJ3N0eWxlJywgJ2ZvbnQnLCAnYScsICdzY3JpcHQnXSk7XG5cbiAgICAvKiBLZWVwIHRyYWNrIG9mIGFsbCBwb3NzaWJsZSBTVkcgYW5kIE1hdGhNTCB0YWdzXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgICAqIGNvcnJlY3RseS4gKi9cbiAgICBjb25zdCBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgWy4uLnN2ZyQxLCAuLi5zdmdGaWx0ZXJzLCAuLi5zdmdEaXNhbGxvd2VkXSk7XG4gICAgY29uc3QgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIFsuLi5tYXRoTWwkMSwgLi4ubWF0aE1sRGlzYWxsb3dlZF0pO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCBhIERPTSBlbGVtZW50IHdob3NlIG5hbWVzcGFjZSBpcyBiZWluZyBjaGVja2VkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYVxuICAgICAqICBuYW1lc3BhY2UgdGhhdCBhIHNwZWMtY29tcGxpYW50IHBhcnNlciB3b3VsZCBuZXZlclxuICAgICAqICByZXR1cm4uIFJldHVybiB0cnVlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBjb25zdCBfY2hlY2tWYWxpZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIF9jaGVja1ZhbGlkTmFtZXNwYWNlKGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgICAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgICBwYXJlbnQgPSB7XG4gICAgICAgICAgbmFtZXNwYWNlVVJJOiBOQU1FU1BBQ0UsXG4gICAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gICAgICBjb25zdCBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuICAgICAgaWYgKCFBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gU1ZHXG4gICAgICAgIC8vIGlzIHZpYSA8c3ZnPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2Zyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gTWF0aE1MIHRvIFNWRyBpcyB2aWFgXG4gICAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIE1hdGhNTFxuICAgICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIE1hdGhNTCBpcyB2aWFcbiAgICAgICAgLy8gPG1hdGg+IGFuZCBIVE1MIGludGVncmF0aW9uIHBvaW50c1xuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCcgJiYgSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gTWF0aE1MXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gTWF0aE1MIG5hbWVzcGFjZS5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBIVE1MIGlzIHZpYVxuICAgICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgICAgLy8gaXMgdmlhIE1hdGhNTCB0ZXh0IGludGVncmF0aW9uIHBvaW50c1xuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJiAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UgJiYgIU1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKENPTU1PTl9TVkdfQU5EX0hUTUxfRUxFTUVOVFNbdGFnTmFtZV0gfHwgIUFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZvciBYSFRNTCBhbmQgWE1MIGRvY3VtZW50cyB0aGF0IHN1cHBvcnQgY3VzdG9tIG5hbWVzcGFjZXNcbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcGxhY2UgKHRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgICAvLyBIVE1MLCBTVkcsIE1hdGhNTCBvciBhbGxvd2VkIHZpYSBBTExPV0VEX05BTUVTUEFDRVMpLlxuICAgICAgLy8gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICBjb25zdCBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGVsZW1lbnQ6IG5vZGVcbiAgICAgIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuICAgIGNvbnN0IF9yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIG5vZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICAgIGF0dHJpYnV0ZTogbm9kZS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICAgIGF0dHJpYnV0ZTogbnVsbCxcbiAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgIC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaW5pdERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgICAqL1xuICAgIGNvbnN0IF9pbml0RG9jdW1lbnQgPSBmdW5jdGlvbiBfaW5pdERvY3VtZW50KGRpcnR5KSB7XG4gICAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXG4gICAgICBsZXQgZG9jID0gbnVsbDtcbiAgICAgIGxldCBsZWFkaW5nV2hpdGVzcGFjZSA9IG51bGw7XG4gICAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nTWF0Y2goZGlydHksIC9eW1xcclxcblxcdCBdKy8pO1xuICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcbiAgICAgIH1cbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBSb290IG9mIFhIVE1MIGRvYyBtdXN0IGNvbnRhaW4geG1sbnMgZGVjbGFyYXRpb24gKHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveGh0bWwxL25vcm1hdGl2ZS5odG1sI3N0cmljdClcbiAgICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XG4gICAgICB9XG4gICAgICBjb25zdCBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgIC8qXG4gICAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcbiAgICAgICAqIERPTVBhcnNlciBub3Qgd29yayBmb3Igc3ZnIHdoZW4gaGFzIG11bHRpcGxlIHJvb3QgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5UGF5bG9hZCwgUEFSU0VSX01FRElBX1RZUEUpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuXG4gICAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAgICAgIGlmICghZG9jIHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KE5BTUVTUEFDRSwgJ3RlbXBsYXRlJywgbnVsbCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBJU19FTVBUWV9JTlBVVCA/IGVtcHR5SFRNTCA6IGRpcnR5UGF5bG9hZDtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIC8vIFN5bnRheCBlcnJvciBpZiBkaXJ0eVBheWxvYWQgaXMgaW52YWxpZCB4bWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVhZGluZ1doaXRlc3BhY2UpLCBib2R5LmNoaWxkTm9kZXNbMF0gfHwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE5vZGVJdGVyYXRvciBvYmplY3QgdGhhdCB5b3UgY2FuIHVzZSB0byB0cmF2ZXJzZSBmaWx0ZXJlZCBsaXN0cyBvZiBub2RlcyBvciBlbGVtZW50cyBpbiBhIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gcm9vdCBUaGUgcm9vdCBlbGVtZW50IG9yIG5vZGUgdG8gc3RhcnQgdHJhdmVyc2luZyBvbi5cbiAgICAgKiBAcmV0dXJuIHtOb2RlSXRlcmF0b3J9IFRoZSBjcmVhdGVkIE5vZGVJdGVyYXRvclxuICAgICAqL1xuICAgIGNvbnN0IF9jcmVhdGVOb2RlSXRlcmF0b3IgPSBmdW5jdGlvbiBfY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaXNDbG9iYmVyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgICAqL1xuICAgIGNvbnN0IF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgKHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbicgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0uaW5zZXJ0QmVmb3JlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uaGFzQ2hpbGROb2RlcyAhPT0gJ2Z1bmN0aW9uJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBET00gbm9kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IG9iamVjdCBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAgICovXG4gICAgY29uc3QgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIE5vZGUgPT09ICdmdW5jdGlvbicgJiYgb2JqZWN0IGluc3RhbmNlb2YgTm9kZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2V4ZWN1dGVIb29rXG4gICAgICogRXhlY3V0ZSB1c2VyIGNvbmZpZ3VyYWJsZSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSBub2RlIHRvIHdvcmsgb24gd2l0aCB0aGUgaG9va1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIGNvbnN0IF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcnJheUZvckVhY2goaG9va3NbZW50cnlQb2ludF0sIGhvb2sgPT4ge1xuICAgICAgICBob29rLmNhbGwoRE9NUHVyaWZ5LCBjdXJyZW50Tm9kZSwgZGF0YSwgQ09ORklHKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVFbGVtZW50c1xuICAgICAqXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICAgKiBAcHJvdGVjdCB0ZXh0Q29udGVudFxuICAgICAqIEBwcm90ZWN0IHJlbW92ZUNoaWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICAgKiBAcmV0dXJuICB7Qm9vbGVhbn0gdHJ1ZSBpZiBub2RlIHdhcyBraWxsZWQsIGZhbHNlIGlmIGxlZnQgYWxpdmVcbiAgICAgKi9cbiAgICBjb25zdCBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSB7XG4gICAgICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgLyogQ2hlY2sgaWYgZWxlbWVudCBpcyBjbG9iYmVyZWQgb3IgY2FuIGNsb2JiZXIgKi9cbiAgICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgICBjb25zdCB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUVsZW1lbnQnLCBjdXJyZW50Tm9kZSwge1xuICAgICAgICB0YWdOYW1lLFxuICAgICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTXG4gICAgICB9KTtcblxuICAgICAgLyogRGV0ZWN0IG1YU1MgYXR0ZW1wdHMgYWJ1c2luZyBuYW1lc3BhY2UgY29uZnVzaW9uICovXG4gICAgICBpZiAoY3VycmVudE5vZGUuaGFzQ2hpbGROb2RlcygpICYmICFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLmlubmVySFRNTCkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG4gICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGEgY3VzdG9tIGVsZW1lbnQgdG8gaGFuZGxlICovXG4gICAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2lzQmFzaWNDdXN0b21FbGVtZW50KHRhZ05hbWUpKSB7XG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgaWYgKGNoaWxkTm9kZXMgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb3VudCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZU5vZGUoY2hpbGROb2Rlc1tpXSwgdHJ1ZSksIGdldE5leHRTaWJsaW5nKGN1cnJlbnROb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIE1ha2Ugc3VyZSB0aGF0IG9sZGVyIGJyb3dzZXJzIGRvbid0IGdldCBmYWxsYmFjay10YWcgbVhTUyAqL1xuICAgICAgaWYgKCh0YWdOYW1lID09PSAnbm9zY3JpcHQnIHx8IHRhZ05hbWUgPT09ICdub2VtYmVkJyB8fCB0YWdOYW1lID09PSAnbm9mcmFtZXMnKSAmJiByZWdFeHBUZXN0KC88XFwvbm8oc2NyaXB0fGVtYmVkfGZyYW1lcykvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICAgIGNvbnRlbnQgPSBjdXJyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgYXJyYXlGb3JFYWNoKFtNVVNUQUNIRV9FWFBSLCBFUkJfRVhQUiwgVE1QTElUX0VYUFJdLCBleHByID0+IHtcbiAgICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBleHByLCAnICcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgICBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbGNUYWcgTG93ZXJjYXNlIHRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIGNvbnN0IF9pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAgIC8qIE1ha2Ugc3VyZSBhdHRyaWJ1dGUgY2Fubm90IGNsb2JiZXIgKi9cbiAgICAgIGlmIChTQU5JVElaRV9ET00gJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiYgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgICAgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI2VtYmVkZGluZy1jdXN0b20tbm9uLXZpc2libGUtZGF0YS13aXRoLXRoZS1kYXRhLSotYXR0cmlidXRlcylcbiAgICAgICAgICBYTUwtY29tcGF0aWJsZSAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN4bWwtY29tcGF0aWJsZSBhbmQgaHR0cDovL3d3dy53My5vcmcvVFIveG1sLyNkMGU4MDQpXG4gICAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgICAgaWYgKEFMTE9XX0RBVEFfQVRUUiAmJiAhRk9SQklEX0FUVFJbbGNOYW1lXSAmJiByZWdFeHBUZXN0KERBVEFfQVRUUiwgbGNOYW1lKSkgOyBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIsIGxjTmFtZSkpIDsgZWxzZSBpZiAoIUFMTE9XRURfQVRUUltsY05hbWVdIHx8IEZPUkJJRF9BVFRSW2xjTmFtZV0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgICAvLyBiKSBpZiB0aGUgdGFnTmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICAvLyBhbmQgYykgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrXG4gICAgICAgIF9pc0Jhc2ljQ3VzdG9tRWxlbWVudChsY1RhZykgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgbGNUYWcpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayhsY1RhZykpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2ssIGxjTmFtZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKGxjTmFtZSkpIHx8XG4gICAgICAgIC8vIEFsdGVybmF0aXZlLCBzZWNvbmQgY29uZGl0aW9uIGNoZWNrcyBpZiBpdCdzIGFuIGBpc2AtYXR0cmlidXRlLCBBTkRcbiAgICAgICAgLy8gdGhlIHZhbHVlIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIGxjTmFtZSA9PT0gJ2lzJyAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdmFsdWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh2YWx1ZSkpKSA7IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICAgIH0gZWxzZSBpZiAoVVJJX1NBRkVfQVRUUklCVVRFU1tsY05hbWVdKSA7IGVsc2UgaWYgKHJlZ0V4cFRlc3QoSVNfQUxMT1dFRF9VUkkkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFLCAnJykpKSA7IGVsc2UgaWYgKChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJiBsY1RhZyAhPT0gJ3NjcmlwdCcgJiYgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIDsgZWxzZSBpZiAoQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiYgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKSkgOyBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc0Jhc2ljQ3VzdG9tRWxlbWVudFxuICAgICAqIGNoZWNrcyBpZiBhdCBsZWFzdCBvbmUgZGFzaCBpcyBpbmNsdWRlZCBpbiB0YWdOYW1lLCBhbmQgaXQncyBub3QgdGhlIGZpcnN0IGNoYXJcbiAgICAgKiBmb3IgbW9yZSBzb3BoaXN0aWNhdGVkIGNoZWNraW5nIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3ZhbGlkYXRlLWVsZW1lbnQtbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgdGFnIG5hbWUgbWVldHMgdGhlIGJhc2ljIGNyaXRlcmlhIGZvciBhIGN1c3RvbSBlbGVtZW50LCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgY29uc3QgX2lzQmFzaWNDdXN0b21FbGVtZW50ID0gZnVuY3Rpb24gX2lzQmFzaWNDdXN0b21FbGVtZW50KHRhZ05hbWUpIHtcbiAgICAgIHJldHVybiB0YWdOYW1lICE9PSAnYW5ub3RhdGlvbi14bWwnICYmIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuICAgIGNvbnN0IF9zYW5pdGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKSB7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXR0cmlidXRlc1xuICAgICAgfSA9IGN1cnJlbnROb2RlO1xuXG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG4gICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaG9va0V2ZW50ID0ge1xuICAgICAgICBhdHRyTmFtZTogJycsXG4gICAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICAgIGtlZXBBdHRyOiB0cnVlLFxuICAgICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgICB9O1xuICAgICAgbGV0IGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDtcblxuICAgICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cbiAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZXNbbF07XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIG5hbWVzcGFjZVVSSSxcbiAgICAgICAgICB2YWx1ZTogYXR0clZhbHVlXG4gICAgICAgIH0gPSBhdHRyO1xuICAgICAgICBjb25zdCBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhuYW1lKTtcbiAgICAgICAgbGV0IHZhbHVlID0gbmFtZSA9PT0gJ3ZhbHVlJyA/IGF0dHJWYWx1ZSA6IHN0cmluZ1RyaW0oYXR0clZhbHVlKTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcbiAgICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgICAgIGlmICghQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSICYmIHJlZ0V4cFRlc3QoL1xcLz4vaSwgdmFsdWUpKSB7XG4gICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgICBhcnJheUZvckVhY2goW01VU1RBQ0hFX0VYUFIsIEVSQl9FWFBSLCBUTVBMSVRfRVhQUl0sIGV4cHIgPT4ge1xuICAgICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBleHByLCAnICcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG4gICAgICAgIGNvbnN0IGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogRnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIHZpYSBuYW1lc3BhY2UgaXNvbGF0aW9uLFxuICAgICAgICAgKiBQcmVmaXggaWQgYW5kIG5hbWUgYXR0cmlidXRlcyB3aXRoIGB1c2VyLWNvbnRlbnQtYFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKFNBTklUSVpFX05BTUVEX1BST1BTICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGlzIHZhbHVlXG4gICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgICAvLyBQcmVmaXggdGhlIHZhbHVlIGFuZCBsYXRlciByZS1jcmVhdGUgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBzYW5pdGl6ZWQgdmFsdWVcbiAgICAgICAgICB2YWx1ZSA9IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCArIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFuZGxlIGF0dHJpYnV0ZXMgdGhhdCByZXF1aXJlIFRydXN0ZWQgVHlwZXMgKi9cbiAgICAgICAgaWYgKHRydXN0ZWRUeXBlc1BvbGljeSAmJiB0eXBlb2YgdHJ1c3RlZFR5cGVzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdHJ1c3RlZFR5cGVzLmdldEF0dHJpYnV0ZVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSA7IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZShsY1RhZywgbGNOYW1lKSkge1xuICAgICAgICAgICAgICBjYXNlICdUcnVzdGVkSFRNTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRTY3JpcHRVUkwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJyYXlQb3AoRE9NUHVyaWZ5LnJlbW92ZWQpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgICAqL1xuICAgIGNvbnN0IF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgbGV0IHNoYWRvd05vZGUgPSBudWxsO1xuICAgICAgY29uc3Qgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlTm9kZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICAgIHdoaWxlIChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplU2hhZG93Tm9kZScsIHNoYWRvd05vZGUsIG51bGwpO1xuXG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhzaGFkb3dOb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogRGVlcCBzaGFkb3cgRE9NIGRldGVjdGVkICovXG4gICAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhzaGFkb3dOb2RlKTtcbiAgICAgIH1cblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTYW5pdGl6ZVxuICAgICAqIFB1YmxpYyBtZXRob2QgcHJvdmlkaW5nIGNvcmUgc2FuaXRhdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOb2RlfSBkaXJ0eSBzdHJpbmcgb3IgRE9NIG5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIG9iamVjdFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5KSB7XG4gICAgICBsZXQgY2ZnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGxldCBib2R5ID0gbnVsbDtcbiAgICAgIGxldCBpbXBvcnRlZE5vZGUgPSBudWxsO1xuICAgICAgbGV0IGN1cnJlbnROb2RlID0gbnVsbDtcbiAgICAgIGxldCByZXR1cm5Ob2RlID0gbnVsbDtcbiAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG4gICAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG5cbiAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGlydHkgPSBkaXJ0eS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFJldHVybiBkaXJ0eSBIVE1MIGlmIERPTVB1cmlmeSBjYW5ub3QgcnVuICovXG4gICAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgICB9XG5cbiAgICAgIC8qIEFzc2lnbiBjb25maWcgdmFycyAqL1xuICAgICAgaWYgKCFTRVRfQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgICAgfVxuXG4gICAgICAvKiBDbGVhbiB1cCByZW1vdmVkIGVsZW1lbnRzICovXG4gICAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgICAvKiBDaGVjayBpZiBkaXJ0eSBpcyBjb3JyZWN0bHkgdHlwZWQgZm9yIElOX1BMQUNFICovXG4gICAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBJTl9QTEFDRSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoZGlydHkubm9kZU5hbWUpO1xuICAgICAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3Jvb3Qgbm9kZSBpcyBmb3JiaWRkZW4gYW5kIGNhbm5vdCBiZSBzYW5pdGl6ZWQgaW4tcGxhY2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlydHkgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgICBlbGVtZW50cyBiZWluZyBzdHJpcHBlZCBieSB0aGUgcGFyc2VyICovXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KCc8IS0tLS0+Jyk7XG4gICAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcbiAgICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgIC8qIE5vZGUgaXMgYWxyZWFkeSBhIGJvZHksIHVzZSBhcyBpcyAqL1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltcG9ydGVkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIEV4aXQgZGlyZWN0bHkgaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRvICovXG4gICAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhU0FGRV9GT1JfVEVNUExBVEVTICYmICFXSE9MRV9ET0NVTUVOVCAmJlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgICAgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG5cbiAgICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cbiAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogUkVUVVJOX1RSVVNURURfVFlQRSA/IGVtcHR5SFRNTCA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG4gICAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuICAgICAgY29uc3Qgbm9kZUl0ZXJhdG9yID0gX2NyZWF0ZU5vZGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XG5cbiAgICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cblxuICAgICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG4gICAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcbiAgICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgICByZXR1cm5Ob2RlLmFwcGVuZENoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybk5vZGUgPSBib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCB8fCBBTExPV0VEX0FUVFIuc2hhZG93cm9vdG1vZGUpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICAgIGJ5IHRoZSBzcGVjcy5cbiAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgICB9XG4gICAgICBsZXQgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG5cbiAgICAgIC8qIFNlcmlhbGl6ZSBkb2N0eXBlIGlmIGFsbG93ZWQgKi9cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCAmJiBBTExPV0VEX1RBR1NbJyFkb2N0eXBlJ10gJiYgYm9keS5vd25lckRvY3VtZW50ICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgJiYgcmVnRXhwVGVzdChET0NUWVBFX05BTUUsIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUpKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gJzwhRE9DVFlQRSAnICsgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSArICc+XFxuJyArIHNlcmlhbGl6ZWRIVE1MO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBhcnJheUZvckVhY2goW01VU1RBQ0hFX0VYUFIsIEVSQl9FWFBSLCBUTVBMSVRfRVhQUl0sIGV4cHIgPT4ge1xuICAgICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgZXhwciwgJyAnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTCkgOiBzZXJpYWxpemVkSFRNTDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBzZXQgdGhlIGNvbmZpZ3VyYXRpb24gb25jZVxuICAgICAqIHNldENvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2ZnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogY2xlYXJDb25maWdcbiAgICAgKlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIENPTkZJRyA9IG51bGw7XG4gICAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAgICogaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0ciBBdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICAgIGlmICghQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKHRhZyk7XG4gICAgICBjb25zdCBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhhdHRyKTtcbiAgICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZEhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gcmVtb3ZlZChwb3BwZWQpIGhvb2tcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5UG9wKGhvb2tzW2VudHJ5UG9pbnRdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUhvb2tzID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVBbGxIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBob29rcyA9IHt9O1xuICAgIH07XG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuICB2YXIgcHVyaWZ5ID0gY3JlYXRlRE9NUHVyaWZ5KCk7XG5cbiAgcmV0dXJuIHB1cmlmeTtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVyaWZ5LmpzLm1hcFxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWlyLWRhdGVwaWNrZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fpci1kYXRlcGlja2VyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1DbGFzc1wiO1xuaW1wb3J0IHsgVG9kb1Byb2plY3RJdGVtIH0gZnJvbSBcIi4vdG9kb1Byb2plY3RDbGFzc1wiO1xuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdExpbmtzLFxuICBwb3B1bGF0ZUNvbnRlbnQsXG4gIGdldERhdGFQcm9qZWN0SWQsXG4gIGZpbmRBY3RpdmVQcm9qZWN0SWQsXG4gIGdldEVsZW1lbnRJZCxcbiAgc2FuaXRpemVVc2VyRGF0YSxcbiAgZ2V0RWxlbWVudEJ5RGF0YVByb2plY3RJZCxcbiAgYWRkQWN0aXZlQ2xhc3NUb0VsZW1lbnQsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHtcbiAgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUsXG4gIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlLFxuICBzdG9yYWdlQXZhaWxhYmxlLFxufSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLyogREVGQVVMVCBEQVRBIENSRUFUSU9OXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXG4vLyBDcmVhdGVzIGRlZmF1bHQgcHJvamVjdDEgKyB0b2RvIGl0ZW1cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFbGVtZW50cygpIHtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgVG9kb1Byb2plY3RJdGVtKFwiRGVmYXVsdCBQcm9qZWN0XCIsIHRydWUpO1xuICBjb25zdCBkZWZhdWx0SXRlbSA9IG5ldyBUb2RvSXRlbShcIjFcIiwgXCJEZWZhdWx0IFRhc2tcIik7XG4gIGRlZmF1bHRQcm9qZWN0LmFycmF5LnB1c2goZGVmYXVsdEl0ZW0pO1xuXG4gIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbn1cblxuLy8gRGVmYXVsdCBwcm9qZWN0IHZhcmlhYmxlc1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlRGVmYXVsdEVsZW1lbnRzKCk7XG5cbi8qIFBST0pFQ1QgREFUQSBNQU5BR0VNRU5UXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXG4vLyBBcnJheSB0aGF0IGhvbGRzIGFsbCBwcm9qZWN0IGl0ZW1zXG5leHBvcnQgY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIHByb2plY3RzQXJyYXlbXSBpcyBOT1QgZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2plY3RzQXJyYXlOb3RFbXB0eSgpIHtcbiAgcmV0dXJuIHByb2plY3RzQXJyYXkubGVuZ3RoID4gMDtcbn1cblxuLy8gQWRkcyBuZXcgcHJvamVjdCB0byBwcm9qZWN0c0FycnJheVtdXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0cyguLi5uZXdQcm9qZWN0cykge1xuICBuZXdQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICB9KTtcbn1cblxuLypcbkZpbmRzIGFuZCByZXR1cm5zIGEgcHJvamVjdCBpbiBwcm9qZWN0c0FycmF5W10gYnkgaXQncyBJRC5cblNhbWUgSUQgaXMgYWRkZWQgYXMgYXR0cmlidXRlIHRvIHByb2plY3QgYnV0dG9uIGFuZCB0b2RvIGl0ZW1cbiovXG5leHBvcnQgZnVuY3Rpb24gZmluZFByb2plY3RCeUlkKHByb2plY3RJZCkge1xuICByZXR1cm4gcHJvamVjdHNBcnJheS5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xufVxuXG4vLyBDcmVhdGVzIG5ldyBwcm9qZWN0IGZyb20gbmFtZSBzdHJpbmcgYW5kIHN0b3JlcyBpdCBpbiBwcm9qZWN0c0FycmF5W11cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRTdG9yZU5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBUb2RvUHJvamVjdEl0ZW0ocHJvamVjdE5hbWUpO1xuICBzdG9yZVByb2plY3RzKG5ld1Byb2plY3QpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0LmlkO1xufVxuXG4vLyBGaW5kcyB0aGUgYWN0aXZlIHByb2plY3QgYW5kIHJldHVybnMgaXRcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5cbiAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhY3RpdmVQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gIGlmIChpc1Byb2plY3RzQXJyYXlOb3RFbXB0eSkge1xuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgIT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXhPZlByb2plY3RJblByb2plY3RzQXJyYXkocHJvamVjdCkge1xuICByZXR1cm4gcHJvamVjdHNBcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IHByb2plY3QpO1xufVxuXG4vLyBTYW5pdGl6ZXMgaW5wdXQgdmFsdWUgYW5kIHN0b3JlcyBpdCBhcyBuZXcgbmFtZSBmb3IgdGhlIHByb2plY3RcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3ROYW1lKGV2ZW50KSB7XG4gIGNvbnN0IHNhbml0aXplZFZhbHVlID0gc2FuaXRpemVVc2VyRGF0YShldmVudC50YXJnZXQudmFsdWUpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBhY3RpdmVQcm9qZWN0Lm5hbWUgPSBzYW5pdGl6ZWRWYWx1ZTtcbn1cblxuLy8gR2V0IGFsbCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIHJlY29uc3RydWN0IHRoZW0gd2l0aCB0aGUgUHJvamVjdEl0ZW0gY2xhc3MgdG8gcmVlc3RhYmxpc2ggaW5oZXJpdGFuY2UsIG1ldGhvZHMsIGV0Yy5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbnN0cnVjdEFsbFByb2plY3RPYmplY3RzKHN0b3JlZFByb2plY3RzQXJyYXkpIHtcbiAgY29uc3QgbmV3UHJvamVjdHNBcnJheSA9IFtdO1xuXG4gIHN0b3JlZFByb2plY3RzQXJyYXkuZm9yRWFjaCgoc3RvcmVkUHJvamVjdCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFRvZG9Qcm9qZWN0SXRlbShcbiAgICAgIHN0b3JlZFByb2plY3QubmFtZSxcbiAgICAgIHN0b3JlZFByb2plY3QuYWN0aXZlXG4gICAgKTtcbiAgICBuZXdQcm9qZWN0LmFycmF5ID0gcmVjb25zdHJ1Y3RBbGxUb2RvSXRlbXMoc3RvcmVkUHJvamVjdC5hcnJheSk7XG5cbiAgICBuZXdQcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0c0FycmF5O1xufVxuXG4vLyBUYWtlcyB0aGUgY3VycmVudCBwcm9qZWN0cyBhcnJheSwgZW1wdGllcyBpdCBhbmQgcHVzaGVzIGFsbCBpdGVtcyBmcm9tIGEgbmV3IGFycmF5IG9udG8gaXRcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9sZEFycmF5QW5kUG9wdWxhdGVXaXRoTmV3SXRlbXMobmV3QXJyYXkpIHtcbiAgcHJvamVjdHNBcnJheS5zcGxpY2UoMCwgcHJvamVjdHNBcnJheS5sZW5ndGgpO1xuICBwcm9qZWN0c0FycmF5LnB1c2goLi4ubmV3QXJyYXkpO1xufVxuXG4vKiBUT0RPIElURU0gREFUQSBNQU5BR0VNRU5UXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlVG9kb0l0ZW1PYmplY3RzKCkge1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gIHJldHVybiBhY3RpdmVQcm9qZWN0LmFycmF5O1xufVxuXG4vLyBDcmVhdGVzIG5ldyB0b2RvIGl0ZW0gd2l0aCBkZWZhdWx0IG5hbWUgYW5kIGFkZHMgaXQgdG8gdGhlIGFjdGl2ZSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kU3RvcmVOZXdUb2RvSXRlbSgpIHtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgY29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW0oYWN0aXZlUHJvamVjdC5pZCwgXCJOZXcgVGFza1wiKTtcbiAgYWN0aXZlUHJvamVjdC5hcnJheS5wdXNoKG5ld1RvZG9JdGVtKTtcblxuICByZXR1cm4gbmV3VG9kb0l0ZW0uaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGFzVG9kb0l0ZW1zKHByb2plY3QpIHtcbiAgcmV0dXJuIHByb2plY3QuYXJyYXkubGVuZ3RoID4gMDtcbn1cblxuLy8gQ2hhbmdlcyB0aGUgdGl0bGUgb2YgYSB0b2RvIGl0ZW0gb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUb2RvSXRlbVRpdGxlKGV2ZW50KSB7XG4gIGNvbnN0IHNhbml0aXplZFZhbHVlID0gc2FuaXRpemVVc2VyRGF0YShldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICBjb25zdCBhY3RpdmVUb2RvSXRlbUlkID0gZ2V0RWxlbWVudElkKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcbiAgY29uc3QgYWN0aXZlVG9kb0l0ZW0gPSBmaW5kVG9kb0l0ZW1CeUlkKGFjdGl2ZVRvZG9JdGVtSWQpO1xuICBhY3RpdmVUb2RvSXRlbS50aXRsZSA9IHNhbml0aXplZFZhbHVlO1xufVxuXG4vLyBGaW5kcyBhIHRvZG8gaXRlbSBieSBpdCdzIElEIHdpdGhpbiBhbiBhY3RpdmUgcHJvamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUb2RvSXRlbUJ5SWQoaXRlbUlkKSB7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIHJldHVybiBhY3RpdmVQcm9qZWN0LmFycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XG59XG5cbi8vIFJlbW92ZXMgYSB0b2RvIGl0ZW0gYnkgaXQncyBJRCBmcm9tIGFuIGFjdGl2ZSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kb0l0ZW1CeUlkKGl0ZW1JZCkge1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBjb25zdCBpdGVtSW5kZXggPSBhY3RpdmVQcm9qZWN0LmFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaXRlbUlkKTtcbiAgYWN0aXZlUHJvamVjdC5hcnJheS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbn1cblxuLy8gU2F2ZXMgYSBkYXRlIHNlbGVjdGVkIHZpYSBkYXRlcGlja2VyIGluIHRoZSB0b2RvIGl0ZW0gb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvZG9JdGVtRGF0ZSh0b2RvSXRlbUlkLCBkYXRlKSB7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIGNvbnN0IHRvZG9JdGVtID0gZmluZFRvZG9JdGVtQnlJZCh0b2RvSXRlbUlkKTtcblxuICB0b2RvSXRlbS5kdWVEYXRlID0gZGF0ZTtcbiAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgcG9wdWxhdGVDb250ZW50KGFjdGl2ZVByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25zdHJ1Y3RBbGxUb2RvSXRlbXMocHJvamVjdEFycmF5KSB7XG4gIGNvbnN0IG5ld1Byb2plY3RBcnJheSA9IFtdO1xuXG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChzdG9yZWRUb2RvSXRlbSkgPT4ge1xuICAgIGxldCBuZXdUb2RvSXRlbSA9IG5ldyBUb2RvSXRlbShcbiAgICAgIHN0b3JlZFRvZG9JdGVtLnByb2plY3RJZCxcbiAgICAgIHN0b3JlZFRvZG9JdGVtLnRpdGxlLFxuICAgICAgc3RvcmVkVG9kb0l0ZW0uZHVlRGF0ZSxcbiAgICAgIHN0b3JlZFRvZG9JdGVtLmNoZWNrZWQsXG4gICAgICBzdG9yZWRUb2RvSXRlbS5pZFxuICAgICk7XG5cbiAgICBuZXdQcm9qZWN0QXJyYXkucHVzaChuZXdUb2RvSXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0QXJyYXk7XG59XG4iLCJpbXBvcnQge1xuICBnZXRBY3RpdmVQcm9qZWN0LFxuICBnZXRBY3RpdmVUb2RvSXRlbU9iamVjdHMsXG4gIHByb2plY3RzQXJyYXksXG4gIHNhdmVUb2RvSXRlbURhdGUsXG59IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IEFpckRhdGVwaWNrZXIgZnJvbSBcImFpci1kYXRlcGlja2VyXCI7XG5pbXBvcnQgXCJhaXItZGF0ZXBpY2tlci9haXItZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCBsb2NhbGVFbiBmcm9tIFwiYWlyLWRhdGVwaWNrZXIvbG9jYWxlL2VuXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBlbXB0eVRvZG9MaXN0SW1hZ2UgZnJvbSBcIi4vaW1nL3VuZHJhd19ub19kYXRhX3JlX2t3Ymwuc3ZnXCI7XG5pbXBvcnQgZW1wdHlQcm9qZWN0c0FycmF5SW1hZ2UgZnJvbSBcIi4vaW1nL3VuZHJhd19hZGRfZmlsZXNfcmVfdjA5Zy5zdmdcIjtcblxuLypcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkRPTSBFTEVNRU5UIFNFTEVDVElPTlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2R5KCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCAudG9kby1jb250YWluZXJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF2KCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0TGlua3MoKSB7XG4gIGNvbnN0IG5hdiA9IGdldE5hdigpO1xuICByZXR1cm4gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pdGVtXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnRIZWFkbGluZUNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkbGluZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50SGVhZGxpbmUoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0l0ZW1zKCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8taXRlbVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdUYXNrQnV0dG9uKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1pdGVtXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1Byb2plY3RCdXR0b24oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbW92ZVByb2plY3RCdXR0b24oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92ZS1wcm9qZWN0XCIpO1xufVxuXG4vKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuTkFWIFVQREFURVMgKFByb2plY3QgTGlzdClcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG4vKlxuQWNjZXNzZXMgdGhlIHByb2plY3RzIGFycmF5LCB3cmFwcyBhbGwgcHJvcGVydGllcyBpbiBhIGRpdiBjb250YWluZXIgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIDxuYXY+LlxuVGhlIG5hbWUgcHJvcGVydHkgb2YgYWxsIHByb2plY3RzIGlzIHdyYXBwZWQgaW4gYSBzcGFuIHRhZyBhbmQgYW4gaW5wdXQgZmllbGQuIFRob3NlIGFyZSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoTmF2KCkge1xuICBjb25zdCBuYXYgPSBnZXROYXYoKTtcbiAgbmF2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUljb24oKTtcbiAgICBsZXQgc3BhbiA9IGNyZWF0ZVNwYW4ocHJvamVjdCk7XG4gICAgbGV0IGlucHV0ID0gY3JlYXRlSW5wdXRGaWVsZChwcm9qZWN0KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSk7XG59XG5cbi8qIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuQ09OVEVOVCBVUERBVEVTICh0b2RvIGl0ZW0gbGlzdClcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG4vKiBcbkRpc3BsYXlzIGFsbCB0b2RvIGl0ZW1zIGFzc29jaWF0ZWQgd2l0aCBhIHByb2plY3Qgb2JqZWN0IGluc2lkZSB0aGUgY29udGVudCBzZWN0aW9uLlxuQWxsIHByb3BlcnRpZXMgYXJlIHdyYXBwZWQgaW4gYSBkaXYgY29udGFpbmVyLlxuVGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBhcmUgd3JhcHBlZCBpbiBhIHNwYW4gdGFnIGFuZCBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQ29udGVudChwcm9qZWN0KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBwcm9qZWN0LmFycmF5LmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XG4gICAgY29uc3QgdG9kb0l0ZW1Db250YWluZXIgPSBjcmVhdGVUb2RvSXRlbUNvbnRhaW5lcih0b2RvSXRlbSk7XG4gICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGNyZWF0ZVRvZG9JdGVtRGF0ZUlucHV0KHRvZG9JdGVtLmlkKTtcblxuICAgIGNvbnN0IHRvZG9JdGVtQ2hlY2tDb21wbGV0ZSA9IGNyZWF0ZVRvZG9JdGVtQ2hlY2tDb21wbGV0ZSgpO1xuICAgIHRvZG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtQ2hlY2tDb21wbGV0ZSk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdG9kb0l0ZW0pIHtcbiAgICAgIC8qIFxuICAgICAgICBDaGVja3MgaWYgdGhlIGtleSBiZWxvbmdzIHRvIHRoZSBpdGVtJ3MgaW5zdGFuY2UgYW5kIHJlbmRlcnMgaXQgaW4gdGhlIERPTS5cbiAgICAgICAgSXQgYWxzbyBjaGVja3MgaWYgdGhlIGtleSBpcyBub3QgcGFydCBvZiB0aGUgaXNIaWRkZW5Qcm9wZXJ0eSBhcnJheS5cbiAgICAgICAgKi9cbiAgICAgIGlmICh0b2RvSXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0b2RvSXRlbS5pc0hpZGRlblByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgICAgY29uc3QgdG9kb0l0ZW1UaXRsZVdyYXBwZXIgPSBjcmVhdGVUb2RvSXRlbVRpdGxlV3JhcHBlcigpO1xuICAgICAgICAgIHRvZG9JdGVtVGl0bGVXcmFwcGVyLnRleHRDb250ZW50ID0gdG9kb0l0ZW1ba2V5XTtcbiAgICAgICAgICB0b2RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbVRpdGxlV3JhcHBlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICAgIGlmICh0b2RvSXRlbVtrZXldICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcbiAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQudmFsdWUgPSB0b2RvSXRlbVtrZXldO1xuXG4gICAgICAgICAgICBpZiAodG9kb0l0ZW1ba2V5XSA8IGRhdGUpIHtcbiAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZXhwaXJlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdG9kb0l0ZW1LZXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgdG9kb0l0ZW1LZXlXcmFwcGVyLnRleHRDb250ZW50ID0gdG9kb0l0ZW1ba2V5XTtcbiAgICAgICAgICB0b2RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbUtleVdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrcyBpZiBhIHRvZG8gaXRlbSBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImNoZWNrZWRcIikge1xuICAgICAgICBpZiAodG9kb0l0ZW1ba2V5XSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICB0b2RvSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EYXRlSW5wdXQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1Db250YWluZXIpO1xuICB9KTtcbiAgLyogfSBlbHNlIHtcbiAgICBzaG93RW1wdHlUb2RvTGlzdE1lc3NhZ2UoKTtcbiAgfSAqL1xuICByZW1vdmVEYXRlcGlja2Vyc0Zyb21Ub2RvSXRlbXMoKTtcbiAgYWRkRGF0ZXBpY2tlcnNUb1RvZG9JdGVtcygpO1xufVxuXG4vKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuRE9NIEVMRU1FTlQgQ1JFQVRJT05cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG4vLyBDcmVhdGVzIDxzcGFuPiB0aGF0IGNvbnRhaW5zIHRoZSBwcmplY3QgbmFtZVxuZnVuY3Rpb24gY3JlYXRlU3Bhbihwcm9qZWN0KSB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIHJldHVybiBzcGFuO1xufVxuXG4vLyBDcmVhdGVzIGljb24gdGhhdCByZXByZXNlbnRzIGFueSBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVJY29uKCkge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cbiAgaWNvbi50ZXh0Q29udGVudCA9IFwi4piwXCI7XG5cbiAgcmV0dXJuIGljb247XG59XG5cbi8vIENyZWF0ZXMgYW4gaW5wdXQgZmllbGQgYW5kIHNldHMgYSBwcm9qZWN0IG5hbWUgYXMgaXQncyB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlSW5wdXRGaWVsZChwcm9qZWN0KSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0Lm1heExlbmd0aCA9IFwiMzBcIjtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuLy8gQ3JlYXRlcyBhIGRpdiBjb250YWluZXIgZm9yIGEgcHJvamVjdFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuaWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vIENyZWF0ZXMgYSBkaXYgY29udGFpbmVyIGZvciBhIHRvZG8gaXRlbVxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1Db250YWluZXIodG9kb0l0ZW0pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdG9kb0l0ZW0ucHJvamVjdElkKTtcbiAgY29udGFpbmVyLmlkID0gdG9kb0l0ZW0uaWQ7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLypcbkNyZWF0ZXMgYSB3cmFwcGVyIGZvciBhIHRvZG8gaXRlbSB0aXRsZS5cbk1ha2VzIHRoZSB0aXRsZSBlZGl0YWJsZSBieSBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtVGl0bGVXcmFwcGVyKCkge1xuICBjb25zdCB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbV9fbmFtZVwiKTtcbiAgdGl0bGVXcmFwcGVyLmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xuICB0aXRsZVdyYXBwZXIudGFiSW5kZXggPSBcIjFcIjtcblxuICByZXR1cm4gdGl0bGVXcmFwcGVyO1xufVxuXG4vLyBDcmVhdGVzIGEgcmFkaW8gYnV0dG9uIHRvIG1hcmsgYSB0b2RvIGl0ZW0gYXMgY29tcGxldGVcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtQ2hlY2tDb21wbGV0ZSgpIHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjaGVja21hcmstY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2hlY2ttYXJrXCIpO1xuXG4gIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG4vLyBDcmVhdGVzIGEgZGF0ZSBpbnB1dCBmaWVsZCB0byBhdHRhY2ggdGhlIEFpckRhdGVwaWNrZXJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtRGF0ZUlucHV0KGlkKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gXCJObyBkYXRlIHNlbGVjdGVkXCI7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoYGRhdGVwaWNrZXItJHtpZH1gKTtcblxuICByZXR1cm4gaW5wdXQ7XG59XG5cbmNvbnN0IGRhdGVwaWNrZXJJbnN0YW5jZXMgPSBbXTtcblxuLypcbkNyZWF0ZXMgYW4gQWlyRGF0ZXBpY2tlciBpbnN0YW5jZS5cbkEgZGF0ZSBzZWxlY3RlZCB2aWEgdGhlIHBpY2tlciBpcyBzdG9yZWQgaW4gdGhlIHRvZG8gaXRlbSBkdWVEYXRlIHByb3BlcnR5LlxuSWYgZHVlRGF0ZSBpc24ndCBkZWZpbmVkLCBubyBkYXRlIHdpbGwgYmUgcHJlc2VsZWN0ZWQuXG5AcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgSUQgb2YgdGhlIHRvZG8gaXRlbSB0aGUgZGF0ZXBpY2tlciB3aWxsIGJlIGF0dGFjaGVkLlxuQHBhcmFtIHtzdHJpbmd9IGR1ZURhdGUgLSBPcHRpb25hbCBkYXRlIGlmIHByb3ZpZGVkIGlzIHByZXNlbGVjdGVkIGluIHRoZSBkYXRlcGlja2VyLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGVQaWNrZXJPYmplY3QoaWQsIGR1ZURhdGUpIHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGxvY2FsZTogbG9jYWxlRW4sXG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1NTS1kZFwiLFxuICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxuICAgIC8vIEZpcmVzIHdoZW4gdXNlciBzZWxlY3RzIGEgZGF0ZSBpbiB0aGUgZGF0ZXBpY2tlclxuICAgIG9uU2VsZWN0OiAoeyBkYXRlLCBmb3JtYXR0ZWREYXRlIH0pID0+IHtcbiAgICAgIC8vIFNhdmVzIHRoZSBzZWxlY3RlZCBkYXRlIGluIHRoZSB0b2RvIGl0ZW0ncyBkdWVEYXRlIHByb3BlcnR5XG4gICAgICBpZiAoZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNhdmVUb2RvSXRlbURhdGUoaWQsIGZvcm1hdHRlZERhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGlkZSB0aGUgZGF0ZXBpY2tlciBpZiBhIGRhdGUgd2FzIGRlc2VsZWN0ZWQgKHJldHVybnMgdW5kZWZpbmVkKVxuICAgICAgICBkYXRlcGlja2VyLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIC8vIElmIGR1ZURhdGUgaGFzIGJlZW4gc2V0LCBwcmVzZWxlY3QgdGhpcyBkYXRlIGluIHRoZSBkYXRlcGlja2VyXG4gIGlmIChkdWVEYXRlKSB7XG4gICAgY29uZmlnLnNlbGVjdGVkRGF0ZXMgPSBbZHVlRGF0ZV07XG4gIH1cblxuICAvLyBDcmVhdGUgYSBuZXcgZGF0ZXBpY2tlciBpbnN0YW5jZSB3aXRoIHRoZSBhYm92ZSBjb25maWcgc2V0dGluZ3NcbiAgY29uc3QgZGF0ZXBpY2tlciA9IG5ldyBBaXJEYXRlcGlja2VyKGAuZGF0ZXBpY2tlci0ke2lkfWAsIGNvbmZpZyk7XG5cbiAgZGF0ZXBpY2tlckluc3RhbmNlcy5wdXNoKGRhdGVwaWNrZXIpO1xuXG4gIHJldHVybiBkYXRlcGlja2VyO1xufVxuXG4vLyBBdHRhY2hlcyBhIGRhdGVwaWNrZXIgdG8gdGhlIHRvZG8gaXRlbXMgaW4gdGhlIERPTVxuZnVuY3Rpb24gYWRkRGF0ZXBpY2tlcnNUb1RvZG9JdGVtcygpIHtcbiAgY29uc3QgdG9kb0l0ZW1zID0gZ2V0QWN0aXZlVG9kb0l0ZW1PYmplY3RzKCk7XG5cbiAgdG9kb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVEYXRlUGlja2VyT2JqZWN0KGl0ZW0uaWQsIGl0ZW0uZHVlRGF0ZSk7XG4gIH0pO1xufVxuXG4vLyBSZW1vdmVzIGRhdGVwaWNrZXJzIGZyb20gdGhlIHRvZG8gaXRlbXMgaW4gdGhlIERPTVxuZnVuY3Rpb24gcmVtb3ZlRGF0ZXBpY2tlcnNGcm9tVG9kb0l0ZW1zKCkge1xuICBkYXRlcGlja2VySW5zdGFuY2VzLmxlbmd0aCA9IDA7XG59XG5cbi8vIENyZWF0ZXMgYSBtb2RhbCBib3ggdG8gY29uZmlybSByZW1vdmluZyBwcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsQm94KCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldENvbnRlbnRIZWFkbGluZSgpLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxCb3guY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJveFwiKTtcbiAgbW9kYWxPdmVybGF5LmFwcGVuZENoaWxkKG1vZGFsQm94KTtcblxuICBjb25zdCBtb2RhbEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBtb2RhbEhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJSZW1vdmUgUHJvamVjdFwiO1xuICBtb2RhbEJveC5hcHBlbmRDaGlsZChtb2RhbEhlYWRsaW5lKTtcblxuICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW9kYWxUZXh0LmlubmVySFRNTCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlICR7cHJvamVjdE5hbWV9P2A7XG4gIG1vZGFsQm94LmFwcGVuZENoaWxkKG1vZGFsVGV4dCk7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxCb3guYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbmZpcm1cIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNhbmNlbFwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgcmV0dXJuIG1vZGFsT3ZlcmxheTtcbn1cblxuLy8gQ3JlYXRlcyBhIHBsYWNlaG9sZGVyIG1lc3NhZ2Ugd2l0aCBpbWFnZSArIHRleHRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGFjZWhvbGRlcldpdGhJbWFnZShpbWcsIG1lc3NhZ2UpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS10b2RvLWxpc3RcIik7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBpbWc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vIENyZWF0ZXMgYSBwbGFjZWhvbGRlciBtZXNzYWdlIHdoZW4gdGhlcmUgYXJlIG5vIHRvZG8gaXRlbXNcbmV4cG9ydCBmdW5jdGlvbiBzaG93RW1wdHlUb2RvTGlzdE1lc3NhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVQbGFjZWhvbGRlcldpdGhJbWFnZShcbiAgICBlbXB0eVRvZG9MaXN0SW1hZ2UsXG4gICAgXCJUaGVyZSBhcmUgbm8gYWN0aXZlIHRvZG8gaXRlbXMuXCJcbiAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xufVxuXG4vLyBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgbWVzc2FnZSB3aGVuIHRoZXJlIGFyZSBubyBwcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVByb2plY3RzQXJyYXlNZXNzYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICBjb25zdCBtZXNzYWdlID0gY3JlYXRlUGxhY2Vob2xkZXJXaXRoSW1hZ2UoXG4gICAgZW1wdHlQcm9qZWN0c0FycmF5SW1hZ2UsXG4gICAgXCJTdGFydCBieSBhZGRpbmcgYSBwcm9qZWN0LlwiXG4gICk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhpZ2hsaWdodENsYXNzVG9OZXdQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZ2V0TmV3UHJvamVjdEJ1dHRvbigpO1xuXG4gIGlmICghbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWdobGlnaHRlZFwiKSkge1xuICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaWdobGlnaHRDbGFzc0Zyb21OZXdQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZ2V0TmV3UHJvamVjdEJ1dHRvbigpO1xuXG4gIGlmIChuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImhpZ2hsaWdodGVkXCIpKSB7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH1cbn1cblxuLypcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkRPTSBFTEVNRU5UIE1BTklQVUxBVElPTlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbi8vIFJlbW92ZXMgYWxsIFwiYWN0aXZlXCIgY2xhc3NlcyBmcm9tIHRoZSBsaW5rcyB0aGF0IHJlcHJlc2VudCB0aGUgcHJvamVjdCBvYmplY3RzXG5mdW5jdGlvbiByZW1vdmVBbGxBY3RpdmVDbGFzc2VzKCkge1xuICBjb25zdCBwcm9qZWN0TGlua3MgPSBnZXRQcm9qZWN0TGlua3MoKTtcbiAgcHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59XG5cbi8vIEFkZHMgdGhlIGNsYXNzIFwiYWN0aXZlXCIgdG8gYSBsaW5rIHRoYXQgcmVwcmVzZW50cyBhIHByb2plY3Qgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3NUb0VsZW1lbnQoaHRtbEVsZW1lbnQpIHtcbiAgcmVtb3ZlQWxsQWN0aXZlQ2xhc3NlcygpO1xuICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3NUb0FjdGl2ZVByb2plY3QoKSB7XG4gIGlmIChnZXRBY3RpdmVQcm9qZWN0KCkgIT09IG51bGwpIHtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RMaW5rID0gZ2V0RWxlbWVudEJ5RGF0YVByb2plY3RJZChhY3RpdmVQcm9qZWN0LmlkKTtcblxuICAgIGFkZEFjdGl2ZUNsYXNzVG9FbGVtZW50KGFjdGl2ZVByb2plY3RMaW5rKTtcblxuICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICB9XG59XG5cbi8vIFNldHMgdGhlIGhlYWRsaW5lIGFib3ZlIHRoZSB0b2RvIGl0ZW1zIHRvIHRoZSB0aXRsZSBwcm9wZXJ0eSBvZiB0aGUgYWN0aXZlIHByb2plY3Qgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29udGVudEhlYWRsaW5lKHByb2plY3QpIHtcbiAgY29uc3QgaGVhZGxpbmUgPSBnZXRDb250ZW50SGVhZGxpbmUoKTtcblxuICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIlwiO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICBpZiAoaGVhZGxpbmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tcHJvamVjdFwiKSkge1xuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wcm9qZWN0XCIpO1xuICB9XG59XG5cbi8vIERpc3BsYXlzIGEgXCJObyBwcm9qZWN0IHNlbGVjdGVkXCIgbWVzc2FnZSBmb3IgdGhlIHByb2plY3QgcGFnZSB0aXRsZVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVBvamVjdFBhZ2VIZWFkbGluZSgpIHtcbiAgY29uc3QgaGVhZGxpbmUgPSBnZXRDb250ZW50SGVhZGxpbmUoKTtcblxuICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwibm8tcHJvamVjdFwiKTtcbn1cblxuLy8gRm9jdXNlcyB0aGUgcG9pbnRlciBvbiBhIHNwZWNpZmljIHRvZG8gZWxlbWVudCBpZGVudGlmaWVkIGJ5IGl0J3MgSUQgYW5kIGNsZWFycyBpdCdzIHRleHRDb250ZW50XG5leHBvcnQgZnVuY3Rpb24gZm9jdXNFbGVtZW50QW5kQ2xlYXJDb250ZW50KGlkKSB7XG4gIGNvbnN0IG5ld1RvZG9JdGVtID0gZ2V0VG9kb0l0ZW1OYW1lRmllbGRCeUlkKGlkKTtcbiAgbmV3VG9kb0l0ZW0uZm9jdXMoKTtcbiAgbmV3VG9kb0l0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG4vLyBHZXRzIHRoZSB2YWx1ZSBmcm9tIHRoZSBwcm9qZWN0IG5hbWUgaW5wdXQgZmllbGQsIHNhbml0aXplcyBpdCBhbmQgc2V0cyBpdCBhcyB0ZXh0Q29udGVudCBmb3IgdGhlIHByb2plY3RzIG5hbWVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TmFtZShldmVudCkge1xuICBjb25zdCBwcm9qZWN0TGluayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBuYW1lID0gcHJvamVjdExpbmsucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IHNhbml0aXplZFZhbHVlID0gc2FuaXRpemVVc2VyRGF0YShldmVudC50YXJnZXQudmFsdWUpO1xuXG4gIG5hbWUudGV4dENvbnRlbnQgPSBzYW5pdGl6ZWRWYWx1ZTtcbn1cblxuLy8gQWRkcyB0aGUgY2xhc3MgXCJkaXNhYmxlZFwiIHRvIHRoZSByZW1vdmUgcHJvamVjdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlUmVtb3ZlUHJvamVjdEJ1dHRvbigpIHtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGdldFJlbW92ZVByb2plY3RCdXR0b24oKTtcblxuICBpZiAoIXJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcbiAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgfVxufVxuXG4vLyBSZW1vdmVzIHRoZSBjbGFzcyBcImRpc2FibGVkXCIgZnJvbSB0aGUgcmVtb3ZlIHByb2plY3QgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlUmVtb3ZlUHJvamVjdEJ1dHRvbigpIHtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGdldFJlbW92ZVByb2plY3RCdXR0b24oKTtcblxuICBpZiAocmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xuICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICB9XG59XG5cbi8vIEFkZHMgdGhlIGNsYXNzIFwiZGlzYWJsZWRcIiB0byB0aGUgYWRkIG5ldyB0YXNrIGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVOZXdUYXNrQnV0dG9uKCkge1xuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZ2V0TmV3VGFza0J1dHRvbigpO1xuXG4gIGlmICghbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICB9XG59XG5cbi8vIFJlbW92ZXMgdGhlIGNsYXNzIFwiZGlzYWJsZWRcIiBmcm9tIHRoZSBhZGQgbmV3IHRhc2sgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTmV3VGFza0J1dHRvbigpIHtcbiAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGdldE5ld1Rhc2tCdXR0b24oKTtcblxuICBpZiAobmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICB9XG59XG5cbi8qIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuRE9NIEVMRU1FTlQgREFUQSBSRVRSSUVWQUxcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG4vLyBSZXRyaWV2ZXMgdGhlIGRhdGEtcHJvamVjdC1pZCBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVByb2plY3RJZChodG1sRWxlbWVudCkge1xuICByZXR1cm4gaHRtbEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xufVxuXG4vLyBSZXRyaWV2ZXMgYW4gZWxlbWVudCBieSBpdCdzIGRhdGEtcHJvamVjdC1pZFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeURhdGFQcm9qZWN0SWQoaWQpIHtcbiAgY29uc3QgYWxsUHJvamVjdExpbmtzID0gZ2V0UHJvamVjdExpbmtzKCk7XG4gIGxldCBwcm9qZWN0TGluayA9IG51bGw7XG5cbiAgYWxsUHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsZXQgZGF0YVByb2plY3RJZCA9IGdldERhdGFQcm9qZWN0SWQobGluayk7XG5cbiAgICBpZiAoZGF0YVByb2plY3RJZCA9PT0gaWQpIHtcbiAgICAgIHByb2plY3RMaW5rID0gbGluaztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0TGluaztcbn1cblxuLy8gUmV0cmlldmVzIHRoZSBJRCBmcm9tIGFuIEhUTUwgZWxlbWVudFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJZChodG1sRWxlbWVudCkge1xuICByZXR1cm4gaHRtbEVsZW1lbnQuaWQ7XG59XG5cbi8vIFJldHJpZXZlcyBIVE1MIGVsZW1lbnQgYnkgSURcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xufVxuXG4vLyBSZXRyaWV2ZXMgYW4gSFRNTCBlbGVtZW50IGJ5IGl0cyBJRFxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9JdGVtTmFtZUZpZWxkQnlJZChpZCkge1xuICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgcmV0dXJuIHRvZG9JdGVtLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1pdGVtX19uYW1lXCIpO1xufVxuXG4vLyBDaGVja3MgYWxsIGxpbmtzIHRoYXQgcmVmZXJlbmNlIHByb2plY3Qgb2JqZWN0cyBhbmQgcmV0dXJucyB0aGUgb25lIHRoYXQgaGFzIHRoZSBcImFjdGl2ZVwiIGNsYXNzLlxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBY3RpdmVQcm9qZWN0SWQoKSB7XG4gIGNvbnN0IHByb2plY3RMaW5rcyA9IGdldFByb2plY3RMaW5rcygpO1xuICBsZXQgYWN0aXZlUHJvamVjdElkID0gXCJcIjtcblxuICBwcm9qZWN0TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgYWN0aXZlUHJvamVjdElkID0gZ2V0RGF0YVByb2plY3RJZChsaW5rKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhY3RpdmVQcm9qZWN0SWQ7XG59XG5cbi8qIFxuUmVtb3ZlcyB0aGUgY2xhc3MgXCJoaWRlXCIgZnJvbSB0aGUgcHJvamVjdCBuYW1lIGlucHV0IGZpZWxkLCBtYWtpbmcgaXQgdmlzaWJsZS5cbkFkZHMgdGhlIGNsYXNzIFwiaGlkZVwiIHRvIHRoZSBwcm9qZWN0J1MgbmFtZSB3cmFwcGluZyBzcGFuIGF0IHRoZSBzYW1lIHRpbWUuXG5GaW5uYWxseSBzZWxlY3RzIHRoZSB0ZXh0IGluc2lkZSB0aGUgaW5wdXQgZmllbGQgZm9yIGNvbnZlbmllbmNlLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdElucHV0RmllbGQoZXZlbnQpIHtcbiAgY29uc3QgcHJvamVjdExpbmsgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgbmFtZSA9IHByb2plY3RMaW5rLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBpbnB1dCA9IHByb2plY3RMaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblxuICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgaW5wdXQuc2VsZWN0KCk7XG59XG5cbi8qIFxuQWRkcyB0aGUgY2xhc3MgXCJoaWRlXCIgdG8gdGhlIHByb2plY3QgbmFtZSBpbnB1dCBmaWVsZCwgdGh1cyBoaWRpbmcgaXQgZnJvbSBkaXNwbGF5LlxuUmVtb3ZlcyB0aGUgY2xhc3MgXCJoaWRlXCIgZnJvbSB0aGUgcHJvamVjdCdzIG5hbWUgd3JhcHBpbmcgc3BhbiBhdCB0aGUgc2FtZSB0aW1lLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUHJvamVjdElucHV0RmllbGQoZXZlbnQpIHtcbiAgY29uc3QgcHJvamVjdExpbmsgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgbmFtZSA9IHByb2plY3RMaW5rLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBpbnB1dCA9IHByb2plY3RMaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblxuICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbn1cblxuLy8gQ2hlY2tzIGlmIGFuIGV2ZW50IGhhcHBlbmVkIG9uIHRoZSB0aXRsZSBvZiBhIHRvZG8gaXRlbVxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kb0l0ZW1UaXRsZShldmVudCkge1xuICByZXR1cm4gZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIudG9kby1pdGVtX19uYW1lXCIpO1xufVxuXG4vLyBDaGVja3MgaWYgYW4gZXZlbnQgaGFwcGVuZWQgb24gLnByb2plY3QtaXRlbSBvciBhIGNoaWxkIG9mIC5wcm9qZWN0LWl0ZW1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2plY3RMaW5rKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50YXJnZXQubWF0Y2hlcyhcIi5wcm9qZWN0LWl0ZW1cIik7XG59XG5cbi8vIENoZWNrcyBpZiBldmVudC50YXJnZXQgaXMgdGhlIG5hbWUgb2YgYSBwcm9qZWN0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvamVjdE5hbWUoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QtaXRlbSBzcGFuXCIpO1xufVxuXG4vLyBDaGVja3MgaWYgZXZlbnQudGFyZ2V0IGlzIHRoZSBpbnB1dCBmaWVsZCBpbiBhIHByb2plY3QgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9qZWN0SW5wdXQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QtaXRlbSBpbnB1dFwiKTtcbn1cblxuLy8gQ2hlY2tzIGlmIHRoZSB0ZXh0Q29udGVudCBvZiBhbiBlbGVtZW50IGlzIGVtcHR5XG5leHBvcnQgZnVuY3Rpb24gaXNUZXh0Q29udGVudEVtcHR5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCI7XG59XG5cbi8qIERBVEEgSU5QVVRcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbi8vIFNhbml0aXplcyBkYXRhIGVudGVyZWQgYnkgdXNlcnMgdG8gcHJldmVudCBYU1MgYXR0YWNrc1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVXNlckRhdGEoZGF0YSkge1xuICByZXR1cm4gRE9NUHVyaWZ5LnNhbml0aXplKGRhdGEpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL2RhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRlc3QgPSBcInRlc3RcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXN0LCB0ZXN0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gIGlmIChpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9qZWN0c0FycmF5SW5TdG9yYWdlKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpICE9PSBudWxsO1xufVxuIiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgc3RhdGljIGhpZGRlblByb3BlcnRpZXMgPSBbXCJwcm9qZWN0SWRcIiwgXCJpZFwiLCBcImNoZWNrZWRcIl07IC8vIERlZmluZSBwcm9wZXJ0aWVzLCB0aGF0IHNob3VsZCBub3QgYmUgdmlzaWJsZSB0byB0aGUgcHVibGljXG4gIHN0YXRpYyBnbG9iYWxJZCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJvamVjdElkLCB0aXRsZSA9IFwiTmV3IFRhc2tcIiwgZHVlRGF0ZSA9IFwiXCIsIGNoZWNrZWQgPSBcImZhbHNlXCIpIHtcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIFRvZG9JdGVtLmdsb2JhbElkICs9IDE7IC8vIGluY3JlbWVudCBzdGF0aWMgdmFyaWFibGUgZ2xvYmFsSWQgd2l0aCBlYWNoIG5ldyBpbnN0YW5jZVxuICAgIHRoaXMuaWQgPSBUb2RvSXRlbS5nbG9iYWxJZC50b1N0cmluZygpOyAvLyBhc3NpZ25zIHVuaXF1ZSBpZCB0byBldmVyeSBuZXcgdG9kbyBpdGVtXG4gIH1cblxuICBpc0hpZGRlblByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIFRvZG9JdGVtLmhpZGRlblByb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpO1xuICB9XG59XG5cblRvZG9JdGVtLnByb3RvdHlwZS5yZXNldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRpdGxlID0gXCJOZXcgVGFza1wiO1xufTtcbiIsImV4cG9ydCBjbGFzcyBUb2RvUHJvamVjdEl0ZW0ge1xuICBzdGF0aWMgZ2xvYmFsSWQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSBcIk5ldyBQcm9qZWN0XCIsIGFjdGl2ZSA9IGZhbHNlKSB7XG4gICAgVG9kb1Byb2plY3RJdGVtLmdsb2JhbElkICs9IDE7XG4gICAgdGhpcy5pZCA9IFRvZG9Qcm9qZWN0SXRlbS5nbG9iYWxJZC50b1N0cmluZygpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tIFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4uLy4uL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMubWpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwienp6elwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgudHJ1bmMoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCksIDIpO1xuICBjb25zdCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImNvbnN0IGRheU9mWWVhclRva2VuUkUgPSAvXkQrJC87XG5jb25zdCB3ZWVrWWVhclRva2VuUkUgPSAvXlkrJC87XG5cbmNvbnN0IHRocm93VG9rZW5zID0gW1wiRFwiLCBcIkREXCIsIFwiWVlcIiwgXCJZWVlZXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gZGF5T2ZZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gd2Vla1llYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpO1xuICBjb25zb2xlLndhcm4oX21lc3NhZ2UpO1xuICBpZiAodGhyb3dUb2tlbnMuaW5jbHVkZXModG9rZW4pKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihfbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3Qgc3ViamVjdCA9IHRva2VuWzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0b2tlbi50b0xvd2VyQ2FzZSgpfVxcYCBpbnN0ZWFkIG9mIFxcYCR7dG9rZW59XFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nICR7c3ViamVjdH0gdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLy8gUmV4cG9ydHMgb2YgaW50ZXJuYWwgZm9yIGxpYnJhcmllcyB0byB1c2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzYzOCNpc3N1ZWNvbW1lbnQtMTg3NzA4Mjg3NFxuZXhwb3J0IHsgZm9ybWF0dGVycywgbG9uZ0Zvcm1hdHRlcnMgfTtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG5leHBvcnQgeyBmb3JtYXQgYXMgZm9ybWF0RGF0ZSB9O1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAYWxpYXMgZm9ybWF0RGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiLi9zdGFydE9mWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpIC0gK3N0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucyk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCBmaXJzdFdlZWtPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGZpcnN0V2VlayA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IF9kYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7XG4gIGdldE5hdixcbiAgZ2V0Q29udGVudCxcbiAgZ2V0UHJvamVjdExpbmtzLFxuICByZWZyZXNoTmF2LFxuICBwb3B1bGF0ZUNvbnRlbnQsXG4gIGdldERhdGFQcm9qZWN0SWQsXG4gIGdldEVsZW1lbnRJZCxcbiAgZm9jdXNFbGVtZW50QW5kQ2xlYXJDb250ZW50LFxuICBpc1RvZG9JdGVtVGl0bGUsXG4gIGlzVGV4dENvbnRlbnRFbXB0eSxcbiAgZ2V0TmV3VGFza0J1dHRvbixcbiAgZ2V0TmV3UHJvamVjdEJ1dHRvbixcbiAgaXNQcm9qZWN0TGluayxcbiAgaXNQcm9qZWN0TmFtZSxcbiAgaXNQcm9qZWN0SW5wdXQsXG4gIHVwZGF0ZVByb2plY3ROYW1lLFxuICBoaWRlUHJvamVjdElucHV0RmllbGQsXG4gIHNob3dQcm9qZWN0SW5wdXRGaWVsZCxcbiAgY3JlYXRlTW9kYWxCb3gsXG4gIGdldENvbnRlbnRIZWFkbGluZUNvbnRhaW5lcixcbiAgZ2V0Qm9keSxcbiAgc2hvd0VtcHR5UG9qZWN0UGFnZUhlYWRsaW5lLFxuICBkaXNhYmxlTmV3VGFza0J1dHRvbixcbiAgZGlzYWJsZVJlbW92ZVByb2plY3RCdXR0b24sXG4gIGVuYWJsZU5ld1Rhc2tCdXR0b24sXG4gIGVuYWJsZVJlbW92ZVByb2plY3RCdXR0b24sXG4gIHNob3dFbXB0eVRvZG9MaXN0TWVzc2FnZSxcbiAgYWRkSGlnaGxpZ2h0Q2xhc3NUb05ld1Byb2plY3RCdXR0b24sXG4gIHJlbW92ZUhpZ2hsaWdodENsYXNzRnJvbU5ld1Byb2plY3RCdXR0b24sXG4gIGFkZEFjdGl2ZUNsYXNzVG9BY3RpdmVQcm9qZWN0LFxuICB1cGRhdGVDb250ZW50SGVhZGxpbmUsXG4gIHNob3dFbXB0eVByb2plY3RzQXJyYXlNZXNzYWdlLFxufSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7XG4gIGlzUHJvamVjdHNBcnJheU5vdEVtcHR5LFxuICBmaW5kUHJvamVjdEJ5SWQsXG4gIGRlZmF1bHRQcm9qZWN0LFxuICBwcm9qZWN0c0FycmF5LFxuICBzdG9yZVByb2plY3RzLFxuICBjcmVhdGVBbmRTdG9yZU5ld1Byb2plY3QsXG4gIGNyZWF0ZUFuZFN0b3JlTmV3VG9kb0l0ZW0sXG4gIHN0b3JlVG9kb0l0ZW1UaXRsZSxcbiAgZmluZFRvZG9JdGVtQnlJZCxcbiAgcmVtb3ZlVG9kb0l0ZW1CeUlkLFxuICBzdG9yZVByb2plY3ROYW1lLFxuICByZWNvbnN0cnVjdEFsbFByb2plY3RPYmplY3RzLFxuICBlbXB0eU9sZEFycmF5QW5kUG9wdWxhdGVXaXRoTmV3SXRlbXMsXG4gIGdldEluZGV4T2ZQcm9qZWN0SW5Qcm9qZWN0c0FycmF5LFxuICBzZXRBY3RpdmVQcm9qZWN0LFxuICBnZXRBY3RpdmVQcm9qZWN0LFxuICBwcm9qZWN0SGFzVG9kb0l0ZW1zLFxufSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQge1xuICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlLFxuICBpc1Byb2plY3RzQXJyYXlJblN0b3JhZ2UsXG4gIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlLFxufSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLyogXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuQ09OVEVOVCBVUERBVEUgJiBSRUZSRVNIXG5DcmVhdGVzIHRoZSB0b2RvIGl0ZW1zIGFuZCBwcm9qZWN0cyxcbnNob3dzIHRoZSBoZWFkbGluZSwgYWRkcyBkYXRlcGlja2Vyc1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlcmUgYXJlIHByb2plY3RzIHRvIGRpc3BsYXlcbiAgaWYgKGlzUHJvamVjdHNBcnJheU5vdEVtcHR5KCkpIHtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gICAgLy8gQ2hlY2tzIGlmIGEgcHJvamVjdCBpcyBtYXJrZWQgYWN0aXZlIC0+IGlmIG5vdCBtYXJrIHRoZSBmaXJzdCBwcm9qZWN0IGluIHRoZSBhcnJheVxuICAgIGlmIChhY3RpdmVQcm9qZWN0ID09PSBudWxsKSB7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzQXJyYXlbMF0pO1xuICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBhZGRBY3RpdmVDbGFzc1RvQWN0aXZlUHJvamVjdCgpO1xuICAgIHVwZGF0ZUNvbnRlbnRIZWFkbGluZShhY3RpdmVQcm9qZWN0KTtcbiAgICBlbmFibGVOZXdUYXNrQnV0dG9uKCk7XG4gICAgZW5hYmxlUmVtb3ZlUHJvamVjdEJ1dHRvbigpO1xuICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzRnJvbU5ld1Byb2plY3RCdXR0b24oKTtcblxuICAgIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBhY3RpdmUgcHJvamVjdCBoYXMgdG9kbyBpdGVtc1xuICAgIGlmIChwcm9qZWN0SGFzVG9kb0l0ZW1zKGFjdGl2ZVByb2plY3QpKSB7XG4gICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dFbXB0eVRvZG9MaXN0TWVzc2FnZSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBwcm9qZWN0c0FycmF5W10gaXMgZW1wdHkgY2hhbmdlIHRoZSBsb29rIG9mIHRoZSBhcHBcbiAgICBzaG93RW1wdHlQcm9qZWN0c0FycmF5TWVzc2FnZSgpO1xuICAgIHNob3dFbXB0eVBvamVjdFBhZ2VIZWFkbGluZSgpO1xuICAgIGRpc2FibGVOZXdUYXNrQnV0dG9uKCk7XG4gICAgZGlzYWJsZVJlbW92ZVByb2plY3RCdXR0b24oKTtcbiAgICBhZGRIaWdobGlnaHRDbGFzc1RvTmV3UHJvamVjdEJ1dHRvbigpO1xuICB9XG59XG5cbi8qIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblBST0pFQ1QgQUNUSVZBVElPTlxuUmV0dXJucyBwcm9qZWN0IGZyb20gcHJvamVjdHNBcnJheVtdIGJ5IGl0J3MgSUQuXG5JRCBpcyByZXRyaWV2ZWQgZnJvbSBhIDxkaXY+IHJlZmVyZW5jaW5nIHRoZSBwcm9qZWN0J3MgbmFtZS5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3ROYXZpZ2F0aW9uKCkge1xuICBjb25zdCBuYXYgPSBnZXROYXYoKTtcblxuICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChpc1Byb2plY3RMaW5rKGV2ZW50KSkge1xuICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXREYXRhUHJvamVjdElkKHByb2plY3RMaW5rKTtcbiAgICAgIGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKHByb2plY3RJZCk7XG5cbiAgICAgIHNldEFjdGl2ZVByb2plY3QoY2xpY2tlZFByb2plY3QpO1xuICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblBST0pFQ1QgQ1JFQVRJT05cbkNyZWF0ZXMgbmV3IHByb2plY3QgdmlhIGNsaWNrIG9uIFwiTmV3IFByb2plY3RcIiBcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG4oZnVuY3Rpb24gaW5pdGlhbGl6ZU5ld1Byb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBnZXROZXdQcm9qZWN0QnV0dG9uKCk7XG4gIGNvbnN0IGJvZHkgPSBnZXRCb2R5KCk7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RJZCA9IGNyZWF0ZUFuZFN0b3JlTmV3UHJvamVjdCgpOyAvLyByZXR1cm5zIHRoZSBuZXcgcHJvamVjdCdzIElEXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGZpbmRQcm9qZWN0QnlJZChuZXdQcm9qZWN0SWQpO1xuXG4gICAgc2V0QWN0aXZlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJlZnJlc2hOYXYoKTtcbiAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgYm9keS5mb2N1cygpO1xuICB9KTtcbn0pKCk7XG5cbi8qIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuUFJPSkVDVCBOQU1FIElOVEVSQUNUSU9OXG5NYW5hZ2VzIHVzZXIgaW50ZXJhY3Rpb24vdXBkYXRlcyB0byBwcm9qZWN0IG5hbWUgXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZnVuY3Rpb24gaGFuZGxlUHJvamVjdE5hbWVJbnRlcmFjdGlvbigpIHtcbiAgY29uc3QgbmF2ID0gZ2V0TmF2KCk7XG5cbiAgLyogXG4gIEhpZGVzIG5hbWUgZmllbGQgJiBzaG93cyBpbnB1dCB3aGVuIGEgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQgJiBwcm9qZWN0IGlzIGFjdGl2ZS5cbiAgSWYgbm90IGFjdGl2ZSwgYSBjbGljayB3aWxsIGFjdGl2YXRlIHRoZSBwcm9qZWN0IChoYW5kbGVkIGJ5IGluaXRpYWxpemVQcm9qZWN0TmF2aWdhdGlvbigpKS5cbiAgVGhlIDxzcGFuPiB0aGF0IHdyYXBzIHRoZSBwcm9qZWN0IG5hbWUgaGFzIFwicG9pbnRlci1ldmVudHM6IG5vbmVcIiB3aGlsZSB0aGUgcHJvamVjdCBpcyBub3QgYWN0aXZlLlxuICAqL1xuICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGFsbFByb2plY3RMaW5rcyA9IGdldFByb2plY3RMaW5rcygpO1xuXG4gICAgaWYgKGlzUHJvamVjdExpbmsoZXZlbnQpKSB7XG4gICAgICBjb25zdCBwcm9qZWN0TGluayA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgYWxsUHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgLy8gSGlkZXMgbmFtZSAmIHNob3dzIGlucHV0IGZpZWxkIG9mIGFueSBwcm9qZWN0IG90aGVyIHRoYW4gZXZlbnQudGFyZ2V0XG4gICAgICAgIGlmIChsaW5rICE9PSBwcm9qZWN0TGluaykge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgICAgICAgIGNvbnN0IGlucHV0ID0gbGluay5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5cbiAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9qZWN0TmFtZShldmVudCkpIHtcbiAgICAgIHNob3dQcm9qZWN0SW5wdXRGaWVsZChldmVudCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTdG9yZXMgJiB1cGRhdGVzIGEgcHJvamVjdCBuYW1lIHdoZW4gYSB1c2VyIHVwZGF0ZXMgdGhlIGlucHV0IGZpZWxkLlxuICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIGlmIChpc1Byb2plY3RJbnB1dChldmVudCkpIHtcbiAgICAgIHN0b3JlUHJvamVjdE5hbWUoZXZlbnQpO1xuICAgICAgdXBkYXRlUHJvamVjdE5hbWUoZXZlbnQpO1xuICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qIFxuICBIaWRlcyB0aGUgaW5wdXQgZmllbGQgd2hlbiB0aGUgZm9jdXMgaXMgbG9zdC4gXG4gIFVwZGF0ZXMgdGhlIHJpZ2h0IGhhbmQgc2lkZSBjb250ZW50LCB0byByZWZsZWN0IGFueSBwb3NzaWJsZSB1cGRhdGVzIHRvIHRoZSBuYW1lLlxuICAqL1xuICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIChldmVudCkgPT4ge1xuICAgIGlmIChpc1Byb2plY3RJbnB1dChldmVudCkpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICAgIGlmIChhY3RpdmVQcm9qZWN0Lm5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdC5uYW1lID0gXCJVbm5hbWVkIFByb2plY3RcIjtcbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH1cblxuICAgICAgaGlkZVByb2plY3RJbnB1dEZpZWxkKGV2ZW50KTtcbiAgICAgIHJlZnJlc2hOYXYoKTtcbiAgICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNhbWUgZnVuY3Rpb25hbGl0eSBhcyBhYm92ZSBmb3IgRXNjYXBlICYgRW50ZXIga2V5LlxuICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgaXNQcm9qZWN0SW5wdXQoZXZlbnQpICYmXG4gICAgICAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKVxuICAgICkge1xuICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgICAgaWYgKGFjdGl2ZVByb2plY3QubmFtZSA9PT0gXCJcIikge1xuICAgICAgICBhY3RpdmVQcm9qZWN0Lm5hbWUgPSBcIlVubmFtZWQgUHJvamVjdFwiO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgfVxuXG4gICAgICBoaWRlUHJvamVjdElucHV0RmllbGQoZXZlbnQpO1xuICAgICAgcmVmcmVzaE5hdigpO1xuICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuUFJPSkVDVCBSRU1PVkFMXG5SZW1vdmVzIGEgcHJvamVjdCB3aGVuIGNsaWNraW5nIFwicmVtb3ZlXCIgbmV4dCB0byB0aGUgcHJvamVjdCdzIHBhZ2UgdGl0bGVcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG5mdW5jdGlvbiBpbml0aWFsaXplUmVtb3ZlUHJvamVjdEJ1dHRvbigpIHtcbiAgY29uc3QgYm9keSA9IGdldEJvZHkoKTtcbiAgY29uc3QgcHJvamVjdEhlYWRsaW5lQ29udGFpbmVyID0gZ2V0Q29udGVudEhlYWRsaW5lQ29udGFpbmVyKCk7XG5cbiAgcHJvamVjdEhlYWRsaW5lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNQcm9qZWN0c0FycmF5Tm90RW1wdHkoKSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLnJlbW92ZS1wcm9qZWN0XCIpKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQm94ID0gY3JlYXRlTW9kYWxCb3goKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbEJveCk7XG5cbiAgICAgICAgLy8gU2hvcnQgdGltZW91dCBzbyB0aGUgYnJvd3NlciByZWNvbmduaXplcyB0aGUgbmV3IGNsYXNzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xuICAgICAgICB9LCAyKTtcblxuICAgICAgICBpbml0aWFsaXplTW9kYWxCb3goKTtcbiAgICAgICAgYm9keS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVNb2RhbEJveCgpIHtcbiAgY29uc3QgbW9kYWxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gbW9kYWxCb3gucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jYW5jZWxcIik7XG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBtb2RhbEJveC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbmZpcm1cIik7XG5cbiAgY29uc3QgaGFuZGxlS2V5ZG93bkV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJbmRleCA9XG4gICAgICAgICAgZ2V0SW5kZXhPZlByb2plY3RJblByb2plY3RzQXJyYXkoYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaW5rcyA9IGdldFByb2plY3RMaW5rcygpO1xuXG4gICAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGFjdGl2ZVByb2plY3RJbmRleCwgMSk7IC8vIHJlbW92ZSB0aGUgYWN0aXZlIHByb2plY3QgZnJvbSB0aGUgcHJvamVjdHNBcnJheVtdXG4gICAgICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzQXJyYXlbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHJlZnJlc2hOYXYoKTtcbiAgICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgICAgfVxuICAgICAgbW9kYWxCb3gucmVtb3ZlKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlkb3duRXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBtb2RhbEJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxCb3ggJiYgZXZlbnQudGFyZ2V0ICE9PSBtb2RhbEJveC5maXJzdENoaWxkKSB7XG4gICAgICBtb2RhbEJveC5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleWRvd25FdmVudCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IGNhbmNlbEJ1dHRvbikge1xuICAgICAgbW9kYWxCb3gucmVtb3ZlKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlkb3duRXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb25maXJtQnV0dG9uKSB7XG4gICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgY29uc3QgYWN0aXZlUHJvamVjdEluZGV4ID1cbiAgICAgICAgZ2V0SW5kZXhPZlByb2plY3RJblByb2plY3RzQXJyYXkoYWN0aXZlUHJvamVjdCk7XG4gICAgICBjb25zdCBwcm9qZWN0TGlua3MgPSBnZXRQcm9qZWN0TGlua3MoKTtcblxuICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoYWN0aXZlUHJvamVjdEluZGV4LCAxKTsgLy8gcmVtb3ZlIHRoZSBhY3RpdmUgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0c0FycmF5W11cbiAgICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c0FycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICByZWZyZXNoTmF2KCk7XG4gICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgICBtb2RhbEJveC5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleWRvd25FdmVudCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlkb3duRXZlbnQpO1xufVxuXG4vKiBcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblRPRE8gSVRFTSBDUkVBVElPTlxuQ3JlYXRlcyBuZXcgdG9kbyBpdGVtIHZpYSBjbGljayBvbiBcIkFkZCBUYXNrXCIgXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZU5ld1Rhc2tCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBnZXROZXdUYXNrQnV0dG9uKCk7XG5cbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc1Byb2plY3RzQXJyYXlOb3RFbXB0eSgpKSB7XG4gICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgY29uc3QgbmV3VG9kb0l0ZW1JZCA9IGNyZWF0ZUFuZFN0b3JlTmV3VG9kb0l0ZW0oKTsgLy8gcmV0dXJucyB0aGUgbmV3IHRvZG8gaXRlbSdzIElEXG5cbiAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICBmb2N1c0VsZW1lbnRBbmRDbGVhckNvbnRlbnQobmV3VG9kb0l0ZW1JZCk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblRPRE8gSVRFTSBUSVRMRSBJTlRFUkFDVElPTlxuTWFuYWdlcyB1c2VyIGludGVyYWN0aW9uIHdpdGggYSB0b2RvIGl0ZW0gdGl0bGUgXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZnVuY3Rpb24gaGFuZGxlVG9kb0l0ZW1UaXRsZUludGVyYWN0aW9uKCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuXG4gIC8qIFxuICBTdG9yZXMgdXBkYXRlcyB0byBhIHRvZG8gaXRlbSB0aXRsZS5cbiAgRXhjZXB0aW9uczogXCJFbnRlclwiICYgXCJFc2NhcGVcIiAtPiBzZWUgYmVsb3cuIFxuICAqL1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNUb2RvSXRlbVRpdGxlKGV2ZW50KSkge1xuICAgICAgc3RvcmVUb2RvSXRlbVRpdGxlKGV2ZW50KTtcbiAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBVcGRhdGVzIGEgdG9kbyBpdGVtIHRpdGxlIHdoZW4gdGhlIGZvY3VzIGlzIGxvc3QuIFJlbW92ZXMgaXQgd2hlbiB0aXRsZSBpcyBlbXB0eS5cbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBjb25zdCB0b2RvSXRlbUlkID0gZ2V0RWxlbWVudElkKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcblxuICAgIGlmIChpc1RvZG9JdGVtVGl0bGUoZXZlbnQpKSB7XG4gICAgICBpZiAoaXNUZXh0Q29udGVudEVtcHR5KGV2ZW50KSkge1xuICAgICAgICByZW1vdmVUb2RvSXRlbUJ5SWQodG9kb0l0ZW1JZCk7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHBvcHVsYXRlQ29udGVudChhY3RpdmVQcm9qZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlVG9kb0l0ZW1UaXRsZShldmVudCk7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGVzIG5ldyB0b2RvIGl0ZW0gd2hlbiBFTlRFUiBpcyBwcmVzc2VkLiBSZW1vdmVzIGl0IHdoZW4gdGl0bGUgaXMgZW1wdHkuXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgdG9kb0l0ZW1JZCA9IGdldEVsZW1lbnRJZChldmVudC50YXJnZXQucGFyZW50Tm9kZSk7XG5cbiAgICBpZiAoaXNUb2RvSXRlbVRpdGxlKGV2ZW50KSAmJiBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaWYgKGlzVGV4dENvbnRlbnRFbXB0eShldmVudCkpIHtcbiAgICAgICAgcmVtb3ZlVG9kb0l0ZW1CeUlkKHRvZG9JdGVtSWQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9JdGVtSWQgPSBjcmVhdGVBbmRTdG9yZU5ld1RvZG9JdGVtKCk7IC8vIHJldHVybnMgdGhlIG5ldyBpdGVtJ3MgaWRcbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcG9wdWxhdGVDb250ZW50KGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBmb2N1c0VsZW1lbnRBbmRDbGVhckNvbnRlbnQobmV3VG9kb0l0ZW1JZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9jdXNlcyA8Ym9keT4gd2hlbiBFU0NBUEUgaXMgcHJlc3NlZC4gUmVzZXRzIHRoZSB0aXRsZSB0byB0aGUgZGVmYXVsdCB2YWx1ZSB3aGVuIGVtcHR5LlxuICAgIGlmIChpc1RvZG9JdGVtVGl0bGUoZXZlbnQpICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgIGNvbnN0IHRvZG9JdGVtID0gZmluZFRvZG9JdGVtQnlJZCh0b2RvSXRlbUlkKTtcblxuICAgICAgaWYgKGlzVGV4dENvbnRlbnRFbXB0eShldmVudCkpIHtcbiAgICAgICAgdG9kb0l0ZW0ucmVzZXRUaXRsZSgpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZVRvZG9JdGVtVGl0bGUoZXZlbnQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBib2R5LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kb0l0ZW1DaGVja0NvbXBsZXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIudG9kby1pdGVtIC5jaGVja21hcmstY29udGFpbmVyIC5jaGVja21hcmtcIikpIHtcbiAgICAgIGNvbnN0IHRvZG9JdGVtSWQgPSBnZXRFbGVtZW50SWQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICBjb25zdCB0b2RvSXRlbSA9IGZpbmRUb2RvSXRlbUJ5SWQodG9kb0l0ZW1JZCk7XG5cbiAgICAgIC8vIE1hcmsgYXMgY29tcGxldGUgc28gY2hlY2tib3ggd2lsbCBzdGF5IGNoZWNrZWQgd2hlbiBjb250ZW50IGlzIHJlZnJlc2hlZFxuICAgICAgdG9kb0l0ZW0uY2hlY2tlZCA9IFwidHJ1ZVwiO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlVG9kb0l0ZW1CeUlkKHRvZG9JdGVtSWQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9LCAxMTAwKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBBUFAgSU5JVElBTElaQVRJT05cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbi8vIEdldHMgYWxsIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBhdmFpbGFibGUgb3IgbG9hZHMgZGVmYXVsdCBkYXRhXG5pZiAoaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSAmJiBpc1Byb2plY3RzQXJyYXlJblN0b3JhZ2UoKSkge1xuICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0c0FycmF5ID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIC8vIFJlY29uc3RydWN0cyBhbGwgcHJvamVjdCBvYmplY3RzIHRvIHJlZXN0YWJsaXNoIHByb3RvdHlwZSBpbmhlcml0YW5jZSBhbmQgbWV0aG9kc1xuICBjb25zdCBuZXdQcm9qZWN0c0FycmF5ID0gcmVjb25zdHJ1Y3RBbGxQcm9qZWN0T2JqZWN0cyhcbiAgICBsb2NhbFN0b3JhZ2VQcm9qZWN0c0FycmF5XG4gICk7XG4gIGVtcHR5T2xkQXJyYXlBbmRQb3B1bGF0ZVdpdGhOZXdJdGVtcyhuZXdQcm9qZWN0c0FycmF5KTtcbn0gZWxzZSB7XG4gIHN0b3JlUHJvamVjdHMoZGVmYXVsdFByb2plY3QpOyAvLyBsb2FkIGRlZmF1bHQgZGF0YVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlZnJlc2hOYXYoKTtcbiAgdXBkYXRlQ29udGVudCgpO1xuICAvLyBBc3NvY2lhdGVzIHRoZSBwcm9qZWN0IG5hbWVzIHdpdGggdGhlIGFjdHVhbCBwb2plY3Qgb2JqZWN0c1xuICBpbml0aWFsaXplUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgLy8gSGFuZGxlcyB1cGRhdGVzIG9mIHByb2plY3QgbmFtZSBieSB0aGUgdXNlclxuICBoYW5kbGVQcm9qZWN0TmFtZUludGVyYWN0aW9uKCk7XG4gIC8vIEhhbmRsZXMgcmVtb3ZhbCBvZiBwcm9qZWN0cyB2aWEgYnV0dG9uIG5leHQgdG8gcHJvamVjdCBwYWdlIHRpdGxlXG4gIGluaXRpYWxpemVSZW1vdmVQcm9qZWN0QnV0dG9uKCk7XG4gIC8vIEhhbmRsZXMgY3JlYXRpb24gb2YgbmV3IHRvZG8gaXRlbXMgdmlhIGEgYnV0dG9uIG9uIHRvcCByaWdodFxuICBpbml0aWFsaXplTmV3VGFza0J1dHRvbigpO1xuICAvLyBIYW5kbGVzIHVwZGF0ZXMgb2YgdG9kbyBpdGVtIHRpdGxlIGJ5IHRoZSB1c2VyXG4gIGhhbmRsZVRvZG9JdGVtVGl0bGVJbnRlcmFjdGlvbigpO1xuICAvLyBIYW5kbGVzIHRoZSBcImNoZWNrIGFzIGNvbXBsZXRlXCIgYWN0aW9uXG4gIGhhbmRsZVRvZG9JdGVtQ2hlY2tDb21wbGV0ZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=