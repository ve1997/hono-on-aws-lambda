import { routes } from "@/lambda";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Request Method for the '/search' endpoint", () => {
	it("should return 'Hello, searchRoute!' for GET '/search'", async () => {
		const res = await routes.request("/search");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, searchRoute!");
	});
});
