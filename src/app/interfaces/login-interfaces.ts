export interface LoginResponse {
    token: string;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      image: string;
    }
}