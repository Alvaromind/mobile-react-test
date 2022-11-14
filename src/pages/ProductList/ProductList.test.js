/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import store from "App/redux/store";
import { mobilesApi, BASE_URL } from "utils/mobilesApi";

import { server } from "mocks/server";
import ProductListSuccess from "mocks/fixtures/ProductListSuccess";

import ProductList from "./index";

const renderWithProviders = ui => render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  </ReduxProvider>
);

describe("ProductList", () => {
  afterEach(() => {
    jest.clearAllMocks();

    // This clears RTK Query cache after each test
    store.dispatch(mobilesApi.util.resetApiState());
  });

  describe("on success", () => {
    test("should load product list", async () => {
      renderWithProviders(<ProductList />);

      ProductListSuccess.forEach(async product => {
        const productImage = await screen.findByAltText(`${product.brand}-${product.model}`);

        expect(productImage).toBeInTheDocument();
        expect(productImage).toHaveAttribute("src", product.imgUrl);
      });
    });

    test("should be loading until data is received", async () => {
      renderWithProviders(<ProductList />);

      const loader = await screen.findByText("Cargando...");

      expect(loader).toBeInTheDocument();

      await waitFor(() => expect(loader).not.toBeInTheDocument());
    });

    test("should filter on search bar's value change", async () => {
      renderWithProviders(<ProductList />);

      const product1Image = await screen.findByAltText("Test Brand 1-Test Model 1");
      const product2Image = await screen.findByAltText("Test Brand 2-Test Model 2");
      const product3Image = await screen.findByAltText("Test Brand 3-Test Model 3");

      expect(product1Image).toBeInTheDocument();
      expect(product2Image).toBeInTheDocument();
      expect(product3Image).toBeInTheDocument();

      const searchBar = await screen.findByTestId("search-bar");
      expect(searchBar).toBeInTheDocument();

      userEvent.type(searchBar, "2");

      await waitFor(() => expect(product1Image).not.toBeInTheDocument());
      await waitFor(() => expect(product3Image).not.toBeInTheDocument());
    });
  });

  describe("on error", () => {
    beforeAll(() => {
      server.use(
        rest.get(
          `${BASE_URL}/product`,
          (_req, res, ctx) => res(ctx.status(500))
        )
      );
    });

    test("should render error message", async () => {
      renderWithProviders(<ProductList />);

      const errorMessage = await screen.findByText("Ups! Ha ocurrido un error inesperado.");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});