/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { render, screen, waitFor } from "@testing-library/react";

import store from "App/redux/store";
import { mobilesApi, BASE_URL } from "utils/mobilesApi";

import { server } from "mocks/server";
import ProductDetailsSuccess from "mocks/fixtures/ProductDetailsSuccess";

import ProductDetails from "./index";

const renderWithProviders = ui => render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  </ReduxProvider>
);

describe("ProductDetails", () => {
  afterEach(() => {
    jest.clearAllMocks();

    // This clears RTK Query cache after each test
    store.dispatch(mobilesApi.util.resetApiState());
  });

  describe("on success", () => {
    test("should load product details", async () => {
      renderWithProviders(<ProductDetails />);

      const loader = await screen.findByText("Cargando...");
      await waitFor(() => expect(loader).not.toBeInTheDocument());

      const { brand, model, imgUrl, price, colors, internalMemory } = ProductDetailsSuccess;

      const productImage = await screen.findByAltText(`${brand}-${model}`);
      const productTitle = await screen.findByText(`${brand} ${model}`);
      const productPrice = await screen.findByText(`${price || "--"}€`);

      expect(productImage).toBeInTheDocument();
      expect(productImage).toHaveAttribute("src", imgUrl);
      expect(productTitle).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();

      colors.forEach(async color => {
        const colorButton = await screen.findByText(color);

        expect(colorButton).toBeInTheDocument();
      });
      internalMemory.forEach(async memory => {
        const memoryButton = await screen.findByText(memory);

        expect(memoryButton).toBeInTheDocument();
      });
    });

    test("should be loading until data is received", async () => {
      renderWithProviders(<ProductDetails />);

      const loader = await screen.findByText("Cargando...");

      expect(loader).toBeInTheDocument();

      await waitFor(() => expect(loader).not.toBeInTheDocument());
    });
  });

  describe("on error", () => {
    beforeAll(() => {
      server.use(
        rest.get(
          `${BASE_URL}/product/:id`,
          (_req, res, ctx) => res(ctx.status(500))
        )
      );
    });

    test("should render error message", async () => {
      renderWithProviders(<ProductDetails />);

      const errorMessage = await screen.findByText("Ups! Ha ocurrido un error inesperado.");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});