export interface UserAuth {
  email: string;
  token?: string;
  provider: 'google' | 'apple' | 'linkedin' | 'email';
}