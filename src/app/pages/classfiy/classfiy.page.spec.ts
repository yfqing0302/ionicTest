import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassfiyPage } from './classfiy.page';

describe('ClassfiyPage', () => {
  let component: ClassfiyPage;
  let fixture: ComponentFixture<ClassfiyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassfiyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassfiyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
