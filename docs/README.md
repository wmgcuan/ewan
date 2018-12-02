# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

**这是加粗的文字**<br>
_这是倾斜的文字_<br>
**_这是斜体加粗的文字_**<br>
~~这是加删除线的文字~~<br>

> 这是引用的内容
>
> > 这是引用的内容
> >
> > > > > > > > > > 这是引用的内容

---

---

---

---

![图片alt](图片地址 ''图片 title'')

图片 alt 就是显示在图片下面的文字，相当于对图片内容的解释。
图片 title 是图片的标题，当鼠标移到图片上时显示的内容。title 可加可不加

![blockchain](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541881081142&di=ef733b012d9bb4bb6bbff2201f332175&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20131020%2F20131020165030_497.jpg '图片名称')

[超链接名](超链接地址 '超链接title')<br>
[简书](http://jianshu.com)
[百度](http://baidu.com)

- 列表内容

* 列表内容

- 列表内容

注意：- + \* 跟内容之间都要有一个空格

1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格

- 列表内容
  - 列表内容
  - 列表内容
  - 列表内容

* 列表内容
  - 列表内容
  - 列表内容
  - 列表内容

| 表头表头 | 表头 | 表头表头 |
| :------: | ---- | -------: |
|   内容   | 内容 |     内容 |
|   内容   | 内容 |     内容 |

第二行分割表头和内容。<br>

- 有一个就行，为了对齐，多加了几个<br>
  文字默认居左<br> -两边加：表示文字居中<br> -右边加：表示文字居右<br>
  注：原生的语法两边都要用 | 包起来。此处省略

代码块
`let i = 0`

```
function fun(){
    echo "这是一句非常牛逼的代码";
}
fun()

const name = 'ewan'
const age = 20
console.log(name)
console.log(age)
```

流程图

````flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```
````
