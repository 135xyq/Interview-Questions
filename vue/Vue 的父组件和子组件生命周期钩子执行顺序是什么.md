# Vue 的父组件和子组件生命周期钩子执行顺序是什么 

顺序如下:

父组件: beforeCreate ---> created ---> beforeMount

子组件: beforeCreated ---> created ---> beforeMount ----> mounted

父组件: mounted

   总结: 父组件先注入数据, 然后在父组件mounted之前进行子组件的数据注入以及挂载, 子组件挂载后父组件再mounted

