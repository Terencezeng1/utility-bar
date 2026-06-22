import React from "react"
import {screen, render} from "@testing-library/react"

import {UtilityBar} from "./utility-bar";

describe("UtilityBar", () => {
    it("should render the component", () => {
        render(<UtilityBar contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
