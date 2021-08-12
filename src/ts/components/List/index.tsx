import React, { useEffect, FC, useState } from "react";
import { IPosts } from "./index.d";

const List: FC = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        const fetchMyAPI = async (): Promise<void> => {
            try {
                const response = await window.fetch("https://jsonplaceholder.typicode.com/posts");
                const json = await response.json();
                setPosts(json);
            } catch(e) {}
        };
        fetchMyAPI();
    }, []);
    if (!posts.length) return null;
    return (
        <ul data-testid="list">
            {posts.map(({ id, title }: Partial<IPosts>) => {
                return <li key={id}>
                    <h3>{id}</h3>
                    <div>{title}</div>
                </li>
            })}
        </ul>
    )
}

export default List;