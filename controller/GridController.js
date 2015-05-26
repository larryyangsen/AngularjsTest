/**
 * Created by Larry on 2015/5/6.
 */
(function () {
    angular.module('iNu')
        .controller('GridController', ["$scope", "$modal", GridController])
        .controller('ModalController', ["$scope", "$modalInstance", "datas", ModalController])

    function GridController($scope, $modal) {
        var self = this;
        self.gridOptions = {
            enableSorting: true,
            columnDefs: [
                {
                    field: 'Business',
                    displayName: '{{"Business"|translate}}',
                    headerCellFilter: 'translate',
                    cellTemplate: 'views/cellTemplate.html'
                },
                {name: '數據源', field: 'Source'},
                {name: '通話時長', field: 'Call.time'}
                //,
                //{
                //    name: '顯示細節',
                //    cellTemplate: '<button class="btn-primary" ng-click="grid.appScope.showMe(row);GridRow();">Show</button>'
                //}
            ],
            data: [
                {
                    "Business": [
                        {
                            "module": "私下聯絡",
                            "module_detail": "中間 near 四位 or 油箱 near 資料 你好 after 我的",
                            "keyword": "你好 after 油箱",
                            "content": "你好，你可以email給我，我的油箱是lll@gr.cn"
                        },
                        {
                            "module": "借款投資",
                            "module_detail": "借款 or 投資",
                            "keyword": "向銀行 after 借",
                            "content": "您可以向銀行辦理借款，來投資自己的事業"
                        }
                    ],
                    "Call": {time: '00:05:33', silent: '00:00:10'},
                    "Source": "語音"
                },
                {
                    "Business": [
                        {"module": "冒用身分", "module_detail": "我是", "keyword": "我是 after 的", "content": "我是王明的叔叔"}
                    ],
                    "Call": {time: '00:04:15', silent: '00:00:11'},
                    "Source": "語音"
                }
            ]

        };
        $scope.disableButton = disableButton;
        $scope.highlight = highlight;
        $scope.showDetail = showDetailModal;
        //$scope.showMe = showMe;


        function disableButton(entity) {
            if (entity.Business.length > 1) {
                return false;
            }
            else {
                return true;
            }
        }

        function showDetailModal(entity) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'cellModalContent.html',
                controller: 'ModalController',
                controllerAs: 'ModalCtrl',
                resolve: {
                    datas: function () {
                        return entity
                    }
                }
            });
        }

        //function showMe(row) {
        //    var index = self.gridOptions.data.indexOf(row.entity);
        //    if (self.gridOptions.data[index].Business.length > 1) {
        //        alert(self.gridOptions.data[index].Business[0].module + "\n" + self.gridOptions.data[index].Business[0].keyword +
        //            "\n" + self.gridOptions.data[index].Business[1].module + "\n" + self.gridOptions.data[index].Business[1].keyword +
        //            "\n" + self.gridOptions.data[index].Call.time + "\n" + self.gridOptions.data[index].Call.silent + "\n" + self.gridOptions.data[index].Source);
        //    }
        //    else {
        //        alert(self.gridOptions.data[index].Business[0].module + "\n" + self.gridOptions.data[index].Business[0].keyword +
        //            "\n" + self.gridOptions.data[index].Call.time + "\n" + self.gridOptions.data[index].Call.silent + "\n" + self.gridOptions.data[index].Source);
        //    }
        //
        //    console.log(row.entity);
        //}
    }

    function ModalController($scope, $modalInstance, datas) {
        var self = this;
        self.datas = datas;
        self.highlight = highlight;


    }
    function highlight(entity) {
        var keywordModule = ['after', 'and', 'near', 'not', 'or'];
        var keyword = entity.keyword;
        var content = entity.content;
        var keywordArray = new Array();
        var html = '';
        angular.forEach(keywordModule, function (item) {

            keyword = keyword.replace(item, ',');
            keywordArray = keyword.split(",");
        });
        angular.forEach(keywordArray, function (keywords) {
            content = content.replace(keywords.trim(), '<span class="highlight">' + keywords + '</span>')
        });
        return content;
    }
})();
