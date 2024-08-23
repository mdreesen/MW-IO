import Image from "next/image";
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <h1>Welcome to Midwife io</h1>
      <h2>Log in to begin</h2>

      </div>
    </main>
  );
}
