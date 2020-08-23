import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DolordecabezaPage } from './dolordecabeza.page';

describe('DolordecabezaPage', () => {
  let component: DolordecabezaPage;
  let fixture: ComponentFixture<DolordecabezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolordecabezaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DolordecabezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
