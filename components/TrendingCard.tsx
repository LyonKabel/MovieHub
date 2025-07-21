import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from '@/constants/images';

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5">
                <Image 
                    source={{ uri: poster_url }} 
                    className="w-32 h-48 rounded-lg" 
                    resizeMode="cover" />
                {/* <View className="absolute bottom-2 left-1 px-2 py-1 bg-black/60 rounded-full">
                    <Text className="text-white text-xs font-semibold">{title}</Text>
                </View> */}
                <View className='absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'>
                    <MaskedView maskElement={
                        <Text className='text-white text-6xl font-bold'>
                            {index + 1}
                            
                        </Text>
                    }>
                    <Image 
                        source={images.rankingGradient} 
                        className='size-14' 
                        resizeMode="cover" 
                        />

                    </MaskedView>
                    
                </View>

                <View>
                    <Text className="text-light-200 text-sm font-bold mt-2" numberOfLines={2}>{title}</Text>
                </View>
                
            </TouchableOpacity>
        </Link>
  );
};

export default TrendingCard;
