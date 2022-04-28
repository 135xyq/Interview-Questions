# 谈谈对redux中间件的理解

创建仓库时可以通过传入第二个或第三个参数applyMiddleWare来给仓库注册中间件, 中间件可以拦截action的dispatch, 即在disaptch一个action之后, 仓库真正的调用reducer之前可以通过中间件做一些额外的事情比如副作用处理和日志记录. 

一个中间件的形式如下:

```js
const middleWare = store=>next=>action{
          
}
```

常用中间件有:

- redux-saga

  用来处理副作用, 基于es6的生成器和指令系统

  saga不会拦截action, 并且对action无特定要求, 只要是正常平面对象即可

- redux-thunk: 

   用来处理副作用, 原理:

    规定副作用Action必须为一个函数, 当一个action被dispatch后, redux-thunk中间件会进行拦截, 如果发现本次的action是一个函数, 它会运行该函数并传入仓库的getState和dispatch方法以便在函数内部执行完副作用后进行真正的仓库状态更改并且此时不会调用next

  如果发现本次的action是一个平面对象则直接next

- redux-logger:

   日志记录