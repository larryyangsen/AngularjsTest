/**
 * Created by Larry on 2015/5/6.
 */
(function(){
    angular.module('app')
        .controller('ChartController', ["$scope", "$timeout", AppController]);
    ///////////////////////////////////////////////////////////////////
    function AppController($scope, $timeout) {
        var self = this;

        self.add = add;
        self.addContent='stop';
        self.addValue= false;
        self.changConfig =changConfig;
        self.config = {
            visible: true, // default: true
            extended: false, // default: false
            disabled: false, // default: false
            autorefresh: true, // default: true
            refreshDataOnly: true // default: false
        };
        self.chartClick = chartClick;
    self.chartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
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
        self.labels= ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
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



///////////////////////////////////?//////////////////////////////////////////////////////////////

        Chart.defaults.global.animationEasing= "easeOutElastic";
        autoAddValue();

        function add(label, value){
            self.data[0].values.push({"label": label, "value": parseFloat(value)});
            console.log(self.data[0].values.length);
        }

        function autoAddValue() {

            if(self.addValue){

                self.addContent='stop';
                var indexOfData = Math.floor((Math.random() * self.data[0].values.length));
                var indexOfChartData =parseInt(Math.random() * self.chartData.length);
                var indexOfChartData2 =parseInt( Math.random() * self.chartData[indexOfChartData].length);
                self.chartData[indexOfChartData][indexOfChartData2] +=parseInt( Math.random()*10);
                self.data[0].values[indexOfData].value += Math.random() * 5;
            }
            else{
                self.addContent='start';
            }
             $timeout(autoAddValue, 1);
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
        function chartClick(points,evt){

            console.log(points,evt);

        }
    }
})();
