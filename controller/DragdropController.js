/**
 * Created by Larry on 2015/5/21.
 */
(function(){
    angular.module('app')
        .controller('DragdropController',['$scope',DragdropController]);
    ///////////////////////////////////////////////////////////////
    function DragdropController($scope){
        var self = this;
        self.basicQuery = {editable:true};
        self.changeToEdit = changeToEdit;
        self.mustModel = [];
        self.mustNotModel = {};
        self.onDrop = onDrop;
        self.shouldModel = {};
        self.hideText =true;
        self.showText = showText;



        function changeToEdit(item,event) {
            self.hideText = !self.hideText

        }
        function onDrop(){
            self.basicQuery = {editable:true};
            console.log($scope.dndDragItem)
            console.log(  self.mustModel)
        }
        function showText(item){
            if(item.type!='BasicQuery'){
                return false;
            }
            else{
                return true;
            }
        }
    }
})();