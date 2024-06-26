import { routes } from "@/lambda";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Testing Helper for the '/'(root) endpoint", () => {
	it("should return 'Hello, Hono!' for GET '/'(root)", async () => {
		const res = await testClient(routes).index.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, Hono!");
	});
});
