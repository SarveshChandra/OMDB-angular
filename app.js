(function() {
	
	var app=angular.module('omdb',[]);
	
	app.controller('searchController', function($scope, $http) {
		$scope.data=[];
		$scope.input="";
		$scope.results=[];
		$scope.itemcount=0;
		$scope.itemdisplay=0;
		$http({
				method: 'GET',
				url: 'http://deepknowhow.com/api.json'
				}).then(function successCallback(response) {
					$scope.data=response.data;
				}, function errorCallback(response) {
					$scope.data=0;
		});
		
		$scope.run=function() {	
			$scope.results=[];
			$scope.itemcount=0;
			$scope.itemdisplay=0;
			for(count=0;count<$scope.data.length;count++)
			{
				if($scope.data[count].title.toUpperCase().search($scope.input.toUpperCase())!=-1)
				{
					++$scope.itemcount;
					$scope.results.push($scope.data[count]);
				}
			}
			
			$scope.setDisplay=function(show) {
			$scope.itemdisplay=1;
			for(count=0;count<$scope.results.length;count++)
			{
					if(show==$scope.results[count].title)
					{
						$scope.results=$scope.results[count];
						break;
					}
			}
			};
		};
		
		$scope.reset=function() {
			$scope.results=[];
			$scope.input="";
			$scope.itemdisplay=0;
			$scope.itemcount=0;
		};
	});
	
})();	
