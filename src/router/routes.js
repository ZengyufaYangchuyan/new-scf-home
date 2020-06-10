const routes = [
  {
    path: '/',
    component: () => import('../views/home/view.vue'),
    children: [
      {path: '', redirect: 'homePage'},
      {path: 'homePage', meta: {nologin: true}, component: () => import('../views/home/children/homePage/view.vue')},
      {path: 'about', meta: {nologin: true}, component: () => import('../views/home/children/about/view.vue')},
      {
        path: 'news',
        component: () => import('../views/home/children/news/view.vue'),
        children: [
          {path: '', redirect: 'list'},
          {path: 'list', meta: {nologin: true}, component: () => import('../views/home/children/news/children/list.vue')},
          {path: 'detail', meta: {nologin: true}, component: () => import('../views/home/children/news/children/detail.vue')}
        ]
      },
      {path: 'product', meta: {nologin: true}, component: () => import('../views/home/children/product/view.vue')},
      {path: 'join', meta: {nologin: true}, component: () => import('../views/home/children/join/view.vue')},
      {path: 'contact', meta: {nologin: true}, component: () => import('../views/home/children/contact/view.vue')}
    ]
  },
  {
    path: '/login',
    meta: {nologin: true},
    component: () => import('../views/system/login/view.vue'),
  },
  {
    path: '/system',
    component: () => import('../views/system/main/view.vue'),
    children: [
      {path: '', redirect: 'news/list'},
      // 工作台
      // {path: 'workbench', component: () => import('../views/system/main/children/workbench/view.vue')},
      // 新闻管理
      {path: 'news/list', component: () => import('../views/system/main/children/news/list.vue')},
      {path: 'news/edit', component: () => import('../views/system/main/children/news/edit.vue')},
      // 基础管理
      {path: 'basic/header', component: () => import('../views/system/main/children/basic/header/view.vue')},
      {path: 'basic/footer', component: () => import('../views/system/main/children/basic/footer/view.vue')},
      {path: 'basic/banner', component: () => import('../views/system/main/children/basic/banner/view.vue')},
      // 统计管理
      {path: 'statistics/dataView', component: () => import('../views/system/main/children/statistics/dataView/view.vue')},
      {path: 'statistics/statisticsCode', component: () => import('../views/system/main/children/statistics/statisticsCode/view.vue')},
      {path: 'statistics/seoSetting', component: () => import('../views/system/main/children/statistics/seoSetting/view.vue')},
    ]
  }
]

export default routes
