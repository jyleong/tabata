import React, { Suspense } from 'react';
import Circuit from '@components/Circuit';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h3 className="head_text text-center">
        Input your workout
      </h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Circuit />
      </Suspense>
    </section>
  );
}
