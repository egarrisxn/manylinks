import GoogleLogin from "./google-login";
import GitHubLogin from "./github-login";

export default function Hero() {
  return (
    <div className='flex flex-col items-center text-center md:items-start md:text-start'>
      <h1 className='w-full max-w-md text-6xl font-bold md:text-7xl xl:max-w-xl xl:text-8xl'>
        One Page. Many Links.
      </h1>
      <h2 className='my-6 w-full max-w-md text-xl text-gray-500 md:text-2xl xl:max-w-xl xl:text-3xl'>
        Help your followers discover everything you do, with one simple link.
      </h2>
      <div className='flex flex-row items-center gap-1'>
        <GitHubLogin />
        <GoogleLogin />
      </div>
    </div>
  );
}
