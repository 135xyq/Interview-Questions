# 块级格式化上下文

BFC为一个独立的渲染区域, 区域内的元素与区域外的元素不会互相影响。

如何创建一个BFC:

- 根元素
- position为absolute/fixed
- overflow不等于visible
- display为inline-block或者table
- float元素

BFC的特征与应用

- 创建BFC的元素的自动高度会计算浮动元素(解决浮动元素的高度坍塌)
- 创建BFC的元素不会与浮动元素重叠  (实现两栏布局)s
- 处于不同BFC下的元素的margin不会合并(解决margin合并)

