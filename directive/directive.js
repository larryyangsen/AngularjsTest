/**
 * Created by Larry on 2015/5/18.
 */
(function () {
    angular.module('app')
        .directive('titleData', ['$rootScope', '$timeout', '$translate', '$filter', titleData])
        .directive('numberPicker',numberPicker)

    ///////////////////////////////////////////////////
    function titleData($rootScope, $timeout, $translate, $filter) {
        var directive = {
            link: function (scope, ele) {
                var listener = function (event, toState, toParams, fromState, fromParams) {
                    var title = 'iNu';
                    $translate(title).then(function (translate) {
                        title = translate;
                        ele.text(title);
                    });
                    if (toState.data && toState.data.title) {
                        $translate(toState.data.title).then(function (translate) { //?t?X?h?y?t
                            title = translate;
                            ele.text(title);
                        });
                    }


                };
                $rootScope.$on('$stateChangeStart', listener);
                $rootScope.$on('$translateChangeSuccess', listener);
            }
        }
        return directive;
    }

    function numberPicker (){
        var directive ={
            restrict:'E',
            scope:{
                number:'=',
                size:'='
            },
            controller:numberPickerController,
            template:'<table><tbody><tr><th rowspan="2"><input type="text" size="{{size||2}}" ng-model="number" value="0" class="border-radius  text-center"onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th><th><a href="javascript: void(0)" class="fa fa-caret-up fa-lg" ng-click="up()"></a></th></tr><tr><td><a href="javascript: void(0)" class="fa fa-caret-down fa-lg" ng-click="down()"></a></td></tr></tbody></table>'

        }
        function numberPickerController($scope){
            $scope.up = function(){
                $scope.number++;
            }
            $scope.down = function(){
                $scope.number--;
            }
        }
        return directive;
    }
})();


