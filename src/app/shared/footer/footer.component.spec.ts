import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
    .compileComponents();
  }); 
  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the current year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear().toString();
    expect(compiled.querySelector('footer span')?.textContent).toContain(currentYear);
  });

  //
  it('should render the correct footer text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer span')?.textContent).toContain('© 2024 MStream Todos los derechos reservados');
  });  
});
