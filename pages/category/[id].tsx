import { client } from "../../libs/client"
import { BlogContentList, CategoryContentList, Blog } from '../../src/types/microCMS'
import IndexTitle from '../../components/title/indexTitle'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import PageTemplate from '../../components/pageTemplate/pageTemplate'
import BlogFrameArea from '../../components/blogContentArea/blogFrameArea'
import { GetStaticPropsContext } from 'next';
import { formatToHightedHtml } from '../../components/format/highlight'
import { formatImg2Webp } from '../../components/format/webp'

type Props = {
  blogContentList: Blog[]
}

export default function Home(props:Props) {
  return (
    <div>
      <PageTemplate>
        <IndexTitle />
        <CategoriesBar />
        {props.blogContentList.map((blog: Blog) => (
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
  if(!context.params) throw Error
  const id = context.params.id;
  if(!id) throw Error

  const data: BlogContentList = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}` } });
  const mappedContents = data.contents.map((content) => {
    content.body = formatToHightedHtml(content.body)
    content.body = formatImg2Webp(content.body)
    return content
  })

  return {
    props: {
      blogContentList: mappedContents
    },
  };
};