import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivroPage } from './livro.page';

describe('LivroPage', () => {
  let component: LivroPage;
  let fixture: ComponentFixture<LivroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
