# vue3的composition api和 react hook的区别？

react:

  由于react没有实现真正的数据双向绑定即没有对数据进行劫持，react是依靠hook的调用顺序来知道重渲染时，本次的state对应于哪一个useState hook。因此在react中使用hook有如下要求:

- 不能在循环/判断/嵌套函数内使用hook
- 总是确保hook出现在函数组件的最顶部
- 对于一些hook如useEffect, useMemo, useCallBack, 必须手动注册依赖项。

而在vue中, 基于vue的响应式系统，composiiton api在调用时可以不用考虑顺序并且能使用在判断/循环/内部函数中。并且由于vue的响应式数据会自动收集依赖，因此使用一些composiiton api如computed以及watchEffect时无需手动注册依赖。