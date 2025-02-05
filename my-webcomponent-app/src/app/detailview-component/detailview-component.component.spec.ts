import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailviewComponentComponent } from './detailview-component.component';

describe('DetailviewComponentComponent', () => {
  let component: DetailviewComponentComponent;
  let fixture: ComponentFixture<DetailviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailviewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
