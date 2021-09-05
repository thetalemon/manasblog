import SealFrame from '../frame/sealFrame'
import BlogContentArea from '../blogContentArea/blogContentArea'　

export default function BlogId({ blog }) {
  return (
    <SealFrame>
      <BlogContentArea blog={blog} />
    </SealFrame>
  );
}
