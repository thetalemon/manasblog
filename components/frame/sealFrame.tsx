import styles from './frame.module.scss'
import Image from 'next/image'
import seal from '../../public/favicon.ico'

export default function SealFrame(props) {

  return (
    <div className={styles.card}>
      <div className={styles.seal}>
        <Image
          src={seal}
          alt="eyecatch"
          width={64}
          height={64}
        />
      </div>
      {props.children}
    </div>
  );
}