
import { ChevronRight, Flame } from 'lucide-react';

const categories = [
    { id: 1, name: 'All', icon: <Flame className="w-6 h-6 text-orange-600" />, active: true },
    { id: 2, name: 'Hot Dog', image: '🌭', active: false },
    { id: 3, name: 'Burger', image: '🍔', active: false },
    { id: 4, name: 'Pizza', image: '🍕', active: false },
    { id: 5, name: 'Drink', image: '🥤', active: false },
];

const CategoryList: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">All Categories</h2>
        <button className="flex items-center text-gray-500 text-sm hover:text-orange-500 transition-colors">
            See All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className={`flex items-center space-x-3 px-1 py-1 pr-5 rounded-full min-w-max cursor-pointer transition-transform hover:scale-105 ${cat.active ? 'bg-yellow-400 shadow-md' : 'bg-white shadow-sm'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cat.active ? 'bg-white' : 'bg-gray-100'}`}>
                {cat.icon ? cat.icon : <span className="text-xl">{cat.image}</span>}
            </div>
            <span className={`font-semibold ${cat.active ? 'text-gray-900' : 'text-gray-700'}`}>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
