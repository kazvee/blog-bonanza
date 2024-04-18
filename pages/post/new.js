import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function NewPost(props) {
  console.log('New Post Props:', props);
  return (
    <div>
      <h1>This is the New Post page 📝</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test: 'Testing 123! 🧪',
    },
  };
});
