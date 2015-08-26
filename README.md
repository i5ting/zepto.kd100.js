# zepto.kd100.js



## Usages

引入依赖文件

    <script src=zepto.min.js></script>
    <script src=../src/zepto.kd100.js></script>

编写调用方法

```
  <script>
    ;(function($){
      $('#kd_div').kd100({
        'type':'yuantong',
        'postid':'804397890748',
        done : function(dom, data){
          var h = "";
          for(var i in data){
            var item = data[i];
            h += "<li>" + item.time + "</li>";
            h += "<li>" + item.context + "</li>";
            $(dom).html(h); 
          }
        }
      });
    })(Zepto)
      
  </script>
```

返回data数据如下

```  
[
  {
    "time": "2015-08-26 13:31:34",
    "context": "天津转运中心 已发出",
    "ftime": "2015-08-26 13:31:34"
  },
  {
    "time": "2015-08-26 01:54:14",
    "context": "天津转运中心 已打包",
    "ftime": "2015-08-26 01:54:14"
  },
  {
    "time": "2015-08-25 23:48:35",
    "context": "天津转运中心 已收入",
    "ftime": "2015-08-25 23:48:35"
  },
  {
    "time": "2015-08-25 20:34:55",
    "context": "天津市东丽区公司 已发出",
    "ftime": "2015-08-25 20:34:55"
  },
  {
    "time": "2015-08-25 17:45:33",
    "context": "天津市东丽区公司(点击查询电话) 已揽收",
    "ftime": "2015-08-25 17:45:33"
  }
]
```