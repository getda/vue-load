# vue-load
### 使用方法
1.先引入Vue 和 vue-loading 插件
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="./loading.js"></script>
```
2.创建实例, 并且在 data 中定义 `isLoading` 属性
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
3.调用组件
```
<div id="app">
    <loading :is-loading="isLoading"></loading>
</div>
```

> 通过改变 `isLoading` 值达到显示隐藏动画效果
