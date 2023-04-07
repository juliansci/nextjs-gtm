import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>GTM Integration - Contact</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/">Home</Link>
        GTM Integration - Contact
      </main>
    </>
  );
}
