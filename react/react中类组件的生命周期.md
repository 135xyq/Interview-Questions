# react中类组件的生命周期

类组件的生命周期可以分为如下三个阶段

## 创建阶段

- constructor: 在创建一个类组件时, 会首先运行其constructor, 在构造器中通常初始化组件的状态以及在组件实例上定义一些方法和属性
- getDerivedStateFromProps: 组件的一个静态方法, 在组件创建阶段和更新阶段都会触发, 在该钩子函数中可以获取传入的prop和组件的状态
- render: 类组件必须实现的方法, 用来渲染dom结构,该方法中可以使用this.state和this.props
- componentDidMount: 组件初次挂载完毕时触发, 一般在该钩子中操作真实dom元素或者使用ajax请求远程数据

## 更新阶段

- getDerivedStateFromProps

- shouldComponentUpdate: 在重新渲染之前运行该函数来决定是否需要重新渲染, 该函数会被传入两个参数: props和state

    默认返回true代表需要重新渲染, 返回false则说明不需要重新渲染   可以作为一个性能优化点

- render: 重新渲染构造出新的虚拟结点树

- getSnapShotBeforeUpdate

    在更新之前调用, 此时组件的dom结构还没有真正更新

- componentDidUpdate

    组件更新完后触发, 此时dom结构已经是最新的，可以做一些dom操作

## 卸载阶段

- componentWillUnmount

   组件即将卸载时触发, 一般在该钩子中取消一些计时器或者取消监听dom元素的事件处理函数

