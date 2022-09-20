# DOM事件的注册和移除

- html行内注册

  例如:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<title>Document</title>
  	<style>
  		#app{
  			width: 400px;
  			height: 200px;
  			background-color: red;
  		}
  	</style>
  </head>
  <body>
  	<div id="app" onclick="handler()"></div>
  	<script>
  		function handler(e){
  			console.log("点击了div");
  		}
  	</script>
  </body>
  </html>
  ```

- dom级注册

   先获取dom引用

  - 第一种:

       给dom元素添加特定事件属性,赋值为处理函数

      如dom.onclick = handler

      这种方式, 同一事件类型只能绑定至多一个处理函数

    移除: 将对应的事件属性赋值为null即可

  - 第二种:

      通过dom.addEventListener("事件类型",处理函数, true/false)

      第三个参数指定了事件触发是冒泡还是捕获: 

         -  true时: 捕获
         -  false时: 冒泡

    该方式可以为同一事件类型绑定多个处理函数

    移出: dom.removeEventListener("事件类型",处理函数)

      

      