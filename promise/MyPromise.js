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
