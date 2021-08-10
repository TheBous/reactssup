module.exports = {
    transformIgnorePatterns: [
        "node_modules/(?!shiva/)"
    ],
    "globals": {
        "ts-jest": {
            "tsConfigFile": "tsconfig.test.json"
        },
        "google": {}
    },
    "collectCoverageFrom": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "!src/**/*.schema.ts",
        "!src/schema/*.ts"
    ],
    "testMatch": [
        "<rootDir>/__tests__/**/?(*.)test.ts",
        "<rootDir>/__tests__/**/?(*.)test.tsx"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 0,
            "functions": 0,
            "lines": 0,
            "statements": 0
        }
    },
    "moduleFileExtensions": [
        "ts",
        "js",
        "tsx"
    ],
    "transform": {
        "\\.(ts)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        "\\.(tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        "^.+\\.js$": "babel-jest"
    }
}
