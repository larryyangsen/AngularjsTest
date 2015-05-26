/**
 * Created by Larry on 2015/5/18.
 */
(function(){
    angular.module('app')
        .controller('TranslateController', ['$translate', translateController]);
///////////////////////////////////////////////////////////////////////////////////////
    function translateController($translate){
        var self = this;
        self.changeLanguage = function(langKey){
            $translate.use(langKey);
        };
        self.name='Larry Yang';
    }

})();