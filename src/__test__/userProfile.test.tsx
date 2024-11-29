import {describe,test,expect} from "vitest"
import { render, screen } from "@testing-library/react";
import UserProfile from "../components/UserProfile.tsx";
import useUserInfo from "../hooks/useUserInfo.ts";


describe("User Profile", () => {

    test("show user info", () => {
        // Arrange
        const user = useUserInfo()
        render(<UserProfile user={user} />);
        const userAge = screen.getByTestId("user-age");
        const userName = screen.getByTestId("user-name");

        // Act

        // Assert
        expect(userAge.textContent).toBe("35");
        expect(userName.textContent).toBe("John Doe");
    });
});