
import styles from './title.module.scss'
import Link from "next/link";

export default function SealFrame() {

  return (
        <div className={styles.blogTitleAreaDense}>
          <Link href={`/`}>
            <a className={styles.blogTitle}>manasblog</a>
          </Link>
        </div>
  );
}