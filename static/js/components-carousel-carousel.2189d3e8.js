(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Carousel/Carousel.less":function(e,n,t){},"./src/components/Carousel/Carousel.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),s=t("./node_modules/docz/dist/index.m.js"),l=t("./src/utils/cn.ts"),i=(t("./src/components/Carousel/Carousel.less"),t("./src/components/Carousel/CarouselArrow.less"),t("./src/icons/System/16/Arrow_forward_16.svg"));function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?f(e):n}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=Object(l.a)("mfui-carousel-arrow"),b=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return p(r,(t=r=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),Object.defineProperty(f(r),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props,n=e.onClickArrow,t=e.onClick;n&&n(),t&&t()}}),t))}var t,a,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r["Component"]),t=n,(a=[{key:"render",value:function(){var e=this.props.className;return r.createElement("div",{className:d("",{},e),onClick:this.handleClick},r.createElement("div",{className:d("arrow-icon")},r.createElement(i.default,null)))}}])&&u(t.prototype,a),o&&u(t,o),n}(),y=b;try{b.displayName="CarouselArrow",b.__docgenInfo={description:"",displayName:"CarouselArrow",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},onClickArrow:{defaultValue:null,description:"",name:"onClickArrow",required:!0,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/CarouselArrow.tsx#CarouselArrow"]={docgenInfo:b.__docgenInfo,name:"CarouselArrow",path:"src/components/Carousel/CarouselArrow.tsx#CarouselArrow"})}catch(e){}var h=t("./node_modules/react-slick/lib/index.js"),C=t.n(h);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,n){return!n||"object"!==v(n)&&"function"!==typeof n?E(e):n}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=Object(l.a)("mfui-carousel"),S=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return w(r,(t=r=w(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),Object.defineProperty(E(r),"handleClickNext",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.onClickNext;e&&e()}}),Object.defineProperty(E(r),"handleClickPrev",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.onClickPrev;e&&e()}}),t))}var t,a,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,r["Component"]),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.className,t=e.options,a=e.children;return r.createElement("div",{className:T("",{},n)},r.createElement(C.a,Object.assign({},t,{nextArrow:r.createElement(y,Object.assign({},t,{onClickArrow:this.handleClickNext})),prevArrow:r.createElement(y,Object.assign({},t,{onClickArrow:this.handleClickPrev}))}),a))}}])&&g(t.prototype,a),o&&g(t,o),n}(),_=S;try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any"}},onClickNext:{defaultValue:null,description:"",name:"onClickNext",required:!0,type:{name:"any"}},onClickPrev:{defaultValue:null,description:"",name:"onClickPrev",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:S.__docgenInfo,name:"Carousel",path:"src/components/Carousel/Carousel.tsx#Carousel"})}catch(e){}var O=t("./src/components/ProductTileRest/ProductTileRest.tsx"),N=t("./src/icons/Service-logos/24/MF-TV.svg");function P(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"Wrapper",function(){return j}),t.d(n,"carouselParams",function(){return x}),t.d(n,"tariff",function(){return A});var j=function(e){var n=e.children;return a.a.createElement("div",null,n)},x={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:720,settings:{slidesToShow:2,dots:!0}},{breakpoint:479,settings:{slidesToShow:1,dots:!0}}]},A={buyButtonText:"\u041a\u0443\u043f\u0438\u0442\u044c",connectButtonText:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0442\u0430\u0440\u0438\u0444",title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f! \u0421\u043c\u043e\u0442\u0440\u0438",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",link:"/tariffs/vklyuchaysya/smotri.html",buyLink:"/zakaz/?tariff=look",payment:{value:1e3,unitExtra:"\u0437\u0430\xa030\xa0\u0434\u043d\u0435\u0439",unitValue:"\u20bd",unit:"\u20bd \u0437\u0430\xa030\xa0\u0434\u043d\u0435\u0439",discount:0},packs:[{value:1500,unit:"\u043c\u0438\u043d\u0443\u0442"},{value:100,unit:"\u0441\u043c\u0441"},{value:3,unit:"\u0413\u0411"}],firstParams:{title:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",caption:"",items:[{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(N.default,null)},{title:"\u041c\u0435\u0433\u0430\u0424\u043e\u043d \u0422\u0412",caption:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0442\u0440\u0430\u0444\u0438\u043a \u0438\xa0\u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0438\u043d\u043e, \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438\xa0\u0422\u0412-\u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u043d\u0430\xa0\u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441",svgIcon:a.a.createElement(N.default,null)}]},secondParams:[{title:"\u041e\u043f\u0446\u0438\u044f",value:300,unit:"\u043c\u0438\u043d\u0443\u0442"}],cashback:{title:"\u041a\u044d\u0448\u0431\u044d\u043a",value:20,unit:"%"},info:{billingIds:["sdf","sdf"],sms:"05007897",smsText:"\u0414\u0410",smsSite:null,ivr:"05007897",ussd:'<span class="c-number-call"><b class="asterisk">*</b><b class="num">789</b><span class="c-number-call"><b class="asterisk">*</b><b class="num">7</b><b class="dash">#</b><b class="pipe"></b></span>',lkLink:"https://lk.megafon.ru/tariffs/",title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f! \u0421\u043c\u043e\u0442\u0440\u0438",id:1598}};n.default=function(e){var n=e.components;P(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"carousel"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#carousel"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Carousel"),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties-carousel"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-carousel"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties Carousel"),a.a.createElement(s.e,{of:_}),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),a.a.createElement(s.d,{__position:1,__code:"<Carousel options={carouselParams} onClickNext={() => {}}>\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n  <ProductTileRest {...tariff} />\n</Carousel>",wrapper:j},a.a.createElement(_,{options:x,onClickNext:function(){}},a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A),a.a.createElement(O.a,A))),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"included-props"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#included-props"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Included props"),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const carouselParams = {\n    dots: false,\n    infinite: false,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 3,\n            }\n        },\n        {\n            breakpoint: 720,\n            settings: {\n            slidesToShow: 2,\n                dots: true,\n            }\n        },\n        {\n            breakpoint: 479,\n            settings: {\n                slidesToShow: 1,\n                dots: true,\n            }\n        },\n    ]\n};\n")))}},"./src/components/Carousel/CarouselArrow.less":function(e,n,t){}}]);