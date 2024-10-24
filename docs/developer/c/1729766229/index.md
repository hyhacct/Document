---
title: "C语言编程"
---

## 流程控制

在所有的编程语言中，流程控制是最基本的概念。C语言也不例外。流程控制语句主要有：

- 条件语句：if、else、switch
- 循环语句：for、while、do-while
- 跳转语句：goto、continue、break

条件语句：

```c
if (表达式1) {
    // 语句1
} else if (表达式2) {
    // 语句2
} else {
    // 语句3
}
```

循环语句：

```c
for (初始化; 条件; 迭代) {
    // 语句
}

while (表达式) {
    // 语句
}

do {
    // 语句
} while (表达式);
```

跳转语句：

```c
goto 标签;
continue;
break;
```


## 使用示例

若需要判断用户输入的账号密码是否正确，并且错误3次后提示冻结账户，则可以用以下代码：

```c
#include <stdio.h>

int main() {
    int count = 0;
    char username[10];
    char password[10];

    printf("请输入用户名：");
    scanf("%s", username);

    printf("请输入密码：");
    scanf("%s", password);

    while (true) {
        if (count == 3) {
            printf("登录失败，账户已冻结！\n");
        }

        if (strcmp(username, "admin") == 0 && strcmp(password, "123456") == 0) {
            printf("登录成功！\n");
            break;
        } else {
            printf("用户名或密码错误，请重新输入！\n");
            count++;
        }
    }

    return 0;
}
```