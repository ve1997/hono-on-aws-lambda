import { routes } from "@/lambda";
import rb from "@/mock/rb.json";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Request Method for the '/register' endpoint", () => {
	it("should return 'Hello, registerRoute!' for GET '/register'", async () => {
		const res = await routes.request("/register");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, registerRoute!");
	});
	it("should return 'You registered with username: Hono and email: example@example.com' for POST '/register'", async () => {
		const res = await routes.request("/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(rb),
		});
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			message:
				"You registered with username: Hono and email: example@example.com",
			timestamp: expect.any(String),
		});
	});
	it("should return 400 & 'Username must be at least 3 characters long!' for POST '/register' with invalid uname", async () => {
		const res = await routes.request("/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...rb, uname: "Ho" }),
		});
		expect(res.status).toBe(400);
		expect(await res.json()).toMatchObject({
			success: false,
			error: {
				issues: [
					{
						message: "Username must be at least 3 characters long!",
						path: ["uname"],
					},
				],
				name: "ZodError",
			},
		});
	});
	it("should return 400 & 'Invalid email format!' for POST '/register' with invalid email", async () => {
		const res = await routes.request("/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...rb, email: "example.com" }),
		});
		expect(res.status).toBe(400);
		expect(await res.json()).toMatchObject({
			success: false,
			error: {
				issues: [
					{
						message: "Invalid email format!",
						path: ["email"],
					},
				],
				name: "ZodError",
			},
		});
	});
});
