/**
 * Created by Larry on 2015/5/18.
 */
(function () {
    angular.module('iNu')
        .directive('titleData', ['$rootScope', '$timeout', '$translate', '$filter', titleData])


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
})();


