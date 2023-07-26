import { PageBlogPostFieldsFragment } from "@/app/lib/__generated/graphql";
import { HTMLProps } from "react";
import ArticleItem from "./ArticleItem";

interface ArticleListProps extends HTMLProps<HTMLDivElement> {
  articles?: Array<PageBlogPostFieldsFragment | null>;
}

export default function ArticleList({ articles, className, ...props }: ArticleListProps) {
  return articles && articles.length > 0 ? (
    <div className="grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
      {
        articles.map((article, i) => {
          return article ? <ArticleItem key={i} article={article} /> : null
        })
      }
    </div>
  ) : null
}