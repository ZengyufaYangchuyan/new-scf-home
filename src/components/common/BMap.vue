<template>
  <div id='mapContainer'></div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: '',
  components: {},
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          point: [116.404, 39.915], // 经纬度
          level: 11
        }
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    createMap () {
      let map = new BMap.Map('mapContainer')
      let point = new BMap.Point(...this.config.point)
      map.centerAndZoom(point, this.config.level)
      map.setCurrentCity(this.config.currentCity)
      map.enableScrollWheelZoom(false)

      // 设置标注点（含跳动动画）
      let marker = new BMap.Marker(point)
      map.addOverlay(marker)
      // eslint-disable-next-line no-undef
      // marker.setAnimation(BMAP_ANIMATION_BOUNCE) // 动画

      // opts
      let {width, height, offset, title, content} = this.config.inforOpts
      let opts = {width, height, offset, title}
      let infoWindow = new BMap.InfoWindow(content, opts)
      map.openInfoWindow(infoWindow, point)
      marker.addEventListener('click', () => {
        map.openInfoWindow(infoWindow, point)
      })
    }
  },
  mounted () {
    this.createMap()
  },
}
</script>

<style lang='scss'>
#mapContainer {
  width:1000px;
  height: 400px;
  font-size: 14px;
  .BMap_bubble_title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .BMap_bubble_content {
    line-height: 18px;
  }
}
</style>
