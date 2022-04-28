# script标签的引入方式有哪些？

- 正常引用: 当文档解析时碰到script标签，会停止后续渲染转而加载script文件，加载完成后立即执行scirpt代码，代码执行完成后再继续渲染页面。
- async: 当文档解析时碰到script标签，会异步加载script文件，加载完成后立即执行script代码。因此多个带有async属性的script并不能保证它们的执行顺序。
- defer :   当文档解析时碰到script标签，会异步加载script文件，加载完后如果页面还没有解析完成，它会等到页面解析完成后再执行Scirpt代码。 多个带有defer属性的script标签会顺序执行。