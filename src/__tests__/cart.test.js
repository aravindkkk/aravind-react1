import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "@testing-library/react";
import ResCard from "../Components/Body";
import Header from "../Components/Header";
import Cart from "../Components/Cart";
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


it("Should Render Cart component", async ()=> {
       await act( async () => render ( 
          
           <Provider store={appStore}>
            <userContext.Provider
                value={{ loggedInUser: "Test User", setUserName: jest.fn() }}
            >
                <MemoryRouter future={{ v7_relativeSplatPath: true }}>
                <Header />   
                <ResCard />
                <Cart />
                </MemoryRouter>
            </userContext.Provider>
            </Provider>
       ) )

       const resListData = screen.getAllByTestId("resCard");
       expect(resListData.length).toBe(8);
       
       const addToCartBtn = screen.getAllByRole("button", {name: "Add to Cart"});
       expect(addToCartBtn.length).toBe(8);

       expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
       fireEvent.click(addToCartBtn[0]);

       expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
       fireEvent.click(addToCartBtn[1]);

       expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
       expect(screen.getAllByTestId("cartItems").length).toBe(2);

       const clearCartBtn = screen.getByRole("button", {name:"Clear Cart"});
       fireEvent.click(clearCartBtn);
       expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
    


      // expect(resList).toBeInTheDocument();

})