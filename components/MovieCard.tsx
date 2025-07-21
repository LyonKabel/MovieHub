import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({id, title, poster_path, vote_average, release_date}) => {
    return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity activeOpacity={0.7} className='w-[30%]'>
            <View>
                <Image 
                    source={{uri: poster_path
                        ?`https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'}}
                    className='w-full aspect-[2/3] rounded-lg mb-2'
                    resizeMode='cover'
                />
                {/* TITLE */}
                <Text className='text-white text-sm font-bold mt-2' numberOfLines={1}>{title}</Text>
                <View className='justify-start gap-x-1 flex-row items-center'>
                        <Image source={icons.star} className='size-4'/>
                        <Text className='text-white text-xs font-bold uppercase'>{Math.round(vote_average  / 2)}</Text>
                </View>

                {/* Tells whether it is a movie or TV show */}
                {/* <View className='justify-between flex-row items-center'>
                        <Text className='text-xs font-medium mt-1 text-light-300'>
                            {release_date?.split('-')[0]}
                        </Text>
                        <Text className='text-xs font-medium uppercase text-light-300'>
                            Movie
                        </Text>
                </View> */}

                </View>
        </TouchableOpacity>
    </Link>
    )
}

export default MovieCard