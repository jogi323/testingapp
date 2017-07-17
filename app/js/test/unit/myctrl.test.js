describe('testing angular js application', function() {
    beforeEach(function() {
        module('myApp');
    });
    describe('testing angular js myCtrl controller', function() {
        var scope, ctrl;
        beforeEach(inject(function($injector, $controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('myCtrl', { $scope: scope });
        }));
        it('should initialize the title in the scope', function() {
            expect(scope.title).toBeDefined;
            expect(scope.title).toBe("Testing App");
        });
        it('should initialize the user object', function() {
            expect(scope.user).toBeDefined;
            expect(typeof(scope.user.username)).toBe('string');
            scope.user.password = 'longerthaneightchars';
            scope.login();
            expect(scope.strength).toEqual('strong');
        });
        it('should password strength is "medium" if length is >= 5', function() {

            scope.user.password = 'longe';
            scope.login();
            expect(scope.strength).toEqual('medium');

        });
        it('should password strength is "weak" if length is < 5', function() {

            scope.user.password = 'long';
            scope.login();
            expect(scope.strength).toEqual('weak');

        });
    });
    describe('directive testing', function() {
        var $compile, $rootScope;
        beforeEach(inject(function(_$rootScope_, _$compile_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('replace element with proper content', function() {

            var elem = $compile(' <my-first-directive></my-first-directive>')($rootScope);

            $rootScope.$digest();

            expect(elem.html()).toContain('It\'s raining here.');
        })
    });
});