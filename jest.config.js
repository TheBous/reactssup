module.exports = {
    transformIgnorePatterns: [
        "node_modules/(?!shiva/)"
    ],
    "globals": {
        "ts-jest": {
            "tsconfig": "tsconfig.test.json"
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
        "<rootDir>/__tests__/**/?(*.)test.tsx",
        "<rootDir>/src/**/?(*.)test.ts",
        "<rootDir>/src/**/?(*.)test.tsx"
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
        '\\.ts$': 'ts-jest',
        '\\.tsx$': 'ts-jest',
        "^.+\\.js$": "babel-jest"
    },
    "setupFilesAfterEnv": [
        "<rootDir>/setuptests.ts"
      ]
}
