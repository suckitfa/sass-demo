# Sass入门
- sass是css的预处理器，能够更加强大的支持CSS。浏览器只能够识别解析CSS，最终Sass需要编译成CSS。
- 安装vscode extension: Live Sass Compiler,实时编译Sass文件
- Live Server 能够实时监测文件内容变化
### 核心概念
- variables 变量
- maps
- nesting 规则的嵌套
- partials & includes
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