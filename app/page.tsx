import React from 'react';
import Circuit from '@components/Circuit';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h3 className="head_text text-center">
        Input your workout
      </h3>
      {/* This will be a placeholder of the form to input the workers */}
      {/* WIll be a compoment here to calculate time and number of sets and reps in worker*/}

      <Circuit />
    </section>
  );
}
