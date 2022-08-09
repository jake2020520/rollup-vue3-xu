# rollup-vue3-xu 组件库打包

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm dev
```

### Compiles and minifies for production

```
npm  build
```

### publish

```
npm publish
```

- package.json 里面的 files 表示 发包包含那个文件夹，如果没有这个，就表示 除了 .gitignore 里面的全部

### 组件本地联调 可以

当前项目 npm link
cd 需要用到该组件的项目 npm link rollup-vue3-xu

```
import { instance } from 'rollup-vue3-xu';
import 'rollup-vue3-xu/dist/style.css';
import { createApp } from 'vue';
createApp(App).use(store).use(instance)

```
