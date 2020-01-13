// Our labels along the x-axis 
var dates = ["20:39","20:41","20:43","20:46","20:48","20:51","20:53","20:56","20:50"];
// For drawing the lines
//var temperature = [28.7,28.6,28.6,28.6,28.5,28.5,28.4,28.4,28.4];
//var humidity = [83,83,83,83,83,83,83,83,83];
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      var x= eval("("+ xhttp.responseText+ ")");
      var date=x[0];
      var temp=x[1];
      var humi=x[2];
      console.log(temp);
      chart(date,temp,humi);
    }
};
xhttp.open("GET", "http://localhost/testcode/json.php", true);
xhttp.send();

function chart(date,temp,humi)
{
  var ctx = document.getElementById("temp");
  var temp = new Chart(ctx, {
  type: 'line',
  data: {
    labels: date,
    datasets: [
      { 
  data: temp,
  label: "temperature",
  borderColor: "#0000FF",
  fill: false
}
   ]
 }
  
});

  var ctx = document.getElementById("humi");
  var humi = new Chart(ctx, {
  type: 'line',
  data: {
    labels: date,
    datasets: [
      { 
  data: humi,
  label: "humidity",
  borderColor: "#FFA500",
  fill: false
}

     ]
 }
  
});


}
 