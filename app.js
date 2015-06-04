/**
 * Created by Larry on 2015/5/4.
 */
(function () {
    angular.module('app', ['ui.router', 'oc.lazyLoad',  'pascalprecht.translate','ui.bootstrap','ngSanitize'])
        .constant('URI_PATH','testJSON/')
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', routerConfig])
        .config(['$translateProvider', translate])
        .controller('iNuCtrl', ['$translate', iNuCtrl]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function iNuCtrl($translate) {
        var self = this;
        self.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }

    function routerConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $urlRouterProvider.otherwise("/state1");
        $stateProvider

            .state('state1', {
                url: '/state1',
                templateUrl: "views/state1.html",
                controller: "State1Controller",
                controllerAs: 'State1',
                data: {
                    title: 'State1'
                }
            })
            .state('state2', {
                url: '/state2',
                templateUrl: 'views/chart.html',
                controller: 'ChartController',
                controllerAs: 'ctrl',
                data: {
                    title: 'Chart'
                },
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie:true,
                                name: 'nvd3',
                                files: ['bower_components/d3/d3.js', 'bower_components/nvd3/nv.d3.js',
                                    'bower_components/angular-nvd3/dist/angular-nvd3.js', 'bower_components/nvd3/nv.d3.css']
                            },
                            {
                                serie:true,
                                name: 'chart.js',
                                files: ['bower_components/Chart.js/Chart.js',
                                    'bower_components/angular-chart.js/dist/angular-chart.js', 'bower_components/angular-chart.js/dist/angular-chart.css'
                                ]
                            }
                        ])
                    }
                }


            })
            .state('state3', {
                url: '/state3',
                templateUrl: 'views/ui_grid.html',
                controller: 'GridController',
                controllerAs: 'gridCtrl',
                data: {
                    title: 'Grid'
                },
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: ['ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.selection','ui.grid.autoResize','ui.grid.expandable','ui.grid.row'],
                                files: ['bower_components/angular-ui-grid/ui-grid.min.js', 'bower_components/angular-ui-grid/ui-grid.min.css']
                            }
                        ]);


                    }
                }


            })
            .state('state4', {
                url: '/state4',
                templateUrl: 'views/i18n.html',
                controller: 'TranslateController',
                controllerAs: 'transCtrl',
                data: {
                    title: "i18n"
                }
            })
            .state('state5', {
                url: '/state5',
                templateUrl: 'views/dragdrop.html',
                controller: 'DragdropController',
                controllerAs: 'Dragdrop',
                data: {
                    title: 'dragdrop'
                },
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                                {
                                    name:'ngDragDrop',
                                    files:['bower_components/angular-dragdrop/src/angular-dragdrop.js']
                                }
                            ]);
                    }
                }
            })
            .state('tabs',{
                url:'/tabs',
                views:{
                    '':{
                        templateUrl:'views/tabs.html',
                        controller:'TabsController',
                        controllerAs:'Tabs',
                        data:{
                            title:'tabs'
                        }
                    },
                    'component':{
                        templateUrl:'views/createComponent.html',
                        controller:'modelController',
                        controllerAs:'componentCtrl'
                    }
                }


            })
            .state('tabs.component',{
                url:'/createComponent',
                views:{

                }

            })
            .state('tabs.module',{
                url:'/createModule',
                views:{
                    'module':{
                        templateUrl:'views/createModule.html',
                        controller:'modelController',
                        controllerAs:'moduleCtrl'
                    }
                }
            })

    }

    function translate($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'lang/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        //$translateProvider.translations('en', translateEn);
        //$translateProvider.translations('ch', translateCh);
        //$translateProvider.preferredLanguage('en');
        //$translateProvider.fallbackLanguage('Ch');
        $translateProvider.registerAvailableLanguageKeys(['en', 'ch'], {
            'en_US': 'en',
            'zh_TW': 'ch'
        });
        $translateProvider.determinePreferredLanguage();

    }

})();

