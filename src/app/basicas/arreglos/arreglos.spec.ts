import { obtenerRobots } from "./arreglos";

describe('Pruebas de arreglos', ()=>{
  it('Debe de retornar al menos tres robots', ()=>{
    const res=obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  })
  it('Debe de existir RobotDolbaeb y megaman', ()=>{
    const res=obtenerRobots();
    expect(res).toContain('RobotDolbaeb');
    expect(res).toContain('MegaMan');
  })

})
