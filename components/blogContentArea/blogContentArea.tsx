import styles from './blogContentArea.module.scss'
import Image from 'next/image'
import { transformDate } from '../format/date'
import Link from "next/link";

export default function BlogId({ blog }) {
  return (
    <div>
      <div className={styles.titleArea}>
        <Link href={`/blog/${blog.id}`}>
          <a className={styles.title}>{blog.title}</a>
        </Link>
        <div className={styles.publishedAt}>{transformDate(blog.publishedAt)}</div>
      </div>

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
    </div>
  );
}
