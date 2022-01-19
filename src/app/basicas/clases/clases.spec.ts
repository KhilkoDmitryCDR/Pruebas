import { Jugador } from './clases';

describe('Pruebas de Clase', ()=>{
  const jugador=new Jugador;
  beforeEach(()=>{
    jugador.hp=100

  });
  it('Debe de retornar 80hp si recibe 20 danio', ()=>{

    const res=jugador.recibeDanio(20)
    expect(res).toBe(80);
  })
  it('Debe de retornar 0hp si recibe 100 danio', ()=>{

    const res=jugador.recibeDanio(100)
    expect(res).toBe(0);
  })
  it('Debe de retornar 50hp si recibe 50 danio', ()=>{

    const res=jugador.recibeDanio(50)
    expect(res).toBe(50);
  })

})
