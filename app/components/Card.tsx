'use client'

import React from 'react'
import Link from 'next/link';

const Card = async ({ url }: { url: string }) => {
    let res = await fetch(`${url}`);
    let pokemons = await res.json();

    return (
        <Link href={`/pokemons/${pokemons.id}/?name=${pokemons.name}`}>
            <div className='h-[120px] aspect-square flex flex-col justify-center items-center border cursor-pointer transition-all hover:rounded-2xl hover:border-stone-400 active:scale-95'>
                <div className='h-[100px] aspect-square flex justify-center items-center'>
                    <img
                        src={pokemons['sprites'].front_default}
                        alt={pokemons.name}
                    />
                </div>
                <h2 className='capitalize'>{pokemons.name}</h2>
            </div>
        </Link>
    )
}

export default Card