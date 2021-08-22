import Image from 'next/image'
import { client } from "../libs/client"
import { BlogContentList } from '../src/types/microCMS'
import title from '../public/aza156.png'
import seal from '../public/favicon.ico'
import styles from '../styles/Index.module.scss'

export default function Home({ blog }) {
  return (
    <div className={styles.main}>
      <div className={styles.blogTitleArea}>
        <Image
          src={title}
          alt="eyecatch"
          width={840}
          height={362}
        />
        <h2 className={styles.blogTitle}>manasblog</h2>
      </div>

      <ul className={styles.lists}>
        {blog.map((blog) => (
          <li className={styles.card} key={blog.id}>
            <div className={styles.seal}>
              <Image
                src={seal}
                alt="eyecatch"
                width={64}
                height={64}
              />
            </div>
            
            <div className={styles.titleArea}>
              <h2 className={styles.title}>{blog.title}</h2>
              <div className={styles.publishedAt}>{transformDate(blog.publishedAt)}</div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
              className={styles.post}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
function transformDate( dateString:string ) {
  const date = new Date(dateString)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}　`
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