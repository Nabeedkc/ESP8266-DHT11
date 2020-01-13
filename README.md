# ESP8266-DHT11
Real-time temperature and humidity monitoring.

## Brief
Reading temperature and humidity wirelessly over wifi with DHT11 and ESP8266 NodeMcu.
Setup a XAMPP server, go to http://localhost/phpmyadmin/
Create a database by adding necessery rows and coloumns,here i use(id,temp,humdty,date/time).
Pass the dht11 data to the database using - dht.php
Fetch the data from database in json format using - json.php
Plot for the respective data can be done using Chart.js
For knowing chart.js go to  https://www.chartjs.org/
Chart can be plot by passing the json data to script.js


### Note
All the files should be place in the "HTDocs" folder located under the "XAMMP" folder on your C: drive.
The file path is "C:\xampp\htdocs" for your Web server. 

