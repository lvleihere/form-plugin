# form-plugin
基于jQuery的表单验证

/*
表单表单验证插件
author:吕雷
data：2017/7/13
version:1.0

README:
配置  （自定义属性 data-） 插件
1.独立插件   接口
2.依赖插件   接口
form
input   配置
	    	正则        data-dr-regexp
				邮箱：     /^\w+@\w+\.\w+/
				电话：     /^1\d{10}/

		不能为空	  		data-dr-required
		配置字符的最小范围  data-dr-min-length
		配置字符的最大范围  data-dr-max-length
		正则提示信息       data-dr-regexp-message
		错误提示           data-dr-require-message
*/
