(function(){
	'use-strict'
	angular
	.module("DietCheckApp", [])
	.controller("DietCheckController", DietCheckFunction);
		DietCheckFunction.$inject = ["$scope"];
		function DietCheckFunction($scope) {
			$scope.dishes = "";
			$scope.checkDiet = function(){
				var your_dishes = $scope.dishes.split(",");
				if(your_dishes.length == 1 && your_dishes[0] == "") {
					$scope.dietOutput = "Please enter data first";
				} else if(your_dishes.length <= 3) {
					$scope.dietOutput = "Enjoy!";
				} else {
					$scope.dietOutput = "Too much!";
				}
		}
	}
})();