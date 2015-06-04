/**
 * Created by Larry on 2015/6/4.
 */
(function () {
    angular.module('app')
        .service('getJson', ['$q', '$http', 'URI_PATH', getJson])
        .service('processJson', ['getJson', processJson]);

    function getJson($q, $http, URI_PATH) {
        var self = this;
        self.getData = getData;

        function getData(url) {
            var deferred = $q.defer();
            $http.get(URI_PATH + url).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }

    function processJson(getJson){
        var self = this;
        self.getJsonData = getJsonData;

        function getJsonData(){
            return getJson.getData('queryRoleList.json');
        }
    }
})();