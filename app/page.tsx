'use client'

import React, { Suspense } from 'react'
import { unstable_noStore } from 'next/cache'

// Layout
import MainLayout from './layout/MainLayout'

// Components
import Card from './components/Card'
import LoadingLayout from './layout/LoadingLayout'
import PaginationControls from './components/PaginationControls'

const Pokemons = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '20'

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=60$offset=0/`);
  const data = await res.json();
  const pokemonsData = data.results;
  const pokemons = pokemonsData.slice(start, end);

  return (
    <>
      <ul className='flex flex-wrap gap-2 justify-center'>
        {pokemons.map((pokemon: any, index: number) => (
          <li key={index}>
            <Card url={pokemon.url} />
          </li>
        ))}
      </ul>
      <PaginationControls
        hasNextPage={end < pokemonsData.length}
        hasPrevPage={start > 0}
      />
    </>
  )
}

const Home = () => {
  return (
    <Suspense fallback={<LoadingLayout text='Finding Pokemons...' />}>
      <MainLayout>
        <section className='space-y-6 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-semibold'>POKEDEX</h1>
          <Pokemons searchParams={{ page: '1', per_page: '20' }} />
        </section>
      </MainLayout>
    </Suspense>
  )
}

export default Home