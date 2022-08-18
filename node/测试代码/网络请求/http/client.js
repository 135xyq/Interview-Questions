const http = require("http");

const request = http.request(
	"http://xyq135.com",
	{
		method: "GET",
	},
	(resp) => {
		console.log("响应头：  ", resp.headers);
		let result = "";
		resp.on("data", (chunk) => {
			result += chunk.toString("utf-8");
		});

        resp.on("end",()=>{
            console.log("请求成功！")
            console.log(result);
        })
	}
);

request.end();
