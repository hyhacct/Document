
# 代码示例

该示例是使用一个函数`isNull`来判断传入的字符串参数是否为空，只要有一个传入的参数为空，则返回`true`，否则返回`false`。

```go
package main

import (
	"fmt"
	"strings"
)

// str...string 代表可变参数,可以传入多个字符串参数，数量无限制
func isNull(str ...string) bool {
	// 使用迭代器遍历字符串数组,只要有一个元素为空,则返回true
	for _, v := range str {
		// 清理掉字符串两端的空格
		v = strings.TrimSpace(v)
		if len(v) <= 0 {
			return true
		}
	}
	return false
}

func main() {

	a := "hello world"
	b := ""
	c := "  "
	d := "h  e  l  l  o"

	if isNull(a, b, c, d) {
		fmt.Println("有一个参数为空")

	} else {
		fmt.Println("很好，全都不为空")
	}
}
```