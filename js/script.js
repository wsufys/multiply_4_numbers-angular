var app = angular.module('appnumb', []);
app.controller ('numb', function($scope)
{ $scope.number=1000;
 $scope.res = function() {
  var temp=$scope.number;
  if (temp > 999 && temp < 10000 && !isNaN(temp) && Number.isInteger(Number(temp)) && temp > 0) 	  
    {let arr = String($scope.number).split('');
	let num = Number(arr[0]*arr[1]*arr[2]*arr[3]);
	return num;}  	  
	else return ("Введите положительное целое четырехзначное число!");};})