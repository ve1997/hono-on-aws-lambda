import { routes } from "@/lambda";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Testing Helper for the '/search' endpoint", () => {
	it("should return 200 & 'You searched for hello!' for GET '/search?q=hello'", async () => {
		const res = await testClient(routes).search.$get({
			query: { q: "hello" },
		});
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("You searched for hello!");
	});
	it("should return 400 & 'Search query must not be empty!' for GET '/search?q=('')'", async () => {
		const res = await testClient(routes).search.$get({
			query: { q: "" },
		});
		expect(res.status).toBe(400);
		expect(await res.json()).toMatchObject({
			success: false,
			error: {
				issues: [
					{
						path: ["q"],
						message: "Search query must not be empty!",
					},
				],
				name: "ZodError",
			},
		});
	});
	it("should return 400 & 'You didn't search for anything!' for GET '/search?q=(whitespace)'", async () => {
		const res = await testClient(routes).search.$get({
			query: { q: " " },
		});
		expect(res.status).toBe(400);
		expect(await res.text()).toBe("You didn't search for anything!");
	});
});
