import { routes } from "@/lambda";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Testing Helper for the '/register' endpoint", () => {
	it("should return 'Hello, registerRoute!' for GET '/register'", async () => {
		const res = await testClient(routes).register.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, registerRoute!");
	});
});
