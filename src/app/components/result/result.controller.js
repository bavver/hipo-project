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
  .controller('ResultController', ResultController);