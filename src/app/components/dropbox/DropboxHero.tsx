export function DropboxHero() {
  return (
    <section className="relative flex min-h-[65vh] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] pb-16 pt-24">
      <div className="absolute inset-0">
        <img
          src="/images/DropboxHero.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-lg uppercase tracking-[0.28em] text-[#C9A84C]">
          Secure client document portal
        </p>
        <h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          style={{ fontWeight: 900, lineHeight: 1.15 }}
        >
          Drop. Share. Done.
        </h1>
      </div>
    </section>
  );
}
