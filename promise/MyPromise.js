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
		return new MyPromise((resolve, reject) => {});
	}
}

const promise = new MyPromise((resolve, reject) => {
	throw new Error(123);
});
