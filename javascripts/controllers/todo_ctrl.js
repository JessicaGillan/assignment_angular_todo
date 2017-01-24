todo.controller('todoCtrl',
  ['$scope', '$window',
    function($scope, $window) {
      $scope.item = { text: "Get groceries from the store",
                      dueDate: new Date(),
                      completed: false }

      $scope.items = [
        { text: "Get groceries from the store",
                        dueDate: new Date(),
                        completed: false },
        { text: "Get kittens from the store",
                        dueDate: new Date(),
                        completed: false },
        { text: "Get happiness from the store",
                        dueDate: new Date(),
                        completed: false }
      ];

      $scope.createTodo = function() {
        console.log($scope.item);
      };
    }
  ]
);
