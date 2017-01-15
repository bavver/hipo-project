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
  controller: 'ResultController',
  bindings: {
    $transition$: '<'
  }
};

angular
  .module('root')
  .component('result', result);
})(window.angular);
(function(angular){
'use strict';
ResultController.$inject = ["$location", "$http", "$window"];
function ResultController($location, $http,$window) {
  var vm = this;
  vm.$onInit = init;

  vm.reload = reload;

  function reload() {
     $window.location.reload();
  }

  function init() {
    var keyword = $location.search().keyword;
    var location = $location.search().location;
    var clientId = "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK";
    var clientSecret = "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF";
    $http.get(
      "https://api.foursquare.com/v2/venues/explore/?near=" +
      location +
      "&query=" +
      keyword +
      "&client_id=" + clientId +
      "&client_secret=" + clientSecret +
      " &v=20131124"
    ).then(function(result) {
     vm.places = result.data.response.groups[0].items;
      var searchValues = {
        keyword: keyword,
        location: location
      };
      vm.recents = JSON.parse($window.localStorage.getItem("recents"));
      if(!vm.recents)
        vm.recents = [];

      vm.recents.push(searchValues);
      $window.localStorage.setItem("recents",JSON.stringify(vm.recents));
    });
  }
}

angular
  .module('root')
  .controller('ResultController', ResultController);})(window.angular);
(function(angular){
'use strict';
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./home.html','<span>serdar</span>');}]);})(window.angular);