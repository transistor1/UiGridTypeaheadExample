angular.module('myApp', ['ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'usersService', 'companyService', 'ui.bootstrap','ui.grid.resizeColumns'])
.controller('myCtrl', ['$scope', 'companies', 'users', function($scope, companies, users){
	
	$scope.companies = companies.query();
	
	$scope.gridOptions = {
		columnDefs: [
			{field:'company', name: 'company', editableCellTemplate: 'typeahead.html'},
			{field: 'firstName', name: 'firstName'}, 
			{field: 'lastName', name: 'lastName'}, 
		],
		data: users.query(),
		enableCellEditOnFocus: true,
	};
	
}]);


angular.module('usersService', ['ngResource'])
.factory('users', ['$resource', function($resource){
	return $resource('users.json', {}, {
		query: {method: 'GET', isArray: true}
	})
}]);

angular.module('companyService', ['ngResource'])
.factory('companies', ['$resource', function($resource){
	return $resource('companies.json', {}, {
		query: {method: 'GET', isArray: true}
	})
}]);
