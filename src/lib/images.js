import main from '@public/img/logo/logo-svg-nobackground.svg'
import black from '@public/img/logo/logo-negre.jpg'
import head from '@public/img/logo/logo-cap-fera.svg'

import fera150 from '@public/img/maps/fera150boumort.jpg'
import fera200 from '@public/img/maps/fera200.jpg'
import fera300 from '@public/img/maps/fera300.jpg'
import fera500 from '@public/img/maps/fera500.jpg'

import branca from '@public/img/graphics/branca.png'
import fulles from '@public/img/graphics/fulles.png'
import aguila from '@public/img/graphics/aguila.png'

import location from '@public/img/icons/location.png'

import portada from '@public/img/portada2.jpg'
import ovelles from '@public/img/ovelles.jpg'
import finestra from '@public/img/finestra-tren.jpg'
import carreteraBosc from '@public/img/carretera-bosc.jpg'
import carreteraBosc_t from '@public/img/carretera-bosc-256.jpg'
import foguera from '@public/img/foguera.jpg'
import antenes from '@public/img/antenes.jpg'
import pista from '@public/img/pista.jpg'

const IMAGES = {
  logo: { main, black, head },
  icon: { location },
  graphics: { branca, fulles, aguila },
  maps: { fera150, fera200, fera300, fera500 },
  images: {
    portada,
    ovelles,
    carreteraBosc,
    carreteraBosc_t,
    finestra,
    pista,
    foguera,
    antenes
  }
}

export default IMAGES
