import path from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		include: ["test/**/*.test.{js,ts}"],
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
		env: dotenv.config({ path: ".env" }).parsed,
	},
});
