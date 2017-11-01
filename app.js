Vue.component('my-slideshow', {
  template: `
  <div>
      <h2 class="w3-center">Vuejs Automatic Slideshow</h2>

      <div id="app" class="w3-content w3-section" style="max-width: 800px">
        <img src="images/scene1.jpg" alt="scene one" style="width: 100%" class="slides w3-animate-zoom" />

        <img src="images/scene2.jpg" alt="scene two" style="width: 100%" class="slides w3-animate-right" />

        <img src="images/scene3.jpg" alt="scene three" style="width: 100%" class="slides w3-animate-left" />

        <img src="images/scene4.jpg" alt="scene four" style="width: 100%" class="slides w3-animate-bottom" />

        <img src="images/scene5.jpg" alt="scene five" style="width: 100%" class="slides w3-animate-opacity" />
      </div>
  </div>
  `
})

new Vue({
  el: '#app',

  data: {
      myIndex: 0
  },

  methods: {
    carousel() {
      var i;
      var x = document.getElementsByClassName("slides");

      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      this.myIndex++;
      if (this.myIndex > x.length) {
        this.myIndex = 1
      }
      x[this.myIndex - 1].style.display = "block";
        setTimeout(this.carousel, 3000);
    }
  },

    mounted() {
      this.carousel();
    }
})
