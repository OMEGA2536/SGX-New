import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginRequestDTO, userResponseDTO } from 'src/app/models/login';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup
  txtDoc:string ='';
  loginReq:loginRequestDTO={
    nombreUsuario: '',
    contrasenia: '',
    idTipoPersona: 0
  }
  currentUser:userResponseDTO={
    nombres: '',
    idPersona: 0,
    idTipoPersona: 0,
    nroDocumento: '',
    email: '',
    foto: ''
  }
  requiredTipo:boolean = false;
  requiredUser:boolean = false;
  requiredContrasenia:boolean = false;
  valueDoc:number =0;
  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,) {
    this.loginForm = this.createloginForm();
   }
   createloginForm(): FormGroup<any> {
    return this.fb.group({     
      usuario:['', Validators.required],
      contrasenia:['', Validators.required],
    })
  }
  documentTypes:object[]=[
    {
      type: 'D.N.I.',
      value: 1
    },
    {
      type: 'R.U.C.',
      value: 2
    }
  ]

  userTypes: object[] = [
    {
      type: 'Candidato',
      value: 1
    },
    {
      type: 'Empresa',
      value: 2
    }
  ]
  userType: number = 0;
  documentType: number = 0;

  selectedChips: any[] = [];

  ngOnInit(): void {
  }

  toRegisterView = () => this.router.navigate(['/authentication/register']);

  toMyDataView = () => {

    localStorage.setItem('userType', String(this.userType));

    if (this.userType === 1) {
      this.router.navigate(['/system-users/candidate/my-data']);
    } else {
      this.router.navigate(['/system-users/company/my-data']);
    }
  }

  toRecoverPasswordView = () => this.router.navigate(['/authentication/recover-password']);

  Login(){
    if(this.userType == 0){
      this.activateError('requiredTipo', true,'');
      return;
    }
    console.log("tipo", this.userType)
    console.log("form", this.loginForm.value)
    this.loginReq.contrasenia=this.loginForm.value.contrasenia;
    this.loginReq.nombreUsuario=this.loginForm.value.usuario;
    this.loginReq.idTipoPersona=this.userType;
    this.authService.Loginusuario(this.loginReq).subscribe( res =>{
      if(res.objModel != null){
        this.currentUser = res.objModel;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));        
        if (this.userType === 1) {
          this.router.navigate(['/system-users/candidate/my-data']);
        } else {
          this.router.navigate(['/system-users/company/my-data']);
        }
      }else{
        console.log("err", res.description)
      }
     
    })
  }
  onChangeusuario(event :number){
    console.log("e", event)
    this.txtDoc="D.N.I"
    if(event > 0)   {
      this.activateError('requiredTipo', false,'');
    }
    localStorage.setItem('userType', String(event));
    //this.valueDoc =1;
  }
  validateRequired(controlName:string){
    let value = this.loginForm.get(controlName)?.value;
    if(value == ''){
      this.activateError(controlName, true,'');      
    }
  }
  activateError(controlName: string, action: boolean, txt: string) {
    switch (controlName) {
      case 'usuario':
        this.requiredUser = action;
      break;
      case 'contrasenia':
        this.requiredContrasenia = action;
      break;
      case 'requiredTipo':
        this.requiredTipo = action;
      break;
      default:
        break;
    }
  }
  clearError(controlName : string){
    let value = this.loginForm.get(controlName)?.value;
    //console.log("value", value)
    if(value == ''){
      this.activateError(controlName, true,'');
    }else{
      this.activateError(controlName, false,'');
    }
    
  }
  checkedFun(){
    console.log("emit")
  }
}
