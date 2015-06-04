/**
 * Created by Larry on 2015/5/19.
 */
angular.module('app')
    .controller('State1Controller', ['$scope', '$timeout', '$log','processJson', state1Controller]);


function state1Controller($scope, $timeout, $log,processJson) {
    var self = this;
    processJson.getJsonData().then(function(data){
        console.log(data);
    })
    self.click = doLog;
    self.data = {
        value1: 1,
        value2: 2
    };
    self.datas = [
        {'name': 'Must', 'modules': [{'type': 'query'},{'type': 'named'}]},
        {'name': 'Must_not', 'modules': [{'type': 'query'}]},
        {'name': 'Should', 'modules': [{'type': 'named'}]}
    ];
    self.setClass = setClass;

    function setClass(index) {
        var className = ['panel panel-primary', 'panel panel-success', 'panel panel-warning'];
        return className[index];
    }

    function doLog(value) {
        if (value)$log.info(value);
        else $log.info(self.data.value1 * self.data.value2);
    };
}