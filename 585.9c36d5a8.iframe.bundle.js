"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[585],{"./src/components/LangSwitcher/LangSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>LangSwitcher});__webpack_require__("./node_modules/react/index.js");var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),Locale=function(Locale){return Locale.ru="ru",Locale.en="en",Locale}({});i18next.ZP.use(es.Db).init({resources:{en:{translation:{errors:{unexpected_error:"Unexpected error. We automatically register errors and will fix everything soon","Failed to fetch":"Connection error. Go to the server directory and start the server using the start script",is_required:"Required field",invalid_email_address:"Invalid email address",too_short_password:"The password is too short",not_same_password:"Passwords don't match",ERR_INCORRECT_EMAIL_OR_PASSWORD:"Incorrect password or email",ERR_NOT_FOUND:"An entity with this id was not found",ERR_USER_NOT_REGISTER:"Register to access this feature",ERR_INCORRECT_PASSWORD:"Invalid password",ERR_ACCOUNT_ALREADY_EXIST:"An account with this email already exists",ERR_INVALID_PASSWORD:"The password must contain at least 8 characters",ERR_INVALID_EMAIL:"Invalid email",ERR_TOKEN_REQUIRED_ERROR:"Server token error. We automatically register all errors and will fix everything soon",ERR_JWT_ERROR:"You are not logged in, log in to your account and try again",ERR_DATA_BASE_ERROR:"Database server error. We automatically register all errors and will fix everything soon",INTERNAL_SERVER_ERROR:"Server error. We automatically register all errors and will fix everything soon",ERR_INVALID_NICKNAME:"The alias must be at least 7 characters and can contain only numbers, letters and an underscore"},screens:{ProfileScreen:{title:"Profile",updateProfile:{title:"Change profile",success:"Profile changed successfully",save:"Save"},changePassword:{title:"Change password",success:"Password changed successfully",save:"Change"}},ExamplesScreen:{title:"Examples"},LessonsScreen:{title:"Lessons"},auth:{title:"Authentication",signIn:{title:"Sign in",submit:"Sign in"},signUp:{title:"Sign out",submit:"Sign out"}},HomeScreen:{title:"Home",desc:"Welcome to the react course from otus!\n\nThis is a training project of the course. Here you will find materials for lectures, homework, as well as examples of some complex components.\n\nThe project is written in **typescript**, **redux**, **redux-saga** using **webpack**. In it , you can spy on the implementation of the dark/light theme, locale switching, navigation, token exchange between browser tabs.\n\nThe project also has its own server implemented on **graphql**, **apollo**, **express** and using a json file as a database (in real development, do not do this, it's just to save you from installing the database). Interaction with the server is implemented, namely the ability to register a user, log in to an account, but do not forget to start the server locally - use the _start:client_ and _start:server_ commands.\n\nWelcome and good luck in learning!"},TeachersScreen:{title:"Teachers",desc:"Someday there will be teachers' cards here, but that's not for sure"}},forms:{AuthForm:{email:{title:"Email",placeholder:"Enter email"},password:{title:"Password",placeholder:"Enter password"}},ChangePasswordForm:{password:{title:"Password",placeholder:"Enter password"},newPassword:{title:"New password",placeholder:"Enter new password"},repeatPassword:{title:"Repeat password",placeholder:"Repeat password"}},EmailForm:{email:{title:"Email",placeholder:"Enter email"}},ProfileForm:{name:{title:"Nickname",placeholder:"Come up with a pseudonym for yourself"},about:{title:"About",placeholder:"Write something about yourself"}},RepeatPasswordForm:{password:{title:"Password",placeholder:"Enter password"},repeatPassword:{title:"Repeat password",placeholder:"Repeat password"}}},fields:{string:"String value"},components:{RemoveButton:{title:"Data will be lost, delete?",ok:"Remove",cancel:"Cancel"},RangeInputs:{from:"From",to:"To"},InputIntRangeList:{title:"Range"},NumberInput:{float:{placeholder:"Fractional number"},integer:{placeholder:"Integer"}},login:{enter:"Login",leave:"Logout"},header:{nav:"Navigation",root:"Home",profile:"Profile","home-works":"Home works",examples:"Examples",lessons:"Lessons",teachers:"Teachers"}},enums:{ExampleKey:{modal:"Modal",movable:"Movable",sortableList:"Sortable List",waveSlider:"Wave Slider",inputs:"Inputs"},LessonKey:{generator:"Generators iterators",patterns:"Patterns",restApi:"Rest Api",babel:"Babel + typescript",socketsAndWorkers:"Web sockets & Web workers",graphql:"Graphql"}}}},ru:{translation:{errors:{unexpected_error:"Неожиданная ошибка. Мы автоматически регистрируем ошибки и скоро все исправим","Failed to fetch":"Ошибка соединения. Перейдите в директорию server и запустите сервер с помощью скрипта start",is_required:"Обязательное поле",invalid_email_address:"Некорректный email адрес",too_short_password:"Слишком короткий пароль",not_same_password:"Пароли не совпадают",ERR_INCORRECT_EMAIL_OR_PASSWORD:"Некорректный пароль или email",ERR_NOT_FOUND:"Сущность с таким id не найдена",ERR_USER_NOT_REGISTER:"Зарегистрируйтесь, чтобы получить доступ к этой функции",ERR_INCORRECT_PASSWORD:"Некорректный пароль",ERR_ACCOUNT_ALREADY_EXIST:"Аккаунт с таким email уже существует",ERR_INVALID_PASSWORD:"Пароль должен содержать от 8 символов",ERR_INVALID_EMAIL:"Некорректный email",ERR_TOKEN_REQUIRED_ERROR:"Серверная ошибка токена. Мы автоматически регистрируем все ошибки и скоро все исправим",ERR_JWT_ERROR:"Вы не авторизованы, войдите в учетную запись и повторите попытку",ERR_DATA_BASE_ERROR:"Серверная ошибка базы данный. Мы автоматически регистрируем все ошибки и скоро все исправим",INTERNAL_SERVER_ERROR:"Серверная ошибка. Мы автоматически регистрируем все ошибки и скоро все исправим",ERR_INVALID_NICKNAME:"Псевдоним должен быть от 7 символов и может содержать только числа, буквы и символ нижнего подчеркивания"},screens:{ProfileScreen:{title:"Профиль",updateProfile:{title:"Изменить профиль",success:"Профиль успешно изменен",save:"Сохранить"},changePassword:{title:"Изменить пароль",success:"Пароль успешно изменен",save:"Изменить"}},ExamplesScreen:{title:"Примеры"},LessonsScreen:{title:"Уроки"},auth:{title:"Аутентификация",signIn:{title:"Войти",submit:"Войти"},signUp:{title:"Зарегистрироваться",submit:"Зарегистрироваться"}},HomeScreen:{title:"Главная",desc:"Приветствую на курсе по react от otus!\n\nЭто учебный проект курса. Здесь вы найдете материалы к лекциям, домашние задания, а так же примеры некоторых сложных компонентов.\n\nПроект написан на **typescript**, **redux**, **redux-saga** с использованием **webpack**. В нем можно подсмотреть реализацию темной/светлой темы, переключение локали, навигацию, обмен токен между вкладками браузера.\n\nТак же в проекте есть свой сервер, реализованный на **graphql**, **apollo**, **express** и использующий в качестве базы данных json файл (в реальной разработке не делайте так, это только чтобы избавить вас от установки базы данных). Реализовано взаимодействие с сервером, а именно возможность зарегистрировать пользователя, войти в учетную запись, но не забудьте запустить сервер локально - используйте команды _start:client_ и _start:server_.\n\nДобро пожаловать и удачи в обучении!"},TeachersScreen:{title:"Преподаватели",desc:"Когда-нибудь здесь появятся карточки преподавателей, но это не точно"}},forms:{AuthForm:{email:{title:"Email",placeholder:"Укажите email"},password:{title:"Пароль",placeholder:"Укажите пароль"}},ChangePasswordForm:{password:{title:"Пароль",placeholder:"Укажите пароль"},newPassword:{title:"Новый пароль",placeholder:"Укажите новый пароль"},repeatPassword:{title:"Повторите пароль",placeholder:"Повторите пароль"}},EmailForm:{email:{title:"Email",placeholder:"Укажите email"}},ProfileForm:{name:{title:"Псевдоним",placeholder:"Придумайте себе псевдоним"},about:{title:"О себе",placeholder:"Напишите что-нибудь о себе"}},RepeatPasswordForm:{password:{title:"Пароль",placeholder:"Укажите пароль"},repeatPassword:{title:"Повторите пароль",placeholder:"Повторите пароль"}}},fields:{string:"Строковое значение"},components:{RemoveButton:{title:"Данные будут потеряны, удалить?",ok:"Удалить",cancel:"Отмена"},RangeInputs:{from:"От",to:"До"},InputIntRangeList:{title:"Диапазон"},NumberInput:{float:{placeholder:"Дробное число"},integer:{placeholder:"Целое число"}},login:{enter:"Вход",leave:"Выход"},header:{nav:"Навигация",root:"Главная",profile:"Профиль","home-works":"Домашние работы",examples:"Примеры",lessons:"Уроки",teachers:"Преподаватели"}},enums:{ExampleKey:{modal:"Модальное окно",movable:"Перемещаемый",sortableList:"Сортируемый список",waveSlider:"Слайдер",inputs:"Инпуты"},LessonKey:{generator:"Генераторы итераторы",patterns:"Паттерны",restApi:"Rest Api",babel:"Babel + typescript",socketsAndWorkers:"Web sockets & Web workers",graphql:"Graphql"}}}}},lng:localStorage.getItem("lang")||Locale.ru,interpolation:{escapeValue:!1}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),langSwitcher=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LangSwitcher/langSwitcher.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(langSwitcher.Z,options);langSwitcher.Z&&langSwitcher.Z.locals&&langSwitcher.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LangSwitcher=function LangSwitcher(){var i18n=(0,es.$G)().i18n,lang=i18n.language===Locale.ru?Locale.en:Locale.ru;return(0,jsx_runtime.jsx)("button",{type:"button",className:"storybook-lang-switcher",onClick:function onClick(){return i18n.changeLanguage(lang)},children:lang})};LangSwitcher.displayName="LangSwitcher";try{LangSwitcher.displayName="LangSwitcher",LangSwitcher.__docgenInfo={description:"",displayName:"LangSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LangSwitcher/LangSwitcher.tsx#LangSwitcher"]={docgenInfo:LangSwitcher.__docgenInfo,name:"LangSwitcher",path:"src/components/LangSwitcher/LangSwitcher.tsx#LangSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LangSwitcher/langSwitcher.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-lang-switcher {\n    border: 0;\n    padding: 4px;\n    background: none;\n    outline: none;\n    cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/components/LangSwitcher/langSwitcher.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,eAAe;AACnB",sourcesContent:[".storybook-lang-switcher {\n    border: 0;\n    padding: 4px;\n    background: none;\n    outline: none;\n    cursor: pointer;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);