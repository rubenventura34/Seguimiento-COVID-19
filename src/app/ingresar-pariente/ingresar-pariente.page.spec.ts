import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresarParientePage } from './ingresar-pariente.page';

describe('IngresarParientePage', () => {
  let component: IngresarParientePage;
  let fixture: ComponentFixture<IngresarParientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarParientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresarParientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
