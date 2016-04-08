var http=["$scope","$http",function($scope,$http){

    $http.get('api/data.json')
        .success(function (response) {
            $scope.items = response;
            $scope.itemsPerPage = 10;
            $scope.pagedItems = [];
            $scope.currentPage = 0;

            for(var i=0;i<$scope.items.length;i++){
                if($scope.items[i]["Flag"]==0){
                    $scope.items[i].test1="text-success";
                    $scope.items[i].test2="fa-check";
                }else if($scope.items[i]["Flag"]==1){
                    $scope.items[i].test1="text-danger";
                    $scope.items[i].test2="fa-warning";
                }else{
                    $scope.items[i].test1="text-warning";
                    $scope.items[i].test2="fa-flash";
                }
                if(i%$scope.itemsPerPage===0){
                    $scope.pagedItems[Math.floor(i/$scope.itemsPerPage)]=[];
                }
                $scope.pagedItems[Math.floor(i/$scope.itemsPerPage)].push($scope.items[i]);

            }

            $scope.range = function (start, end) {
                var ret = [];
                if (!end) {
                    end = start;
                    start = 0;
                }
                for (var i = start; i < end; i++) {
                    ret.push(i);
                }
                return ret;
            };

            $scope.prevPage = function () {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };

            $scope.nextPage = function () {
                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };

            $scope.setPage = function () {
                $scope.currentPage = this.n;
            };
        });


}];

return http;