<template>
  <section id="serialControl">
  <div class="box">
<ul id="bookmarks">
  <li><a href="#">serialControl</a>
   <ul class="sites">
    <li><a href="http://qmodbus.sourceforge.net/">qmodbus</a></li>  
    <li><a href="https://sourceforge.net/projects/qmodbus/files/latest/download">download</a></li>  
    <li><a href="https://libmodbus.org/">libmodbus</a></li>  
    <li><a href="https://stackoverflow.com/questions/25294373/simple-app-to-read-and-write-data-to-rockwell-plc-1756-a10-a">simpleApp</a></li>  
    <li><a href="https://www.npmjs.com/package/serialport">npmSerialPort</a></li>  
    <li><a href="https://sourceforge.net/directory/os:linux/?q=siemens+plc+linux">siemens</a></li>  
    <li><a href="https://elinux.org/Serial_port_programming">serialPort</a></li>
    <li><a href="https://www.engineersgarage.com/embedded/pic-microcontroller-projects/led-interface-circuit?fbclid=IwAR3jOUeohSVNOI62V18kePXWGvvx86-bVzvo-fYHyz6R1esxBILeRV1FY4w">pic</a></li> 
  </ul>
 </li>
  <li><a href="#">python</a>
   <ul class="sites">
    <li><a href="https://media.readthedocs.org/pdf/pyserial/latest/pyserial.pdf">pySerialDocs</a></li>  
    <li><a href="https://packages.ubuntu.com/source/trusty/pyserial">serialPackages</a></li>  
    <li><a href="https://www.raspberrypi.org/forums/viewtopic.php?t=5938">pySerialInstall</a></li>  
    <li><a href="https://ubuntuforums.org/showthread.php?t=1235241">pythonSerial</a></li>  
    <li><a href="https://pypi.org/project/pyserial/">pySerial3.4</a></li>  
    <li><a href="https://github.com/pyserial/pyserial/blob/master/documentation/pyserial.rst">github</a></li>  
    <li><a href="https://pyvisa.readthedocs.io/en/master/">pyvisa</a></li>
  </ul>
 </li>
  <li><a href="#">java</a>
   <ul class="sites">
    <li><a href="https://stackoverflow.com/questions/638553/how-do-i-get-java-to-use-the-serial-port-in-linux">serialPort</a></li>  
    <li><a href="http://www.scottsbots.com/articles/47.php">mdiaFramewrk</a></li>  
    <li><a href="http://fazecast.github.io/jSerialComm/">jSerialComm</a></li>  
    <li><a href="https://www.maximintegrated.com/en/products/digital/one-wire/software-tools/api-java-sdk.html">1wireJava</a></li>  
    <li><a href="https://blogs.oracle.com/jtc/java-serial-communications-revisited">javaSerial</a></li>
  </ul>
 </li>  
  <li><a href="#">snap</a>
   <ul class="sites">
    <li><a href="https://github.com/gijzelaerr/python-snap7">snap7</a></li>  
    <li><a href="https://media.readthedocs.org/pdf/python-snap7/latest/python-snap7.pdf">snap7Docs</a></li>
  </ul>
 </li>
  <li><a href="#">plc</a>
   <ul class="sites">
    <li><a href="http://www.plcsimulator.org/">simulator</a></li>  
    <li><a href="http://www.openplcproject.com/plcopen-editor">plcopen</a></li>
    <li><a href="https://www.youtube.com/watch?v=Q7kA7uv4dn4">introPlcs</a></li>  
    <li><a href="https://www.youtube.com/watch?v=Qf32qtHfowQ">plcLangs</a></li>  
    <li><a href="https://www.youtube.com/watch?v=Y5NgUc_dxlA">plcs</a></li>  
    <li><a href="https://www.youtube.com/watch?v=oAn__-vcvC4">plcIo</a></li>  
    <li><a href="https://help.ubuntu.com/community/XilinxISE">XilinxISE</a></li>
    <li><a href="https://www.youtube.com/watch?v=qeBAz_XXUWs">devices</a></li>  
    <li><a href="https://www.youtube.com/watch?v=ic9crSVVF9Q">plc</a></li>  
    <li><a href="https://www.youtube.com/watch?v=Qf32qtHfowQ">PlcProgs</a></li>  
    <li><a href="https://www.youtube.com/watch?v=GaQPxOgqHPE">plcAumtion</a></li>  
    <li><a href="https://www.youtube.com/watch?v=GaQPxOgqHPE">plcOffGrid</a></li>  

 </ul>
</li>
</ul>
</div>

</section>
</template>


<script>
export default {
  name: "SerialControl",
};
</script>


<style scoped>
*{
    margin:0;
    padding:0;
}
body {
    font:14px/1.3 Arial,sans-serif;
}
.box {
    height: 571px;
    margin: 30px auto;
    padding: 15px;
    width: 771px;
}
#bookmarks,#bookmarks ul {
    background-color: #8899AA;
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
#bookmarks {
    display: block;
    padding: 5px;
    position: relative;
    width: 112px;
    -moz-perspective: 200px;
    -ms-perspective: 200px;
    -webkit-perspective: 200px;
    -o-perspective: 200px;
    perspective: 200px;
}
#bookmarks ul {
    left: -9999px;
    opacity:0;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: -9999px;
    -moz-transform: rotateY(70deg);
    -ms-transform: rotateY(70deg);
    -o-transform: rotateY(70deg);
    -webkit-transform: rotateY(70deg);
    transform: rotateY(70deg);
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -moz-transition: -moz-transform 0.3s linear, opacity 0.3s linear;
    -ms-transition: -ms-transform 0.3s linear, opacity 0.3s linear;
    -o-transition: -o-transform 0.3s linear, opacity 0.3s linear;
    -webkit-transition: -webkit-transform 0.3s linear, opacity 0.3s linear;
    transition: transform 0.3s linear, opacity 0.3s linear;
}
#bookmarks li {
    background-color: #FFFFFF;
    position: relative;
}
#bookmarks > li {
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
#bookmarks li a {
    background-color: #AABBCC;
    border-color: #DDDDDD #555555 #555555 #DDDDDD;
    border-style: solid;
    border-width: 1px;
    color: #000000;
    display: block;
    font-size: 15px;
    padding: 8px 10px 8px 5px;
    text-decoration: none;
    width:95px;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
#bookmarks li:hover > a {
    background-color: #8899AA;
    border-color: #8899AA;
    color: #FFFFFF;
}
#bookmarks li:hover ul.sites {
    left: 114px;
    opacity:1;
    top: 0;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
#bookmarks ul li {
    width: 100%;
}

</style>
