在Vue中子组件为什么不能修改父组件传递过来的属性?

​      因为不能破坏数据的单向流动性, 单向流动性的好处在于能更容易的监控到数据的流动从而在出错时可以快速定位到出错的组件.