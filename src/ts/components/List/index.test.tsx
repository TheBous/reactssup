/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import List from "./index";
import { IPosts } from "./index.d";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

describe("<List />", () => {
    let originFetch: any;
    beforeEach(() => {
        originFetch = global.fetch;
    });
    afterEach(() => {
        global.fetch = originFetch;
        jest.clearAllMocks();
    });

    const { container: list } = render(<List />);
    test("App matches the snapshot", () => {
        expect(list).toMatchSnapshot();
    });

    test("List component will render a posts list", async () => {
        render(<List />);
        await waitFor(() => expect(screen.queryByTestId("list")).toBeInTheDocument);
    });

    test("In no posts case, List component won't render a list", async () => {
        const emptyFakePost: IPosts[] = [];
        const mRes = { json: jest.fn().mockResolvedValueOnce(emptyFakePost) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
        global.fetch = mockedFetch;
        render(<List />);
        const list = await waitFor(() => screen.queryByTestId("list"));
        expect(list).not.toBeInTheDocument();
    });

    test("In posts case, List component will render a list", async () => {
        const fakePosts: IPosts[] = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }];
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakePosts) };
        console.log(mRes.json)
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
        global.fetch = mockedFetch;
        render(<List />);
        const list = await waitFor(() => screen.getByTestId("list"));
        expect(list).toBeInTheDocument();
    });
});