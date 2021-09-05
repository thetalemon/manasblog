import { client } from "../libs/client"
import { BlogContentList } from '../src/types/microCMS'
import IndexTitle from '../components/title/indexTitle'
import PageTemplate from '../components/pageTemplate/pageTemplate'
import CategoriesBar from '../components/categoriesBar/categoriesBar'
import BlogFrameArea from '../components/blogContentArea/blogFrameArea'
import { GetStaticPropsContext } from 'next';

export default function Home({ blog }) {
  return (
    <div>
      <PageTemplate>
        <IndexTitle/>
        <CategoriesBar />
        {blog.map((blog) => (
          <BlogFrameArea key={blog.id} blog={blog} />
        ))}
      </PageTemplate>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data:BlogContentList = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};