app.controller('MainController',['$scope',function($scope){
	
	$scope.title = "Main Title";
	
	$scope.promo = "Promo here";

	$scope.products = [
		{
			name: 'The Book of Trees',
			price: 19.99,
			pubdate: new Date('2014', '03', '08'),
			cover: 'img/book-of-trees.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Program or programed',
			price: 9,
			pubdate: new Date('2011', '01', '18'),
			cover: 'img/program.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Winchell',
			price: 22,
			pubdate: new Date('1988', '11', '05'),
			cover: 'img/winchell.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Wall Street',
			price: 7.99,
			pubdate: new Date('1972', '04', '15'),
			cover: 'img/wall-street.jpg',
			likes: 0,
			dislikes: 0
		}
	];

	$scope.plusOne = function(index){
		$scope.products[index].likes += 1;
	};

	$scope.minusOne = function(index){
		$scope.products[index].dislikes += 1;
	};

}]);