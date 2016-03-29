app.controller('MainController',['$scope',function($scope){
	
	$scope.title = "Main Title";
	
	$scope.promo = "Promo here";

	$scope.products = [
		{
			name: 'The Book of Trees',
			price: 19.99,
			pubdate: new Date('2014', '03', '08'),
			cover: 'img/book-of-trees.jpg'
		},
		{
			name: 'Program or programed',
			price: 9,
			pubdate: new Date('2011', '01', '18'),
			cover: 'img/program.jpg'
		}
	]

}]);