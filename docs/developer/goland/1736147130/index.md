---
title: "Goland"
titleTemplate: Xorm框架属性介绍
---

# 概述

介绍下`Xorm框架`的Column 属性定义介绍，在这个框架里面有很多映射，这里挨个讲解一下他们的作用。

## Column属性介绍


| 类型       |   Column   |                                                                                 介绍                                                                                  |
| ---------- | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 基本属性   |   `name`   |                                                      指定字段的名称。如果不指定，则根据字段名和转换规则自动命名                                                       |
| 基本属性   |    `pk`    |                                            表示该字段是主键。如果一个结构体中有多个字段都标记为pk，则这些字段构成复合主键                                             |
| 基本属性   | `autoincr` |                                                                         表示该字段是自增字段                                                                          |
| 基本属性   | `notnull`  |                                                                         表示该字段不允许为空                                                                          |
| 基本属性   |  `unique`  |                                                                  表示该字段是唯一索引(不允许值重复)                                                                   |
| 基本属性   |  `index`   |                                                                           表示该字段是索引                                                                            |
| 类型和格式 | `字段类型` |                        xorm支持多种字段类型，如varchar, int, datetime等，具体类型可以根据数据库的兼容性进行选择，都是数据库里面的一些数据类型                         |
| 类型和格式 |   `json`   |                                                            表示内容将先转换成JSON格式，然后存储到数据库中                                                             |
| 类型和格式 | `comment`  |                                                                    设置字段的注释，目前仅支持MySQL                                                                    |
| 特殊属性   | `created`  |                                                              在插入数据时，该字段会被自动填充为当前时间                                                               |
| 特殊属性   | `updated`  |                                                           在插入或更新数据时，该字段会被自动填充为当前时间                                                            |
| 特殊属性   | `version`  |                                                            在插入数据时，默认值为1，并在每次更新时自动加1                                                             |
| 特殊属性   | `default`  |                                                                           设置字段的默认值                                                                            |
| 特殊属性   | `deleted`  | 用于实现软删除功能。使用deleted属性时，对应的字段通常为time.Time类型。当调用Delete()方法时，标记为deleted的字段会被自动更新为当前时间，而不是真正从数据库中删除该记录 |
| 其他       | `extends`  |                                                            用于匿名字段，将匿名字段中的结构体映射到数据库                                                             |
| 其他       |    `-`     |                                                                      表示该字段不会映射到数据库                                                                       |
| 其他       |    `->`    |                                                                             只写入数据库                                                                              |
| 其他       |    `<-`    |                                                                            只从数据库读取                                                                             |



## 数据库类型对应表

| xorm       |   mysql    | sqlite3 | postgres  |    remark |
| ---------- | :--------: | :-----: | :-------: | --------: |
| BIT        |    BIT     | INTEGER |    BIT    |           |
| TINYINT    |  TINYINT   | INTEGER | SMALLINT  |           |
| SMALLINT   |  SMALLINT  | INTEGER | SMALLINT  |           |
| MEDIUMINT  | MEDIUMINT  | INTEGER |  INTEGER  |           |
| INT        |    INT     | INTEGER |  INTEGER  |           |
| INTEGER    |  INTEGER   | INTEGER |  INTEGER  |           |
| BIGINT     |   BIGINT   | INTEGER |  BIGINT   |           |
| CHAR       |    CHAR    |  TEXT   |   CHAR    |           |
| VARCHAR    |  VARCHAR   |  TEXT   |  VARCHAR  |           |
| TINYTEXT   |  TINYTEXT  |  TEXT   |   TEXT    |           |
| TEXT       |    TEXT    |  TEXT   |   TEXT    |           |
| MEDIUMTEXT | MEDIUMTEXT |  TEXT   |   TEXT    |           |
| LONGTEXT   |  LONGTEXT  |  TEXT   |   TEXT    |           |
| BINARY     |   BINARY   |  BLOB   |   BYTEA   |           |
| VARBINARY  | VARBINARY  |  BLOB   |   BYTEA   |           |
| DATE       |    DATE    | NUMERIC |   DATE    |           |
| DATETIME   |  DATETIME  | NUMERIC | TIMESTAMP |           |
| TIME       |    TIME    | NUMERIC |   TIME    |           |
| TIMESTAMP  | TIMESTAMP  | NUMERIC | TIMESTAMP |           |
| TIMESTAMPZ |    TEXT    |  TEXT   | TIMESTAMP |      with |
| REAL       |    REAL    |  REAL   |   REAL    |           |
| FLOAT      |   FLOAT    |  REAL   |   REAL    |           |
| DOUBLE     |   DOUBLE   |  REAL   |  DOUBLE   | PRECISION |
| DECIMAL    |  DECIMAL   | NUMERIC |  DECIMAL  |           |
| NUMERIC    |  NUMERIC   | NUMERIC |  NUMERIC  |           |
| TINYBLOB   |  TINYBLOB  |  BLOB   |   BYTEA   |           |
| BLOB       |    BLOB    |  BLOB   |   BYTEA   |           |
| MEDIUMBLOB | MEDIUMBLOB |  BLOB   |   BYTEA   |           |
| LONGBLOB   |  LONGBLOB  |  BLOB   |   BYTEA   |           |
| BYTEA      |    BLOB    |  BLOB   |   BYTEA   |           |
| BOOL       |  TINYINT   | INTEGER |  BOOLEAN  |           |
| SERIAL     |    INT     | INTEGER |  SERIAL   |      auto |
| BIGSERIAL  |   BIGINT   | INTEGER | BIGSERIAL |      auto |



## Go与字段类型对应表


如果不使用 `tag` 来定义 field 对应的数据库字段类型，那么系统会自动给出一个默认的字段类型，对应表如下：

| go type's kind                                       |            value method             |      xorm type |
| ---------------------------------------------------- | :---------------------------------: | -------------: |
| implemented Conversion                               | Conversion.ToDB / Conversion.FromDB |         `Text` |
| int, int8, int16, int32, uint, uint8, uint16, uint32 |                                     |          `Int` |
| int64, uint64                                        |                                     |       `BigInt` |
| float32                                              |                                     |        `Float` |
| float64                                              |                                     |       `Double` |
| complex64, complex128                                |    json.Marshal / json.UnMarshal    |  `Varchar(64)` |
| []uint8                                              |                                     |         `Blob` |
| array, slice, map except []uint8                     |    json.Marshal / json.UnMarshal    |         `Text` |
| bool                                                 |               1 or 0                |         `Bool` |
| string                                               |                                     | `Varchar(255)` |
| time.Time                                            |                                     |     `DateTime` |
| cascade struct                                       |       primary key field value       |       `BigInt` |
| struct                                               |    json.Marshal / json.UnMarshal    |         `Text` |
| Others                                               |                                     |         `Text` |

