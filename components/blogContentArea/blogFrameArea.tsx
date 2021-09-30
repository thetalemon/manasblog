import SealFrame from '../frame/sealFrame'
import BlogContentArea from '../blogContentArea/blogContentArea'
import { Blog } from '../../src/types/microCMS'

type PropsType = {
  blog: Blog,
  individual?: boolean
}

export default function BlogId(props: PropsType) {
  return (
    <SealFrame>
      <BlogContentArea individual={ props.individual } blog={props.blog} />
    </SealFrame>
  );
}
