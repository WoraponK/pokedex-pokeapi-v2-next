'use client'

import React, { Suspense } from 'react'

import MainLayout from '@/app/layout/MainLayout'
import LoadingLayout from '@/app/layout/LoadingLayout'
import { unstable_noStore } from 'next/cache'

const PokemonDetails = async ({ params }: { params: { pokemonId: string } }) => {
  try {
    unstable_noStore();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
    const pokemon = await res.json()

    return (
      <div className='flex flex-col justify-center items-center space-y-4'>
        <div className='h-[200px] aspect-square flex justify-center items-center'>
            <img
              src={pokemon['sprites']['versions']['generation-v']['black-white']['animated'].front_default}
            alt={pokemon.name}
            className='h-full'
          />
        </div>
        <h2 className='text-4xl font-semibold capitalize'>{pokemon.name}</h2>
      </div>
    )
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return <div>Not Found</div>
  }
}

const PokemonList = ({ params }: { params: { pokemonId: string } }) => {
  return (
    <Suspense fallback={<LoadingLayout text='Catching a Pokemon...' />}>
      <MainLayout>
        <PokemonDetails params={params} />
      </MainLayout>
    </Suspense>
  )
}


export default PokemonList