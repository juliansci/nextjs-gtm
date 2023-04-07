import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>GTM Integration - Index</title>
      </Head>
      <main className="flex flex-col items-center justify-between p-24">
        <Link href="/contact">Contact</Link>
        GTM Integration - Index
      </main>
    </>
  );
}
