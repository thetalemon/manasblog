import { client } from '../../libs/client'
import styles from '../../styles/Index.module.scss'
import { BlogContentList } from '../../src/types/microCMS'
import CommonMeta from '../../components/meta'
import SealFrame from '../../components/frame/sealFrame'
import GeneralTitle from '../../components/title/generalTitle'
import BlogContentArea from '../../components/blogContentArea/blogContentArea'　

export default function BlogId({ blog }) {
  return (
    <div>
      <CommonMeta/>
      <main className={styles.main}>
        <GeneralTitle />
        <SealFrame>
          <BlogContentArea blog={blog} />
        </SealFrame>
      </main>
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
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};