import { client } from "../libs/client"
import { BlogContentList, Blog } from '../src/types/microCMS'
import IndexTitle from '../components/title/indexTitle'
import PageTemplate from '../components/pageTemplate/pageTemplate'
import CategoriesBar from '../components/categoriesBar/categoriesBar'
import BlogFrameArea from '../components/blogContentArea/blogFrameArea'
import { formatToHightedHtml } from '../components/format/highlight'
import { formatImg2Webp } from '../components/format/webp'

type Props = {
  blogContentList: Blog[]
}

export default function Home(props:Props) {
  return (
    <div>
      <PageTemplate>
        <IndexTitle/>
        <CategoriesBar />
        {props.blogContentList.map((blog: Blog) => (
          <BlogFrameArea key={blog.id} blog={blog} />
        ))}
      </PageTemplate>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data:BlogContentList = await client.get({ endpoint: "blog" });
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