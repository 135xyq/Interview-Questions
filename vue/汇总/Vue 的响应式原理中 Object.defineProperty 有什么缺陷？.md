# Vue 的响应式原理中 Object.defineProperty 有什么缺陷？

- 由于Object.definedProperty只能为data对象中的已有属性设置响应式, 其监控不到后续动态添加的新属性
- 删除data中的某个属性时, Object.definedProperty监控不到
- 通过数组下标修改数组时, 监控不到