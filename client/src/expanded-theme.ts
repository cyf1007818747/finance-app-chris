
import type { PaletteColorOptions } from "@mui/material/styles";
/*
import type：这是 TypeScript 3.8 引入的语法，用于仅导入类型。这种导入方式不会在编译后的 JavaScript 中生成实际的导入语句，
从而避免未使用导入的错误（如 ESLint 报告的未使用导入问题）。
目的：明确表明这些导入仅用于类型声明，提升代码的可读性和性能。
这里扩展的是 @mui/material/styles 模块，
而不是内部的 @mui/material/styles/createPalette 模块。这是推荐的做法，因为 @mui/material/styles 是公开的 API，
内部模块路径可能会在未来版本中变化，从而导致扩展失效。

*/

declare module "@mui/material/styles" {
  interface PaletteColor {// PaletteColor 是一个接口，用于定义颜色的属性。为调色板颜色添加数值索引，以支持不同深浅的色彩（如 primary[500]）。

    [key: number]: string;
  }

  interface Palette {//在调色板中添加 tertiary 颜色属性，以支持主题中的第三种颜色。
    tertiary: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }//在调色板选项中添加 tertiary 颜色属性，以支持主题中的第三种颜色。
}

