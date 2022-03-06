### 一. 技术栈
1. vite2 打包工具
2. vue@3.0
3. vue-route@4.0
4. nodejs
5. element3
6. animal.css
7. scss

### 二. 开发目的
- 巩固 ` vue3.0 ` 的学习
- 体验新的打包工具
- 更新学校官网

### 三. 页面结构
```
--index
```

### 四. 问题总结
- 组件子传父（setup 中的context 对象的 emit参数）
``` 
emit 
    type:function
    props:1. 父组件中新增的方法名
          2. 回调的参数
```
- 获取结点 ref 的使用( 具体见)
- watch: 只能监视 ref, rective 创建的响应元素
- scroll: 问题
- setTimeout: 
``` 
    用此执行异步比较耗费性能setTimeout(()=>{},0)
    定时器创建将其插入到一个定时器观察者红黑树上，会通过一个循环事件来检测是否超时进而执行回调

    解决 ：使用process.nextTick()提高性能
```
- 使用定时器切换图片闪烁
- div+css 实现文字缩进：  text-indent:2em;
- public 和 asstes ：
  ```
    public: 该目录下的资源不会被打包处理，需要使用绝对路径来引用
    assets:在js中使用的话，路径要经过webpack中的file-loader编译，路径不能直接写。
  ```
### bug
- 主页面轮播图代码优化
- 主页面定时器
- 要闻中动画
- 导航栏竖着排列( 需要修改 )
- 导航栏与概况选中不同步