import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
    })
    .compileComponents();
    });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the login form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Iniciar sesión en MStream');
    expect(compiled.querySelector('input[type="email"]')).not.toBeNull();
    expect(compiled.querySelector('input[type="password"]')).not.toBeNull();
    expect(compiled.querySelector('button')?.textContent).toContain('Acceder');
  });

  it('should bind email and password', () => {
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;

    //user input (simulated)
    emailInput.value = 'testemail@gmail.com'
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    passwordInput.value = 'const2343';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    //wait till angular update the properties then expects
    fixture.whenStable().then(() => {

      expect(component.email).toBe('testemail@gmail.com');
      expect(component.password).toBe('const2343');
    });
  });

  it('should call login method when click buttton', () => {
    spyOn(component, 'login');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.login).toHaveBeenCalled();
  });

  it('should not accept numbers, not something different to email values ', () => {
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement;
    
    //test with invalid email
    emailInput.value = '12345-)';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(form.checkValidity()).toBeFalse();
    expect(emailInput.validationMessage).toContain('@');
  });

  it('should not accept invalid passwords', () => {
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;
    
    passwordInput.value = 'hola'; //va a fallar
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(passwordInput.checkValidity()).toBeFalse();

    passwordInput.value = 'holahello'; //va a fallar
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(passwordInput.checkValidity()).toBeFalse();

    passwordInput.value = '25148771'; //va a fallar
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(passwordInput.checkValidity()).toBeFalse();

    passwordInput.value = 'lkjn@48771'; //pasa
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(passwordInput.checkValidity()).toBeTrue();

  });


});
