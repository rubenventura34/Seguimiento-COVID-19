import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiebrePage } from './fiebre.page';

describe('FiebrePage', () => {
  let component: FiebrePage;
  let fixture: ComponentFixture<FiebrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiebrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiebrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
