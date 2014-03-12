
function Scope() {
	this.$$watchers = [];	
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
	var watch = {
		watchFn: watchFn,
		listenerFn: listenerFn
	};
	this.$$watchers.unshift(watch);
};

Scope.prototype.$digest = function() {
	var length = this.$$watchers.length;
	var watcher, newValue, oldValue;

	while (length--) {		
		watcher = this.$$watchers[length];
		watcher.watchFn(this);
		watcher.listenerFn(this);		
	}
};