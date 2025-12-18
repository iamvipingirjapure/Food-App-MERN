
import { Star, Truck, Clock } from 'lucide-react';

interface RestaurantProps {
    name: string;
    image: string;
    tags: string[];
    rating: number;
    deliveryTime: string;
    freeDelivery: boolean;
    isLarge?: boolean;
}

const RestaurantCard: React.FC<RestaurantProps> = ({ name, image, tags, rating, deliveryTime, freeDelivery, isLarge }) => {
  return (
    <div className={`bg-white rounded-3xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${isLarge ? 'w-full' : 'min-w-[200px] w-[200px] md:w-full'}`}>
      <div className="relative mb-3">
        <img 
            src={image} 
            alt={name} 
            className={`w-full object-cover rounded-2xl ${isLarge ? 'h-48' : 'h-32'}`}
        />
      </div>
      
      <div className="px-1">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-3">{tags.join(' - ')}</p>
        
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span className="font-bold text-gray-800">{rating}</span>
                </div>
                {freeDelivery && (
                     <div className="flex items-center space-x-1 text-gray-500">
                        <Truck className="w-4 h-4" />
                        <span className="text-xs">Free</span>
                    </div>
                )}
                 <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{deliveryTime}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
