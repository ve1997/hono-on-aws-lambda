import { routes } from "@/lambda";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Testing Helper for the '/user' endpoint", () => {
	it("should return 'Hello, userRoute!' for GET '/user'", async () => {
		const res = await testClient(routes).user.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, userRoute!");
	});
});
