app.controller('MainController',['$scope',function($scope){
	
	$scope.title = "Main Title";
	
	$scope.promo = "Promo here";

	$scope.product = {
		name: 'The Book of Trees',
		price: 19.99,
		pubdate: new Date('2014', '03', '08')
	}

}]);