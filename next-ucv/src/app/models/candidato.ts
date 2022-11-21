export interface candidatos {
    id: number;
    idTipoDocumento: number;
    idCarrera: number;
    idPais: number;
    idDepartamento: number;
    idProvincia: number;
    idDistrito: number;
    nroDocumento: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    idGenero: number;
    fechaNacimiento: Date;
    email: string;
    direccion: string;
    telefono: string;
    celular: string;
    foto: string;
    flagAprobacion: boolean;
    motivoAprobacion: string;
    idUsuarioInsert: number;
    fechaInsert: Date;
    idUsuarioUpdate: number;
    fechaUpdate: Date;
    esEliminado: boolean;
}
