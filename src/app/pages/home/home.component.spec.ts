import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BannerComponent } from '../../components/banner/banner.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { DataService } from '../../services/data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, BannerComponent, SliderComponent],
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })
    .compileComponents();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
