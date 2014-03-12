

describe("Scope", function() {

	it("can be constructed and used as an object", function() {
		var scope = new Scope();
		scope.aProperty = 3;

		expect(scope.aProperty).toBe(3);
	});		

	describe("digest", function() {

		var scope;

		beforeEach(function() { 
			scope = new Scope();
		});

		it("calls the listener function of a watch on first $digest", function() {
			var watchFn = function() {};
			var listenerFn = jasmine.createSpy();

			scope.$watch(watchFn, listenerFn);
			scope.$digest();

			expect(listenerFn).toHaveBeenCalled();
		});

		it("calls the watch function with the scope as the argument", function() {
			var watchFn = jasmine.createSpy();
			var listenerFn = function() {
			};

			scope.$watch(watchFn, listenerFn);
			scope.$digest();

			expect(watchFn).toHaveBeenCalledWith(scope);
		});			
	});	
});