var str='';
function myClick(aa) {
  console.log($(aa).parent().attr('id'));
  str =$(aa).parent().attr('id');
  Data(str);
}
function Test(id,url) {
  $.ajax({
    url:url,
    type:'get',
    data:String,
    success:function (state) {
      console.log(state)
      var state=[
        {
          title:'11',
          key:'11',
          content:'1212',
        },
        {
          title:'22',
          key:'22',
          content:'2323',
        },
      ]
      var content =state.map((item)=>{
        return '<li id='+item.key+'> ' +
          '<span>'+item.title+'</span>' +
          '<span>'+item.content+'</span>' +
          '<input type="radio" name="aaa" value="选项一" onclick="myClick(this)">'+
          '</li>'
      })
      $('#'+id).html(content)
    },
    error:function (state) {

    }

  })
}
function Data(str) {
  $.ajax({

    url:'ss.html',
    type:'get' ,
    data:str,
    success:function (state) {
      console.log(state);
      console.log(str);
    },
    error:function (state) {

    },
  })

}


