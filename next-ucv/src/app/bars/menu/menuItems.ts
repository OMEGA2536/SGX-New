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

export const companyMyData: MenuItem = {
  path: '/system-users/company/my-data',
  svgComponent: SvgUserCardComponent,
  text: 'Mi datos',
  section: 'CompanyMyData'
}

export const companyPostOffer: MenuItem = {
  path: '/system-users/company/post-offer',
  svgComponent: SvgMegaphoneComponent,
  text: 'Publicar oferta',
  section: 'CompanyPostOffer'
}

export const companyMyOffers: MenuItem = {
  path: '/system-users/company/my-offers',
  svgComponent: SvgBagComponent,
  text: 'Ver mis ofertas',
  section: 'CompanyMyOffers'
}

export const companySearchResumes: MenuItem = {
  path: '',
  svgComponent: SvgSearcherComponent,
  text: 'Buscar CVs',
  section: 'CompanySearchResumes'
}

export const candidateMyData: MenuItem = {
  path: '/system-users/candidate/my-data',
  svgComponent: SvgUserCardComponent,
  text: 'Mi datos',
  section: 'CandidateMyData'
}

export const candidateMyCv: MenuItem = {
  path: '/system-users/candidate/my-cv',
  svgComponent: SvgUserCardComponent,
  text: 'Mi CV',
  section: 'CandidateMyCv'
}

export const candidateRecomended: MenuItem = {
  path: '',
  svgComponent: SvgUserCardComponent,
  text: 'Recomendados',
  section: ''
}

export const candidateMyApplications: MenuItem = {
  path: '',
  svgComponent: SvgUserCardComponent,
  text: 'Mis postulaciones',
  section: ''
}

export const candidateMyInterviews: MenuItem = {
  path: '',
  svgComponent: SvgUserCardComponent,
  text: 'Mis entrevistas',
  section: ''
}