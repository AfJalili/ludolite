<template>
  <div class="container card">
    <!-- First Row -->
    <div class="container-row1 clearfix">
      <div class="row1-col1 green">
        <div class="row1-col1-child clearfix white">
          <div class="green"></div>
          <div class="green"></div>
          <div class="green"></div>
          <div class="green"></div>
        </div>
      </div>
      <div class="row1-col2 clearfix">
        <div class="hide"></div>
        <div class="hide"></div>
        <div class="hide"></div>
        <div id="c42">42</div>
        <div id="c43">43</div>
        <div class="yellow" id="c0">0</div>
        <div id="c41">41</div>
        <div class="yellow"></div>
        <div id="c1">1</div>
        <div id="c40">40</div>
        <div class="yellow"></div>
        <div id="c2">2</div>
        <div id="c39">39</div>
        <div class="yellow"></div>
        <div id="c3">3</div>
        <div id="c38">38</div>
        <div class="yellow"></div>
        <div id="c4">4</div>
      </div>
      <div class="row1-col3 yellow">
        <div class="row1-col3-child clearfix white">
          <div class="yellow"></div>
          <div class="yellow"></div>
          <div class="yellow"></div>
          <div class="yellow"></div>
        </div>
      </div>
    </div>

    <!-- Second row -->
    <div class="container-row2 clearfix">
      <div class="row2-col1 clearfix">
        <div class="hide"></div>
        <div class="green" id="c33">33</div>
        <div id="c">34</div>
        <div id="c">35</div>
        <div id="c">36</div>
        <div id="c">37</div>
        <div class="hide"></div>
        <div id="c32">32</div>
        <div class="green"></div>
        <div class="green"></div>
        <div class="green"></div>
        <div class="green"></div>
        <div class="hide"></div>
        <div id="c31">31</div>
        <div id="c30">30</div>
        <div id="c29">29</div>
        <div id="c28">28</div>
        <div id="c27">27</div>
      </div>
      <div class="row2-col2" @score="setScore">
        <TheDice />
      </div>
      <div class="row2-col3 clearfix">
        <div id="c5">5</div>
        <div id="c6">6</div>
        <div id="c7">7</div>
        <div id="c8">8</div>
        <div id="c9">9</div>
        <div class="hide"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div id="c10">10</div>
        <div class="hide"></div>
        <div id="c15">15</div>
        <div id="c14">14</div>
        <div id="c13">13</div>
        <div id="c12">12</div>
        <div class="blue" id="c11">11</div>
        <div class="hide"></div>
      </div>
    </div>

    <!-- Third row -->
    <div class="container-row3 clearfix">
      <div class="row3-col1 red">
        <div class="row3-col1-child clearfix white">
          <div class="red"></div>
          <div class="red"></div>
          <div class="red"></div>
          <div class="red"></div>
        </div>
      </div>
      <div class="row3-col2 clearfix">
        <div id="c26">26</div>
        <div class="red"></div>
        <div id="c16">16</div>
        <div id="c25">25</div>
        <div class="red"></div>
        <div id="c17">17</div>
        <div id="c24">24</div>
        <div class="red"></div>
        <div id="c18">18</div>
        <div id="c23">23</div>
        <div class="red"></div>
        <div id="c19">19</div>
        <div class="red" id="c22">22</div>
        <div id="c21">21</div>
        <div id="c20">20</div>
        <div class="hide"></div>
        <div class="hide"></div>
        <div class="hide"></div>
      </div>
      <div class="row3-col3 blue">
        <div class="row3-col3-child clearfix white">
          <div class="blue"></div>
          <div class="blue"></div>
          <div class="blue"></div>
          <div class="blue"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import TheDice from "./TheDice.vue";

export default {
  name: "Board",
  components: {
      TheDice
  },
  methods: {
      setScore(value) {
          console.log(value);
      }
  },
  created() {
      console.log('created');
      this.$on('score', console.log);
  }  
};
</script>



<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.clearfix::after {
  clear: both;
  content: "";
  display: table;
}

.container {
  width: 500px;
  height: 500px;
  margin: auto;
  margin-top: 80px;
  cursor: pointer;
  /* border: 1px solid black; */
  border-bottom-left-radius: 60%;
  border-top-right-radius: 60%;
  border-bottom-right-radius: 1%;
  border-top-left-radius: 1%;
}

.container-row1,
.container-row3 {
  width: 100%;
  height: 40%;
}

.container-row2 {
  width: 100%;
  height: 20%;
}

.row1-col1,
.row1-col3,
.row3-col1,
.row3-col3 {
  height: 100%;
  width: 40%;
}

.row1-col2,
.row3-col2 {
  height: 100%;
  width: 20%;
}

.row1-col2 > div:hover,
.row3-col2 > div:hover {
  box-shadow: -2px 14px 28px rgba(0, 0, 0, 0.25),
    -2px 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.row1-col1,
.row1-col2,
.row1-col3,
.row2-col1,
.row2-col2,
.row2-col3,
.row3-col1,
.row3-col2,
.row3-col3 {
  float: left;
}

.row2-col1,
.row2-col3 {
  width: 40%;
  height: 100%;
}

.row2-col1 > div:hover,
.row2-col3 > div:hover {
  box-shadow: -2px 14px 28px rgba(0, 0, 0, 0.25),
    -2px 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.row2-col2 {
  width: 20%;
  height: 100%;
  border-radius: 10%;
  box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.25);
}

.row1-col1,
.row1-col3,
.row3-col1,
.row3-col3 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 1%;
  border-top-left-radius: 1%;
}

.row1-col1-child,
.row1-col3-child,
.row3-col1-child,
.row3-col3-child {
  width: 70%;
  height: 70%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 1%;
  border-top-left-radius: 1%;
}

.row1-col1-child > div,
.row1-col3-child > div,
.row3-col1-child > div,
.row3-col3-child > div {
  width: 35%;
  height: 35%;
  float: left;
  margin: 7.5%;
  border-bottom-left-radius: 30%;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 7%;
  border-top-left-radius: 7%;
  /* box-shadow: -2px 14px 28px rgba(0, 0, 0, 0.25), -2px 10px 10px rgba(0, 0, 0, 0.22); */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.row1-col1-child > div:hover,
.row1-col3-child > div:hover,
.row3-col1-child > div:hover,
.row3-col3-child > div:hover {
  box-shadow: -2px 14px 28px rgba(0, 0, 0, 0.25),
    -2px 10px 10px rgba(0, 0, 0, 0.22);
}

.row1-col2 > div,
.row3-col2 > div {
  width: 33.333%;
  height: 16.667%;
}

.row2-col1 > div,
.row2-col3 > div {
  width: 16.667%;
  height: 33.333%;
}
/* cell style */
.row1-col2 > div,
.row3-col2 > div,
.row2-col1 > div,
.row2-col3 > div {
  float: left;
  border-radius: 50%;
  padding: 3px;
  box-shadow: -2px 1px 2px rgba(0, 0, 0, 0.25), -2px 1px 1px rgba(0, 0, 0, 0);
}

.green {
  background-color: #84c21f;
}

.red {
  background-color: #dc2418;
}

.blue {
  background-color: #0092dc;
}

.yellow {
  background-color: #f6c700;
}

.white {
  background-color: #fff;
}

.card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.hide {
  visibility: hidden;
}

.card:hover {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

@media only screen and (max-width: 600px) {
  .container {
    width: 400px;
    height: 400px;
    margin-top: 80px;
  }
}

@media only screen and (max-width: 460px) {
  .container {
    width: 350px;
    height: 350px;
    margin-top: 100px;
  }
}
</style>