module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageReporters: ["json", "text"],
  moduleDirectories: ["node_modules", "."],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "react"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
