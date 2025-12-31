import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Components/Body";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userContext from "../utils/UserContext";
import appStore from "../utils/appStores";
import MOCK_DATA from "../utils/mock.json";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// beforeAll(() => {
//   console.log("before all");
// })
// beforeEach(() => {
//   console.log("before each");
// })
// afterAll(() => {
//   console.log("after all");
// })
// afterEach(() => {
//   console.log("after each all");
// })

test("renders search input", async () => {
  render(
    <Provider store={appStore}>
      <userContext.Provider
        value={{ loggedInUser: "Test User", setUserName: jest.fn() }}
      >
        <MemoryRouter future={{ v7_relativeSplatPath: true }}>
          <Body />
        </MemoryRouter>
      </userContext.Provider>
    </Provider>
  );

    const beforeSearchCards = await screen.findAllByTestId("resCard");
    expect(beforeSearchCards.length).toBe(8);

    const searchInput = await waitFor(() =>
      screen.getByTestId("searchInput")
    );
    fireEvent.change(searchInput, {target : {value : "Biryani"}});
    fireEvent.blur(searchInput);
    const resCards = await screen.findAllByTestId("resCard");
    expect(resCards.length).toBe(2);

    
});



test("renders search filter", async () => {
  render(
    <Provider store={appStore}>
      <userContext.Provider
        value={{ loggedInUser: "Test User", setUserName: jest.fn() }}
      >
        <MemoryRouter future={{ v7_relativeSplatPath: true }}>
          <Body />
        </MemoryRouter>
      </userContext.Provider>
    </Provider>
  );

    const beforeSearchCards = await screen.findAllByTestId("resCard");
    expect(beforeSearchCards.length).toBe(8);

   
    const filterButton = screen.getByRole("button",{name:"Top Rate Restaurant"});
    fireEvent.click(filterButton);
    const afterFilter = await screen.findAllByTestId("resCard");
    expect(afterFilter.length).toBe(7);

});



