import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresComponent } from './genres.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GenresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
