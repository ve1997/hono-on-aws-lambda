import { routes } from "@/lambda";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

const rb = {
	uname: "Hono",
	email: "example@example.com",
};

describe("Lambda function tests with Testing Helper for the '/register' endpoint", () => {
	it("should return 'Hello, registerRoute!' for GET '/register'", async () => {
		const res = await testClient(routes).register.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, registerRoute!");
	});
	it("should return 'You registered with username: Hono and email: example@example.com' for POST '/register'", async () => {
		const res = await testClient(routes).register.$post({
			json: rb,
		});
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			message:
				"You registered with username: Hono and email: example@example.com",
			timestamp: expect.any(String),
		});
	});
	it("should return 400 & 'Username must be at least 3 characters long!' for POST '/register' with invalid uname", async () => {
		const res = await testClient(routes).register.$post({
			json: { ...rb, uname: "Ho" },
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
		const res = await testClient(routes).register.$post({
			json: { ...rb, email: "example.com" },
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
