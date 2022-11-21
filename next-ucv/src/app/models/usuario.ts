export interface usuarios {
    id: number;
    idPersona: number;
    idTipoPersona: number;
    nombreUsuario: string;
    contrasenia: string;
    idUsuarioInsert: number;
    fechaInsert: Date;
    idUsuarioUpdate: number;
    fechaUpdate: Date;
    esEliminado: boolean;
}