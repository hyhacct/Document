---
title: "Goland"
titleTemplate: Gin框架解决跨域配置
---

# 概述

往下看

## 代码

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Print("123")

	router()
}

type Login struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func router() {
	g := gin.Default()

	g.Use(CORSMiddleware())

	var Json Login

	g.POST("/api/v50/user/login", func(ctx *gin.Context) {

		err := ctx.ShouldBindJSON(&Json)
		if err != nil {
			ctx.JSON(400, gin.H{"code": "400", "message": err.Error()})
			return
		}

		if Json.Username == "" || Json.Password == "" {
			ctx.JSON(400, gin.H{"code": "400", "message": "账号或者密码不能为空"})
			return
		}

		ctx.JSON(200, gin.H{
			"code":    "200",
			"message": "登录成功",
			"data": gin.H{
				"token": "abcd001002",
				"user": gin.H{
					"id":       1,
					"username": "johndoe",
					"role":     "admin",
				},
			},
		})

		// {
		// 	"code": 200,
		// 	"message": "登录成功",
		// 	"data": {
		// 		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiSm9obiBEb2UiLCJhdWQiOiJ1c2VyX2FwaSIsImlhdCI6MTUxNjMjN九MzYsImV4cCI6MTUxNjM0NTkzNn0.2yZAYbQ39ym3WqD_w0gGPbLGwI7I...",
		// 		"user": {
		// 			"id": 1,
		// 			"username": "johndoe",
		// 			"role": "admin"
		// 		}
		// 	}
		// }

	})

	g.Run(":8888")

}

// CORS 中间件
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 设置允许跨域的源
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		// 设置允许的请求方法
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		// 设置允许的请求头
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Request-ID, apifoxtoken")
		// 设置允许的请求凭证（如 cookies）
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		// 处理预检请求
		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		// 继续处理请求
		c.Next()
	}
}
```