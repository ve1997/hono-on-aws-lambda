import { describe, expect, it } from "vitest";

// Test if environment variables are correctly loaded in the test code
describe("Environment Variable Test", () => {
	it("should read the environment variable KEY", () => {
		const { KEY } = process.env;
		expect(KEY).toBe("VALUE");
	});
});
