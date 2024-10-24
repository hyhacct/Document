

# 将时间戳转换为人类可读时间格式

这里演示的时间戳是10位的，如果返回的人类可读单位觉得有点长了，其实可以把`秒`这个单位去掉，例如下面一段的代码，以此类推，或者可以连带把`分`和`时`这两个单位去掉。

```go
package main

import (
    "fmt"
    "time"
)

// 取当前10位时间戳
func getCurrentTimestamp() int64 {
    return time.Now().Unix()
}

// 时间戳转换为人类可读时间格式
func timestampToTimeStr(timestamp int64) string {
    return time.Unix(timestamp, 0).Format("2006-01-02 15:04:05") // [!code --]
    return time.Unix(timestamp, 0).Format("2006-01-02 15:04") // [!code ++]
}

func main() {

    // 取当前10位时间戳
    timestamp := getCurrentTimestamp()
    fmt.Println("timestamp:", timestamp)

    // 时间戳转换为人类可读时间格式
    timeStr := timestampToTimeStr(timestamp)
    fmt.Println("timeStr:", timeStr)

}
```


<br />
<br />
<br />


# 将人类可读时间转换为时间戳

以下代码所展示的与上方代码相反，这是将人类可读的时间格式转换到10位时间戳，如果传入的时间字符串格式不正确，则会返回`-1`。

```go
package main

import (
    "fmt"
    "time"
)

// 字符串时间到时间戳
func timeStrToTimestamp(timeStr string) int64 {

    if t, err := time.Parse("2006-01-02 15:04:05", timeStr); err != nil {

        fmt.Println("timeStrToTimestamp error:", err)
        return -1

    } else {

        return t.Unix()
    }

}

func main() {
    s := "2024-06-15 19:53:04"
    fmt.Println(timeStrToTimestamp(s))
}
```