import {describe, test, expect, vi} from "vitest"
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import LoginForm from "../components/LoginForm.tsx";


describe("login form test", () => {

    test("protection against regressions example", async () => {
        // Arrange
        //SUT
        render(<LoginForm/>);
        vi.spyOn(global, 'fetch').mockResolvedValue({
            json: vi.fn().mockResolvedValue({some: 'object'}),
        } as unknown as Response)
        const usernameInput = screen.getByTestId("username")
        const passwordInput = screen.getByTestId("password")
        const submitButton = screen.getByTestId("submit-button")
        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: '123123'}});

        // Act
        fireEvent.click(submitButton);

        // Assert
        await waitFor(() => {
            const loginResult = screen.getByTestId("login-result")
            expect(loginResult.textContent).toBe("you are logged in");
        })

    });
});