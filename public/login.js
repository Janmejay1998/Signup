$(document).ready(function(){
    $("#regBtn").click(function(){
        // $.ajax({
        //   type : 'GET',
        //   url : '/register',
        //   success: function(data){
        //     $("#regDiv").html(data);
        //   }
        // });
        console.log('click');
        window.location = '/register'
    });
    $("#loginBtn").click(function(){
      // $.ajax({
      //   type : 'GET',
      //   url : '/register',
      //   success: function(data){
      //     $("#regDiv").html(data);
      //   }
      // });
      document.getElementById('form').submit()
  });
  
   
 });