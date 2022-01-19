import { incrementar } from "./numeros"

describe('Pruebas de numeros', ()=>{
  it('Debe de retornar 100 si el nuemro mas de 100', ()=>{
    const res=incrementar(300);
    expect(res).toBe(100);
  })
  it('Debe de retornar numero+1 si el nuemro menos de 100', ()=>{
    const res=incrementar(50);
    expect(res).toBe(51);
  })
})
