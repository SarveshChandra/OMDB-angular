(function() {
	
	var app=angular.module('omdb-items',['$http', function($http) {
		var omdb=this;
		omdb.items=[];
		$http.get('').success(function(data) {
			omdb.items=data;
		});
	}	
	]);
	
})();	
