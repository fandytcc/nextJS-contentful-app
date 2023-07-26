import { PageBlogPostFieldsFragment } from "@/app/lib/__generated/graphql";
import Link from "next/link";
import { HTMLProps } from "react";
import { FormatDate } from "../../ui/FormatDate";

interface ArticleItemProps extends HTMLProps<HTMLDivElement> {
  article: PageBlogPostFieldsFragment;
}

export default function ArticleItem({ article, className }: ArticleItemProps) {
  const { title, slug, publishedDate } = article
  
  return (
    <Link className="flex flex-col" href={`/${slug}`}>
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg bg-white">
        {/* TODO: add image here */}
        <div className="flex flex-1 flex-col py-3 px-4 md:px-5 md:py-4 lg:px-7 lg:py-5">
          {
            title && (
              <p className="h3 mb-2 text-gray-800 md:mb-3">
                {title}
              </p>
            )
          }

          <div className="mt-auto flex items-center">
            {article.author?.name}
            <div className="ml-auto pl-2 text-xs text-gray-600">
              <FormatDate date={publishedDate} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}