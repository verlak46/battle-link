import { TestBed } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { PerfilPage } from './perfil';

describe('PerfilPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilPage],
      providers: [provideIonicAngular()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PerfilPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render ion-header with title "Perfil"', () => {
    const fixture = TestBed.createComponent(PerfilPage);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('ion-title')?.textContent?.trim()).toBe('Perfil');
  });
});
