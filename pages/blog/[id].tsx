import { client } from '../../libs/client'
import { BlogContentList, Blog } from '../../src/types/microCMS'
import GeneralTitle from '../../components/title/generalTitle'
import PageTemplate from '../../components/pageTemplate/pageTemplate'
import BlogFrameArea from '../../components/blogContentArea/blogFrameArea'
import { formatToHightedHtml } from '../../components/format/highlight'
import { formatImg2Webp } from '../../components/format/webp'
import { GetStaticPropsContext } from 'next';

type Props = {
  blog: Blog
}

export default function BlogId(props: Props) {
  return (
    <div>
      <PageTemplate title={ `${props.blog.title} - manasblog` } >
        <GeneralTitle />
        <BlogFrameArea individual blog={props.blog} />
      </PageTemplate>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data:BlogContentList = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext) => {
  if(!context.params) throw Error
  const id = context.params.id;
  if(!id) throw Error
  const data: Blog = await client.get({ endpoint: "blog", contentId: id.toString() });

  data.body = formatToHightedHtml(data.body)
  data.body = formatImg2Webp(data.body)

  return {
    props: {
      blog: data
    },
  };
};
