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

export const menuItemAdministrator: MenuItem = {
  path: '',
  svgComponent: SvgOperationsComponent,
  text: 'Administrador',
  active: true,
  subMenuItems: [
    {
      path: '/system-users/person/register',
      text: 'Requerimientos',
    },
    {
      path: '/system-users/person',
      text: 'Registro de horas',
    },
    {
      path: '/system-users/person',
      text: 'Registro de horas',
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
      path: '/system-users/person',
      text: 'Requerimientos',
    }
  ]
}