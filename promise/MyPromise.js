// 记录三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
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
            this._reject(error)
        }
	}

	/**
	 * 更改状态
	 * @param {*} state 状态
	 * @param {*} data 数据
	 */
	_changeState(state, data) {
        // 状态只能改变一次
        if(this._state !== PENDING){
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
}

const promise = new MyPromise((resolve, reject) => {
	throw new Error(123)
});

console.log(promise);
