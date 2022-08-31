// 记录三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

/**
 * 将函数加入微队列执行
 * @param {function} callback
 */
function runMicroTask(callback) {
	if (process && process.nextTick) {
		// node环境下执行
		process.nextTick(callback);
	} else if (MutationObserver) {
		// 在浏览器环境下执行
		const p = document.createElement("p");
		const observer = new MutationObserver(callback);
		observer.observe(p, {
			childList: true, // 观察该元素内部的变化
		});
		p.innerHTML = "1";
	} else {
		setTimeout(callback, 0);
	}
}

/**
 * 判断一个数据是否是Promise对象
 * @param {any} obj
 * @returns
 */
function isPromise(obj) {
	return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}

/**
 *
 *
 * @class MyPromise
 */
class MyPromise {
	/**
	 *
	 * @param {function} executor 执行函数，包括resolve 和reject函数
	 */
	constructor(executor) {
		this._state = PENDING; //初始状态
		this._value = undefined; //初始数据
		this._handleQueue = []; //函数执行队列
		// 处理错误，报错直接推向reject
		try {
			executor(this._resolve.bind(this), this._reject.bind(this));
		} catch (error) {
			this._reject(error);
		}
	}

	/**
	 * 更改状态
	 * @param {*} state 状态
	 * @param {*} data 数据
	 */
	_changeState(state, data) {
		// 状态只能改变一次
		if (this._state !== PENDING) {
			return;
		}
		this._state = state;
		this._value = data;
		this._handleRunFunction();
	}

	/**
	 * 将函数加入队列
	 * @param {Function} executor 处理函数
	 * @param {String} state 函数对应的状态
	 * @param {Function} resolve 让then返回的promise成功
	 * @param {Function} reject 让then返回的promise失败
	 */
	_handlePushFunction(executor, state, resolve, reject) {
		this._handleQueue.push({
			executor,
			state,
			resolve,
			reject,
		});
	}

	/**
	 * 执行对列中的函数
	 */
	_handleRunFunction() {
		if (this._state === PENDING) {
			// 状态为pending时啥都不干
			return;
		}
		while (this._handleQueue[0]) {
			this._handleOneFunction(this._handleQueue[0]);
			this._handleQueue.shift(); //处理完就删除
		}
	}

	/**
	 * 处理单个队列的值
	 * @param {Object} handler 每一个队列的值
	 */
	_handleOneFunction({ executor, state, resolve, reject }) {
		runMicroTask(() => {
			if (this._state !== state) {
				return;
			}
			if (typeof executor !== "function") {
				// 传递后续处理并非一个函数
				this._state === FULFILLED
					? resolve(this._value)
					: reject(this._value);
				return;
			}
			try {
				const result = executor(this._value);
				if (isPromise(result)) {
					result.then(resolve, reject);
				} else {
					resolve(result);
				}
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * 当前任务成功
	 * @param {*} data 传递的数据
	 */
	_resolve(data) {
		this._changeState(FULFILLED, data);
	}

	/**
	 * 当前任务失败
	 * @param {*} reason 失败的原因
	 */
	_reject(reason) {
		this._changeState(REJECTED, reason);
	}

	/**
	 * then方法
	 * @param {function} handleResolve resolve状态的后续处理函数
	 * @param {function} handleReject reject状态的后续处理函数
	 * @returns 返回一个新的promise
	 */
	then(handleResolve, handleReject) {
		return new MyPromise((resolve, reject) => {
			this._handlePushFunction(handleResolve, FULFILLED, resolve, reject); //将promise成功的函数加入队列
			this._handlePushFunction(handleReject, REJECTED, resolve, reject); //将失败的函数加入队列
			this._handleRunFunction();
		});
	}

	/**
	 * catch方法，处理失败
	 * @param {Function} onReject
	 */
	catch(onReject) {
		return this.then(null, onReject);
	}

	/**
	 * 无论成功还是失败都会执行回调
	 * @param {Function} onSettled
	 */
	finally(onSettled) {
		return this.then(
			(data) => {
				onSettled();
				return data;
			},
			(reason) => {
				onSettled();
				throw reason;
			}
		);
	}

	/**
	 * 返回一个已完成的Promise
	 * 特殊情况：
	 * 1. 传递的data本身就是ES6的Promise对象
	 * 2. 传递的data是PromiseLike（Promise A+），返回新的Promise，状态和其保持一致即可
	 * @param {any} data
	 */
	static resolve(data) {
		if (data instanceof MyPromise) {
			return data;
		}
		return new MyPromise((resolve, reject) => {
			if (isPromise(data)) {
				data.then(resolve, reject);
			} else {
				resolve(data);
			}
		});
	}

	/**
	 * 得到一个被拒绝的Promise
	 * @param {any}} reason
	 */
	static reject(reason) {
		return new MyPromise((resolve, reject) => {
			reject(reason);
		});
	}
	/**
	 * 得到一个新的Promise
	 * 该Promise的状态取决于proms的执行
	 * proms是一个迭代器，包含多个Promise
	 * 全部Promise成功，则返回的Promise成功，数据为所有Promise成功的数据，并且顺序是按照传入的顺序排列
	 * 只要有一个Promise失败，则返回的Promise失败，原因是第一个失败的Promise的原因
	 * @param {iterator} proms
	 */
	static all(proms) {
		return new MyPromise((resolve, reject) => {
			try {
				const results = [];
				let count = 0; // Promise的总数
				let fulfilledCount = 0; // 已完成的数量
				for (const p of proms) {
					let i = count;
					count++;
					MyPromise.resolve(p).then((data) => {
						fulfilledCount++;
						results[i] = data;
						if (fulfilledCount === count) {
							// 当前是最后一个Promise完成了
							resolve(results);
						}
					}, reject);
				}
				if (count === 0) {
					resolve(results);
				}
			} catch (error) {
				reject(error);
				console.error(error);
			}
		});
	}

	/**
	 * 等待所有的Promise有结果之后
	 * 该方法返回的Promise完成
	 * 并且按照顺序将所有结果汇总
	 * @param {iterator} proms
	 */
	static allSettled(proms) {
		const ps = [];
		for (const p of proms) {
			ps.push(
				MyPromise.resolve(p).then(
					(value) => ({
						status: FULFILLED,
						value,
					}),
					(reason) => ({
						status: REJECTED,
						reason,
					})
				)
			);
		}
		return MyPromise.all(ps);
	}

	/**
	 * 返回的Promise与第一个有结果的一致
	 * @param {iterator} proms
	 */
	static race(proms) {
		return new MyPromise((resolve, reject) => {
			for (const p of proms) {
				MyPromise.resolve(p).then(resolve, reject);
			}
		});
	}
}

const promise = new MyPromise((resolve, reject) => {
	resolve(1);
});

promise
	.then((data) => {
		console.log(data);
		return new Promise((resolve, reject) => {
			resolve(213);
		});
	})
	.then((res) => {
		console.log(res);
	});
