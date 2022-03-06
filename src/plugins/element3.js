// 全局引入
// import 'element3/lib/theme-chalk/index.css'
// import Element3 from 'element3'

// 按需引入
import { ElCarousel, ElCarouselItem, ElIcon, ElCard } from 'element3'
import 'element3/lib/theme-chalk/carousel.css'
import 'element3/lib/theme-chalk/icon.css'
import 'element3/lib/theme-chalk/card.css'

export default function(app){
    app.use(ElCarousel).use(ElCarouselItem).use(ElIcon).use(ElCard)
}