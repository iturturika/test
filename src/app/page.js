'use client'
import React from 'react';
import './page.scss'

export default function Home() {

  React.useEffect(() => {
    window.location.href = '/test/registration'
  }, [])
  return (
    <main>

    </main>
  );
}
