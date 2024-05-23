export default class CreateStore {
	constructor(reducer, initialState) {
		this.currentReducer = reducer;
		this.currentState = initialState;
		this.listeners = [];
		this.isDispatching = false;
	}
	
	getstate() {
		return this.currentState;
	}

	subscribe(listener) {
		this.listeners.push(listener);
		return function unsubscribe() {
			var index = this.listeners.index0f(listener);
			this.listeners.splice(index，1);
		}
	}

	dispatch(action){
		try {
			this.isDispatching = true;
			this.currentState = currentReducer(currentState, action);
		} finally {
			this.isDispatching = false;
		}
		this.listeners.slice().forEach(listener => listener());
		return action;
	}
}
