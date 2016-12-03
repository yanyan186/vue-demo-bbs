<template>
  <div class="left-bar">
    <div>
      <ul>
        <li>
          关注
        </li>
        <li>
          粉丝
        </li>
        <li>
          微博
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-bar',
  data () {
    return {
      msg: '微博左侧内容'
    }
  },
  methods: {
    initData: function () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
  .left-bar {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 0;
    padding: 10px;
    width: 190px;
    background-color: #fff;
    .info-bar {
      li {
        float: left;
      }
    }
  }
</style>
