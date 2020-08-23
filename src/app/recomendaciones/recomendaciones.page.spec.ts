import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomendacionesPage } from './recomendaciones.page';

describe('RecomendacionesPage', () => {
  let component: RecomendacionesPage;
  let fixture: ComponentFixture<RecomendacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
