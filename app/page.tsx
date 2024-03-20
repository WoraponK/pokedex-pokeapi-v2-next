'use client'

import React, { Suspense } from 'react'
import { unstable_noStore } from 'next/cache'

// Layout
import MainLayout from './layout/MainLayout'

// Components
import Card from './components/Card'
import LoadingLayout from './layout/LoadingLayout'

const Pokemons = async () => {
  unstable_noStore();
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20$offset=0/');
  const data = await res.json();
  const pokemons = data.results;

  return (
    <ul className='flex flex-wrap gap-2'>
      {pokemons.map((pokemon: any, index: number) => (
        <li key={index}>
          <Card url={pokemon.url} />
        </li>
      ))}
    </ul>
  )
}

const Home = () => {
  return (
    <Suspense fallback={<LoadingLayout text='Finding Pokemons...'/>}>
      <MainLayout>
        <section className='space-y-6 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-semibold'>POKEDEX</h1>
          <Pokemons />
        </section>
      </MainLayout>
    </Suspense>
  )
}

export default Home