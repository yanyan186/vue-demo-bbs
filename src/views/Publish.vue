<template>
  <div class="weibo">
    <div class="publish">
      <div class="weibo-edit">
        <textarea v-model="wbInfo.content"></textarea>
      </div>
      <div class="weibo-handle">
          <select v-bind:class="{hidden: isHide}" v-model="wbInfo.selected">
              <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
          </select>
          <button v-on:click="add">发送</button>
      </div>
    </div>
    <div class="search">
        <input type="text" v-model="searchQuery" placeholder="输入查询关键字">
    </div>

    <list v-bind:search="searchQuery"></list>
  </div>
</template>

<script>
import List from './List'

export default {
  name: 'publish',
  data () {
    var data = {
      searchQuery: '',
      isHide: false,
      selected: 'public',
      wbInfo: {
        author: {
          "head": "../../../static/imgs/h_02.jpg",
          "name": "林志玲",
          "id": "",
          "sign": "不胖是人生最低目标"
        },
        content: '',
        date: '',
        selected: 'public'
      },
      options: [
        { text: '公开', value: 'public' },
        { text: '仅自己可见', value: 'private' }
      ]
    }
    return data
  },
  methods: {
    add: function (e) {
      var postUrl = 'http://vue.wy.cc/koa/blog/post';
      var postData = this.wbInfo;
      this.$http.post(postUrl, postData)
        .then((response) => {
          this.$children[0].getWbList();

        // vm.$set(this, 'item', {})
      })
    }
  },
  components: {
    List
  }
}
</script>
<style type="text/css" lang="less">
  @bg_color: #fff;
  @h_center: 0 auto;
  @border: 1px solid #eaeaea;
  .publish {
      margin: 0 auto;
      padding: 10px;
      background-color: #fff;
      border: @border;
  }
  .weibo-edit {
    margin: @h_center;
    padding: 5px;
    width: 690px;
    border: 1px solid #eaeaea;
    background-color: @bg_color;
    box-shadow: 0px 0px 3px 0px rgba(235,115,80,0.15) inset;
  }
  .weibo-edit textarea{   
      height: 100px;
      width: 100%;
      max-height: 100px;
      background-color: rgba(0,0,0,0);
      border: 0 none;
      outline: 0;
      resize: none;
  }
  .weibo-handle {
    margin: @h_center;
    margin-top: 10px;
    width: 700px;
    text-align: right;
    button {
      cursor: pointer;
    }
  }
  .weibo-handle select {
    height: 26px;
    border: @border;
    background: 0 none; 
  }
  .weibo-handle button {
    width: 70px;
    height: 26px;
    color: #929292;
    border: @border;
    background: #fbfbfb;
    font-size: 14px;
    outline: 0;
  }
  .hidden {
    display: none;
  }
  .search {
    margin-top: 10px;
    padding: 10px;
    background: @bg_color;
  }
</style>