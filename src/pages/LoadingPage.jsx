import { FaSpinner } from 'react-icons/fa';

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 text-center">
        <FaSpinner className="animate-spin mr-2 inline-block" />
        <span className="text-lg font-bold inline-block">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
