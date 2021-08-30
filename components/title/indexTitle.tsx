
import styles from './title.module.scss'
import Image from 'next/image'
import title from '../../public/aza156.png'

export default function SealFrame() {
  return (
    <div className={styles.blogTitleArea}>
    <Image
      src={title}
      alt="eyecatch"
      width={840}
      height={362}
    />
    <h2 className={styles.blogTitle}>manasblog</h2>
  </div>
  );
}