
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-11 pr-4 py-4 bg-gray-100 border-none rounded-xl text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        placeholder="Search dishes, restaurants"
      />
    </div>
  );
};

export default SearchBar;
