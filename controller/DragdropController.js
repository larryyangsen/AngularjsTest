/**
 * Created by Larry on 2015/5/21.
 */
(function(){
    angular.module('iNu')
        .controller('DragdropController',['$scope',DragdropController]);
    ///////////////////////////////////////////////////////////////
    function DragdropController($scope){
        var self = this;
        self.textModule={

        };
        self.showText=false;
    }
})();