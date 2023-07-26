import { getPageBlogPost, getPageBlogPostCollection, getPageLanding } from './api/query';
import Container from './component/ui/Container';
import ArticleList from './component/feature/article/ArticleList';

export default async function Home() {

  // const blogPosts = await getPageBlogPost()
  // const posts = blogPosts.pageBlogPostCollection?.items

  // const pageLanding = await getPageLanding()
  // const posts = pageLanding.pageLandingCollection?.items 

  const blogPostsData = await getPageBlogPostCollection(6)

  const posts = blogPostsData.pageBlogPostCollection?.items

  console.log(posts)

  if (!posts) return

  return (
    <>
      <Container className="my-8 md:mb-10 lg:mb-16">
        <ArticleList articles={posts}/>
      </Container>
    </>
  )
}
