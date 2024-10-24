
# 代码示例

注意一下 `strconv` 的错误处理，因为我这里只是示例所以忽略了 error ，实际代码中千万不要忽略，不然要出问题，比如 string 万一是 abcd ，那这肯定没法转到 int 或者 float 的，这时候忽略了，那包要出问题的

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    var a int = 10
    var b float32 = 20.10001
    var d string = "123"
    var e string = "3.14159"

    // int 转 string
    fmt.Println("int to string:", fmt.Sprintf("%d", a))

    // float32 转 string
    fmt.Println("float32 to string:", fmt.Sprintf("%f", b)) // (超好用的fmt.Sprintf)

    // string 转 int
    d2, _ := strconv.Atoi(d)
    fmt.Println("string to string:", fmt.Sprintf("%d", d2))

    // string 转 float32
    e2, _ := strconv.ParseFloat(e, 32)
    fmt.Println("string to float32:", fmt.Sprintf("%f", e2))
}
```