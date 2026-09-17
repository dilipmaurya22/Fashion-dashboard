import { Component } from '@angular/core';

/** Full-area "can't reach the server" state shown on every page when the API is unreachable. */
@Component({
  selector: 'app-server-down',
  standalone: true,
  template: `
    <div class="sd">
      <svg class="sd-art" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="120" cy="158" rx="82" ry="12" fill="var(--hover)"/>
        <!-- server box -->
        <rect x="66" y="70" width="108" height="34" rx="8" fill="var(--card)" stroke="var(--border)" stroke-width="2"/>
        <rect x="66" y="110" width="108" height="34" rx="8" fill="var(--card)" stroke="var(--border)" stroke-width="2"/>
        <circle cx="82" cy="87" r="4" fill="var(--danger)"/>
        <circle cx="82" cy="127" r="4" fill="var(--border)"/>
        <rect x="98" y="84" width="60" height="6" rx="3" fill="var(--border)"/>
        <rect x="98" y="124" width="44" height="6" rx="3" fill="var(--border)"/>
        <!-- disconnected plug / off signal -->
        <circle cx="120" cy="44" r="24" fill="var(--danger-soft)"/>
        <path d="M110 34 L130 54 M130 34 L110 54" stroke="var(--danger)" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <h3>Can't reach the server</h3>
      <p>The app is running but the API isn't responding. Please make sure the backend is started, then try again.</p>
      <button class="btn btn-primary" (click)="retry()">Retry</button>
    </div>`,
  styles: [`
    .sd { display:flex; flex-direction:column; align-items:center; text-align:center; padding:64px 24px; }
    .sd-art { width:220px; max-width:80%; height:auto; margin-bottom:8px; }
    .sd h3 { font-size:20px; font-weight:700; margin-bottom:8px; }
    .sd p { color:var(--text-secondary); font-size:14px; line-height:1.6; max-width:380px; margin:0 0 20px; }
  `],
})
export class ServerDownComponent {
  retry() { window.location.reload(); }
}
