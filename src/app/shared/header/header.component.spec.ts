import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    })
    .compileComponents();
    
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('.logo img');
    expect(logo).not.toBeNull();
    expect(logo?.getAttribute('src')).toEqual('assets/images/logo.png');
  });


  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.navigation ul li a');
    expect(navLinks.length).toBe(5);
    expect(navLinks[0].textContent).toContain('Inicio');
    expect(navLinks[1].textContent).toContain('Películas');
    expect(navLinks[2].textContent).toContain('Series');
    expect(navLinks[3].textContent).toContain('Géneros');
    expect(navLinks[4].textContent).toContain('Iniciar sesión');
  });


  it('should have correct router links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.navigation ul li a');
    expect(navLinks[0].getAttribute('routerLink')).toEqual('');
    expect(navLinks[1].getAttribute('routerLink')).toEqual('movie-list');
    expect(navLinks[2].textContent).toContain('');
    expect(navLinks[3].textContent).toContain('');
    expect(navLinks[4].getAttribute('routerLink')).toEqual('login');
  });
});
