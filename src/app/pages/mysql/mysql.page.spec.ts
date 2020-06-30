import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MysqlPage } from './mysql.page';

describe('MysqlPage', () => {
  let component: MysqlPage;
  let fixture: ComponentFixture<MysqlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysqlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MysqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
