/**
 * Created by Larry on 2015/5/19.
 */
angular.module('app')
    .controller('State1Controller', ['$scope', '$timeout', '$log', state1Controller]);


function state1Controller($scope, $timeout, $log) {
    var self = this;
    self.click = doLog;
    self.data = {
        value1: 1,
        value2: 2
    };
    function doLog(value) {
        if (value)$log.info(value);
        else $log.info(self.data.value1 * self.data.value2);
    };
}