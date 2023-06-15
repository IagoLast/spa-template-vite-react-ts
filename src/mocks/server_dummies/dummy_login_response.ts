export interface ILoginResponse {
  id: string;
  email: string;
  username: string;
  token: string;
}

export const dummy_login_response: ILoginResponse = {
  id: "dummy_user_id",
  email: "email@example.com",
  username: "john Doe",
  token: "dummy_api_token",
};
