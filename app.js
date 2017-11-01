Vue.component('my-slideshow', {
  template: `
    <div>
      <h2 class="w3-center">Vuejs Slideshow</h2>
        <br/>
        <br/>
              <img src="images/scene1.jpg" alt="scene one" style="width: 100%" class="slides animated flipInY" />

              <img src="images/scene2.jpg" alt="scene two" style="width: 100%" class="slides animated bounceInRight" />

              <img src="images/scene3.jpg" alt="scene three" style="width: 100%" class="slides animated wobble" />

              <img src="images/scene4.jpg" alt="scene four" style="width: 100%" class="slides animated jello" />

              <img src="images/scene5.jpg" alt="scene five" style="width: 100%" class="slides animated slideInLeft" />
      </div>
  `
});


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
        this.myIndex = 1;
      }
      x[this.myIndex - 1].style.display = "block";
        setTimeout(this.carousel, 3000);
    }
  },

    mounted() {
      this.carousel();
    }
});
