import { client } from '../../libs/client'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import { BlogContentList } from '../../src/types/microCMS'

export default function BlogId({ blog }) {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>投稿日時: {blog.publishedAt}</p>
      <p className="category">カテゴリ: {blog.category && `${blog.category.name}`}</p>

      {blog.eyecatch && blog.eyecatch.url
        ? <Image
        src={blog.eyecatch.url}
        alt="eyecatch"
        width={150}
        height={150}
        />
        : ''
      }

      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
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