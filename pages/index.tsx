import { client } from "../libs/client"
import { BlogContentList } from '../src/types/microCMS'
import CommonMeta from '../components/meta'
import IndexTitle from '../components/title/indexTitle'
import SealFrame from '../components/frame/sealFrame'
import PageTemplate from '../components/pageTemplate/pageTemplate'
import BlogContentArea from '../components/blogContentArea/blogContentArea'　

export default function Home({ blog }) {
  return (
    <div>
      <CommonMeta />
      <PageTemplate>
        <IndexTitle/>
        {blog.map((blog) => (
          <SealFrame key={blog.id}>
            <BlogContentArea blog={blog} />
          </SealFrame>
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