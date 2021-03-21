import { useState, useEffect, useDebugValue } from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListPostsQuery, Post } from "../API";

export default function Home() {
  const [posts, setPosts] = useState(new Array<Post>());

  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const postDataDB = (await API.graphql({
      query: listPosts,
    })) as GraphQLResult<ListPostsQuery>;
    setPosts(postDataDB.data.listPosts.items);
  }

  return (
    <div className="w-10/12 m-auto md:w-6/12">
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Posts</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div className="mt-8 pb-2 bg-white rounded-md p-2 shadow-md ">
            <h2 className="cursor-pointer text-2xl font-medium pb-1 hover:text-blue-400">
              {post.title}
            </h2>
            <div>
              <ul className="flex flex-row">
                <li className="mr-2 text-xs cursor-pointer p-1">
                  #FirstPost
                </li>
                <li className="mr-2 text-xs cursor-pointer p-1">
                  #FirstPost
                </li>
                <li className="mr-2 text-xs cursor-pointer p-1">
                  #FirstPost
                </li>
              </ul>
            </div>
            <div className="flex flex-row mt-4">
              <div className="flex flex-1">
                <div className="flex items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 mr-2 flex items-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <div className="flex items-center">
                  26 Reactions
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md py-2 px-4 cursor-pointer">
                Save
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
