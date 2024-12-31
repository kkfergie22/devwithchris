export default function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-woodsmoke-950 bg-opacity-75 w-full rounded-lg border border-woodsmoke-900 hover:border-green-700 p-4 md:border-none hover:shadow-md hover:shadow-brand/50 ${className}`}
    >
      {children}
    </div>
  );
}
