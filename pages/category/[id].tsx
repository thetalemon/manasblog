import { client } from "../../libs/client"
import { BlogContentList, CategoryContentList } from '../../src/types/microCMS'
import IndexTitle from '../../components/title/indexTitle'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import PageTemplate from '../../components/pageTemplate/pageTemplate'
import BlogFrameArea from '../../components/blogContentArea/blogFrameArea'
import { GetStaticPropsContext } from 'next';

export default function Home({ blog }) {
  return (
    <div>
      <PageTemplate>
        <IndexTitle />
        <CategoriesBar />
        {blog.map((blog) => (
          <BlogFrameArea key={blog.id} blog={blog} />
        ))}
      </PageTemplate>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data:CategoryContentList = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params.id;
  const data:BlogContentList = await client.get({ endpoint: "blog", queries: {filters: `category[equals]${id}`} });

  return {
    props: {
      blog: data.contents,
    },
  };
};