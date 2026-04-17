import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

export function GovernmentCommercial() {
  return (
    <>
      <Helmet>
        <title>Government &amp; Commercial Construction | Prodigy Builders</title>
        <meta
          name="description"
          content="Prodigy Builders delivers large-scale government and commercial construction projects across Utah — bonded, insured, and built to spec."
        />
      </Helmet>
      <main className="bg-background text-foreground">
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-28 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Government &amp; Commercial</h1>
          <p className="mt-6 text-lg text-foreground/80">
            Prodigy Builders delivers large-scale government and commercial construction across Utah — bonded, insured, and built
            to spec.
          </p>
          <p className="mt-6 text-foreground/70">
            See examples and project highlights on{' '}
            <Link to="/our-work#government-commercial" className="font-semibold text-[#C9A84C] underline-offset-2 hover:underline">
              Our Work
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
