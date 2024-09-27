export interface LoginResponse {
    token: string;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      image: string;
    }
}

// export interface LoginResponse {
//     email: string;
//     firstName: string;
//     lastName: string;
//     image: string;
// }