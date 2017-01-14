(function(angular){
'use strict';
angular
  .module('root', [
   'ui.router'
  ])
   .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {        
        url: '/home',
        component: 'home'
      })
      .state('result', {        
        url: '/result',
        component: 'result'
      });
  }]);
  
})(window.angular);
(function(angular){
'use strict';
var home = {
  templateUrl: 'components/home/home.html',
  controller: 'HomeController'
};

angular
  .module('root')
  .component('home', home);
})(window.angular);
(function(angular){
'use strict';
function HomeController(){
    var vm = this;
}


angular
  .module('root')
  .controller('HomeController', HomeController);})(window.angular);
(function(angular){
'use strict';
var result = {
  templateUrl: 'components/result/result.html',
  controller: 'ResultController'
};

angular
  .module('root')
  .component('result', result);
})(window.angular);
(function(angular){
'use strict';
function ResultController(){
    var vm = this;
}


angular
  .module('root')
  .controller('ResultController', ResultController);})(window.angular);
(function(angular){
'use strict';
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./home.html','<span>serdar</span>');}]);})(window.angular);