import { ILoginResponse } from "@/mocks/server_dummies/dummy_login_response";

interface ILoginArgs {
  email: string;
  password: string;
}

export async function login(args: ILoginArgs): Promise<ILoginResponse> {
  const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify(args),
  });

  const data = await response.json();

  return data;
}

export default { login };
