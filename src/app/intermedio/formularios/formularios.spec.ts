import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formularios';


describe('Formularios', ()=>{
 let componente:FormularioRegister;
 beforeEach(()=>componente=new FormularioRegister(new FormBuilder));
 it('debe de crear un formulario con dos campos',()=>{

   expect(componente.form.contains('email')).toBeTruthy();
   expect(componente.form.contains('password')).toBeTruthy();
 })
 it('email obligatorio',()=>{
   const control=componente.form.get('email');
   control?.setValue('');

   expect(control?.valid).toBeFalse();


 })
 it('email obligatorio',()=>{
   const control=componente.form.get('email');
   control?.setValue('fernando@');

   expect(control?.valid).toBeFalse();


 })



})
