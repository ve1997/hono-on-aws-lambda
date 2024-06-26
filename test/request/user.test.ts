import { routes } from "@/lambda";
import { describe, expect, it } from "vitest";

describe("Lambda function tests with Request Method for the '/user' endpoint", () => {
	it("should return 'Hello, userRoute!' for GET '/user'", async () => {
		const res = await routes.request("/user");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, userRoute!");
	});
});
