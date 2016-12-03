<template>
    <div class="list">
      <div class="weibo-search" v-show="isSearch">只展示含`{{ search }}`的内容</div>
      <div v-cloak class="info" v-for="item in wbData.items" v-if="item.selected != 'private' && (!isSearch || isSearch && item.content.indexOf(search) > -1)">
        <div class="weibo-head">
          <img v-bind:src="item.author.head" alt="">
        </div>
        <div class="weibo-info">
          <div class="weibo-name">
            {{ item.author.name }}
          </div>
          <div class="weibo-date">
            {{ item.date | moment("MM月DD日 h:mm") }}
          </div>
          <div class="weibo-detail" v-html="item.content">
          </div>
        </div>
      </div>
    </div>
</template>  
<script>
export default {
  name: 'list',
  data () {
    return {
      wbData: {},
      isSearch: false
    }
  },
  props: ['search'],
  created: function () {
    this.getWbList()
  },
  watch: {
    isSearch: function (newSearch) {
    },                   
    wdData: function () {
      console.log(111);
    }
  },
  // 计算属性
  computed: {
    isSearch: function () {
      return (this.search.length > 0);
    }
  },
  methods: {
    getWbList: function () {
      var apiUrl = 'http://vue.wy.cc/koa/blog/get';
      this.$http.get(apiUrl).then((response) => {
        var data = JSON.parse(response.body)
        console.log(data.items)
        this.$set(this, 'wbData', data)
      }, (response) => {
        // error callback
        console.log('---没有数据给你看---')
      });
      this.$emit('getWbList');
    }
  },
  filters: {
    test: function () {
      return ''
    }
  }
}
</script>
<style type="text/css" lang="less">
.list {
  margin-top: 10px;
}
.info {
  padding: 15px;
  border: 1px solid #efefef;
  background-color: #fff;
  &:after {
    clear: both;
    content: "";
    display: table;
  }
}
.weibo-head {
  float: left;
  width: 60px;
  height: 60px;
  border: #eeeeee solid 1px;
  border-radius: 80px;
  overflow: hidden;
  img {
    width: 60px;
    height: 60px;
  }
}
.weibo-info {
  margin-left: 80px;
  color: #333;
  .weibo-name {
    padding-top: 5px;
    line-height: 30px;
    font-weight: 700;
  }
  .weibo-date {
    font-size: 12px;
    color: #666;
  }
  .weibo-detail {
    font-size: 12px;
    line-height: 20px;
    color: #666;
    a {
      color: #eb7350;
    }
  }
  .weibo-search {
    padding: 10px;
    background-color: #fff;
  }
}
</style>