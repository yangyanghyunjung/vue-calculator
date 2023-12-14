<template>
  <div id="mainBody">
    <div id="keyPad">
      <input v-model="keyPad" type="text" name="keyPad" id="inputKeyPad">
    </div>
    <div id="btns">
      <div id="first">
        <div class="grayBtn" @click="resetText">AC</div>
        <div class="grayBtn">+⁄_</div>
        <div class="grayBtn" @click="addText('%')">%</div>
        <div class="orgBtn" @click="addText('÷')">÷</div>
      </div>
      <div id="second">
        <div class="numBtn" @click="addText(7)">7</div>
        <div class="numBtn" @click="addText(8)">8</div>
        <div class="numBtn" @click="addText(9)">9</div>
        <div class="orgBtn" @click="addText('×')">×</div>
      </div>
      <div id="third">
        <div class="numBtn" @click="addText(4)">4</div>
        <div class="numBtn" @click="addText(5)">5</div>
        <div class="numBtn" @click="addText(6)">6</div>
        <div class="orgBtn" @click="addText('-')">-</div>
      </div>
      <div id="fourth">
        <div class="numBtn" @click="addText(1)">1</div>
        <div class="numBtn" @click="addText(2)">2</div>
        <div class="numBtn" @click="addText(3)">3</div>
        <div class="orgBtn" @click="addText('+')">+</div>
      </div>
      <div id="fifth">
        <div class="numBtn"  @click="addText(0)" id="zero">0</div>
        <div class="numBtn" @click="addText('.')">.</div>
        <div class="orgBtn" @click="result()">=</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      keyPad : '',
    }
  },
  methods : {
    // 키패드에 입력
    addText(text) {
      this.keyPad += text;
    },
    // AC 버튼 클릭
    resetText() {
      this.keyPad = '';
    },
    // =결과 > axios
    /*eslint no-debugger: "error"*/
    // result() {
    //   const reqURL = "https://localhost:7028/test";
    //   // const reqURL = this.$getDomain() + this._calculateApiUrl; // main.js에 this._calculateApiUrl 등록 
      
    //    try {
    //     axios
    //       .post(reqURL, {
    //         value: this.keyPad,
    //         headers: {
    //         'X-Auth-Token': 'abc123' // Replace with your custom header
    //         }
    //     }, )
    //       .then((response) => {
    //         this.keyPad = response.data; // .data 같은거 붙어야 하는지 확인
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   } catch (ex) {
    //     console.log(ex);
    //   }
    // },

    result () {
      const reqURL = `https://localhost:7028/test?value=${this.keyPad}`;
      try {
         axios
          .get(reqURL, {
            // headers: {
            //   "Authorization": this.$getToken(),
            //   "UID": email
            // }
          })
          .then(res => { 
            this.keyPad = res.data;
           })
          .catch(err => { console.log(err); });
      } catch(ex) { console.log(ex); }
    },
  }
}
</script>

<style>
#mainBody {
  background-color: black;
  width:400px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

}

#inputKeyPad {
  background-color: black;
  width:390px;
  height: 80px;
  margin-top: 100px;
  color: white;
  border: none;
  font-size: 90px;
  text-align: right;
}
#inputKeyPad:focus {
  outline:none;
}
#btns {
  /* background-color: blue; */
  width:400px;
  height: 450px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  
  
}
.grayBtn {
  display: flex;
  width:75px;
  height: 75px;
  border-radius: 50px;
  background-color:lightgray;
  float: left;
  margin-left: 20px;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
  justify-content: center;
}
.orgBtn {
  display: flex;
  float: left;
  width:75px;
  height: 75px;
  border-radius: 50px;
  background-color:rgb(255, 180, 67);
  margin-left: 20px;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  color: white;
}
.numBtn {
  display: flex;
  float: left;
  width:75px;
  height: 75px;
  border-radius: 50px;
  background-color:rgb(90, 89, 89);
  margin-left: 20px;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  color: white;
}
#second {
  display: flex;
  margin-top: 20px;
  float: left;
}
#third {
  display: flex;
  margin-top: 20px;
  float: left;
}
#fourth {
  display: flex;
  margin-top: 20px;
  float: left;
}
#fifth {
  display: flex;
  margin-top: 20px;
  float: left;
}
#zero {
  width:170px;
  height: 75px;
}
</style>