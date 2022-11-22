import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { candidatos } from 'src/app/models/candidato';
import { usuarios } from 'src/app/models/usuario';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { parametrosResponseDTO } from 'src/app/models/parametro';
@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css']
})
export class RegisterCandidateComponent implements OnInit {
  registerForm:FormGroup;
  candidatoObj:candidatos={
    id: 0,
    idTipoDocumento: 1,
    idCarrera: 0,
    idPais: -1,
    idDepartamento: -1,
    idProvincia: -1,
    idDistrito: -1,
    nroDocumento: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    idGenero: -1,
    fechaNacimiento: new Date(),
    email: '',
    direccion: '',
    telefono: '',
    celular: '',
    foto: '',
    flagAprobacion: false,
    motivoAprobacion: '',
    idUsuarioInsert: 0,
    fechaInsert: new Date(),
    idUsuarioUpdate: 0,
    fechaUpdate: new Date(),
    esEliminado: false
  }
  usuarioObj:usuarios={
    id: 0,
    idPersona: 0,
    idTipoPersona: 1,
    nombreUsuario: '',
    contrasenia: '',
    idUsuarioInsert: 0,
    fechaInsert: new Date(),
    idUsuarioUpdate: 0,
    fechaUpdate: new Date(),
    esEliminado: false
  }  
  requiredDoc:boolean = false;
  requiredName:boolean = false;
  requiredlastName:boolean = false;
  requiredSecondLastName:boolean = false;
  requiredCareer:boolean = false;
  requiredEmail:boolean = false;
  requiredContrasenia:boolean = false;
  requiredConfirm:boolean = false;
  txtConfirm:string='';
  txtEmail:string='';
  idCandidato: number = 0;
  carrerasList:parametrosResponseDTO[]=[];
  idCarrera:number=0;
  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,) { 
    this.registerForm = this.createRegisterForm();
  }
  createRegisterForm(): FormGroup<any> {
    return this.fb.group({
      nroDocumento:['', Validators.required],
      nombres:['', Validators.required],
      apellidoPaterno:['', Validators.required],
      apellidoMaterno:['', Validators.required],
      email:['', Validators.required],
      contrasenia:['', Validators.required],
      confirm:['', Validators.required],
      idCarrera:['']
    })
  }
  
  ngOnInit(): void {
    this.LoadParameters();
  }
  LoadParameters() {
    this.authService.getParametersByIdGroup(23).subscribe(res =>{
      //console.log(res.objModel);
      this.carrerasList = res.objModel;
    })
  }
  registerCandidate(formValue : any){
    if(this.idCarrera == 0){
      this.activateError('requiredCareer', true,'');
      return;
    }
    console.log("form", formValue)
    this.candidatoObj.nroDocumento = this.registerForm.get('nroDocumento')?.value;
    this.candidatoObj.apellidoPaterno = this.registerForm.get('apellidoPaterno')?.value;
    this.candidatoObj.nombres = this.registerForm.get('nombres')?.value;
    this.candidatoObj.apellidoMaterno = this.registerForm.get('apellidoMaterno')?.value;
    this.candidatoObj.email = this.registerForm.get('email')?.value;    
    this.candidatoObj.idCarrera = this.idCarrera;
    this.authService.insertCandidato(this.candidatoObj).subscribe( res =>{
      this.idCandidato = Number(res.objModel);
      this.usuarioObj.idPersona = this.idCandidato;
      this.usuarioObj.nombreUsuario = this.registerForm.get('nroDocumento')?.value; 
      this.usuarioObj.contrasenia = this.registerForm.get('contrasenia')?.value; 
      this.authService.insertusuario(this.usuarioObj).subscribe( res =>{
        console.log("res",res.objModel)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Éxito',
          text:'Se ha creado el usuario con éxito',
          showConfirmButton: true,          
        });
        this.router.navigate(['/authentication/login']);
      })
      
    })
  }
  validateRequired(controlName:string){
    let value = this.registerForm.get(controlName)?.value;
    if(value == ''){
      this.activateError(controlName, true,'');      
    }
  }
  activateError(controlName: string, action: boolean, txt:string) {
    switch (controlName) {
      case 'nroDocumento':
        this.requiredDoc = action;
        break;
      case 'nombres':
        this.requiredName = action;
        break;
      case 'apellidoPaterno':
        this.requiredlastName = action;
        break;
      case 'apellidoMaterno':
        this.requiredSecondLastName = action;
        break;
      case 'carrera':
        this.requiredCareer = action;
        break;
      case 'contrasenia':
        this.requiredContrasenia = action;
        break;
      case 'email':
        this.requiredEmail = action;
        if(action && txt ==''){
          this.txtEmail='Email es requerido';
        }else if(action && txt !=''){
          this.txtEmail=txt;
        }
        break;
      case 'confirm':
        this.requiredConfirm = action;
        if(action && txt ==''){
          this.txtConfirm='Repita la contraseña'
        }else if(action && txt !=''){
          this.txtConfirm=txt;
        }
        break;
      case 'requiredCareer':
        this.requiredCareer = action;
        break;
      default:
        break;
    }
  }
  clearError(controlName : string){
    let value = this.registerForm.get(controlName)?.value;
    //console.log("value", value)
    if(value == ''){
      this.activateError(controlName, true,'');
    }else{
      this.activateError(controlName, false,'');
    }
    
  }
  validateConfirm(){
    let contrasenia = this.registerForm.get('contrasenia')?.value;
    let confirm = this.registerForm.get('confirm')?.value;
    if(confirm == ''){
      return;
    }else{
      if(contrasenia != confirm){
        this.activateError('confirm', true, 'La contraseña no coincide');
        this.registerForm.get('confirm')?.setErrors(Validators.required);
      }
    }
  }
  validateEmail(){
    let email = this.registerForm.get('email')?.value;
    if(email == ''){
      return;
    }else if(!email.includes('@')){
      this.activateError('email', true, 'Ingrese un email válido');
      this.registerForm.get('email')?.setErrors(Validators.required);
    }
  }
  onChangeCarrera(event : number){
    console.log("e", event)
    this.activateError('requiredCareer', false,'');
  }
  
}
