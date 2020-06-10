<template>
  <div class='about-page'>
    <div class='about-title'></div>
    <div class='about-content'>
      <div class='content-1'>
        <div class='description'>
            星贝云链——专注于供应链金融，整合先进科学技术，创新应用于产业场景，用科技之手链接金融与产业，为产融两端提供一揽子供应链金融综合解决方案，实现“金融+科技+产业”的三位一体良性发展，创造多方价值，支持实体经济发展。
        </div>
        <div class='img-wrap'>
          <img src='../../../../assets/image/home/about/about_1.png'>
          <span class='text text-1'>科技</span>
          <span class='text text-2'>产业</span>
          <span class='text text-3'>金融</span>
        </div>
      </div>
      <div class='content-2'>
        <ul class='table table-1'>
          <li class='table-item-style table-item-style-1'>
            <p class='icon'></p>
          </li>
          <li class='table-item-style table-item-style-2'>
            <p class='icon'></p>
            <p class='desc'>由两条蓝线组合而成一枚蓝贝壳，寓意商流和物流</p>
          </li>
          <li class='table-item-style table-item-style-3'>
            <p class='icon'></p>
            <p class='desc'>由两条金线组合而成一枚金贝壳，寓意信息流和资金流</p>
          </li>
          <li class='table-item-style table-item-style-4'>
            <p class='icon'></p>
            <p class='desc'>寓意四流合一，交互关联础</p>
          </li>
        </ul>
        <ul class='table table-2'>
          <li class='table-item-style table-item-style-1'>
            <span class='icon'></span>
          </li>
          <li class='table-item-style table-item-style-2'>
            <p class='icon'></p>
            <p class='desc'>以星星之火，为中小微企业照亮融资之路</p>
          </li>
          <li class='table-item-style table-item-style-3'>
            <p class='icon'></p>
            <p class='desc'>代表金融、资金，提供供应链金融一揽子解决方案</p>
          </li>
          <li class='table-item-style table-item-style-4'>
            <p class='icon'></p>
            <p class='desc'>以互联网、大数据、云计算等信息技术为基础</p>
          </li>
          <li class='table-item-style table-item-style-5'>
            <p class='icon'></p>
            <p class='desc'>深耕供应链领域，使用区块链底层技术，链接产业端与金融端</p>
          </li>
        </ul>
      </div>
      <div class='content-3'>
        <div class='main'>
          <ul class='main-1'>
            <li class='text text-1'>金融级安全保障</li>
            <li class='text text-2'>大数据智能风控</li>
            <li class='text text-3'>应收应付交易管理</li>
            <li class='text text-4'>场景式风控决策</li>
            <li class='text text-5'>资金安全路由</li>
            <li class='text text-6'>无缝链接瞬时交易</li>
            <li class='text text-7'>区块链技术支持</li>
          </ul>
          <h3 class='product-title'>产业端</h3>
          <ul class='main-2'>
            <li class='text'>改善财报</li>
            <li class='text'>信用增值</li>
            <li class='text'>降本增效</li>
            <li class='text'>便捷融资</li>
            <li class='text'>升级供应链关系</li>
            <li class='text'>创新金融产品</li>
          </ul>
          <h3 class='financial-title'>金融端</h3>
          <ul class='main-3'>
            <li class='text'>场景风控</li>
            <li class='text'>业务创新</li>
            <li class='text'>精准获客</li>
            <li class='text'>指标达成</li>
            <li class='text'>降本增效</li>
            <li class='text'>衍生服务</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-page',
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
.about-page {
  .about-title {
    width: 100%;
    min-width: 1000px;
    height: 420px;
    background: url('../../../../assets/image/home/about/about_bg.png') center center no-repeat;
    background-size: cover;
  }
  .about-content {
    margin: 30px auto 40px;
    width: 1000px;
    .content-1 {
      margin-bottom: 60px;
      display: flex;
      .description {
        padding: 160px 50px 0;
        box-sizing: border-box;
        flex: auto;
        font-size: 18px;
        color: #434343;
        line-height: 30px;
        // text-indent: 34px;
      }
      .img-wrap {
        position: relative;
        width: 450px;
        img {
          width: 450px;
        }
        .text {
          position: absolute;
          font-size: 24px;
          font-weight: bold;
          color: #f08200;
        }
        .text-1 {
          left: 200px;
          top: 50px;
        }
        .text-2 {
          left: 80px;
          bottom: 40px;
        }
        .text-3 {
          right: 80px;
          bottom: 40px;
        }
      }
    }
    .content-2 {
      margin-bottom: 60px;
      .table {
        display: flex;
        width: 100%;
        height: 180px;
        border: 1px solid #f08200;
        // box-sizing: border-box;
      }
      .table-1 {
        li {
          border-right: 1px solid #f08200;
          transition: all .2s;
        }
        li:last-child {
          border-right: 0;
        }
        li:hover {
          background-color: #f08200;
        }
        .icon {
          margin: auto;
          width: 60px;
          height: 44px;
          background-image: url('../../../../assets/image/home/about/icon.png');
          background-repeat: no-repeat;
        }
        .table-item-style {
          padding: 30px 0;
          box-sizing: border-box;
          .desc {
            padding: 25px 5px 0 30px;
            font-size: 16px;
            line-height: 22px;
          }
        }
        .table-item-style-1 {
          width: 200px;
          .icon {
            position: relative;
            left: 50%;
            top: 50%;
            margin: -33.5px 0 0 -50px;
            display: inline-block;
            width: 100px;
            height: 67px;
            background-position: 0 0;
          }
        }
        .table-item-style-1:hover {
          .icon {
            background-position: 0 -311px;
          }
        }
        .table-item-style-2 {
          width: 267px;
          .icon {
            background-position: 0 -264px;
          }
        }
        .table-item-style-2:hover {
          .icon {
            background-position: 0 -117px;
          }
          .desc {
            color: #fff;
          }
        }
        .table-item-style-3 {
          width: 266px;
          // background: red;
          .icon {
            background-position: 0 -215px;
            // background-position: 0 -166px;
          }
        }
        .table-item-style-3:hover {
          .icon {
            background-position: 0 -166px;
          }
          .desc {
            color: #fff;
          }
        }
        .table-item-style-4 {
          width: 267px;
          .icon {
            background-position: 0 -72px;
          }
          .desc {
            padding-top: 35px;
          }
        }
        .table-item-style-4:hover {
          color: #fff;
          .icon {
            background-position: -182px -72px;
          }
        }
      }
      .table-2 {
        margin-top: -1px;
        li {
          width: 200px;
          border-right: 1px solid #f08200;
          transition: all .2s;
        }
        li:last-child {
          border-right: 0;
        }
        li:hover {
          background-color: #f08200;
        }
        .icon {
          margin: auto;
          width: 35px;
          height: 37px;
          background-image: url('../../../../assets/image/home/about/icon.png');
          background-repeat: no-repeat;
        }
        .table-item-style {
          padding: 30px 0;
          box-sizing: border-box;
          .desc {
            padding: 25px 15px 0 20px;
            font-size: 16px;
            line-height: 22px;
          }
        }
        .table-item-style-1 {
          .icon {
            position: relative;
            left: 50%;
            top: 50%;
            margin: -31.5px 0 0 -80px;
            display: inline-block;
            width: 160px;
            height: 63px;
            background-position: -105px 0;
          }
        }
        .table-item-style-1:hover {
          .icon {
            background-position: -105px -316px;
          }
        }
        .table-item-style-2 {
          .icon {
            background-position: -105px -68px;
          }
        }
        .table-item-style-2:hover {
          color: #fff;
          .icon {
            background-position: -143px -68px;
          }
        }
        .table-item-style-3 {
          .icon {
            background-position: -105px -107px;
          }
        }
        .table-item-style-3:hover {
          color: #fff;
          .icon {
            background-position: -143px -107px;
          }
        }
        .table-item-style-4 {
          .icon {
            background-position: -105px -146px;
          }
        }
        .table-item-style-4:hover {
          color: #fff;
          .icon {
            background-position: -145px -146px;
          }
        }
        .table-item-style-5 {
          .icon {
            width: 40px;
            background-position: -100px -185px;
          }
        }
        .table-item-style-5:hover {
          color: #fff;
          .icon {
            background-position: -143px -185px;
          }
        }
      }
    }
    .content-3 {
      margin-bottom: 40px;
      .main {
        position: relative;
        width: 100%;
        height: 820px;
        background: url('../../../../assets/image/home/about/about_2.png') 0 0 no-repeat;
        .main-1 {
          width: 100%;
          height: 520px;
          position: absolute;
          .text {
            position: absolute;
            font-size: 18px;
            color: #434343;
          }
          .text-1 {
            left: 102px;
            top: 170px;
          }
          .text-2 {
            left: 132px;
            top: 408px;
          }
          .text-3 {
            left: 298px;
            top: 494px;
          }
          .text-4 {
            left: 570px;
            top: 494px;
          }
          .text-5 {
            left: 828px;
            top: 380px;
          }
          .text-6 {
            left: 800px;
            top: 220px;
          }
          .text-7 {
            left: 728px;
            top: 115px;
          }
        }
        .product-title {
          position: absolute;
          left: 120px;
          top: 605px;
          color: #f08300;
          font-size: 22px;
        }
        .main-2 {
          position: absolute;
          left: 28px;
          top: 642px;
          width: 310px;
          .text {
            width: 150px;
            float: left;
            line-height: 35px;
            font-size: 18px;
          }
        }
        .financial-title {
          position: absolute;
          right: 120px;
          top: 605px;
          color: #f08300;
          font-size: 22px;
        }
        .main-3 {
          position: absolute;
          left: 740px;
          top: 644px;;
          width: 310px;
          .text {
            width: 135px;
            float: left;
            line-height: 35px;
            font-size: 18px;
          }
        }
      }
    }
    .content-4 {
      .title {
        margin-bottom: 10px;
        font-size: 24px;
        text-align: center;
        color: #f08300;
      }
      .img-wrap {
        margin: auto;
        width: 800px;
      }
    }
  }
}
</style>
