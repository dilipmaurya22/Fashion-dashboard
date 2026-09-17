import { Injectable, signal } from '@angular/core';

/** Tracks whether the API is reachable, so the UI can show a "server unreachable" state. */
@Injectable({ providedIn: 'root' })
export class ConnectivityService {
  readonly serverDown = signal(false);
  markDown() { if (!this.serverDown()) this.serverDown.set(true); }
  markUp() { if (this.serverDown()) this.serverDown.set(false); }
}
