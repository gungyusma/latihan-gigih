import React from "react";
import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../../util/store";
import Search from "..";

describe('testing render searchbar input', () => {
    
    it("should render input properly", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Search handleSearch={() => null}/>
            </Provider>
        );
        expect(getByTestId("search-bar")).toBeTruthy();
    });

    it("input value should be changed", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Search handleSearch={() => null}/>
            </Provider>
        );

        const input = getByTestId("input");

        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test");
    })
})