export const AppLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
      <div className='flex flex-col text-white overflow-hidden'>
        <div className='bg-neutral-800'>
          <div>Logo</div>
          <div>Button</div>
          <div>Tokens</div>
        </div>
        <div className='flex-1 overflow-auto bg-gradient-to-b from-neutral-800 to-rose-800'>
          List of Posts
        </div>
        <div className='bg-rose-800'>User Details | Logout Button</div>
      </div>
      <div>{children}</div>
    </div>
  );
};
