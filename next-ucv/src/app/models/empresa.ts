export interface empresas {
    id: number;
    idRubro: number;
    idCondicion: number;
    idVinculacion: number;
    idCargoContacto: number;
    idColaboradores: number;
    nroRUC: string;
    razonSocial: string;
    nombreComercial: string;
    foto: string;
    ubicacion: string;
    fechaInicioActividad: Date;
    flagFerias: boolean;
    flagPracticas: boolean;
    flagConvenios: boolean;
    flagOportunidades: boolean;
    flagAprobacion: boolean;
    motivoAprobacion: string;
    emailContacto: string;
    celularContacto: string;
    nombreContacto: string;
    idUsuarioInsert: number;
    fechaInsert: Date;
    idUsuarioUpdate: number;
    fechaUpdate: Date;
    esEliminado: boolean;
}