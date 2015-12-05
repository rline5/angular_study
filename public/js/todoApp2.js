var model = {
	user:'해정',
	items: [
		{action:'출근하기', done:false},
		{action:'스터디 예습', done:true},
		{action:'도서 예매', done:false},
		{action:'데이트', done:true}
	]
};

var todoApp = angular.module('todoApp', []);
todoApp.controller("TodoController", function($scope){
	$scope.todo = model;

	$scope.incompleteCount = function(){
		var count = 0;
		angular.forEach($scope.todo.items, function(item){
			if(!item.done){
				count++;
			}
		});
		return count;
	}
	


});
