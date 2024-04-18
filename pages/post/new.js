export default function NewPost(props) {
  console.log('New Post Props:', props);
  return (
    <div>
      <h1>This is the New Post page 📝</h1>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      test: 'Testing 123! 🧪',
    },
  };
};
