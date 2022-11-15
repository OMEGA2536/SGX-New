import { SvgBagComponent } from './../../svg/svg-bag/svg-bag.component';
import { SvgMegaphoneComponent } from './../../svg/svg-megaphone/svg-megaphone.component';
import { SvgUserCardComponent } from "src/app/svg/svg-user-card/svg-user-card.component"
import { SvgSearcherComponent } from 'src/app/svg/svg-searcher/svg-searcher.component';

export interface MenuItem {
  path: string
  svgComponent: any
  text: string
  section: string
}

export const menuItemMyData: MenuItem = {
  path: '/system-users/my-data',
  svgComponent: SvgUserCardComponent,
  text: 'Mi datos',
  section: 'MyData'
}

export const menuItemPostOffer: MenuItem = {
  path: '/system-users/post-offer',
  svgComponent: SvgMegaphoneComponent,
  text: 'Publicar oferta',
  section: 'PostOffer'
}

export const menuItemSeeMyOffers: MenuItem = {
  path: '/system-users/offers',
  svgComponent: SvgBagComponent,
  text: 'Ver mis ofertas',
  section: 'Offers'
}

export const menuItemSearchResumes: MenuItem = {
  path: '',
  svgComponent: SvgSearcherComponent,
  text: 'Buscar CVs',
  section: ''
}
