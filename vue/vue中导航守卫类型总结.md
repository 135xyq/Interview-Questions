# vue中导航守卫类型总结

## 全局导航守卫

- beforeEach 

   每当要跳转到一个新路由时触发, 该守卫会被传入三个参数:

  - to: 即将要跳转到的路由对象
  - from : 源路由对象
  - next  : 一个函数, 决定是否要进行真正的跳转(vue2中的决定路由是否跳转的方法)
    - next() : 进行跳转
    - next(false) : 不进行跳转
    - next(路由对象) : 中断当前的路由跳转，跳转到指定路由

  

    在vue3的路由中，官方推荐通过返回值来决定是否要进行跳转: 

  - return true 或者 return undefined ，表示进行跳转
  - return false  不进行跳转
  - return 路由对象 ，表示中断当前的路由跳转，跳转到指定路由

- beforeResolve

​         类似于beforeEach

- afterEach 

​      在路由跳转完成后触发该守卫，该守卫会被传入两个参数:  to , from 对象

​      该守卫不能改变路由本身，但是它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。



## 路由独享的守卫

**beforeEnter**

​     在路由配置对象中可以通过beforeEnter属性配置，属性值为一个函数

​    在每次进入当前指定路由时运行该函数

## 组件内的导航守卫

- beforeRouteEnter : 

     在路由组件即将被渲染时触发, 此时因为还不确定是否要进行真正的路由跳转,新路由的组件实例还未创建, 该钩子里面访问不到组件实例this

- beforeRouteUpdate

  如果路由改变后, 渲染的仍然是当前组件，即组件会被复用，该钩子会触发。比如路由"/user/:id" , 当用户id发生变化时, 即使路由改变了，渲染的还是同一组件，组件会被复用，此时需要更新用户的数据，可以在该钩子函数里面进行处理。

- beforeRouteLeave

​        当前路由即将被切换前触发, 可以通过该钩子return false来阻止页面切换













