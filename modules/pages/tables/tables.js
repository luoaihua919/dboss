//require('common/widget/widget');

module.exports = {
    url: '/tables',
    template: __inline('./tables.html'),
    //注意如果开启压缩，应采取此方式注入对象，否则压缩后将找不到
    controller :["$scope","$injector","$http",function($scope, $injector,$http) {
        //支持异步加载controller
        require.async('/modules/pages/tables/tableCtrl.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {'$scope': $scope});
        });
        require.async('/modules/pages/tables/table.paging.js', function(ctrl) {
            $injector.invoke(ctrl, this, {'$scope': $scope,'$http':$http});
        });
    }]
};