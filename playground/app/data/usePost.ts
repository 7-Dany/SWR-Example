"use client"
import useSWR from "swr"
import { getPosts } from "../api/postsApi"

function usePost(){
    const {data, isLoading, error, mutate} = useSWR('/posts', getPosts)
    return {posts: data, isLoading, error, mutate}
}

export default usePost