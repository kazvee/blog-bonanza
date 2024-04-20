import { faSplotch } from '@fortawesome/free-solid-svg-icons/faSplotch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className='text-3xl text-center py-4 font-heading'>
      Blog Bonanza
      <FontAwesomeIcon icon={faSplotch} className='text-2xl text-rose-500' />
    </div>
  );
};
