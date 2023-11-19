"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[888],{"./src/components/Forms/LoginForm/LoginForm.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoginForm_stories});var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),loginForm=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Forms/LoginForm/loginForm.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(loginForm.Z,options);loginForm.Z&&loginForm.Z.locals&&loginForm.Z.locals;var _Default$parameters,_Default$parameters2,_Default$parameters2$,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginForm=function LoginForm(){return(0,jsx_runtime.jsx)(formik_esm.J9,{initialValues:{email:"",about:""},onSubmit:function onSubmit(values,actions){console.log("actions: ",actions),actions.resetForm()},validate:function validate(values){var errors={text:"",isValid:!0};return values.email||(errors.text="Введите email",errors.isValid=!1),errors},children:function children(props){return(0,jsx_runtime.jsxs)(formik_esm.l0,{children:[(0,jsx_runtime.jsx)("h1",{children:"Вход"}),(0,jsx_runtime.jsx)("div",{className:"storybook-login-form--item",children:(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)("label",{htmlFor:"email",className:"storybook-login-form-item--label",children:"Email"}),(0,jsx_runtime.jsx)("input",{id:"email",type:"text",name:"email",onChange:props.handleChange,onBlur:props.handleBlur,value:props.values.name})]})}),(0,jsx_runtime.jsx)("div",{className:"storybook-login-form--item",children:(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)("label",{htmlFor:"description",className:"storybook-login-form-item--label",children:"Пароль"}),(0,jsx_runtime.jsx)("input",{id:"password",type:"password",name:"password",onChange:props.handleChange,onBlur:props.handleBlur,value:props.values.description})]})}),(0,jsx_runtime.jsx)("button",{type:"submit",disabled:!props.errors.isValid,children:"Сохранить"})]})}})};LoginForm.displayName="LoginForm";try{LoginForm.displayName="LoginForm",LoginForm.__docgenInfo={description:"",displayName:"LoginForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/LoginForm/LoginForm.tsx#LoginForm"]={docgenInfo:LoginForm.__docgenInfo,name:"LoginForm",path:"src/components/Forms/LoginForm/LoginForm.tsx#LoginForm"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const LoginForm_stories={title:"Example/LoginForm",component:LoginForm,tags:["autodocs"],parameters:{layout:"fullscreen"}};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Forms/LoginForm/loginForm.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-login-form--item {\n    margin: 5px;\n}\n\n.storybook-login-form-item--label {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    margin-right: 5px;\n}\n","",{version:3,sources:["webpack://./src/components/Forms/LoginForm/loginForm.css"],names:[],mappings:"AAAA;IACI,WAAW;AACf;;AAEA;IACI,0EAA0E;IAC1E,eAAe;IACf,iBAAiB;AACrB",sourcesContent:[".storybook-login-form--item {\n    margin: 5px;\n}\n\n.storybook-login-form-item--label {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    margin-right: 5px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);