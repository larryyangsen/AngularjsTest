/**
 * Created by Larry on 2015/5/4.
 */
(function () {
    angular.module('app', ['nvd3', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.selection'])
        .config(['$stateProvider', '$urlRouterProvider',config])


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('state1', {
                url: '/state1',
                views: {
                    "view1": {template: "<div class='alert alert-success'>state1.view1</div>"},
                    "view2": {template: "<div class='alert alert-success'>state1.view2</div>"}
                }
            })
            .state('state2', {
                url: '/state2',
                views: {
                    "view1": {template: "<div class='alert alert-danger'>Chart.view1</div>"},
                    "view2": {
                        templateUrl: 'chart.html',
                        controller: 'ChartController',
                        controllerAs: 'ctrl'
                    }
                }

            })
            .state('state3', {
                url: '/state3',
                views: {
                    "view1": {template: "<div class='alert alert-success' >UIGrid.view1</div>"},
                    "view2": {
                        templateUrl: 'ui_grid.html',
                        controller: 'GridController',
                        controllerAs: 'gridCtrl'
                    }
                }
            })

    }
})();

