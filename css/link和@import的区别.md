# link和@import的区别

- link是通过html标签引入css文件，可以设置rel属性。而@import则不能。
- 当解析到link标签时, 会立即加载其指向的css文件。而@import导入的css文件要等整个页面加载完毕后再会加载。
- @import 兼容性不如link, 需要IE5+才能使用。
- link使用使用js动态导入, 而@import不能。