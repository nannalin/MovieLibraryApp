var app = angular.module("MoviesApp", []);

// $scope service allows us to connect to the view
// $http allows us to connect to network
app.controller("MovieController", function($scope, $http) {
	
	var moviesList = [
	{title: "The hobbit", rate: "PG_13", year: 2010, plot: "From lord of the ring."},
	{title: "Star trek", rate: "PG-13", year: 2012, plot: "this is a plot"},
	{title: "Star Wars", rate: "PG-13", year: 2014, plot: "This is the plot fpor star war"}
	];

	// send var moviesList to the frontend
	$scope.movies = moviesList;

	$scope.addMovie = function() {
		var addMovie = {
			title: $scope.movie.title,
			rate: $scope.movie.rate,
			year: $scope.movie.year,
			plot: $scope.movie.plot
		};

		$scope.movies.push(addMovie);
	}

	$scope.removeMovie = function(movie) {
		console.log("remove movie!");

		var index = $scope.movies.indexOf(movie);
		$scope.movies.splice(index, 1);
	}

	$scope.selectMovie = function(movie) {
		// pass in the reference the object movie to input boxes
		// so the change that happen in the input fields, 
		//update the model object directly
		$scope.movie = movie;
	}

	$scope.updateMovie = function() {
		alert($scope.movie.title);
		$scope.movie = movie;

	}
});