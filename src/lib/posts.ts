import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "@/types";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPosts() {
    // get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostData[] = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.data) {
            return 1;
        } else {
            return -1;
        }
    });
}
