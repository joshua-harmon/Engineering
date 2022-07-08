<template>
  <section id="materials">
  <div class="box">
<ul id="bookmarks">
  <li><a href="#">analysis</a>
   <ul class="sites">
    <li><a href="https://pdfs.semanticscholar.org/fb26/34392edc150a8979878fe71e607afe9d74ef.pdf">spectroscopy</a></li>  
    <li><a href="https://www.lehigh.edu/~kjs0/carey-13.PDF">betterOne</a></li>  
    <li><a href="https://www.structbio.pitt.edu/images/sbl2014/notes/nmr_ref_notes_2011.pdf">betterYet</a></li>  
  </ul>
 </li>  
  <li><a href="#">geology</a>
   <ul class="sites">
    <li><a href="https://www.youtube.com/watch?v=XWF4ffCxvso">quartz</a></li>  
  </ul>
 </li>  
  <li><a href="#">hulda</a>
   <ul class="sites">
    <li><a href="https://youtu.be/blnhMmbGpG4">video</a></li>
    <li><a href="https://www.youtube.com/watch?v=VJvi7GWbLLI">buildZapper</a></li>  
    <li><a href="http://www.stenulson.net/althealth/hcfreqs.txt">freqs</a></li>
    <li><a href="http://www.clarkzapper.net/zapper-schematic.html">zapper</a></li>
    <li><a href="https://www.youtube.com/watch?v=yhpO8bbfGxw">zapper</a></li>  
    <li><a href="https://www.youtube.com/watch?v=siYT9yas-II">brainTuner</a></li>
    <li><a href="https://www.youtube.com/watch?v=kDjT8INxlmY">beck</a></li>  
    <li><a href="https://www.youtube.com/watch?v=PxNp7Zqzkt8">pulser</a></li>
    <li><a href="https://www.youtube.com/watch?v=S-8Xsj6HkOs">zapper+</a></li> 
    <li><a href="https://www.youtube.com/watch?v=VJvi7GWbLLI">zapper</a></li> 
 </ul>
</li>
</ul>
</div>

</section>
</template>


<script>
export default {
  name: "Materials",
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
