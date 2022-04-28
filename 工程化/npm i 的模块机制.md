# npm i 的模块机制

为什么输入npm install 就可以自动安装依赖?  简述一下npm i 的模块机制

- 首先会查找当前目录的package.json文件分析出项目的首层依赖
- 再查询当前目录的node_modules文件夹里面是否已经下载了对应的依赖
  - 如果下载了, 啥也不做
  - 否则npm 向registry查询模块的压缩包网址,下载压缩包并且解压到当前项目的node_modules目录下