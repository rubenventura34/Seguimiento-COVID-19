import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CansancioPage } from './cansancio.page';

describe('CansancioPage', () => {
  let component: CansancioPage;
  let fixture: ComponentFixture<CansancioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CansancioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CansancioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
