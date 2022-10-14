# vue3中为什么要使用proxy而放弃了defineProperty

defineProperty的缺点:

- 无法监控对象的属性增加或删除
- 通过下标修改数组时,无法监控
- 由于vue2中是使用defineProperty深度遍历对象使其成为响应式,当前对象嵌套比较深时, 性能消耗比较大

proxy的优势:

 defineProperty只能拦截对象的已有属性, 而proxy可以拦截整个对象, 只要是Reflect上存在的api(如get,set,deletePropery), proxy都可以进行重写拦截对象

- proxy可以监控到对象属性的新增和删除
- 可以监控到通过下标修改数组
- 当响应式对象的某个属性为对象时,并不是一开始就将其设为响应式, 而是在读取时返回一个代理，节省了性能