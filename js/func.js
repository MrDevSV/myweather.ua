function GetYear(){
    var d = new Date();
    var n = d.getFullYear();
   document.getElementById("myfooter").innerHTML = n;
}
GetYear();

function GetCurrentDate(){
     var today=new Date();
     var currentdate=today.toDateString();
      document.getElementById("cdate").innerHTML = currentdate;
}

GetCurrentDate();

$(document).ready(function() {
			
jQuery(window).load(function() {
 $(".loaderbig, .loadersmall, .pr_title").fadeOut();
 $(".preloader").delay(1000).fadeOut("slow");
});
});