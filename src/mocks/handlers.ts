// src/mocks/handlers.js
import { rest } from "msw";
import { dummy_login_response } from "./server_dummies/dummy_login_response";

export const handlers = [
  rest.post("login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy_login_response));
  }),
];
