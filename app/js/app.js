var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.title = "Testing App";
    $scope.user = {
        username:"",
        password:""
    };

    $scope.login = function(user){
        console.log( $scope.user);
        $scope.len = $scope.user.password.length;
        if($scope.len >= 8){
            $scope.strength = 'strong';
        }else if($scope.len >= 5){
            $scope.strength = 'medium';
        }else{
            $scope.strength = "weak";
        }
        console.log($scope.strength);
    }
});
app.directive('myFirstDirective',function(){
    return{
        restrict:'E',
        template:'<h1>It\'s raining here.</h1>'
    }
})
