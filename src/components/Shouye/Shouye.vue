<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
      <p>语言：{{$t("message")}}</p>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  name: "Shouye",
  created: function() {
  },
  data: function(){
    return {
    msg: "呵呵呵达",
    question: "",
    answer: "I cannot give you an answer until you ask a question!",
  }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #333;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
