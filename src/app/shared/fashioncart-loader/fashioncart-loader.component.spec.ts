import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashioncartLoaderComponent } from './fashioncart-loader.component';

describe('FashioncartLoaderComponent', () => {
  let fixture: ComponentFixture<FashioncartLoaderComponent>;
  let component: FashioncartLoaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashioncartLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashioncartLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the default loading label', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.t1')?.textContent).toContain('Loading FashionCart');
    expect(el.querySelector('.t2')?.textContent).toContain('Please wait');
  });

  it('exposes an accessible status role', () => {
    const el: HTMLElement = fixture.nativeElement;
    const root = el.querySelector('.fc-loader')!;
    expect(root.getAttribute('role')).toBe('status');
    expect(root.getAttribute('aria-live')).toBe('polite');
    expect(root.getAttribute('aria-label')).toBe('Loading FashionCart application');
  });

  it('hides the sub-label when blank', () => {
    component.subLabel = '';
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('.t2')).toBeNull();
  });

  it('applies the fullscreen class when enabled', () => {
    component.fullscreen = true;
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('.fc-loader.fullscreen')).toBeTruthy();
  });
});
