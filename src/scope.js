
function Scope() {
	this.$$watchers = [];	
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
	var watch = {
		watchFn: watchFn,
		listenerFn: listenerFn || function() {},
		last: {}
	};
	this.$$watchers.unshift(watch);
};

Scope.prototype.$digest = function() {
	var length = this.$$watchers.length;
	var watcher, newValue, oldValue;

	while (length--) {		
		watcher = this.$$watchers[length];
		newValue = watcher.watchFn(this);
		oldValue = watcher.last;

		if (oldValue != newValue) {
			watcher.last = newValue;
			watcher.listenerFn(newValue, oldValue, this);
		}		
	}
};