import { PageBlogPostCollectionDocument, PageBlogPostCollectionQuery, PageBlogPostDocument, PageBlogPostQuery, PageLandingDocument, PageLandingQuery } from "../lib/__generated/graphql";
import { gqlClient } from "../lib/client";

export async function getPageLanding() {
  const result = await gqlClient.request<PageLandingQuery>(PageLandingDocument);
  return result;
}

export async function getPageBlogPost(slug: string = '') {
  const result = await gqlClient.request<PageBlogPostQuery>(PageBlogPostDocument, {slug: slug});
  return result;
}

export async function getPageBlogPostCollection(limit: number = 6) {
  const result = await gqlClient.request<PageBlogPostCollectionQuery>(PageBlogPostCollectionDocument, {limit: limit});
  return result;
}