# Sass入门
- sass是css的预处理器，能够更加强大的支持CSS。浏览器只能够识别解析CSS，最终Sass需要编译成CSS。
- 安装vscode extension: Live Sass Compiler,实时编译Sass文件
- Live Server 能够实时监测文件内容变化
### 核心概念
- variables 变量
- maps
- nesting 规则的嵌套
- partials & import 份文件组织scss代码
- functions
- extend
- Math operation 数学操作
- 实战教学 构建一个 Portfolio Site

### variables 变量
**css的变量**

```css
:root {
  --primary-color:#272727;
  --accent-color:#ff652f;
  --text-color:#fff;
}
body {
  background:var(--primary-color);
}
```
**scss变量：编译后直接用对应的值来替换，100%兼容**

```scss
$primary-color:#272727;
$accent-color:#ff652f;
$text-color:#fff;
body {
  background:primary-color;
}
```

### maps
```scss
// 定义一个maps
$font-weights(
  "regular":400,
  "medium":500,
  "bold":800
)

// 使用maps $map-get($map,$key)
body {
  background:$map-get($font-weights,bold);
}
```

![image-20220819090711274](.\tourial-02\public\image-20220819090711274.png)

### & 相当于父选择器
### nesting规则嵌套
- 根据元素的规则嵌套
```scss
.main {
  width: 80%;
  margin: 0 auto;
  #{&}__paragraph {
    font-weight: map-get($map: $font-weights, $key:bold );
    &:hover {
      background-color: aliceblue;
    }
  }
}
```

### partials & import

scss代码分散到多个文件，文件命名以一个`中横线`开头,如 `-reset.scss`, 让后在文件中引入`@import "reset"`

![image-20220819092300066](.\tourial-02\public\image-20220819092300066.png)

### functions

用来计算值和返回值

```scss
// 定义好的maps
$font-weights(
  "regular":400,
  "medium":500,
  "bold":800
)
// 定义函数 $weight-name为函数的参数
@function weight($weight-name) {
  @return map-get($font-weights,$weight-name);
}

// 使用行数
body {
  font-weight:weight(bold);
}
```

### mixin & include

定义样式

```scss
// 定义mixin
@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### extend继承样式
```scss
.main {
  @include flexCenter(row);
  // width: 80%;
  width: calc(80% - 400px);
  margin: 0 auto;
  #{&}__paragraph1 {
    // font-weight: map-get($map: $font-weights, $key:bold );
    font-weight: weight(bold);
    &:hover {
      color:pink;
    }
  }

  #{&}__paragraph2 {
    @extend .main__paragraph1;
  }
  
  @include mobile {
    flex-direction: column;
  }
}
```

### 简历网页实战--Portfolio
- home
- about
- project
- contact
使用的主要布局技术
- 定位
- grid
- flex
- transform 移动元素
动画效果
- transition-ease-in-out