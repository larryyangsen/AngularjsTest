/**
 * Created by Larry on 2015/5/6.
 */
(function(){
    angular.module('app')
        .controller('ChartController', ["$scope", "$timeout", AppController]);

    function AppController($scope, $timeout) {
        var self = this;
        ///////////////////////////////////需要binding到view的放上面,並依照字母排序//////////////////////////////////////////////////////////////
        self.add = add;
        self.changConfig =changConfig;
        self.config = {
            visible: true, // default: true
            extended: false, // default: false
            disabled: false, // default: false
            autorefresh: true, // default: true
            refreshDataOnly: true // default: false
        };
        self.data = [{
            key: "Cumulative Return",
            values: [
                {"label": "A", "value": -29.745466},
                {"label": "B", "value": 0},
                {"label": "C", "value": 32.45341563},
                {"label": "D", "value": 196.132156},
                {"label": "E", "value": 0.194321131},
                {"label": "F", "value": -98.5215213221},
                {"label": "G", "value": -13.45665456},
                {"label": "H", "value": -5.13132321}
            ]
        }];
        self.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value;
                },
                showValues: true,
                useInteractiveGuideling: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 100,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

        self.show = 'hide';


///////////////////////////////////不需要binding到view的放下面,並依照字母排序，若有需先執行的function先執行//////////////////////////////////////////////////////////////
        addValue();

        function add(label, value){
            self.data[0].values.push({"label": label, "value": parseFloat(value)});
            console.log(self.data[0].values.length);
        }

        function addValue() {
            var indexOfValue = Math.floor((Math.random() * self.data[0].values.length));
            self.data[0].values[indexOfValue].value += Math.random() * 5;
            $timeout(addValue, 1);
        }

        function changConfig(visible){
            self.config.visible = visible;
            if (visible) {
                self.show = 'hide';
            }
            else {
                self.show = 'show';
            }
        }
    }
})();
