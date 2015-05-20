/**
 * Created by Larry on 2015/5/4.
 */
(function () {
    angular.module('iNu', ['nvd3', 'chart.js', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.selection', 'pascalprecht.translate'])
        .config(['$stateProvider', '$urlRouterProvider', routerConfig])
        .config(['$translateProvider', translate])
        .controller('iNuCtrl',['$translate',iNuCtrl]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function iNuCtrl($translate){
        var self = this;
        self.changeLanguage = function(langKey){
            $translate.use(langKey);
        };
    }

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1");
        $stateProvider

            .state('state1', {
                url: '/state1',
                templateUrl: "state1.html",
                controller:"State1Controller",
                controllerAs:'State1',
                data:{
                    title:'State1'
                }
            })
            .state('state2', {
                url: '/state2',
                templateUrl: 'chart.html',
                controller: 'ChartController',
                controllerAs: 'ctrl',
                data:{
                    title:'Chart'
                }


            })
            .state('state3', {
                url: '/state3',
                templateUrl: 'ui_grid.html',
                controller: 'GridController',
                controllerAs: 'gridCtrl',
                data:{
                    title:'Grid'
                }


            })
            .state('state4',{
                url:'/state4',
                templateUrl:'i18n.html',
                controller:'TranslateController',
                controllerAs:'transCtrl',
                data:{
                    title:"i18n"
                }
            })


    }
    function translate($translateProvider) {
        $translateProvider.useStaticFilesLoader({
           prefix:'lang/locale-',
            suffix:'.json'
        });
        $translateProvider.preferredLanguage('en');
        //$translateProvider.translations('en', translateEn);
        //$translateProvider.translations('ch', translateCh);
        //$translateProvider.preferredLanguage('en');
        //$translateProvider.fallbackLanguage('Ch');
        $translateProvider.registerAvailableLanguageKeys(['en','ch'],{
            'en_US':'en',
            'zh_TW':'ch'
        });
        $translateProvider.determinePreferredLanguage();

    }

})();

