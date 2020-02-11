// div content chage to html
function acyncMovePage(url){
  // ajax option
  var ajaxOption = {
    url : url,
    async : true,
    type : "GET",
    dataType : "html",
    cache : false
  };

  $.ajax(ajaxOption).done(function(data){
    // Contents 영역 삭제
    $('#main').children().remove();
    // Contents 영역 교체
    $('#main').html(data);
  });
}

function test(){
  alert("TEST");
}
