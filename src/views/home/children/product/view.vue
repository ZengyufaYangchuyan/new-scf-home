<template>
  <div class='product-page'>
    <div class='product-title'></div>
    <div class='product-content'>
      <div class='content-1'>
        <h2 class='title'>产品服务</h2>
        <ul class='main-wrap'>
            <li class='main-item'>
              <div class='bg bg-1'></div>
              <div class='desc'>
                <h4>链单业务</h4>
                <p class='text'>基于区块链的分布式账本， 以信用为核心， 以债权为载体， 记录企业的践约行为。<br>基于区块链的智能合约， 配合银行共管账户， 实现未来现全流管理， 助力中小企业融资。</p>
                <div class='btn'>查询更多</div>
              </div>
            </li>
            <li class='main-item'>
              <div class='bg bg-2'></div>
              <div class='desc'>
                <h4>风控决策系统</h4>
                <p class='text'>用信决策、大数据风控、授信决策、主体信用风控、额度管控、数据积累模型优化、场景式交易风控</p>
                <div class='btn'>查询更多</div>
              </div>
            </li>
            <li class='main-item'>
              <div class='bg bg-3'></div>
              <div class='desc'>
                <h4>保理融资</h4>
                <p class='text'>供应商基于与核心企业间真实贸易形成的应收账款进行融资的融资产品。</p>
                <div class='btn'>查询更多</div>
              </div>
            </li>
            <li class='main-item'>
              <div class='bg bg-4'></div>
              <div class='desc'>
                <h4>动产质押融资</h4>
                <p class='text'>“入仓即可贷”，通过对库存商品的数量监控、价格监控、周转趋势、销售预估等实时计算授信和水位，满足企业的融资需求。</p>
                <div class='btn'>查询更多</div>
              </div>
            </li>
            <li class='main-item'>
              <div class='bg bg-5'></div>
              <div class='desc'>
                <h4>采购融资</h4>
                <p class='text'>面向核心企业下游经销商，基于经销商与卖方核心企业真实的采购贸易订单提供的纯信用贷款产品。基于益邦供应链管理行业经验以及大数据应用能力，全面满足经销商在商品采购环节短、平、快的资金需求。</p>
                <div class='btn'>查询更多</div>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-page',
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.ora {
  color: #f47115;
}
.product-page {
  .product-title {
    width: 100%;
    min-width: 1000px;
    height: 420px;
    background: url('../../../../assets/image/home/product/product_bg.png') center center no-repeat;
    background-size: cover;
  }
  .product-content {
    margin-top: 80px;
    .content-1 {
      .title {
        margin-bottom: 45px;
        font-size: 26px;
        font-weight: bold;
        text-align: center;
      }
      .main-wrap {
        margin: 0 auto 70px;
        width: 1000px;
        height: 565px;
        display: flex;
        .main-item {
          width: 199px;
          height: 565px;
          border-right: 1px solid #fff;
          background-color: #eae9e9;
          transition: all .2s;
          .bg {
            background-size: auto 290px;
            width: 199px;
            height: 290px;
          }
          .bg-1 {
            background-image: url('../../../../assets/image/home/product/product_1.jpg');
            background-position: -90px 0;
          }
          .bg-2 {
            background-image: url('../../../../assets/image/home/product/product_2.jpg');
            background-position: -50px 0;
          }
          .bg-3 {
            background-image: url('../../../../assets/image/home/product/product_3.jpg');
            background-position: -100px 0;
          }
          .bg-4 {
            background-image: url('../../../../assets/image/home/product/product_4.jpg');
            background-position: -160px 0;
          }
          .bg-5 {
            background-size: auto 310px;
            background-image: url('../../../../assets/image/home/product/product_5.jpg');
            background-position: -240px 0;
          }
          .desc {
            position: relative;
            height: 275px;
            padding: 24px 20px 0;
            box-sizing: border-box;
            h4 {
              margin-bottom: 18px;
              font-size: 20px;
              font-weight: bold;
              color: #f08200;
              text-align: center;
            }
            .text {
              font-size: 12px;
              line-height: 20px;
            }
            .btn {
              position: absolute;
              left: 50%;
              margin-left: -50px;
              width: 98px;
              bottom: 20px;
              width: 100px;
              height: 30px;
              border: 1px solid #fff;
              line-height: 30px;
              font-size: 18px;
              font-weight: bold;
              text-align: center;
              border-radius: 5px;
              color: #fff;
              visibility: hidden;
              cursor: pointer;
            }
          }
        }
        .main-item:hover {
          background-color: #f08200;
          .desc {
            h4 {
              color: #fff;
            }
            .text {
              color: #fff;
            }
          }
          .btn {
            visibility: initial;
          }
        }
      }
    }
  }
}
</style>
