import { routes } from "@/lambda";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Testing Helper for the '/search' endpoint", () => {
	it("should return 'Hello, searchRoute!' for GET '/search'", async () => {
		const res = await testClient(routes).search.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, searchRoute!");
	});
});
