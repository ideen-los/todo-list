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
  height: 100%;
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

.-selected- {
  background-color: dodgerblue !important;
}

#todo-app-container {
  display: flex;
  height: 95%;
}

aside {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 30%;
  max-width: 380px;
  padding: 2.4rem 1rem 2.2rem 1rem;
  border-right: 1px solid #eee;
}
aside .add-project {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 46px;
  margin: 0 0.5rem;
  padding: 0.7rem 1rem 0.7rem 0.5rem;
  border: 0;
  background-color: #fff;
  font-size: 1rem;
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
  margin: 0.4rem 0.3rem 0.3rem;
  letter-spacing: 0.1px;
}
aside .project-item input {
  width: 86%;
  height: 26px;
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
  padding: 1rem 2rem;
}
#content .title-container {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
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
  height: 5%;
  font-size: 0.9rem;
  font-weight: 300;
  color: #aaa;
  border-top: 1px solid #eee;
}
footer a,
footer a:hover,
footer a:visited,
footer a:active {
  text-decoration: none;
  border-bottom: 1px solid;
  color: dodgerblue;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap\");\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Inter\", sans-serif;\n}\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n\n  &.fade-in {\n    opacity: 1;\n\n    .modal-box {\n      transform: scale(1);\n    }\n  }\n\n  .modal-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    transform: scale(1.1);\n    padding: 2rem 3rem 1.7rem;\n    background-color: #fff;\n    box-shadow: 0 2px 20px 0 rgba(213, 217, 217, 0.8);\n    border-radius: 7px;\n    transition: transform 0.05s ease-in-out;\n\n    h3 {\n      margin: 1rem 0;\n      font-size: 1.3rem;\n    }\n\n    // Modal text\n    p {\n      text-align: center;\n      margin: 0 0 2.5rem;\n    }\n\n    // Button container\n    div {\n      display: flex;\n      flex-direction: row-reverse;\n      gap: 0.7rem;\n    }\n\n    .modal-confirm,\n    .modal-cancel {\n      display: flex;\n      align-items: center;\n      align-self: center;\n      padding: 0.7rem 1.8rem;\n      border: 1px solid #e0e0e0;\n      background-color: #fff;\n      font-size: 0.9rem;\n      font-family: \"Inter\", sans-serif;\n      font-weight: 500;\n      border-radius: 7px;\n      cursor: pointer;\n    }\n\n    .modal-confirm {\n      background-color: crimson;\n      border-color: crimson;\n      color: #fff;\n\n      &:hover {\n        background-color: rgb(179, 0, 36);\n      }\n    }\n\n    .modal-cancel {\n      &:hover {\n        background-color: #f0f0f0;\n      }\n    }\n  }\n}\n\n.air-datepicker-body--day-name {\n  color: #000 !important;\n  font-weight: bold;\n}\n\n.-selected- {\n  background-color: dodgerblue !important;\n}\n\n#todo-app-container {\n  display: flex;\n  height: 95%;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  width: 30%;\n  max-width: 380px;\n  padding: 2.4rem 1rem 2.2rem 1rem;\n  border-right: 1px solid #eee;\n\n  .add-project {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    height: 46px;\n    margin: 0 0.5rem;\n    padding: 0.7rem 1rem 0.7rem 0.5rem;\n    border: 0;\n    background-color: #fff;\n    font-size: 1rem;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    color: #888;\n    border-radius: 12px;\n    cursor: pointer;\n\n    span {\n      padding-bottom: 0.4rem;\n      font-weight: 200;\n      font-size: 2rem;\n      line-height: 0;\n      color: #aaa;\n    }\n\n    &:hover {\n      background-color: #f7f7f7;\n      color: #333;\n\n      span {\n        color: #444;\n      }\n    }\n\n    &.highlighted {\n      padding-left: 1rem;\n      background-color: dodgerblue;\n      color: #fff;\n      border-color: dodgerblue;\n\n      span {\n        color: #fff;\n      }\n\n      &:hover {\n        background-color: #006ad3;\n        border-color: #006ad3;\n      }\n    }\n  }\n\n  .project-item {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n    cursor: pointer;\n    margin: 0.5rem;\n    padding: 0.5rem 0.7rem;\n\n    border-radius: 12px;\n\n    &:hover {\n      background-color: #f9f9f9;\n    }\n\n    &.active {\n      background-color: #eee;\n    }\n\n    &:not(.active) {\n      span {\n        pointer-events: none;\n      }\n    }\n\n    i {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 25px;\n      height: 25px;\n      padding: 0 1px 1px 0;\n      font-style: normal;\n      font-size: 0.8rem;\n      color: #fff;\n      background-color: dodgerblue;\n      border-radius: 50%;\n    }\n\n    span {\n      display: flex;\n      gap: 0.5rem;\n      align-items: center;\n      height: 26px;\n      margin: 0.4rem 0.3rem 0.3rem;\n      letter-spacing: 0.1px;\n    }\n\n    input {\n      width: 86%;\n      height: 26px;\n      font-size: 0.99rem;\n      letter-spacing: 0.15px;\n      margin: 0.4rem 0.1rem 0.3rem 0.07rem;\n    }\n\n    span,\n    input {\n      vertical-align: middle;\n      line-height: 120%;\n      font-family: \"Inter\";\n    }\n\n    .hide {\n      display: none;\n    }\n  }\n}\n\n#content {\n  width: 70%;\n  max-width: 1200px;\n  padding: 1rem 2rem;\n\n  .title-container {\n    display: flex;\n    gap: 2rem;\n    justify-content: space-between;\n\n    .project-headline {\n      display: flex;\n      align-items: baseline;\n      gap: 0.8rem;\n\n      h1 {\n        color: dodgerblue;\n\n        &.no-project {\n          color: #d0d0d0;\n        }\n      }\n\n      .remove-project {\n        display: flex;\n        gap: 0.5rem;\n        padding: 0.1rem 0.3rem;\n        border: 1px solid #e9e9e9;\n        background-color: #fff;\n        font-size: 0.7rem;\n        font-family: \"Inter\", sans-serif;\n        text-transform: uppercase;\n        letter-spacing: 0.2px;\n        font-weight: 350;\n        color: #808080;\n        border-radius: 4px;\n        cursor: pointer;\n\n        &:hover {\n          color: #fff;\n          background-color: crimson;\n          border-color: crimson;\n        }\n\n        &.disabled {\n          display: none;\n          cursor: default;\n        }\n      }\n    }\n\n    .add-todo-item {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      align-self: center;\n      padding: 0.7rem 1rem 0.7rem 0.5rem;\n      border: 1px solid #e0e0e0;\n      background-color: #fff;\n      font-size: 0.9rem;\n      font-family: \"Inter\", sans-serif;\n      font-weight: 500;\n      border-radius: 7px;\n      box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);\n      cursor: pointer;\n\n      span {\n        padding-bottom: 0.4rem;\n        font-weight: 400;\n        font-size: 2rem;\n        line-height: 0;\n        color: dodgerblue;\n      }\n\n      &:hover {\n        background-color: dodgerblue;\n        color: #fff;\n        border-color: dodgerblue;\n\n        span {\n          color: #fff;\n        }\n      }\n\n      &.disabled {\n        box-shadow: none;\n        color: #ccc;\n        cursor: default;\n\n        span {\n          color: #d0d0d0;\n        }\n\n        &:hover {\n          background-color: inherit;\n          border-color: #e0e0e0;\n\n          span {\n            color: inherit;\n          }\n        }\n      }\n    }\n  }\n\n  .todo-container {\n    height: 90%;\n    padding-top: 0.4rem;\n  }\n\n  .empty-todo-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding-top: 20%;\n    color: #000;\n    font-weight: 500;\n\n    img {\n      width: 100%;\n      max-width: 160px;\n    }\n  }\n\n  .todo-item {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.2rem 1rem 1.2rem 0;\n    border-bottom: 1px solid #e0e0e0;\n\n    &__name {\n      width: 80%;\n      margin-right: auto;\n\n      &:focus-visible {\n        outline: 0;\n      }\n    }\n\n    [class*=\"datepicker-\"] {\n      width: 124px;\n      cursor: pointer;\n      border: 0;\n      font-size: 1rem;\n      text-align: right;\n\n      &.expired {\n        color: crimson;\n      }\n\n      &::placeholder {\n        color: #000;\n      }\n\n      &:focus-visible {\n        outline: 0;\n      }\n    }\n\n    .checkmark-container {\n      display: inline;\n      position: relative;\n      height: 24px;\n      padding-left: 30px;\n      cursor: pointer;\n      font-size: 22px;\n      user-select: none;\n\n      /* Hide the browser's default radio button */\n      input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        height: 0;\n        width: 0;\n      }\n\n      /* Create a custom radio button */\n      .checkmark {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 22px;\n        width: 22px;\n        background-color: #fff;\n        border-radius: 50%;\n        border: 2px solid #999;\n      }\n\n      /* On mouse-over, add a grey background color */\n      &:hover input ~ .checkmark {\n        background-color: #f7f7f7;\n      }\n\n      /* When the radio button is checked, add a blue background */\n      input:checked ~ .checkmark {\n        background-color: #fff;\n      }\n\n      /* Create the indicator (the dot/circle - hidden when not checked) */\n      .checkmark:after {\n        content: \"\";\n        position: absolute;\n        display: none;\n      }\n\n      /* Show the indicator (dot/circle) when checked */\n      input:checked ~ .checkmark:after {\n        display: block;\n      }\n\n      /* Style the indicator (dot/circle) */\n      .checkmark:after {\n        top: 1.7px;\n        left: 1.5px;\n        width: 84%;\n        height: 84%;\n        border-radius: 50%;\n        background: #2196f3;\n      }\n    }\n\n    &.checked {\n      .checkmark:after {\n        content: \"\";\n        position: absolute;\n        display: block;\n      }\n    }\n  }\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 5%;\n  font-size: 0.9rem;\n  font-weight: 300;\n  color: #aaa;\n  border-top: 1px solid #eee;\n\n  a,\n  a:hover,\n  a:visited,\n  a:active {\n    text-decoration: none;\n    border-bottom: 1px solid;\n    color: dodgerblue;\n  }\n}\n"],"sourceRoot":""}]);
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
      console.log(clickedProject);

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
    } else if (event.target === cancelButton) {
      modalBox.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQWlELG9CQUFvQixDQUF5SCxDQUFDLGtCQUFrQixrQkFBa0IsYUFBYSxPQUFPLGdCQUFnQiwrREFBK0QsdUJBQXVCLEVBQUUsaUJBQWlCLGtEQUFrRCxNQUFNLE9BQU8sbUJBQW1CLFVBQVUsRUFBRSxPQUFPLGdhQUFnYSxJQUFJLDZCQUE2QixvZEFBb2QseXNCQUF5c0IsNkRBQTZELHdQQUF3UCxjQUFjLHNFQUFzRSw4Q0FBOEMsYUFBYSxJQUFJLGlFQUFpRSwwREFBMEQsNkJBQTZCLHNGQUFzRixnQkFBZ0IsaUVBQWlFLFNBQVMsY0FBYyw0REFBNEQsY0FBYyxvQkFBb0Isb0JBQW9CLE1BQU0sT0FBTyxrVkFBa1YsY0FBYyxPQUFPLGdEQUFnRCxjQUFjLG9CQUFvQixjQUFjLHdDQUF3QyxjQUFjLGFBQWEsU0FBUyw4Q0FBOEMsSUFBSSxzQkFBc0Isc0JBQXNCLHFEQUFxRCxrQkFBa0IsZUFBZSxnQkFBZ0Isb0VBQW9FLG1CQUFtQixrQkFBa0IsT0FBTyxxSUFBcUksSUFBSSxrQkFBa0IsNENBQTRDLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGNBQWMseUZBQXlGLDBDQUEwQyxvQkFBb0IsTUFBTSxrQkFBa0Isd0JBQXdCLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLDZGQUE2RixrQkFBa0IscUJBQXFCLGNBQWMsc0RBQXNELElBQUksd0JBQXdCLHFDQUFxQyxrRkFBa0YsbUZBQW1GLG1DQUFtQyxZQUFZLEtBQUssY0FBYyxRQUFRLG9EQUFvRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUseUdBQXlHLEVBQUUsMkJBQTJCLGNBQWMseUNBQXlDLEVBQUUsdURBQXVELGtCQUFrQixxQkFBcUIsb0JBQW9CLHlDQUF5Qyw0QkFBNEIsZUFBZSx5QkFBeUIsK0JBQStCLG9FQUFvRSxpQkFBaUIsSUFBSSxxQ0FBcUMsb0NBQW9DLGtEQUFrRCxXQUFXLFFBQVEsY0FBYyxJQUFJLGlDQUFpQywyREFBMkQscUJBQXFCLG9EQUFvRCw4QkFBOEIsdURBQXVELHlCQUF5Qix3REFBd0QsK0JBQStCLHVGQUF1Rix1Q0FBdUMsMkZBQTJGLG1DQUFtQyxvREFBb0QsK0JBQStCLCtGQUErRixpT0FBaU8sT0FBTyxNQUFNLElBQUksZUFBZSxXQUFXLHVCQUF1QiwyREFBMkQseUlBQXlJLHdCQUF3QiwwSEFBMEgseUJBQXlCLDRIQUE0SCxpQkFBaUIsTUFBTSxJQUFJLHNCQUFzQiw0RUFBNEUsY0FBYyxPQUFPLGlEQUFpRCwwQkFBMEIsZ0JBQWdCLE1BQU0sZ0JBQWdCLHVDQUF1QyxZQUFZLHFDQUFxQyxVQUFVLE1BQU0sd0ZBQXdGLGdCQUFnQixJQUFJLHVIQUF1SCxPQUFPLGtCQUFrQixpQkFBaUIsNEdBQTRHLEVBQUUsTUFBTSxtQkFBbUIsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLDJFQUEyRSxFQUFFLGlGQUFpRixXQUFXLE1BQU0sSUFBSSxzQkFBc0IsZUFBZSxtQ0FBbUMsV0FBVyw4RUFBOEUsa0JBQWtCLDZDQUE2Qyw4REFBOEQsZ0RBQWdELHNCQUFzQixJQUFJLG9CQUFvQixVQUFVLGNBQWMsT0FBTyxzQkFBc0IseUlBQXlJLG9EQUFvRCxVQUFVLDhCQUE4QixxQkFBcUIsTUFBTSwwREFBMEQsb0JBQW9CLGFBQWEsWUFBWSxhQUFhLGtCQUFrQixzQkFBc0IsU0FBUyw0SUFBNEksRUFBRSxVQUFVLG1IQUFtSCx3QkFBd0IsMERBQTBELHVEQUF1RCw0QkFBNEIsdURBQXVELGlCQUFpQiw4TkFBOE4saUJBQWlCLHlDQUF5QyxtQkFBbUIsdUNBQXVDLG9CQUFvQix5Q0FBeUMsa0JBQWtCLHFCQUFxQixvQkFBb0IseUNBQXlDLDRCQUE0QixlQUFlLHlCQUF5QiwrQkFBK0Isb0VBQW9FLGlCQUFpQixJQUFJLHFDQUFxQyxvQ0FBb0Msa0RBQWtELFdBQVcsT0FBTyxzR0FBc0csT0FBTyxpRUFBaUUsU0FBUyxnRUFBZ0UsUUFBUSxZQUFZLCtCQUErQixRQUFRLGVBQWUsSUFBSSxtQkFBbUIsR0FBRywwQkFBMEIsa0NBQWtDLHVCQUF1Qix3REFBd0Qsb0RBQW9ELDJFQUEyRSxvQ0FBb0MsOENBQThDLDBCQUEwQixzQ0FBc0MsRUFBRSxxQ0FBcUMsc0RBQXNELGlDQUFpQyxvQkFBb0IsMENBQTBDLGlDQUFpQyx5QkFBeUIsNkJBQTZCLElBQUksaUJBQWlCLHNCQUFzQiw2R0FBNkcsNkJBQTZCLGdCQUFnQixtQ0FBbUMsb0hBQW9ILDZCQUE2QixtREFBbUQsbUJBQW1CLG9DQUFvQyw4Q0FBOEMsU0FBUywyQkFBMkIsSUFBSSxPQUFPLEdBQUcsaUJBQWlCLG1DQUFtQyxJQUFJLGtCQUFrQixNQUFNLCtFQUErRSxpQ0FBaUMsSUFBSSxrQkFBa0IsTUFBTSwrRUFBK0UsNEJBQTRCLGdFQUFnRSxzQ0FBc0MsMEJBQTBCLGtCQUFrQiw0QkFBNEIsc0NBQXNDLE1BQU0sdUNBQXVDLE1BQU0sZ0RBQWdELGNBQWMseUJBQXlCLGtFQUFrRSxvQ0FBb0MsR0FBRyw2R0FBNkcsT0FBTyw4SEFBOEgsY0FBYyxJQUFJLHVCQUF1QixXQUFXLG1RQUFtUSx3QkFBd0Isc0hBQXNILGlCQUFpQixZQUFZLGtDQUFrQyxVQUFVLDBCQUEwQixrSEFBa0gsbUJBQW1CLCtHQUErRyxpQkFBaUIsbUJBQW1CLEtBQUssSUFBSSxFQUFFLFVBQVUsa0JBQWtCLG1DQUFtQywyQ0FBMkMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLDBCQUEwQixnQkFBZ0IsU0FBUyxpQkFBaUIsOENBQThDLGlCQUFpQixJQUFJLG1CQUFtQixNQUFNLGNBQWMsb0NBQW9DLEVBQUUsaUJBQWlCLDJDQUEyQyx1Q0FBdUMsR0FBRyxPQUFPLHdEQUF3RCxPQUFPLHFEQUFxRCxlQUFlLDRFQUE0RSxVQUFVLDRJQUE0SSx5QkFBeUIsSUFBSSxpQkFBaUIsY0FBYyxTQUFTLFlBQVksV0FBVyxlQUFlLDBFQUEwRSx3QkFBd0Isb0JBQW9CLElBQUksc0JBQXNCLE1BQU0seUJBQXlCLDZCQUE2QixlQUFlLFVBQVUsVUFBVSxXQUFXLEtBQUssSUFBSSxFQUFFLHdCQUF3QixzQkFBc0IsU0FBUywyQkFBMkIsSUFBSSxPQUFPLDJCQUEyQixLQUFLLEtBQUssRUFBRSxzQkFBc0Isc0JBQXNCLFNBQVMsMEJBQTBCLCtDQUErQyxLQUFLLEtBQUssRUFBRSxzQkFBc0Isc0JBQXNCLFNBQVMsMEJBQTBCLG9FQUFvRSxPQUFPLDhFQUE4RSxLQUFLLGtCQUFrQixxQkFBcUIsb0JBQW9CLHlDQUF5Qyw0QkFBNEIsZUFBZSx5QkFBeUIsK0JBQStCLG9FQUFvRSxpQkFBaUIsSUFBSSxxQ0FBcUMsb0NBQW9DLGtEQUFrRCxXQUFXLFFBQVEsZUFBZSxJQUFJLFlBQVksR0FBRyx5QkFBeUIsZ0RBQWdELGFBQWEsdUJBQXVCLGFBQWEsbUNBQW1DLDREQUE0RCxzQ0FBc0MsNERBQTRELGtDQUFrQyxrQ0FBa0MseUJBQXlCLElBQUksc0JBQXNCLFdBQVcsMEdBQTBHLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFEQUFxRCw2REFBNkQsY0FBYyxpQ0FBaUMsRUFBRSxxQ0FBcUMsT0FBTyxtSkFBbUosYUFBYSxpSkFBaUosY0FBYyw4R0FBOEcsd0JBQXdCLHdRQUF3USxVQUFVLDRRQUE0USxpQkFBaUIsWUFBWSw2Q0FBNkMsRUFBRSxZQUFZLElBQUksWUFBWSxtQ0FBbUMsMkRBQTJELGtCQUFrQixJQUFJLDJCQUEyQixZQUFZLG9CQUFvQixTQUFTLHFCQUFxQixJQUFJLGVBQWUsZ0RBQWdELDRCQUE0QixrSEFBa0gsTUFBTSw0RkFBNEYsTUFBTSxjQUFjLDBCQUEwQixvRkFBb0YsUUFBUSxlQUFlLGdFQUFnRSxrQkFBa0IsYUFBYSxzREFBc0QsSUFBSSx3QkFBd0Isd0JBQXdCLHlCQUF5Qiw0QkFBNEIsd0VBQXdFLGlCQUFpQixJQUFJLHNCQUFzQixXQUFXLGlGQUFpRixFQUFFLGdIQUFnSCxFQUFFLFFBQVEsc0JBQXNCLElBQUksWUFBWSxXQUFXLDBEQUEwRCxPQUFPLE9BQU8sNkRBQTZELFFBQVEsaURBQWlELFFBQVEsZUFBZSxJQUFJLFlBQVksR0FBRyxrQ0FBa0MsT0FBTyxtQ0FBbUMsZ0JBQWdCLFlBQVksbUNBQW1DLEVBQUUsVUFBVSwwQ0FBMEMsWUFBWSxrQ0FBa0Msa0JBQWtCLElBQUksVUFBVSxXQUFXLHlDQUF5QyxRQUFRLG1DQUFtQywyQkFBMkIseUVBQXlFLEdBQUcseUJBQXlCLGlDQUFpQyxXQUFXLEdBQUcsZ0JBQWdCLElBQUksb0RBQW9ELEdBQUcsVUFBVSwyQ0FBMkMsa0NBQWtDLHdEQUF3RCxFQUFFLFNBQVMsd0JBQXdCLGtCQUFrQixxQkFBcUIsb0JBQW9CLHlDQUF5Qyw0QkFBNEIsZUFBZSx5QkFBeUIsK0JBQStCLG9FQUFvRSxpQkFBaUIsSUFBSSxxQ0FBcUMsb0NBQW9DLGtEQUFrRCxXQUFXLFFBQVEsY0FBYyxJQUFJLFlBQVksMkRBQTJELHVDQUF1Qyw2QkFBNkIsc0NBQXNDLElBQUksdUJBQXVCLEdBQUcsNkVBQTZFLDBDQUEwQyxtQ0FBbUMsb0NBQW9DLGVBQWUsMEZBQTBGLHNDQUFzQyxFQUFFLG1DQUFtQyx3REFBd0QsK0RBQStELDBCQUEwQixrQ0FBa0MseUJBQXlCLGtDQUFrQyx5QkFBeUIsSUFBSSxhQUFhLGdCQUFnQixtRUFBbUUsT0FBTywrS0FBK0ssdUJBQXVCLHdJQUF3SSxnQkFBZ0IsY0FBYyx3VEFBd1QsZ0JBQWdCLFlBQVksbUNBQW1DLHVCQUF1QixFQUFFLEVBQUUsVUFBVSxvTEFBb0wsWUFBWSxJQUFJLDBHQUEwRywyQkFBMkIsTUFBTSxvSEFBb0gsS0FBSywySEFBMkgsS0FBSyxrRUFBa0UsRUFBRSwwSkFBMEosRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSwwR0FBMEcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsWUFBWSx1QkFBdUIsc1NBQXNTLFdBQVcsNkNBQTZDLGlCQUFpQix1REFBdUQsaUJBQWlCLHNDQUFzQyxJQUFJLG9CQUFvQixTQUFTLG1GQUFtRixrQkFBa0IsSUFBSSxrQkFBa0IsYUFBYSw4RkFBOEYsMkJBQTJCLElBQUksZ0RBQWdELFdBQVcsb0dBQW9HLHlCQUF5QixJQUFJLG1CQUFtQixTQUFTLDRIQUE0SCx5QkFBeUIsSUFBSSxtQkFBbUIsU0FBUyw0SEFBNEgsZ0JBQWdCLGVBQWUsb0NBQW9DLG9DQUFvQyx3Q0FBd0MscUJBQXFCLGFBQWEsNElBQTRJLGFBQWEsY0FBYyxJQUFJLG9CQUFvQixNQUFNLGlEQUFpRCxZQUFZLG1CQUFtQixTQUFTLHdDQUF3QyxrQkFBa0IscUJBQXFCLG9CQUFvQix5Q0FBeUMsNEJBQTRCLGVBQWUseUJBQXlCLCtCQUErQixvRUFBb0UsaUJBQWlCLElBQUkscUNBQXFDLG9DQUFvQyxrREFBa0QsV0FBVyxRQUFRLGVBQWUsSUFBSSxZQUFZLEdBQUcsK2VBQStlLDBEQUEwRCxhQUFhLElBQUksc0JBQXNCLHNCQUFzQixXQUFXLDhDQUE4Qyx3QkFBd0Isc0JBQXNCLEVBQUUsa0NBQWtDLDhEQUE4RCwyQkFBMkIsV0FBVyxzQ0FBc0MsbUNBQW1DLEdBQUcsS0FBSyx5QkFBeUIsaUJBQWlCLFNBQVMsK0RBQStELElBQUksY0FBYyxJQUFJLFNBQVMsWUFBWSxRQUFRLE1BQU0sb0JBQW9CLDZCQUE2Qix5REFBeUQsd0VBQXdFLGdCQUFnQixrREFBa0QsTUFBTSxrQ0FBa0MsbUVBQW1FLDZCQUE2Qix5QkFBeUIsc0JBQXNCLHFDQUFxQyxPQUFPLDBCQUEwQixxQkFBcUIsSUFBSSxNQUFNLFNBQVMsc0ZBQXNGLFVBQVUsSUFBSSxNQUFNLFNBQVMsb0lBQW9JLHNCQUFzQixJQUFJLDBEQUEwRCxnQkFBZ0IsNEJBQTRCLGdCQUFnQixpREFBaUQsTUFBTSxnQ0FBZ0MsTUFBTSwrQkFBK0IsU0FBUyxpQkFBaUIsa0NBQWtDLGNBQWMsVUFBVSx3QkFBd0Isc0NBQXNDLFVBQVUsMERBQTBELE1BQU0sd0RBQXdELE1BQU0sMkRBQTJELE1BQU0sMERBQTBELDhDQUE4Qyx3QkFBd0Isc0JBQXNCLEVBQUUsZUFBZSx3QkFBd0IsYUFBYSw0QkFBNEIsT0FBTyxRQUFRLGdDQUFnQyxpRUFBaUUsVUFBVSx3RkFBd0YsbUJBQW1CLGlCQUFpQixZQUFZLHNEQUFzRCxJQUFJLHdCQUF3QiwrREFBK0QsUUFBUSxLQUFLLGtCQUFrQixxQkFBcUIsb0JBQW9CLHlDQUF5Qyw0QkFBNEIsZUFBZSx5QkFBeUIsK0JBQStCLG9FQUFvRSxpQkFBaUIsSUFBSSxxQ0FBcUMsb0NBQW9DLGtEQUFrRCxXQUFXLG1CQUFtQixRQUFRLCtCQUErQixVQUFVLGlCQUFpQiwyQkFBMkIsaUJBQWlCLFdBQVcsdUVBQXVFLElBQUksZUFBZSxxQkFBcUIseUJBQXlCLGdEQUFnRCxNQUFNLGtEQUFrRCxNQUFNLG1EQUFtRCx1QkFBdUIsSUFBSSxlQUFlLHFCQUFxQix5QkFBeUIsZ0RBQWdELE1BQU0sa0RBQWtELE1BQU0sbURBQW1ELDhCQUE4Qiw4RkFBOEYscUNBQXFDLDhEQUE4RCx3RUFBd0UsOEZBQThGLEdBQUcsU0FBUyxXQUFXLGlQQUFpUCw2Q0FBNkMsVUFBVSxLQUFLLGlDQUFpQyxrRkFBa0Ysb0NBQW9DLGdDQUFnQyxHQUFHLGlFQUFpRSxTQUFTLFVBQVUsNkJBQTZCLE1BQU0sK0JBQStCLE1BQU0sZ0NBQWdDLE1BQU0sOEJBQThCLFVBQVUsa0JBQWtCLE1BQU0scUNBQXFDLE1BQU0sdUNBQXVDLE1BQU0sb0JBQW9CLE1BQU0sNkZBQTZGLHFDQUFxQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssaUNBQWlDLElBQUksMkJBQTJCLGNBQWMsT0FBTyxnQ0FBZ0MsR0FBRyw2RUFBNkUsZ0NBQWdDLElBQUksdUJBQXVCLE9BQU8seUNBQXlDLEdBQUcsc0JBQXNCLDRFQUE0RSx5QkFBeUIsZ0RBQWdELHlFQUF5RSxpQ0FBaUMsZUFBZSxnQkFBZ0IsS0FBSyw4Q0FBOEMsZ0VBQWdFLFNBQVMsMEVBQTBFLFFBQVEsRUFBRSx1Q0FBdUMsNEVBQTRFLDZCQUE2QixxQ0FBcUMsNkJBQTZCLG9CQUFvQixnQkFBZ0IsSUFBSSxtQkFBbUIsV0FBVyxNQUFNLElBQUksZUFBZSxxQkFBcUIsR0FBRyxxQ0FBcUMsRUFBRSx3Q0FBd0Msc0NBQXNDLGdFQUFnRSxxRkFBcUYsd0NBQXdDLGdFQUFnRSw4QkFBOEIsdUhBQXVILHdCQUF3Qix3QkFBd0IsRUFBRSxpREFBaUQsd0RBQXdELHlDQUF5QyxzRUFBc0UsMEJBQTBCLElBQUksdUJBQXVCLHlDQUF5QyxpZEFBaWQsK0JBQStCLCtEQUErRCw0REFBNEQsT0FBTyxVQUFVLFNBQVMsR0FBRyxZQUFZLElBQUksMERBQTBELHFDQUFxQyxnSEFBZ0gsU0FBUyxvQ0FBb0MsU0FBUyxtMkJBQW0yQixpQ0FBaUMsc0NBQXNDLFdBQVcsYUFBYSx1QkFBdUIsdURBQXVELCtDQUErQyxzQkFBc0IsTUFBTSw0QkFBNEIsdUJBQXVCLGdDQUFnQyxXQUFXLCtEQUErRCw4QkFBOEIsSUFBSSxRQUFRLE1BQU0scUNBQXFDLDZCQUE2QixJQUFJLE9BQU8sTUFBTSxvQ0FBb0MsK0JBQStCLElBQUksT0FBTyw2QkFBNkIsZ0JBQWdCLHVDQUF1QyxJQUFJLFNBQVMsR0FBRyxpQkFBaUIsc0VBQXNFLEdBQUcsOENBQThDLElBQUkscUJBQXFCLDJEQUEyRCxhQUFhLFNBQVMsbUhBQW1ILG9CQUFvQixFQUFFLCtCQUErQixJQUFJLGtCQUFrQixlQUFlLHlCQUF5QixZQUFZLFVBQVUsU0FBUyw4REFBOEQseUhBQXlILDBCQUEwQiwwQkFBMEIseUJBQXlCLDZEQUE2RCw4QkFBOEIsZ0JBQWdCLDRCQUE0QixpQ0FBaUMsNEJBQTRCLHdFQUF3RSxrQ0FBa0MsMEJBQTBCLHFDQUFxQyxvRUFBb0UsZ0NBQWdDLHdGQUF3RixJQUFJLG9CQUFvQixVQUFVLHdDQUF3QyxrQ0FBa0Msb0JBQW9CLDJCQUEyQixnQkFBZ0IsbUhBQW1ILElBQUksbUJBQW1CLFdBQVcsb1VBQW9VLG9KQUFvSixPQUFPLElBQUksNkJBQTZCLG9FQUFvRSxrQkFBa0IsZ1ZBQWdWLGVBQWUsMEJBQTBCLFVBQVUsNkdBQTZHLHVCQUF1QixLQUFLLG1DQUFtQyxtQkFBbUIsb0JBQW9CLElBQUksNkJBQTZCLGtGQUFrRixNQUFNLHVUQUF1VCxxQ0FBcUMsa0JBQWtCLGVBQWUsaUpBQWlKLHFCQUFxQixnREFBZ0QsYUFBYSwrREFBK0QsdUJBQXVCLG9JQUFvSSwwQkFBMEIsMkxBQTJMLHFCQUFxQixJQUFJLG9CQUFvQixXQUFXLDhDQUE4QyxpQkFBaUIsb0JBQW9CLGlDQUFpQyx3RUFBd0UsdUJBQXVCLG9EQUFvRCxjQUFjLGlCQUFpQixvQ0FBb0Msa0VBQWtFLHVCQUF1Qiw4Q0FBOEMsaUJBQWlCLHNLQUFzSyxpQkFBaUIsSUFBSSxTQUFTLFdBQVcsUUFBUSxxZ0JBQXFnQixnQkFBZ0IsSUFBSSxnR0FBZ0csV0FBVyxNQUFNLDZIQUE2SCxJQUFJLGFBQWEsYUFBYSw2REFBNkQsYUFBYSw4REFBOEQseUVBQXlFLHVCQUF1Qix3RkFBd0YsK0NBQStDLEVBQUUsR0FBRyxLQUFLLFVBQVUsRUFBRSxHQUFHLGdEQUFnRCxjQUFjLDJSQUEyUiw4QkFBOEIsSUFBSSwrQkFBK0IsTUFBTSw4REFBOEQsYUFBYSxvSEFBb0gsc0NBQXNDLGtFQUFrRSx1VUFBdVUsK0NBQStDLFNBQVMsUUFBUSxvQ0FBb0MsTUFBTSxrQ0FBa0MsY0FBYyxpRUFBaUUsRUFBRSwrQ0FBK0MsT0FBTyxhQUFhLElBQUksNEdBQTRHLHNCQUFzQiwwQ0FBMEMscUJBQXFCLG9CQUFvQixjQUFjLEdBQUcsNEJBQTRCLFVBQVUsdUJBQXVCLDJCQUEyQixpTUFBaU0sZ0JBQWdCLDBDQUEwQyxvQkFBb0Isb05BQW9OLE1BQU0sdUVBQXVFLE1BQU0sb0RBQW9ELDRCQUE0QiwrQ0FBK0MsNkVBQTZFLHVJQUF1SSxjQUFjLElBQUksZ0JBQWdCLGdDQUFnQyxrREFBa0QsdU9BQXVPLG1DQUFtQyxLQUFLLEdBQUcsaUJBQWlCLDRGQUE0RixtSEFBbUgsK0NBQStDLG1DQUFtQyxRQUFRLGdFQUFnRSx3SUFBd0ksNENBQTRDLG1CQUFtQixjQUFjLEdBQUcsT0FBTyxJQUFJLG9CQUFvQixXQUFXLDRQQUE0UCxPQUFPLElBQUksb0JBQW9CLG1DQUFtQyw4TEFBOEwsNkRBQTZELHFDQUFxQyxtQkFBbUIsZUFBZSwrQkFBK0Isb0NBQW9DLCtDQUErQyx3SEFBd0gscURBQXFELEVBQUUsaUNBQWlDLElBQUksOENBQThDLE9BQU8seUJBQXlCLGdEQUFnRCx1QkFBdUIsc0NBQXNDLCtHQUErRywwQkFBMEIsb0VBQW9FLGlEQUFpRCwwSEFBMEgsV0FBVyxtRUFBbUUscUNBQXFDLElBQUksc0JBQXNCLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLE9BQU8sV0FBVyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLGdHQUFnRyxxQkFBcUIsNEJBQTRCLGlCQUFpQiwwSUFBMEksc0JBQXNCLHdDQUF3QyxxQkFBcUIsd0JBQXdCLDBCQUEwQixvQ0FBb0MsZ0JBQWdCLHdCQUF3QixnQkFBZ0Isa0RBQWtELGtCQUFrQixrQ0FBa0MsdUJBQXVCLG1DQUFtQyx1QkFBdUIsdUVBQXVFLGlCQUFpQixnQ0FBZ0MsdUJBQXVCLHNDQUFzQyxhQUFhLElBQUksTUFBTSw2SkFBNkosR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL3QrQztBQUM3QyxpRUFBZTs7Ozs7Ozs7Ozs7QUNERjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmO0FBQzZGO0FBQ2pCO0FBQzVFLDhCQUE4QixzRUFBMkIsQ0FBQywrRUFBcUM7QUFDL0Y7QUFDQSw4SEFBOEgsbUNBQW1DLGdHQUFnRyx5Q0FBeUMsMEhBQTBILG1DQUFtQywwR0FBMEcsV0FBVyw0REFBNEQsMEhBQTBILG9FQUFvRSwwR0FBMEcsc0RBQXNELHVCQUF1QiwwSEFBMEgsOERBQThELGdHQUFnRyxnQkFBZ0IsWUFBWSxxQkFBcUIsNENBQTRDLHNCQUFzQixlQUFlLGFBQWEsa0JBQWtCLG1CQUFtQix1QkFBdUIsVUFBVSw2QkFBNkIsa0RBQWtELCtCQUErQixvQ0FBb0MsdUNBQXVDLHVCQUF1QiwwQ0FBMEMsb0NBQW9DLGdDQUFnQyxlQUFlLGdDQUFnQyx3Q0FBd0MsZ0NBQWdDLDJDQUEyQyx5Q0FBeUMsa0RBQWtELGdDQUFnQyxnQ0FBZ0MscURBQXFELGdCQUFnQixzQ0FBc0MsMkRBQTJELGtDQUFrQyx1REFBdUQsMkRBQTJELDhFQUE4RSxnQ0FBZ0MsdURBQXVELDJEQUEyRCw4RUFBOEUsNkNBQTZDLDRDQUE0QyxnQ0FBZ0MsV0FBVyxZQUFZLHFEQUFxRCwwQ0FBMEMsV0FBVyxxREFBcUQsd0NBQXdDO0FBQ3BoRyxxQkFBcUIseUVBQXlFLDhCQUE4QixhQUFhLGdDQUFnQyxhQUFhLDJEQUEyRCxpQkFBaUIsK0JBQStCLGdDQUFnQyxhQUFhLG1CQUFtQix1QkFBdUIsT0FBTyxrQkFBa0IseUJBQXlCLGVBQWUsMkNBQTJDLGVBQWUsaURBQWlELHNDQUFzQyw0QkFBNEIsYUFBYSxtQ0FBbUMsMkRBQTJELDBDQUEwQyxxQ0FBcUMscUNBQXFDLDRDQUE0QyxvQ0FBb0MscUNBQXFDO0FBQzE3QixvQkFBb0IsYUFBYSw4QkFBOEIsc0RBQXNELGlDQUFpQywyQkFBMkIsdUJBQXVCLHVDQUF1QyxhQUFhLHVEQUF1RCxhQUFhLGVBQWUsbUJBQW1CLHVCQUF1Qiw0QkFBNEIsaUNBQWlDLHVDQUF1Qyx5QkFBeUIsc0JBQXNCLGlCQUFpQixrQ0FBa0MsNkNBQTZDLG1DQUFtQyw4Q0FBOEMsdUNBQXVDLGtCQUFrQixnQ0FBZ0MsV0FBVyxZQUFZLGlDQUFpQyxVQUFVLGtDQUFrQyxpQkFBaUIsMkJBQTJCLHVDQUF1QyxjQUFjLDZCQUE2QixrQkFBa0IscUNBQXFDLGlCQUFpQixpQ0FBaUMsNkNBQTZDLGtDQUFrQyw4Q0FBOEMsc0NBQXNDLGVBQWU7QUFDbnhDLHdCQUF3QixhQUFhLHNCQUFzQixzQkFBc0IsdUJBQXVCLG9CQUFvQiwyQkFBMkIsMkNBQTJDLGVBQWUsNkJBQTZCLFlBQVksK0JBQStCLDZCQUE2QixpQ0FBaUMsaURBQWlELDZCQUE2QixpQ0FBaUMsaURBQWlELGFBQWEsOEJBQThCLGtEQUFrRCw0QkFBNEIsYUFBYSxhQUFhLG1CQUFtQix1QkFBdUIsV0FBVztBQUMvckIscUJBQXFCLGFBQWEsc0NBQXNDLHFCQUFxQixtQkFBbUIsa0JBQWtCLHdDQUF3Qyx3Q0FBd0MsZ0JBQWdCLDhCQUE4QixhQUFhLG1CQUFtQixPQUFPLGVBQWUsa0JBQWtCLG9DQUFvQyxpQkFBaUIsY0FBYywwRUFBMEUsY0FBYyxlQUFlLGtFQUFrRSxrQkFBa0IsVUFBVSxzRkFBc0YsV0FBVyw2Q0FBNkMsdUNBQXVDLGtCQUFrQixVQUFVLFNBQVMsV0FBVyxZQUFZLFdBQVcsVUFBVSxzR0FBc0csVUFBVSxtQ0FBbUMseUJBQXlCLG9CQUFvQix1Q0FBdUMsZ0JBQWdCLGVBQWUsa0JBQWtCLDBCQUEwQixhQUFhLG1CQUFtQixlQUFlLFlBQVksb0pBQW9KLHNDQUFzQyxrQkFBa0IsNENBQTRDLGdCQUFnQixlQUFlLE9BQU8sWUFBWSxXQUFXLFVBQVUsU0FBUyx3QkFBd0Isa0VBQWtFLHdCQUF3Qix5REFBeUQsYUFBYSx3RUFBd0UsK0NBQStDLG9FQUFvRSwrQ0FBK0MsNkRBQTZELCtDQUErQyxrREFBa0QsYUFBYSx3RUFBd0UscURBQXFELHVEQUF1RCxvRUFBb0UscURBQXFELHVEQUF1RCw2REFBNkQscURBQXFELHVEQUF1RCxrRUFBa0Usc0JBQXNCLFlBQVksV0FBVyxrQkFBa0IsNkNBQTZDLGdCQUFnQixlQUFlLDZEQUE2RCxxREFBcUQsOERBQThELHNCQUFzQixZQUFZLFdBQVcsa0JBQWtCLDZDQUE2QyxnQkFBZ0IsZUFBZSwwREFBMEQscURBQXFELHVEQUF1RCxzQkFBc0IsWUFBWSxXQUFXLGtCQUFrQiw2Q0FBNkMsZ0JBQWdCLGVBQWUseURBQXlELHFEQUFxRCxrRUFBa0UsaURBQWlELDJFQUEyRSxZQUFZLG9DQUFvQyxlQUFlLG9CQUFvQix5QkFBeUIsOERBQThELFlBQVksb0NBQW9DLGVBQWUsb0JBQW9CLHlCQUF5Qix1REFBdUQsWUFBWSxvQ0FBb0MsZUFBZSxvQkFBb0IseUJBQXlCLDREQUE0RCx5QkFBeUIsNERBQTREO0FBQ3B4SSxnQkFBZ0IsaUtBQWlLLHNCQUFzQixtQkFBbUIsbUJBQW1CLG1CQUFtQixzREFBc0QsK0JBQStCLGdDQUFnQyw2QkFBNkIsNkJBQTZCLHNDQUFzQyx1Q0FBdUMsd0RBQXdELGdFQUFnRSw2REFBNkQscURBQXFELHFCQUFxQiwrQkFBK0IsNEJBQTRCLGtEQUFrRCxpQ0FBaUMsOEJBQThCLHVDQUF1Qyx1Q0FBdUMsNEJBQTRCLGtDQUFrQyx5QkFBeUIsbUNBQW1DLHVCQUF1QixrREFBa0QsNEJBQTRCLHNEQUFzRCw4QkFBOEIsb0NBQW9DLDBCQUEwQiw0QkFBNEIsOEJBQThCLDZCQUE2Qix5QkFBeUIsZ0NBQWdDLDJCQUEyQiw4QkFBOEIscUVBQXFFLDhDQUE4QyxvREFBb0QsOERBQThELG9FQUFvRSw0RUFBNEUsdUJBQXVCLHlDQUF5Qyx3Q0FBd0Msa0RBQWtELG9FQUFvRSxzRUFBc0UsNkJBQTZCLGdDQUFnQyxzQ0FBc0MsNEJBQTRCLCtCQUErQix3REFBd0QsNkJBQTZCLDhCQUE4QiwwQkFBMEIsbUNBQW1DLHFDQUFxQyxvQ0FBb0Msd0JBQXdCLGtEQUFrRCx1Q0FBdUMsd0NBQXdDO0FBQ3h2RixnQkFBZ0IsdUNBQXVDLHlDQUF5QyxzQ0FBc0MsdUNBQXVDLHVCQUF1QixhQUFhLDBCQUEwQiwwQ0FBMEMsMENBQTBDLDhDQUE4QywrQkFBK0IsdUJBQXVCLHVCQUF1QixrQkFBa0IsaUpBQWlKLDJCQUEyQix3Q0FBd0MsVUFBVSwyQkFBMkIsOERBQThELDZCQUE2QixtREFBbUQsOEJBQThCLG1EQUFtRCw0QkFBNEIsOERBQThELGlEQUFpRCwwQkFBMEIsVUFBVSwyQ0FBMkMsZ0JBQWdCLHlCQUF5Qiw0Q0FBNEMsZ0JBQWdCLGdCQUFnQixVQUFVLFdBQVcsVUFBVSxlQUFlLGtEQUFrRCxhQUFhLDRCQUE0Qiw2Q0FBNkMseURBQXlELDZEQUE2RCwyREFBMkQsK0NBQStDLG9EQUFvRCxlQUFlLDhCQUE4QixZQUFZLDhCQUE4QiwwQ0FBMEMscURBQXFELGFBQWEsb0RBQW9ELHFFQUFxRSw2REFBNkQsZ0NBQWdDLGtDQUFrQyxnQkFBZ0IsaUNBQWlDLGtCQUFrQixPQUFPLE1BQU0seUJBQXlCLHVEQUF1RCxrQkFBa0IsOEJBQThCLCtCQUErQixXQUFXLCtCQUErQixXQUFXLGtCQUFrQixnQkFBZ0Isb0RBQW9ELHNEQUFzRCx3REFBd0QsOEJBQThCLCtCQUErQixzQkFBc0Isd0tBQXdLLGdEQUFnRCxnTUFBZ00seUJBQXlCLGdMQUFnTCxrREFBa0Qsd01BQXdNLHlCQUF5QixvTEFBb0wsbURBQW1ELDRNQUE0TSx5QkFBeUIsNEtBQTRLLGlEQUFpRCxvTUFBb00sd0JBQXdCLDZFQUE2RSwrQkFBK0IsK0VBQStFLGdDQUFnQyxpRkFBaUYsMkNBQTJDLDJFQUEyRSw4QkFBOEIsaUZBQWlGLGlDQUFpQyxpRkFBaUYsMENBQTBDLDRCQUE0QixjQUFjLHlCQUF5Qix1QkFBdUIsMkJBQTJCLGVBQWUsNENBQTRDLGFBQWEsc0JBQXNCLHFCQUFxQix5QkFBeUIsa0JBQWtCLCtDQUErQywyQkFBMkIsbURBQW1ELHdCQUF3QixlQUFlLCtDQUErQyxPQUFPLE1BQU0sUUFBUSxTQUFTLFVBQVUsd0hBQXdILHlJQUF5SSxtQ0FBbUMsaUNBQWlDLFVBQVUsV0FBVyxZQUFZO0FBQzc4TCxPQUFPLHF4QkFBcXhCLGtVQUFrVSw0ZEFBNGQsb1NBQW9TLCsyQ0FBKzJDLHcxQkFBdzFCLHkvQ0FBeS9DLG1DQUFtQyxnR0FBZ0cseUNBQXlDLDBIQUEwSCxtQ0FBbUMsMEdBQTBHLFdBQVcsNERBQTRELDBIQUEwSCxvRUFBb0UsMEdBQTBHLHNEQUFzRCx1QkFBdUIsMEhBQTBILDhEQUE4RCxnR0FBZ0csZ0JBQWdCLFlBQVkscUJBQXFCLDRDQUE0QyxzQkFBc0IsZUFBZSxhQUFhLGtCQUFrQixtQkFBbUIsdUJBQXVCLFVBQVUsNkJBQTZCLGtEQUFrRCwrQkFBK0Isb0NBQW9DLHVDQUF1Qyx1QkFBdUIsMENBQTBDLG9DQUFvQyxnQ0FBZ0MsZUFBZSxnQ0FBZ0Msd0NBQXdDLGdDQUFnQywyQ0FBMkMseUNBQXlDLGtEQUFrRCxnQ0FBZ0MsZ0NBQWdDLHFEQUFxRCxnQkFBZ0Isc0NBQXNDLDJEQUEyRCxrQ0FBa0MsdURBQXVELDJEQUEyRCw4RUFBOEUsZ0NBQWdDLHVEQUF1RCwyREFBMkQsOEVBQThFLDZDQUE2Qyw0Q0FBNEMsZ0NBQWdDLFdBQVcsWUFBWSxxREFBcUQsMENBQTBDLFdBQVcscURBQXFELHdDQUF3QywyREFBMkQsdUJBQXVCLHlFQUF5RSw4QkFBOEIsYUFBYSxnQ0FBZ0MsYUFBYSwyREFBMkQsaUJBQWlCLCtCQUErQixnQ0FBZ0MsYUFBYSxtQkFBbUIsdUJBQXVCLE9BQU8sa0JBQWtCLHlCQUF5QixlQUFlLDJDQUEyQyxlQUFlLGlEQUFpRCxzQ0FBc0MsNEJBQTRCLGFBQWEsbUNBQW1DLDJEQUEyRCwwQ0FBMEMscUNBQXFDLHFDQUFxQyw0Q0FBNEMsb0NBQW9DLHFDQUFxQywyQ0FBMkMsc0JBQXNCLGFBQWEsOEJBQThCLHNEQUFzRCxpQ0FBaUMsMkJBQTJCLHVCQUF1Qix1Q0FBdUMsYUFBYSx1REFBdUQsYUFBYSxlQUFlLG1CQUFtQix1QkFBdUIsNEJBQTRCLGlDQUFpQyx1Q0FBdUMseUJBQXlCLHNCQUFzQixpQkFBaUIsa0NBQWtDLDZDQUE2QyxtQ0FBbUMsOENBQThDLHVDQUF1QyxrQkFBa0IsZ0NBQWdDLFdBQVcsWUFBWSxpQ0FBaUMsVUFBVSxrQ0FBa0MsaUJBQWlCLDJCQUEyQix1Q0FBdUMsY0FBYyw2QkFBNkIsa0JBQWtCLHFDQUFxQyxpQkFBaUIsaUNBQWlDLDZDQUE2QyxrQ0FBa0MsOENBQThDLHNDQUFzQyxlQUFlLGdCQUFnQiwwQkFBMEIsYUFBYSxzQkFBc0Isc0JBQXNCLHVCQUF1QixvQkFBb0IsMkJBQTJCLDJDQUEyQyxlQUFlLDZCQUE2QixZQUFZLCtCQUErQiw2QkFBNkIsaUNBQWlDLGlEQUFpRCw2QkFBNkIsaUNBQWlDLGlEQUFpRCxhQUFhLDhCQUE4QixrREFBa0QsNEJBQTRCLGFBQWEsYUFBYSxtQkFBbUIsdUJBQXVCLFdBQVcsWUFBWSx1QkFBdUIsYUFBYSxzQ0FBc0MscUJBQXFCLG1CQUFtQixrQkFBa0Isd0NBQXdDLHdDQUF3QyxnQkFBZ0IsOEJBQThCLGFBQWEsbUJBQW1CLE9BQU8sZUFBZSxrQkFBa0Isb0NBQW9DLGlCQUFpQixjQUFjLDBFQUEwRSxjQUFjLGVBQWUsb0VBQW9FLGtCQUFrQixVQUFVLHNGQUFzRixhQUFhLDZDQUE2Qyx1Q0FBdUMsa0JBQWtCLFVBQVUsU0FBUyxXQUFXLFlBQVksV0FBVyxVQUFVLHNHQUFzRyxVQUFVLG1DQUFtQyx5QkFBeUIsb0JBQW9CLHVDQUF1QyxnQkFBZ0IsZUFBZSxrQkFBa0IsMEJBQTBCLGFBQWEsbUJBQW1CLGVBQWUsWUFBWSxvSkFBb0osc0NBQXNDLGtCQUFrQiw0Q0FBNEMsZ0JBQWdCLGVBQWUsT0FBTyxZQUFZLFdBQVcsVUFBVSxTQUFTLHdCQUF3QixrRUFBa0Usd0JBQXdCLHlEQUF5RCxhQUFhLHdFQUF3RSwrQ0FBK0Msb0VBQW9FLCtDQUErQyw2REFBNkQsK0NBQStDLGtEQUFrRCxhQUFhLHdFQUF3RSxxREFBcUQsdURBQXVELG9FQUFvRSxxREFBcUQsdURBQXVELDZEQUE2RCxxREFBcUQsdURBQXVELGtFQUFrRSxzQkFBc0IsWUFBWSxXQUFXLGtCQUFrQiw2Q0FBNkMsZ0JBQWdCLGVBQWUsNkRBQTZELHFEQUFxRCw4REFBOEQsc0JBQXNCLFlBQVksV0FBVyxrQkFBa0IsNkNBQTZDLGdCQUFnQixlQUFlLDBEQUEwRCxxREFBcUQsdURBQXVELHNCQUFzQixZQUFZLFdBQVcsa0JBQWtCLDZDQUE2QyxnQkFBZ0IsZUFBZSx5REFBeUQscURBQXFELGtFQUFrRSxpREFBaUQsMkVBQTJFLFlBQVksb0NBQW9DLGVBQWUsb0JBQW9CLHlCQUF5Qiw4REFBOEQsWUFBWSxvQ0FBb0MsZUFBZSxvQkFBb0IseUJBQXlCLHVEQUF1RCxZQUFZLG9DQUFvQyxlQUFlLG9CQUFvQix5QkFBeUIsNERBQTRELHlCQUF5Qiw0REFBNEQseUJBQXlCLGtCQUFrQix5S0FBeUssc0JBQXNCLG1CQUFtQixtQkFBbUIsbUJBQW1CLDhEQUE4RCwrQkFBK0IsZ0NBQWdDLDZCQUE2Qiw2QkFBNkIsc0NBQXNDLHVDQUF1Qyx3REFBd0QsZ0VBQWdFLDZEQUE2RCxxREFBcUQscUJBQXFCLCtCQUErQiw0QkFBNEIsa0RBQWtELGlDQUFpQyw4QkFBOEIsdUNBQXVDLHVDQUF1Qyw0QkFBNEIsa0NBQWtDLHlCQUF5QixtQ0FBbUMsdUJBQXVCLGtEQUFrRCw0QkFBNEIsc0RBQXNELDhCQUE4QixvQ0FBb0MsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsNkJBQTZCLHlCQUF5QixnQ0FBZ0MsMkJBQTJCLDhCQUE4QixxRUFBcUUsOENBQThDLG9EQUFvRCw4REFBOEQsb0VBQW9FLDRFQUE0RSx1QkFBdUIseUNBQXlDLHdDQUF3QyxrREFBa0Qsb0VBQW9FLHNFQUFzRSw2QkFBNkIsZ0NBQWdDLHNDQUFzQyw0QkFBNEIsK0JBQStCLHdEQUF3RCw2QkFBNkIsOEJBQThCLDBCQUEwQixtQ0FBbUMscUNBQXFDLG9DQUFvQyx3QkFBd0Isa0RBQWtELHVDQUF1Qyx3Q0FBd0MsMEJBQTBCLGtCQUFrQix1Q0FBdUMseUNBQXlDLHNDQUFzQyx1Q0FBdUMsdUJBQXVCLGFBQWEsMEJBQTBCLDBDQUEwQywwQ0FBMEMsOENBQThDLCtCQUErQix1QkFBdUIsdUJBQXVCLGtCQUFrQixpSkFBaUosMkJBQTJCLHdDQUF3QyxVQUFVLDJCQUEyQiw4REFBOEQsNkJBQTZCLG1EQUFtRCw4QkFBOEIsbURBQW1ELDRCQUE0Qiw4REFBOEQsaURBQWlELDBCQUEwQixVQUFVLDJDQUEyQyxnQkFBZ0IseUJBQXlCLDRDQUE0QyxnQkFBZ0IsZ0JBQWdCLFVBQVUsV0FBVyxVQUFVLGVBQWUsa0RBQWtELGFBQWEsNEJBQTRCLDZDQUE2Qyx5REFBeUQsNkRBQTZELDJEQUEyRCwrQ0FBK0Msb0RBQW9ELGVBQWUsOEJBQThCLFlBQVksOEJBQThCLDBDQUEwQyxxREFBcUQsYUFBYSxvREFBb0QscUVBQXFFLDZEQUE2RCxnQ0FBZ0Msa0NBQWtDLGdCQUFnQixpQ0FBaUMsa0JBQWtCLE9BQU8sTUFBTSx5QkFBeUIsdURBQXVELGtCQUFrQiw4QkFBOEIsK0JBQStCLFdBQVcsK0JBQStCLGFBQWEsa0JBQWtCLGdCQUFnQixvREFBb0Qsc0RBQXNELHdEQUF3RCw4QkFBOEIsK0JBQStCLHNCQUFzQix3S0FBd0ssZ0RBQWdELGdNQUFnTSx5QkFBeUIsZ0xBQWdMLGtEQUFrRCx3TUFBd00seUJBQXlCLG9MQUFvTCxtREFBbUQsNE1BQTRNLHlCQUF5Qiw0S0FBNEssaURBQWlELG9NQUFvTSx3QkFBd0IsNkVBQTZFLCtCQUErQiwrRUFBK0UsZ0NBQWdDLGlGQUFpRiwyQ0FBMkMsMkVBQTJFLDhCQUE4QixpRkFBaUYsaUNBQWlDLGlGQUFpRiwwQ0FBMEMsNEJBQTRCLGNBQWMseUJBQXlCLHVCQUF1QiwyQkFBMkIsZUFBZSw0Q0FBNEMsYUFBYSxzQkFBc0IscUJBQXFCLHlCQUF5QixrQkFBa0IsK0NBQStDLDJCQUEyQixtREFBbUQsd0JBQXdCLGVBQWUsK0NBQStDLE9BQU8sTUFBTSxRQUFRLFNBQVMsVUFBVSx3SEFBd0gseUlBQXlJLG1DQUFtQyxpQ0FBaUMsVUFBVSxXQUFXLFlBQVksZ0hBQWdILHFCQUFxQjtBQUNybnhCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsaUlBQWlJO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxXQUFXLHFIQUFxSCxpQkFBaUIsaUJBQWlCLGNBQWMsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsVUFBVSx1Q0FBdUMsR0FBRyxzQkFBc0Isb0JBQW9CLFdBQVcsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHlDQUF5QyxlQUFlLGVBQWUsb0NBQW9DLGlCQUFpQixpQkFBaUIsb0JBQW9CLDRCQUE0QixPQUFPLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDRCQUE0QixnQ0FBZ0MsNkJBQTZCLHdEQUF3RCx5QkFBeUIsOENBQThDLFlBQVksdUJBQXVCLDBCQUEwQixPQUFPLDhCQUE4QiwyQkFBMkIsMkJBQTJCLE9BQU8sc0NBQXNDLHNCQUFzQixvQ0FBb0Msb0JBQW9CLE9BQU8sNENBQTRDLHNCQUFzQiw0QkFBNEIsMkJBQTJCLCtCQUErQixrQ0FBa0MsK0JBQStCLDBCQUEwQiwyQ0FBMkMseUJBQXlCLDJCQUEyQix3QkFBd0IsT0FBTyx3QkFBd0Isa0NBQWtDLDhCQUE4QixvQkFBb0IsbUJBQW1CLDRDQUE0QyxTQUFTLE9BQU8sdUJBQXVCLGlCQUFpQixvQ0FBb0MsU0FBUyxPQUFPLEtBQUssR0FBRyxvQ0FBb0MsMkJBQTJCLHNCQUFzQixHQUFHLGlCQUFpQiw0Q0FBNEMsR0FBRyx5QkFBeUIsa0JBQWtCLGdCQUFnQixHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQixnQkFBZ0IsZUFBZSxxQkFBcUIscUNBQXFDLGlDQUFpQyxvQkFBb0Isb0JBQW9CLDBCQUEwQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix5Q0FBeUMsZ0JBQWdCLDZCQUE2QixzQkFBc0IseUNBQXlDLHVCQUF1QixrQkFBa0IsMEJBQTBCLHNCQUFzQixjQUFjLCtCQUErQix5QkFBeUIsd0JBQXdCLHVCQUF1QixvQkFBb0IsT0FBTyxpQkFBaUIsa0NBQWtDLG9CQUFvQixnQkFBZ0Isc0JBQXNCLFNBQVMsT0FBTyx1QkFBdUIsMkJBQTJCLHFDQUFxQyxvQkFBb0IsaUNBQWlDLGdCQUFnQixzQkFBc0IsU0FBUyxtQkFBbUIsb0NBQW9DLGdDQUFnQyxTQUFTLE9BQU8sS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixrQkFBa0Isc0JBQXNCLHFCQUFxQiw2QkFBNkIsNEJBQTRCLGlCQUFpQixrQ0FBa0MsT0FBTyxrQkFBa0IsK0JBQStCLE9BQU8sd0JBQXdCLGNBQWMsK0JBQStCLFNBQVMsT0FBTyxXQUFXLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLG9CQUFvQixxQkFBcUIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsb0JBQW9CLHFDQUFxQywyQkFBMkIsT0FBTyxjQUFjLHNCQUFzQixvQkFBb0IsNEJBQTRCLHFCQUFxQixxQ0FBcUMsOEJBQThCLE9BQU8sZUFBZSxtQkFBbUIscUJBQXFCLDJCQUEyQiwrQkFBK0IsNkNBQTZDLE9BQU8sMEJBQTBCLCtCQUErQiwwQkFBMEIsK0JBQStCLE9BQU8sZUFBZSxzQkFBc0IsT0FBTyxLQUFLLEdBQUcsY0FBYyxlQUFlLHNCQUFzQix1QkFBdUIsd0JBQXdCLG9CQUFvQixnQkFBZ0IscUNBQXFDLDJCQUEyQixzQkFBc0IsOEJBQThCLG9CQUFvQixjQUFjLDRCQUE0QiwwQkFBMEIsMkJBQTJCLFdBQVcsU0FBUywyQkFBMkIsd0JBQXdCLHNCQUFzQixpQ0FBaUMsb0NBQW9DLGlDQUFpQyw0QkFBNEIsNkNBQTZDLG9DQUFvQyxnQ0FBZ0MsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLHFCQUFxQix3QkFBd0Isc0NBQXNDLGtDQUFrQyxXQUFXLHdCQUF3QiwwQkFBMEIsNEJBQTRCLFdBQVcsU0FBUyxPQUFPLHdCQUF3QixzQkFBc0IsNEJBQTRCLG9CQUFvQiwyQkFBMkIsMkNBQTJDLGtDQUFrQywrQkFBK0IsMEJBQTBCLDJDQUEyQyx5QkFBeUIsMkJBQTJCLHlEQUF5RCx3QkFBd0IsZ0JBQWdCLGlDQUFpQywyQkFBMkIsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsU0FBUyxtQkFBbUIsdUNBQXVDLHNCQUFzQixtQ0FBbUMsa0JBQWtCLHdCQUF3QixXQUFXLFNBQVMsc0JBQXNCLDJCQUEyQixzQkFBc0IsMEJBQTBCLGtCQUFrQiwyQkFBMkIsV0FBVyxxQkFBcUIsc0NBQXNDLGtDQUFrQyxvQkFBb0IsNkJBQTZCLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyx1QkFBdUIsa0JBQWtCLDBCQUEwQixLQUFLLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQixtQkFBbUIsdUJBQXVCLGtCQUFrQix1QkFBdUIsYUFBYSxvQkFBb0IseUJBQXlCLE9BQU8sS0FBSyxrQkFBa0Isb0JBQW9CLGVBQWUsMEJBQTBCLHFDQUFxQyxvQ0FBb0MsdUNBQXVDLGlCQUFpQixtQkFBbUIsMkJBQTJCLDJCQUEyQixxQkFBcUIsU0FBUyxPQUFPLGtDQUFrQyxxQkFBcUIsd0JBQXdCLGtCQUFrQix3QkFBd0IsMEJBQTBCLHFCQUFxQix5QkFBeUIsU0FBUywwQkFBMEIsc0JBQXNCLFNBQVMsMkJBQTJCLHFCQUFxQixTQUFTLE9BQU8sOEJBQThCLHdCQUF3QiwyQkFBMkIscUJBQXFCLDJCQUEyQix3QkFBd0Isd0JBQXdCLDBCQUEwQixzRUFBc0UsNkJBQTZCLHFCQUFxQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixTQUFTLGdFQUFnRSw2QkFBNkIsaUJBQWlCLGtCQUFrQix1QkFBdUIsc0JBQXNCLGlDQUFpQyw2QkFBNkIsaUNBQWlDLFNBQVMsOEZBQThGLG9DQUFvQyxTQUFTLDJHQUEyRyxpQ0FBaUMsU0FBUyx5R0FBeUcsd0JBQXdCLDZCQUE2Qix3QkFBd0IsU0FBUyxzR0FBc0cseUJBQXlCLFNBQVMsMEVBQTBFLHFCQUFxQixzQkFBc0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsOEJBQThCLFNBQVMsT0FBTyxtQkFBbUIsMEJBQTBCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLFNBQVMsT0FBTyxLQUFLLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsZUFBZSxzQkFBc0IscUJBQXFCLGdCQUFnQiwrQkFBK0IsZ0RBQWdELDRCQUE0QiwrQkFBK0Isd0JBQXdCLEtBQUssR0FBRyxxQkFBcUI7QUFDNS9aO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2piMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxDQUN3RztBQUMxRyxDQUFDLHVCQUF1Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsYUFBYTtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLGVBQWU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxFQUFFLGlCQUFpQixFQUFFLE1BQU07QUFDM0Q7QUFDQSwrQkFBK0IsUUFBUTtBQUN2Qyx3REFBd0Q7QUFDeEQsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDLGtCQUFrQixzQkFBc0I7QUFDeEMsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFO0FBQzVFLDRFQUE0RTtBQUM1RSx3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRiwwRUFBMEU7QUFDMUUsMEVBQTBFO0FBQzFFO0FBQ0EsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUseUVBQXlFO0FBQ3pFLDREQUE0RDtBQUM1RCxvREFBb0Q7QUFDcEQsNENBQTRDO0FBQzVDLDhEQUE4RDtBQUM5RCw4REFBOEQ7QUFDOUQsNENBQTRDO0FBQzVDLGlEQUFpRDtBQUNqRCxnRUFBZ0U7QUFDaEUsaURBQWlEO0FBQ2pELHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyx1Q0FBdUM7O0FBRXZDO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixNQUFNO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxzRkFBc0YsNkRBQTZEO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdVRBQXVUO0FBQ3ZUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQXdDLG9GQUFvRixvS0FBb0ssaUhBQWlIO0FBQ3paO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUixzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFD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QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNU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d0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERpQjtBQUNLO0FBQ0o7QUFDUTtBQUs5QjtBQUNJO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdDOztBQUVoQztBQUNBLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LElBQUksc0VBQXVCLE1BQU0sdUVBQXdCO0FBQ3pELG9DQUFvQywwRUFBMkI7QUFDL0Q7QUFDQSwyQkFBMkIsbUVBQTRCO0FBQ3ZEO0FBQ0E7QUFDQSxFQUFFLDJFQUFvQztBQUN0QyxFQUFFO0FBQ0YsRUFBRSxvREFBYSxDQUFDLGlEQUFjLEdBQUc7QUFDakM7O0FBRUE7QUFDQSxFQUFFLGdEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Fpci1kYXRlcGlja2VyL2Fpci1kYXRlcGlja2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9haXItZGF0ZXBpY2tlci9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvYWlyLWRhdGVwaWNrZXIvbG9jYWxlL2VuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9haXItZGF0ZXBpY2tlci9haXItZGF0ZXBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L2Rpc3QvcHVyaWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9haXItZGF0ZXBpY2tlci9haXItZGF0ZXBpY2tlci5jc3M/N2M3NiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbUNsYXNzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvUHJvamVjdENsYXNzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkFpckRhdGVwaWNrZXI9dCgpOmUuQWlyRGF0ZXBpY2tlcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6ZnVuY3Rpb24odCxpKXtmb3IodmFyIHMgaW4gaSllLm8oaSxzKSYmIWUubyh0LHMpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLHtlbnVtZXJhYmxlOiEwLGdldDppW3NdfSl9LG86ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9fSx0PXt9O2UuZCh0LHtkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIFJ9fSk7dmFyIGk9e2RheXM6XCJkYXlzXCIsbW9udGhzOlwibW9udGhzXCIseWVhcnM6XCJ5ZWFyc1wiLGRheTpcImRheVwiLG1vbnRoOlwibW9udGhcIix5ZWFyOlwieWVhclwiLGV2ZW50Q2hhbmdlVmlld0RhdGU6XCJjaGFuZ2VWaWV3RGF0ZVwiLGV2ZW50Q2hhbmdlQ3VycmVudFZpZXc6XCJjaGFuZ2VDdXJyZW50Vmlld1wiLGV2ZW50Q2hhbmdlRm9jdXNEYXRlOlwiY2hhbmdlRm9jdXNEYXRlXCIsZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGU6XCJjaGFuZ2VTZWxlY3RlZERhdGVcIixldmVudENoYW5nZVRpbWU6XCJjaGFuZ2VUaW1lXCIsZXZlbnRDaGFuZ2VMYXN0U2VsZWN0ZWREYXRlOlwiY2hhbmdlTGFzdFNlbGVjdGVkRGF0ZVwiLGFjdGlvblNlbGVjdERhdGU6XCJzZWxlY3REYXRlXCIsYWN0aW9uVW5zZWxlY3REYXRlOlwidW5zZWxlY3REYXRlXCIsY3NzQ2xhc3NXZWVrZW5kOlwiLXdlZWtlbmQtXCJ9LHM9e2NsYXNzZXM6XCJcIixpbmxpbmU6ITEsbG9jYWxlOntkYXlzOltcItCS0L7RgdC60YDQtdGB0LXQvdGM0LVcIixcItCf0L7QvdC10LTQtdC70YzQvdC40LpcIixcItCS0YLQvtGA0L3QuNC6XCIsXCLQodGA0LXQtNCwXCIsXCLQp9C10YLQstC10YDQs1wiLFwi0J/Rj9GC0L3QuNGG0LBcIixcItCh0YPQsdCx0L7RgtCwXCJdLGRheXNTaG9ydDpbXCLQktC+0YFcIixcItCf0L7QvVwiLFwi0JLRgtC+XCIsXCLQodGA0LVcIixcItCn0LXRglwiLFwi0J/Rj9GCXCIsXCLQodGD0LFcIl0sZGF5c01pbjpbXCLQktGBXCIsXCLQn9C9XCIsXCLQktGCXCIsXCLQodGAXCIsXCLQp9GCXCIsXCLQn9GCXCIsXCLQodCxXCJdLG1vbnRoczpbXCLQr9C90LLQsNGA0YxcIixcItCk0LXQstGA0LDQu9GMXCIsXCLQnNCw0YDRglwiLFwi0JDQv9GA0LXQu9GMXCIsXCLQnNCw0LlcIixcItCY0Y7QvdGMXCIsXCLQmNGO0LvRjFwiLFwi0JDQstCz0YPRgdGCXCIsXCLQodC10L3RgtGP0LHRgNGMXCIsXCLQntC60YLRj9Cx0YDRjFwiLFwi0J3QvtGP0LHRgNGMXCIsXCLQlNC10LrQsNCx0YDRjFwiXSxtb250aHNTaG9ydDpbXCLQr9C90LJcIixcItCk0LXQslwiLFwi0JzQsNGAXCIsXCLQkNC/0YBcIixcItCc0LDQuVwiLFwi0JjRjtC9XCIsXCLQmNGO0LtcIixcItCQ0LLQs1wiLFwi0KHQtdC9XCIsXCLQntC60YJcIixcItCd0L7Rj1wiLFwi0JTQtdC6XCJdLHRvZGF5Olwi0KHQtdCz0L7QtNC90Y9cIixjbGVhcjpcItCe0YfQuNGB0YLQuNGC0YxcIixkYXRlRm9ybWF0OlwiZGQuTU0ueXl5eVwiLHRpbWVGb3JtYXQ6XCJISDptbVwiLGZpcnN0RGF5OjF9LHN0YXJ0RGF0ZTpuZXcgRGF0ZSxmaXJzdERheTpcIlwiLHdlZWtlbmRzOls2LDBdLGRhdGVGb3JtYXQ6XCJcIixhbHRGaWVsZDpcIlwiLGFsdEZpZWxkRGF0ZUZvcm1hdDpcIlRcIix0b2dnbGVTZWxlY3RlZDohMCxrZXlib2FyZE5hdjohMCxzZWxlY3RlZERhdGVzOiExLGNvbnRhaW5lcjpcIlwiLGlzTW9iaWxlOiExLHZpc2libGU6ITEscG9zaXRpb246XCJib3R0b20gbGVmdFwiLG9mZnNldDoxMix2aWV3OmkuZGF5cyxtaW5WaWV3OmkuZGF5cyxzaG93T3RoZXJNb250aHM6ITAsc2VsZWN0T3RoZXJNb250aHM6ITAsbW92ZVRvT3RoZXJNb250aHNPblNlbGVjdDohMCxzaG93T3RoZXJZZWFyczohMCxzZWxlY3RPdGhlclllYXJzOiEwLG1vdmVUb090aGVyWWVhcnNPblNlbGVjdDohMCxtaW5EYXRlOlwiXCIsbWF4RGF0ZTpcIlwiLGRpc2FibGVOYXZXaGVuT3V0T2ZSYW5nZTohMCxtdWx0aXBsZURhdGVzOiExLG11bHRpcGxlRGF0ZXNTZXBhcmF0b3I6XCIsIFwiLHJhbmdlOiExLGR5bmFtaWNSYW5nZTohMCxidXR0b25zOiExLG1vbnRoc0ZpZWxkOlwibW9udGhzU2hvcnRcIixzaG93RXZlbnQ6XCJmb2N1c1wiLGF1dG9DbG9zZTohMSxmaXhlZEhlaWdodDohMSxwcmV2SHRtbDonPHN2Zz48cGF0aCBkPVwiTSAxNywxMiBsIC01LDUgbCA1LDVcIj48L3BhdGg+PC9zdmc+JyxuZXh0SHRtbDonPHN2Zz48cGF0aCBkPVwiTSAxNCwxMiBsIDUsNSBsIC01LDVcIj48L3BhdGg+PC9zdmc+JyxuYXZUaXRsZXM6e2RheXM6XCJNTU1NLCA8aT55eXl5PC9pPlwiLG1vbnRoczpcInl5eXlcIix5ZWFyczpcInl5eXkxIC0geXl5eTJcIn0sdGltZXBpY2tlcjohMSxvbmx5VGltZXBpY2tlcjohMSxkYXRlVGltZVNlcGFyYXRvcjpcIiBcIix0aW1lRm9ybWF0OlwiXCIsbWluSG91cnM6MCxtYXhIb3VyczoyNCxtaW5NaW51dGVzOjAsbWF4TWludXRlczo1OSxob3Vyc1N0ZXA6MSxtaW51dGVzU3RlcDoxLG9uU2VsZWN0OiExLG9uQ2hhbmdlVmlld0RhdGU6ITEsb25DaGFuZ2VWaWV3OiExLG9uUmVuZGVyQ2VsbDohMSxvblNob3c6ITEsb25IaWRlOiExLG9uQ2xpY2tEYXlOYW1lOiExfTtmdW5jdGlvbiBhKGUpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpkb2N1bWVudDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT90LnF1ZXJ5U2VsZWN0b3IoZSk6ZX1mdW5jdGlvbiBuKCl7bGV0e3RhZ05hbWU6ZT1cImRpdlwiLGNsYXNzTmFtZTp0PVwiXCIsaW5uZXJIdG1sOmk9XCJcIixpZDpzPVwiXCIsYXR0cnM6YT17fX09YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gdCYmbi5jbGFzc0xpc3QuYWRkKC4uLnQuc3BsaXQoXCIgXCIpKSxzJiYobi5pZD1zKSxpJiYobi5pbm5lckhUTUw9aSksYSYmcihuLGEpLG59ZnVuY3Rpb24gcihlLHQpe2ZvcihsZXRbaSxzXW9mIE9iamVjdC5lbnRyaWVzKHQpKXZvaWQgMCE9PXMmJmUuc2V0QXR0cmlidXRlKGkscyk7cmV0dXJuIGV9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gbmV3IERhdGUoZS5nZXRGdWxsWWVhcigpLGUuZ2V0TW9udGgoKSsxLDApLmdldERhdGUoKX1mdW5jdGlvbiBoKGUpe2xldCB0PWUuZ2V0SG91cnMoKSx7aG91cnM6aSxkYXlQZXJpb2Q6c309bCh0KTtyZXR1cm57eWVhcjplLmdldEZ1bGxZZWFyKCksbW9udGg6ZS5nZXRNb250aCgpLGZ1bGxNb250aDplLmdldE1vbnRoKCkrMTwxMD9cIjBcIisoZS5nZXRNb250aCgpKzEpOmUuZ2V0TW9udGgoKSsxLGRhdGU6ZS5nZXREYXRlKCksZnVsbERhdGU6ZS5nZXREYXRlKCk8MTA/XCIwXCIrZS5nZXREYXRlKCk6ZS5nZXREYXRlKCksZGF5OmUuZ2V0RGF5KCksaG91cnM6dCxmdWxsSG91cnM6ZCh0KSxob3VyczEyOmksZGF5UGVyaW9kOnMsZnVsbEhvdXJzMTI6ZChpKSxtaW51dGVzOmUuZ2V0TWludXRlcygpLGZ1bGxNaW51dGVzOmUuZ2V0TWludXRlcygpPDEwP1wiMFwiK2UuZ2V0TWludXRlcygpOmUuZ2V0TWludXRlcygpfX1mdW5jdGlvbiBsKGUpe3JldHVybntkYXlQZXJpb2Q6ZT4xMT9cInBtXCI6XCJhbVwiLGhvdXJzOmUlMTI9PTA/MTI6ZSUxMn19ZnVuY3Rpb24gZChlKXtyZXR1cm4gZTwxMD9cIjBcIitlOmV9ZnVuY3Rpb24gYyhlKXtsZXQgdD0xMCpNYXRoLmZsb29yKGUuZ2V0RnVsbFllYXIoKS8xMCk7cmV0dXJuW3QsdCs5XX1mdW5jdGlvbiB1KCl7bGV0IGU9W107Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkodCkscz0wO3M8dDtzKyspaVtzXT1hcmd1bWVudHNbc107cmV0dXJuIGkuZm9yRWFjaCgodD0+e2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KWZvcihsZXQgaSBpbiB0KXRbaV0mJmUucHVzaChpKTtlbHNlIHQmJmUucHVzaCh0KX0pKSxlLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHAoZSx0KXtsZXQgcz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06aS5kYXlzO2lmKCFlfHwhdClyZXR1cm4hMTtsZXQgYT1oKGUpLG49aCh0KTtyZXR1cm57W2kuZGF5c106YS5kYXRlPT09bi5kYXRlJiZhLm1vbnRoPT09bi5tb250aCYmYS55ZWFyPT09bi55ZWFyLFtpLm1vbnRoc106YS5tb250aD09PW4ubW9udGgmJmEueWVhcj09PW4ueWVhcixbaS55ZWFyc106YS55ZWFyPT09bi55ZWFyfVtzXX1mdW5jdGlvbiBtKGUsdCxpKXtsZXQgcz1nKGUsITEpLmdldFRpbWUoKSxhPWcodCwhMSkuZ2V0VGltZSgpO3JldHVybiBpP3M+PWE6cz5hfWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4hbShlLHQsITApfWZ1bmN0aW9uIGcoZSl7bGV0IHQ9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXSxpPW5ldyBEYXRlKGUuZ2V0VGltZSgpKTtyZXR1cm5cImJvb2xlYW5cIiE9dHlwZW9mIHR8fHR8fGZ1bmN0aW9uKGUpe2Uuc2V0SG91cnMoMCwwLDAsMCl9KGkpLGl9ZnVuY3Rpb24gRChlLHQsaSl7ZS5sZW5ndGg/ZS5mb3JFYWNoKChlPT57ZS5hZGRFdmVudExpc3RlbmVyKHQsaSl9KSk6ZS5hZGRFdmVudExpc3RlbmVyKHQsaSl9ZnVuY3Rpb24geShlLHQpe3JldHVybiEoIWV8fGU9PT1kb2N1bWVudHx8ZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpJiYoZS5tYXRjaGVzKHQpP2U6eShlLnBhcmVudE5vZGUsdCkpfWZ1bmN0aW9uIGYoZSx0LGkpe3JldHVybiBlPmk/aTplPHQ/dDplfWZ1bmN0aW9uIHcoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkodD4xP3QtMTowKSxzPTE7czx0O3MrKylpW3MtMV09YXJndW1lbnRzW3NdO3JldHVybiBpLmZpbHRlcigoZT0+ZSkpLmZvckVhY2goKHQ9Pntmb3IobGV0W2ksc11vZiBPYmplY3QuZW50cmllcyh0KSlpZih2b2lkIDAhPT1zJiZcIltvYmplY3QgT2JqZWN0XVwiPT09cy50b1N0cmluZygpKXtsZXQgdD12b2lkIDAhPT1lW2ldP2VbaV0udG9TdHJpbmcoKTp2b2lkIDAsYT1zLnRvU3RyaW5nKCksbj1BcnJheS5pc0FycmF5KHMpP1tdOnt9O2VbaV09ZVtpXT90IT09YT9uOmVbaV06bix3KGVbaV0scyl9ZWxzZSBlW2ldPXN9KSksZX1mdW5jdGlvbiBiKGUpe2xldCB0PWU7cmV0dXJuIGUgaW5zdGFuY2VvZiBEYXRlfHwoXCJzdHJpbmdcIj09dHlwZW9mIGUmJi9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KGUpJiYoZSs9XCJUMDA6MDA6MDBcIiksdD1uZXcgRGF0ZShlKSksaXNOYU4odC5nZXRUaW1lKCkpJiYoY29uc29sZS5sb2coYFVuYWJsZSB0byBjb252ZXJ0IHZhbHVlIFwiJHtlfVwiIHRvIERhdGUgb2JqZWN0YCksdD0hMSksdH1mdW5jdGlvbiBrKGUpe2xldCB0PVwiXFxcXHN8XFxcXC58LXwvfFxcXFxcXFxcfCx8XFxcXCR8XFxcXCF8XFxcXD98Onw7XCI7cmV0dXJuIG5ldyBSZWdFeHAoXCIoXnw+fFwiK3QrXCIpKFwiK2UrXCIpKCR8PHxcIit0K1wiKVwiLFwiZ1wiKX1mdW5jdGlvbiAkKGUsdCxpKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgaT1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09aSl7dmFyIHM9aS5jYWxsKGUsXCJzdHJpbmdcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHMpcmV0dXJuIHM7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybiBTdHJpbmcoZSl9KGUpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX1jbGFzcyBDe2NvbnN0cnVjdG9yKCl7bGV0e3R5cGU6ZSxkYXRlOnQsZHA6aSxvcHRzOnMsYm9keTphfT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307JCh0aGlzLFwiZm9jdXNcIiwoKCk9Pnt0aGlzLiRjZWxsLmNsYXNzTGlzdC5hZGQoXCItZm9jdXMtXCIpLHRoaXMuZm9jdXNlZD0hMH0pKSwkKHRoaXMsXCJyZW1vdmVGb2N1c1wiLCgoKT0+e3RoaXMuJGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIi1mb2N1cy1cIiksdGhpcy5mb2N1c2VkPSExfSkpLCQodGhpcyxcInNlbGVjdFwiLCgoKT0+e3RoaXMuJGNlbGwuY2xhc3NMaXN0LmFkZChcIi1zZWxlY3RlZC1cIiksdGhpcy5zZWxlY3RlZD0hMH0pKSwkKHRoaXMsXCJyZW1vdmVTZWxlY3RcIiwoKCk9Pnt0aGlzLiRjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCItc2VsZWN0ZWQtXCIsXCItcmFuZ2UtZnJvbS1cIixcIi1yYW5nZS10by1cIiksdGhpcy5zZWxlY3RlZD0hMX0pKSwkKHRoaXMsXCJvbkNoYW5nZVNlbGVjdGVkRGF0ZVwiLCgoKT0+e3RoaXMuaXNEaXNhYmxlZHx8KHRoaXMuX2hhbmRsZVNlbGVjdGVkU3RhdHVzKCksdGhpcy5vcHRzLnJhbmdlJiZ0aGlzLl9oYW5kbGVSYW5nZVN0YXR1cygpKX0pKSwkKHRoaXMsXCJvbkNoYW5nZUZvY3VzRGF0ZVwiLChlPT57aWYoIWUpcmV0dXJuIHZvaWQodGhpcy5mb2N1c2VkJiZ0aGlzLnJlbW92ZUZvY3VzKCkpO2xldCB0PXAoZSx0aGlzLmRhdGUsdGhpcy50eXBlKTt0P3RoaXMuZm9jdXMoKTohdCYmdGhpcy5mb2N1c2VkJiZ0aGlzLnJlbW92ZUZvY3VzKCksdGhpcy5vcHRzLnJhbmdlJiZ0aGlzLl9oYW5kbGVSYW5nZVN0YXR1cygpfSkpLCQodGhpcyxcInJlbmRlclwiLCgoKT0+KHRoaXMuJGNlbGwuaW5uZXJIVE1MPXRoaXMuX2dldEh0bWwoKSx0aGlzLl9oYW5kbGVDbGFzc2VzKCksdGhpcy4kY2VsbCkpKSx0aGlzLnR5cGU9ZSx0aGlzLnNpbmdsZVR5cGU9dGhpcy50eXBlLnNsaWNlKDAsLTEpLHRoaXMuZGF0ZT10LHRoaXMuZHA9aSx0aGlzLm9wdHM9cyx0aGlzLmJvZHk9YSx0aGlzLmN1c3RvbURhdGE9ITEsdGhpcy5pbml0KCl9aW5pdCgpe3ZhciBlO2xldHtvblJlbmRlckNlbGw6dH09dGhpcy5vcHRzO3QmJih0aGlzLmN1c3RvbURhdGE9dCh7ZGF0ZTp0aGlzLmRhdGUsY2VsbFR5cGU6dGhpcy5zaW5nbGVUeXBlLGRhdGVwaWNrZXI6dGhpcy5kcH0pKSx0aGlzLl9jcmVhdGVFbGVtZW50KCksdGhpcy5fYmluZERhdGVwaWNrZXJFdmVudHMoKSxudWxsIT09KGU9dGhpcy5jdXN0b21EYXRhKSYmdm9pZCAwIT09ZSYmZS5kaXNhYmxlZCYmdGhpcy5kcC5kaXNhYmxlRGF0ZSh0aGlzLmRhdGUpfV9iaW5kRGF0ZXBpY2tlckV2ZW50cygpe3RoaXMuZHAub24oaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlU2VsZWN0ZWREYXRlKSx0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VGb2N1c0RhdGUsdGhpcy5vbkNoYW5nZUZvY3VzRGF0ZSl9dW5iaW5kRGF0ZXBpY2tlckV2ZW50cygpe3RoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5vbkNoYW5nZVNlbGVjdGVkRGF0ZSksdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZUZvY3VzRGF0ZSx0aGlzLm9uQ2hhbmdlRm9jdXNEYXRlKX1fY3JlYXRlRWxlbWVudCgpe3ZhciBlO2xldHt5ZWFyOnQsbW9udGg6aSxkYXRlOnN9PWgodGhpcy5kYXRlKSxhPShudWxsPT09KGU9dGhpcy5jdXN0b21EYXRhKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5hdHRycyl8fHt9O3RoaXMuJGNlbGw9bih7YXR0cnM6e1wiZGF0YS15ZWFyXCI6dCxcImRhdGEtbW9udGhcIjppLFwiZGF0YS1kYXRlXCI6cywuLi5hfX0pLHRoaXMuJGNlbGwuYWRwQ2VsbD10aGlzfV9nZXRDbGFzc05hbWUoKXt2YXIgZTtsZXQgdD1uZXcgRGF0ZSx7c2VsZWN0T3RoZXJNb250aHM6cyxzZWxlY3RPdGhlclllYXJzOmF9PXRoaXMub3B0cyx7bWluRGF0ZTpuLG1heERhdGU6cixpc0RhdGVEaXNhYmxlZDpvfT10aGlzLmRwLHtkYXk6bH09aCh0aGlzLmRhdGUpLGQ9dGhpcy5faXNPdXRPZk1pbk1heFJhbmdlKCksYz1vKHRoaXMuZGF0ZSksbT11KFwiYWlyLWRhdGVwaWNrZXItY2VsbFwiLGAtJHt0aGlzLnNpbmdsZVR5cGV9LWAse1wiLWN1cnJlbnQtXCI6cCh0LHRoaXMuZGF0ZSx0aGlzLnR5cGUpLFwiLW1pbi1kYXRlLVwiOm4mJnAobix0aGlzLmRhdGUsdGhpcy50eXBlKSxcIi1tYXgtZGF0ZS1cIjpyJiZwKHIsdGhpcy5kYXRlLHRoaXMudHlwZSl9KSx2PVwiXCI7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZSBpLmRheXM6dj11KHtcIi13ZWVrZW5kLVwiOnRoaXMuZHAuaXNXZWVrZW5kKGwpLFwiLW90aGVyLW1vbnRoLVwiOnRoaXMuaXNPdGhlck1vbnRoLFwiLWRpc2FibGVkLVwiOnRoaXMuaXNPdGhlck1vbnRoJiYhc3x8ZHx8Y30pO2JyZWFrO2Nhc2UgaS5tb250aHM6dj11KHtcIi1kaXNhYmxlZC1cIjpkfSk7YnJlYWs7Y2FzZSBpLnllYXJzOnY9dSh7XCItb3RoZXItZGVjYWRlLVwiOnRoaXMuaXNPdGhlckRlY2FkZSxcIi1kaXNhYmxlZC1cIjpkfHx0aGlzLmlzT3RoZXJEZWNhZGUmJiFhfSl9cmV0dXJuIHUobSx2LG51bGw9PT0oZT10aGlzLmN1c3RvbURhdGEpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNsYXNzZXMpLnNwbGl0KFwiIFwiKX1fZ2V0SHRtbCgpe3ZhciBlO2xldHt5ZWFyOnQsbW9udGg6cyxkYXRlOmF9PWgodGhpcy5kYXRlKSx7c2hvd090aGVyTW9udGhzOm4sc2hvd090aGVyWWVhcnM6cn09dGhpcy5vcHRzO2lmKG51bGwhPT0oZT10aGlzLmN1c3RvbURhdGEpJiZ2b2lkIDAhPT1lJiZlLmh0bWwpcmV0dXJuIHRoaXMuY3VzdG9tRGF0YS5odG1sO3N3aXRjaCh0aGlzLnR5cGUpe2Nhc2UgaS5kYXlzOnJldHVybiFuJiZ0aGlzLmlzT3RoZXJNb250aD9cIlwiOmE7Y2FzZSBpLm1vbnRoczpyZXR1cm4gdGhpcy5kcC5sb2NhbGVbdGhpcy5vcHRzLm1vbnRoc0ZpZWxkXVtzXTtjYXNlIGkueWVhcnM6cmV0dXJuIXImJnRoaXMuaXNPdGhlckRlY2FkZT9cIlwiOnR9fV9pc091dE9mTWluTWF4UmFuZ2UoKXtsZXR7bWluRGF0ZTplLG1heERhdGU6dH09dGhpcy5kcCx7dHlwZTpzLGRhdGU6YX09dGhpcyx7bW9udGg6bix5ZWFyOnIsZGF0ZTpvfT1oKGEpLGw9cz09PWkuZGF5cyxkPXM9PT1pLnllYXJzLGM9ISFlJiZuZXcgRGF0ZShyLGQ/ZS5nZXRNb250aCgpOm4sbD9vOmUuZ2V0RGF0ZSgpKSx1PSEhdCYmbmV3IERhdGUocixkP3QuZ2V0TW9udGgoKTpuLGw/bzp0LmdldERhdGUoKSk7cmV0dXJuIGUmJnQ/dihjLGUpfHxtKHUsdCk6ZT92KGMsZSk6dD9tKHUsdCk6dm9pZCAwfWRlc3Ryb3koKXt0aGlzLnVuYmluZERhdGVwaWNrZXJFdmVudHMoKX1faGFuZGxlUmFuZ2VTdGF0dXMoKXtjb25zdHtzZWxlY3RlZERhdGVzOmUsZm9jdXNEYXRlOnQscmFuZ2VEYXRlVG86aSxyYW5nZURhdGVGcm9tOnN9PXRoaXMuZHAsYT1lLmxlbmd0aDtpZighYSlyZXR1cm47bGV0IG49cyxyPWk7aWYoMT09PWEmJnQpe2NvbnN0IGk9bSh0LGVbMF0pO249aT9lWzBdOnQscj1pP3Q6ZVswXX1sZXQgbz11KHtcIi1pbi1yYW5nZS1cIjpuJiZyJiYoaD10aGlzLmRhdGUsbD1uLGQ9cixtKGgsbCkmJnYoaCxkKSksXCItcmFuZ2UtZnJvbS1cIjpuJiZwKHRoaXMuZGF0ZSxuLHRoaXMudHlwZSksXCItcmFuZ2UtdG8tXCI6ciYmcCh0aGlzLmRhdGUscix0aGlzLnR5cGUpfSk7dmFyIGgsbCxkO3RoaXMuJGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIi1yYW5nZS1mcm9tLVwiLFwiLXJhbmdlLXRvLVwiLFwiLWluLXJhbmdlLVwiKSxvJiZ0aGlzLiRjZWxsLmNsYXNzTGlzdC5hZGQoLi4uby5zcGxpdChcIiBcIikpfV9oYW5kbGVTZWxlY3RlZFN0YXR1cygpe2xldCBlPXRoaXMuZHAuX2NoZWNrSWZEYXRlSXNTZWxlY3RlZCh0aGlzLmRhdGUsdGhpcy50eXBlKTtlP3RoaXMuc2VsZWN0KCk6IWUmJnRoaXMuc2VsZWN0ZWQmJnRoaXMucmVtb3ZlU2VsZWN0KCl9X2hhbmRsZUluaXRpYWxGb2N1c1N0YXR1cygpe3AodGhpcy5kcC5mb2N1c0RhdGUsdGhpcy5kYXRlLHRoaXMudHlwZSkmJnRoaXMuZm9jdXMoKX1faGFuZGxlQ2xhc3Nlcygpe3RoaXMuJGNlbGwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIlwiKSx0aGlzLl9oYW5kbGVJbml0aWFsRm9jdXNTdGF0dXMoKSx0aGlzLmRwLmhhc1NlbGVjdGVkRGF0ZXMmJih0aGlzLl9oYW5kbGVTZWxlY3RlZFN0YXR1cygpLHRoaXMuZHAub3B0cy5yYW5nZSYmdGhpcy5faGFuZGxlUmFuZ2VTdGF0dXMoKSksdGhpcy4kY2VsbC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuX2dldENsYXNzTmFtZSgpKX1nZXQgaXNEaXNhYmxlZCgpe3JldHVybiB0aGlzLiRjZWxsLm1hdGNoZXMoXCIuLWRpc2FibGVkLVwiKX1nZXQgaXNPdGhlck1vbnRoKCl7cmV0dXJuIHRoaXMuZHAuaXNPdGhlck1vbnRoKHRoaXMuZGF0ZSl9Z2V0IGlzT3RoZXJEZWNhZGUoKXtyZXR1cm4gdGhpcy5kcC5pc090aGVyRGVjYWRlKHRoaXMuZGF0ZSl9fWZ1bmN0aW9uIF8oZSx0LGkpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBpPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1pKXt2YXIgcz1pLmNhbGwoZSxcInN0cmluZ1wiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcylyZXR1cm4gczt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuIFN0cmluZyhlKX0oZSk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWxldCBNPXtbaS5kYXlzXTpgPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci1ib2R5LS1jZWxscyAtJHtpLmRheXN9LVwiPjwvZGl2PmAsW2kubW9udGhzXTpgPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzIC0ke2kubW9udGhzfS1cIj48L2Rpdj5gLFtpLnllYXJzXTpgPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzIC0ke2kueWVhcnN9LVwiPjwvZGl2PmB9O2NvbnN0IFM9XCIuYWlyLWRhdGVwaWNrZXItY2VsbFwiO2NsYXNzIFR7Y29uc3RydWN0b3IoZSl7bGV0e2RwOnQsdHlwZTpzLG9wdHM6YX09ZTtfKHRoaXMsXCJoYW5kbGVDbGlja1wiLChlPT57bGV0IHQ9ZS50YXJnZXQuY2xvc2VzdChTKS5hZHBDZWxsO2lmKHQuaXNEaXNhYmxlZClyZXR1cm47aWYoIXRoaXMuZHAuaXNNaW5WaWV3UmVhY2hlZClyZXR1cm4gdm9pZCB0aGlzLmRwLmRvd24oKTtsZXQgaT10aGlzLmRwLl9jaGVja0lmRGF0ZUlzU2VsZWN0ZWQodC5kYXRlLHQudHlwZSk7aT90aGlzLmRwLl9oYW5kbGVBbHJlYWR5U2VsZWN0ZWREYXRlcyhpLHQuZGF0ZSk6dGhpcy5kcC5zZWxlY3REYXRlKHQuZGF0ZSl9KSksXyh0aGlzLFwiaGFuZGxlRGF5TmFtZUNsaWNrXCIsKGU9PntsZXQgdD1lLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheS1pbmRleFwiKTt0aGlzLm9wdHMub25DbGlja0RheU5hbWUoe2RheUluZGV4Ok51bWJlcih0KSxkYXRlcGlja2VyOnRoaXMuZHB9KX0pKSxfKHRoaXMsXCJvbkNoYW5nZUN1cnJlbnRWaWV3XCIsKGU9PntlIT09dGhpcy50eXBlP3RoaXMuaGlkZSgpOih0aGlzLnNob3coKSx0aGlzLnJlbmRlcigpKX0pKSxfKHRoaXMsXCJvbk1vdXNlT3ZlckNlbGxcIiwoZT0+e2xldCB0PXkoZS50YXJnZXQsUyk7dGhpcy5kcC5zZXRGb2N1c0RhdGUoISF0JiZ0LmFkcENlbGwuZGF0ZSl9KSksXyh0aGlzLFwib25Nb3VzZU91dENlbGxcIiwoKCk9Pnt0aGlzLmRwLnNldEZvY3VzRGF0ZSghMSl9KSksXyh0aGlzLFwib25DbGlja0JvZHlcIiwoZT0+e2xldHtvbkNsaWNrRGF5TmFtZTp0fT10aGlzLm9wdHMsaT1lLnRhcmdldDtpLmNsb3Nlc3QoUykmJnRoaXMuaGFuZGxlQ2xpY2soZSksdCYmaS5jbG9zZXN0KFwiLmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lXCIpJiZ0aGlzLmhhbmRsZURheU5hbWVDbGljayhlKX0pKSxfKHRoaXMsXCJvbk1vdXNlRG93blwiLChlPT57dGhpcy5wcmVzc2VkPSEwO2xldCB0PXkoZS50YXJnZXQsUyksaT10JiZ0LmFkcENlbGw7cChpLmRhdGUsdGhpcy5kcC5yYW5nZURhdGVGcm9tKSYmKHRoaXMucmFuZ2VGcm9tRm9jdXNlZD0hMCkscChpLmRhdGUsdGhpcy5kcC5yYW5nZURhdGVUbykmJih0aGlzLnJhbmdlVG9Gb2N1c2VkPSEwKX0pKSxfKHRoaXMsXCJvbk1vdXNlTW92ZVwiLChlPT57aWYoIXRoaXMucHJlc3NlZHx8IXRoaXMuZHAuaXNNaW5WaWV3UmVhY2hlZClyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpO2xldCB0PXkoZS50YXJnZXQsUyksaT10JiZ0LmFkcENlbGwse3NlbGVjdGVkRGF0ZXM6cyxyYW5nZURhdGVUbzphLHJhbmdlRGF0ZUZyb206bn09dGhpcy5kcDtpZighaXx8aS5pc0Rpc2FibGVkKXJldHVybjtsZXR7ZGF0ZTpyfT1pO2lmKDI9PT1zLmxlbmd0aCl7aWYodGhpcy5yYW5nZUZyb21Gb2N1c2VkJiYhbShyLGEpKXtsZXR7aG91cnM6ZSxtaW51dGVzOnR9PWgobik7ci5zZXRIb3VycyhlKSxyLnNldE1pbnV0ZXModCksdGhpcy5kcC5yYW5nZURhdGVGcm9tPXIsdGhpcy5kcC5yZXBsYWNlRGF0ZShuLHIpfWlmKHRoaXMucmFuZ2VUb0ZvY3VzZWQmJiF2KHIsbikpe2xldHtob3VyczplLG1pbnV0ZXM6dH09aChhKTtyLnNldEhvdXJzKGUpLHIuc2V0TWludXRlcyh0KSx0aGlzLmRwLnJhbmdlRGF0ZVRvPXIsdGhpcy5kcC5yZXBsYWNlRGF0ZShhLHIpfX19KSksXyh0aGlzLFwib25Nb3VzZVVwXCIsKCgpPT57dGhpcy5wcmVzc2VkPSExLHRoaXMucmFuZ2VGcm9tRm9jdXNlZD0hMSx0aGlzLnJhbmdlVG9Gb2N1c2VkPSExfSkpLF8odGhpcyxcIm9uQ2hhbmdlVmlld0RhdGVcIiwoKGUsdCk9PntpZighdGhpcy5pc1Zpc2libGUpcmV0dXJuO2xldCBzPWMoZSksYT1jKHQpO3N3aXRjaCh0aGlzLmRwLmN1cnJlbnRWaWV3KXtjYXNlIGkuZGF5czppZihwKGUsdCxpLm1vbnRocykpcmV0dXJuO2JyZWFrO2Nhc2UgaS5tb250aHM6aWYocChlLHQsaS55ZWFycykpcmV0dXJuO2JyZWFrO2Nhc2UgaS55ZWFyczppZihzWzBdPT09YVswXSYmc1sxXT09PWFbMV0pcmV0dXJufXRoaXMucmVuZGVyKCl9KSksXyh0aGlzLFwicmVuZGVyXCIsKCgpPT57dGhpcy5kZXN0cm95Q2VsbHMoKSx0aGlzLl9nZW5lcmF0ZUNlbGxzKCksdGhpcy5jZWxscy5mb3JFYWNoKChlPT57dGhpcy4kY2VsbHMuYXBwZW5kQ2hpbGQoZS5yZW5kZXIoKSl9KSl9KSksdGhpcy5kcD10LHRoaXMudHlwZT1zLHRoaXMub3B0cz1hLHRoaXMuY2VsbHM9W10sdGhpcy4kZWw9XCJcIix0aGlzLnByZXNzZWQ9ITEsdGhpcy5pc1Zpc2libGU9ITAsdGhpcy5pbml0KCl9aW5pdCgpe3RoaXMuX2J1aWxkQmFzZUh0bWwoKSx0aGlzLnR5cGU9PT1pLmRheXMmJnRoaXMucmVuZGVyRGF5TmFtZXMoKSx0aGlzLnJlbmRlcigpLHRoaXMuX2JpbmRFdmVudHMoKSx0aGlzLl9iaW5kRGF0ZXBpY2tlckV2ZW50cygpfV9iaW5kRXZlbnRzKCl7bGV0e3JhbmdlOmUsZHluYW1pY1JhbmdlOnR9PXRoaXMub3B0cztEKHRoaXMuJGVsLFwibW91c2VvdmVyXCIsdGhpcy5vbk1vdXNlT3ZlckNlbGwpLEQodGhpcy4kZWwsXCJtb3VzZW91dFwiLHRoaXMub25Nb3VzZU91dENlbGwpLEQodGhpcy4kZWwsXCJjbGlja1wiLHRoaXMub25DbGlja0JvZHkpLGUmJnQmJihEKHRoaXMuJGVsLFwibW91c2Vkb3duXCIsdGhpcy5vbk1vdXNlRG93biksRCh0aGlzLiRlbCxcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmUpLEQod2luZG93LmRvY3VtZW50LFwibW91c2V1cFwiLHRoaXMub25Nb3VzZVVwKSl9X2JpbmREYXRlcGlja2VyRXZlbnRzKCl7dGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlVmlld0RhdGUsdGhpcy5vbkNoYW5nZVZpZXdEYXRlKSx0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VDdXJyZW50Vmlldyx0aGlzLm9uQ2hhbmdlQ3VycmVudFZpZXcpfV9idWlsZEJhc2VIdG1sKCl7dGhpcy4kZWw9bih7Y2xhc3NOYW1lOmBhaXItZGF0ZXBpY2tlci1ib2R5IC0ke3RoaXMudHlwZX0tYCxpbm5lckh0bWw6TVt0aGlzLnR5cGVdfSksdGhpcy4kbmFtZXM9YShcIi5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZXNcIix0aGlzLiRlbCksdGhpcy4kY2VsbHM9YShcIi5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxsc1wiLHRoaXMuJGVsKX1fZ2V0RGF5TmFtZXNIdG1sKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMuZHAubG9jYWxlLmZpcnN0RGF5LHQ9XCJcIixzPXRoaXMuZHAuaXNXZWVrZW5kLHtvbkNsaWNrRGF5TmFtZTphfT10aGlzLm9wdHMsbj1lLHI9MDtmb3IoO3I8Nzspe2xldCBlPW4lNzt0Kz1gPGRpdiBjbGFzcz1cIiR7dShcImFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lXCIse1tpLmNzc0NsYXNzV2Vla2VuZF06cyhlKSxcIi1jbGlja2FibGUtXCI6ISFhfSl9XCIgZGF0YS1kYXktaW5kZXg9JyR7ZX0nPiR7dGhpcy5kcC5sb2NhbGUuZGF5c01pbltlXX08L2Rpdj5gLHIrKyxuKyt9cmV0dXJuIHR9cmVuZGVyRGF5TmFtZXMoKXt0aGlzLiRuYW1lcy5pbm5lckhUTUw9dGhpcy5fZ2V0RGF5TmFtZXNIdG1sKCl9X2dlbmVyYXRlQ2VsbChlKXtsZXR7dHlwZTp0LGRwOmksb3B0czpzfT10aGlzO3JldHVybiBuZXcgQyh7dHlwZTp0LGRwOmksb3B0czpzLGRhdGU6ZSxib2R5OnRoaXN9KX1fZ2VuZXJhdGVDZWxscygpe1QuZ2V0RGF0ZXNGdW5jdGlvbih0aGlzLnR5cGUpKHRoaXMuZHAsKGU9Pnt0aGlzLmNlbGxzLnB1c2godGhpcy5fZ2VuZXJhdGVDZWxsKGUpKX0pKX1zaG93KCl7dGhpcy5pc1Zpc2libGU9ITAsdGhpcy4kZWwuY2xhc3NMaXN0LnJlbW92ZShcIi1oaWRkZW4tXCIpfWhpZGUoKXt0aGlzLmlzVmlzaWJsZT0hMSx0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKFwiLWhpZGRlbi1cIil9ZGVzdHJveUNlbGxzKCl7dGhpcy5jZWxscy5mb3JFYWNoKChlPT5lLmRlc3Ryb3koKSkpLHRoaXMuY2VsbHM9W10sdGhpcy4kY2VsbHMuaW5uZXJIVE1MPVwiXCJ9ZGVzdHJveSgpe3RoaXMuZGVzdHJveUNlbGxzKCksdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZVZpZXdEYXRlLHRoaXMub25DaGFuZ2VWaWV3RGF0ZSksdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZUN1cnJlbnRWaWV3LHRoaXMub25DaGFuZ2VDdXJyZW50Vmlldyl9c3RhdGljIGdldERheXNEYXRlcyhlLHQpe2xldHt2aWV3RGF0ZTppLG9wdHM6e2ZpeGVkSGVpZ2h0OnN9LGxvY2FsZTp7Zmlyc3REYXk6YX19PWUsbj1vKGkpLHt5ZWFyOnIsbW9udGg6bH09aChpKSxkPW5ldyBEYXRlKHIsbCwxKSxjPW5ldyBEYXRlKHIsbCxuKSx1PWQuZ2V0RGF5KCktYSxwPTYtYy5nZXREYXkoKSthO3U9dTwwP3UrNzp1LHA9cD42P3AtNzpwO2xldCBtPWZ1bmN0aW9uKGUsdCl7bGV0e3llYXI6aSxtb250aDpzLGRhdGU6YX09aChlKTtyZXR1cm4gbmV3IERhdGUoaSxzLGEtdCl9KGQsdSksdj1uK3UrcCxnPW0uZ2V0RGF0ZSgpLHt5ZWFyOkQsbW9udGg6eX09aChtKSxmPTA7cyYmKHY9NDIpO2NvbnN0IHc9W107Zm9yKDtmPHY7KXtsZXQgZT1uZXcgRGF0ZShELHksZytmKTt0JiZ0KGUpLHcucHVzaChlKSxmKyt9cmV0dXJuIHd9c3RhdGljIGdldE1vbnRoc0RhdGVzKGUsdCl7bGV0e3llYXI6aX09ZS5wYXJzZWRWaWV3RGF0ZSxzPTAsYT1bXTtmb3IoO3M8MTI7KXtjb25zdCBlPW5ldyBEYXRlKGkscyk7YS5wdXNoKGUpLHQmJnQoZSkscysrfXJldHVybiBhfXN0YXRpYyBnZXRZZWFyc0RhdGVzKGUsdCl7bGV0IGk9YyhlLnZpZXdEYXRlKSxzPWlbMF0tMSxhPWlbMV0rMSxuPXMscj1bXTtmb3IoO248PWE7KXtjb25zdCBlPW5ldyBEYXRlKG4sMCk7ci5wdXNoKGUpLHQmJnQoZSksbisrfXJldHVybiByfXN0YXRpYyBnZXREYXRlc0Z1bmN0aW9uKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmkuZGF5cztyZXR1cm57W2kuZGF5c106VC5nZXREYXlzRGF0ZXMsW2kubW9udGhzXTpULmdldE1vbnRoc0RhdGVzLFtpLnllYXJzXTpULmdldFllYXJzRGF0ZXN9W2VdfX1mdW5jdGlvbiBGKGUsdCxpKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgaT1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09aSl7dmFyIHM9aS5jYWxsKGUsXCJzdHJpbmdcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHMpcmV0dXJuIHM7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybiBTdHJpbmcoZSl9KGUpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX1jbGFzcyBWe2NvbnN0cnVjdG9yKGUpe2xldHtkcDp0LG9wdHM6aX09ZTtGKHRoaXMsXCJvbkNsaWNrTmF2XCIsKGU9PntsZXQgdD15KGUudGFyZ2V0LFwiLmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uXCIpO2lmKCF0KXJldHVybjtsZXQgaT10LmRhdGFzZXQuYWN0aW9uO3RoaXMuZHBbaV0oKX0pKSxGKHRoaXMsXCJvbkNoYW5nZVZpZXdEYXRlXCIsKCgpPT57dGhpcy5yZW5kZXIoKSx0aGlzLl9yZXNldE5hdlN0YXR1cygpLHRoaXMuaGFuZGxlTmF2U3RhdHVzKCl9KSksRih0aGlzLFwib25DaGFuZ2VDdXJyZW50Vmlld1wiLCgoKT0+e3RoaXMucmVuZGVyKCksdGhpcy5fcmVzZXROYXZTdGF0dXMoKSx0aGlzLmhhbmRsZU5hdlN0YXR1cygpfSkpLEYodGhpcyxcIm9uQ2xpY2tOYXZUaXRsZVwiLCgoKT0+e3RoaXMuZHAuaXNGaW5hbFZpZXd8fHRoaXMuZHAudXAoKX0pKSxGKHRoaXMsXCJ1cGRhdGVcIiwoKCk9PntsZXR7cHJldkh0bWw6ZSxuZXh0SHRtbDp0fT10aGlzLm9wdHM7dGhpcy4kcHJldi5pbm5lckhUTUw9ZSx0aGlzLiRuZXh0LmlubmVySFRNTD10LHRoaXMuX3Jlc2V0TmF2U3RhdHVzKCksdGhpcy5yZW5kZXIoKSx0aGlzLmhhbmRsZU5hdlN0YXR1cygpfSkpLEYodGhpcyxcInJlbmRlckRlbGF5XCIsKCgpPT57c2V0VGltZW91dCh0aGlzLnJlbmRlcil9KSksRih0aGlzLFwicmVuZGVyXCIsKCgpPT57dGhpcy4kdGl0bGUuaW5uZXJIVE1MPXRoaXMuX2dldFRpdGxlKCksZnVuY3Rpb24oZSx0KXtmb3IobGV0IGkgaW4gdCl0W2ldP2UuY2xhc3NMaXN0LmFkZChpKTplLmNsYXNzTGlzdC5yZW1vdmUoaSl9KHRoaXMuJHRpdGxlLHtcIi1kaXNhYmxlZC1cIjp0aGlzLmRwLmlzRmluYWxWaWV3fSl9KSksdGhpcy5kcD10LHRoaXMub3B0cz1pLHRoaXMuaW5pdCgpfWluaXQoKXt0aGlzLl9jcmVhdGVFbGVtZW50KCksdGhpcy5fYnVpbGRCYXNlSHRtbCgpLHRoaXMuX2RlZmluZURPTSgpLHRoaXMucmVuZGVyKCksdGhpcy5oYW5kbGVOYXZTdGF0dXMoKSx0aGlzLl9iaW5kRXZlbnRzKCksdGhpcy5fYmluZERhdGVwaWNrZXJFdmVudHMoKX1fZGVmaW5lRE9NKCl7dGhpcy4kdGl0bGU9YShcIi5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlXCIsdGhpcy4kZWwpLHRoaXMuJHByZXY9YSgnW2RhdGEtYWN0aW9uPVwicHJldlwiXScsdGhpcy4kZWwpLHRoaXMuJG5leHQ9YSgnW2RhdGEtYWN0aW9uPVwibmV4dFwiXScsdGhpcy4kZWwpfV9iaW5kRXZlbnRzKCl7dGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrTmF2KSx0aGlzLiR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2tOYXZUaXRsZSl9X2JpbmREYXRlcGlja2VyRXZlbnRzKCl7dGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlVmlld0RhdGUsdGhpcy5vbkNoYW5nZVZpZXdEYXRlKSx0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VDdXJyZW50Vmlldyx0aGlzLm9uQ2hhbmdlQ3VycmVudFZpZXcpLHRoaXMuaXNOYXZJc0Z1bmN0aW9uJiYodGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHRoaXMucmVuZGVyRGVsYXkpLHRoaXMuZHAub3B0cy50aW1lcGlja2VyJiZ0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VUaW1lLHRoaXMucmVuZGVyKSl9ZGVzdHJveSgpe3RoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VWaWV3RGF0ZSx0aGlzLm9uQ2hhbmdlVmlld0RhdGUpLHRoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VDdXJyZW50Vmlldyx0aGlzLm9uQ2hhbmdlQ3VycmVudFZpZXcpLHRoaXMuaXNOYXZJc0Z1bmN0aW9uJiYodGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLnJlbmRlckRlbGF5KSx0aGlzLmRwLm9wdHMudGltZXBpY2tlciYmdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZVRpbWUsdGhpcy5yZW5kZXIpKX1fY3JlYXRlRWxlbWVudCgpe3RoaXMuJGVsPW4oe3RhZ05hbWU6XCJuYXZcIixjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci1uYXZcIn0pfV9nZXRUaXRsZSgpe2xldHtkcDplLG9wdHM6dH09dGhpcyxpPXQubmF2VGl0bGVzW2UuY3VycmVudFZpZXddO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aShlKTplLmZvcm1hdERhdGUoZS52aWV3RGF0ZSxpKX1oYW5kbGVOYXZTdGF0dXMoKXtsZXR7ZGlzYWJsZU5hdldoZW5PdXRPZlJhbmdlOmV9PXRoaXMub3B0cyx7bWluRGF0ZTp0LG1heERhdGU6c309dGhpcy5kcDtpZighdCYmIXN8fCFlKXJldHVybjtsZXR7eWVhcjphLG1vbnRoOm59PXRoaXMuZHAucGFyc2VkVmlld0RhdGUscj0hIXQmJmgodCksbz0hIXMmJmgocyk7c3dpdGNoKHRoaXMuZHAuY3VycmVudFZpZXcpe2Nhc2UgaS5kYXlzOnQmJnIubW9udGg+PW4mJnIueWVhcj49YSYmdGhpcy5fZGlzYWJsZU5hdihcInByZXZcIikscyYmby5tb250aDw9biYmby55ZWFyPD1hJiZ0aGlzLl9kaXNhYmxlTmF2KFwibmV4dFwiKTticmVhaztjYXNlIGkubW9udGhzOnQmJnIueWVhcj49YSYmdGhpcy5fZGlzYWJsZU5hdihcInByZXZcIikscyYmby55ZWFyPD1hJiZ0aGlzLl9kaXNhYmxlTmF2KFwibmV4dFwiKTticmVhaztjYXNlIGkueWVhcnM6e2xldCBlPWModGhpcy5kcC52aWV3RGF0ZSk7dCYmci55ZWFyPj1lWzBdJiZ0aGlzLl9kaXNhYmxlTmF2KFwicHJldlwiKSxzJiZvLnllYXI8PWVbMV0mJnRoaXMuX2Rpc2FibGVOYXYoXCJuZXh0XCIpO2JyZWFrfX19X2Rpc2FibGVOYXYoZSl7YSgnW2RhdGEtYWN0aW9uPVwiJytlKydcIl0nLHRoaXMuJGVsKS5jbGFzc0xpc3QuYWRkKFwiLWRpc2FibGVkLVwiKX1fcmVzZXROYXZTdGF0dXMoKXshZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkodD4xP3QtMTowKSxzPTE7czx0O3MrKylpW3MtMV09YXJndW1lbnRzW3NdO2UubGVuZ3RoP2UuZm9yRWFjaCgoZT0+e2UuY2xhc3NMaXN0LnJlbW92ZSguLi5pKX0pKTplLmNsYXNzTGlzdC5yZW1vdmUoLi4uaSl9KHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb25cIiksXCItZGlzYWJsZWQtXCIpfV9idWlsZEJhc2VIdG1sKCl7bGV0e3ByZXZIdG1sOmUsbmV4dEh0bWw6dH09dGhpcy5vcHRzO3RoaXMuJGVsLmlubmVySFRNTD1gPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uXCIgZGF0YS1hY3Rpb249XCJwcmV2XCI+JHtlfTwvZGl2PjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlXCI+PC9kaXY+PGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uXCIgZGF0YS1hY3Rpb249XCJuZXh0XCI+JHt0fTwvZGl2PmB9Z2V0IGlzTmF2SXNGdW5jdGlvbigpe2xldHtuYXZUaXRsZXM6ZX09dGhpcy5vcHRzO3JldHVybiBPYmplY3Qua2V5cyhlKS5maW5kKCh0PT5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlW3RdKSl9fXZhciB4PXt0b2RheTp7Y29udGVudDplPT5lLmxvY2FsZS50b2RheSxvbkNsaWNrOmU9PmUuc2V0Vmlld0RhdGUobmV3IERhdGUpfSxjbGVhcjp7Y29udGVudDplPT5lLmxvY2FsZS5jbGVhcixvbkNsaWNrOmU9PmUuY2xlYXIoKX19O2NsYXNzIEh7Y29uc3RydWN0b3IoZSl7bGV0e2RwOnQsb3B0czppfT1lO3RoaXMuZHA9dCx0aGlzLm9wdHM9aSx0aGlzLmluaXQoKX1pbml0KCl7dGhpcy5jcmVhdGVFbGVtZW50KCksdGhpcy5yZW5kZXIoKX1jcmVhdGVFbGVtZW50KCl7dGhpcy4kZWw9bih7Y2xhc3NOYW1lOlwiYWlyLWRhdGVwaWNrZXItYnV0dG9uc1wifSl9ZGVzdHJveSgpe3RoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpfWNsZWFySHRtbCgpe3JldHVybiB0aGlzLiRlbC5pbm5lckhUTUw9XCJcIix0aGlzfWdlbmVyYXRlQnV0dG9ucygpe2xldHtidXR0b25zOmV9PXRoaXMub3B0cztBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pLGUuZm9yRWFjaCgoZT0+e2xldCB0PWU7XCJzdHJpbmdcIj09dHlwZW9mIGUmJnhbZV0mJih0PXhbZV0pO2xldCBpPXRoaXMuY3JlYXRlQnV0dG9uKHQpO3Qub25DbGljayYmdGhpcy5hdHRhY2hFdmVudFRvQnV0dG9uKGksdC5vbkNsaWNrKSx0aGlzLiRlbC5hcHBlbmRDaGlsZChpKX0pKX1hdHRhY2hFdmVudFRvQnV0dG9uKGUsdCl7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKCk9Pnt0KHRoaXMuZHApfSkpfWNyZWF0ZUJ1dHRvbihlKXtsZXR7Y29udGVudDp0LGNsYXNzTmFtZTppLHRhZ05hbWU6cz1cImJ1dHRvblwiLGF0dHJzOmE9e319PWU7cmV0dXJuIG4oe3RhZ05hbWU6cyxpbm5lckh0bWw6YDxzcGFuIHRhYmluZGV4PSctMSc+JHtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QodGhpcy5kcCk6dH08L3NwYW4+YCxjbGFzc05hbWU6dShcImFpci1kYXRlcGlja2VyLWJ1dHRvblwiLGkpLGF0dHJzOmF9KX1yZW5kZXIoKXt0aGlzLmdlbmVyYXRlQnV0dG9ucygpfX1mdW5jdGlvbiBFKGUsdCxpKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgaT1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09aSl7dmFyIHM9aS5jYWxsKGUsXCJzdHJpbmdcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHMpcmV0dXJuIHM7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybiBTdHJpbmcoZSl9KGUpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX1jbGFzcyBMe2NvbnN0cnVjdG9yKCl7bGV0e29wdHM6ZSxkcDp0fT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307RSh0aGlzLFwidG9nZ2xlVGltZXBpY2tlcklzQWN0aXZlXCIsKGU9Pnt0aGlzLmRwLnRpbWVwaWNrZXJJc0FjdGl2ZT1lfSkpLEUodGhpcyxcIm9uQ2hhbmdlU2VsZWN0ZWREYXRlXCIsKGU9PntsZXR7ZGF0ZTp0LHVwZGF0ZVRpbWU6aT0hMX09ZTt0JiYodGhpcy5zZXRNaW5NYXhUaW1lKHQpLHRoaXMuc2V0Q3VycmVudFRpbWUoISFpJiZ0KSx0aGlzLmFkZFRpbWVUb0RhdGUodCkpfSkpLEUodGhpcyxcIm9uQ2hhbmdlTGFzdFNlbGVjdGVkRGF0ZVwiLChlPT57ZSYmKHRoaXMuc2V0VGltZShlKSx0aGlzLnJlbmRlcigpKX0pKSxFKHRoaXMsXCJvbkNoYW5nZUlucHV0UmFuZ2VcIiwoZT0+e2xldCB0PWUudGFyZ2V0O3RoaXNbdC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXT10LnZhbHVlLHRoaXMudXBkYXRlVGV4dCgpLHRoaXMuZHAudHJpZ2dlcihpLmV2ZW50Q2hhbmdlVGltZSx7aG91cnM6dGhpcy5ob3VycyxtaW51dGVzOnRoaXMubWludXRlc30pfSkpLEUodGhpcyxcIm9uTW91c2VFbnRlckxlYXZlXCIsKGU9PntsZXQgdD1lLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLGk9dGhpcy4kbWludXRlc1RleHQ7XCJob3Vyc1wiPT09dCYmKGk9dGhpcy4kaG91cnNUZXh0KSxpLmNsYXNzTGlzdC50b2dnbGUoXCItZm9jdXMtXCIpfSkpLEUodGhpcyxcIm9uRm9jdXNcIiwoKCk9Pnt0aGlzLnRvZ2dsZVRpbWVwaWNrZXJJc0FjdGl2ZSghMCl9KSksRSh0aGlzLFwib25CbHVyXCIsKCgpPT57dGhpcy50b2dnbGVUaW1lcGlja2VySXNBY3RpdmUoITEpfSkpLHRoaXMub3B0cz1lLHRoaXMuZHA9dDtsZXR7dGltZUZvcm1hdDpzfT10aGlzLmRwLmxvY2FsZTtzJiYocy5tYXRjaChrKFwiaFwiKSl8fHMubWF0Y2goayhcImhoXCIpKSkmJih0aGlzLmFtcG09ITApLHRoaXMuaW5pdCgpfWluaXQoKXt0aGlzLnNldFRpbWUodGhpcy5kcC5sYXN0U2VsZWN0ZWREYXRlfHx0aGlzLmRwLnZpZXdEYXRlKSx0aGlzLmNyZWF0ZUVsZW1lbnQoKSx0aGlzLmJ1aWxkSHRtbCgpLHRoaXMuZGVmaW5lRE9NKCksdGhpcy5yZW5kZXIoKSx0aGlzLmJpbmREYXRlcGlja2VyRXZlbnRzKCksdGhpcy5iaW5kRE9NRXZlbnRzKCl9YmluZERhdGVwaWNrZXJFdmVudHMoKXt0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5vbkNoYW5nZVNlbGVjdGVkRGF0ZSksdGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlTGFzdFNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlTGFzdFNlbGVjdGVkRGF0ZSl9YmluZERPTUV2ZW50cygpe2xldCBlPVwiaW5wdXRcIjtuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC90cmlkZW50L2dpKSYmKGU9XCJjaGFuZ2VcIiksRCh0aGlzLiRyYW5nZXMsZSx0aGlzLm9uQ2hhbmdlSW5wdXRSYW5nZSksRCh0aGlzLiRyYW5nZXMsXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJMZWF2ZSksRCh0aGlzLiRyYW5nZXMsXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlRW50ZXJMZWF2ZSksRCh0aGlzLiRyYW5nZXMsXCJmb2N1c1wiLHRoaXMub25Gb2N1cyksRCh0aGlzLiRyYW5nZXMsXCJtb3VzZWRvd25cIix0aGlzLm9uRm9jdXMpLEQodGhpcy4kcmFuZ2VzLFwiYmx1clwiLHRoaXMub25CbHVyKX1jcmVhdGVFbGVtZW50KCl7dGhpcy4kZWw9bih7Y2xhc3NOYW1lOnUoXCJhaXItZGF0ZXBpY2tlci10aW1lXCIse1wiLWFtLXBtLVwiOnRoaXMuZHAuYW1wbX0pfSl9ZGVzdHJveSgpe3RoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5vbkNoYW5nZVNlbGVjdGVkRGF0ZSksdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZUxhc3RTZWxlY3RlZERhdGUsdGhpcy5vbkNoYW5nZUxhc3RTZWxlY3RlZERhdGUpLHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpfWJ1aWxkSHRtbCgpe2xldHthbXBtOmUsaG91cnM6dCxkaXNwbGF5SG91cnM6aSxtaW51dGVzOnMsbWluSG91cnM6YSxtaW5NaW51dGVzOm4sbWF4SG91cnM6cixtYXhNaW51dGVzOm8sZGF5UGVyaW9kOmgsb3B0czp7aG91cnNTdGVwOmwsbWludXRlc1N0ZXA6Y319PXRoaXM7dGhpcy4kZWwuaW5uZXJIVE1MPWA8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudFwiPiAgIDxzcGFuIGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1ob3Vyc1wiPiR7ZChpKX08L3NwYW4+ICAgPHNwYW4gY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWNvbG9uXCI+Ojwvc3Bhbj4gICA8c3BhbiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlc1wiPiR7ZChzKX08L3NwYW4+ICAgYCsoZT9gPHNwYW4gY2xhc3M9J2Fpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtYW1wbSc+JHtofTwvc3Bhbj5gOlwiXCIpKyc8L2Rpdj48ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItdGltZS0tc2xpZGVyc1wiPiAgIDxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1yb3dcIj4nK2AgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbmFtZT1cImhvdXJzXCIgdmFsdWU9XCIke3R9XCIgbWluPVwiJHthfVwiIG1heD1cIiR7cn1cIiBzdGVwPVwiJHtsfVwiLz4gICA8L2Rpdj4gICA8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItdGltZS0tcm93XCI+YCtgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJtaW51dGVzXCIgdmFsdWU9XCIke3N9XCIgbWluPVwiJHtufVwiIG1heD1cIiR7b31cIiBzdGVwPVwiJHtjfVwiLz4gICA8L2Rpdj48L2Rpdj5gfWRlZmluZURPTSgpe2xldCBlPWU9PmEoZSx0aGlzLiRlbCk7dGhpcy4kcmFuZ2VzPXRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwicmFuZ2VcIl0nKSx0aGlzLiRob3Vycz1lKCdbbmFtZT1cImhvdXJzXCJdJyksdGhpcy4kbWludXRlcz1lKCdbbmFtZT1cIm1pbnV0ZXNcIl0nKSx0aGlzLiRob3Vyc1RleHQ9ZShcIi5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWhvdXJzXCIpLHRoaXMuJG1pbnV0ZXNUZXh0PWUoXCIuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1taW51dGVzXCIpLHRoaXMuJGFtcG09ZShcIi5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWFtcG1cIil9c2V0VGltZShlKXt0aGlzLnNldE1pbk1heFRpbWUoZSksdGhpcy5zZXRDdXJyZW50VGltZShlKX1hZGRUaW1lVG9EYXRlKGUpe2UmJihlLnNldEhvdXJzKHRoaXMuaG91cnMpLGUuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMpKX1zZXRNaW5NYXhUaW1lKGUpe2lmKHRoaXMuc2V0TWluTWF4VGltZUZyb21PcHRpb25zKCksZSl7bGV0e21pbkRhdGU6dCxtYXhEYXRlOml9PXRoaXMuZHA7dCYmcChlLHQpJiZ0aGlzLnNldE1pblRpbWVGcm9tTWluRGF0ZSh0KSxpJiZwKGUsaSkmJnRoaXMuc2V0TWF4VGltZUZyb21NYXhEYXRlKGkpfX1zZXRDdXJyZW50VGltZShlKXtsZXR7aG91cnM6dCxtaW51dGVzOml9PWU/aChlKTp0aGlzO3RoaXMuaG91cnM9Zih0LHRoaXMubWluSG91cnMsdGhpcy5tYXhIb3VycyksdGhpcy5taW51dGVzPWYoaSx0aGlzLm1pbk1pbnV0ZXMsdGhpcy5tYXhNaW51dGVzKX1zZXRNaW5NYXhUaW1lRnJvbU9wdGlvbnMoKXtsZXR7bWluSG91cnM6ZSxtaW5NaW51dGVzOnQsbWF4SG91cnM6aSxtYXhNaW51dGVzOnN9PXRoaXMub3B0czt0aGlzLm1pbkhvdXJzPWYoZSwwLDIzKSx0aGlzLm1pbk1pbnV0ZXM9Zih0LDAsNTkpLHRoaXMubWF4SG91cnM9ZihpLDAsMjMpLHRoaXMubWF4TWludXRlcz1mKHMsMCw1OSl9c2V0TWluVGltZUZyb21NaW5EYXRlKGUpe2xldHtsYXN0U2VsZWN0ZWREYXRlOnR9PXRoaXMuZHA7dGhpcy5taW5Ib3Vycz1lLmdldEhvdXJzKCksdCYmdC5nZXRIb3VycygpPmUuZ2V0SG91cnMoKT90aGlzLm1pbk1pbnV0ZXM9dGhpcy5vcHRzLm1pbk1pbnV0ZXM6dGhpcy5taW5NaW51dGVzPWUuZ2V0TWludXRlcygpfXNldE1heFRpbWVGcm9tTWF4RGF0ZShlKXtsZXR7bGFzdFNlbGVjdGVkRGF0ZTp0fT10aGlzLmRwO3RoaXMubWF4SG91cnM9ZS5nZXRIb3VycygpLHQmJnQuZ2V0SG91cnMoKTxlLmdldEhvdXJzKCk/dGhpcy5tYXhNaW51dGVzPXRoaXMub3B0cy5tYXhNaW51dGVzOnRoaXMubWF4TWludXRlcz1lLmdldE1pbnV0ZXMoKX11cGRhdGVTbGlkZXJzKCl7cih0aGlzLiRob3Vycyx7bWluOnRoaXMubWluSG91cnMsbWF4OnRoaXMubWF4SG91cnN9KS52YWx1ZT10aGlzLmhvdXJzLHIodGhpcy4kbWludXRlcyx7bWluOnRoaXMubWluTWludXRlcyxtYXg6dGhpcy5tYXhNaW51dGVzfSkudmFsdWU9dGhpcy5taW51dGVzfXVwZGF0ZVRleHQoKXt0aGlzLiRob3Vyc1RleHQuaW5uZXJIVE1MPWQodGhpcy5kaXNwbGF5SG91cnMpLHRoaXMuJG1pbnV0ZXNUZXh0LmlubmVySFRNTD1kKHRoaXMubWludXRlcyksdGhpcy5hbXBtJiYodGhpcy4kYW1wbS5pbm5lckhUTUw9dGhpcy5kYXlQZXJpb2QpfXNldCBob3VycyhlKXt0aGlzLl9ob3Vycz1lO2xldHtob3Vyczp0LGRheVBlcmlvZDppfT1sKGUpO3RoaXMuZGlzcGxheUhvdXJzPXRoaXMuYW1wbT90OmUsdGhpcy5kYXlQZXJpb2Q9aX1nZXQgaG91cnMoKXtyZXR1cm4gdGhpcy5faG91cnN9cmVuZGVyKCl7dGhpcy51cGRhdGVTbGlkZXJzKCksdGhpcy51cGRhdGVUZXh0KCl9fWZ1bmN0aW9uIE8oZSx0LGkpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBpPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1pKXt2YXIgcz1pLmNhbGwoZSxcInN0cmluZ1wiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcylyZXR1cm4gczt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuIFN0cmluZyhlKX0oZSk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWNsYXNzIEF7Y29uc3RydWN0b3IoZSl7bGV0e2RwOnQsb3B0czppfT1lO08odGhpcyxcInByZXNzZWRLZXlzXCIsbmV3IFNldCksTyh0aGlzLFwiaG90S2V5c1wiLG5ldyBNYXAoW1tbW1wiQ29udHJvbFwiLFwiQXJyb3dSaWdodFwiXSxbXCJDb250cm9sXCIsXCJBcnJvd1VwXCJdXSxlPT5lLm1vbnRoKytdLFtbW1wiQ29udHJvbFwiLFwiQXJyb3dMZWZ0XCJdLFtcIkNvbnRyb2xcIixcIkFycm93RG93blwiXV0sZT0+ZS5tb250aC0tXSxbW1tcIlNoaWZ0XCIsXCJBcnJvd1JpZ2h0XCJdLFtcIlNoaWZ0XCIsXCJBcnJvd1VwXCJdXSxlPT5lLnllYXIrK10sW1tbXCJTaGlmdFwiLFwiQXJyb3dMZWZ0XCJdLFtcIlNoaWZ0XCIsXCJBcnJvd0Rvd25cIl1dLGU9PmUueWVhci0tXSxbW1tcIkFsdFwiLFwiQXJyb3dSaWdodFwiXSxbXCJBbHRcIixcIkFycm93VXBcIl1dLGU9PmUueWVhcis9MTBdLFtbW1wiQWx0XCIsXCJBcnJvd0xlZnRcIl0sW1wiQWx0XCIsXCJBcnJvd0Rvd25cIl1dLGU9PmUueWVhci09MTBdLFtbXCJDb250cm9sXCIsXCJTaGlmdFwiLFwiQXJyb3dVcFwiXSwoZSx0KT0+dC51cCgpXV0pKSxPKHRoaXMsXCJoYW5kbGVIb3RLZXlcIiwoZT0+e2xldCB0PXRoaXMuaG90S2V5cy5nZXQoZSksaT1oKHRoaXMuZ2V0SW5pdGlhbEZvY3VzRGF0ZSgpKTt0KGksdGhpcy5kcCk7bGV0e3llYXI6cyxtb250aDphLGRhdGU6bn09aSxyPW8obmV3IERhdGUocyxhKSk7cjxuJiYobj1yKTtsZXQgbD10aGlzLmRwLmdldENsYW1wZWREYXRlKG5ldyBEYXRlKHMsYSxuKSk7dGhpcy5kcC5zZXRGb2N1c0RhdGUobCx7dmlld0RhdGVUcmFuc2l0aW9uOiEwfSl9KSksTyh0aGlzLFwiaXNIb3RLZXlQcmVzc2VkXCIsKCgpPT57bGV0IGU9ITEsdD10aGlzLnByZXNzZWRLZXlzLnNpemUsaT1lPT50aGlzLnByZXNzZWRLZXlzLmhhcyhlKTtmb3IobGV0W3Ndb2YgdGhpcy5ob3RLZXlzKXtpZihlKWJyZWFrO2lmKEFycmF5LmlzQXJyYXkoc1swXSkpcy5mb3JFYWNoKChhPT57ZXx8dCE9PWEubGVuZ3RofHwoZT1hLmV2ZXJ5KGkpJiZzKX0pKTtlbHNle2lmKHQhPT1zLmxlbmd0aCljb250aW51ZTtlPXMuZXZlcnkoaSkmJnN9fXJldHVybiBlfSkpLE8odGhpcyxcImlzQXJyb3dcIiwoZT0+ZT49MzcmJmU8PTQwKSksTyh0aGlzLFwib25LZXlEb3duXCIsKGU9PntsZXR7a2V5OnQsd2hpY2g6aX09ZSx7ZHA6cyxkcDp7Zm9jdXNEYXRlOmF9LG9wdHM6bn09dGhpczt0aGlzLnJlZ2lzdGVyS2V5KHQpO2xldCByPXRoaXMuaXNIb3RLZXlQcmVzc2VkKCk7aWYocilyZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdGhpcy5oYW5kbGVIb3RLZXkocik7aWYodGhpcy5pc0Fycm93KGkpKXJldHVybiBlLnByZXZlbnREZWZhdWx0KCksdm9pZCB0aGlzLmZvY3VzTmV4dENlbGwodCk7aWYoXCJFbnRlclwiPT09dCl7aWYocy5jdXJyZW50VmlldyE9PW4ubWluVmlldylyZXR1cm4gdm9pZCBzLmRvd24oKTtpZihhKXtsZXQgZT1zLl9jaGVja0lmRGF0ZUlzU2VsZWN0ZWQoYSk7cmV0dXJuIHZvaWQoZT9zLl9oYW5kbGVBbHJlYWR5U2VsZWN0ZWREYXRlcyhlLGEpOnMuc2VsZWN0RGF0ZShhKSl9fVwiRXNjYXBlXCI9PT10JiZ0aGlzLmRwLmhpZGUoKX0pKSxPKHRoaXMsXCJvbktleVVwXCIsKGU9Pnt0aGlzLnJlbW92ZUtleShlLmtleSl9KSksdGhpcy5kcD10LHRoaXMub3B0cz1pLHRoaXMuaW5pdCgpfWluaXQoKXt0aGlzLmJpbmRLZXlib2FyZEV2ZW50cygpfWJpbmRLZXlib2FyZEV2ZW50cygpe2xldHskZWw6ZX09dGhpcy5kcDtlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleURvd24pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5vbktleVVwKX1kZXN0cm95KCl7bGV0eyRlbDplfT10aGlzLmRwO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLm9uS2V5RG93biksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLm9uS2V5VXApLHRoaXMuaG90S2V5cz1udWxsLHRoaXMucHJlc3NlZEtleXM9bnVsbH1nZXRJbml0aWFsRm9jdXNEYXRlKCl7bGV0e2ZvY3VzRGF0ZTplLGN1cnJlbnRWaWV3OnQsc2VsZWN0ZWREYXRlczpzLHBhcnNlZFZpZXdEYXRlOnt5ZWFyOmEsbW9udGg6bn19PXRoaXMuZHAscj1lfHxzW3MubGVuZ3RoLTFdO2lmKCFyKXN3aXRjaCh0KXtjYXNlIGkuZGF5czpyPW5ldyBEYXRlKGEsbiwobmV3IERhdGUpLmdldERhdGUoKSk7YnJlYWs7Y2FzZSBpLm1vbnRoczpyPW5ldyBEYXRlKGEsbiwxKTticmVhaztjYXNlIGkueWVhcnM6cj1uZXcgRGF0ZShhLDAsMSl9cmV0dXJuIHJ9Zm9jdXNOZXh0Q2VsbChlKXtsZXQgdD10aGlzLmdldEluaXRpYWxGb2N1c0RhdGUoKSx7Y3VycmVudFZpZXc6c309dGhpcy5kcCx7ZGF5czphLG1vbnRoczpuLHllYXJzOnJ9PWksbz1oKHQpLGw9by55ZWFyLGQ9by5tb250aCxjPW8uZGF0ZTtzd2l0Y2goZSl7Y2FzZVwiQXJyb3dMZWZ0XCI6cz09PWEmJihjLT0xKSxzPT09biYmKGQtPTEpLHM9PT1yJiYobC09MSk7YnJlYWs7Y2FzZVwiQXJyb3dVcFwiOnM9PT1hJiYoYy09Nykscz09PW4mJihkLT0zKSxzPT09ciYmKGwtPTQpO2JyZWFrO2Nhc2VcIkFycm93UmlnaHRcIjpzPT09YSYmKGMrPTEpLHM9PT1uJiYoZCs9MSkscz09PXImJihsKz0xKTticmVhaztjYXNlXCJBcnJvd0Rvd25cIjpzPT09YSYmKGMrPTcpLHM9PT1uJiYoZCs9Mykscz09PXImJihsKz00KX1sZXQgdT10aGlzLmRwLmdldENsYW1wZWREYXRlKG5ldyBEYXRlKGwsZCxjKSk7dGhpcy5kcC5zZXRGb2N1c0RhdGUodSx7dmlld0RhdGVUcmFuc2l0aW9uOiEwfSl9cmVnaXN0ZXJLZXkoZSl7dGhpcy5wcmVzc2VkS2V5cy5hZGQoZSl9cmVtb3ZlS2V5KGUpe3RoaXMucHJlc3NlZEtleXMuZGVsZXRlKGUpfX1sZXQgTj17b24oZSx0KXt0aGlzLl9fZXZlbnRzfHwodGhpcy5fX2V2ZW50cz17fSksdGhpcy5fX2V2ZW50c1tlXT90aGlzLl9fZXZlbnRzW2VdLnB1c2godCk6dGhpcy5fX2V2ZW50c1tlXT1bdF19LG9mZihlLHQpe3RoaXMuX19ldmVudHMmJnRoaXMuX19ldmVudHNbZV0mJih0aGlzLl9fZXZlbnRzW2VdPXRoaXMuX19ldmVudHNbZV0uZmlsdGVyKChlPT5lIT09dCkpKX0scmVtb3ZlQWxsRXZlbnRzKCl7dGhpcy5fX2V2ZW50cz17fX0sdHJpZ2dlcihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSh0PjE/dC0xOjApLHM9MTtzPHQ7cysrKWlbcy0xXT1hcmd1bWVudHNbc107dGhpcy5fX2V2ZW50cyYmdGhpcy5fX2V2ZW50c1tlXSYmdGhpcy5fX2V2ZW50c1tlXS5mb3JFYWNoKChlPT57ZSguLi5pKX0pKX19O2Z1bmN0aW9uIEkoZSx0LGkpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBpPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1pKXt2YXIgcz1pLmNhbGwoZSxcInN0cmluZ1wiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcylyZXR1cm4gczt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuIFN0cmluZyhlKX0oZSk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWxldCBQPVwiXCIsaj1cIlwiLEI9ITE7Y2xhc3MgUntzdGF0aWMgYnVpbGRHbG9iYWxDb250YWluZXIoZSl7Qj0hMCxQPW4oe2NsYXNzTmFtZTplLGlkOmV9KSxhKFwiYm9keVwiKS5hcHBlbmRDaGlsZChQKX1jb25zdHJ1Y3RvcihlLHQpe3ZhciByPXRoaXM7aWYoSSh0aGlzLFwidmlld0luZGV4ZXNcIixbaS5kYXlzLGkubW9udGhzLGkueWVhcnNdKSxJKHRoaXMsXCJuZXh0XCIsKCgpPT57bGV0e3llYXI6ZSxtb250aDp0fT10aGlzLnBhcnNlZFZpZXdEYXRlO3N3aXRjaCh0aGlzLmN1cnJlbnRWaWV3KXtjYXNlIGkuZGF5czp0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUsdCsxLDEpKTticmVhaztjYXNlIGkubW9udGhzOnRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZSsxLHQsMSkpO2JyZWFrO2Nhc2UgaS55ZWFyczp0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUrMTAsMCwxKSl9fSkpLEkodGhpcyxcInByZXZcIiwoKCk9PntsZXR7eWVhcjplLG1vbnRoOnR9PXRoaXMucGFyc2VkVmlld0RhdGU7c3dpdGNoKHRoaXMuY3VycmVudFZpZXcpe2Nhc2UgaS5kYXlzOnRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZSx0LTEsMSkpO2JyZWFrO2Nhc2UgaS5tb250aHM6dGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlLTEsdCwxKSk7YnJlYWs7Y2FzZSBpLnllYXJzOnRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZS0xMCwwLDEpKX19KSksSSh0aGlzLFwiX2ZpbmlzaEhpZGVcIiwoKCk9Pnt0aGlzLmhpZGVBbmltYXRpb249ITEsdGhpcy5fZGVzdHJveUNvbXBvbmVudHMoKSx0aGlzLiRjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy4kZGF0ZXBpY2tlcil9KSksSSh0aGlzLFwic2V0UG9zaXRpb25cIiwoZnVuY3Rpb24oZSl7bGV0IHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZihlPWV8fHIub3B0cy5wb3NpdGlvbikpcmV0dXJuIHZvaWQoci5jdXN0b21IaWRlPWUoeyRkYXRlcGlja2VyOnIuJGRhdGVwaWNrZXIsJHRhcmdldDpyLiRlbCwkcG9pbnRlcjpyLiRwb2ludGVyLGlzVmlld0NoYW5nZTp0LGRvbmU6ci5fZmluaXNoSGlkZX0pKTtsZXQgaSxzLHtpc01vYmlsZTphfT1yLm9wdHMsbj1yLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXIuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGg9ci4kZGF0ZXBpY2tlci5vZmZzZXRQYXJlbnQsbD1yLiRlbC5vZmZzZXRQYXJlbnQsZD1yLiRkYXRlcGlja2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9ZS5zcGxpdChcIiBcIiksdT13aW5kb3cuc2Nyb2xsWSxwPXdpbmRvdy5zY3JvbGxYLG09ci5vcHRzLm9mZnNldCx2PWNbMF0sZz1jWzFdO2lmKGEpci4kZGF0ZXBpY2tlci5zdHlsZS5jc3NUZXh0PVwibGVmdDogNTAlOyB0b3A6IDUwJVwiO2Vsc2V7aWYoaD09PWwmJmghPT1kb2N1bWVudC5ib2R5JiYobz17dG9wOnIuJGVsLm9mZnNldFRvcCxsZWZ0OnIuJGVsLm9mZnNldExlZnQsd2lkdGg6bi53aWR0aCxoZWlnaHQ6ci4kZWwub2Zmc2V0SGVpZ2h0fSx1PTAscD0wKSxoIT09bCYmaCE9PWRvY3VtZW50LmJvZHkpe2xldCBlPWguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bz17dG9wOm4udG9wLWUudG9wLGxlZnQ6bi5sZWZ0LWUubGVmdCx3aWR0aDpuLndpZHRoLGhlaWdodDpuLmhlaWdodH0sdT0wLHA9MH1zd2l0Y2godil7Y2FzZVwidG9wXCI6aT1vLnRvcC1kLmhlaWdodC1tO2JyZWFrO2Nhc2VcInJpZ2h0XCI6cz1vLmxlZnQrby53aWR0aCttO2JyZWFrO2Nhc2VcImJvdHRvbVwiOmk9by50b3Arby5oZWlnaHQrbTticmVhaztjYXNlXCJsZWZ0XCI6cz1vLmxlZnQtZC53aWR0aC1tfXN3aXRjaChnKXtjYXNlXCJ0b3BcIjppPW8udG9wO2JyZWFrO2Nhc2VcInJpZ2h0XCI6cz1vLmxlZnQrby53aWR0aC1kLndpZHRoO2JyZWFrO2Nhc2VcImJvdHRvbVwiOmk9by50b3Arby5oZWlnaHQtZC5oZWlnaHQ7YnJlYWs7Y2FzZVwibGVmdFwiOnM9by5sZWZ0O2JyZWFrO2Nhc2VcImNlbnRlclwiOi9sZWZ0fHJpZ2h0Ly50ZXN0KHYpP2k9by50b3Arby5oZWlnaHQvMi1kLmhlaWdodC8yOnM9by5sZWZ0K28ud2lkdGgvMi1kLndpZHRoLzJ9ci4kZGF0ZXBpY2tlci5zdHlsZS5jc3NUZXh0PWBsZWZ0OiAke3MrcH1weDsgdG9wOiAke2krdX1weGB9fSkpLEkodGhpcyxcIl9zZXRJbnB1dFZhbHVlXCIsKCgpPT57bGV0e29wdHM6ZSwkYWx0RmllbGQ6dCxsb2NhbGU6e2RhdGVGb3JtYXQ6aX19PXRoaXMse2FsdEZpZWxkRGF0ZUZvcm1hdDpzLGFsdEZpZWxkOmF9PWU7YSYmdCYmKHQudmFsdWU9dGhpcy5fZ2V0SW5wdXRWYWx1ZShzKSksdGhpcy4kZWwudmFsdWU9dGhpcy5fZ2V0SW5wdXRWYWx1ZShpKX0pKSxJKHRoaXMsXCJfZ2V0SW5wdXRWYWx1ZVwiLChlPT57bGV0e3NlbGVjdGVkRGF0ZXM6dCxvcHRzOml9PXRoaXMse211bHRpcGxlRGF0ZXM6cyxtdWx0aXBsZURhdGVzU2VwYXJhdG9yOmF9PWk7aWYoIXQubGVuZ3RoKXJldHVyblwiXCI7bGV0IG49XCJmdW5jdGlvblwiPT10eXBlb2YgZSxyPW4/ZShzP3Q6dFswXSk6dC5tYXAoKHQ9PnRoaXMuZm9ybWF0RGF0ZSh0LGUpKSk7cmV0dXJuIHI9bj9yOnIuam9pbihhKSxyfSkpLEkodGhpcyxcIl9jaGVja0lmRGF0ZUlzU2VsZWN0ZWRcIiwoZnVuY3Rpb24oZSl7bGV0IHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOmkuZGF5cyxzPSExO3JldHVybiByLnNlbGVjdGVkRGF0ZXMuc29tZSgoaT0+e2xldCBhPXAoZSxpLHQpO3JldHVybiBzPWEmJmksYX0pKSxzfSkpLEkodGhpcyxcIl9zY2hlZHVsZUNhbGxBZnRlclRyYW5zaXRpb25cIiwoZT0+e3RoaXMuX2NhbmNlbFNjaGVkdWxlZENhbGwoKSxlJiZlKCExKSx0aGlzLl9vblRyYW5zaXRpb25FbmQ9KCk9PntlJiZlKCEwKX0sdGhpcy4kZGF0ZXBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHRoaXMuX29uVHJhbnNpdGlvbkVuZCx7b25jZTohMH0pfSkpLEkodGhpcyxcIl9jYW5jZWxTY2hlZHVsZWRDYWxsXCIsKCgpPT57dGhpcy4kZGF0ZXBpY2tlci5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHRoaXMuX29uVHJhbnNpdGlvbkVuZCl9KSksSSh0aGlzLFwic2V0Vmlld0RhdGVcIiwoZT0+e2lmKCEoKGU9YihlKSlpbnN0YW5jZW9mIERhdGUpKXJldHVybjtpZihwKGUsdGhpcy52aWV3RGF0ZSkpcmV0dXJuO2xldCB0PXRoaXMudmlld0RhdGU7dGhpcy52aWV3RGF0ZT1lO2xldHtvbkNoYW5nZVZpZXdEYXRlOnN9PXRoaXMub3B0cztpZihzKXtsZXR7bW9udGg6ZSx5ZWFyOnR9PXRoaXMucGFyc2VkVmlld0RhdGU7cyh7bW9udGg6ZSx5ZWFyOnQsZGVjYWRlOnRoaXMuY3VyRGVjYWRlfSl9dGhpcy50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VWaWV3RGF0ZSxlLHQpfSkpLEkodGhpcyxcInNldEZvY3VzRGF0ZVwiLChmdW5jdGlvbihlKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307KCFlfHwoZT1iKGUpKWluc3RhbmNlb2YgRGF0ZSkmJihyLmZvY3VzRGF0ZT1lLHIudHJpZ2dlcihpLmV2ZW50Q2hhbmdlRm9jdXNEYXRlLGUsdCkpfSkpLEkodGhpcyxcInNldEN1cnJlbnRWaWV3XCIsKGZ1bmN0aW9uKGUpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtpZihyLnZpZXdJbmRleGVzLmluY2x1ZGVzKGUpKXtpZihyLmN1cnJlbnRWaWV3PWUsci5lbElzSW5wdXQmJnIudmlzaWJsZSYmci5zZXRQb3NpdGlvbih2b2lkIDAsITApLHIudHJpZ2dlcihpLmV2ZW50Q2hhbmdlQ3VycmVudFZpZXcsZSksIXIudmlld3NbZV0pe2xldCB0PXIudmlld3NbZV09bmV3IFQoe2RwOnIsb3B0czpyLm9wdHMsdHlwZTplfSk7ci5zaG91bGRVcGRhdGVET00mJnIuJGNvbnRlbnQuYXBwZW5kQ2hpbGQodC4kZWwpfXIub3B0cy5vbkNoYW5nZVZpZXcmJiF0LnNpbGVudCYmci5vcHRzLm9uQ2hhbmdlVmlldyhlKX19KSksSSh0aGlzLFwiX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGVcIiwoZT0+e3RoaXMubGFzdFNlbGVjdGVkRGF0ZT1lLHRoaXMudHJpZ2dlcihpLmV2ZW50Q2hhbmdlTGFzdFNlbGVjdGVkRGF0ZSxlKX0pKSxJKHRoaXMsXCJkZXN0cm95XCIsKCgpPT57bGV0e3Nob3dFdmVudDplLGlzTW9iaWxlOnR9PXRoaXMub3B0cyxpPXRoaXMuJGRhdGVwaWNrZXIucGFyZW50Tm9kZTtpJiZpLnJlbW92ZUNoaWxkKHRoaXMuJGRhdGVwaWNrZXIpLHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0aGlzLl9vbkZvY3VzKSx0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1ciksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9vblJlc2l6ZSksdCYmdGhpcy5fcmVtb3ZlTW9iaWxlQXR0cmlidXRlcygpLHRoaXMua2V5Ym9hcmROYXYmJnRoaXMua2V5Ym9hcmROYXYuZGVzdHJveSgpLHRoaXMudmlld3M9bnVsbCx0aGlzLm5hdj1udWxsLHRoaXMuJGRhdGVwaWNrZXI9bnVsbCx0aGlzLm9wdHM9bnVsbCx0aGlzLiRjdXN0b21Db250YWluZXI9bnVsbCx0aGlzLnZpZXdEYXRlPW51bGwsdGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnNlbGVjdGVkRGF0ZXM9bnVsbCx0aGlzLnJhbmdlRGF0ZUZyb209bnVsbCx0aGlzLnJhbmdlRGF0ZVRvPW51bGx9KSksSSh0aGlzLFwidXBkYXRlXCIsKGZ1bmN0aW9uKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHM9dyh7fSxyLm9wdHMpLHtzaWxlbnQ6YX09dDt3KHIub3B0cyxlKTtsZXR7dGltZXBpY2tlcjpuLGJ1dHRvbnM6byxyYW5nZTpoLHNlbGVjdGVkRGF0ZXM6bCxpc01vYmlsZTpkfT1yLm9wdHMsYz1yLnZpc2libGV8fHIudHJlYXRBc0lubGluZTtyLl9jcmVhdGVNaW5NYXhEYXRlcygpLHIuX2xpbWl0Vmlld0RhdGVCeU1heE1pbkRhdGVzKCksci5faGFuZGxlTG9jYWxlKCksbCYmKHIuc2VsZWN0ZWREYXRlcz1bXSxyLnNlbGVjdERhdGUobCx7c2lsZW50OmF9KSksZS52aWV3JiZyLnNldEN1cnJlbnRWaWV3KGUudmlldyx7c2lsZW50OmF9KSxyLl9zZXRJbnB1dFZhbHVlKCkscy5yYW5nZSYmIWg/KHIucmFuZ2VEYXRlVG89ITEsci5yYW5nZURhdGVGcm9tPSExKTohcy5yYW5nZSYmaCYmci5zZWxlY3RlZERhdGVzLmxlbmd0aCYmKHIucmFuZ2VEYXRlRnJvbT1yLnNlbGVjdGVkRGF0ZXNbMF0sci5yYW5nZURhdGVUbz1yLnNlbGVjdGVkRGF0ZXNbMV0pLHMudGltZXBpY2tlciYmIW4/KGMmJnIudGltZXBpY2tlci5kZXN0cm95KCksci50aW1lcGlja2VyPSExLHIuJHRpbWVwaWNrZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyLiR0aW1lcGlja2VyKSk6IXMudGltZXBpY2tlciYmbiYmci5fYWRkVGltZXBpY2tlcigpLCFzLmJ1dHRvbnMmJm8/ci5fYWRkQnV0dG9ucygpOnMuYnV0dG9ucyYmIW8/KHIuYnV0dG9ucy5kZXN0cm95KCksci4kYnV0dG9ucy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIuJGJ1dHRvbnMpKTpjJiZzLmJ1dHRvbnMmJm8mJnIuYnV0dG9ucy5jbGVhckh0bWwoKS5yZW5kZXIoKSwhcy5pc01vYmlsZSYmZD8oci50cmVhdEFzSW5saW5lfHxqfHxyLl9jcmVhdGVNb2JpbGVPdmVybGF5KCksci5fYWRkTW9iaWxlQXR0cmlidXRlcygpLHIudmlzaWJsZSYmci5fc2hvd01vYmlsZU92ZXJsYXkoKSk6cy5pc01vYmlsZSYmIWQmJihyLl9yZW1vdmVNb2JpbGVBdHRyaWJ1dGVzKCksci52aXNpYmxlJiYoai5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZS1cIiksXCJmdW5jdGlvblwiIT10eXBlb2Ygci5vcHRzLnBvc2l0aW9uJiZyLnNldFBvc2l0aW9uKCkpKSxjJiYoci5uYXYudXBkYXRlKCksci52aWV3c1tyLmN1cnJlbnRWaWV3XS5yZW5kZXIoKSxyLmN1cnJlbnRWaWV3PT09aS5kYXlzJiZyLnZpZXdzW3IuY3VycmVudFZpZXddLnJlbmRlckRheU5hbWVzKCkpfSkpLEkodGhpcyxcImRpc2FibGVEYXRlXCIsKChlLHQpPT57KEFycmF5LmlzQXJyYXkoZSk/ZTpbZV0pLmZvckVhY2goKGU9PntsZXQgaT1iKGUpO2lmKCFpKXJldHVybjtsZXQgcz10P1wiZGVsZXRlXCI6XCJhZGRcIjt0aGlzLmRpc2FibGVkRGF0ZXNbc10odGhpcy5mb3JtYXREYXRlKGksXCJ5eXl5LU1NLWRkXCIpKTtsZXQgYT10aGlzLmdldENlbGwoaSx0aGlzLmN1cnJlbnRWaWV3U2luZ3VsYXIpO2EmJmEuYWRwQ2VsbC5yZW5kZXIoKX0pLFtdKX0pKSxJKHRoaXMsXCJlbmFibGVEYXRlXCIsKGU9Pnt0aGlzLmRpc2FibGVEYXRlKGUsITApfSkpLEkodGhpcyxcImlzRGF0ZURpc2FibGVkXCIsKGU9PntsZXQgdD1iKGUpO3JldHVybiB0aGlzLmRpc2FibGVkRGF0ZXMuaGFzKHRoaXMuZm9ybWF0RGF0ZSh0LFwieXl5eS1NTS1kZFwiKSl9KSksSSh0aGlzLFwiaXNPdGhlck1vbnRoXCIsKGU9PntsZXR7bW9udGg6dH09aChlKTtyZXR1cm4gdCE9PXRoaXMucGFyc2VkVmlld0RhdGUubW9udGh9KSksSSh0aGlzLFwiaXNPdGhlclllYXJcIiwoZT0+e2xldHt5ZWFyOnR9PWgoZSk7cmV0dXJuIHQhPT10aGlzLnBhcnNlZFZpZXdEYXRlLnllYXJ9KSksSSh0aGlzLFwiaXNPdGhlckRlY2FkZVwiLChlPT57bGV0e3llYXI6dH09aChlKSxbaSxzXT1jKHRoaXMudmlld0RhdGUpO3JldHVybiB0PGl8fHQ+c30pKSxJKHRoaXMsXCJfb25DaGFuZ2VTZWxlY3RlZERhdGVcIiwoZT0+e2xldHtzaWxlbnQ6dH09ZTtzZXRUaW1lb3V0KCgoKT0+e3RoaXMuX3NldElucHV0VmFsdWUoKSx0aGlzLm9wdHMub25TZWxlY3QmJiF0JiZ0aGlzLl90cmlnZ2VyT25TZWxlY3QoKX0pKX0pKSxJKHRoaXMsXCJfb25DaGFuZ2VGb2N1c2VkRGF0ZVwiLChmdW5jdGlvbihlKXtsZXR7dmlld0RhdGVUcmFuc2l0aW9uOnR9PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtpZighZSlyZXR1cm47bGV0IGk9ITE7dCYmKGk9ci5pc090aGVyTW9udGgoZSl8fHIuaXNPdGhlclllYXIoZSl8fHIuaXNPdGhlckRlY2FkZShlKSksaSYmci5zZXRWaWV3RGF0ZShlKSxyLm9wdHMub25Gb2N1cyYmci5vcHRzLm9uRm9jdXMoe2RhdGVwaWNrZXI6cixkYXRlOmV9KX0pKSxJKHRoaXMsXCJfb25DaGFuZ2VUaW1lXCIsKGU9PntsZXR7aG91cnM6dCxtaW51dGVzOml9PWUscz1uZXcgRGF0ZSx7bGFzdFNlbGVjdGVkRGF0ZTphLG9wdHM6e29uU2VsZWN0Om59fT10aGlzLHI9YTthfHwocj1zKTtsZXQgbz10aGlzLmdldENlbGwocix0aGlzLmN1cnJlbnRWaWV3U2luZ3VsYXIpLGg9byYmby5hZHBDZWxsO2gmJmguaXNEaXNhYmxlZHx8KHIuc2V0SG91cnModCksci5zZXRNaW51dGVzKGkpLGE/KHRoaXMuX3NldElucHV0VmFsdWUoKSxuJiZ0aGlzLl90cmlnZ2VyT25TZWxlY3QoKSk6dGhpcy5zZWxlY3REYXRlKHIpKX0pKSxJKHRoaXMsXCJfb25Gb2N1c1wiLChlPT57dGhpcy52aXNpYmxlfHx0aGlzLnNob3coKX0pKSxJKHRoaXMsXCJfb25CbHVyXCIsKGU9Pnt0aGlzLmluRm9jdXN8fCF0aGlzLnZpc2libGV8fHRoaXMub3B0cy5pc01vYmlsZXx8dGhpcy5oaWRlKCl9KSksSSh0aGlzLFwiX29uTW91c2VEb3duXCIsKGU9Pnt0aGlzLmluRm9jdXM9ITB9KSksSSh0aGlzLFwiX29uTW91c2VVcFwiLChlPT57dGhpcy5pbkZvY3VzPSExLHRoaXMuJGVsLmZvY3VzKCl9KSksSSh0aGlzLFwiX29uUmVzaXplXCIsKCgpPT57dGhpcy52aXNpYmxlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzLm9wdHMucG9zaXRpb24mJnRoaXMuc2V0UG9zaXRpb24oKX0pKSxJKHRoaXMsXCJfb25DbGlja092ZXJsYXlcIiwoKCk9Pnt0aGlzLnZpc2libGUmJnRoaXMuaGlkZSgpfSkpLEkodGhpcyxcImdldFZpZXdEYXRlc1wiLChmdW5jdGlvbigpe2xldCBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTppLmRheXM7cmV0dXJuIFQuZ2V0RGF0ZXNGdW5jdGlvbihlKShyKX0pKSxJKHRoaXMsXCJpc1dlZWtlbmRcIiwoZT0+dGhpcy5vcHRzLndlZWtlbmRzLmluY2x1ZGVzKGUpKSksSSh0aGlzLFwiZ2V0Q2xhbXBlZERhdGVcIiwoZT0+e2xldHttaW5EYXRlOnQsbWF4RGF0ZTppfT10aGlzLHM9ZTtyZXR1cm4gaSYmbShlLGkpP3M9aTp0JiZ2KGUsdCkmJihzPXQpLHN9KSksdGhpcy4kZWw9YShlKSwhdGhpcy4kZWwpcmV0dXJuO3RoaXMuJGRhdGVwaWNrZXI9bih7Y2xhc3NOYW1lOlwiYWlyLWRhdGVwaWNrZXJcIn0pLHRoaXMub3B0cz13KHt9LHMsdCksdGhpcy4kY3VzdG9tQ29udGFpbmVyPSEhdGhpcy5vcHRzLmNvbnRhaW5lciYmYSh0aGlzLm9wdHMuY29udGFpbmVyKSx0aGlzLiRhbHRGaWVsZD1hKHRoaXMub3B0cy5hbHRGaWVsZHx8ITEpO2xldHt2aWV3Om8sc3RhcnREYXRlOmx9PXRoaXMub3B0cztsfHwodGhpcy5vcHRzLnN0YXJ0RGF0ZT1uZXcgRGF0ZSksXCJJTlBVVFwiPT09dGhpcy4kZWwubm9kZU5hbWUmJih0aGlzLmVsSXNJbnB1dD0hMCksdGhpcy5pbml0ZWQ9ITEsdGhpcy52aXNpYmxlPSExLHRoaXMudmlld0RhdGU9Yih0aGlzLm9wdHMuc3RhcnREYXRlKSx0aGlzLmZvY3VzRGF0ZT0hMSx0aGlzLmluaXRpYWxSZWFkb25seT10aGlzLiRlbC5nZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSx0aGlzLmN1c3RvbUhpZGU9ITEsdGhpcy5jdXJyZW50Vmlldz1vLHRoaXMuc2VsZWN0ZWREYXRlcz1bXSx0aGlzLmRpc2FibGVkRGF0ZXM9bmV3IFNldCx0aGlzLnZpZXdzPXt9LHRoaXMua2V5cz1bXSx0aGlzLnJhbmdlRGF0ZUZyb209XCJcIix0aGlzLnJhbmdlRGF0ZVRvPVwiXCIsdGhpcy50aW1lcGlja2VySXNBY3RpdmU9ITEsdGhpcy50cmVhdEFzSW5saW5lPXRoaXMub3B0cy5pbmxpbmV8fCF0aGlzLmVsSXNJbnB1dCx0aGlzLmluaXQoKX1pbml0KCl7bGV0e29wdHM6ZSx0cmVhdEFzSW5saW5lOnQsb3B0czp7aW5saW5lOmksaXNNb2JpbGU6cyxzZWxlY3RlZERhdGVzOm4sa2V5Ym9hcmROYXY6cixvbmx5VGltZXBpY2tlcjpvfX09dGhpcyxoPWEoXCJib2R5XCIpOyghQnx8QiYmUCYmIWguY29udGFpbnMoUCkpJiYhaSYmdGhpcy5lbElzSW5wdXQmJiF0aGlzLiRjdXN0b21Db250YWluZXImJlIuYnVpbGRHbG9iYWxDb250YWluZXIoUi5kZWZhdWx0R2xvYmFsQ29udGFpbmVySWQpLCFzfHxqfHx0fHx0aGlzLl9jcmVhdGVNb2JpbGVPdmVybGF5KCksdGhpcy5faGFuZGxlTG9jYWxlKCksdGhpcy5fYmluZFN1YkV2ZW50cygpLHRoaXMuX2NyZWF0ZU1pbk1heERhdGVzKCksdGhpcy5fbGltaXRWaWV3RGF0ZUJ5TWF4TWluRGF0ZXMoKSx0aGlzLmVsSXNJbnB1dCYmKGl8fHRoaXMuX2JpbmRFdmVudHMoKSxyJiYhbyYmKHRoaXMua2V5Ym9hcmROYXY9bmV3IEEoe2RwOnRoaXMsb3B0czplfSkpKSxuJiZ0aGlzLnNlbGVjdERhdGUobix7c2lsZW50OiEwfSksdGhpcy5vcHRzLnZpc2libGUmJiF0JiZ0aGlzLnNob3coKSxzJiYhdCYmdGhpcy4kZWwuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwhMCksdCYmdGhpcy5fY3JlYXRlQ29tcG9uZW50cygpfV9jcmVhdGVNb2JpbGVPdmVybGF5KCl7aj1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci1vdmVybGF5XCJ9KSxQLmFwcGVuZENoaWxkKGopfV9jcmVhdGVDb21wb25lbnRzKCl7bGV0e29wdHM6ZSx0cmVhdEFzSW5saW5lOnQsb3B0czp7aW5saW5lOmksYnV0dG9uczpzLHRpbWVwaWNrZXI6YSxwb3NpdGlvbjpuLGNsYXNzZXM6cixvbmx5VGltZXBpY2tlcjpvLGlzTW9iaWxlOmh9fT10aGlzO3RoaXMuX2J1aWxkQmFzZUh0bWwoKSx0aGlzLmVsSXNJbnB1dCYmKGl8fHRoaXMuX3NldFBvc2l0aW9uQ2xhc3NlcyhuKSksIWkmJnRoaXMuZWxJc0lucHV0fHx0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoXCItaW5saW5lLVwiKSxyJiZ0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoLi4uci5zcGxpdChcIiBcIikpLG8mJnRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1vbmx5LXRpbWVwaWNrZXItXCIpLGgmJiF0JiZ0aGlzLl9hZGRNb2JpbGVBdHRyaWJ1dGVzKCksdGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3XT1uZXcgVCh7ZHA6dGhpcyx0eXBlOnRoaXMuY3VycmVudFZpZXcsb3B0czplfSksdGhpcy5uYXY9bmV3IFYoe2RwOnRoaXMsb3B0czplfSksYSYmdGhpcy5fYWRkVGltZXBpY2tlcigpLHMmJnRoaXMuX2FkZEJ1dHRvbnMoKSx0aGlzLiRjb250ZW50LmFwcGVuZENoaWxkKHRoaXMudmlld3NbdGhpcy5jdXJyZW50Vmlld10uJGVsKSx0aGlzLiRuYXYuYXBwZW5kQ2hpbGQodGhpcy5uYXYuJGVsKX1fZGVzdHJveUNvbXBvbmVudHMoKXtmb3IobGV0IGUgaW4gdGhpcy52aWV3cyl0aGlzLnZpZXdzW2VdLmRlc3Ryb3koKTt0aGlzLnZpZXdzPXt9LHRoaXMubmF2LmRlc3Ryb3koKSx0aGlzLnRpbWVwaWNrZXImJnRoaXMudGltZXBpY2tlci5kZXN0cm95KCl9X2FkZE1vYmlsZUF0dHJpYnV0ZXMoKXtqLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX29uQ2xpY2tPdmVybGF5KSx0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoXCItaXMtbW9iaWxlLVwiKSx0aGlzLiRlbC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCEwKX1fcmVtb3ZlTW9iaWxlQXR0cmlidXRlcygpe2oucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fb25DbGlja092ZXJsYXkpLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcIi1pcy1tb2JpbGUtXCIpLHRoaXMuaW5pdGlhbFJlYWRvbmx5fHxcIlwiPT09dGhpcy5pbml0aWFsUmVhZG9ubHl8fHRoaXMuJGVsLnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpfV9jcmVhdGVNaW5NYXhEYXRlcygpe2xldHttaW5EYXRlOmUsbWF4RGF0ZTp0fT10aGlzLm9wdHM7dGhpcy5taW5EYXRlPSEhZSYmYihlKSx0aGlzLm1heERhdGU9ISF0JiZiKHQpfV9hZGRUaW1lcGlja2VyKCl7dGhpcy4kdGltZXBpY2tlcj1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci0tdGltZVwifSksdGhpcy4kZGF0ZXBpY2tlci5hcHBlbmRDaGlsZCh0aGlzLiR0aW1lcGlja2VyKSx0aGlzLnRpbWVwaWNrZXI9bmV3IEwoe2RwOnRoaXMsb3B0czp0aGlzLm9wdHN9KSx0aGlzLiR0aW1lcGlja2VyLmFwcGVuZENoaWxkKHRoaXMudGltZXBpY2tlci4kZWwpfV9hZGRCdXR0b25zKCl7dGhpcy4kYnV0dG9ucz1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci0tYnV0dG9uc1wifSksdGhpcy4kZGF0ZXBpY2tlci5hcHBlbmRDaGlsZCh0aGlzLiRidXR0b25zKSx0aGlzLmJ1dHRvbnM9bmV3IEgoe2RwOnRoaXMsb3B0czp0aGlzLm9wdHN9KSx0aGlzLiRidXR0b25zLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9ucy4kZWwpfV9iaW5kU3ViRXZlbnRzKCl7dGhpcy5vbihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHRoaXMuX29uQ2hhbmdlU2VsZWN0ZWREYXRlKSx0aGlzLm9uKGkuZXZlbnRDaGFuZ2VGb2N1c0RhdGUsdGhpcy5fb25DaGFuZ2VGb2N1c2VkRGF0ZSksdGhpcy5vbihpLmV2ZW50Q2hhbmdlVGltZSx0aGlzLl9vbkNoYW5nZVRpbWUpfV9idWlsZEJhc2VIdG1sKCl7bGV0e2lubGluZTplfT10aGlzLm9wdHM7dmFyIHQsaTt0aGlzLmVsSXNJbnB1dD9lPyh0PXRoaXMuJGRhdGVwaWNrZXIsKGk9dGhpcy4kZWwpLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsaS5uZXh0U2libGluZykpOnRoaXMuJGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiRkYXRlcGlja2VyKTp0aGlzLiRlbC5hcHBlbmRDaGlsZCh0aGlzLiRkYXRlcGlja2VyKSx0aGlzLiRkYXRlcGlja2VyLmlubmVySFRNTD0nPGkgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci0tcG9pbnRlclwiPjwvaT48ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItLW5hdmlnYXRpb25cIj48L2Rpdj48ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItLWNvbnRlbnRcIj48L2Rpdj4nLHRoaXMuJGNvbnRlbnQ9YShcIi5haXItZGF0ZXBpY2tlci0tY29udGVudFwiLHRoaXMuJGRhdGVwaWNrZXIpLHRoaXMuJHBvaW50ZXI9YShcIi5haXItZGF0ZXBpY2tlci0tcG9pbnRlclwiLHRoaXMuJGRhdGVwaWNrZXIpLHRoaXMuJG5hdj1hKFwiLmFpci1kYXRlcGlja2VyLS1uYXZpZ2F0aW9uXCIsdGhpcy4kZGF0ZXBpY2tlcil9X2hhbmRsZUxvY2FsZSgpe2xldHtsb2NhbGU6ZSxkYXRlRm9ybWF0OnQsZmlyc3REYXk6aSx0aW1lcGlja2VyOnMsb25seVRpbWVwaWNrZXI6YSx0aW1lRm9ybWF0Om4sZGF0ZVRpbWVTZXBhcmF0b3I6cn09dGhpcy5vcHRzO3ZhciBvO3RoaXMubG9jYWxlPShvPWUsSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvKSkpLHQmJih0aGlzLmxvY2FsZS5kYXRlRm9ybWF0PXQpLHZvaWQgMCE9PW4mJlwiXCIhPT1uJiYodGhpcy5sb2NhbGUudGltZUZvcm1hdD1uKTtsZXR7dGltZUZvcm1hdDpofT10aGlzLmxvY2FsZTtpZihcIlwiIT09aSYmKHRoaXMubG9jYWxlLmZpcnN0RGF5PWkpLHMmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpe2xldCBlPWg/cjpcIlwiO3RoaXMubG9jYWxlLmRhdGVGb3JtYXQ9W3RoaXMubG9jYWxlLmRhdGVGb3JtYXQsaHx8XCJcIl0uam9pbihlKX1hJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiYodGhpcy5sb2NhbGUuZGF0ZUZvcm1hdD10aGlzLmxvY2FsZS50aW1lRm9ybWF0KX1fc2V0UG9zaXRpb25DbGFzc2VzKGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpcmV0dXJuIHZvaWQgdGhpcy4kZGF0ZXBpY2tlci5jbGFzc0xpc3QuYWRkKFwiLWN1c3RvbS1wb3NpdGlvbi1cIik7bGV0IHQ9KGU9ZS5zcGxpdChcIiBcIikpWzBdLGk9YGFpci1kYXRlcGlja2VyIC0ke3R9LSR7ZVsxXX0tIC1mcm9tLSR7dH0tYDt0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoLi4uaS5zcGxpdChcIiBcIikpfV9iaW5kRXZlbnRzKCl7dGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm9wdHMuc2hvd0V2ZW50LHRoaXMuX29uRm9jdXMpLHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyKSx0aGlzLiRkYXRlcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLl9vbk1vdXNlRG93biksdGhpcy4kZGF0ZXBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuX29uTW91c2VVcCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9vblJlc2l6ZSl9X2xpbWl0Vmlld0RhdGVCeU1heE1pbkRhdGVzKCl7bGV0e3ZpZXdEYXRlOmUsbWluRGF0ZTp0LG1heERhdGU6aX09dGhpcztpJiZtKGUsaSkmJnRoaXMuc2V0Vmlld0RhdGUoaSksdCYmdihlLHQpJiZ0aGlzLnNldFZpZXdEYXRlKHQpfWZvcm1hdERhdGUoKXtsZXQgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy52aWV3RGF0ZSx0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwO2lmKGU9YihlKSwhKGUgaW5zdGFuY2VvZiBEYXRlKSlyZXR1cm47bGV0IGk9dCxzPXRoaXMubG9jYWxlLGE9aChlKSxuPWEuZGF5UGVyaW9kLHI9YyhlKSxvPVIucmVwbGFjZXIsbD17VDplLmdldFRpbWUoKSxtOmEubWludXRlcyxtbTphLmZ1bGxNaW51dGVzLGg6YS5ob3VyczEyLGhoOmEuZnVsbEhvdXJzMTIsSDphLmhvdXJzLEhIOmEuZnVsbEhvdXJzLGFhOm4sQUE6bi50b1VwcGVyQ2FzZSgpLEU6cy5kYXlzU2hvcnRbYS5kYXldLEVFRUU6cy5kYXlzW2EuZGF5XSxkOmEuZGF0ZSxkZDphLmZ1bGxEYXRlLE06YS5tb250aCsxLE1NOmEuZnVsbE1vbnRoLE1NTTpzLm1vbnRoc1Nob3J0W2EubW9udGhdLE1NTU06cy5tb250aHNbYS5tb250aF0seXk6YS55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLHl5eXk6YS55ZWFyLHl5eXkxOnJbMF0seXl5eTI6clsxXX07Zm9yKGxldFtlLHRdb2YgT2JqZWN0LmVudHJpZXMobCkpaT1vKGksayhlKSx0KTtyZXR1cm4gaX1kb3duKGUpe3RoaXMuX2hhbmRsZVVwRG93bkFjdGlvbnMoZSxcImRvd25cIil9dXAoZSl7dGhpcy5faGFuZGxlVXBEb3duQWN0aW9ucyhlLFwidXBcIil9c2VsZWN0RGF0ZShlKXtsZXQgdCxzPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSx7Y3VycmVudFZpZXc6YSxwYXJzZWRWaWV3RGF0ZTpuLHNlbGVjdGVkRGF0ZXM6cn09dGhpcyx7dXBkYXRlVGltZTpvfT1zLHttb3ZlVG9PdGhlck1vbnRoc09uU2VsZWN0OmgsbW92ZVRvT3RoZXJZZWFyc09uU2VsZWN0OmwsbXVsdGlwbGVEYXRlczpkLHJhbmdlOmMsYXV0b0Nsb3NlOnUsb25CZWZvcmVTZWxlY3Q6cH09dGhpcy5vcHRzLHY9ci5sZW5ndGg7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS5mb3JFYWNoKChlPT57dGhpcy5zZWxlY3REYXRlKGUscyl9KSksbmV3IFByb21pc2UoKGU9PntzZXRUaW1lb3V0KGUpfSkpO2lmKChlPWIoZSkpaW5zdGFuY2VvZiBEYXRlKXtpZihwJiYhcCh7ZGF0ZTplLGRhdGVwaWNrZXI6dGhpc30pKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTtpZihhPT09aS5kYXlzJiZlLmdldE1vbnRoKCkhPT1uLm1vbnRoJiZoJiYodD1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksZS5nZXRNb250aCgpLDEpKSxhPT09aS55ZWFycyYmZS5nZXRGdWxsWWVhcigpIT09bi55ZWFyJiZsJiYodD1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksMCwxKSksdCYmdGhpcy5zZXRWaWV3RGF0ZSh0KSxkJiYhYyl7aWYodj09PWQpcmV0dXJuO3RoaXMuX2NoZWNrSWZEYXRlSXNTZWxlY3RlZChlKXx8ci5wdXNoKGUpfWVsc2UgaWYoYylzd2l0Y2godil7Y2FzZSAxOnIucHVzaChlKSx0aGlzLnJhbmdlRGF0ZVRvfHwodGhpcy5yYW5nZURhdGVUbz1lKSxtKHRoaXMucmFuZ2VEYXRlRnJvbSx0aGlzLnJhbmdlRGF0ZVRvKSYmKHRoaXMucmFuZ2VEYXRlVG89dGhpcy5yYW5nZURhdGVGcm9tLHRoaXMucmFuZ2VEYXRlRnJvbT1lKSx0aGlzLnNlbGVjdGVkRGF0ZXM9W3RoaXMucmFuZ2VEYXRlRnJvbSx0aGlzLnJhbmdlRGF0ZVRvXTticmVhaztjYXNlIDI6dGhpcy5zZWxlY3RlZERhdGVzPVtlXSx0aGlzLnJhbmdlRGF0ZUZyb209ZSx0aGlzLnJhbmdlRGF0ZVRvPVwiXCI7YnJlYWs7ZGVmYXVsdDp0aGlzLnNlbGVjdGVkRGF0ZXM9W2VdLHRoaXMucmFuZ2VEYXRlRnJvbT1lfWVsc2UgdGhpcy5zZWxlY3RlZERhdGVzPVtlXTtyZXR1cm4gdGhpcy50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUse2FjdGlvbjppLmFjdGlvblNlbGVjdERhdGUsc2lsZW50Om51bGw9PXM/dm9pZCAwOnMuc2lsZW50LGRhdGU6ZSx1cGRhdGVUaW1lOm99KSx0aGlzLl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlKGUpLHUmJiF0aGlzLnRpbWVwaWNrZXJJc0FjdGl2ZSYmdGhpcy52aXNpYmxlJiYoZHx8Yz9jJiYxPT09diYmdGhpcy5oaWRlKCk6dGhpcy5oaWRlKCkpLG5ldyBQcm9taXNlKChlPT57c2V0VGltZW91dChlKX0pKX19dW5zZWxlY3REYXRlKGUpe2xldCB0PXRoaXMuc2VsZWN0ZWREYXRlcyxzPXRoaXM7aWYoKGU9YihlKSlpbnN0YW5jZW9mIERhdGUpcmV0dXJuIHQuc29tZSgoKGEsbik9PntpZihwKGEsZSkpcmV0dXJuIHQuc3BsaWNlKG4sMSkscy5zZWxlY3RlZERhdGVzLmxlbmd0aD9zLl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlKHMuc2VsZWN0ZWREYXRlc1tzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoLTFdKToocy5yYW5nZURhdGVGcm9tPVwiXCIscy5yYW5nZURhdGVUbz1cIlwiLHMuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUoITEpKSx0aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx7YWN0aW9uOmkuYWN0aW9uVW5zZWxlY3REYXRlLGRhdGU6ZX0pLCEwfSkpfXJlcGxhY2VEYXRlKGUsdCl7bGV0IHM9dGhpcy5zZWxlY3RlZERhdGVzLmZpbmQoKHQ9PnAodCxlLHRoaXMuY3VycmVudFZpZXcpKSksYT10aGlzLnNlbGVjdGVkRGF0ZXMuaW5kZXhPZihzKTthPDB8fHAodGhpcy5zZWxlY3RlZERhdGVzW2FdLHQsdGhpcy5jdXJyZW50Vmlldyl8fCh0aGlzLnNlbGVjdGVkRGF0ZXNbYV09dCx0aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx7YWN0aW9uOmkuYWN0aW9uU2VsZWN0RGF0ZSxkYXRlOnQsdXBkYXRlVGltZTohMH0pLHRoaXMuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUodCkpfWNsZWFyKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3JldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXM9W10sdGhpcy5yYW5nZURhdGVGcm9tPSExLHRoaXMucmFuZ2VEYXRlVG89ITEsdGhpcy5sYXN0U2VsZWN0ZWREYXRlPSExLHRoaXMudHJpZ2dlcihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHthY3Rpb246aS5hY3Rpb25VbnNlbGVjdERhdGUsc2lsZW50OmUuc2lsZW50fSksbmV3IFByb21pc2UoKGU9PntzZXRUaW1lb3V0KGUpfSkpfXNob3coKXtsZXR7b25TaG93OmUsaXNNb2JpbGU6dH09dGhpcy5vcHRzO3RoaXMuX2NhbmNlbFNjaGVkdWxlZENhbGwoKSx0aGlzLnZpc2libGV8fHRoaXMuaGlkZUFuaW1hdGlvbnx8dGhpcy5fY3JlYXRlQ29tcG9uZW50cygpLHRoaXMuc2V0UG9zaXRpb24odGhpcy5vcHRzLnBvc2l0aW9uKSx0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlLVwiKSx0aGlzLnZpc2libGU9ITAsZSYmdGhpcy5fc2NoZWR1bGVDYWxsQWZ0ZXJUcmFuc2l0aW9uKGUpLHQmJnRoaXMuX3Nob3dNb2JpbGVPdmVybGF5KCl9aGlkZSgpe2xldHtvbkhpZGU6ZSxpc01vYmlsZTp0fT10aGlzLm9wdHMsaT10aGlzLl9oYXNUcmFuc2l0aW9uKCk7dGhpcy52aXNpYmxlPSExLHRoaXMuaGlkZUFuaW1hdGlvbj0hMCx0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlLVwiKSx0aGlzLmN1c3RvbUhpZGUmJnRoaXMuY3VzdG9tSGlkZSgpLHRoaXMuZWxJc0lucHV0JiZ0aGlzLiRlbC5ibHVyKCksdGhpcy5fc2NoZWR1bGVDYWxsQWZ0ZXJUcmFuc2l0aW9uKCh0PT57IXRoaXMuY3VzdG9tSGlkZSYmKHQmJml8fCF0JiYhaSkmJnRoaXMuX2ZpbmlzaEhpZGUoKSxlJiZlKHQpfSkpLHQmJmouY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmUtXCIpfV90cmlnZ2VyT25TZWxlY3QoKXtsZXQgZT1bXSx0PVtdLHtzZWxlY3RlZERhdGVzOmksbG9jYWxlOnMsb3B0czp7b25TZWxlY3Q6YSxtdWx0aXBsZURhdGVzOm4scmFuZ2U6cn19PXRoaXMsbz1ufHxyLGg9XCJmdW5jdGlvblwiPT10eXBlb2Ygcy5kYXRlRm9ybWF0O2kubGVuZ3RoJiYoZT1pLm1hcChnKSx0PWg/bj9zLmRhdGVGb3JtYXQoZSk6ZS5tYXAoKGU9PnMuZGF0ZUZvcm1hdChlKSkpOmUubWFwKChlPT50aGlzLmZvcm1hdERhdGUoZSxzLmRhdGVGb3JtYXQpKSkpLGEoe2RhdGU6bz9lOmVbMF0sZm9ybWF0dGVkRGF0ZTpvP3Q6dFswXSxkYXRlcGlja2VyOnRoaXN9KX1faGFuZGxlQWxyZWFkeVNlbGVjdGVkRGF0ZXMoZSx0KXtsZXR7c2VsZWN0ZWREYXRlczppLHJhbmdlRGF0ZUZyb206cyxyYW5nZURhdGVUbzphfT10aGlzLHtyYW5nZTpuLHRvZ2dsZVNlbGVjdGVkOnJ9PXRoaXMub3B0cyxvPWkubGVuZ3RoLGg9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yKHtkYXRlcGlja2VyOnRoaXMsZGF0ZTp0fSk6cixsPUJvb2xlYW4obiYmMT09PW8mJmUpLGQ9bD9nKHQpOnQ7biYmIWgmJigyIT09byYmdGhpcy5zZWxlY3REYXRlKGQpLDI9PT1vJiZwKHMsYSkpfHwoaD90aGlzLnVuc2VsZWN0RGF0ZShkKTp0aGlzLl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlKGw/ZDplKSl9X2hhbmRsZVVwRG93bkFjdGlvbnMoZSx0KXtpZighKChlPWIoZXx8dGhpcy5mb2N1c0RhdGV8fHRoaXMudmlld0RhdGUpKWluc3RhbmNlb2YgRGF0ZSkpcmV0dXJuO2xldCBpPVwidXBcIj09PXQ/dGhpcy52aWV3SW5kZXgrMTp0aGlzLnZpZXdJbmRleC0xO2k+MiYmKGk9MiksaTwwJiYoaT0wKSx0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSxlLmdldE1vbnRoKCksMSkpLHRoaXMuc2V0Q3VycmVudFZpZXcodGhpcy52aWV3SW5kZXhlc1tpXSl9Z2V0Q2VsbChlKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06aS5kYXk7aWYoISgoZT1iKGUpKWluc3RhbmNlb2YgRGF0ZSkpcmV0dXJuO2xldHt5ZWFyOnMsbW9udGg6YSxkYXRlOm59PWgoZSkscj1gW2RhdGEteWVhcj1cIiR7c31cIl1gLG89YFtkYXRhLW1vbnRoPVwiJHthfVwiXWAsbD17W2kuZGF5XTpgJHtyfSR7b31bZGF0YS1kYXRlPVwiJHtufVwiXWAsW2kubW9udGhdOmAke3J9JHtvfWAsW2kueWVhcl06YCR7cn1gfTtyZXR1cm4gdGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3XT90aGlzLnZpZXdzW3RoaXMuY3VycmVudFZpZXddLiRlbC5xdWVyeVNlbGVjdG9yKGxbdF0pOnZvaWQgMH1fc2hvd01vYmlsZU92ZXJsYXkoKXtqLmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlLVwiKX1faGFzVHJhbnNpdGlvbigpe3JldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRkYXRlcGlja2VyKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKS5zcGxpdChcIiwgXCIpLnJlZHVjZSgoKGUsdCk9PnBhcnNlRmxvYXQodCkrZSksMCk+MH1nZXQgc2hvdWxkVXBkYXRlRE9NKCl7cmV0dXJuIHRoaXMudmlzaWJsZXx8dGhpcy50cmVhdEFzSW5saW5lfWdldCBwYXJzZWRWaWV3RGF0ZSgpe3JldHVybiBoKHRoaXMudmlld0RhdGUpfWdldCBjdXJyZW50Vmlld1Npbmd1bGFyKCl7cmV0dXJuIHRoaXMuY3VycmVudFZpZXcuc2xpY2UoMCwtMSl9Z2V0IGN1ckRlY2FkZSgpe3JldHVybiBjKHRoaXMudmlld0RhdGUpfWdldCB2aWV3SW5kZXgoKXtyZXR1cm4gdGhpcy52aWV3SW5kZXhlcy5pbmRleE9mKHRoaXMuY3VycmVudFZpZXcpfWdldCBpc0ZpbmFsVmlldygpe3JldHVybiB0aGlzLmN1cnJlbnRWaWV3PT09aS55ZWFyc31nZXQgaGFzU2VsZWN0ZWREYXRlcygpe3JldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoPjB9Z2V0IGlzTWluVmlld1JlYWNoZWQoKXtyZXR1cm4gdGhpcy5jdXJyZW50Vmlldz09PXRoaXMub3B0cy5taW5WaWV3fHx0aGlzLmN1cnJlbnRWaWV3PT09aS5kYXlzfWdldCAkY29udGFpbmVyKCl7cmV0dXJuIHRoaXMuJGN1c3RvbUNvbnRhaW5lcnx8UH1zdGF0aWMgcmVwbGFjZXIoZSx0LGkpe3JldHVybiBlLnJlcGxhY2UodCwoZnVuY3Rpb24oZSx0LHMsYSl7cmV0dXJuIHQraSthfSkpfX12YXIgSztyZXR1cm4gSShSLFwiZGVmYXVsdHNcIixzKSxJKFIsXCJ2ZXJzaW9uXCIsXCIzLjUuMFwiKSxJKFIsXCJkZWZhdWx0R2xvYmFsQ29udGFpbmVySWRcIixcImFpci1kYXRlcGlja2VyLWdsb2JhbC1jb250YWluZXJcIiksSz1SLnByb3RvdHlwZSxPYmplY3QuYXNzaWduKEssTiksdC5kZWZhdWx0fSgpfSkpOyIsImltcG9ydCBBaXJEYXRlcGlja2VyIGZyb20gJy4vYWlyLWRhdGVwaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgQWlyRGF0ZXBpY2tlciIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICBkYXlzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gIGRheXNTaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgZGF5c01pbjogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBtb250aHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICBtb250aHNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB0b2RheTogJ1RvZGF5JyxcbiAgY2xlYXI6ICdDbGVhcicsXG4gIGRhdGVGb3JtYXQ6ICdNTS9kZC95eXl5JyxcbiAgdGltZUZvcm1hdDogJ2hoOm1tIGFhJyxcbiAgZmlyc3REYXk6IDBcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2NvbG9yOnZhcigtLWFkcC1jb2xvci1vdGhlci1tb250aCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtOmhvdmVyLC5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC06aG92ZXJ7Y29sb3I6dmFyKC0tYWRwLWNvbG9yLW90aGVyLW1vbnRoLWhvdmVyKX0uLWRpc2FibGVkLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC4tZGlzYWJsZWQtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2NvbG9yOnZhcigtLWFkcC1jb2xvci1vdGhlci1tb250aCl9Li1zZWxlY3RlZC0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1zZWxlY3RlZC0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2NvbG9yOiNmZmY7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZC1vdGhlci1tb250aCl9Li1zZWxlY3RlZC0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuLXNlbGVjdGVkLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLXtiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoLWZvY3VzZWQpfS4taW4tcmFuZ2UtLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC4taW4tcmFuZ2UtLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtjb2xvcjp2YXIoLS1hZHAtY29sb3IpfS4taW4tcmFuZ2UtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1pbi1yYW5nZS0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZS1mb2N1c2VkKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS06ZW1wdHksLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLTplbXB0eXtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmV9LmFpci1kYXRlcGlja2VyLWNlbGx7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3otaW5kZXg6MX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZm9jdXMte2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQte2NvbG9yOnZhcigtLWFkcC1jb2xvci1jdXJyZW50LWRhdGUpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1jdXJyZW50LS4tZm9jdXMte2NvbG9yOnZhcigtLWFkcC1jb2xvcil9LmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQtLi1pbi1yYW5nZS17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLWN1cnJlbnQtZGF0ZSl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLXtjdXJzb3I6ZGVmYXVsdDtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1kaXNhYmxlZC0uLWZvY3VzLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1kaXNhYmxlZC0uLWluLXJhbmdlLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQtaW4tcmFuZ2UpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1kaXNhYmxlZC0uLWN1cnJlbnQtLi1mb2N1cy17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLWRpc2FibGVkKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4taW4tcmFuZ2Ute2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZSk7Ym9yZGVyLXJhZGl1czowfS5haXItZGF0ZXBpY2tlci1jZWxsLi1pbi1yYW5nZS06aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tcmFuZ2UtZnJvbS17Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1hZHAtY2VsbC1ib3JkZXItY29sb3ItaW4tcmFuZ2UpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cyl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXJhbmdlLXRvLXtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC1jZWxsLWJvcmRlci1jb2xvci1pbi1yYW5nZSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtib3JkZXItcmFkaXVzOjAgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cykgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cykgMH0uYWlyLWRhdGVwaWNrZXItY2VsbC4tcmFuZ2UtdG8tLi1yYW5nZS1mcm9tLXtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1jZWxsLWJvcmRlci1yYWRpdXMpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1zZWxlY3RlZC17Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1zZWxlY3RlZC0uLWN1cnJlbnQte2NvbG9yOiNmZmY7YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tc2VsZWN0ZWQtLi1mb2N1cy17YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLWhvdmVyKX1cbi5haXItZGF0ZXBpY2tlci1ib2R5e3RyYW5zaXRpb246YWxsIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1lYXNlKX0uYWlyLWRhdGVwaWNrZXItYm9keS4taGlkZGVuLXtkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lc3tkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg3LCB2YXIoLS1hZHAtZGF5LWNlbGwtd2lkdGgpKTttYXJnaW46OHB4IDAgM3B4fS5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZXtjb2xvcjp2YXIoLS1hZHAtZGF5LW5hbWUtY29sb3IpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZTouOGVtfS5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZS4tY2xpY2thYmxlLXtjdXJzb3I6cG9pbnRlcn0uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWUuLWNsaWNrYWJsZS06aG92ZXJ7Y29sb3I6dmFyKC0tYWRwLWRheS1uYW1lLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHN7ZGlzcGxheTpncmlkfS5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxscy4tZGF5cy17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg3LCB2YXIoLS1hZHAtZGF5LWNlbGwtd2lkdGgpKTtncmlkLWF1dG8tcm93czp2YXIoLS1hZHAtZGF5LWNlbGwtaGVpZ2h0KX0uYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMuLW1vbnRocy17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLCAxZnIpO2dyaWQtYXV0by1yb3dzOnZhcigtLWFkcC1tb250aC1jZWxsLWhlaWdodCl9LmFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzLi15ZWFycy17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg0LCAxZnIpO2dyaWQtYXV0by1yb3dzOnZhcigtLWFkcC15ZWFyLWNlbGwtaGVpZ2h0KX1cbi5haXItZGF0ZXBpY2tlci1uYXZ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5uZXIpO21pbi1oZWlnaHQ6dmFyKC0tYWRwLW5hdi1oZWlnaHQpO3BhZGRpbmc6dmFyKC0tYWRwLXBhZGRpbmcpO2JveC1zaXppbmc6Y29udGVudC1ib3h9Li1vbmx5LXRpbWVwaWNrZXItIC5haXItZGF0ZXBpY2tlci1uYXZ7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlLC5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbntkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9ue3dpZHRoOnZhcigtLWFkcC1uYXYtYWN0aW9uLXNpemUpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb246aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSl9LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uLi1kaXNhYmxlZC17dmlzaWJpbGl0eTpoaWRkZW59LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uIHN2Z3t3aWR0aDozMnB4O2hlaWdodDozMnB4fS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbiBwYXRoe2ZpbGw6bm9uZTtzdHJva2U6dmFyKC0tYWRwLW5hdi1hcnJvdy1jb2xvcik7c3Ryb2tlLXdpZHRoOjJweH0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZXtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1ib3JkZXItcmFkaXVzKTtwYWRkaW5nOjAgOHB4fS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlIGl7Zm9udC1zdHlsZTpub3JtYWw7Y29sb3I6dmFyKC0tYWRwLW5hdi1jb2xvci1zZWNvbmRhcnkpO21hcmdpbi1sZWZ0Oi4zZW19LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGU6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGU6YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZS4tZGlzYWJsZWQte2N1cnNvcjpkZWZhdWx0O2JhY2tncm91bmQ6bm9uZX1cbi5haXItZGF0ZXBpY2tlci1idXR0b25ze2Rpc3BsYXk6Z3JpZDtncmlkLWF1dG8tY29sdW1uczoxZnI7Z3JpZC1hdXRvLWZsb3c6Y29sdW1ufS5haXItZGF0ZXBpY2tlci1idXR0b257ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1hZHAtYnRuLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1idG4tYm9yZGVyLXJhZGl1cyk7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OnZhcigtLWFkcC1idG4taGVpZ2h0KTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMCl9LmFpci1kYXRlcGlja2VyLWJ1dHRvbjpob3Zlcntjb2xvcjp2YXIoLS1hZHAtYnRuLWNvbG9yLWhvdmVyKTtiYWNrZ3JvdW5kOnZhcigtLWFkcC1idG4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLWJ1dHRvbjpmb2N1c3tjb2xvcjp2YXIoLS1hZHAtYnRuLWNvbG9yLWhvdmVyKTtiYWNrZ3JvdW5kOnZhcigtLWFkcC1idG4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7b3V0bGluZTpub25lfS5haXItZGF0ZXBpY2tlci1idXR0b246YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSl9LmFpci1kYXRlcGlja2VyLWJ1dHRvbiBzcGFue291dGxpbmU6bm9uZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1cbi5haXItZGF0ZXBpY2tlci10aW1le2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO2dyaWQtY29sdW1uLWdhcDoxMnB4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjAgdmFyKC0tYWRwLXRpbWUtcGFkZGluZy1pbm5lcil9Li1vbmx5LXRpbWVwaWNrZXItIC5haXItZGF0ZXBpY2tlci10aW1le2JvcmRlci10b3A6bm9uZX0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXg6MTtmb250LXNpemU6MTRweDt0ZXh0LWFsaWduOmNlbnRlcn0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1jb2xvbnttYXJnaW46MCAycHggM3B4O2xpbmUtaGVpZ2h0OjF9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnMsLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlc3tsaW5lLWhlaWdodDoxO2ZvbnQtc2l6ZToxOXB4O2ZvbnQtZmFtaWx5OlwiQ2VudHVyeSBHb3RoaWNcIixDZW50dXJ5R290aGljLEFwcGxlR290aGljLHNhbnMtc2VyaWY7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWhvdXJzOmFmdGVyLC5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LW1pbnV0ZXM6YWZ0ZXJ7Y29udGVudDpcIlwiO2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTJweDt0b3A6LTNweDtyaWdodDotMnB4O2JvdHRvbTotMnB4O3otaW5kZXg6LTE7b3BhY2l0eTowfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWhvdXJzLi1mb2N1cy06YWZ0ZXIsLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlcy4tZm9jdXMtOmFmdGVye29wYWNpdHk6MX0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1hbXBte3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTthbGlnbi1zZWxmOmZsZXgtZW5kO2NvbG9yOnZhcigtLWFkcC10aW1lLWRheS1wZXJpb2QtY29sb3IpO21hcmdpbi1sZWZ0OjZweDtmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjFweH0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjExcHg7aGVpZ2h0OjE3cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yKSwgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpKSBsZWZ0IDUwJS8xMDAlIHZhcigtLWFkcC10aW1lLXRyYWNrLWhlaWdodCkgbm8tcmVwZWF0fS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3c6Zmlyc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo0cHh9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXXtiYWNrZ3JvdW5kOm5vbmU7Y3Vyc29yOnBvaW50ZXI7ZmxleDoxO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cGFkZGluZzowO21hcmdpbjowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iey13ZWJraXQtYXBwZWFyYW5jZTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10b29sdGlwe2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmhvdmVyOjotd2Via2l0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6dmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06aG92ZXI6Oi1tb3otcmFuZ2UtdGh1bWJ7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmhvdmVyOjotbXMtdGh1bWJ7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmZvY3Vze291dGxpbmU6bm9uZX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYntiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbW96LXJhbmdlLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy10aHVtYntiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYntib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yKTtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYntib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yKTtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7LW1vei10cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1ie2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjstbXMtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKTt0cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1ie21hcmdpbi10b3A6Y2FsYyh2YXIoLS1hZHAtdGltZS10aHVtYi1zaXplKS8yKi0xKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3tib3JkZXI6bm9uZTtoZWlnaHQ6dmFyKC0tYWRwLXRpbWUtdHJhY2staGVpZ2h0KTtjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLDApO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNre2JvcmRlcjpub25lO2hlaWdodDp2YXIoLS1hZHAtdGltZS10cmFjay1oZWlnaHQpO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsMCk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFja3tib3JkZXI6bm9uZTtoZWlnaHQ6dmFyKC0tYWRwLXRpbWUtdHJhY2staGVpZ2h0KTtjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLDApO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCl9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfVxuLmFpci1kYXRlcGlja2Vyey0tYWRwLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjstLWFkcC1mb250LXNpemU6IDE0cHg7LS1hZHAtd2lkdGg6IDI0NnB4Oy0tYWRwLXotaW5kZXg6IDEwMDstLWFkcC1wYWRkaW5nOiA0cHg7LS1hZHAtZ3JpZC1hcmVhczogXCJuYXZcIiBcImJvZHlcIiBcInRpbWVwaWNrZXJcIiBcImJ1dHRvbnNcIjstLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7LS1hZHAtdHJhbnNpdGlvbi1lYXNlOiBlYXNlLW91dDstLWFkcC10cmFuc2l0aW9uLW9mZnNldDogOHB4Oy0tYWRwLWJhY2tncm91bmQtY29sb3I6ICNmZmY7LS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogI2YwZjBmMDstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogI2VhZWFlYTstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlOiByZ2JhKDkyLCAxOTYsIDIzOSwgLjEpOy0tYWRwLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UtZm9jdXNlZDogcmdiYSg5MiwgMTk2LCAyMzksIC4yKTstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoLWZvY3VzZWQ6ICM4YWQ1ZjQ7LS1hZHAtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZC1vdGhlci1tb250aDogI2EyZGRmNjstLWFkcC1jb2xvcjogIzRhNGE0YTstLWFkcC1jb2xvci1zZWNvbmRhcnk6ICM5YzljOWM7LS1hZHAtYWNjZW50LWNvbG9yOiAjNGViNWU2Oy0tYWRwLWNvbG9yLWN1cnJlbnQtZGF0ZTogdmFyKC0tYWRwLWFjY2VudC1jb2xvcik7LS1hZHAtY29sb3Itb3RoZXItbW9udGg6ICNkZWRlZGU7LS1hZHAtY29sb3ItZGlzYWJsZWQ6ICNhZWFlYWU7LS1hZHAtY29sb3ItZGlzYWJsZWQtaW4tcmFuZ2U6ICM5MzkzOTM7LS1hZHAtY29sb3Itb3RoZXItbW9udGgtaG92ZXI6ICNjNWM1YzU7LS1hZHAtYm9yZGVyLWNvbG9yOiAjZGJkYmRiOy0tYWRwLWJvcmRlci1jb2xvci1pbm5lcjogI2VmZWZlZjstLWFkcC1ib3JkZXItcmFkaXVzOiA0cHg7LS1hZHAtYm9yZGVyLWNvbG9yLWlubGluZTogI2Q3ZDdkNzstLWFkcC1uYXYtaGVpZ2h0OiAzMnB4Oy0tYWRwLW5hdi1hcnJvdy1jb2xvcjogdmFyKC0tYWRwLWNvbG9yLXNlY29uZGFyeSk7LS1hZHAtbmF2LWFjdGlvbi1zaXplOiAzMnB4Oy0tYWRwLW5hdi1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWFkcC1jb2xvci1zZWNvbmRhcnkpOy0tYWRwLWRheS1uYW1lLWNvbG9yOiAjZmY5YTE5Oy0tYWRwLWRheS1uYW1lLWNvbG9yLWhvdmVyOiAjOGFkNWY0Oy0tYWRwLWRheS1jZWxsLXdpZHRoOiAxZnI7LS1hZHAtZGF5LWNlbGwtaGVpZ2h0OiAzMnB4Oy0tYWRwLW1vbnRoLWNlbGwtaGVpZ2h0OiA0MnB4Oy0tYWRwLXllYXItY2VsbC1oZWlnaHQ6IDU2cHg7LS1hZHAtcG9pbnRlci1zaXplOiAxMHB4Oy0tYWRwLXBvaW5lci1ib3JkZXItcmFkaXVzOiAycHg7LS1hZHAtcG9pbnRlci1vZmZzZXQ6IDE0cHg7LS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzOiA0cHg7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiAjNWNjNGVmOy0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZC1ob3ZlcjogIzQ1YmNlZDstLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2U6IHJnYmEoOTIsIDE5NiwgMjM5LCAwLjEpOy0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZS1ob3ZlcjogcmdiYSg5MiwgMTk2LCAyMzksIDAuMik7LS1hZHAtY2VsbC1ib3JkZXItY29sb3ItaW4tcmFuZ2U6IHZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpOy0tYWRwLWJ0bi1oZWlnaHQ6IDMycHg7LS1hZHAtYnRuLWNvbG9yOiB2YXIoLS1hZHAtYWNjZW50LWNvbG9yKTstLWFkcC1idG4tY29sb3ItaG92ZXI6IHZhcigtLWFkcC1jb2xvcik7LS1hZHAtYnRuLWJvcmRlci1yYWRpdXM6IHZhcigtLWFkcC1ib3JkZXItcmFkaXVzKTstLWFkcC1idG4tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaG92ZXIpOy0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogdmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKTstLWFkcC10aW1lLXRyYWNrLWhlaWdodDogMXB4Oy0tYWRwLXRpbWUtdHJhY2stY29sb3I6ICNkZWRlZGU7LS1hZHAtdGltZS10cmFjay1jb2xvci1ob3ZlcjogI2IxYjFiMTstLWFkcC10aW1lLXRodW1iLXNpemU6IDEycHg7LS1hZHAtdGltZS1wYWRkaW5nLWlubmVyOiAxMHB4Oy0tYWRwLXRpbWUtZGF5LXBlcmlvZC1jb2xvcjogdmFyKC0tYWRwLWNvbG9yLXNlY29uZGFyeSk7LS1hZHAtbW9iaWxlLWZvbnQtc2l6ZTogMTZweDstLWFkcC1tb2JpbGUtbmF2LWhlaWdodDogNDBweDstLWFkcC1tb2JpbGUtd2lkdGg6IDMyMHB4Oy0tYWRwLW1vYmlsZS1kYXktY2VsbC1oZWlnaHQ6IDM4cHg7LS1hZHAtbW9iaWxlLW1vbnRoLWNlbGwtaGVpZ2h0OiA0OHB4Oy0tYWRwLW1vYmlsZS15ZWFyLWNlbGwtaGVpZ2h0OiA2NHB4fS5haXItZGF0ZXBpY2tlci1vdmVybGF5ey0tYWRwLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7LS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7LS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWVhc2U6IGVhc2Utb3V0Oy0tYWRwLW92ZXJsYXktei1pbmRleDogOTl9XG4uYWlyLWRhdGVwaWNrZXJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yKTtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMTUpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpO2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7Z3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCg0LCBtYXgtY29udGVudCk7Z3JpZC10ZW1wbGF0ZS1hcmVhczp2YXIoLS1hZHAtZ3JpZC1hcmVhcyk7Zm9udC1mYW1pbHk6dmFyKC0tYWRwLWZvbnQtZmFtaWx5KSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTp2YXIoLS1hZHAtZm9udC1zaXplKTtjb2xvcjp2YXIoLS1hZHAtY29sb3IpO3dpZHRoOnZhcigtLWFkcC13aWR0aCk7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1lYXNlKSx0cmFuc2Zvcm0gdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC10cmFuc2l0aW9uLWVhc2UpO3otaW5kZXg6dmFyKC0tYWRwLXotaW5kZXgpfS5haXItZGF0ZXBpY2tlcjpub3QoLi1jdXN0b20tcG9zaXRpb24tKXtvcGFjaXR5OjB9LmFpci1kYXRlcGlja2VyLi1mcm9tLXRvcC17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpICogLTEpKX0uYWlyLWRhdGVwaWNrZXIuLWZyb20tcmlnaHQte3RyYW5zZm9ybTp0cmFuc2xhdGVYKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkpfS5haXItZGF0ZXBpY2tlci4tZnJvbS1ib3R0b20te3RyYW5zZm9ybTp0cmFuc2xhdGVZKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkpfS5haXItZGF0ZXBpY2tlci4tZnJvbS1sZWZ0LXt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKHZhcigtLWFkcC10cmFuc2l0aW9uLW9mZnNldCkgKiAtMSkpfS5haXItZGF0ZXBpY2tlci4tYWN0aXZlLTpub3QoLi1jdXN0b20tcG9zaXRpb24tKXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApO29wYWNpdHk6MX0uYWlyLWRhdGVwaWNrZXIuLWFjdGl2ZS0uLWN1c3RvbS1wb3NpdGlvbi17dHJhbnNpdGlvbjpub25lfS5haXItZGF0ZXBpY2tlci4taW5saW5lLXtib3JkZXItY29sb3I6dmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbmxpbmUpO2JveC1zaGFkb3c6bm9uZTtwb3NpdGlvbjpzdGF0aWM7bGVmdDphdXRvO3JpZ2h0OmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfS5haXItZGF0ZXBpY2tlci4taW5saW5lLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci4taXMtbW9iaWxlLXstLWFkcC1mb250LXNpemU6IHZhcigtLWFkcC1tb2JpbGUtZm9udC1zaXplKTstLWFkcC1kYXktY2VsbC1oZWlnaHQ6IHZhcigtLWFkcC1tb2JpbGUtZGF5LWNlbGwtaGVpZ2h0KTstLWFkcC1tb250aC1jZWxsLWhlaWdodDogdmFyKC0tYWRwLW1vYmlsZS1tb250aC1jZWxsLWhlaWdodCk7LS1hZHAteWVhci1jZWxsLWhlaWdodDogdmFyKC0tYWRwLW1vYmlsZS15ZWFyLWNlbGwtaGVpZ2h0KTstLWFkcC1uYXYtaGVpZ2h0OiB2YXIoLS1hZHAtbW9iaWxlLW5hdi1oZWlnaHQpOy0tYWRwLW5hdi1hY3Rpb24tc2l6ZTogdmFyKC0tYWRwLW1vYmlsZS1uYXYtaGVpZ2h0KTtwb3NpdGlvbjpmaXhlZDt3aWR0aDp2YXIoLS1hZHAtbW9iaWxlLXdpZHRoKTtib3JkZXI6bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS0gKnstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS06bm90KC4tY3VzdG9tLXBvc2l0aW9uLSl7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgKyB2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpKSl9LmFpci1kYXRlcGlja2VyLi1pcy1tb2JpbGUtLi1hY3RpdmUtOm5vdCguLWN1c3RvbS1wb3NpdGlvbi0pe3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSl9LmFpci1kYXRlcGlja2VyLi1jdXN0b20tcG9zaXRpb24te3RyYW5zaXRpb246bm9uZX0uYWlyLWRhdGVwaWNrZXItZ2xvYmFsLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LmFpci1kYXRlcGlja2VyLS1wb2ludGVyey0tcG9pbnRlci1oYWxmLXNpemU6IGNhbGModmFyKC0tYWRwLXBvaW50ZXItc2l6ZSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS1hZHAtcG9pbnRlci1zaXplKTtoZWlnaHQ6dmFyKC0tYWRwLXBvaW50ZXItc2l6ZSk7ei1pbmRleDotMX0uYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yLWlubGluZSk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yLWlubGluZSk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYWRwLXBvaW5lci1ib3JkZXItcmFkaXVzKTt3aWR0aDp2YXIoLS1hZHAtcG9pbnRlci1zaXplKTtoZWlnaHQ6dmFyKC0tYWRwLXBvaW50ZXItc2l6ZSk7Ym94LXNpemluZzpib3JkZXItYm94fS4tdG9wLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXRvcC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXRvcC1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXRvcF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3RvcDpjYWxjKDEwMCUgLSB2YXIoLS1wb2ludGVyLWhhbGYtc2l6ZSkgKyAxcHgpfS4tdG9wLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLXRvcC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLXRvcC1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXRvcF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVye3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0uLXJpZ2h0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tcmlnaHQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1yaWdodC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1yaWdodF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3JpZ2h0OmNhbGMoMTAwJSAtIHZhcigtLXBvaW50ZXItaGFsZi1zaXplKSArIDFweCl9Li1yaWdodC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLXJpZ2h0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tcmlnaHQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49cmlnaHRdIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKDIyNWRlZyl9Li1ib3R0b20tbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tYm90dG9tLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tYm90dG9tLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49Ym90dG9tXSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7Ym90dG9tOmNhbGMoMTAwJSAtIHZhcigtLXBvaW50ZXItaGFsZi1zaXplKSArIDFweCl9Li1ib3R0b20tbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tYm90dG9tLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tYm90dG9tLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49Ym90dG9tXSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpfS4tbGVmdC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWxlZnQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1sZWZ0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntsZWZ0OmNhbGMoMTAwJSAtIHZhcigtLXBvaW50ZXItaGFsZi1zaXplKSArIDFweCl9Li1sZWZ0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tbGVmdC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlciwuLWxlZnQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49bGVmdF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVye3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS4tdG9wLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWJvdHRvbS1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7bGVmdDp2YXIoLS1hZHAtcG9pbnRlci1vZmZzZXQpfS4tdG9wLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntyaWdodDp2YXIoLS1hZHAtcG9pbnRlci1vZmZzZXQpfS4tdG9wLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tYm90dG9tLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2xlZnQ6Y2FsYyg1MCUgLSB2YXIoLS1hZHAtcG9pbnRlci1zaXplKS8yKX0uLWxlZnQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1yaWdodC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcnt0b3A6dmFyKC0tYWRwLXBvaW50ZXItb2Zmc2V0KX0uLWxlZnQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1yaWdodC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntib3R0b206dmFyKC0tYWRwLXBvaW50ZXItb2Zmc2V0KX0uLWxlZnQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1yaWdodC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcnt0b3A6Y2FsYyg1MCUgLSB2YXIoLS1hZHAtcG9pbnRlci1zaXplKS8yKX0uYWlyLWRhdGVwaWNrZXItLW5hdmlnYXRpb257Z3JpZC1hcmVhOm5hdn0uYWlyLWRhdGVwaWNrZXItLWNvbnRlbnR7Ym94LXNpemluZzpjb250ZW50LWJveDtwYWRkaW5nOnZhcigtLWFkcC1wYWRkaW5nKTtncmlkLWFyZWE6Ym9keX0uLW9ubHktdGltZXBpY2tlci0gLmFpci1kYXRlcGlja2VyLS1jb250ZW50e2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXItLXRpbWV7Z3JpZC1hcmVhOnRpbWVwaWNrZXJ9LmFpci1kYXRlcGlja2VyLS1idXR0b25ze2dyaWQtYXJlYTpidXR0b25zfS5haXItZGF0ZXBpY2tlci0tYnV0dG9ucywuYWlyLWRhdGVwaWNrZXItLXRpbWV7cGFkZGluZzp2YXIoLS1hZHAtcGFkZGluZyk7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbm5lcil9LmFpci1kYXRlcGlja2VyLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7YmFja2dyb3VuZDp2YXIoLS1hZHAtb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yKTtsZWZ0OjA7dG9wOjA7d2lkdGg6MDtoZWlnaHQ6MDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZWFzZSksbGVmdCAwcyxoZWlnaHQgMHMsd2lkdGggMHM7dHJhbnNpdGlvbi1kZWxheTowcyx2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uKSx2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uKSx2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uKTt6LWluZGV4OnZhcigtLWFkcC1vdmVybGF5LXotaW5kZXgpfS5haXItZGF0ZXBpY2tlci1vdmVybGF5Li1hY3RpdmUte29wYWNpdHk6MTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWVhc2UpLGhlaWdodCAwcyx3aWR0aCAwc31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL2Fpci1kYXRlcGlja2VyL2Fpci1kYXRlcGlja2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvRkFBb0Ysa0NBQWtDLENBQUMsZ0dBQWdHLHdDQUF3QyxDQUFDLDBIQUEwSCxrQ0FBa0MsQ0FBQywwR0FBMEcsVUFBVSxDQUFDLDJEQUEyRCxDQUFDLDBIQUEwSCxtRUFBbUUsQ0FBQywwR0FBMEcscURBQXFELENBQUMsc0JBQXNCLENBQUMsMEhBQTBILDZEQUE2RCxDQUFDLGdHQUFnRyxlQUFlLENBQUMsV0FBVyxDQUFDLHFCQUFxQiwyQ0FBMkMsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsaURBQWlELENBQUMsK0JBQStCLG1DQUFtQyxDQUFDLHVDQUF1QyxzQkFBc0IsQ0FBQywwQ0FBMEMsbUNBQW1DLENBQUMsZ0NBQWdDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyx3Q0FBd0MsK0JBQStCLENBQUMsMkNBQTJDLHdDQUF3QyxDQUFDLGtEQUFrRCwrQkFBK0IsQ0FBQyxnQ0FBZ0Msb0RBQW9ELENBQUMsZUFBZSxDQUFDLHNDQUFzQywwREFBMEQsQ0FBQyxrQ0FBa0Msc0RBQXNELENBQUMsMERBQTBELENBQUMsNkVBQTZFLENBQUMsZ0NBQWdDLHNEQUFzRCxDQUFDLDBEQUEwRCxDQUFDLDZFQUE2RSxDQUFDLDZDQUE2QywyQ0FBMkMsQ0FBQyxnQ0FBZ0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvREFBb0QsQ0FBQywwQ0FBMEMsVUFBVSxDQUFDLG9EQUFvRCxDQUFDLHdDQUF3QywwREFBMEQ7QUFDcGlHLHFCQUFxQix3RUFBd0UsQ0FBQyw4QkFBOEIsWUFBWSxDQUFDLGdDQUFnQyxZQUFZLENBQUMsMERBQTBELENBQUMsZ0JBQWdCLENBQUMsK0JBQStCLCtCQUErQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLDJDQUEyQyxjQUFjLENBQUMsaURBQWlELHFDQUFxQyxDQUFDLDRCQUE0QixZQUFZLENBQUMsbUNBQW1DLDBEQUEwRCxDQUFDLHlDQUF5QyxDQUFDLHFDQUFxQyxvQ0FBb0MsQ0FBQywyQ0FBMkMsQ0FBQyxvQ0FBb0Msb0NBQW9DLENBQUMsMENBQTBDO0FBQ3ArQixvQkFBb0IsWUFBWSxDQUFDLDZCQUE2QixDQUFDLHFEQUFxRCxDQUFDLGdDQUFnQyxDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLHVDQUF1QyxZQUFZLENBQUMsdURBQXVELFlBQVksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLGdDQUFnQyxDQUFDLHNDQUFzQyxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGtDQUFrQyw0Q0FBNEMsQ0FBQyxtQ0FBbUMsNkNBQTZDLENBQUMsdUNBQXVDLGlCQUFpQixDQUFDLGdDQUFnQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxTQUFTLENBQUMsaUNBQWlDLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLHNDQUFzQyxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsaUJBQWlCLENBQUMsb0NBQW9DLENBQUMsZ0JBQWdCLENBQUMsaUNBQWlDLDRDQUE0QyxDQUFDLGtDQUFrQyw2Q0FBNkMsQ0FBQyxzQ0FBc0MsY0FBYyxDQUFDLGVBQWU7QUFDbHlDLHdCQUF3QixZQUFZLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLDBDQUEwQyxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsOEJBQThCLENBQUMsNkJBQTZCLGdDQUFnQyxDQUFDLGdEQUFnRCxDQUFDLDZCQUE2QixnQ0FBZ0MsQ0FBQyxnREFBZ0QsQ0FBQyxZQUFZLENBQUMsOEJBQThCLGlEQUFpRCxDQUFDLDRCQUE0QixZQUFZLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxXQUFXO0FBQzFzQixxQkFBcUIsWUFBWSxDQUFDLHFDQUFxQyxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHVDQUF1QyxDQUFDLHdDQUF3QyxlQUFlLENBQUMsOEJBQThCLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsMEVBQTBFLGFBQWEsQ0FBQyxjQUFjLENBQUMsaUVBQWlFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHNGQUFzRixVQUFVLENBQUMsNENBQTRDLENBQUMsc0NBQXNDLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0dBQXNHLFNBQVMsQ0FBQyxtQ0FBbUMsd0JBQXdCLENBQUMsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsbUpBQW1KLENBQUMsc0NBQXNDLGlCQUFpQixDQUFDLDRDQUE0QyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0VBQWtFLHVCQUF1QixDQUFDLHlEQUF5RCxZQUFZLENBQUMsd0VBQXdFLDhDQUE4QyxDQUFDLG9FQUFvRSw4Q0FBOEMsQ0FBQyw2REFBNkQsOENBQThDLENBQUMsa0RBQWtELFlBQVksQ0FBQyx3RUFBd0Usb0RBQW9ELENBQUMsc0RBQXNELENBQUMsb0VBQW9FLG9EQUFvRCxDQUFDLHNEQUFzRCxDQUFDLDZEQUE2RCxvREFBb0QsQ0FBQyxzREFBc0QsQ0FBQyxrRUFBa0UscUJBQXFCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyw0Q0FBNEMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLDREQUE0RCxDQUFDLG9EQUFvRCxDQUFDLDhEQUE4RCxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLDRDQUE0QyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMseURBQXlELENBQUMsb0RBQW9ELENBQUMsdURBQXVELHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsNENBQTRDLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyx3REFBd0QsQ0FBQyxvREFBb0QsQ0FBQyxrRUFBa0UsZ0RBQWdELENBQUMsMkVBQTJFLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsOERBQThELFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsdURBQXVELFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsNERBQTRELHdCQUF3QixDQUFDLDREQUE0RCx3QkFBd0I7QUFDNXlJLGdCQUFnQixnS0FBZ0ssQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxxREFBcUQsQ0FBQyw4QkFBOEIsQ0FBQywrQkFBK0IsQ0FBQyw0QkFBNEIsQ0FBQyw0QkFBNEIsQ0FBQyxxQ0FBcUMsQ0FBQyxzQ0FBc0MsQ0FBQyx1REFBdUQsQ0FBQywrREFBK0QsQ0FBQyw0REFBNEQsQ0FBQyxvREFBb0QsQ0FBQyxvQkFBb0IsQ0FBQyw4QkFBOEIsQ0FBQywyQkFBMkIsQ0FBQyxpREFBaUQsQ0FBQyxnQ0FBZ0MsQ0FBQyw2QkFBNkIsQ0FBQyxzQ0FBc0MsQ0FBQyxzQ0FBc0MsQ0FBQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FBQyx3QkFBd0IsQ0FBQyxrQ0FBa0MsQ0FBQyxzQkFBc0IsQ0FBQyxpREFBaUQsQ0FBQywyQkFBMkIsQ0FBQyxxREFBcUQsQ0FBQyw2QkFBNkIsQ0FBQyxtQ0FBbUMsQ0FBQyx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQyw2QkFBNkIsQ0FBQyw0QkFBNEIsQ0FBQyx3QkFBd0IsQ0FBQywrQkFBK0IsQ0FBQywwQkFBMEIsQ0FBQyw2QkFBNkIsQ0FBQyxvRUFBb0UsQ0FBQyw2Q0FBNkMsQ0FBQyxtREFBbUQsQ0FBQyw2REFBNkQsQ0FBQyxtRUFBbUUsQ0FBQywyRUFBMkUsQ0FBQyxzQkFBc0IsQ0FBQyx3Q0FBd0MsQ0FBQyx1Q0FBdUMsQ0FBQyxpREFBaUQsQ0FBQyxtRUFBbUUsQ0FBQyxxRUFBcUUsQ0FBQyw0QkFBNEIsQ0FBQywrQkFBK0IsQ0FBQyxxQ0FBcUMsQ0FBQywyQkFBMkIsQ0FBQyw4QkFBOEIsQ0FBQyx1REFBdUQsQ0FBQyw0QkFBNEIsQ0FBQyw2QkFBNkIsQ0FBQyx5QkFBeUIsQ0FBQyxrQ0FBa0MsQ0FBQyxvQ0FBb0MsQ0FBQyxtQ0FBbUMsQ0FBQyx3QkFBd0IsaURBQWlELENBQUMsc0NBQXNDLENBQUMsdUNBQXVDLENBQUMseUJBQXlCO0FBQ2p4RixnQkFBZ0Isc0NBQXNDLENBQUMsd0NBQXdDLENBQUMscUNBQXFDLENBQUMsc0NBQXNDLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLHlDQUF5QyxDQUFDLHlDQUF5QyxDQUFDLDZDQUE2QyxDQUFDLDhCQUE4QixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLGdKQUFnSixDQUFDLDBCQUEwQixDQUFDLHdDQUF3QyxTQUFTLENBQUMsMkJBQTJCLDZEQUE2RCxDQUFDLDZCQUE2QixrREFBa0QsQ0FBQyw4QkFBOEIsa0RBQWtELENBQUMsNEJBQTRCLDZEQUE2RCxDQUFDLGlEQUFpRCx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsMkNBQTJDLGVBQWUsQ0FBQyx5QkFBeUIsMkNBQTJDLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsa0RBQWtELFlBQVksQ0FBQyw0QkFBNEIsNENBQTRDLENBQUMsd0RBQXdELENBQUMsNERBQTRELENBQUMsMERBQTBELENBQUMsOENBQThDLENBQUMsbURBQW1ELENBQUMsY0FBYyxDQUFDLDZCQUE2QixDQUFDLFdBQVcsQ0FBQyw4QkFBOEIseUNBQXlDLENBQUMscURBQXFELFlBQVksQ0FBQyxvREFBb0Qsb0VBQW9FLENBQUMsNkRBQTZELCtCQUErQixDQUFDLGtDQUFrQyxlQUFlLENBQUMsaUNBQWlDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMseUJBQXlCLHNEQUFzRCxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQywrQkFBK0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxtREFBbUQsQ0FBQyxxREFBcUQsQ0FBQyx1REFBdUQsQ0FBQyw2QkFBNkIsQ0FBQyw4QkFBOEIsQ0FBQyxxQkFBcUIsQ0FBQyx3S0FBd0ssK0NBQStDLENBQUMsZ01BQWdNLHdCQUF3QixDQUFDLGdMQUFnTCxpREFBaUQsQ0FBQyx3TUFBd00sd0JBQXdCLENBQUMsb0xBQW9MLGtEQUFrRCxDQUFDLDRNQUE0TSx3QkFBd0IsQ0FBQyw0S0FBNEssZ0RBQWdELENBQUMsb01BQW9NLHVCQUF1QixDQUFDLDZFQUE2RSw4QkFBOEIsQ0FBQywrRUFBK0UsK0JBQStCLENBQUMsaUZBQWlGLDBDQUEwQyxDQUFDLDJFQUEyRSw2QkFBNkIsQ0FBQyxpRkFBaUYsZ0NBQWdDLENBQUMsaUZBQWlGLHlDQUF5QyxDQUFDLDRCQUE0QixhQUFhLENBQUMseUJBQXlCLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyw0Q0FBNEMsWUFBWSxDQUFDLHNCQUFzQixvQkFBb0IsQ0FBQyx5QkFBeUIsaUJBQWlCLENBQUMsK0NBQStDLDBCQUEwQixDQUFDLGtEQUFrRCxDQUFDLHdCQUF3QixjQUFjLENBQUMsOENBQThDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1SEFBdUgsQ0FBQyx3SUFBd0ksQ0FBQyxrQ0FBa0MsQ0FBQyxpQ0FBaUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsK0dBQStHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2NvbG9yOnZhcigtLWFkcC1jb2xvci1vdGhlci1tb250aCl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtOmhvdmVyLC5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC06aG92ZXJ7Y29sb3I6dmFyKC0tYWRwLWNvbG9yLW90aGVyLW1vbnRoLWhvdmVyKX0uLWRpc2FibGVkLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC4tZGlzYWJsZWQtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2NvbG9yOnZhcigtLWFkcC1jb2xvci1vdGhlci1tb250aCl9Li1zZWxlY3RlZC0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1zZWxlY3RlZC0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZGF5LS4tb3RoZXItbW9udGgte2NvbG9yOiNmZmY7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZC1vdGhlci1tb250aCl9Li1zZWxlY3RlZC0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi15ZWFyLS4tb3RoZXItZGVjYWRlLSwuLXNlbGVjdGVkLS4tZm9jdXMtLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLXtiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoLWZvY3VzZWQpfS4taW4tcmFuZ2UtLmFpci1kYXRlcGlja2VyLWNlbGwuLXllYXItLi1vdGhlci1kZWNhZGUtLC4taW4tcmFuZ2UtLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtjb2xvcjp2YXIoLS1hZHAtY29sb3IpfS4taW4tcmFuZ2UtLi1mb2N1cy0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS0sLi1pbi1yYW5nZS0uLWZvY3VzLS5haXItZGF0ZXBpY2tlci1jZWxsLi1kYXktLi1vdGhlci1tb250aC17YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZS1mb2N1c2VkKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4teWVhci0uLW90aGVyLWRlY2FkZS06ZW1wdHksLmFpci1kYXRlcGlja2VyLWNlbGwuLWRheS0uLW90aGVyLW1vbnRoLTplbXB0eXtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmV9LmFpci1kYXRlcGlja2VyLWNlbGx7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3otaW5kZXg6MX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tZm9jdXMte2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQte2NvbG9yOnZhcigtLWFkcC1jb2xvci1jdXJyZW50LWRhdGUpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1jdXJyZW50LS4tZm9jdXMte2NvbG9yOnZhcigtLWFkcC1jb2xvcil9LmFpci1kYXRlcGlja2VyLWNlbGwuLWN1cnJlbnQtLi1pbi1yYW5nZS17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLWN1cnJlbnQtZGF0ZSl9LmFpci1kYXRlcGlja2VyLWNlbGwuLWRpc2FibGVkLXtjdXJzb3I6ZGVmYXVsdDtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1kaXNhYmxlZC0uLWZvY3VzLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1kaXNhYmxlZC0uLWluLXJhbmdlLXtjb2xvcjp2YXIoLS1hZHAtY29sb3ItZGlzYWJsZWQtaW4tcmFuZ2UpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1kaXNhYmxlZC0uLWN1cnJlbnQtLi1mb2N1cy17Y29sb3I6dmFyKC0tYWRwLWNvbG9yLWRpc2FibGVkKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4taW4tcmFuZ2Ute2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZSk7Ym9yZGVyLXJhZGl1czowfS5haXItZGF0ZXBpY2tlci1jZWxsLi1pbi1yYW5nZS06aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tcmFuZ2UtZnJvbS17Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1hZHAtY2VsbC1ib3JkZXItY29sb3ItaW4tcmFuZ2UpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cyl9LmFpci1kYXRlcGlja2VyLWNlbGwuLXJhbmdlLXRvLXtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC1jZWxsLWJvcmRlci1jb2xvci1pbi1yYW5nZSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlKTtib3JkZXItcmFkaXVzOjAgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cykgdmFyKC0tYWRwLWNlbGwtYm9yZGVyLXJhZGl1cykgMH0uYWlyLWRhdGVwaWNrZXItY2VsbC4tcmFuZ2UtdG8tLi1yYW5nZS1mcm9tLXtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1jZWxsLWJvcmRlci1yYWRpdXMpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1zZWxlY3RlZC17Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci1jZWxsLi1zZWxlY3RlZC0uLWN1cnJlbnQte2NvbG9yOiNmZmY7YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKX0uYWlyLWRhdGVwaWNrZXItY2VsbC4tc2VsZWN0ZWQtLi1mb2N1cy17YmFja2dyb3VuZDp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLWhvdmVyKX1cXG4uYWlyLWRhdGVwaWNrZXItYm9keXt0cmFuc2l0aW9uOmFsbCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tYWRwLXRyYW5zaXRpb24tZWFzZSl9LmFpci1kYXRlcGlja2VyLWJvZHkuLWhpZGRlbi17ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZXN7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNywgdmFyKC0tYWRwLWRheS1jZWxsLXdpZHRoKSk7bWFyZ2luOjhweCAwIDNweH0uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWV7Y29sb3I6dmFyKC0tYWRwLWRheS1uYW1lLWNvbG9yKTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleDoxO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6LjhlbX0uYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWUuLWNsaWNrYWJsZS17Y3Vyc29yOnBvaW50ZXJ9LmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lLi1jbGlja2FibGUtOmhvdmVye2NvbG9yOnZhcigtLWFkcC1kYXktbmFtZS1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxze2Rpc3BsYXk6Z3JpZH0uYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMuLWRheXMte2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNywgdmFyKC0tYWRwLWRheS1jZWxsLXdpZHRoKSk7Z3JpZC1hdXRvLXJvd3M6dmFyKC0tYWRwLWRheS1jZWxsLWhlaWdodCl9LmFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzLi1tb250aHMte2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMywgMWZyKTtncmlkLWF1dG8tcm93czp2YXIoLS1hZHAtbW9udGgtY2VsbC1oZWlnaHQpfS5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxscy4teWVhcnMte2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCwgMWZyKTtncmlkLWF1dG8tcm93czp2YXIoLS1hZHAteWVhci1jZWxsLWhlaWdodCl9XFxuLmFpci1kYXRlcGlja2VyLW5hdntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYWRwLWJvcmRlci1jb2xvci1pbm5lcik7bWluLWhlaWdodDp2YXIoLS1hZHAtbmF2LWhlaWdodCk7cGFkZGluZzp2YXIoLS1hZHAtcGFkZGluZyk7Ym94LXNpemluZzpjb250ZW50LWJveH0uLW9ubHktdGltZXBpY2tlci0gLmFpci1kYXRlcGlja2VyLW5hdntkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGUsLmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9ue2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb257d2lkdGg6dmFyKC0tYWRwLW5hdi1hY3Rpb24tc2l6ZSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1hZHAtYm9yZGVyLXJhZGl1cyk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvbjpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb246YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb24uLWRpc2FibGVkLXt2aXNpYmlsaXR5OmhpZGRlbn0uYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb24gc3Zne3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uIHBhdGh7ZmlsbDpub25lO3N0cm9rZTp2YXIoLS1hZHAtbmF2LWFycm93LWNvbG9yKTtzdHJva2Utd2lkdGg6MnB4fS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxle2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpO3BhZGRpbmc6MCA4cHh9LmFpci1kYXRlcGlja2VyLW5hdi0tdGl0bGUgaXtmb250LXN0eWxlOm5vcm1hbDtjb2xvcjp2YXIoLS1hZHAtbmF2LWNvbG9yLXNlY29uZGFyeSk7bWFyZ2luLWxlZnQ6LjNlbX0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZTphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1hY3RpdmUpfS5haXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlLi1kaXNhYmxlZC17Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZDpub25lfVxcbi5haXItZGF0ZXBpY2tlci1idXR0b25ze2Rpc3BsYXk6Z3JpZDtncmlkLWF1dG8tY29sdW1uczoxZnI7Z3JpZC1hdXRvLWZsb3c6Y29sdW1ufS5haXItZGF0ZXBpY2tlci1idXR0b257ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1hZHAtYnRuLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1idG4tYm9yZGVyLXJhZGl1cyk7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OnZhcigtLWFkcC1idG4taGVpZ2h0KTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMCl9LmFpci1kYXRlcGlja2VyLWJ1dHRvbjpob3Zlcntjb2xvcjp2YXIoLS1hZHAtYnRuLWNvbG9yLWhvdmVyKTtiYWNrZ3JvdW5kOnZhcigtLWFkcC1idG4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcil9LmFpci1kYXRlcGlja2VyLWJ1dHRvbjpmb2N1c3tjb2xvcjp2YXIoLS1hZHAtYnRuLWNvbG9yLWhvdmVyKTtiYWNrZ3JvdW5kOnZhcigtLWFkcC1idG4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7b3V0bGluZTpub25lfS5haXItZGF0ZXBpY2tlci1idXR0b246YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZSl9LmFpci1kYXRlcGlja2VyLWJ1dHRvbiBzcGFue291dGxpbmU6bm9uZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1cXG4uYWlyLWRhdGVwaWNrZXItdGltZXtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1heC1jb250ZW50IDFmcjtncmlkLWNvbHVtbi1nYXA6MTJweDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowIHZhcigtLWFkcC10aW1lLXBhZGRpbmctaW5uZXIpfS4tb25seS10aW1lcGlja2VyLSAuYWlyLWRhdGVwaWNrZXItdGltZXtib3JkZXItdG9wOm5vbmV9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4OjE7Zm9udC1zaXplOjE0cHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtY29sb257bWFyZ2luOjAgMnB4IDNweDtsaW5lLWhlaWdodDoxfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWhvdXJzLC5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LW1pbnV0ZXN7bGluZS1oZWlnaHQ6MTtmb250LXNpemU6MTlweDtmb250LWZhbWlseTpcXFwiQ2VudHVyeSBHb3RoaWNcXFwiLENlbnR1cnlHb3RoaWMsQXBwbGVHb3RoaWMsc2Fucy1zZXJpZjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9LmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnM6YWZ0ZXIsLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlczphZnRlcntjb250ZW50OlxcXCJcXFwiO2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYWRwLWJvcmRlci1yYWRpdXMpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTJweDt0b3A6LTNweDtyaWdodDotMnB4O2JvdHRvbTotMnB4O3otaW5kZXg6LTE7b3BhY2l0eTowfS5haXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWhvdXJzLi1mb2N1cy06YWZ0ZXIsLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlcy4tZm9jdXMtOmFmdGVye29wYWNpdHk6MX0uYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1hbXBte3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTthbGlnbi1zZWxmOmZsZXgtZW5kO2NvbG9yOnZhcigtLWFkcC10aW1lLWRheS1wZXJpb2QtY29sb3IpO21hcmdpbi1sZWZ0OjZweDtmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjFweH0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjExcHg7aGVpZ2h0OjE3cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yKSwgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpKSBsZWZ0IDUwJS8xMDAlIHZhcigtLWFkcC10aW1lLXRyYWNrLWhlaWdodCkgbm8tcmVwZWF0fS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3c6Zmlyc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo0cHh9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXXtiYWNrZ3JvdW5kOm5vbmU7Y3Vyc29yOnBvaW50ZXI7ZmxleDoxO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cGFkZGluZzowO21hcmdpbjowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iey13ZWJraXQtYXBwZWFyYW5jZTpub25lfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10b29sdGlwe2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmhvdmVyOjotd2Via2l0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6dmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3ItaG92ZXIpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06aG92ZXI6Oi1tb3otcmFuZ2UtdGh1bWJ7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmhvdmVyOjotbXMtdGh1bWJ7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yLWhvdmVyKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmZvY3Vze291dGxpbmU6bm9uZX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYntiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbW96LXJhbmdlLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy10aHVtYntiYWNrZ3JvdW5kOnZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO2JvcmRlci1jb2xvcjp2YXIoLS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYntib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yKTtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYntib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFkcC10aW1lLXRyYWNrLWNvbG9yKTtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7LW1vei10cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb246YmFja2dyb3VuZCB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbil9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1ie2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLXRpbWUtdHJhY2stY29sb3IpO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjstbXMtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKTt0cmFuc2l0aW9uOmJhY2tncm91bmQgdmFyKC0tYWRwLXRyYW5zaXRpb24tZHVyYXRpb24pfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1ie21hcmdpbi10b3A6Y2FsYyh2YXIoLS1hZHAtdGltZS10aHVtYi1zaXplKS8yKi0xKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFja3tib3JkZXI6bm9uZTtoZWlnaHQ6dmFyKC0tYWRwLXRpbWUtdHJhY2staGVpZ2h0KTtjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLDApO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNre2JvcmRlcjpub25lO2hlaWdodDp2YXIoLS1hZHAtdGltZS10cmFjay1oZWlnaHQpO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsMCk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS5haXItZGF0ZXBpY2tlci10aW1lLS1yb3cgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFja3tib3JkZXI6bm9uZTtoZWlnaHQ6dmFyKC0tYWRwLXRpbWUtdHJhY2staGVpZ2h0KTtjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLDApO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKX0uYWlyLWRhdGVwaWNrZXItdGltZS0tcm93IGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCl9LmFpci1kYXRlcGlja2VyLXRpbWUtLXJvdyBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfVxcbi5haXItZGF0ZXBpY2tlcnstLWFkcC1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiOy0tYWRwLWZvbnQtc2l6ZTogMTRweDstLWFkcC13aWR0aDogMjQ2cHg7LS1hZHAtei1pbmRleDogMTAwOy0tYWRwLXBhZGRpbmc6IDRweDstLWFkcC1ncmlkLWFyZWFzOiBcXFwibmF2XFxcIiBcXFwiYm9keVxcXCIgXFxcInRpbWVwaWNrZXJcXFwiIFxcXCJidXR0b25zXFxcIjstLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7LS1hZHAtdHJhbnNpdGlvbi1lYXNlOiBlYXNlLW91dDstLWFkcC10cmFuc2l0aW9uLW9mZnNldDogOHB4Oy0tYWRwLWJhY2tncm91bmQtY29sb3I6ICNmZmY7LS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogI2YwZjBmMDstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogI2VhZWFlYTstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLWluLXJhbmdlOiByZ2JhKDkyLCAxOTYsIDIzOSwgLjEpOy0tYWRwLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2UtZm9jdXNlZDogcmdiYSg5MiwgMTk2LCAyMzksIC4yKTstLWFkcC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkLW90aGVyLW1vbnRoLWZvY3VzZWQ6ICM4YWQ1ZjQ7LS1hZHAtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZC1vdGhlci1tb250aDogI2EyZGRmNjstLWFkcC1jb2xvcjogIzRhNGE0YTstLWFkcC1jb2xvci1zZWNvbmRhcnk6ICM5YzljOWM7LS1hZHAtYWNjZW50LWNvbG9yOiAjNGViNWU2Oy0tYWRwLWNvbG9yLWN1cnJlbnQtZGF0ZTogdmFyKC0tYWRwLWFjY2VudC1jb2xvcik7LS1hZHAtY29sb3Itb3RoZXItbW9udGg6ICNkZWRlZGU7LS1hZHAtY29sb3ItZGlzYWJsZWQ6ICNhZWFlYWU7LS1hZHAtY29sb3ItZGlzYWJsZWQtaW4tcmFuZ2U6ICM5MzkzOTM7LS1hZHAtY29sb3Itb3RoZXItbW9udGgtaG92ZXI6ICNjNWM1YzU7LS1hZHAtYm9yZGVyLWNvbG9yOiAjZGJkYmRiOy0tYWRwLWJvcmRlci1jb2xvci1pbm5lcjogI2VmZWZlZjstLWFkcC1ib3JkZXItcmFkaXVzOiA0cHg7LS1hZHAtYm9yZGVyLWNvbG9yLWlubGluZTogI2Q3ZDdkNzstLWFkcC1uYXYtaGVpZ2h0OiAzMnB4Oy0tYWRwLW5hdi1hcnJvdy1jb2xvcjogdmFyKC0tYWRwLWNvbG9yLXNlY29uZGFyeSk7LS1hZHAtbmF2LWFjdGlvbi1zaXplOiAzMnB4Oy0tYWRwLW5hdi1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWFkcC1jb2xvci1zZWNvbmRhcnkpOy0tYWRwLWRheS1uYW1lLWNvbG9yOiAjZmY5YTE5Oy0tYWRwLWRheS1uYW1lLWNvbG9yLWhvdmVyOiAjOGFkNWY0Oy0tYWRwLWRheS1jZWxsLXdpZHRoOiAxZnI7LS1hZHAtZGF5LWNlbGwtaGVpZ2h0OiAzMnB4Oy0tYWRwLW1vbnRoLWNlbGwtaGVpZ2h0OiA0MnB4Oy0tYWRwLXllYXItY2VsbC1oZWlnaHQ6IDU2cHg7LS1hZHAtcG9pbnRlci1zaXplOiAxMHB4Oy0tYWRwLXBvaW5lci1ib3JkZXItcmFkaXVzOiAycHg7LS1hZHAtcG9pbnRlci1vZmZzZXQ6IDE0cHg7LS1hZHAtY2VsbC1ib3JkZXItcmFkaXVzOiA0cHg7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS1hZHAtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7LS1hZHAtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiAjNWNjNGVmOy0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZC1ob3ZlcjogIzQ1YmNlZDstLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3ItaW4tcmFuZ2U6IHJnYmEoOTIsIDE5NiwgMjM5LCAwLjEpOy0tYWRwLWNlbGwtYmFja2dyb3VuZC1jb2xvci1pbi1yYW5nZS1ob3ZlcjogcmdiYSg5MiwgMTk2LCAyMzksIDAuMik7LS1hZHAtY2VsbC1ib3JkZXItY29sb3ItaW4tcmFuZ2U6IHZhcigtLWFkcC1jZWxsLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpOy0tYWRwLWJ0bi1oZWlnaHQ6IDMycHg7LS1hZHAtYnRuLWNvbG9yOiB2YXIoLS1hZHAtYWNjZW50LWNvbG9yKTstLWFkcC1idG4tY29sb3ItaG92ZXI6IHZhcigtLWFkcC1jb2xvcik7LS1hZHAtYnRuLWJvcmRlci1yYWRpdXM6IHZhcigtLWFkcC1ib3JkZXItcmFkaXVzKTstLWFkcC1idG4tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItaG92ZXIpOy0tYWRwLWJ0bi1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTogdmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKTstLWFkcC10aW1lLXRyYWNrLWhlaWdodDogMXB4Oy0tYWRwLXRpbWUtdHJhY2stY29sb3I6ICNkZWRlZGU7LS1hZHAtdGltZS10cmFjay1jb2xvci1ob3ZlcjogI2IxYjFiMTstLWFkcC10aW1lLXRodW1iLXNpemU6IDEycHg7LS1hZHAtdGltZS1wYWRkaW5nLWlubmVyOiAxMHB4Oy0tYWRwLXRpbWUtZGF5LXBlcmlvZC1jb2xvcjogdmFyKC0tYWRwLWNvbG9yLXNlY29uZGFyeSk7LS1hZHAtbW9iaWxlLWZvbnQtc2l6ZTogMTZweDstLWFkcC1tb2JpbGUtbmF2LWhlaWdodDogNDBweDstLWFkcC1tb2JpbGUtd2lkdGg6IDMyMHB4Oy0tYWRwLW1vYmlsZS1kYXktY2VsbC1oZWlnaHQ6IDM4cHg7LS1hZHAtbW9iaWxlLW1vbnRoLWNlbGwtaGVpZ2h0OiA0OHB4Oy0tYWRwLW1vYmlsZS15ZWFyLWNlbGwtaGVpZ2h0OiA2NHB4fS5haXItZGF0ZXBpY2tlci1vdmVybGF5ey0tYWRwLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7LS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7LS1hZHAtb3ZlcmxheS10cmFuc2l0aW9uLWVhc2U6IGVhc2Utb3V0Oy0tYWRwLW92ZXJsYXktei1pbmRleDogOTl9XFxuLmFpci1kYXRlcGlja2Vye2JhY2tncm91bmQ6dmFyKC0tYWRwLWJhY2tncm91bmQtY29sb3IpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tYWRwLWJvcmRlci1jb2xvcik7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjE1KTtib3JkZXItcmFkaXVzOnZhcigtLWFkcC1ib3JkZXItcmFkaXVzKTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO2dyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoNCwgbWF4LWNvbnRlbnQpO2dyaWQtdGVtcGxhdGUtYXJlYXM6dmFyKC0tYWRwLWdyaWQtYXJlYXMpO2ZvbnQtZmFtaWx5OnZhcigtLWFkcC1mb250LWZhbWlseSksc2Fucy1zZXJpZjtmb250LXNpemU6dmFyKC0tYWRwLWZvbnQtc2l6ZSk7Y29sb3I6dmFyKC0tYWRwLWNvbG9yKTt3aWR0aDp2YXIoLS1hZHAtd2lkdGgpO3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tYWRwLXRyYW5zaXRpb24tZWFzZSksdHJhbnNmb3JtIHZhcigtLWFkcC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1hZHAtdHJhbnNpdGlvbi1lYXNlKTt6LWluZGV4OnZhcigtLWFkcC16LWluZGV4KX0uYWlyLWRhdGVwaWNrZXI6bm90KC4tY3VzdG9tLXBvc2l0aW9uLSl7b3BhY2l0eTowfS5haXItZGF0ZXBpY2tlci4tZnJvbS10b3Ate3RyYW5zZm9ybTp0cmFuc2xhdGVZKGNhbGModmFyKC0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0KSAqIC0xKSl9LmFpci1kYXRlcGlja2VyLi1mcm9tLXJpZ2h0LXt0cmFuc2Zvcm06dHJhbnNsYXRlWCh2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpKX0uYWlyLWRhdGVwaWNrZXIuLWZyb20tYm90dG9tLXt0cmFuc2Zvcm06dHJhbnNsYXRlWSh2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpKX0uYWlyLWRhdGVwaWNrZXIuLWZyb20tbGVmdC17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1hZHAtdHJhbnNpdGlvbi1vZmZzZXQpICogLTEpKX0uYWlyLWRhdGVwaWNrZXIuLWFjdGl2ZS06bm90KC4tY3VzdG9tLXBvc2l0aW9uLSl7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKTtvcGFjaXR5OjF9LmFpci1kYXRlcGlja2VyLi1hY3RpdmUtLi1jdXN0b20tcG9zaXRpb24te3RyYW5zaXRpb246bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlubGluZS17Ym9yZGVyLWNvbG9yOnZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5saW5lKTtib3gtc2hhZG93Om5vbmU7cG9zaXRpb246c3RhdGljO2xlZnQ6YXV0bztyaWdodDphdXRvO29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlubGluZS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2Rpc3BsYXk6bm9uZX0uYWlyLWRhdGVwaWNrZXIuLWlzLW1vYmlsZS17LS1hZHAtZm9udC1zaXplOiB2YXIoLS1hZHAtbW9iaWxlLWZvbnQtc2l6ZSk7LS1hZHAtZGF5LWNlbGwtaGVpZ2h0OiB2YXIoLS1hZHAtbW9iaWxlLWRheS1jZWxsLWhlaWdodCk7LS1hZHAtbW9udGgtY2VsbC1oZWlnaHQ6IHZhcigtLWFkcC1tb2JpbGUtbW9udGgtY2VsbC1oZWlnaHQpOy0tYWRwLXllYXItY2VsbC1oZWlnaHQ6IHZhcigtLWFkcC1tb2JpbGUteWVhci1jZWxsLWhlaWdodCk7LS1hZHAtbmF2LWhlaWdodDogdmFyKC0tYWRwLW1vYmlsZS1uYXYtaGVpZ2h0KTstLWFkcC1uYXYtYWN0aW9uLXNpemU6IHZhcigtLWFkcC1tb2JpbGUtbmF2LWhlaWdodCk7cG9zaXRpb246Zml4ZWQ7d2lkdGg6dmFyKC0tYWRwLW1vYmlsZS13aWR0aCk7Ym9yZGVyOm5vbmV9LmFpci1kYXRlcGlja2VyLi1pcy1tb2JpbGUtICp7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9LmFpci1kYXRlcGlja2VyLi1pcy1tb2JpbGUtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntkaXNwbGF5Om5vbmV9LmFpci1kYXRlcGlja2VyLi1pcy1tb2JpbGUtOm5vdCguLWN1c3RvbS1wb3NpdGlvbi0pe3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlICsgdmFyKC0tYWRwLXRyYW5zaXRpb24tb2Zmc2V0KSkpfS5haXItZGF0ZXBpY2tlci4taXMtbW9iaWxlLS4tYWN0aXZlLTpub3QoLi1jdXN0b20tcG9zaXRpb24tKXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpfS5haXItZGF0ZXBpY2tlci4tY3VzdG9tLXBvc2l0aW9uLXt0cmFuc2l0aW9uOm5vbmV9LmFpci1kYXRlcGlja2VyLWdsb2JhbC1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5haXItZGF0ZXBpY2tlci0tcG9pbnRlcnstLXBvaW50ZXItaGFsZi1zaXplOiBjYWxjKHZhcigtLWFkcC1wb2ludGVyLXNpemUpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0tYWRwLXBvaW50ZXItc2l6ZSk7aGVpZ2h0OnZhcigtLWFkcC1wb2ludGVyLXNpemUpO3otaW5kZXg6LTF9LmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDojZmZmO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5saW5lKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLWFkcC1ib3JkZXItY29sb3ItaW5saW5lKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1hZHAtcG9pbmVyLWJvcmRlci1yYWRpdXMpO3dpZHRoOnZhcigtLWFkcC1wb2ludGVyLXNpemUpO2hlaWdodDp2YXIoLS1hZHAtcG9pbnRlci1zaXplKTtib3gtc2l6aW5nOmJvcmRlci1ib3h9Li10b3AtbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tdG9wLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tdG9wLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7dG9wOmNhbGMoMTAwJSAtIHZhcigtLXBvaW50ZXItaGFsZi1zaXplKSArIDFweCl9Li10b3AtbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tdG9wLWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tdG9wLXJpZ2h0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfS4tcmlnaHQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1yaWdodC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7cmlnaHQ6Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLXJpZ2h0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tcmlnaHQtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1yaWdodC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1yaWdodF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVye3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKX0uLWJvdHRvbS1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1ib3R0b21dIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntib3R0b206Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLWJvdHRvbS1sZWZ0LSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1ib3R0b20tY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1ib3R0b20tcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1ib3R0b21dIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyl9Li1sZWZ0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tbGVmdC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWxlZnQtYm90dG9tLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49bGVmdF0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2xlZnQ6Y2FsYygxMDAlIC0gdmFyKC0tcG9pbnRlci1oYWxmLXNpemUpICsgMXB4KX0uLWxlZnQtdG9wLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXIsLi1sZWZ0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyOmFmdGVyLC4tbGVmdC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcjphZnRlcixbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1sZWZ0XSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXI6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Li10b3AtbGVmdC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVyLC4tYm90dG9tLWxlZnQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlcntsZWZ0OnZhcigtLWFkcC1wb2ludGVyLW9mZnNldCl9Li10b3AtcmlnaHQtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLWJvdHRvbS1yaWdodC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3JpZ2h0OnZhcigtLWFkcC1wb2ludGVyLW9mZnNldCl9Li10b3AtY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXIsLi1ib3R0b20tY2VudGVyLSAuYWlyLWRhdGVwaWNrZXItLXBvaW50ZXJ7bGVmdDpjYWxjKDUwJSAtIHZhcigtLWFkcC1wb2ludGVyLXNpemUpLzIpfS4tbGVmdC10b3AtIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LXRvcC0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3RvcDp2YXIoLS1hZHAtcG9pbnRlci1vZmZzZXQpfS4tbGVmdC1ib3R0b20tIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWJvdHRvbS0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye2JvdHRvbTp2YXIoLS1hZHAtcG9pbnRlci1vZmZzZXQpfS4tbGVmdC1jZW50ZXItIC5haXItZGF0ZXBpY2tlci0tcG9pbnRlciwuLXJpZ2h0LWNlbnRlci0gLmFpci1kYXRlcGlja2VyLS1wb2ludGVye3RvcDpjYWxjKDUwJSAtIHZhcigtLWFkcC1wb2ludGVyLXNpemUpLzIpfS5haXItZGF0ZXBpY2tlci0tbmF2aWdhdGlvbntncmlkLWFyZWE6bmF2fS5haXItZGF0ZXBpY2tlci0tY29udGVudHtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3BhZGRpbmc6dmFyKC0tYWRwLXBhZGRpbmcpO2dyaWQtYXJlYTpib2R5fS4tb25seS10aW1lcGlja2VyLSAuYWlyLWRhdGVwaWNrZXItLWNvbnRlbnR7ZGlzcGxheTpub25lfS5haXItZGF0ZXBpY2tlci0tdGltZXtncmlkLWFyZWE6dGltZXBpY2tlcn0uYWlyLWRhdGVwaWNrZXItLWJ1dHRvbnN7Z3JpZC1hcmVhOmJ1dHRvbnN9LmFpci1kYXRlcGlja2VyLS1idXR0b25zLC5haXItZGF0ZXBpY2tlci0tdGltZXtwYWRkaW5nOnZhcigtLWFkcC1wYWRkaW5nKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1hZHAtYm9yZGVyLWNvbG9yLWlubmVyKX0uYWlyLWRhdGVwaWNrZXItb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kOnZhcigtLWFkcC1vdmVybGF5LWJhY2tncm91bmQtY29sb3IpO2xlZnQ6MDt0b3A6MDt3aWR0aDowO2hlaWdodDowO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tYWRwLW92ZXJsYXktdHJhbnNpdGlvbi1lYXNlKSxsZWZ0IDBzLGhlaWdodCAwcyx3aWR0aCAwczt0cmFuc2l0aW9uLWRlbGF5OjBzLHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pLHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pLHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pO3otaW5kZXg6dmFyKC0tYWRwLW92ZXJsYXktei1pbmRleCl9LmFpci1kYXRlcGlja2VyLW92ZXJsYXkuLWFjdGl2ZS17b3BhY2l0eToxO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLWFkcC1vdmVybGF5LXRyYW5zaXRpb24tZWFzZSksaGVpZ2h0IDBzLHdpZHRoIDBzfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xufVxuLm1vZGFsLWNvbnRhaW5lci5mYWRlLWluIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5tb2RhbC1jb250YWluZXIuZmFkZS1pbiAubW9kYWwtYm94IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgcGFkZGluZzogMnJlbSAzcmVtIDEuN3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoMjEzLCAyMTcsIDIxNywgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNXMgZWFzZS1pbi1vdXQ7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3ggaDMge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3ggcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMi41cmVtO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm94IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZ2FwOiAwLjdyZW07XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3ggLm1vZGFsLWNvbmZpcm0sXG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib3ggLm1vZGFsLWNhbmNlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43cmVtIDEuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm94IC5tb2RhbC1jb25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCAubW9kYWwtY29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDAsIDM2KTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJveCAubW9kYWwtY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLmFpci1kYXRlcGlja2VyLWJvZHktLWRheS1uYW1lIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi4tc2VsZWN0ZWQtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZSAhaW1wb3J0YW50O1xufVxuXG4jdG9kby1hcHAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5NSU7XG59XG5cbmFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjFyZW07XG4gIHdpZHRoOiAzMCU7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDIuNHJlbSAxcmVtIDIuMnJlbSAxcmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGhlaWdodDogNDZweDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgcGFkZGluZzogMC43cmVtIDFyZW0gMC43cmVtIDAuNXJlbTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hc2lkZSAuYWRkLXByb2plY3Qgc3BhbiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNvbG9yOiAjYWFhO1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICMzMzM7XG59XG5hc2lkZSAuYWRkLXByb2plY3Q6aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0LmhpZ2hsaWdodGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xufVxuYXNpZGUgLmFkZC1wcm9qZWN0LmhpZ2hsaWdodGVkIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbmFzaWRlIC5hZGQtcHJvamVjdC5oaWdobGlnaHRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZhZDM7XG4gIGJvcmRlci1jb2xvcjogIzAwNmFkMztcbn1cbmFzaWRlIC5wcm9qZWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbmFzaWRlIC5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuYXNpZGUgLnByb2plY3QtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuYXNpZGUgLnByb2plY3QtaXRlbTpub3QoLmFjdGl2ZSkgc3BhbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuYXNpZGUgLnByb2plY3QtaXRlbSBpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDAgMXB4IDFweCAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuYXNpZGUgLnByb2plY3QtaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwLjRyZW0gMC4zcmVtIDAuM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xufVxuYXNpZGUgLnByb2plY3QtaXRlbSBpbnB1dCB7XG4gIHdpZHRoOiA4NiU7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAwLjk5cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xuICBtYXJnaW46IDAuNHJlbSAwLjFyZW0gMC4zcmVtIDAuMDdyZW07XG59XG5hc2lkZSAucHJvamVjdC1pdGVtIHNwYW4sXG5hc2lkZSAucHJvamVjdC1pdGVtIGlucHV0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG59XG5hc2lkZSAucHJvamVjdC1pdGVtIC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAucHJvamVjdC1oZWFkbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiAwLjhyZW07XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5wcm9qZWN0LWhlYWRsaW5lIGgxIHtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5wcm9qZWN0LWhlYWRsaW5lIGgxLm5vLXByb2plY3Qge1xuICBjb2xvcjogI2QwZDBkMDtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLnByb2plY3QtaGVhZGxpbmUgLnJlbW92ZS1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLnByb2plY3QtaGVhZGxpbmUgLnJlbW92ZS1wcm9qZWN0OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGJvcmRlci1jb2xvcjogY3JpbXNvbjtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLnByb2plY3QtaGVhZGxpbmUgLnJlbW92ZS1wcm9qZWN0LmRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAuYWRkLXRvZG8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDAuN3JlbSAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMjEzLCAyMTcsIDIxNywgMC41KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAuYWRkLXRvZG8taXRlbSBzcGFuIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLmFkZC10b2RvLWl0ZW06aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2NvbnRlbnQgLnRpdGxlLWNvbnRhaW5lciAuYWRkLXRvZG8taXRlbS5kaXNhYmxlZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtLmRpc2FibGVkIHNwYW4ge1xuICBjb2xvcjogI2QwZDBkMDtcbn1cbiNjb250ZW50IC50aXRsZS1jb250YWluZXIgLmFkZC10b2RvLWl0ZW0uZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG59XG4jY29udGVudCAudGl0bGUtY29udGFpbmVyIC5hZGQtdG9kby1pdGVtLmRpc2FibGVkOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbiNjb250ZW50IC50b2RvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogOTAlO1xuICBwYWRkaW5nLXRvcDogMC40cmVtO1xufVxuI2NvbnRlbnQgLmVtcHR5LXRvZG8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4jY29udGVudCAuZW1wdHktdG9kby1saXN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuMnJlbSAxcmVtIDEuMnJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW1fX25hbWUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4jY29udGVudCAudG9kby1pdGVtX19uYW1lOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAwO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSBbY2xhc3MqPWRhdGVwaWNrZXItXSB7XG4gIHdpZHRoOiAxMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4jY29udGVudCAudG9kby1pdGVtIFtjbGFzcyo9ZGF0ZXBpY2tlci1dLmV4cGlyZWQge1xuICBjb2xvcjogY3JpbXNvbjtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gW2NsYXNzKj1kYXRlcGlja2VyLV06OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG4jY29udGVudCAudG9kby1pdGVtIFtjbGFzcyo9ZGF0ZXBpY2tlci1dOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAwO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbSAuY2hlY2ttYXJrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cbiAgLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbiAgLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuICAvKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbiAgLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbiAgLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXIgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXIgLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XG59XG4jY29udGVudCAudG9kby1pdGVtIC5jaGVja21hcmstY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG4jY29udGVudCAudG9kby1pdGVtIC5jaGVja21hcmstY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNjb250ZW50IC50b2RvLWl0ZW0gLmNoZWNrbWFyay1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gIHRvcDogMS43cHg7XG4gIGxlZnQ6IDEuNXB4O1xuICB3aWR0aDogODQlO1xuICBoZWlnaHQ6IDg0JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xufVxuI2NvbnRlbnQgLnRvZG8taXRlbS5jaGVja2VkIC5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2FhYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5mb290ZXIgYSxcbmZvb3RlciBhOmhvdmVyLFxuZm9vdGVyIGE6dmlzaXRlZCxcbmZvb3RlciBhOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFLFlBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7OztFQUdFLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQUFGO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0FBQU47QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUZOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBSk47QUFRSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7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Q0EsUUFBQTtBQW5EUjtBQXVETTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXJEUjtBQXlETTtFQUNFLHlCQUFBO0FBdkRSO0FBMkRNO0VBQ0Usc0JBQUE7QUF6RFI7QUE2RE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBM0RSO0FBK0RNO0VBQ0UsY0FBQTtBQTdEUjtBQWlFTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBL0RSO0FBb0VNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWxFUjs7QUF3RUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQXJFRjtBQXVFRTs7OztFQUlFLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQXJFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcXG5cXG4gICYuZmFkZS1pbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuXFxuICAgIC5tb2RhbC1ib3gge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2RhbC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbSAxLjdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDIxMywgMjE3LCAyMTcsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICBoMyB7XFxuICAgICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gTW9kYWwgdGV4dFxcbiAgICBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luOiAwIDAgMi41cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIEJ1dHRvbiBjb250YWluZXJcXG4gICAgZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICBnYXA6IDAuN3JlbTtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtY29uZmlybSxcXG4gICAgLm1vZGFsLWNhbmNlbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAwLjdyZW0gMS44cmVtO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWNvbmZpcm0ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICAgICAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMCwgMzYpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubW9kYWwtY2FuY2VsIHtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZSB7XFxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi4tc2VsZWN0ZWQtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWUgIWltcG9ydGFudDtcXG59XFxuXFxuI3RvZG8tYXBwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA5NSU7XFxufVxcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjFyZW07XFxuICB3aWR0aDogMzAlO1xcbiAgbWF4LXdpZHRoOiAzODBweDtcXG4gIHBhZGRpbmc6IDIuNHJlbSAxcmVtIDIuMnJlbSAxcmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcXG5cXG4gIC5hZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDQ2cHg7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDAuN3JlbSAwLjVyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgc3BhbiB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICBjb2xvcjogI2FhYTtcXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgIGNvbG9yOiAjMzMzO1xcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgY29sb3I6ICM0NDQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYuaGlnaGxpZ2h0ZWQge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcXG5cXG4gICAgICBzcGFuIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZhZDM7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDZhZDM7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAucHJvamVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICAgIH1cXG5cXG4gICAgJi5hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIH1cXG5cXG4gICAgJjpub3QoLmFjdGl2ZSkge1xcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMjVweDtcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgcGFkZGluZzogMCAxcHggMXB4IDA7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB9XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgbWFyZ2luOiAwLjRyZW0gMC4zcmVtIDAuM3JlbTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiA4NiU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMC45OXJlbTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xcbiAgICAgIG1hcmdpbjogMC40cmVtIDAuMXJlbSAwLjNyZW0gMC4wN3JlbTtcXG4gICAgfVxcblxcbiAgICBzcGFuLFxcbiAgICBpbnB1dCB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgfVxcblxcbiAgICAuaGlkZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuXFxuICAudGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIC5wcm9qZWN0LWhlYWRsaW5lIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICBnYXA6IDAuOHJlbTtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG5cXG4gICAgICAgICYubm8tcHJvamVjdCB7XFxuICAgICAgICAgIGNvbG9yOiAjZDBkMGQwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAucmVtb3ZlLXByb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuM3JlbTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XFxuICAgICAgICBmb250LXdlaWdodDogMzUwO1xcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogY3JpbXNvbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuZGlzYWJsZWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5hZGQtdG9kby1pdGVtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDAuN3JlbSAwLjVyZW07XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMjEzLCAyMTcsIDIxNywgMC41KTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgc3BhbiB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICAgICAgY29sb3I6IGRvZGdlcmJsdWU7XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAmLmRpc2FibGVkIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICBjb2xvcjogI2NjYztcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICBjb2xvcjogI2QwZDBkMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuXFxuICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgcGFkZGluZy10b3A6IDAuNHJlbTtcXG4gIH1cXG5cXG4gIC5lbXB0eS10b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxLjJyZW0gMXJlbSAxLjJyZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XFxuXFxuICAgICZfX25hbWUge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcbiAgICAgICY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBbY2xhc3MqPVxcXCJkYXRlcGlja2VyLVxcXCJdIHtcXG4gICAgICB3aWR0aDogMTI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuXFxuICAgICAgJi5leHBpcmVkIHtcXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICBjb2xvcjogIzAwMDtcXG4gICAgICB9XFxuXFxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jaGVja21hcmstY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gICAgICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cXG4gICAgICBpbnB1dCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cXG4gICAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDIycHg7XFxuICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gICAgICAmOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICB9XFxuXFxuICAgICAgLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuICAgICAgLmNoZWNrbWFyazphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXFxuICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXFxuICAgICAgLmNoZWNrbWFyazphZnRlciB7XFxuICAgICAgICB0b3A6IDEuN3B4O1xcbiAgICAgICAgbGVmdDogMS41cHg7XFxuICAgICAgICB3aWR0aDogODQlO1xcbiAgICAgICAgaGVpZ2h0OiA4NCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLmNoZWNrZWQge1xcbiAgICAgIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNSU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogI2FhYTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xcblxcbiAgYSxcXG4gIGE6aG92ZXIsXFxuICBhOnZpc2l0ZWQsXFxuICBhOmFjdGl2ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiEgQGxpY2Vuc2UgRE9NUHVyaWZ5IDMuMC45IHwgKGMpIEN1cmU1MyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwgUmVsZWFzZWQgdW5kZXIgdGhlIEFwYWNoZSBsaWNlbnNlIDIuMCBhbmQgTW96aWxsYSBQdWJsaWMgTGljZW5zZSAyLjAgfCBnaXRodWIuY29tL2N1cmU1My9ET01QdXJpZnkvYmxvYi8zLjAuOS9MSUNFTlNFICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRPTVB1cmlmeSA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgY29uc3Qge1xuICAgIGVudHJpZXMsXG4gICAgc2V0UHJvdG90eXBlT2YsXG4gICAgaXNGcm96ZW4sXG4gICAgZ2V0UHJvdG90eXBlT2YsXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG4gIH0gPSBPYmplY3Q7XG4gIGxldCB7XG4gICAgZnJlZXplLFxuICAgIHNlYWwsXG4gICAgY3JlYXRlXG4gIH0gPSBPYmplY3Q7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuICBsZXQge1xuICAgIGFwcGx5LFxuICAgIGNvbnN0cnVjdFxuICB9ID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3Q7XG4gIGlmICghZnJlZXplKSB7XG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cbiAgaWYgKCFzZWFsKSB7XG4gICAgc2VhbCA9IGZ1bmN0aW9uIHNlYWwoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuICBpZiAoIWFwcGx5KSB7XG4gICAgYXBwbHkgPSBmdW5jdGlvbiBhcHBseShmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICAgIH07XG4gIH1cbiAgaWYgKCFjb25zdHJ1Y3QpIHtcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xuICAgICAgcmV0dXJuIG5ldyBGdW5jKC4uLmFyZ3MpO1xuICAgIH07XG4gIH1cbiAgY29uc3QgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XG4gIGNvbnN0IGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbiAgY29uc3QgYXJyYXlQdXNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gIGNvbnN0IHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbiAgY29uc3Qgc3RyaW5nVG9TdHJpbmcgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcpO1xuICBjb25zdCBzdHJpbmdNYXRjaCA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5tYXRjaCk7XG4gIGNvbnN0IHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG4gIGNvbnN0IHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG4gIGNvbnN0IHN0cmluZ1RyaW0gPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudHJpbSk7XG4gIGNvbnN0IG9iamVjdEhhc093blByb3BlcnR5ID0gdW5hcHBseShPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgY29uc3QgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcbiAgY29uc3QgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBnaXZlbiBmdW5jdGlvbiB3aXRoIGEgc3BlY2lmaWVkIHRoaXNBcmcgYW5kIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBmdW5jdGlvbiB0byBiZSB3cmFwcGVkIGFuZCBjYWxsZWQuXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgZ2l2ZW4gZnVuY3Rpb24gd2l0aCBhIHNwZWNpZmllZCB0aGlzQXJnIGFuZCBhcmd1bWVudHMuXG4gICAqL1xuICBmdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZ1bmN0aW9uIHRoYXQgY29uc3RydWN0cyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIC0gVGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGJlIHdyYXBwZWQgYW5kIGNhbGxlZC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IGNvbnN0cnVjdHMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIHVuY29uc3RydWN0KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoZnVuYywgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0IC0gVGhlIHNldCB0byB3aGljaCBlbGVtZW50cyB3aWxsIGJlIGFkZGVkLlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSBjb250YWluaW5nIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvIHRoZSBzZXQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybUNhc2VGdW5jIC0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdG8gdHJhbnNmb3JtIHRoZSBjYXNlIG9mIGVhY2ggZWxlbWVudCBiZWZvcmUgYWRkaW5nIHRvIHRoZSBzZXQuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtb2RpZmllZCBzZXQgd2l0aCBhZGRlZCBlbGVtZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZFRvU2V0KHNldCwgYXJyYXkpIHtcbiAgICBsZXQgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICAgIH1cbiAgICBsZXQgbCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGFycmF5W2xdO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBsY0VsZW1lbnQgPSB0cmFuc2Zvcm1DYXNlRnVuYyhlbGVtZW50KTtcbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxlbWVudCA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0W2VsZW1lbnRdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbiB1cCBhbiBhcnJheSB0byBoYXJkZW4gYWdhaW5zdCBDU1BQXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIGJlIGNsZWFuZWQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGNsZWFuZWQgdmVyc2lvbiBvZiB0aGUgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIGNsZWFuQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpc1Byb3BlcnR5RXhpc3QgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShhcnJheSwgaW5kZXgpO1xuICAgICAgaWYgKCFpc1Byb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGNsb25lZC5cbiAgICogQHJldHVybnMge09iamVjdH0gQSBuZXcgb2JqZWN0IHRoYXQgY29waWVzIHRoZSBvcmlnaW5hbC5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICAgIGNvbnN0IG5ld09iamVjdCA9IGNyZWF0ZShudWxsKTtcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIGVudHJpZXMob2JqZWN0KSkge1xuICAgICAgY29uc3QgaXNQcm9wZXJ0eUV4aXN0ID0gb2JqZWN0SGFzT3duUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoaXNQcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBjbGVhbkFycmF5KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gY2xvbmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkgY2hlY2tzIGlmIHRoZSBwcm9wIGlzIGZ1bmN0aW9uIG9yIGdldHRlciBhbmQgYmVoYXZlcyBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCAtIFRoZSBvYmplY3QgdG8gbG9vayB1cCB0aGUgZ2V0dGVyIGZ1bmN0aW9uIGluIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIC0gVGhlIHByb3BlcnR5IG5hbWUgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGdldHRlciBmdW5jdGlvbi5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgZ2V0dGVyIGZ1bmN0aW9uIGZvdW5kIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb3IgYSBmYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG4gIH1cblxuICBjb25zdCBodG1sJDEgPSBmcmVlemUoWydhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29udGVudCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlY29yYXRvcicsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhY2VyJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInXSk7XG5cbiAgLy8gU1ZHXG4gIGNvbnN0IHN2ZyQxID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcbiAgY29uc3Qgc3ZnRmlsdGVycyA9IGZyZWV6ZShbJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVEcm9wU2hhZG93JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJywgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZSddKTtcblxuICAvLyBMaXN0IG9mIFNWRyBlbGVtZW50cyB0aGF0IGFyZSBkaXNhbGxvd2VkIGJ5IGRlZmF1bHQuXG4gIC8vIFdlIHN0aWxsIG5lZWQgdG8ga25vdyB0aGVtIHNvIHRoYXQgd2UgY2FuIGRvIG5hbWVzcGFjZVxuICAvLyBjaGVja3MgcHJvcGVybHkgaW4gY2FzZSBvbmUgd2FudHMgdG8gYWRkIHRoZW0gdG9cbiAgLy8gYWxsb3ctbGlzdC5cbiAgY29uc3Qgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ2FuaW1hdGUnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLCAnZGlzY2FyZCcsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbm9iamVjdCcsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnbWVzaCcsICdtZXNoZ3JhZGllbnQnLCAnbWVzaHBhdGNoJywgJ21lc2hyb3cnLCAnbWlzc2luZy1nbHlwaCcsICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAndW5rbm93bicsICd1c2UnXSk7XG4gIGNvbnN0IG1hdGhNbCQxID0gZnJlZXplKFsnbWF0aCcsICdtZW5jbG9zZScsICdtZXJyb3InLCAnbWZlbmNlZCcsICdtZnJhYycsICdtZ2x5cGgnLCAnbWknLCAnbWxhYmVsZWR0cicsICdtbXVsdGlzY3JpcHRzJywgJ21uJywgJ21vJywgJ21vdmVyJywgJ21wYWRkZWQnLCAnbXBoYW50b20nLCAnbXJvb3QnLCAnbXJvdycsICdtcycsICdtc3BhY2UnLCAnbXNxcnQnLCAnbXN0eWxlJywgJ21zdWInLCAnbXN1cCcsICdtc3Vic3VwJywgJ210YWJsZScsICdtdGQnLCAnbXRleHQnLCAnbXRyJywgJ211bmRlcicsICdtdW5kZXJvdmVyJywgJ21wcmVzY3JpcHRzJ10pO1xuXG4gIC8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxuICAvLyBldmVuIHRob3NlIHRoYXQgd2UgZGlzYWxsb3cgYnkgZGVmYXVsdC5cbiAgY29uc3QgbWF0aE1sRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ21hY3Rpb24nLCAnbWFsaWduZ3JvdXAnLCAnbWFsaWdubWFyaycsICdtbG9uZ2RpdicsICdtc2NhcnJpZXMnLCAnbXNjYXJyeScsICdtc2dyb3VwJywgJ21zdGFjaycsICdtc2xpbmUnLCAnbXNyb3cnLCAnc2VtYW50aWNzJywgJ2Fubm90YXRpb24nLCAnYW5ub3RhdGlvbi14bWwnLCAnbXByZXNjcmlwdHMnLCAnbm9uZSddKTtcbiAgY29uc3QgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG4gIGNvbnN0IGh0bWwgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xuICBjb25zdCBzdmcgPSBmcmVlemUoWydhY2NlbnQtaGVpZ2h0JywgJ2FjY3VtdWxhdGUnLCAnYWRkaXRpdmUnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FzY2VudCcsICdhdHRyaWJ1dGVuYW1lJywgJ2F0dHJpYnV0ZXR5cGUnLCAnYXppbXV0aCcsICdiYXNlZnJlcXVlbmN5JywgJ2Jhc2VsaW5lLXNoaWZ0JywgJ2JlZ2luJywgJ2JpYXMnLCAnYnknLCAnY2xhc3MnLCAnY2xpcCcsICdjbGlwcGF0aHVuaXRzJywgJ2NsaXAtcGF0aCcsICdjbGlwLXJ1bGUnLCAnY29sb3InLCAnY29sb3ItaW50ZXJwb2xhdGlvbicsICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLCAnY29sb3ItcHJvZmlsZScsICdjb2xvci1yZW5kZXJpbmcnLCAnY3gnLCAnY3knLCAnZCcsICdkeCcsICdkeScsICdkaWZmdXNlY29uc3RhbnQnLCAnZGlyZWN0aW9uJywgJ2Rpc3BsYXknLCAnZGl2aXNvcicsICdkdXInLCAnZWRnZW1vZGUnLCAnZWxldmF0aW9uJywgJ2VuZCcsICdmaWxsJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmlsdGVyJywgJ2ZpbHRlcnVuaXRzJywgJ2Zsb29kLWNvbG9yJywgJ2Zsb29kLW9wYWNpdHknLCAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCAnZm9udC1zdHJldGNoJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JywgJ2Z4JywgJ2Z5JywgJ2cxJywgJ2cyJywgJ2dseXBoLW5hbWUnLCAnZ2x5cGhyZWYnLCAnZ3JhZGllbnR1bml0cycsICdncmFkaWVudHRyYW5zZm9ybScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdpbWFnZS1yZW5kZXJpbmcnLCAnaW4nLCAnaW4yJywgJ2snLCAnazEnLCAnazInLCAnazMnLCAnazQnLCAna2VybmluZycsICdrZXlwb2ludHMnLCAna2V5c3BsaW5lcycsICdrZXl0aW1lcycsICdsYW5nJywgJ2xlbmd0aGFkanVzdCcsICdsZXR0ZXItc3BhY2luZycsICdrZXJuZWxtYXRyaXgnLCAna2VybmVsdW5pdGxlbmd0aCcsICdsaWdodGluZy1jb2xvcicsICdsb2NhbCcsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ21hcmtlcmhlaWdodCcsICdtYXJrZXJ1bml0cycsICdtYXJrZXJ3aWR0aCcsICdtYXNrY29udGVudHVuaXRzJywgJ21hc2t1bml0cycsICdtYXgnLCAnbWFzaycsICdtZWRpYScsICdtZXRob2QnLCAnbW9kZScsICdtaW4nLCAnbmFtZScsICdudW1vY3RhdmVzJywgJ29mZnNldCcsICdvcGVyYXRvcicsICdvcGFjaXR5JywgJ29yZGVyJywgJ29yaWVudCcsICdvcmllbnRhdGlvbicsICdvcmlnaW4nLCAnb3ZlcmZsb3cnLCAncGFpbnQtb3JkZXInLCAncGF0aCcsICdwYXRobGVuZ3RoJywgJ3BhdHRlcm5jb250ZW50dW5pdHMnLCAncGF0dGVybnRyYW5zZm9ybScsICdwYXR0ZXJudW5pdHMnLCAncG9pbnRzJywgJ3ByZXNlcnZlYWxwaGEnLCAncHJlc2VydmVhc3BlY3RyYXRpbycsICdwcmltaXRpdmV1bml0cycsICdyJywgJ3J4JywgJ3J5JywgJ3JhZGl1cycsICdyZWZ4JywgJ3JlZnknLCAncmVwZWF0Y291bnQnLCAncmVwZWF0ZHVyJywgJ3Jlc3RhcnQnLCAncmVzdWx0JywgJ3JvdGF0ZScsICdzY2FsZScsICdzZWVkJywgJ3NoYXBlLXJlbmRlcmluZycsICdzcGVjdWxhcmNvbnN0YW50JywgJ3NwZWN1bGFyZXhwb25lbnQnLCAnc3ByZWFkbWV0aG9kJywgJ3N0YXJ0b2Zmc2V0JywgJ3N0ZGRldmlhdGlvbicsICdzdGl0Y2h0aWxlcycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsICdzdHJva2Utb3BhY2l0eScsICdzdHJva2UnLCAnc3Ryb2tlLXdpZHRoJywgJ3N0eWxlJywgJ3N1cmZhY2VzY2FsZScsICdzeXN0ZW1sYW5ndWFnZScsICd0YWJpbmRleCcsICd0YXJnZXR4JywgJ3RhcmdldHknLCAndHJhbnNmb3JtJywgJ3RyYW5zZm9ybS1vcmlnaW4nLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRsZW5ndGgnLCAndHlwZScsICd1MScsICd1MicsICd1bmljb2RlJywgJ3ZhbHVlcycsICd2aWV3Ym94JywgJ3Zpc2liaWxpdHknLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3aWR0aCcsICd3b3JkLXNwYWNpbmcnLCAnd3JhcCcsICd3cml0aW5nLW1vZGUnLCAneGNoYW5uZWxzZWxlY3RvcicsICd5Y2hhbm5lbHNlbGVjdG9yJywgJ3gnLCAneDEnLCAneDInLCAneG1sbnMnLCAneScsICd5MScsICd5MicsICd6JywgJ3pvb21hbmRwYW4nXSk7XG4gIGNvbnN0IG1hdGhNbCA9IGZyZWV6ZShbJ2FjY2VudCcsICdhY2NlbnR1bmRlcicsICdhbGlnbicsICdiZXZlbGxlZCcsICdjbG9zZScsICdjb2x1bW5zYWxpZ24nLCAnY29sdW1ubGluZXMnLCAnY29sdW1uc3BhbicsICdkZW5vbWFsaWduJywgJ2RlcHRoJywgJ2RpcicsICdkaXNwbGF5JywgJ2Rpc3BsYXlzdHlsZScsICdlbmNvZGluZycsICdmZW5jZScsICdmcmFtZScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdsYXJnZW9wJywgJ2xlbmd0aCcsICdsaW5ldGhpY2tuZXNzJywgJ2xzcGFjZScsICdscXVvdGUnLCAnbWF0aGJhY2tncm91bmQnLCAnbWF0aGNvbG9yJywgJ21hdGhzaXplJywgJ21hdGh2YXJpYW50JywgJ21heHNpemUnLCAnbWluc2l6ZScsICdtb3ZhYmxlbGltaXRzJywgJ25vdGF0aW9uJywgJ251bWFsaWduJywgJ29wZW4nLCAncm93YWxpZ24nLCAncm93bGluZXMnLCAncm93c3BhY2luZycsICdyb3dzcGFuJywgJ3JzcGFjZScsICdycXVvdGUnLCAnc2NyaXB0bGV2ZWwnLCAnc2NyaXB0bWluc2l6ZScsICdzY3JpcHRzaXplbXVsdGlwbGllcicsICdzZWxlY3Rpb24nLCAnc2VwYXJhdG9yJywgJ3NlcGFyYXRvcnMnLCAnc3RyZXRjaHknLCAnc3Vic2NyaXB0c2hpZnQnLCAnc3Vwc2NyaXB0c2hpZnQnLCAnc3ltbWV0cmljJywgJ3ZvZmZzZXQnLCAnd2lkdGgnLCAneG1sbnMnXSk7XG4gIGNvbnN0IHhtbCA9IGZyZWV6ZShbJ3hsaW5rOmhyZWYnLCAneG1sOmlkJywgJ3hsaW5rOnRpdGxlJywgJ3htbDpzcGFjZScsICd4bWxuczp4bGluayddKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9iZXR0ZXItcmVnZXhcbiAgY29uc3QgTVVTVEFDSEVfRVhQUiA9IHNlYWwoL1xce1xce1tcXHdcXFddKnxbXFx3XFxXXSpcXH1cXH0vZ20pOyAvLyBTcGVjaWZ5IHRlbXBsYXRlIGRldGVjdGlvbiByZWdleCBmb3IgU0FGRV9GT1JfVEVNUExBVEVTIG1vZGVcbiAgY29uc3QgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHdcXFddKnxbXFx3XFxXXSolPi9nbSk7XG4gIGNvbnN0IFRNUExJVF9FWFBSID0gc2VhbCgvXFwke1tcXHdcXFddKn0vZ20pO1xuICBjb25zdCBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICBjb25zdCBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgY29uc3QgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfHNtc3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICk7XG5cbiAgY29uc3QgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIGNvbnN0IEFUVFJfV0hJVEVTUEFDRSA9IHNlYWwoL1tcXHUwMDAwLVxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMjlcXHUyMDVGXFx1MzAwMF0vZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbiAgKTtcblxuICBjb25zdCBET0NUWVBFX05BTUUgPSBzZWFsKC9eaHRtbCQvaSk7XG5cbiAgdmFyIEVYUFJFU1NJT05TID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBNVVNUQUNIRV9FWFBSOiBNVVNUQUNIRV9FWFBSLFxuICAgIEVSQl9FWFBSOiBFUkJfRVhQUixcbiAgICBUTVBMSVRfRVhQUjogVE1QTElUX0VYUFIsXG4gICAgREFUQV9BVFRSOiBEQVRBX0FUVFIsXG4gICAgQVJJQV9BVFRSOiBBUklBX0FUVFIsXG4gICAgSVNfQUxMT1dFRF9VUkk6IElTX0FMTE9XRURfVVJJLFxuICAgIElTX1NDUklQVF9PUl9EQVRBOiBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICBBVFRSX1dISVRFU1BBQ0U6IEFUVFJfV0hJVEVTUEFDRSxcbiAgICBET0NUWVBFX05BTUU6IERPQ1RZUEVfTkFNRVxuICB9KTtcblxuICBjb25zdCBnZXRHbG9iYWwgPSBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5vLW9wIHBvbGljeSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqIERvbid0IGV4cG9ydCB0aGlzIGZ1bmN0aW9uIG91dHNpZGUgdGhpcyBtb2R1bGUhXG4gICAqIEBwYXJhbSB7VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICAgKiBAcGFyYW0ge0hUTUxTY3JpcHRFbGVtZW50fSBwdXJpZnlIb3N0RWxlbWVudCBUaGUgU2NyaXB0IGVsZW1lbnQgdXNlZCB0byBsb2FkIERPTVB1cmlmeSAodG8gZGV0ZXJtaW5lIHBvbGljeSBuYW1lIHN1ZmZpeCkuXG4gICAqIEByZXR1cm4ge1RydXN0ZWRUeXBlUG9saWN5fSBUaGUgcG9saWN5IGNyZWF0ZWQgKG9yIG51bGwsIGlmIFRydXN0ZWQgVHlwZXNcbiAgICogYXJlIG5vdCBzdXBwb3J0ZWQgb3IgY3JlYXRpbmcgdGhlIHBvbGljeSBmYWlsZWQpLlxuICAgKi9cbiAgY29uc3QgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBwdXJpZnlIb3N0RWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgdHJ1c3RlZFR5cGVzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIGNhbGxlcnMgdG8gY29udHJvbCB0aGUgdW5pcXVlIHBvbGljeSBuYW1lXG4gICAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gICAgLy8gUG9saWN5IGNyZWF0aW9uIHdpdGggZHVwbGljYXRlIG5hbWVzIHRocm93cyBpbiBUcnVzdGVkIFR5cGVzLlxuICAgIGxldCBzdWZmaXggPSBudWxsO1xuICAgIGNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICAgIGlmIChwdXJpZnlIb3N0RWxlbWVudCAmJiBwdXJpZnlIb3N0RWxlbWVudC5oYXNBdHRyaWJ1dGUoQVRUUl9OQU1FKSkge1xuICAgICAgc3VmZml4ID0gcHVyaWZ5SG9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gICAgfVxuICAgIGNvbnN0IHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KHBvbGljeU5hbWUsIHtcbiAgICAgICAgY3JlYXRlSFRNTChodG1sKSB7XG4gICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTChzY3JpcHRVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAvLyBQb2xpY3kgY3JlYXRpb24gZmFpbGVkIChtb3N0IGxpa2VseSBhbm90aGVyIERPTVB1cmlmeSBzY3JpcHQgaGFzXG4gICAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgICAvLyBpZiBUVCBhcmUgZW5mb3JjZWQuXG4gICAgICBjb25zb2xlLndhcm4oJ1RydXN0ZWRUeXBlcyBwb2xpY3kgJyArIHBvbGljeU5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjcmVhdGVkLicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XG4gICAgbGV0IHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG4gICAgY29uc3QgRE9NUHVyaWZ5ID0gcm9vdCA9PiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMy4wLjknO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG4gICAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICAgIC8vIE5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAgIC8vIHNvIHRoYXQgeW91IGNhbiBwYXNzIHlvdXIgb3duIFdpbmRvd1xuICAgICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cbiAgICBsZXQge1xuICAgICAgZG9jdW1lbnRcbiAgICB9ID0gd2luZG93O1xuICAgIGNvbnN0IG9yaWdpbmFsRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICBjb25zdCBjdXJyZW50U2NyaXB0ID0gb3JpZ2luYWxEb2N1bWVudC5jdXJyZW50U2NyaXB0O1xuICAgIGNvbnN0IHtcbiAgICAgIERvY3VtZW50RnJhZ21lbnQsXG4gICAgICBIVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgICAgTm9kZSxcbiAgICAgIEVsZW1lbnQsXG4gICAgICBOb2RlRmlsdGVyLFxuICAgICAgTmFtZWROb2RlTWFwID0gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwLFxuICAgICAgSFRNTEZvcm1FbGVtZW50LFxuICAgICAgRE9NUGFyc2VyLFxuICAgICAgdHJ1c3RlZFR5cGVzXG4gICAgfSA9IHdpbmRvdztcbiAgICBjb25zdCBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG4gICAgY29uc3QgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgICBjb25zdCBnZXROZXh0U2libGluZyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnbmV4dFNpYmxpbmcnKTtcbiAgICBjb25zdCBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XG4gICAgY29uc3QgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpO1xuXG4gICAgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gICAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gICAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAgIC8vIGlzIGluaGVyaXRlZC5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50ICYmIHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudCA9IHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRydXN0ZWRUeXBlc1BvbGljeTtcbiAgICBsZXQgZW1wdHlIVE1MID0gJyc7XG4gICAgY29uc3Qge1xuICAgICAgaW1wbGVtZW50YXRpb24sXG4gICAgICBjcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVcbiAgICB9ID0gZG9jdW1lbnQ7XG4gICAgY29uc3Qge1xuICAgICAgaW1wb3J0Tm9kZVxuICAgIH0gPSBvcmlnaW5hbERvY3VtZW50O1xuICAgIGxldCBob29rcyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IHR5cGVvZiBlbnRyaWVzID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBnZXRQYXJlbnROb2RlID09PSAnZnVuY3Rpb24nICYmIGltcGxlbWVudGF0aW9uICYmIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHtcbiAgICAgIE1VU1RBQ0hFX0VYUFIsXG4gICAgICBFUkJfRVhQUixcbiAgICAgIFRNUExJVF9FWFBSLFxuICAgICAgREFUQV9BVFRSLFxuICAgICAgQVJJQV9BVFRSLFxuICAgICAgSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgICBBVFRSX1dISVRFU1BBQ0VcbiAgICB9ID0gRVhQUkVTU0lPTlM7XG4gICAgbGV0IHtcbiAgICAgIElTX0FMTE9XRURfVVJJOiBJU19BTExPV0VEX1VSSSQxXG4gICAgfSA9IEVYUFJFU1NJT05TO1xuXG4gICAgLyoqXG4gICAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAgICovXG5cbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cbiAgICBsZXQgQUxMT1dFRF9UQUdTID0gbnVsbDtcbiAgICBjb25zdCBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbLi4uaHRtbCQxLCAuLi5zdmckMSwgLi4uc3ZnRmlsdGVycywgLi4ubWF0aE1sJDEsIC4uLnRleHRdKTtcblxuICAgIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG4gICAgbGV0IEFMTE9XRURfQVRUUiA9IG51bGw7XG4gICAgY29uc3QgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgWy4uLmh0bWwsIC4uLnN2ZywgLi4ubWF0aE1sLCAuLi54bWxdKTtcblxuICAgIC8qXG4gICAgICogQ29uZmlndXJlIGhvdyBET01QVXJpZnkgc2hvdWxkIGhhbmRsZSBjdXN0b20gZWxlbWVudHMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgYXMgd2VsbCBhcyBjdXN0b21pemVkIGJ1aWx0LWluIGVsZW1lbnRzLlxuICAgICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IHRhZ05hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgY3VzdG9tIGVsZW1lbnRzKVxuICAgICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IGF0dHJpYnV0ZU5hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgYXR0cmlidXRlcyBub3Qgb24gdGhlIGFsbG93IGxpc3QpXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgYWxsb3cgY3VzdG9tIGVsZW1lbnRzIGRlcml2ZWQgZnJvbSBidWlsdC1pbnMgaWYgdGhleSBwYXNzIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjay4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICAgKi9cbiAgICBsZXQgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBPYmplY3Quc2VhbChjcmVhdGUobnVsbCwge1xuICAgICAgdGFnTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZU5hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG4gICAgICBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0pKTtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gICAgbGV0IEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG4gICAgbGV0IEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAgIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgICBsZXQgQUxMT1dfQVJJQV9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gICAgbGV0IEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cbiAgICBsZXQgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBzZWxmLWNsb3NpbmcgdGFncyBpbiBhdHRyaWJ1dGVzIGFyZSBhbGxvd2VkLlxuICAgICAqIFVzdWFsbHkgcmVtb3ZlZCBkdWUgdG8gYSBtWFNTIGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cbiAgICBsZXQgQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgICAqL1xuICAgIGxldCBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBkb2N1bWVudCB3aXRoIDxodG1sPi4uLiBzaG91bGQgYmUgcmV0dXJuZWQgKi9cbiAgICBsZXQgV0hPTEVfRE9DVU1FTlQgPSBmYWxzZTtcblxuICAgIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICAgIGxldCBTRVRfQ09ORklHID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICAgIGxldCBGT1JDRV9CT0RZID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICAgKiBJZiBgV0hPTEVfRE9DVU1FTlRgIGlzIGVuYWJsZWQgYSBgSFRNTEh0bWxFbGVtZW50YCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWRcbiAgICAgKi9cbiAgICBsZXQgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBEb2N1bWVudEZyYWdtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuICAgIGxldCBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cbiAgICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG4gICAgbGV0IFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/XG4gICAgICogVGhpcyBzYW5pdGl6ZXMgbWFya3VwcyBuYW1lZCB3aXRoIGNvbGxpZGluZywgY2xvYmJlcmFibGUgYnVpbHQtaW4gRE9NIEFQSXMuXG4gICAgICovXG4gICAgbGV0IFNBTklUSVpFX0RPTSA9IHRydWU7XG5cbiAgICAvKiBBY2hpZXZlIGZ1bGwgRE9NIENsb2JiZXJpbmcgcHJvdGVjdGlvbiBieSBpc29sYXRpbmcgdGhlIG5hbWVzcGFjZSBvZiBuYW1lZFxuICAgICAqIHByb3BlcnRpZXMgYW5kIEpTIHZhcmlhYmxlcywgbWl0aWdhdGluZyBhdHRhY2tzIHRoYXQgYWJ1c2UgdGhlIEhUTUwvRE9NIHNwZWMgcnVsZXMuXG4gICAgICpcbiAgICAgKiBIVE1ML0RPTSBzcGVjIHJ1bGVzIHRoYXQgZW5hYmxlIERPTSBDbG9iYmVyaW5nOlxuICAgICAqICAgLSBOYW1lZCBBY2Nlc3Mgb24gV2luZG93ICjCpzcuMy4zKVxuICAgICAqICAgLSBET00gVHJlZSBBY2Nlc3NvcnMgKMKnMy4xLjUpXG4gICAgICogICAtIEZvcm0gRWxlbWVudCBQYXJlbnQtQ2hpbGQgUmVsYXRpb25zICjCpzQuMTAuMylcbiAgICAgKiAgIC0gSWZyYW1lIHNyY2RvYyAvIE5lc3RlZCBXaW5kb3dQcm94aWVzICjCpzQuOC41KVxuICAgICAqICAgLSBIVE1MQ29sbGVjdGlvbiAowqc0LjIuMTAuMilcbiAgICAgKlxuICAgICAqIE5hbWVzcGFjZSBpc29sYXRpb24gaXMgaW1wbGVtZW50ZWQgYnkgcHJlZml4aW5nIGBpZGAgYW5kIGBuYW1lYCBhdHRyaWJ1dGVzXG4gICAgICogd2l0aCBhIGNvbnN0YW50IHN0cmluZywgaS5lLiwgYHVzZXItY29udGVudC1gXG4gICAgICovXG4gICAgbGV0IFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XG4gICAgY29uc3QgU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYID0gJ3VzZXItY29udGVudC0nO1xuXG4gICAgLyogS2VlcCBlbGVtZW50IGNvbnRlbnQgd2hlbiByZW1vdmluZyBlbGVtZW50PyAqL1xuICAgIGxldCBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuXG4gICAgLyogSWYgYSBgTm9kZWAgaXMgcGFzc2VkIHRvIHNhbml0aXplKCksIHRoZW4gcGVyZm9ybXMgc2FuaXRpemF0aW9uIGluLXBsYWNlIGluc3RlYWRcbiAgICAgKiBvZiBpbXBvcnRpbmcgaXQgaW50byBhIG5ldyBEb2N1bWVudCBhbmQgcmV0dXJuaW5nIGEgc2FuaXRpemVkIGNvcHkgKi9cbiAgICBsZXQgSU5fUExBQ0UgPSBmYWxzZTtcblxuICAgIC8qIEFsbG93IHVzYWdlIG9mIHByb2ZpbGVzIGxpa2UgaHRtbCwgc3ZnIGFuZCBtYXRoTWwgKi9cbiAgICBsZXQgVVNFX1BST0ZJTEVTID0ge307XG5cbiAgICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cbiAgICBsZXQgRk9SQklEX0NPTlRFTlRTID0gbnVsbDtcbiAgICBjb25zdCBERUZBVUxUX0ZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2Fubm90YXRpb24teG1sJywgJ2F1ZGlvJywgJ2NvbGdyb3VwJywgJ2Rlc2MnLCAnZm9yZWlnbm9iamVjdCcsICdoZWFkJywgJ2lmcmFtZScsICdtYXRoJywgJ21pJywgJ21uJywgJ21vJywgJ21zJywgJ210ZXh0JywgJ25vZW1iZWQnLCAnbm9mcmFtZXMnLCAnbm9zY3JpcHQnLCAncGxhaW50ZXh0JywgJ3NjcmlwdCcsICdzdHlsZScsICdzdmcnLCAndGVtcGxhdGUnLCAndGhlYWQnLCAndGl0bGUnLCAndmlkZW8nLCAneG1wJ10pO1xuXG4gICAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXG4gICAgbGV0IERBVEFfVVJJX1RBR1MgPSBudWxsO1xuICAgIGNvbnN0IERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnLCAndHJhY2snXSk7XG5cbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuICAgIGxldCBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgICBjb25zdCBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMgPSBhZGRUb1NldCh7fSwgWydhbHQnLCAnY2xhc3MnLCAnZm9yJywgJ2lkJywgJ2xhYmVsJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyb2xlJywgJ3N1bW1hcnknLCAndGl0bGUnLCAndmFsdWUnLCAnc3R5bGUnLCAneG1sbnMnXSk7XG4gICAgY29uc3QgTUFUSE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcbiAgICBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICBjb25zdCBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cbiAgICBsZXQgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gICAgbGV0IElTX0VNUFRZX0lOUFVUID0gZmFsc2U7XG5cbiAgICAvKiBBbGxvd2VkIFhIVE1MK1hNTCBuYW1lc3BhY2VzICovXG4gICAgbGV0IEFMTE9XRURfTkFNRVNQQUNFUyA9IG51bGw7XG4gICAgY29uc3QgREVGQVVMVF9BTExPV0VEX05BTUVTUEFDRVMgPSBhZGRUb1NldCh7fSwgW01BVEhNTF9OQU1FU1BBQ0UsIFNWR19OQU1FU1BBQ0UsIEhUTUxfTkFNRVNQQUNFXSwgc3RyaW5nVG9TdHJpbmcpO1xuXG4gICAgLyogUGFyc2luZyBvZiBzdHJpY3QgWEhUTUwgZG9jdW1lbnRzICovXG4gICAgbGV0IFBBUlNFUl9NRURJQV9UWVBFID0gbnVsbDtcbiAgICBjb25zdCBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi94aHRtbCt4bWwnLCAndGV4dC9odG1sJ107XG4gICAgY29uc3QgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICAgIGxldCB0cmFuc2Zvcm1DYXNlRnVuYyA9IG51bGw7XG5cbiAgICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gICAgbGV0IENPTkZJRyA9IG51bGw7XG5cbiAgICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG4gICAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdGVzdFZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9wYXJzZUNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIGNvbnN0IF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uIF9wYXJzZUNvbmZpZygpIHtcbiAgICAgIGxldCBjZmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgICAgaWYgKCFjZmcgfHwgdHlwZW9mIGNmZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2ZnID0ge307XG4gICAgICB9XG5cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHByb3RvdHlwZSBwb2xsdXRpb24gKi9cbiAgICAgIGNmZyA9IGNsb25lKGNmZyk7XG4gICAgICBQQVJTRVJfTUVESUFfVFlQRSA9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMuaW5kZXhPZihjZmcuUEFSU0VSX01FRElBX1RZUEUpID09PSAtMSA/IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgOiBjZmcuUEFSU0VSX01FRElBX1RZUEU7XG5cbiAgICAgIC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnID8gc3RyaW5nVG9TdHJpbmcgOiBzdHJpbmdUb0xvd2VyQ2FzZTtcblxuICAgICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgICAgQUxMT1dFRF9UQUdTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnQUxMT1dFRF9UQUdTJykgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgICBBTExPV0VEX0FUVFIgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdBTExPV0VEX0FUVFInKSA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICAgIEFMTE9XRURfTkFNRVNQQUNFUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0FMTE9XRURfTkFNRVNQQUNFUycpID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX05BTUVTUEFDRVMsIHN0cmluZ1RvU3RyaW5nKSA6IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTO1xuICAgICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0FERF9VUklfU0FGRV9BVFRSJykgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIGNmZy5BRERfVVJJX1NBRkVfQVRUUixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgICBEQVRBX1VSSV9UQUdTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnQUREX0RBVEFfVVJJX1RBR1MnKSA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgY2ZnLkFERF9EQVRBX1VSSV9UQUdTLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICAgIEZPUkJJRF9DT05URU5UUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0ZPUkJJRF9DT05URU5UUycpID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTO1xuICAgICAgRk9SQklEX1RBR1MgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdGT1JCSURfVEFHUycpID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XG4gICAgICBGT1JCSURfQVRUUiA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0ZPUkJJRF9BVFRSJykgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiB7fTtcbiAgICAgIFVTRV9QUk9GSUxFUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ1VTRV9QUk9GSUxFUycpID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xuICAgICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IGNmZy5BTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fRE9NID0gY2ZnLlJFVFVSTl9ET00gfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9ET01fRlJBR01FTlQgPSBjZmcuUkVUVVJOX0RPTV9GUkFHTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFNBTklUSVpFX0RPTSA9IGNmZy5TQU5JVElaRV9ET00gIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIFNBTklUSVpFX05BTUVEX1BST1BTID0gY2ZnLlNBTklUSVpFX05BTUVEX1BST1BTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBLRUVQX0NPTlRFTlQgPSBjZmcuS0VFUF9DT05URU5UICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBJTl9QTEFDRSA9IGNmZy5JTl9QTEFDRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgSVNfQUxMT1dFRF9VUkkkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkk7XG4gICAgICBOQU1FU1BBQ0UgPSBjZmcuTkFNRVNQQUNFIHx8IEhUTUxfTkFNRVNQQUNFO1xuICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgfHwge307XG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2s7XG4gICAgICB9XG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2s7XG4gICAgICB9XG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIHR5cGVvZiBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cztcbiAgICAgIH1cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCB0ZXh0KTtcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gW107XG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuaHRtbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgaHRtbCQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmckMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIG1hdGhNbCQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIG1hdGhNbCk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgICAgaWYgKGNmZy5BRERfVEFHUykge1xuICAgICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZmcuQUREX0FUVFIpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfQVRUUiA9PT0gREVGQVVMVF9BTExPV0VEX0FUVFIpIHtcbiAgICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG4gICAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICAgIGFkZFRvU2V0KFVSSV9TQUZFX0FUVFJJQlVURVMsIGNmZy5BRERfVVJJX1NBRkVfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuICAgICAgaWYgKGNmZy5GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgaWYgKEZPUkJJRF9DT05URU5UUyA9PT0gREVGQVVMVF9GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgICBGT1JCSURfQ09OVEVOVFMgPSBjbG9uZShGT1JCSURfQ09OVEVOVFMpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRvU2V0KEZPUkJJRF9DT05URU5UUywgY2ZnLkZPUkJJRF9DT05URU5UUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuXG4gICAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH1cbiAgICAgIGlmIChjZmcuVFJVU1RFRF9UWVBFU19QT0xJQ1kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjZmcuVFJVU1RFRF9UWVBFU19QT0xJQ1kuY3JlYXRlSFRNTCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnVFJVU1RFRF9UWVBFU19QT0xJQ1kgY29uZmlndXJhdGlvbiBvcHRpb24gbXVzdCBwcm92aWRlIGEgXCJjcmVhdGVIVE1MXCIgaG9vay4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNmZy5UUlVTVEVEX1RZUEVTX1BPTElDWS5jcmVhdGVTY3JpcHRVUkwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ1RSVVNURURfVFlQRVNfUE9MSUNZIGNvbmZpZ3VyYXRpb24gb3B0aW9uIG11c3QgcHJvdmlkZSBhIFwiY3JlYXRlU2NyaXB0VVJMXCIgaG9vay4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBleGlzdGluZyBUcnVzdGVkVHlwZXMgcG9saWN5LlxuICAgICAgICB0cnVzdGVkVHlwZXNQb2xpY3kgPSBjZmcuVFJVU1RFRF9UWVBFU19QT0xJQ1k7XG5cbiAgICAgICAgLy8gU2lnbiBsb2NhbCB2YXJpYWJsZXMgcmVxdWlyZWQgYnkgYHNhbml0aXplYC5cbiAgICAgICAgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5pbml0aWFsaXplZCBwb2xpY3ksIGF0dGVtcHQgdG8gaW5pdGlhbGl6ZSB0aGUgaW50ZXJuYWwgZG9tcHVyaWZ5IHBvbGljeS5cbiAgICAgICAgaWYgKHRydXN0ZWRUeXBlc1BvbGljeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5ID0gX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSh0cnVzdGVkVHlwZXMsIGN1cnJlbnRTY3JpcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY3JlYXRpbmcgdGhlIGludGVybmFsIHBvbGljeSBzdWNjZWVkZWQgc2lnbiBpbnRlcm5hbCB2YXJpYWJsZXMuXG4gICAgICAgIGlmICh0cnVzdGVkVHlwZXNQb2xpY3kgIT09IG51bGwgJiYgdHlwZW9mIGVtcHR5SFRNTCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlbXB0eUhUTUwgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCgnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgIGZyZWV6ZShjZmcpO1xuICAgICAgfVxuICAgICAgQ09ORklHID0gY2ZnO1xuICAgIH07XG4gICAgY29uc3QgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XG4gICAgY29uc3QgSFRNTF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydmb3JlaWdub2JqZWN0JywgJ2Rlc2MnLCAndGl0bGUnLCAnYW5ub3RhdGlvbi14bWwnXSk7XG5cbiAgICAvLyBDZXJ0YWluIGVsZW1lbnRzIGFyZSBhbGxvd2VkIGluIGJvdGggU1ZHIGFuZCBIVE1MXG4gICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgLy8gc28gdGhhdCB0aGV5IGRvbid0IGdldCBlcnJvbmVvdXNseSBkZWxldGVkIGZyb21cbiAgICAvLyBIVE1MIG5hbWVzcGFjZS5cbiAgICBjb25zdCBDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTID0gYWRkVG9TZXQoe30sIFsndGl0bGUnLCAnc3R5bGUnLCAnZm9udCcsICdhJywgJ3NjcmlwdCddKTtcblxuICAgIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAgICogY29ycmVjdGx5LiAqL1xuICAgIGNvbnN0IEFMTF9TVkdfVEFHUyA9IGFkZFRvU2V0KHt9LCBbLi4uc3ZnJDEsIC4uLnN2Z0ZpbHRlcnMsIC4uLnN2Z0Rpc2FsbG93ZWRdKTtcbiAgICBjb25zdCBBTExfTUFUSE1MX1RBR1MgPSBhZGRUb1NldCh7fSwgWy4uLm1hdGhNbCQxLCAuLi5tYXRoTWxEaXNhbGxvd2VkXSk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGNvbnN0IF9jaGVja1ZhbGlkTmFtZXNwYWNlID0gZnVuY3Rpb24gX2NoZWNrVmFsaWROYW1lc3BhY2UoZWxlbWVudCkge1xuICAgICAgbGV0IHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgICAgIC8vIEluIEpTRE9NLCBpZiB3ZSdyZSBpbnNpZGUgc2hhZG93IERPTSwgdGhlbiBwYXJlbnROb2RlXG4gICAgICAvLyBjYW4gYmUgbnVsbC4gV2UganVzdCBzaW11bGF0ZSBwYXJlbnQgaW4gdGhpcyBjYXNlLlxuICAgICAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC50YWdOYW1lKSB7XG4gICAgICAgIHBhcmVudCA9IHtcbiAgICAgICAgICBuYW1lc3BhY2VVUkk6IE5BTUVTUEFDRSxcbiAgICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zdCB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICAgIGNvbnN0IHBhcmVudFRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShwYXJlbnQudGFnTmFtZSk7XG4gICAgICBpZiAoIUFMTE9XRURfTkFNRVNQQUNFU1tlbGVtZW50Lm5hbWVzcGFjZVVSSV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBTVkdcbiAgICAgICAgLy8gaXMgdmlhIDxzdmc+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBNYXRoTUwgdG8gU1ZHIGlzIHZpYWBcbiAgICAgICAgLy8gc3ZnIGlmIHBhcmVudCBpcyBlaXRoZXIgPGFubm90YXRpb24teG1sPiBvciBNYXRoTUxcbiAgICAgICAgLy8gdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHMuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnICYmIChwYXJlbnRUYWdOYW1lID09PSAnYW5ub3RhdGlvbi14bWwnIHx8IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gU1ZHXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gU1ZHIG5hbWVzcGFjZS5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIEhUTUwgaXMgdmlhXG4gICAgICAgIC8vIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzLCBhbmQgZnJvbSBNYXRoTUwgdG8gSFRNTFxuICAgICAgICAvLyBpcyB2aWEgTWF0aE1MIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFICYmICFIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJiAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgZGlzYWxsb3cgdGFncyB0aGF0IGFyZSBzcGVjaWZpYyBmb3IgTWF0aE1MXG4gICAgICAgIC8vIG9yIFNWRyBhbmQgc2hvdWxkIG5ldmVyIGFwcGVhciBpbiBIVE1MIG5hbWVzcGFjZVxuICAgICAgICByZXR1cm4gIUFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSAmJiAoQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UU1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gRm9yIFhIVE1MIGFuZCBYTUwgZG9jdW1lbnRzIHRoYXQgc3VwcG9ydCBjdXN0b20gbmFtZXNwYWNlc1xuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29kZSBzaG91bGQgbmV2ZXIgcmVhY2ggdGhpcyBwbGFjZSAodGhpcyBtZWFuc1xuICAgICAgLy8gdGhhdCB0aGUgZWxlbWVudCBzb21laG93IGdvdCBuYW1lc3BhY2UgdGhhdCBpcyBub3RcbiAgICAgIC8vIEhUTUwsIFNWRywgTWF0aE1MIG9yIGFsbG93ZWQgdmlhIEFMTE9XRURfTkFNRVNQQUNFUykuXG4gICAgICAvLyBSZXR1cm4gZmFsc2UganVzdCBpbiBjYXNlLlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZm9yY2VSZW1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuICAgIGNvbnN0IF9mb3JjZVJlbW92ZSA9IGZ1bmN0aW9uIF9mb3JjZVJlbW92ZShub2RlKSB7XG4gICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgZWxlbWVudDogbm9kZVxuICAgICAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtcmVtb3ZlXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3JlbW92ZUF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAgICovXG4gICAgY29uc3QgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblxuICAgICAgLy8gV2Ugdm9pZCBhdHRyaWJ1dGUgdmFsdWVzIGZvciB1bnJlbW92YWJsZSBcImlzXCJcIiBhdHRyaWJ1dGVzXG4gICAgICBpZiAobmFtZSA9PT0gJ2lzJyAmJiAhQUxMT1dFRF9BVFRSW25hbWVdKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NIHx8IFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX2ZvcmNlUmVtb3ZlKG5vZGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pbml0RG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGlydHkgYSBzdHJpbmcgb2YgZGlydHkgbWFya3VwXG4gICAgICogQHJldHVybiB7RG9jdW1lbnR9IGEgRE9NLCBmaWxsZWQgd2l0aCB0aGUgZGlydHkgbWFya3VwXG4gICAgICovXG4gICAgY29uc3QgX2luaXREb2N1bWVudCA9IGZ1bmN0aW9uIF9pbml0RG9jdW1lbnQoZGlydHkpIHtcbiAgICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICAgIGxldCBkb2MgPSBudWxsO1xuICAgICAgbGV0IGxlYWRpbmdXaGl0ZXNwYWNlID0gbnVsbDtcbiAgICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICAgIGRpcnR5ID0gJzxyZW1vdmU+PC9yZW1vdmU+JyArIGRpcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmdNYXRjaChkaXJ0eSwgL15bXFxyXFxuXFx0IF0rLyk7XG4gICAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgICAgfVxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFJvb3Qgb2YgWEhUTUwgZG9jIG11c3QgY29udGFpbiB4bWxucyBkZWNsYXJhdGlvbiAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvbm9ybWF0aXZlLmh0bWwjc3RyaWN0KVxuICAgICAgICBkaXJ0eSA9ICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArIGRpcnR5ICsgJzwvYm9keT48L2h0bWw+JztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgLypcbiAgICAgICAqIFVzZSB0aGUgRE9NUGFyc2VyIEFQSSBieSBkZWZhdWx0LCBmYWxsYmFjayBsYXRlciBpZiBuZWVkcyBiZVxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IElTX0VNUFRZX0lOUFVUID8gZW1wdHlIVE1MIDogZGlydHlQYXlsb2FkO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgLy8gU3ludGF4IGVycm9yIGlmIGRpcnR5UGF5bG9hZCBpcyBpbnZhbGlkIHhtbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGlmIChkaXJ0eSAmJiBsZWFkaW5nV2hpdGVzcGFjZSkge1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksIGJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgLyogV29yayBvbiB3aG9sZSBkb2N1bWVudCBvciBqdXN0IGl0cyBib2R5ICovXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChkb2MsIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTm9kZUl0ZXJhdG9yIG9iamVjdCB0aGF0IHlvdSBjYW4gdXNlIHRvIHRyYXZlcnNlIGZpbHRlcmVkIGxpc3RzIG9mIG5vZGVzIG9yIGVsZW1lbnRzIGluIGEgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSByb290IFRoZSByb290IGVsZW1lbnQgb3Igbm9kZSB0byBzdGFydCB0cmF2ZXJzaW5nIG9uLlxuICAgICAqIEByZXR1cm4ge05vZGVJdGVyYXRvcn0gVGhlIGNyZWF0ZWQgTm9kZUl0ZXJhdG9yXG4gICAgICovXG4gICAgY29uc3QgX2NyZWF0ZU5vZGVJdGVyYXRvciA9IGZ1bmN0aW9uIF9jcmVhdGVOb2RlSXRlcmF0b3Iocm9vdCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LCByb290LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc0Nsb2JiZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAgICovXG4gICAgY29uc3QgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24gX2lzQ2xvYmJlcmVkKGVsbSkge1xuICAgICAgcmV0dXJuIGVsbSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCAmJiAodHlwZW9mIGVsbS5ub2RlTmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS50ZXh0Q29udGVudCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5yZW1vdmVDaGlsZCAhPT0gJ2Z1bmN0aW9uJyB8fCAhKGVsbS5hdHRyaWJ1dGVzIGluc3RhbmNlb2YgTmFtZWROb2RlTWFwKSB8fCB0eXBlb2YgZWxtLnJlbW92ZUF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLnNldEF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLm5hbWVzcGFjZVVSSSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5pbnNlcnRCZWZvcmUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5oYXNDaGlsZE5vZGVzICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIERPTSBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gb2JqZWN0IG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICBjb25zdCBfaXNOb2RlID0gZnVuY3Rpb24gX2lzTm9kZShvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgTm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmplY3QgaW5zdGFuY2VvZiBOb2RlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgY29uc3QgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gX2V4ZWN1dGVIb29rKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgICBpZiAoIWhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgaG9vayA9PiB7XG4gICAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgICAqIEByZXR1cm4gIHtCb29sZWFufSB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgICAqL1xuICAgIGNvbnN0IF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIGxldCBjb250ZW50ID0gbnVsbDtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuICAgICAgaWYgKF9pc0Nsb2JiZXJlZChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIE5vdyBsZXQncyBjaGVjayB0aGUgZWxlbWVudCdzIHR5cGUgYW5kIG5hbWUgKi9cbiAgICAgIGNvbnN0IHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICAgIHRhZ05hbWUsXG4gICAgICAgIGFsbG93ZWRUYWdzOiBBTExPV0VEX1RBR1NcbiAgICAgIH0pO1xuXG4gICAgICAvKiBEZXRlY3QgbVhTUyBhdHRlbXB0cyBhYnVzaW5nIG5hbWVzcGFjZSBjb25mdXNpb24gKi9cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5oYXNDaGlsZE5vZGVzKCkgJiYgIV9pc05vZGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYSBjdXN0b20gZWxlbWVudCB0byBoYW5kbGUgKi9cbiAgICAgICAgaWYgKCFGT1JCSURfVEFHU1t0YWdOYW1lXSAmJiBfaXNCYXNpY0N1c3RvbUVsZW1lbnQodGFnTmFtZSkpIHtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuICAgICAgICBpZiAoS0VFUF9DT05URU5UICYmICFGT1JCSURfQ09OVEVOVFNbdGFnTmFtZV0pIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICBpZiAoY2hpbGROb2RlcyAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lTm9kZShjaGlsZE5vZGVzW2ldLCB0cnVlKSwgZ2V0TmV4dFNpYmxpbmcoY3VycmVudE5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIHdoZXRoZXIgZWxlbWVudCBoYXMgYSB2YWxpZCBuYW1lc3BhY2UgKi9cbiAgICAgIGlmIChjdXJyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgIV9jaGVja1ZhbGlkTmFtZXNwYWNlKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogTWFrZSBzdXJlIHRoYXQgb2xkZXIgYnJvd3NlcnMgZG9uJ3QgZ2V0IGZhbGxiYWNrLXRhZyBtWFNTICovXG4gICAgICBpZiAoKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgfHwgdGFnTmFtZSA9PT0gJ25vZW1iZWQnIHx8IHRhZ05hbWUgPT09ICdub2ZyYW1lcycpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWR8ZnJhbWVzKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAvKiBHZXQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgKi9cbiAgICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgICBhcnJheUZvckVhY2goW01VU1RBQ0hFX0VYUFIsIEVSQl9FWFBSLCBUTVBMSVRfRVhQUl0sIGV4cHIgPT4ge1xuICAgICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIGV4cHIsICcgJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGN1cnJlbnROb2RlLmNsb25lTm9kZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbGNOYW1lIExvd2VyY2FzZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgY29uc3QgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmICFGT1JCSURfQVRUUltsY05hbWVdICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSLCBsY05hbWUpKSA7IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgIC8vIEZpcnN0IGNvbmRpdGlvbiBkb2VzIGEgdmVyeSBiYXNpYyBjaGVjayBpZiBhKSBpdCdzIGJhc2ljYWxseSBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IHRhZ25hbWUgQU5EXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgICAgX2lzQmFzaWNDdXN0b21FbGVtZW50KGxjVGFnKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaywgbGNOYW1lKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sobGNOYW1lKSkgfHxcbiAgICAgICAgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgICAgbGNOYW1lID09PSAnaXMnICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB2YWx1ZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHZhbHVlKSkpIDsgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrIHZhbHVlIGlzIHNhZmUuIEZpcnN0LCBpcyBhdHRyIGluZXJ0PyBJZiBzbywgaXMgc2FmZSAqL1xuICAgICAgfSBlbHNlIGlmIChVUklfU0FGRV9BVFRSSUJVVEVTW2xjTmFtZV0pIDsgZWxzZSBpZiAocmVnRXhwVGVzdChJU19BTExPV0VEX1VSSSQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFLCAnJykpKSA7IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSA7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzQmFzaWNDdXN0b21FbGVtZW50XG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBuYW1lIG9mIHRoZSB0YWcgb2YgdGhlIG5vZGUgdG8gc2FuaXRpemVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSB0YWcgbmFtZSBtZWV0cyB0aGUgYmFzaWMgY3JpdGVyaWEgZm9yIGEgY3VzdG9tIGVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKi9cbiAgICBjb25zdCBfaXNCYXNpY0N1c3RvbUVsZW1lbnQgPSBmdW5jdGlvbiBfaXNCYXNpY0N1c3RvbUVsZW1lbnQodGFnTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZ05hbWUgIT09ICdhbm5vdGF0aW9uLXhtbCcgJiYgdGFnTmFtZS5pbmRleE9mKCctJykgPiAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVBdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVBdHRyaWJ1dGVcbiAgICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIHRvIHNhbml0aXplXG4gICAgICovXG4gICAgY29uc3QgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgICB9ID0gY3VycmVudE5vZGU7XG5cbiAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsZXQgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuXG4gICAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgbmFtZXNwYWNlVVJJLFxuICAgICAgICAgIHZhbHVlOiBhdHRyVmFsdWVcbiAgICAgICAgfSA9IGF0dHI7XG4gICAgICAgIGNvbnN0IGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKG5hbWUpO1xuICAgICAgICBsZXQgdmFsdWUgPSBuYW1lID09PSAndmFsdWUnID8gYXR0clZhbHVlIDogc3RyaW5nVHJpbShhdHRyVmFsdWUpO1xuXG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgaG9va0V2ZW50LmF0dHJOYW1lID0gbGNOYW1lO1xuICAgICAgICBob29rRXZlbnQuYXR0clZhbHVlID0gdmFsdWU7XG4gICAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICAgIGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyID0gdW5kZWZpbmVkOyAvLyBBbGxvd3MgZGV2ZWxvcGVycyB0byBzZWUgdGhpcyBpcyBhIHByb3BlcnR5IHRoZXkgY2FuIHNldFxuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuICAgICAgICB2YWx1ZSA9IGhvb2tFdmVudC5hdHRyVmFsdWU7XG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICBpZiAoaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFJlbW92ZSBhdHRyaWJ1dGUgKi9cbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG4gICAgICAgIGlmICghaG9va0V2ZW50LmtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBXb3JrIGFyb3VuZCBhIHNlY3VyaXR5IGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cbiAgICAgICAgaWYgKCFBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgJiYgcmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcbiAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNhbml0aXplIGF0dHJpYnV0ZSBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICAgIGFycmF5Rm9yRWFjaChbTVVTVEFDSEVfRVhQUiwgRVJCX0VYUFIsIFRNUExJVF9FWFBSXSwgZXhwciA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIGV4cHIsICcgJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgY29uc3QgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIGlmICghX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBGdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gdmlhIG5hbWVzcGFjZSBpc29sYXRpb24sXG4gICAgICAgICAqIFByZWZpeCBpZCBhbmQgbmFtZSBhdHRyaWJ1dGVzIHdpdGggYHVzZXItY29udGVudC1gXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoU0FOSVRJWkVfTkFNRURfUFJPUFMgJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoaXMgdmFsdWVcbiAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgIC8vIFByZWZpeCB0aGUgdmFsdWUgYW5kIGxhdGVyIHJlLWNyZWF0ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhlIHNhbml0aXplZCB2YWx1ZVxuICAgICAgICAgIHZhbHVlID0gU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYICsgdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBIYW5kbGUgYXR0cmlidXRlcyB0aGF0IHJlcXVpcmUgVHJ1c3RlZCBUeXBlcyAqL1xuICAgICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICYmIHR5cGVvZiB0cnVzdGVkVHlwZXMgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIDsgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlKGxjVGFnLCBsY05hbWUpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRIVE1MJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZFNjcmlwdFVSTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBIYW5kbGUgaW52YWxpZCBkYXRhLSogYXR0cmlidXRlIHNldCBieSB0cnktY2F0Y2hpbmcgaXQgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAgICovXG4gICAgY29uc3QgX3Nhbml0aXplU2hhZG93RE9NID0gZnVuY3Rpb24gX3Nhbml0aXplU2hhZG93RE9NKGZyYWdtZW50KSB7XG4gICAgICBsZXQgc2hhZG93Tm9kZSA9IG51bGw7XG4gICAgICBjb25zdCBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVOb2RlSXRlcmF0b3IoZnJhZ21lbnQpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICAgICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG5cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgb2JqZWN0XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHkpIHtcbiAgICAgIGxldCBjZmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgbGV0IGJvZHkgPSBudWxsO1xuICAgICAgbGV0IGltcG9ydGVkTm9kZSA9IG51bGw7XG4gICAgICBsZXQgY3VycmVudE5vZGUgPSBudWxsO1xuICAgICAgbGV0IHJldHVybk5vZGUgPSBudWxsO1xuICAgICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcbiAgICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICAgIElTX0VNUFRZX0lOUFVUID0gIWRpcnR5O1xuICAgICAgaWYgKElTX0VNUFRZX0lOUFVUKSB7XG4gICAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICAgIH1cblxuICAgICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogUmV0dXJuIGRpcnR5IEhUTUwgaWYgRE9NUHVyaWZ5IGNhbm5vdCBydW4gKi9cbiAgICAgIGlmICghRE9NUHVyaWZ5LmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cblxuICAgICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG4gICAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICB9XG5cbiAgICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICAgIC8qIENoZWNrIGlmIGRpcnR5IGlzIGNvcnJlY3RseSB0eXBlZCBmb3IgSU5fUExBQ0UgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIElOX1BMQUNFID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgLyogRG8gc29tZSBlYXJseSBwcmUtc2FuaXRpemF0aW9uIHRvIGF2b2lkIHVuc2FmZSByb290IG5vZGVzICovXG4gICAgICAgIGlmIChkaXJ0eS5ub2RlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhkaXJ0eS5ub2RlTmFtZSk7XG4gICAgICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgncm9vdCBub2RlIGlzIGZvcmJpZGRlbiBhbmQgY2Fubm90IGJlIHNhbml0aXplZCBpbi1wbGFjZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgLyogSWYgZGlydHkgaXMgYSBET00gZWxlbWVudCwgYXBwZW5kIHRvIGFuIGVtcHR5IGRvY3VtZW50IHRvIGF2b2lkXG4gICAgICAgICAgIGVsZW1lbnRzIGJlaW5nIHN0cmlwcGVkIGJ5IHRoZSBwYXJzZXIgKi9cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuICAgICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFTQUZFX0ZPUl9URU1QTEFURVMgJiYgIVdIT0xFX0RPQ1VNRU5UICYmXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJbml0aWFsaXplIHRoZSBkb2N1bWVudCB0byB3b3JrIG9uICovXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcblxuICAgICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gZW1wdHlIVE1MIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cbiAgICAgIGlmIChib2R5ICYmIEZPUkNFX0JPRFkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEdldCBub2RlIGl0ZXJhdG9yICovXG4gICAgICBjb25zdCBub2RlSXRlcmF0b3IgPSBfY3JlYXRlTm9kZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcblxuICAgICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTaGFkb3cgRE9NIGRldGVjdGVkLCBzYW5pdGl6ZSBpdCAqL1xuICAgICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFMTE9XRURfQVRUUi5zaGFkb3dyb290IHx8IEFMTE9XRURfQVRUUi5zaGFkb3dyb290bW9kZSkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICAgIH1cbiAgICAgIGxldCBzZXJpYWxpemVkSFRNTCA9IFdIT0xFX0RPQ1VNRU5UID8gYm9keS5vdXRlckhUTUwgOiBib2R5LmlubmVySFRNTDtcblxuICAgICAgLyogU2VyaWFsaXplIGRvY3R5cGUgaWYgYWxsb3dlZCAqL1xuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UICYmIEFMTE9XRURfVEFHU1snIWRvY3R5cGUnXSAmJiBib2R5Lm93bmVyRG9jdW1lbnQgJiYgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUgJiYgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSAmJiByZWdFeHBUZXN0KERPQ1RZUEVfTkFNRSwgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSkpIHtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSAnPCFET0NUWVBFICcgKyBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICsgJz5cXG4nICsgc2VyaWFsaXplZEhUTUw7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIGFycmF5Rm9yRWFjaChbTVVTVEFDSEVfRVhQUiwgRVJCX0VYUFIsIFRNUExJVF9FWFBSXSwgZXhwciA9PiB7XG4gICAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBleHByLCAnICcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKSA6IHNlcmlhbGl6ZWRIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHNldCB0aGUgY29uZmlndXJhdGlvbiBvbmNlXG4gICAgICogc2V0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjZmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBjbGVhckNvbmZpZ1xuICAgICAqXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgQ09ORklHID0gbnVsbDtcbiAgICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgICAgaWYgKCFDT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcbiAgICAgIGNvbnN0IGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGF0dHIpO1xuICAgICAgcmV0dXJuIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gYWRkIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tGdW5jdGlvbiBmdW5jdGlvbiB0byBleGVjdXRlXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmFkZEhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCwgaG9va0Z1bmN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIGhvb2tGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSByZW1vdmVkKHBvcHBlZCkgaG9va1xuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm4gYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gW107XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZUFsbEhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhvb2tzID0ge307XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG4gIHZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxuICByZXR1cm4gcHVyaWZ5O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXJpZnkuanMubWFwXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9haXItZGF0ZXBpY2tlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWlyLWRhdGVwaWNrZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbUNsYXNzXCI7XG5pbXBvcnQgeyBUb2RvUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi90b2RvUHJvamVjdENsYXNzXCI7XG5pbXBvcnQge1xuICBnZXRQcm9qZWN0TGlua3MsXG4gIHBvcHVsYXRlQ29udGVudCxcbiAgZ2V0RGF0YVByb2plY3RJZCxcbiAgZmluZEFjdGl2ZVByb2plY3RJZCxcbiAgZ2V0RWxlbWVudElkLFxuICBzYW5pdGl6ZVVzZXJEYXRhLFxuICBnZXRFbGVtZW50QnlEYXRhUHJvamVjdElkLFxuICBhZGRBY3RpdmVDbGFzc1RvRWxlbWVudCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQge1xuICBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSxcbiAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsXG4gIHN0b3JhZ2VBdmFpbGFibGUsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG4vKiBERUZBVUxUIERBVEEgQ1JFQVRJT05cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbi8vIENyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0MSArIHRvZG8gaXRlbVxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEVsZW1lbnRzKCkge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBUb2RvUHJvamVjdEl0ZW0oXCJEZWZhdWx0IFByb2plY3RcIiwgdHJ1ZSk7XG4gIGNvbnN0IGRlZmF1bHRJdGVtID0gbmV3IFRvZG9JdGVtKFwiMVwiLCBcIkRlZmF1bHQgVGFza1wiKTtcbiAgZGVmYXVsdFByb2plY3QuYXJyYXkucHVzaChkZWZhdWx0SXRlbSk7XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xufVxuXG4vLyBEZWZhdWx0IHByb2plY3QgdmFyaWFibGVzXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVEZWZhdWx0RWxlbWVudHMoKTtcblxuLyogUFJPSkVDVCBEQVRBIE1BTkFHRU1FTlRcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbi8vIEFycmF5IHRoYXQgaG9sZHMgYWxsIHByb2plY3QgaXRlbXNcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvamVjdHNBcnJheVtdIGlzIE5PVCBlbXB0eVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvamVjdHNBcnJheU5vdEVtcHR5KCkge1xuICByZXR1cm4gcHJvamVjdHNBcnJheS5sZW5ndGggPiAwO1xufVxuXG4vLyBBZGRzIG5ldyBwcm9qZWN0IHRvIHByb2plY3RzQXJycmF5W11cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3RzKC4uLm5ld1Byb2plY3RzKSB7XG4gIG5ld1Byb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gIH0pO1xufVxuXG4vKlxuRmluZHMgYW5kIHJldHVybnMgYSBwcm9qZWN0IGluIHByb2plY3RzQXJyYXlbXSBieSBpdCdzIElELlxuU2FtZSBJRCBpcyBhZGRlZCBhcyBhdHRyaWJ1dGUgdG8gcHJvamVjdCBidXR0b24gYW5kIHRvZG8gaXRlbVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvamVjdEJ5SWQocHJvamVjdElkKSB7XG4gIHJldHVybiBwcm9qZWN0c0FycmF5LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG59XG5cbi8vIENyZWF0ZXMgbmV3IHByb2plY3QgZnJvbSBuYW1lIHN0cmluZyBhbmQgc3RvcmVzIGl0IGluIHByb2plY3RzQXJyYXlbXVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuZFN0b3JlTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFRvZG9Qcm9qZWN0SXRlbShwcm9qZWN0TmFtZSk7XG4gIHN0b3JlUHJvamVjdHMobmV3UHJvamVjdCk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3QuaWQ7XG59XG5cbi8vIEZpbmRzIHRoZSBhY3RpdmUgcHJvamVjdCBhbmQgcmV0dXJucyBpdFxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcblxuICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgaWYgKGlzUHJvamVjdHNBcnJheU5vdEVtcHR5KSB7XG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCAhPT0gcHJvamVjdC5pZCkge1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleE9mUHJvamVjdEluUHJvamVjdHNBcnJheShwcm9qZWN0KSB7XG4gIHJldHVybiBwcm9qZWN0c0FycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gcHJvamVjdCk7XG59XG5cbi8vIFNhbml0aXplcyBpbnB1dCB2YWx1ZSBhbmQgc3RvcmVzIGl0IGFzIG5ldyBuYW1lIGZvciB0aGUgcHJvamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdE5hbWUoZXZlbnQpIHtcbiAgY29uc3Qgc2FuaXRpemVkVmFsdWUgPSBzYW5pdGl6ZVVzZXJEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIGFjdGl2ZVByb2plY3QubmFtZSA9IHNhbml0aXplZFZhbHVlO1xufVxuXG4vLyBHZXQgYWxsIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgcmVjb25zdHJ1Y3QgdGhlbSB3aXRoIHRoZSBQcm9qZWN0SXRlbSBjbGFzcyB0byByZWVzdGFibGlzaCBpbmhlcml0YW5jZSwgbWV0aG9kcywgZXRjLlxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uc3RydWN0QWxsUHJvamVjdE9iamVjdHMoc3RvcmVkUHJvamVjdHNBcnJheSkge1xuICBjb25zdCBuZXdQcm9qZWN0c0FycmF5ID0gW107XG5cbiAgc3RvcmVkUHJvamVjdHNBcnJheS5mb3JFYWNoKChzdG9yZWRQcm9qZWN0KSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgVG9kb1Byb2plY3RJdGVtKFxuICAgICAgc3RvcmVkUHJvamVjdC5uYW1lLFxuICAgICAgc3RvcmVkUHJvamVjdC5hY3RpdmVcbiAgICApO1xuICAgIG5ld1Byb2plY3QuYXJyYXkgPSByZWNvbnN0cnVjdEFsbFRvZG9JdGVtcyhzdG9yZWRQcm9qZWN0LmFycmF5KTtcblxuICAgIG5ld1Byb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RzQXJyYXk7XG59XG5cbi8vIFRha2VzIHRoZSBjdXJyZW50IHByb2plY3RzIGFycmF5LCBlbXB0aWVzIGl0IGFuZCBwdXNoZXMgYWxsIGl0ZW1zIGZyb20gYSBuZXcgYXJyYXkgb250byBpdFxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5T2xkQXJyYXlBbmRQb3B1bGF0ZVdpdGhOZXdJdGVtcyhuZXdBcnJheSkge1xuICBwcm9qZWN0c0FycmF5LnNwbGljZSgwLCBwcm9qZWN0c0FycmF5Lmxlbmd0aCk7XG4gIHByb2plY3RzQXJyYXkucHVzaCguLi5uZXdBcnJheSk7XG59XG5cbi8qIFRPRE8gSVRFTSBEQVRBIE1BTkFHRU1FTlRcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVUb2RvSXRlbU9iamVjdHMoKSB7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgcmV0dXJuIGFjdGl2ZVByb2plY3QuYXJyYXk7XG59XG5cbi8vIENyZWF0ZXMgbmV3IHRvZG8gaXRlbSB3aXRoIGRlZmF1bHQgbmFtZSBhbmQgYWRkcyBpdCB0byB0aGUgYWN0aXZlIHByb2plY3RcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRTdG9yZU5ld1RvZG9JdGVtKCkge1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBjb25zdCBuZXdUb2RvSXRlbSA9IG5ldyBUb2RvSXRlbShhY3RpdmVQcm9qZWN0LmlkLCBcIk5ldyBUYXNrXCIpO1xuICBhY3RpdmVQcm9qZWN0LmFycmF5LnB1c2gobmV3VG9kb0l0ZW0pO1xuXG4gIHJldHVybiBuZXdUb2RvSXRlbS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIYXNUb2RvSXRlbXMocHJvamVjdCkge1xuICByZXR1cm4gcHJvamVjdC5hcnJheS5sZW5ndGggPiAwO1xufVxuXG4vLyBDaGFuZ2VzIHRoZSB0aXRsZSBvZiBhIHRvZG8gaXRlbSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVRvZG9JdGVtVGl0bGUoZXZlbnQpIHtcbiAgY29uc3Qgc2FuaXRpemVkVmFsdWUgPSBzYW5pdGl6ZVVzZXJEYXRhKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gIGNvbnN0IGFjdGl2ZVRvZG9JdGVtSWQgPSBnZXRFbGVtZW50SWQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICBjb25zdCBhY3RpdmVUb2RvSXRlbSA9IGZpbmRUb2RvSXRlbUJ5SWQoYWN0aXZlVG9kb0l0ZW1JZCk7XG4gIGFjdGl2ZVRvZG9JdGVtLnRpdGxlID0gc2FuaXRpemVkVmFsdWU7XG59XG5cbi8vIEZpbmRzIGEgdG9kbyBpdGVtIGJ5IGl0J3MgSUQgd2l0aGluIGFuIGFjdGl2ZSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gZmluZFRvZG9JdGVtQnlJZChpdGVtSWQpIHtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgcmV0dXJuIGFjdGl2ZVByb2plY3QuYXJyYXkuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaXRlbUlkKTtcbn1cblxuLy8gUmVtb3ZlcyBhIHRvZG8gaXRlbSBieSBpdCdzIElEIGZyb20gYW4gYWN0aXZlIHByb2plY3RcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvSXRlbUJ5SWQoaXRlbUlkKSB7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIGNvbnN0IGl0ZW1JbmRleCA9IGFjdGl2ZVByb2plY3QuYXJyYXkuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xuICBhY3RpdmVQcm9qZWN0LmFycmF5LnNwbGljZShpdGVtSW5kZXgsIDEpO1xufVxuXG4vLyBTYXZlcyBhIGRhdGUgc2VsZWN0ZWQgdmlhIGRhdGVwaWNrZXIgaW4gdGhlIHRvZG8gaXRlbSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9kb0l0ZW1EYXRlKHRvZG9JdGVtSWQsIGRhdGUpIHtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgY29uc3QgdG9kb0l0ZW0gPSBmaW5kVG9kb0l0ZW1CeUlkKHRvZG9JdGVtSWQpO1xuXG4gIHRvZG9JdGVtLmR1ZURhdGUgPSBkYXRlO1xuICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbnN0cnVjdEFsbFRvZG9JdGVtcyhwcm9qZWN0QXJyYXkpIHtcbiAgY29uc3QgbmV3UHJvamVjdEFycmF5ID0gW107XG5cbiAgcHJvamVjdEFycmF5LmZvckVhY2goKHN0b3JlZFRvZG9JdGVtKSA9PiB7XG4gICAgbGV0IG5ld1RvZG9JdGVtID0gbmV3IFRvZG9JdGVtKFxuICAgICAgc3RvcmVkVG9kb0l0ZW0ucHJvamVjdElkLFxuICAgICAgc3RvcmVkVG9kb0l0ZW0udGl0bGUsXG4gICAgICBzdG9yZWRUb2RvSXRlbS5kdWVEYXRlLFxuICAgICAgc3RvcmVkVG9kb0l0ZW0uY2hlY2tlZCxcbiAgICAgIHN0b3JlZFRvZG9JdGVtLmlkXG4gICAgKTtcblxuICAgIG5ld1Byb2plY3RBcnJheS5wdXNoKG5ld1RvZG9JdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RBcnJheTtcbn1cbiIsImltcG9ydCB7XG4gIGdldEFjdGl2ZVByb2plY3QsXG4gIGdldEFjdGl2ZVRvZG9JdGVtT2JqZWN0cyxcbiAgcHJvamVjdHNBcnJheSxcbiAgc2F2ZVRvZG9JdGVtRGF0ZSxcbn0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IERPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XG5pbXBvcnQgQWlyRGF0ZXBpY2tlciBmcm9tIFwiYWlyLWRhdGVwaWNrZXJcIjtcbmltcG9ydCBcImFpci1kYXRlcGlja2VyL2Fpci1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0IGxvY2FsZUVuIGZyb20gXCJhaXItZGF0ZXBpY2tlci9sb2NhbGUvZW5cIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGVtcHR5VG9kb0xpc3RJbWFnZSBmcm9tIFwiLi9pbWcvdW5kcmF3X25vX2RhdGFfcmVfa3dibC5zdmdcIjtcbmltcG9ydCBlbXB0eVByb2plY3RzQXJyYXlJbWFnZSBmcm9tIFwiLi9pbWcvdW5kcmF3X2FkZF9maWxlc19yZV92MDlnLnN2Z1wiO1xuXG4vKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuRE9NIEVMRU1FTlQgU0VMRUNUSU9OXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50IC50b2RvLWNvbnRhaW5lclwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROYXYoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RMaW5rcygpIHtcbiAgY29uc3QgbmF2ID0gZ2V0TmF2KCk7XG4gIHJldHVybiBuYXYucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudEhlYWRsaW5lQ29udGFpbmVyKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRsaW5lXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnRIZWFkbGluZSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvSXRlbXMoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1pdGVtXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1Rhc2tCdXR0b24oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWl0ZW1cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UHJvamVjdEJ1dHRvbigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVtb3ZlUHJvamVjdEJ1dHRvbigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlLXByb2plY3RcIik7XG59XG5cbi8qXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5OQVYgVVBEQVRFUyAoUHJvamVjdCBMaXN0KVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbi8qXG5BY2Nlc3NlcyB0aGUgcHJvamVjdHMgYXJyYXksIHdyYXBzIGFsbCBwcm9wZXJ0aWVzIGluIGEgZGl2IGNvbnRhaW5lciBhbmQgYXBwZW5kcyBpdCB0byB0aGUgPG5hdj4uXG5UaGUgbmFtZSBwcm9wZXJ0eSBvZiBhbGwgcHJvamVjdHMgaXMgd3JhcHBlZCBpbiBhIHNwYW4gdGFnIGFuZCBhbiBpbnB1dCBmaWVsZC4gVGhvc2UgYXJlIGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGdldE5hdigpO1xuICBuYXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KTtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlSWNvbigpO1xuICAgIGxldCBzcGFuID0gY3JlYXRlU3Bhbihwcm9qZWN0KTtcbiAgICBsZXQgaW5wdXQgPSBjcmVhdGVJbnB1dEZpZWxkKHByb2plY3QpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9KTtcbn1cblxuLyogXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5DT05URU5UIFVQREFURVMgKHRvZG8gaXRlbSBsaXN0KVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbi8qIFxuRGlzcGxheXMgYWxsIHRvZG8gaXRlbXMgYXNzb2NpYXRlZCB3aXRoIGEgcHJvamVjdCBvYmplY3QgaW5zaWRlIHRoZSBjb250ZW50IHNlY3Rpb24uXG5BbGwgcHJvcGVydGllcyBhcmUgd3JhcHBlZCBpbiBhIGRpdiBjb250YWluZXIuXG5UaGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGFyZSB3cmFwcGVkIGluIGEgc3BhbiB0YWcgYW5kIGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXJcbiovXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDb250ZW50KHByb2plY3QpIHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHByb2plY3QuYXJyYXkuZm9yRWFjaCgodG9kb0l0ZW0pID0+IHtcbiAgICBjb25zdCB0b2RvSXRlbUNvbnRhaW5lciA9IGNyZWF0ZVRvZG9JdGVtQ29udGFpbmVyKHRvZG9JdGVtKTtcbiAgICBjb25zdCB0b2RvRGF0ZUlucHV0ID0gY3JlYXRlVG9kb0l0ZW1EYXRlSW5wdXQodG9kb0l0ZW0uaWQpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW1DaGVja0NvbXBsZXRlID0gY3JlYXRlVG9kb0l0ZW1DaGVja0NvbXBsZXRlKCk7XG4gICAgdG9kb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW1DaGVja0NvbXBsZXRlKTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0b2RvSXRlbSkge1xuICAgICAgLyogXG4gICAgICAgIENoZWNrcyBpZiB0aGUga2V5IGJlbG9uZ3MgdG8gdGhlIGl0ZW0ncyBpbnN0YW5jZSBhbmQgcmVuZGVycyBpdCBpbiB0aGUgRE9NLlxuICAgICAgICBJdCBhbHNvIGNoZWNrcyBpZiB0aGUga2V5IGlzIG5vdCBwYXJ0IG9mIHRoZSBpc0hpZGRlblByb3BlcnR5IGFycmF5LlxuICAgICAgICAqL1xuICAgICAgaWYgKHRvZG9JdGVtLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRvZG9JdGVtLmlzSGlkZGVuUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAoa2V5ID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbVRpdGxlV3JhcHBlciA9IGNyZWF0ZVRvZG9JdGVtVGl0bGVXcmFwcGVyKCk7XG4gICAgICAgICAgdG9kb0l0ZW1UaXRsZVdyYXBwZXIudGV4dENvbnRlbnQgPSB0b2RvSXRlbVtrZXldO1xuICAgICAgICAgIHRvZG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtVGl0bGVXcmFwcGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAgICAgaWYgKHRvZG9JdGVtW2tleV0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC52YWx1ZSA9IHRvZG9JdGVtW2tleV07XG5cbiAgICAgICAgICAgIGlmICh0b2RvSXRlbVtrZXldIDwgZGF0ZSkge1xuICAgICAgICAgICAgICB0b2RvRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbUtleVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICB0b2RvSXRlbUtleVdyYXBwZXIudGV4dENvbnRlbnQgPSB0b2RvSXRlbVtrZXldO1xuICAgICAgICAgIHRvZG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtS2V5V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2tzIGlmIGEgdG9kbyBpdGVtIGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgICAgIGlmICh0b2RvSXRlbVtrZXldID09PSBcInRydWVcIikge1xuICAgICAgICAgIHRvZG9JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9kb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGVJbnB1dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbUNvbnRhaW5lcik7XG4gIH0pO1xuICAvKiB9IGVsc2Uge1xuICAgIHNob3dFbXB0eVRvZG9MaXN0TWVzc2FnZSgpO1xuICB9ICovXG4gIHJlbW92ZURhdGVwaWNrZXJzRnJvbVRvZG9JdGVtcygpO1xuICBhZGREYXRlcGlja2Vyc1RvVG9kb0l0ZW1zKCk7XG59XG5cbi8qXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5ET00gRUxFTUVOVCBDUkVBVElPTlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbi8vIENyZWF0ZXMgPHNwYW4+IHRoYXQgY29udGFpbnMgdGhlIHByamVjdCBuYW1lXG5mdW5jdGlvbiBjcmVhdGVTcGFuKHByb2plY3QpIHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgcmV0dXJuIHNwYW47XG59XG5cbi8vIENyZWF0ZXMgaWNvbiB0aGF0IHJlcHJlc2VudHMgYW55IHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZUljb24oKSB7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICBpY29uLnRleHRDb250ZW50ID0gXCLimLBcIjtcblxuICByZXR1cm4gaWNvbjtcbn1cblxuLy8gQ3JlYXRlcyBhbiBpbnB1dCBmaWVsZCBhbmQgc2V0cyBhIHByb2plY3QgbmFtZSBhcyBpdCdzIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVJbnB1dEZpZWxkKHByb2plY3QpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgaW5wdXQubWF4TGVuZ3RoID0gXCIzMFwiO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgaW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgcmV0dXJuIGlucHV0O1xufVxuXG4vLyBDcmVhdGVzIGEgZGl2IGNvbnRhaW5lciBmb3IgYSBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5pZCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlcyBhIGRpdiBjb250YWluZXIgZm9yIGEgdG9kbyBpdGVtXG5mdW5jdGlvbiBjcmVhdGVUb2RvSXRlbUNvbnRhaW5lcih0b2RvSXRlbSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCB0b2RvSXRlbS5wcm9qZWN0SWQpO1xuICBjb250YWluZXIuaWQgPSB0b2RvSXRlbS5pZDtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vKlxuQ3JlYXRlcyBhIHdyYXBwZXIgZm9yIGEgdG9kbyBpdGVtIHRpdGxlLlxuTWFrZXMgdGhlIHRpdGxlIGVkaXRhYmxlIGJ5IGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4qL1xuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1UaXRsZVdyYXBwZXIoKSB7XG4gIGNvbnN0IHRpdGxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtX19uYW1lXCIpO1xuICB0aXRsZVdyYXBwZXIuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG4gIHRpdGxlV3JhcHBlci50YWJJbmRleCA9IFwiMVwiO1xuXG4gIHJldHVybiB0aXRsZVdyYXBwZXI7XG59XG5cbi8vIENyZWF0ZXMgYSByYWRpbyBidXR0b24gdG8gbWFyayBhIHRvZG8gaXRlbSBhcyBjb21wbGV0ZVxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1DaGVja0NvbXBsZXRlKCkge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImNoZWNrbWFyay1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjaGVja21hcmtcIik7XG5cbiAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbi8vIENyZWF0ZXMgYSBkYXRlIGlucHV0IGZpZWxkIHRvIGF0dGFjaCB0aGUgQWlyRGF0ZXBpY2tlclxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1EYXRlSW5wdXQoaWQpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIk5vIGRhdGUgc2VsZWN0ZWRcIjtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChgZGF0ZXBpY2tlci0ke2lkfWApO1xuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuY29uc3QgZGF0ZXBpY2tlckluc3RhbmNlcyA9IFtdO1xuXG4vKlxuQ3JlYXRlcyBhbiBBaXJEYXRlcGlja2VyIGluc3RhbmNlLlxuQSBkYXRlIHNlbGVjdGVkIHZpYSB0aGUgcGlja2VyIGlzIHN0b3JlZCBpbiB0aGUgdG9kbyBpdGVtIGR1ZURhdGUgcHJvcGVydHkuXG5JZiBkdWVEYXRlIGlzbid0IGRlZmluZWQsIG5vIGRhdGUgd2lsbCBiZSBwcmVzZWxlY3RlZC5cbkBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBJRCBvZiB0aGUgdG9kbyBpdGVtIHRoZSBkYXRlcGlja2VyIHdpbGwgYmUgYXR0YWNoZWQuXG5AcGFyYW0ge3N0cmluZ30gZHVlRGF0ZSAtIE9wdGlvbmFsIGRhdGUgaWYgcHJvdmlkZWQgaXMgcHJlc2VsZWN0ZWQgaW4gdGhlIGRhdGVwaWNrZXIuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRGF0ZVBpY2tlck9iamVjdChpZCwgZHVlRGF0ZSkge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbG9jYWxlOiBsb2NhbGVFbixcbiAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgZGF0ZUZvcm1hdDogXCJ5eXl5LU1NLWRkXCIsXG4gICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXG4gICAgLy8gRmlyZXMgd2hlbiB1c2VyIHNlbGVjdHMgYSBkYXRlIGluIHRoZSBkYXRlcGlja2VyXG4gICAgb25TZWxlY3Q6ICh7IGRhdGUsIGZvcm1hdHRlZERhdGUgfSkgPT4ge1xuICAgICAgLy8gU2F2ZXMgdGhlIHNlbGVjdGVkIGRhdGUgaW4gdGhlIHRvZG8gaXRlbSdzIGR1ZURhdGUgcHJvcGVydHlcbiAgICAgIGlmIChkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2F2ZVRvZG9JdGVtRGF0ZShpZCwgZm9ybWF0dGVkRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIaWRlIHRoZSBkYXRlcGlja2VyIGlmIGEgZGF0ZSB3YXMgZGVzZWxlY3RlZCAocmV0dXJucyB1bmRlZmluZWQpXG4gICAgICAgIGRhdGVwaWNrZXIuaGlkZSgpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgLy8gSWYgZHVlRGF0ZSBoYXMgYmVlbiBzZXQsIHByZXNlbGVjdCB0aGlzIGRhdGUgaW4gdGhlIGRhdGVwaWNrZXJcbiAgaWYgKGR1ZURhdGUpIHtcbiAgICBjb25maWcuc2VsZWN0ZWREYXRlcyA9IFtkdWVEYXRlXTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIG5ldyBkYXRlcGlja2VyIGluc3RhbmNlIHdpdGggdGhlIGFib3ZlIGNvbmZpZyBzZXR0aW5nc1xuICBjb25zdCBkYXRlcGlja2VyID0gbmV3IEFpckRhdGVwaWNrZXIoYC5kYXRlcGlja2VyLSR7aWR9YCwgY29uZmlnKTtcblxuICBkYXRlcGlja2VySW5zdGFuY2VzLnB1c2goZGF0ZXBpY2tlcik7XG5cbiAgcmV0dXJuIGRhdGVwaWNrZXI7XG59XG5cbi8vIEF0dGFjaGVzIGEgZGF0ZXBpY2tlciB0byB0aGUgdG9kbyBpdGVtcyBpbiB0aGUgRE9NXG5mdW5jdGlvbiBhZGREYXRlcGlja2Vyc1RvVG9kb0l0ZW1zKCkge1xuICBjb25zdCB0b2RvSXRlbXMgPSBnZXRBY3RpdmVUb2RvSXRlbU9iamVjdHMoKTtcblxuICB0b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNyZWF0ZURhdGVQaWNrZXJPYmplY3QoaXRlbS5pZCwgaXRlbS5kdWVEYXRlKTtcbiAgfSk7XG59XG5cbi8vIFJlbW92ZXMgZGF0ZXBpY2tlcnMgZnJvbSB0aGUgdG9kbyBpdGVtcyBpbiB0aGUgRE9NXG5mdW5jdGlvbiByZW1vdmVEYXRlcGlja2Vyc0Zyb21Ub2RvSXRlbXMoKSB7XG4gIGRhdGVwaWNrZXJJbnN0YW5jZXMubGVuZ3RoID0gMDtcbn1cblxuLy8gQ3JlYXRlcyBhIG1vZGFsIGJveCB0byBjb25maXJtIHJlbW92aW5nIHByb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWxCb3goKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q29udGVudEhlYWRsaW5lKCkudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbW9kYWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm94XCIpO1xuICBtb2RhbE92ZXJsYXkuYXBwZW5kQ2hpbGQobW9kYWxCb3gpO1xuXG4gIGNvbnN0IG1vZGFsSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG1vZGFsSGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlJlbW92ZSBQcm9qZWN0XCI7XG4gIG1vZGFsQm94LmFwcGVuZENoaWxkKG1vZGFsSGVhZGxpbmUpO1xuXG4gIGNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtb2RhbFRleHQuaW5uZXJIVE1MID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgJHtwcm9qZWN0TmFtZX0/YDtcbiAgbW9kYWxCb3guYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEJveC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcbiAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29uZmlybVwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY2FuY2VsXCIpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICByZXR1cm4gbW9kYWxPdmVybGF5O1xufVxuXG4vLyBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgbWVzc2FnZSB3aXRoIGltYWdlICsgdGV4dFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyV2l0aEltYWdlKGltZywgbWVzc2FnZSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5LXRvZG8tbGlzdFwiKTtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IGltZztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlcyBhIHBsYWNlaG9sZGVyIG1lc3NhZ2Ugd2hlbiB0aGVyZSBhcmUgbm8gdG9kbyBpdGVtc1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVRvZG9MaXN0TWVzc2FnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZVBsYWNlaG9sZGVyV2l0aEltYWdlKFxuICAgIGVtcHR5VG9kb0xpc3RJbWFnZSxcbiAgICBcIlRoZXJlIGFyZSBubyBhY3RpdmUgdG9kbyBpdGVtcy5cIlxuICApO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG59XG5cbi8vIENyZWF0ZXMgYSBwbGFjZWhvbGRlciBtZXNzYWdlIHdoZW4gdGhlcmUgYXJlIG5vIHByb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VtcHR5UHJvamVjdHNBcnJheU1lc3NhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVQbGFjZWhvbGRlcldpdGhJbWFnZShcbiAgICBlbXB0eVByb2plY3RzQXJyYXlJbWFnZSxcbiAgICBcIlN0YXJ0IGJ5IGFkZGluZyBhIHByb2plY3QuXCJcbiAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSGlnaGxpZ2h0Q2xhc3NUb05ld1Byb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBnZXROZXdQcm9qZWN0QnV0dG9uKCk7XG5cbiAgaWYgKCFuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImhpZ2hsaWdodGVkXCIpKSB7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodENsYXNzRnJvbU5ld1Byb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBnZXROZXdQcm9qZWN0QnV0dG9uKCk7XG5cbiAgaWYgKG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlnaGxpZ2h0ZWRcIikpIHtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKTtcbiAgfVxufVxuXG4vKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuRE9NIEVMRU1FTlQgTUFOSVBVTEFUSU9OXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuLy8gUmVtb3ZlcyBhbGwgXCJhY3RpdmVcIiBjbGFzc2VzIGZyb20gdGhlIGxpbmtzIHRoYXQgcmVwcmVzZW50IHRoZSBwcm9qZWN0IG9iamVjdHNcbmZ1bmN0aW9uIHJlbW92ZUFsbEFjdGl2ZUNsYXNzZXMoKSB7XG4gIGNvbnN0IHByb2plY3RMaW5rcyA9IGdldFByb2plY3RMaW5rcygpO1xuICBwcm9qZWN0TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn1cblxuLy8gQWRkcyB0aGUgY2xhc3MgXCJhY3RpdmVcIiB0byBhIGxpbmsgdGhhdCByZXByZXNlbnRzIGEgcHJvamVjdCBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBhZGRBY3RpdmVDbGFzc1RvRWxlbWVudChodG1sRWxlbWVudCkge1xuICByZW1vdmVBbGxBY3RpdmVDbGFzc2VzKCk7XG4gIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBY3RpdmVDbGFzc1RvQWN0aXZlUHJvamVjdCgpIHtcbiAgaWYgKGdldEFjdGl2ZVByb2plY3QoKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdExpbmsgPSBnZXRFbGVtZW50QnlEYXRhUHJvamVjdElkKGFjdGl2ZVByb2plY3QuaWQpO1xuXG4gICAgYWRkQWN0aXZlQ2xhc3NUb0VsZW1lbnQoYWN0aXZlUHJvamVjdExpbmspO1xuXG4gICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gIH1cbn1cblxuLy8gU2V0cyB0aGUgaGVhZGxpbmUgYWJvdmUgdGhlIHRvZG8gaXRlbXMgdG8gdGhlIHRpdGxlIHByb3BlcnR5IG9mIHRoZSBhY3RpdmUgcHJvamVjdCBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb250ZW50SGVhZGxpbmUocHJvamVjdCkge1xuICBjb25zdCBoZWFkbGluZSA9IGdldENvbnRlbnRIZWFkbGluZSgpO1xuXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiXCI7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGlmIChoZWFkbGluZS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1wcm9qZWN0XCIpKSB7XG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXByb2plY3RcIik7XG4gIH1cbn1cblxuLy8gRGlzcGxheXMgYSBcIk5vIHByb2plY3Qgc2VsZWN0ZWRcIiBtZXNzYWdlIGZvciB0aGUgcHJvamVjdCBwYWdlIHRpdGxlXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VtcHR5UG9qZWN0UGFnZUhlYWRsaW5lKCkge1xuICBjb25zdCBoZWFkbGluZSA9IGdldENvbnRlbnRIZWFkbGluZSgpO1xuXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJuby1wcm9qZWN0XCIpO1xufVxuXG4vLyBGb2N1c2VzIHRoZSBwb2ludGVyIG9uIGEgc3BlY2lmaWMgdG9kbyBlbGVtZW50IGlkZW50aWZpZWQgYnkgaXQncyBJRCBhbmQgY2xlYXJzIGl0J3MgdGV4dENvbnRlbnRcbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0VsZW1lbnRBbmRDbGVhckNvbnRlbnQoaWQpIHtcbiAgY29uc3QgbmV3VG9kb0l0ZW0gPSBnZXRUb2RvSXRlbU5hbWVGaWVsZEJ5SWQoaWQpO1xuICBuZXdUb2RvSXRlbS5mb2N1cygpO1xuICBuZXdUb2RvSXRlbS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbi8vIEdldHMgdGhlIHZhbHVlIGZyb20gdGhlIHByb2plY3QgbmFtZSBpbnB1dCBmaWVsZCwgc2FuaXRpemVzIGl0IGFuZCBzZXRzIGl0IGFzIHRleHRDb250ZW50IGZvciB0aGUgcHJvamVjdHMgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3ROYW1lKGV2ZW50KSB7XG4gIGNvbnN0IHByb2plY3RMaW5rID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TGluay5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3Qgc2FuaXRpemVkVmFsdWUgPSBzYW5pdGl6ZVVzZXJEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9IHNhbml0aXplZFZhbHVlO1xufVxuXG4vLyBBZGRzIHRoZSBjbGFzcyBcImRpc2FibGVkXCIgdG8gdGhlIHJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVSZW1vdmVQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZ2V0UmVtb3ZlUHJvamVjdEJ1dHRvbigpO1xuXG4gIGlmICghcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xuICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICB9XG59XG5cbi8vIFJlbW92ZXMgdGhlIGNsYXNzIFwiZGlzYWJsZWRcIiBmcm9tIHRoZSByZW1vdmUgcHJvamVjdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVSZW1vdmVQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZ2V0UmVtb3ZlUHJvamVjdEJ1dHRvbigpO1xuXG4gIGlmIChyZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XG4gICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIH1cbn1cblxuLy8gQWRkcyB0aGUgY2xhc3MgXCJkaXNhYmxlZFwiIHRvIHRoZSBhZGQgbmV3IHRhc2sgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZU5ld1Rhc2tCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBnZXROZXdUYXNrQnV0dG9uKCk7XG5cbiAgaWYgKCFuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XG4gICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gIH1cbn1cblxuLy8gUmVtb3ZlcyB0aGUgY2xhc3MgXCJkaXNhYmxlZFwiIGZyb20gdGhlIGFkZCBuZXcgdGFzayBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVOZXdUYXNrQnV0dG9uKCkge1xuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZ2V0TmV3VGFza0J1dHRvbigpO1xuXG4gIGlmIChuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XG4gICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIH1cbn1cblxuLyogXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5ET00gRUxFTUVOVCBEQVRBIFJFVFJJRVZBTFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbi8vIFJldHJpZXZlcyB0aGUgZGF0YS1wcm9qZWN0LWlkIGF0dHJpYnV0ZSBmcm9tIGFuIGVsZW1lbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhUHJvamVjdElkKGh0bWxFbGVtZW50KSB7XG4gIHJldHVybiBodG1sRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG59XG5cbi8vIFJldHJpZXZlcyBhbiBlbGVtZW50IGJ5IGl0J3MgZGF0YS1wcm9qZWN0LWlkXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEJ5RGF0YVByb2plY3RJZChpZCkge1xuICBjb25zdCBhbGxQcm9qZWN0TGlua3MgPSBnZXRQcm9qZWN0TGlua3MoKTtcbiAgbGV0IHByb2plY3RMaW5rID0gbnVsbDtcblxuICBhbGxQcm9qZWN0TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxldCBkYXRhUHJvamVjdElkID0gZ2V0RGF0YVByb2plY3RJZChsaW5rKTtcblxuICAgIGlmIChkYXRhUHJvamVjdElkID09PSBpZCkge1xuICAgICAgcHJvamVjdExpbmsgPSBsaW5rO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RMaW5rO1xufVxuXG4vLyBSZXRyaWV2ZXMgdGhlIElEIGZyb20gYW4gSFRNTCBlbGVtZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudElkKGh0bWxFbGVtZW50KSB7XG4gIHJldHVybiBodG1sRWxlbWVudC5pZDtcbn1cblxuLy8gUmV0cmlldmVzIEhUTUwgZWxlbWVudCBieSBJRFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59XG5cbi8vIFJldHJpZXZlcyBhbiBIVE1MIGVsZW1lbnQgYnkgaXRzIElEXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0l0ZW1OYW1lRmllbGRCeUlkKGlkKSB7XG4gIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICByZXR1cm4gdG9kb0l0ZW0ucXVlcnlTZWxlY3RvcihcIi50b2RvLWl0ZW1fX25hbWVcIik7XG59XG5cbi8vIENoZWNrcyBhbGwgbGlua3MgdGhhdCByZWZlcmVuY2UgcHJvamVjdCBvYmplY3RzIGFuZCByZXR1cm5zIHRoZSBvbmUgdGhhdCBoYXMgdGhlIFwiYWN0aXZlXCIgY2xhc3MuXG5leHBvcnQgZnVuY3Rpb24gZmluZEFjdGl2ZVByb2plY3RJZCgpIHtcbiAgY29uc3QgcHJvamVjdExpbmtzID0gZ2V0UHJvamVjdExpbmtzKCk7XG4gIGxldCBhY3RpdmVQcm9qZWN0SWQgPSBcIlwiO1xuXG4gIHByb2plY3RMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBhY3RpdmVQcm9qZWN0SWQgPSBnZXREYXRhUHJvamVjdElkKGxpbmspO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFjdGl2ZVByb2plY3RJZDtcbn1cblxuLyogXG5SZW1vdmVzIHRoZSBjbGFzcyBcImhpZGVcIiBmcm9tIHRoZSBwcm9qZWN0IG5hbWUgaW5wdXQgZmllbGQsIG1ha2luZyBpdCB2aXNpYmxlLlxuQWRkcyB0aGUgY2xhc3MgXCJoaWRlXCIgdG8gdGhlIHByb2plY3QnUyBuYW1lIHdyYXBwaW5nIHNwYW4gYXQgdGhlIHNhbWUgdGltZS5cbkZpbm5hbGx5IHNlbGVjdHMgdGhlIHRleHQgaW5zaWRlIHRoZSBpbnB1dCBmaWVsZCBmb3IgY29udmVuaWVuY2UuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0SW5wdXRGaWVsZChldmVudCkge1xuICBjb25zdCBwcm9qZWN0TGluayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBuYW1lID0gcHJvamVjdExpbmsucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IGlucHV0ID0gcHJvamVjdExpbmsucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuXG4gIG5hbWUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBpbnB1dC5zZWxlY3QoKTtcbn1cblxuLyogXG5BZGRzIHRoZSBjbGFzcyBcImhpZGVcIiB0byB0aGUgcHJvamVjdCBuYW1lIGlucHV0IGZpZWxkLCB0aHVzIGhpZGluZyBpdCBmcm9tIGRpc3BsYXkuXG5SZW1vdmVzIHRoZSBjbGFzcyBcImhpZGVcIiBmcm9tIHRoZSBwcm9qZWN0J3MgbmFtZSB3cmFwcGluZyBzcGFuIGF0IHRoZSBzYW1lIHRpbWUuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQcm9qZWN0SW5wdXRGaWVsZChldmVudCkge1xuICBjb25zdCBwcm9qZWN0TGluayA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBuYW1lID0gcHJvamVjdExpbmsucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IGlucHV0ID0gcHJvamVjdExpbmsucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuXG4gIG5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xufVxuXG4vLyBDaGVja3MgaWYgYW4gZXZlbnQgaGFwcGVuZWQgb24gdGhlIHRpdGxlIG9mIGEgdG9kbyBpdGVtXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RvSXRlbVRpdGxlKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50YXJnZXQubWF0Y2hlcyhcIi50b2RvLWl0ZW1fX25hbWVcIik7XG59XG5cbi8vIENoZWNrcyBpZiBhbiBldmVudCBoYXBwZW5lZCBvbiAucHJvamVjdC1pdGVtIG9yIGEgY2hpbGQgb2YgLnByb2plY3QtaXRlbVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvamVjdExpbmsoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QtaXRlbVwiKTtcbn1cblxuLy8gQ2hlY2tzIGlmIGV2ZW50LnRhcmdldCBpcyB0aGUgbmFtZSBvZiBhIHByb2plY3QgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9qZWN0TmFtZShldmVudCkge1xuICByZXR1cm4gZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIucHJvamVjdC1pdGVtIHNwYW5cIik7XG59XG5cbi8vIENoZWNrcyBpZiBldmVudC50YXJnZXQgaXMgdGhlIGlucHV0IGZpZWxkIGluIGEgcHJvamVjdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2plY3RJbnB1dChldmVudCkge1xuICByZXR1cm4gZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIucHJvamVjdC1pdGVtIGlucHV0XCIpO1xufVxuXG4vLyBDaGVja3MgaWYgdGhlIHRleHRDb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBpc1RleHRDb250ZW50RW1wdHkoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIjtcbn1cblxuLyogREFUQSBJTlBVVFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xuLy8gU2FuaXRpemVzIGRhdGEgZW50ZXJlZCBieSB1c2VycyB0byBwcmV2ZW50IFhTUyBhdHRhY2tzXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVVc2VyRGF0YShkYXRhKSB7XG4gIHJldHVybiBET01QdXJpZnkuc2FuaXRpemUoZGF0YSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdCA9IFwidGVzdFwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpIHtcbiAgaWYgKGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2plY3RzQXJyYXlJblN0b3JhZ2UoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikgIT09IG51bGw7XG59XG4iLCJleHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xuICBzdGF0aWMgaGlkZGVuUHJvcGVydGllcyA9IFtcInByb2plY3RJZFwiLCBcImlkXCIsIFwiY2hlY2tlZFwiXTsgLy8gRGVmaW5lIHByb3BlcnRpZXMsIHRoYXQgc2hvdWxkIG5vdCBiZSB2aXNpYmxlIHRvIHRoZSBwdWJsaWNcbiAgc3RhdGljIGdsb2JhbElkID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQsIHRpdGxlID0gXCJOZXcgVGFza1wiLCBkdWVEYXRlID0gXCJcIiwgY2hlY2tlZCA9IFwiZmFsc2VcIikge1xuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgVG9kb0l0ZW0uZ2xvYmFsSWQgKz0gMTsgLy8gaW5jcmVtZW50IHN0YXRpYyB2YXJpYWJsZSBnbG9iYWxJZCB3aXRoIGVhY2ggbmV3IGluc3RhbmNlXG4gICAgdGhpcy5pZCA9IFRvZG9JdGVtLmdsb2JhbElkLnRvU3RyaW5nKCk7IC8vIGFzc2lnbnMgdW5pcXVlIGlkIHRvIGV2ZXJ5IG5ldyB0b2RvIGl0ZW1cbiAgfVxuXG4gIGlzSGlkZGVuUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICByZXR1cm4gVG9kb0l0ZW0uaGlkZGVuUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSk7XG4gIH1cbn1cblxuVG9kb0l0ZW0ucHJvdG90eXBlLnJlc2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudGl0bGUgPSBcIk5ldyBUYXNrXCI7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFRvZG9Qcm9qZWN0SXRlbSB7XG4gIHN0YXRpYyBnbG9iYWxJZCA9IDA7XG5cbiAgY29uc3RydWN0b3IobmFtZSA9IFwiTmV3IFByb2plY3RcIiwgYWN0aXZlID0gZmFsc2UpIHtcbiAgICBUb2RvUHJvamVjdEl0ZW0uZ2xvYmFsSWQgKz0gMTtcbiAgICB0aGlzLmlkID0gVG9kb1Byb2plY3RJdGVtLmdsb2JhbElkLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgZ2V0TmF2LFxuICBnZXRDb250ZW50LFxuICBnZXRQcm9qZWN0TGlua3MsXG4gIHJlZnJlc2hOYXYsXG4gIHBvcHVsYXRlQ29udGVudCxcbiAgZ2V0RGF0YVByb2plY3RJZCxcbiAgZ2V0RWxlbWVudElkLFxuICBmb2N1c0VsZW1lbnRBbmRDbGVhckNvbnRlbnQsXG4gIGlzVG9kb0l0ZW1UaXRsZSxcbiAgaXNUZXh0Q29udGVudEVtcHR5LFxuICBnZXROZXdUYXNrQnV0dG9uLFxuICBnZXROZXdQcm9qZWN0QnV0dG9uLFxuICBpc1Byb2plY3RMaW5rLFxuICBpc1Byb2plY3ROYW1lLFxuICBpc1Byb2plY3RJbnB1dCxcbiAgdXBkYXRlUHJvamVjdE5hbWUsXG4gIGhpZGVQcm9qZWN0SW5wdXRGaWVsZCxcbiAgc2hvd1Byb2plY3RJbnB1dEZpZWxkLFxuICBjcmVhdGVNb2RhbEJveCxcbiAgZ2V0Q29udGVudEhlYWRsaW5lQ29udGFpbmVyLFxuICBnZXRCb2R5LFxuICBzaG93RW1wdHlQb2plY3RQYWdlSGVhZGxpbmUsXG4gIGRpc2FibGVOZXdUYXNrQnV0dG9uLFxuICBkaXNhYmxlUmVtb3ZlUHJvamVjdEJ1dHRvbixcbiAgZW5hYmxlTmV3VGFza0J1dHRvbixcbiAgZW5hYmxlUmVtb3ZlUHJvamVjdEJ1dHRvbixcbiAgc2hvd0VtcHR5VG9kb0xpc3RNZXNzYWdlLFxuICBhZGRIaWdobGlnaHRDbGFzc1RvTmV3UHJvamVjdEJ1dHRvbixcbiAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3NGcm9tTmV3UHJvamVjdEJ1dHRvbixcbiAgYWRkQWN0aXZlQ2xhc3NUb0FjdGl2ZVByb2plY3QsXG4gIHVwZGF0ZUNvbnRlbnRIZWFkbGluZSxcbiAgc2hvd0VtcHR5UHJvamVjdHNBcnJheU1lc3NhZ2UsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHtcbiAgaXNQcm9qZWN0c0FycmF5Tm90RW1wdHksXG4gIGZpbmRQcm9qZWN0QnlJZCxcbiAgZGVmYXVsdFByb2plY3QsXG4gIHByb2plY3RzQXJyYXksXG4gIHN0b3JlUHJvamVjdHMsXG4gIGNyZWF0ZUFuZFN0b3JlTmV3UHJvamVjdCxcbiAgY3JlYXRlQW5kU3RvcmVOZXdUb2RvSXRlbSxcbiAgc3RvcmVUb2RvSXRlbVRpdGxlLFxuICBmaW5kVG9kb0l0ZW1CeUlkLFxuICByZW1vdmVUb2RvSXRlbUJ5SWQsXG4gIHN0b3JlUHJvamVjdE5hbWUsXG4gIHJlY29uc3RydWN0QWxsUHJvamVjdE9iamVjdHMsXG4gIGVtcHR5T2xkQXJyYXlBbmRQb3B1bGF0ZVdpdGhOZXdJdGVtcyxcbiAgZ2V0SW5kZXhPZlByb2plY3RJblByb2plY3RzQXJyYXksXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGdldEFjdGl2ZVByb2plY3QsXG4gIHByb2plY3RIYXNUb2RvSXRlbXMsXG59IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7XG4gIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSxcbiAgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUsXG4gIGlzUHJvamVjdHNBcnJheUluU3RvcmFnZSxcbiAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG4vKiBcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5DT05URU5UIFVQREFURSAmIFJFRlJFU0hcbkNyZWF0ZXMgdGhlIHRvZG8gaXRlbXMgYW5kIHByb2plY3RzLFxuc2hvd3MgdGhlIGhlYWRsaW5lLCBhZGRzIGRhdGVwaWNrZXJzXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBDaGVja3Mgd2hldGhlciB0aGVyZSBhcmUgcHJvamVjdHMgdG8gZGlzcGxheVxuICBpZiAoaXNQcm9qZWN0c0FycmF5Tm90RW1wdHkoKSkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICAvLyBDaGVja3MgaWYgYSBwcm9qZWN0IGlzIG1hcmtlZCBhY3RpdmUgLT4gaWYgbm90IG1hcmsgdGhlIGZpcnN0IHByb2plY3QgaW4gdGhlIGFycmF5XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT09IG51bGwpIHtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNBcnJheVswXSk7XG4gICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGFkZEFjdGl2ZUNsYXNzVG9BY3RpdmVQcm9qZWN0KCk7XG4gICAgdXBkYXRlQ29udGVudEhlYWRsaW5lKGFjdGl2ZVByb2plY3QpO1xuICAgIGVuYWJsZU5ld1Rhc2tCdXR0b24oKTtcbiAgICBlbmFibGVSZW1vdmVQcm9qZWN0QnV0dG9uKCk7XG4gICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3NGcm9tTmV3UHJvamVjdEJ1dHRvbigpO1xuXG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGFjdGl2ZSBwcm9qZWN0IGhhcyB0b2RvIGl0ZW1zXG4gICAgaWYgKHByb2plY3RIYXNUb2RvSXRlbXMoYWN0aXZlUHJvamVjdCkpIHtcbiAgICAgIHBvcHVsYXRlQ29udGVudChhY3RpdmVQcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0VtcHR5VG9kb0xpc3RNZXNzYWdlKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIElmIHByb2plY3RzQXJyYXlbXSBpcyBlbXB0eSBjaGFuZ2UgdGhlIGxvb2sgb2YgdGhlIGFwcFxuICAgIHNob3dFbXB0eVByb2plY3RzQXJyYXlNZXNzYWdlKCk7XG4gICAgc2hvd0VtcHR5UG9qZWN0UGFnZUhlYWRsaW5lKCk7XG4gICAgZGlzYWJsZU5ld1Rhc2tCdXR0b24oKTtcbiAgICBkaXNhYmxlUmVtb3ZlUHJvamVjdEJ1dHRvbigpO1xuICAgIGFkZEhpZ2hsaWdodENsYXNzVG9OZXdQcm9qZWN0QnV0dG9uKCk7XG4gIH1cbn1cblxuLyogXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuUFJPSkVDVCBBQ1RJVkFUSU9OXG5SZXR1cm5zIHByb2plY3QgZnJvbSBwcm9qZWN0c0FycmF5W10gYnkgaXQncyBJRC5cbklEIGlzIHJldHJpZXZlZCBmcm9tIGEgPGRpdj4gcmVmZXJlbmNpbmcgdGhlIHByb2plY3QncyBuYW1lLlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdiA9IGdldE5hdigpO1xuXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzUHJvamVjdExpbmsoZXZlbnQpKSB7XG4gICAgICBjb25zdCBwcm9qZWN0TGluayA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGdldERhdGFQcm9qZWN0SWQocHJvamVjdExpbmspO1xuICAgICAgY29uc3QgY2xpY2tlZFByb2plY3QgPSBmaW5kUHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRQcm9qZWN0KTtcblxuICAgICAgc2V0QWN0aXZlUHJvamVjdChjbGlja2VkUHJvamVjdCk7XG4gICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuUFJPSkVDVCBDUkVBVElPTlxuQ3JlYXRlcyBuZXcgcHJvamVjdCB2aWEgY2xpY2sgb24gXCJOZXcgUHJvamVjdFwiIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbihmdW5jdGlvbiBpbml0aWFsaXplTmV3UHJvamVjdEJ1dHRvbigpIHtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGdldE5ld1Byb2plY3RCdXR0b24oKTtcbiAgY29uc3QgYm9keSA9IGdldEJvZHkoKTtcblxuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdElkID0gY3JlYXRlQW5kU3RvcmVOZXdQcm9qZWN0KCk7IC8vIHJldHVybnMgdGhlIG5ldyBwcm9qZWN0J3MgSURcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKG5ld1Byb2plY3RJZCk7XG5cbiAgICBzZXRBY3RpdmVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgcmVmcmVzaE5hdigpO1xuICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICBib2R5LmZvY3VzKCk7XG4gIH0pO1xufSkoKTtcblxuLyogXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5QUk9KRUNUIE5BTUUgSU5URVJBQ1RJT05cbk1hbmFnZXMgdXNlciBpbnRlcmFjdGlvbi91cGRhdGVzIHRvIHByb2plY3QgbmFtZSBcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0TmFtZUludGVyYWN0aW9uKCkge1xuICBjb25zdCBuYXYgPSBnZXROYXYoKTtcblxuICAvKiBcbiAgSGlkZXMgbmFtZSBmaWVsZCAmIHNob3dzIGlucHV0IHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCAmIHByb2plY3QgaXMgYWN0aXZlLlxuICBJZiBub3QgYWN0aXZlLCBhIGNsaWNrIHdpbGwgYWN0aXZhdGUgdGhlIHByb2plY3QgKGhhbmRsZWQgYnkgaW5pdGlhbGl6ZVByb2plY3ROYXZpZ2F0aW9uKCkpLlxuICBUaGUgPHNwYW4+IHRoYXQgd3JhcHMgdGhlIHByb2plY3QgbmFtZSBoYXMgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiIHdoaWxlIHRoZSBwcm9qZWN0IGlzIG5vdCBhY3RpdmUuXG4gICovXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYWxsUHJvamVjdExpbmtzID0gZ2V0UHJvamVjdExpbmtzKCk7XG5cbiAgICBpZiAoaXNQcm9qZWN0TGluayhldmVudCkpIHtcbiAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICBhbGxQcm9qZWN0TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAvLyBIaWRlcyBuYW1lICYgc2hvd3MgaW5wdXQgZmllbGQgb2YgYW55IHByb2plY3Qgb3RoZXIgdGhhbiBldmVudC50YXJnZXRcbiAgICAgICAgaWYgKGxpbmsgIT09IHByb2plY3RMaW5rKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGxpbmsucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgICAgICAgY29uc3QgaW5wdXQgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblxuICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc1Byb2plY3ROYW1lKGV2ZW50KSkge1xuICAgICAgc2hvd1Byb2plY3RJbnB1dEZpZWxkKGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFN0b3JlcyAmIHVwZGF0ZXMgYSBwcm9qZWN0IG5hbWUgd2hlbiBhIHVzZXIgdXBkYXRlcyB0aGUgaW5wdXQgZmllbGQuXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzUHJvamVjdElucHV0KGV2ZW50KSkge1xuICAgICAgc3RvcmVQcm9qZWN0TmFtZShldmVudCk7XG4gICAgICB1cGRhdGVQcm9qZWN0TmFtZShldmVudCk7XG4gICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyogXG4gIEhpZGVzIHRoZSBpbnB1dCBmaWVsZCB3aGVuIHRoZSBmb2N1cyBpcyBsb3N0LiBcbiAgVXBkYXRlcyB0aGUgcmlnaHQgaGFuZCBzaWRlIGNvbnRlbnQsIHRvIHJlZmxlY3QgYW55IHBvc3NpYmxlIHVwZGF0ZXMgdG8gdGhlIG5hbWUuXG4gICovXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzUHJvamVjdElucHV0KGV2ZW50KSkge1xuICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgICAgaWYgKGFjdGl2ZVByb2plY3QubmFtZSA9PT0gXCJcIikge1xuICAgICAgICBhY3RpdmVQcm9qZWN0Lm5hbWUgPSBcIlVubmFtZWQgUHJvamVjdFwiO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgfVxuXG4gICAgICBoaWRlUHJvamVjdElucHV0RmllbGQoZXZlbnQpO1xuICAgICAgcmVmcmVzaE5hdigpO1xuICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2FtZSBmdW5jdGlvbmFsaXR5IGFzIGFib3ZlIGZvciBFc2NhcGUgJiBFbnRlciBrZXkuXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBpc1Byb2plY3RJbnB1dChldmVudCkgJiZcbiAgICAgIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpXG4gICAgKSB7XG4gICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gICAgICBpZiAoYWN0aXZlUHJvamVjdC5uYW1lID09PSBcIlwiKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QubmFtZSA9IFwiVW5uYW1lZCBQcm9qZWN0XCI7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG5cbiAgICAgIGhpZGVQcm9qZWN0SW5wdXRGaWVsZChldmVudCk7XG4gICAgICByZWZyZXNoTmF2KCk7XG4gICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyogXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5QUk9KRUNUIFJFTU9WQUxcblJlbW92ZXMgYSBwcm9qZWN0IHdoZW4gY2xpY2tpbmcgXCJyZW1vdmVcIiBuZXh0IHRvIHRoZSBwcm9qZWN0J3MgcGFnZSB0aXRsZVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVSZW1vdmVQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBib2R5ID0gZ2V0Qm9keSgpO1xuICBjb25zdCBwcm9qZWN0SGVhZGxpbmVDb250YWluZXIgPSBnZXRDb250ZW50SGVhZGxpbmVDb250YWluZXIoKTtcblxuICBwcm9qZWN0SGVhZGxpbmVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChpc1Byb2plY3RzQXJyYXlOb3RFbXB0eSgpKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIucmVtb3ZlLXByb2plY3RcIikpIHtcbiAgICAgICAgY29uc3QgbW9kYWxCb3ggPSBjcmVhdGVNb2RhbEJveCgpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsQm94KTtcblxuICAgICAgICAvLyBTaG9ydCB0aW1lb3V0IHNvIHRoZSBicm93c2VyIHJlY29uZ25pemVzIHRoZSBuZXcgY2xhc3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbW9kYWxCb3guY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIik7XG4gICAgICAgIH0sIDIpO1xuXG4gICAgICAgIGluaXRpYWxpemVNb2RhbEJveCgpO1xuICAgICAgICBib2R5LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1vZGFsQm94KCkge1xuICBjb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGFpbmVyXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBtb2RhbEJveC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNhbmNlbFwiKTtcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IG1vZGFsQm94LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29uZmlybVwiKTtcblxuICBjb25zdCBoYW5kbGVLZXlkb3duRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdEluZGV4ID1cbiAgICAgICAgICBnZXRJbmRleE9mUHJvamVjdEluUHJvamVjdHNBcnJheShhY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpbmtzID0gZ2V0UHJvamVjdExpbmtzKCk7XG5cbiAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoYWN0aXZlUHJvamVjdEluZGV4LCAxKTsgLy8gcmVtb3ZlIHRoZSBhY3RpdmUgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0c0FycmF5W11cbiAgICAgICAgaWYgKHByb2plY3RzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNBcnJheVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcmVmcmVzaE5hdigpO1xuICAgICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgICB9XG4gICAgICBtb2RhbEJveC5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleWRvd25FdmVudCk7XG4gICAgfVxuICB9O1xuXG4gIG1vZGFsQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbEJveCAmJiBldmVudC50YXJnZXQgIT09IG1vZGFsQm94LmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1vZGFsQm94LnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBjYW5jZWxCdXR0b24pIHtcbiAgICAgIG1vZGFsQm94LnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb25maXJtQnV0dG9uKSB7XG4gICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgY29uc3QgYWN0aXZlUHJvamVjdEluZGV4ID1cbiAgICAgICAgZ2V0SW5kZXhPZlByb2plY3RJblByb2plY3RzQXJyYXkoYWN0aXZlUHJvamVjdCk7XG4gICAgICBjb25zdCBwcm9qZWN0TGlua3MgPSBnZXRQcm9qZWN0TGlua3MoKTtcblxuICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoYWN0aXZlUHJvamVjdEluZGV4LCAxKTsgLy8gcmVtb3ZlIHRoZSBhY3RpdmUgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0c0FycmF5W11cbiAgICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c0FycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICByZWZyZXNoTmF2KCk7XG4gICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgICBtb2RhbEJveC5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleWRvd25FdmVudCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlkb3duRXZlbnQpO1xufVxuXG4vKiBcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblRPRE8gSVRFTSBDUkVBVElPTlxuQ3JlYXRlcyBuZXcgdG9kbyBpdGVtIHZpYSBjbGljayBvbiBcIkFkZCBUYXNrXCIgXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZU5ld1Rhc2tCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBnZXROZXdUYXNrQnV0dG9uKCk7XG5cbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc1Byb2plY3RzQXJyYXlOb3RFbXB0eSgpKSB7XG4gICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgY29uc3QgbmV3VG9kb0l0ZW1JZCA9IGNyZWF0ZUFuZFN0b3JlTmV3VG9kb0l0ZW0oKTsgLy8gcmV0dXJucyB0aGUgbmV3IHRvZG8gaXRlbSdzIElEXG5cbiAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICBmb2N1c0VsZW1lbnRBbmRDbGVhckNvbnRlbnQobmV3VG9kb0l0ZW1JZCk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblRPRE8gSVRFTSBUSVRMRSBJTlRFUkFDVElPTlxuTWFuYWdlcyB1c2VyIGludGVyYWN0aW9uIHdpdGggYSB0b2RvIGl0ZW0gdGl0bGUgXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuZnVuY3Rpb24gaGFuZGxlVG9kb0l0ZW1UaXRsZUludGVyYWN0aW9uKCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuXG4gIC8qIFxuICBTdG9yZXMgdXBkYXRlcyB0byBhIHRvZG8gaXRlbSB0aXRsZS5cbiAgRXhjZXB0aW9uczogXCJFbnRlclwiICYgXCJFc2NhcGVcIiAtPiBzZWUgYmVsb3cuIFxuICAqL1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNUb2RvSXRlbVRpdGxlKGV2ZW50KSkge1xuICAgICAgc3RvcmVUb2RvSXRlbVRpdGxlKGV2ZW50KTtcbiAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBVcGRhdGVzIGEgdG9kbyBpdGVtIHRpdGxlIHdoZW4gdGhlIGZvY3VzIGlzIGxvc3QuIFJlbW92ZXMgaXQgd2hlbiB0aXRsZSBpcyBlbXB0eS5cbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBjb25zdCB0b2RvSXRlbUlkID0gZ2V0RWxlbWVudElkKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcblxuICAgIGlmIChpc1RvZG9JdGVtVGl0bGUoZXZlbnQpKSB7XG4gICAgICBpZiAoaXNUZXh0Q29udGVudEVtcHR5KGV2ZW50KSkge1xuICAgICAgICByZW1vdmVUb2RvSXRlbUJ5SWQodG9kb0l0ZW1JZCk7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHBvcHVsYXRlQ29udGVudChhY3RpdmVQcm9qZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlVG9kb0l0ZW1UaXRsZShldmVudCk7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGVzIG5ldyB0b2RvIGl0ZW0gd2hlbiBFTlRFUiBpcyBwcmVzc2VkLiBSZW1vdmVzIGl0IHdoZW4gdGl0bGUgaXMgZW1wdHkuXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgdG9kb0l0ZW1JZCA9IGdldEVsZW1lbnRJZChldmVudC50YXJnZXQucGFyZW50Tm9kZSk7XG5cbiAgICBpZiAoaXNUb2RvSXRlbVRpdGxlKGV2ZW50KSAmJiBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaWYgKGlzVGV4dENvbnRlbnRFbXB0eShldmVudCkpIHtcbiAgICAgICAgcmVtb3ZlVG9kb0l0ZW1CeUlkKHRvZG9JdGVtSWQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9JdGVtSWQgPSBjcmVhdGVBbmRTdG9yZU5ld1RvZG9JdGVtKCk7IC8vIHJldHVybnMgdGhlIG5ldyBpdGVtJ3MgaWRcbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcG9wdWxhdGVDb250ZW50KGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBmb2N1c0VsZW1lbnRBbmRDbGVhckNvbnRlbnQobmV3VG9kb0l0ZW1JZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9jdXNlcyA8Ym9keT4gd2hlbiBFU0NBUEUgaXMgcHJlc3NlZC4gUmVzZXRzIHRoZSB0aXRsZSB0byB0aGUgZGVmYXVsdCB2YWx1ZSB3aGVuIGVtcHR5LlxuICAgIGlmIChpc1RvZG9JdGVtVGl0bGUoZXZlbnQpICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgIGNvbnN0IHRvZG9JdGVtID0gZmluZFRvZG9JdGVtQnlJZCh0b2RvSXRlbUlkKTtcblxuICAgICAgaWYgKGlzVGV4dENvbnRlbnRFbXB0eShldmVudCkpIHtcbiAgICAgICAgdG9kb0l0ZW0ucmVzZXRUaXRsZSgpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZVRvZG9JdGVtVGl0bGUoZXZlbnQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBib2R5LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kb0l0ZW1DaGVja0NvbXBsZXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIudG9kby1pdGVtIC5jaGVja21hcmstY29udGFpbmVyIC5jaGVja21hcmtcIikpIHtcbiAgICAgIGNvbnN0IHRvZG9JdGVtSWQgPSBnZXRFbGVtZW50SWQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICBjb25zdCB0b2RvSXRlbSA9IGZpbmRUb2RvSXRlbUJ5SWQodG9kb0l0ZW1JZCk7XG5cbiAgICAgIC8vIE1hcmsgYXMgY29tcGxldGUgc28gY2hlY2tib3ggd2lsbCBzdGF5IGNoZWNrZWQgd2hlbiBjb250ZW50IGlzIHJlZnJlc2hlZFxuICAgICAgdG9kb0l0ZW0uY2hlY2tlZCA9IFwidHJ1ZVwiO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlVG9kb0l0ZW1CeUlkKHRvZG9JdGVtSWQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9LCAxMTAwKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBBUFAgSU5JVElBTElaQVRJT05cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbi8vIEdldHMgYWxsIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBhdmFpbGFibGUgb3IgbG9hZHMgZGVmYXVsdCBkYXRhXG5pZiAoaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSAmJiBpc1Byb2plY3RzQXJyYXlJblN0b3JhZ2UoKSkge1xuICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0c0FycmF5ID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIC8vIFJlY29uc3RydWN0cyBhbGwgcHJvamVjdCBvYmplY3RzIHRvIHJlZXN0YWJsaXNoIHByb3RvdHlwZSBpbmhlcml0YW5jZSBhbmQgbWV0aG9kc1xuICBjb25zdCBuZXdQcm9qZWN0c0FycmF5ID0gcmVjb25zdHJ1Y3RBbGxQcm9qZWN0T2JqZWN0cyhcbiAgICBsb2NhbFN0b3JhZ2VQcm9qZWN0c0FycmF5XG4gICk7XG4gIGVtcHR5T2xkQXJyYXlBbmRQb3B1bGF0ZVdpdGhOZXdJdGVtcyhuZXdQcm9qZWN0c0FycmF5KTtcbn0gZWxzZSB7XG4gIHN0b3JlUHJvamVjdHMoZGVmYXVsdFByb2plY3QpOyAvLyBsb2FkIGRlZmF1bHQgZGF0YVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlZnJlc2hOYXYoKTtcbiAgdXBkYXRlQ29udGVudCgpO1xuICAvLyBBc3NvY2lhdGVzIHRoZSBwcm9qZWN0IG5hbWVzIHdpdGggdGhlIGFjdHVhbCBwb2plY3Qgb2JqZWN0c1xuICBpbml0aWFsaXplUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgLy8gSGFuZGxlcyB1cGRhdGVzIG9mIHByb2plY3QgbmFtZSBieSB0aGUgdXNlclxuICBoYW5kbGVQcm9qZWN0TmFtZUludGVyYWN0aW9uKCk7XG4gIC8vIEhhbmRsZXMgcmVtb3ZhbCBvZiBwcm9qZWN0cyB2aWEgYnV0dG9uIG5leHQgdG8gcHJvamVjdCBwYWdlIHRpdGxlXG4gIGluaXRpYWxpemVSZW1vdmVQcm9qZWN0QnV0dG9uKCk7XG4gIC8vIEhhbmRsZXMgY3JlYXRpb24gb2YgbmV3IHRvZG8gaXRlbXMgdmlhIGEgYnV0dG9uIG9uIHRvcCByaWdodFxuICBpbml0aWFsaXplTmV3VGFza0J1dHRvbigpO1xuICAvLyBIYW5kbGVzIHVwZGF0ZXMgb2YgdG9kbyBpdGVtIHRpdGxlIGJ5IHRoZSB1c2VyXG4gIGhhbmRsZVRvZG9JdGVtVGl0bGVJbnRlcmFjdGlvbigpO1xuICAvLyBIYW5kbGVzIHRoZSBcImNoZWNrIGFzIGNvbXBsZXRlXCIgYWN0aW9uXG4gIGhhbmRsZVRvZG9JdGVtQ2hlY2tDb21wbGV0ZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=