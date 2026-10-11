import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Click to <Link className="text-blue-500 underline" href="/documents/1">Document 1</Link>
    </div>
  );
};

export default Home;