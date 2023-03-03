import { fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../../constants";
import RestaurantMenu from "../RestaurantMenu";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

//Integration Test
test("Clicking on Add button should add item to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));
  // console.log("addBTN:",addBtn)
  const addBtn = body.getAllByTestId("add-btn");
  //console.log("addBTN:",addBtn[0])
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 2");
});
