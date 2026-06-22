interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export function ComingSoonPage({
  title,
  description = "Stay tuned—this page is launching soon.",
}: ComingSoonPageProps) {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">Coming Soon</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-4">{title}</h1>
        <p className="text-base sm:text-lg text-gray-600">{description}</p>
      </div>
    </section>
  );
}
