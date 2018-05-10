import about from './components/content/about.vue'
import introduction from './components/content/introduction.vue'
import portfolio from './components/content/portfolio.vue'
import profile from './components/content/profile.vue'

export default[
  {
    path: '/',
    name: 'profile',
    component: profile
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: introduction
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio
  }
]
