import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empresas } from 'src/app/models/empresa';
import { parametrosResponseDTO } from 'src/app/models/parametro';
import { usuarios } from 'src/app/models/usuario';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  registerForm:FormGroup;
  requiredDoc:boolean = false;
  requiredrazonSocial:boolean = false;
  requiredEmail:boolean = false;
  requiredRubro:boolean = false;
  requiredCondicion:boolean = false;
  requiredContrasenia:boolean = false;
  requiredConfirm:boolean = false;
  txtEmail:string='';
  txtConfirm:string='';
  rubroList:parametrosResponseDTO[]=[];
  idRubro:number=0;
  idCondicion:number=0;
  condicionList:parametrosResponseDTO[]=[];
  empresaObj:empresas={
    id: 0,
    idRubro: 0,
    idCondicion: 0,
    idVinculacion: 0,
    idCargoContacto: 0,
    idColaboradores: 0,
    nroRUC: '',
    razonSocial: '',
    nombreComercial: '',
    foto: '',
    ubicacion: '',
    fechaInicioActividad: new Date(),
    flagFerias: false,
    flagPracticas: false,
    flagConvenios: false,
    flagOportunidades: false,
    flagAprobacion: false,
    motivoAprobacion: '',
    emailContacto: '',
    celularContacto: '',
    nombreContacto: '',
    idUsuarioInsert: 0,
    fechaInsert: new Date(),
    idUsuarioUpdate: 0,
    fechaUpdate: new Date(),
    esEliminado: false
  }
  usuarioObj:usuarios={
    id: 0,
    idPersona: 0,
    idTipoPersona: 2,
    nombreUsuario: '',
    contrasenia: '',
    idUsuarioInsert: 0,
    fechaInsert: new Date(),
    idUsuarioUpdate: 0,
    fechaUpdate: new Date(),
    esEliminado: false
  }  
  idEmpresa: number = 0;
  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,) { 
      this.registerForm = this.createRegisterForm();
    }
  createRegisterForm(): FormGroup<any> {
    return this.fb.group({
      nroDocumento:['', Validators.required],
      razonSocial:['', Validators.required],
      nombreComercial:[''],
      email:['', Validators.required],
      contrasenia:['', Validators.required],
      confirm:['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.LoadParameters();
  }
  LoadParameters() {
    this.authService.getParametersByIdGroup(32).subscribe(res =>{
      //console.log(res.objModel);
      this.rubroList = res.objModel;
    })
    this.authService.getParametersByIdGroup(22).subscribe(res =>{
      //console.log(res.objModel);
      this.condicionList = res.objModel;
    })
  }
  validateRequired(controlName:string){
    let value = this.registerForm.get(controlName)?.value;
    if(value == ''){
      this.activateError(controlName, true,'');      
    }
  }
  activateError(controlName: string, action: boolean, txt: string) {
    switch (controlName) {
      case 'nroDocumento':
        this.requiredDoc = action;
        break;
        case 'nroDocumento':
          this.requiredDoc = action;
          break;    
        case 'razonSocial':
          this.requiredrazonSocial = action;
          break;  
        case 'email':
          this.requiredEmail = action;
          if(action && txt ==''){
            this.txtEmail='Email es requerido';
          }else if(action && txt !=''){
            this.txtEmail=txt;
          }
          break;
        case 'requiredRubro':
          this.requiredRubro = action;
          break;
        case 'requiredCondicion':
          this.requiredCondicion = action;
          break;
        case 'contrasenia':
          this.requiredContrasenia = action;
          break;
        case 'confirm':
          this.requiredConfirm = action;
          if(action && txt ==''){
            this.txtConfirm='Repita la contraseña'
          }else if(action && txt !=''){
            this.txtConfirm=txt;
          }
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
  validateEmail(){
    let email = this.registerForm.get('email')?.value;
    if(email == ''){
      return;
    }else if(!email.includes('@')){
      this.activateError('email', true, 'Ingrese un email válido');
      this.registerForm.get('email')?.setErrors(Validators.required);
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
  registerEmpresa(formValue:any){
    if(this.idRubro == 0){
      this.activateError('requiredRubro', true,'');
      return;
    }
    if(this.idCondicion == 0){
      this.activateError('requiredCondicion', true,'');
      return;
    }
    console.log("form", formValue)
    this.empresaObj.idRubro = this.idRubro;
    this.empresaObj.idCondicion = this.idCondicion;
    this.empresaObj.nroRUC = this.registerForm.get('nroDocumento')?.value;
    this.empresaObj.razonSocial = this.registerForm.get('razonSocial')?.value;
    this.empresaObj.nombreComercial = this.registerForm.get('nombreComercial')?.value;
    this.empresaObj.emailContacto = this.registerForm.get('email')?.value;
    this.authService.insertEmpresa(this.empresaObj).subscribe(res =>{
      this.idEmpresa = Number(res.objModel);
      this.usuarioObj.idPersona = this.idEmpresa;
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
  onChangeRubro(event : number){
    console.log("e", event)
    this.activateError('requiredRubro', false,'');
  }
  onChangeCondicion(event: number){
    console.log("e", event)
    this.activateError('requiredCondicion', false,'');
  }
}
