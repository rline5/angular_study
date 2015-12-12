/**
  Created by user on 2015-12-05
**/


angular.module('book')
.controller('bookListCtrl', function($scope,$filter){

	var selectedGrade = null;

	$scope.selectGrade = function(newGrade){
		selectedGrade = newGrade;
	}

	$scope.gradeFilterFn = function(book){
		return selectedGrade == null || Math.floor(book.grade) == selectedGrade;
	}
});