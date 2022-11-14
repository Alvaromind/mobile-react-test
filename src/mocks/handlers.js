/* eslint-disable import/prefer-default-export */
import { rest } from "msw";

import { BASE_URL } from "utils/mobilesApi";

import ProducListSuccess from "./fixtures/ProductListSuccess";
import ProducDetailsSuccess from "./fixtures/ProductDetailsSuccess";

export const handlers = [
  rest.get(`${BASE_URL}/product`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(ProducListSuccess), ctx.delay(30))
  ),
  rest.get(`${BASE_URL}/product/:id`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(ProducDetailsSuccess), ctx.delay(30))
  )
];