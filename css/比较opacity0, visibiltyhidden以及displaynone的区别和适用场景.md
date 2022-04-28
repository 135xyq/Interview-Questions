# 比较opacity:0, visibilty:hidden以及display:none的区别和适用场景:

- opacity: 元素仍然占据空间, 点击可以触发点击事件   适用: 可配合transition实现元素的隐藏/出现过渡动画
- visibilty: 元素仍然占据空间, 点击不能触发事件      适用: 元素的隐藏和显示不会改变页面布局
- display:   元素不占据空间,无法点击                       适用: 显示一些之前不存在的元素