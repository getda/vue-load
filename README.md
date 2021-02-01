# vue-loading
### 使用方法
1. 先引入Vue 和 vue-loading 插件
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="./loading.js"></script>
```
2. 创建实例, 并且在 data 中定义 `isLoading` 属性
> 创建实例前先 `use` 插件, 插件名称 `loadingPlugin`
```html
<script>
    Vue.use(loadingPlugin);
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                isLoading: false,
            }
        },
        methods: {
            isLoad() {
                this.isLoading = !this.isLoading;
            }
        }
    });
</script>
```
3. 调用组件
```
<div id="app">
    <loading :is-loading="isLoading"></loading>
</div>
```
> 通过改变 `isLoading` 的值达到显示隐藏动画效果

> 作者博客: http://wxdas.com<br>
作者ＱＱ: 918247855<br>
CSS 样式来至于互联网, 版权归原作者所有
