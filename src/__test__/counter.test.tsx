import {describe,test,expect} from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter.tsx";


describe("Counter component", () => {

    test("increments count when button is clicked", () => {
        // Arrange
        render(<Counter />);
        const countButton = screen.getByTestId("count-button");

        // Act
        fireEvent.click(countButton);

        // Assert
        expect(countButton.textContent).toBe("1");
    });
});