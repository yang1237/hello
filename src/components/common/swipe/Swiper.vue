<template>
  <div id="my-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <div
        v-for="(n,i) in slideCount"
        :key="i"
        class="indi-item"
        :class="{active:i===currentIndex-1}"
      ></div>
    </div>

    <div class="nav-left" @click="clickL">L</div>
    <div class="nav-right" @click="clickR">R</div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      currentIndex: 1,
      totalWidth: 0,
      swiperStyle: {},
      scrolling: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 100);
  },
  methods: {
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let slideEls = swiperEl.getElementsByClassName("slide");
      this.slideCount = slideEls.length;

      if (this.slideCount > 1) {
        let cloneFirst = slideEls[0].cloneNode(true);
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      this.setTransform(-this.currentIndex * this.totalWidth);
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1;
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
        }
        this.setTransform(-this.currentIndex * this.totalWidth);
      }, this.animDuration);
    },
    scrollContent(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    touchStart(e) {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }

      this.scrollContent(-this.currentIndex * this.totalWidth);

      this.startTimer();
    },
    clickL() {
      this.previous();
    },
    clickR() {
      this.next();
    },
    changeItem(num) {
      this.stopTimer();
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    }
  }
};
</script>

<style scoped>
#my-swiper {
  position: relative;
  overflow: hidden;
}
.swiper {
  display: flex;
}
.indicator {
  position: absolute;
  bottom: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  line-height: 8px;
  font-size: 12px;
  text-align: center;
  background: #fff;
  margin: 0 5px;
  text-align: center;
}
.active {
  background: rgba(212, 62, 46, 1);
}

.nav-left,
.nav-right {
  position: absolute;

  background: rgba(255, 255, 255, 0.4);
  height: 50px;
  width: 20px;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  color: #000;
  top: 50%;
  margin-top: -25px;
  text-align: center;
}
.nav-left {
  left: 8px;
}
.nav-right {
  right: 8px;
}
</style> 