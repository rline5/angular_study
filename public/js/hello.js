/**
  Created by user on 2015-12-11
**/


angular.module('hello',[])
.controller('HelloController', function($scope, $filter){
   	$scope.hello = {
   		msg:'hello.'
   		/*
		msg:'안녕하세요',
		show:'' 
   		*/
	};
	//$scope.hello.msg = ''; //위와 같은 소스

	$scope.toUpper = function(){
		$scope.hello.msg = $filter('uppercase')($scope.hello.msg);
	}

	$scope.toDelete = function(idx){
		$scope.items.splice(idx,1);
	}

	$scope.items = [
		{
			title:'볼펜',
			count:4,
			price:1800
		},
		{
			title:'지우개',
			count:1,
			price:800
		},
		{
			title:'연필',
			count:12,
			price:400
		}
	]
});