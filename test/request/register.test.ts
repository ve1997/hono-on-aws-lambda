import { routes } from "@/lambda";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Request Method for the '/register' endpoint", () => {
	it("should return 'Hello, registerRoute!' for GET '/register'", async () => {
		const res = await routes.request("/register");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, registerRoute!");
	});
});
