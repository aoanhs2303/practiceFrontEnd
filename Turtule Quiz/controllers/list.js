(function () {
    angular.module("turtleFacts", [])
        .controller('listCtrl', ListController);
    ListController.$inject = ['quizMetrics', 'DataService'];
    
    function ListController(quizMetrics, DataService) {
        var vm = this;
        
        vm.quizMetrics = quizMetrics;
        vm.data = DataService.turtlesData;
        vm.activeTurtle = {};
        vm.changeActiveTurtle = function(index) {
            vm.activeTurtle = index;

        }
        vm.search = "";
        vm.quizActive = false;
        vm.activateQuiz = function() {
            quizMetrics.changeState("quiz", true);
        }
    }
    
})();
