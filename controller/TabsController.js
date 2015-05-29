/**
 * Created by Larry on 2015/5/29.
 */
(function () {
    angular.module('app')
        .controller('TabsController', ["$scope", TabsController])
        .controller('modelController', ['$scope', modelController]);

    function modelController($scope) {
        var self = this;

        self.data = {};
        self.deselect = deselect;
        function deselect(s) {
            alert(s);
        }
    }

    function TabsController($scope) {
        var self = this;
        //self.deselect = deselect;
        self.tabs = [
            {title: 'component'},
            {title: 'module'}
        ]
        self.templates =[
            {title: 'temp1',url:'views/template1.html'},
            {title: 'temp2',url:'views/template2.html'}
        ]
        //function deselect(s) {
        //    alert(s);
        //}
    }
})();