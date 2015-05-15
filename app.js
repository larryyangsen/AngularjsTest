/**
 * Created by Larry on 2015/5/4.
 */
(function () {
    angular.module('app', ['nvd3', 'chart.js', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.selection', 'pascalprecht.translate'])
        .config(['$stateProvider', '$urlRouterProvider', routerConfig])
        .config(['$translateProvider', translate])
        .controller('ctrl',['$translate',ctrl]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var translateEn = {
        Test:'Test i18n',
        State1:'State1',
        Chart:'Chart',
        Grid:'Grid',
        Grid_Name:'Name',
        HEADLINE: 'WelCome to my App',
        PARAGRAPH: 'Hello!',
        NAMESPACE: {
            PARAGRAPH: 'And It comes with awesome features!'
        },
        PASSED_AS_TEXT: 'Hey there! I\'m passed as text value',
        PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
        PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
        VARIABLE_REPLACEMENT: 'Hi {{name}}',
        BUTTON_LANG_EN:'english',
        BUTTON_LANG_CH:'chinese'
    };
    var translateCh =
    {
        Test:'測試多語系',
        State1:'區塊1',
        Chart:'圖表',
        Grid:'表格',
        Grid_Name:'姓名',
        HEADLINE: '歡迎到我的 App',
        PARAGRAPH: '你好!',
        NAMESPACE: {
            PARAGRAPH: '即將帶來一些功能!'
        },
        PASSED_AS_TEXT: '嗨! 我是由 text value帶過來的',
        PASSED_AS_ATTRIBUTE: '我是由 attribute value帶過來的, 酷嗎?',
        PASSED_AS_INTERPOLATION: '初學者! 我是插值!',
        VARIABLE_REPLACEMENT: '嗨 {{name}}',
        BUTTON_LANG_EN:'英文',
        BUTTON_LANG_CH:'中文'

    };

    function ctrl($translate) {
        console.log("F\n".repeat(10));
        var self = this;
        self.changeLanguage = function(langKey){
            $translate.use(langKey);
        }
        self.name='Larry Yang';
    }

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('state1', {
                url: '/state1',
                template: "<div class='bg-warning'>state1</div>"

            })
            .state('state2', {
                url: '/state2',
                templateUrl: 'chart.html',
                controller: 'ChartController',
                controllerAs: 'ctrl'


            })
            .state('state3', {
                url: '/state3',

                templateUrl: 'ui_grid.html',
                controller: 'GridController',
                controllerAs: 'gridCtrl'


            })


    }

    function translate($translateProvider) {
        $translateProvider.translations('en', translateEn);
        $translateProvider.translations('ch', translateCh);
        //$translateProvider.preferredLanguage('en');
        //$translateProvider.fallbackLanguage('Ch');
        $translateProvider.registerAvailableLanguageKeys(['en','ch'],{
            'en_US':'en',
            'zh_TW':'ch'
        });
        $translateProvider.determinePreferredLanguage();

    }
})();

