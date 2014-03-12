
function Scope() {
	this.$$watchers = [];	
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
	var watch = {
		watchFn: watchFn,
		listenerFn: listenerFn,
		last: {}
	};
	this.$$watchers.unshift(watch);
};

Scope.prototype.$digest = function() {
	var length = this.$$watchers.length;
	var watcher, newValue;

	while (length--) {		
		watcher = this.$$watchers[length];
		newValue = watcher.watchFn(this);

		if (watcher.last != newValue) {
			watcher.last = newValue;
			watcher.listenerFn(this);
		}		
	}
};