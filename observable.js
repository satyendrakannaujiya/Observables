export class Observable {
	constructor(values, timeInterval) {
		this.values = values;
		this.timeInterval = timeInterval;
		this.index = 0;
	}

	subscribe(step,done) {
		this.subscriber = step;
		this.done = done;
		return this;
	}

	emit() {
		
		const timer = setInterval(()=>{
			if(this.index >= this.values.length){
				clearInterval(timer);
				this.done();
				return;
			}
			this.subscriber(this.values[this.index++]);

		},this.timeInterval);
	}

	push(value) {
		this.values.push(value);
		this.emit();
	}

}