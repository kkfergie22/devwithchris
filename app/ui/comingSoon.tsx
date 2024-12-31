import BackButton from '@/app/ui/backButton';

export default function ComingSoon() {
  return (
    <main className="h-screen overflow-auto flex flex-col items-center w-full justify-center relative text-brand">
      <BackButton className="absolute top-10 mx-5 rounded left-0" />
      <div className="relative flex items-center justify-center mb-12">
        <i className="absolute right-3 bi bi-gear-wide-connected text-6xl animate-slow-spin"></i>
        <i className="absolute -top-20 text-7xl bi bi-gear-wide-connected animate-slow-spin"></i>
        <i className="absolute top-1 bi bi-gear-wide-connected text-5xl animate-slow-spin"></i>
      </div>
      <div className="text-xs text-center mx-5 md:text-sm lg:text-base xl:text-xl font-bold mt-5 px-6">
        <h1 className="animate-pulse font-bold text-2xl md:text-3xl">
          Coming Soon...
        </h1>
        <p className="text-gray-300 mt-2 md:mt-5">
          I am working hard on this page and will make it available soon, check
          back later thanks
        </p>
      </div>
    </main>
  );
}
