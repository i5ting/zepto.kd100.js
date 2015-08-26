;(function($){
  $.fn.kd100 = function(opt){
    var type = opt.type;
    var postid = opt.postid
    var url = "http://www.kuaidi100.com/query?type=" + type
      + "&postid="  + postid 
      + "&id=1&valicode=&temp=0.4864437959622592";
    
    var _s = this;
    
    $.get(url, function(res){
      console.log(res)
      var res = JSON.parse(res);
      if(res.message == 'ok' && parseInt(res.status) == 200){
        var data = res.data;
        return $(_s).each(function(){ 
          opt.done(this, data);
        })
      }else{
        alert('非常抱歉，无法取到物流信息，请稍后再试！');
      }
    })
  }
})(Zepto)