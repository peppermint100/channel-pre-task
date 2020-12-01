module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
      "\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    testRegex: "./src/__tests__/*",
    setupFiles: [
        "raf/polyfill"
    ]
};