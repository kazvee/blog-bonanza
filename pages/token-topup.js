import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Topup() {
  return (
    <div>
      <h1>This is the Token Topup page 💸</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
