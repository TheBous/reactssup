import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import typescript from '@rollup/plugin-typescript';
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import analyze from "rollup-plugin-analyzer";
import visualizer from "rollup-plugin-visualizer";

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "./build/bundle.umd.js",
      format: "umd",
      name: "universal-datepicker.umd",
    },
    {
      file: "./build/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "./build/bundle.iife.js",
      format: "iife",
      name: "universal-datepicker.iife",
    },
    {
      file: "./build/bundle.es.js",
      format: "es",
    },
  ],
  plugins: [
    scss({
      output: "./build/style.css",
      failOnError: true,
    }),
    typescript(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    NODE_ENV !== "production" && serve({ contentBase: "build" }),
    NODE_ENV !== "production" && livereload(),
    NODE_ENV !== "production" && analyze(),
    NODE_ENV !== "production" && visualizer(),
    NODE_ENV === "production" && terser(),
  ],
};