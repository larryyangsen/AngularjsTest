/**
 * Created by Larry on 2015/5/6.
 */
(function(){
    angular.module('app')
        .controller('GridController', ["$scope", GridController]);
    function GridController($scope) {
        var self = this;

        self.gridOptions={
            enableSorting: true,
            enableRowSelection:true,
            columnDefs :[
                {name:'年齡',field:'Name'},
                {name:'性別',field:'Sex'},
                {name:'居住地',field:'Address.City'},
                {name:'顯示細節',cellTemplate:'<button class="btn-primary" ng-click="grid.appScope.showMe(row)">Show</button>'}
            ],
            data :[
                {
                    "Name":"Larry",
                    "Address":{City:'雲林縣',street:'斗六市文化路12號',Zip:'640'},
                    "Age":28,
                    "Sex":"Male"
                },
                {
                    "Name":"Mary",
                    "Address":{City:'台北市',street:'忠孝東路200號',Zip:'110'},
                    "Age":28,
                    "Sex":"Female"
                }
            ]
        };
        $scope.showMe = showMe;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
        function showMe(row){
            var index = self.gridOptions.data.indexOf(row.entity);
            alert(self.gridOptions.data[index].Name+"\n"+self.gridOptions.data[index].Age+"\n"+self.gridOptions.data[index].Sex+"\n"+self.gridOptions.data[index].Address.Zip+self.gridOptions.data[index].Address.City+self.gridOptions.data[index].Address.street);
            console.log(row.entity);
        }

    }

}
)();
