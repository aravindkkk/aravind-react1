import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import '@testing-library/jest-dom';


describe("test contact us page", () => {

    
it("load contact component",() => {

    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

})

it("load button inside the component",() => {

    render(<Contact />);

    const heading = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();

})


it("load input name inside the component",() => {

    render(<Contact />);

    const heading = screen.getByPlaceholderText("name");
    expect(heading).toBeInTheDocument();

})


// it("load all input  inside the component",() => {

//     render(<Contact />);

//     const inputbox = screen.getAllByRole("textbox");
//     expect(inputbox).toBeInTheDocument();

// })

});

