import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
      component.leyenda='Zdarova pasany';
      fixture.detectChanges();
      const l:HTMLElement=fixture.debugElement.query(By.css('h3')).nativeElement;

      expect(l.innerHTML).toContain('Zdarova pasany')


    });
    it('Debe de mostrar el valor de progresso', () => {
      component.cambiarValor(5);
      fixture.detectChanges();
      fixture.whenStable().then(()=>{

const input=fixture.debugElement.query(By.css('input'));
      const elem=input.nativeElement;
      expect(elem.value).toBe(55);

      });




    });

    it('Debe de incrementar con un click de button ', () => {


      const btn=fixture.debugElement.queryAll(By.css('.btn'));
      btn[0].triggerEventHandler('click',null)


      expect(component.progreso).toBe(45);
      btn[1].triggerEventHandler('click',null)


      expect(component.progreso).toBe(50);


    });
    it('Debe de restar 5 de prograso al pulsar el btn ', () => {




      const btn=fixture.debugElement.queryAll(By.css('.btn'));
      btn[0].triggerEventHandler('click',null);
      fixture.detectChanges();
      const l:HTMLElement=fixture.debugElement.query(By.css('h3')).nativeElement;


      expect(l.innerHTML).toContain('45');


    });



});
