---
title: CSS in the ShadowDOM
---
<link rel="stylesheet" href="/adorn/adorn.css" />
<script src="/adorn/adorn.js" async></script>
<style>
h1:first-of-type{ 
  color:white;
  text-shadow:0 0 100px black;
}
h1:first-of-type:before{ 
  background: url(http://photos2.meetupstatic.com/photos/event/d/6/2/d/highres_432114829.jpeg);
  background-size: 100%;
  background-position: 0 -90%;
}
</style>

{% include_relative README.md %}
