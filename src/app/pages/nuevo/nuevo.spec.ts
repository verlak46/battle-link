import { TestBed } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { NuevoPage } from './nuevo';

describe('NuevoPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPage],
      providers: [provideIonicAngular()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NuevoPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render ion-header with title "Nueva Partida"', () => {
    const fixture = TestBed.createComponent(NuevoPage);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('ion-title')?.textContent?.trim()).toBe('Nueva Partida');
  });
});
