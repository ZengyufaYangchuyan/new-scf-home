<script>
export default {
  name: 'my-menu',
  components: {},
  props: {
    menus: Array,
    defaultActive: String,
    openChildMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      router: true,
    }
  },
  computed: {},
  watch: {},
  methods: {},
  render (h) {
    const {menus, defaultActive, openChildMenu} = {
      menus: this.menus,
      defaultActive: this.defaultActive,
      openChildMenu: this.openChildMenu
    }

    // 是否打开子菜单
    let openMenuList = []
    if (openChildMenu) {
      menus.forEach((item) => {
        openMenuList.push(item.index)
      })
    }

    return (
      <div class='my-menu'>
        <el-menu
          router={true}
          default-openeds={openMenuList}
          default-active={defaultActive}
        >
          {
            menus.map((item, index) => {
              if (item.children && item.children.length > 0) {
                return (
                  <el-submenu index={item.index} class='sub-menu'>
                    <template slot='title'>
                      <i class={item.icon}></i>
                      <span>{item.label}</span>
                    </template>
                    {
                      item.children.map((itemC, indexC) => {
                        return (
                          <el-menu-item class='sub-menu-item' index={itemC.index} route={itemC.route}>
                            <span class='title'>{itemC.label}</span>
                          </el-menu-item>
                        )
                      })
                    }
                  </el-submenu>
                )
              } else {
                return (
                  <el-menu-item index={item.index} route={item.route} class='no-sub-menu'>
                    <i class={item.icon}></i>
                    <span slot='title'>{item.label}</span>
                  </el-menu-item>
                )
              }
            })
          }
        </el-menu>
      </div>
    )
  }
}
</script>

<style lang='scss'>
.my-menu {
	width: 200px;
	height: 100%;
  background-color: #fff;
  -moz-user-select:none;
  -khtml-user-select: none;
  user-select: none;
  .sub-menu {
    .sub-menu-item {
      .title {
        padding-left: 20px;
      }
    }
    .is-active {
      background-color: #fdf2e6;
    }
  }
  .no-sub-menu {
    .is-active {
       background-color: #fdf2e6;
    }
  }
}
</style>
