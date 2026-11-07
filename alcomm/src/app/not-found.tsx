import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-mist text-center">
      <div className="container-x py-12">
        <p className="font-display text-6xl font-medium text-brand">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-muted">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="btn btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  );
}
