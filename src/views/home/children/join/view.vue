<template>
  <div class='join-page'>
    <div class='join-us-title'></div>
    <div class='join-us-content'>
      <div class='content-1'>
        <h3 class='content-title'>人才理念</h3>
        <div class='main'>
          <div class='img-bg'></div>
          <div class='desc'>
            <p class='text'>人才是公司快速发展和稳健成长的基石！</p>
            <a class='btn' href='https://jobs.51job.com/all/co5737744.html' target='_blank'>查看招聘岗位 <i class='el-icon-arrow-right'></i></a>
          </div>
        </div>
      </div>
      <div class='content-2'>
        <h4 class='content-title'>公司文化</h4>
        <ul class='culture'>
          <li class='culture-item'>
            <img src='../../../../assets/image/home/join/join_1.jpg'>
          </li>
          <li class='culture-item'>
            <p class='p-1'>
              <i class='el-icon-d-arrow-left'></i>
              <span class='mark'>文化认同，高潜高质</span></p>
          </li>
          <li class='culture-item'>
             <img src='../../../../assets/image/home/join/join_2.jpg'>
          </li>
          <li class='culture-item'>
            <p class='p-1'>
              <i class='el-icon-d-arrow-left'></i>
              <span class='mark'>人才稀缺，主动营销</span>
            </p>
          </li>
          <li class='culture-item'>
            <p class='p-2'>
              <span class='mark'>关键岗位，有效备份</span>
              <i class='el-icon-d-arrow-right'></i>
            </p>
          </li>
          <li class='culture-item'>
            <img src='../../../../assets/image/home/join/join_3.jpg'>
          </li>
          <li class='culture-item'>
            <p class='p-2'>
              <span class='mark'>管理梯队，自由流动</span>
              <i class='el-icon-d-arrow-right'></i>
            </p>
          </li>
          <li class='culture-item'>
            <img src='../../../../assets/image/home/join/join_4.jpg'>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join-page',
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='scss'>
.ora {
  color: #f47115;
}
.join-page {
  .join-us-title {
    width: 100%;
    min-width: 1000px;
    height: 420px;
    background: url('../../../../assets/image/home/join/join_bg.png') center center no-repeat;
    background-size: cover;
  }
  .join-us-content {
    margin: auto;
    padding: 85px 20px 70px;
    width: 1000px;
    box-sizing: border-box;
    .content-title {
        margin-bottom: 45px;
        font-size: 26px;
        font-weight: bold;
        text-align: center;
    }
    .content-1 {
      margin-bottom: 85px;
      .main {
        display: flex;
        .img-bg {
          width: 365px;
          height: 205px;
          background: url('../../../../assets/image/home/join/sky.jpg') 0 -40px no-repeat;
          background-size: 400px auto;
        }
        .desc {
          padding: 50px 0 0 50px;
          flex: auto;
          .text {
            margin-bottom: 30px;
            font-size: 18px;
          }
          .btn {
            padding: 0 18px;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            line-height: 38px;
            height: 38px;
            text-align: center;
            background-color: #f08200;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(128, 128, 128, .5);
            text-decoration: none;
          }
          .btn:hover {
            box-shadow: 0 0 0 rgba(128, 128, 128, .3);
          }
        }
      }
    }
    .content-2 {
      // height: 280px;
      .culture {
        width: 1000px;
        .culture-item {
          float: left;
          width: 250px;
          height: 140px;
          img {
            width: 250px;
            height: 140px;
          }
          p {
            position: relative;
            box-sizing: border-box;
            top: 50%;
            margin-top: -15px;
            font-size: 18px;
            font-weight: bold;
            color: #f08200;
            height: 30px;
            line-height: 30px;
          }
          .p-1 {
            text-align: left;
            padding-left: 15px;
            .mark {
              margin-left: 5px;
            }
          }
          .p-2 {
            text-align: right;
            padding-right: 10px;
            .mark {
              margin-right: 5px;
            }
          }
        }
      }
    }
    .content-2:after {
      display: block;
      content: '';
      clear: both;
      width: 100%;
    }
  }
}
</style>
