export interface loginRequestDTO {
    nombreUsuario: string;
    contrasenia: string;
    idTipoPersona: number;
}
export interface userResponseDTO {
    nombres: string;
    idPersona: number;
    idTipoPersona: number;
    nroDocumento: string;
    email: string;
    foto: string;
}