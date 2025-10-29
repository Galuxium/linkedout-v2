// app/error.tsx
import Link from 'next/link';

type ErrorPageProps = {
  errorMessage?: string;
  retryPath?: string;
};

export default function ErrorPage({ errorMessage = 'Oops! Something went wrong.', retryPath = '/' }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">😕 Oops! Something Went Wrong</h2>
        <p className="text-lg text-gray-600 mb-6">
          {errorMessage}
          <br />
          <small className="text-gray-500">Please try again or contact support if the issue persists.</small>
        </p>
        <Link
          href={retryPath}
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Retry {retryPath === '/' ? 'Now' : `To ${retryPath}`}
        </Link>
      </div>
    </div>
  );
}