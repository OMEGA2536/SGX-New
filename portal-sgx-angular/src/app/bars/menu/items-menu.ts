import { SvgSecurityComponent } from './../../svg/svg-security/svg-security.component';
import { SvgOperationsComponent } from "src/app/svg/svg-operations/svg-operations.component"

interface SubMenuItem {
  path: string
  text: string
}

export interface MenuItem {
  path: string
  svgComponent: any
  text: string
  active: boolean,
  subMenuItems: SubMenuItem[]
}

export const menuItemMyMenu: MenuItem = {
  path: '',
  svgComponent: SvgOperationsComponent,
  text: 'Mi Menú',
  active: false,
  subMenuItems: [
    {
      path: '',
      text: 'Sub menu',
    }
  ]
}

export const menuItemAdministrator: MenuItem = {
  path: '',
  svgComponent: SvgOperationsComponent,
  text: 'Administrador',
  active: true,
  subMenuItems: [
    {
      path: '/system-users/person',
      text: 'Personal',
    }
  ]
}

export const menuItemOperations: MenuItem = {
  path: '',
  svgComponent: SvgOperationsComponent,
  text: 'Operaciones',
  active: false,
  subMenuItems: [
    {
      path: '',
      text: 'Sub menu',
    }
  ]
}

export const menuItemCommercial: MenuItem = {
  path: '',
  svgComponent: SvgOperationsComponent,
  text: 'Comercial',
  active: false,
  subMenuItems: [
    {
      path: '',
      text: 'Sub menu',
    }
  ]
}

export const menuItemSecurity: MenuItem = {
  path: '',
  svgComponent: SvgSecurityComponent,
  text: 'Seguridad',
  active: false,
  subMenuItems: [
    {
      path: '',
      text: 'Sub menu',
    }
  ]
}