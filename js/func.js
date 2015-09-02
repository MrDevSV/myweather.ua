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
