import { routes } from "@/lambda";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Request Method for the '/'(root) endpoint", () => {
	it("should return 'Hello, Hono!' for GET '/'(root)", async () => {
		const res = await routes.request("/");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, Hono!");
	});
});
