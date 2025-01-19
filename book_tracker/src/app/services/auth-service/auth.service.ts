import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockUser = {
    username: 'user1',
    password: 'password123',
    token: 'fake-jwt-token',
    role: 'admin',
  };

  login(username: string, password: string): boolean {
    if (
      username === this.mockUser.username &&
      password === this.mockUser.password
    ) {
      localStorage.setItem('token', this.mockUser.token);
      localStorage.setItem('role', this.mockUser.role);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
