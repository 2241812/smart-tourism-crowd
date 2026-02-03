'use client';

import { useState, useEffect } from 'react';
import { Location, Category } from '@/types';
import LocationCard from '@/components/LocationCard';

const categories: Category[] = ['History', 'Food', 'Nature', 'Art'];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Location[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('History');

  const fetchRecommendations = async (category: Category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Find Your Quiet Spot
          </h1>
          <p className="text-lg text-slate-400">Escape the crowds and discover hidden gems.</p>
        </header>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div>
          {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
                          <div className="w-full h-48 bg-slate-700"></div>
                          <div className="p-4">
                              <div className="h-6 bg-slate-700 rounded w-3/4 mb-2"></div>
                              <div className="h-4 bg-slate-700 rounded w-full mb-4"></div>
                              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                          </div>
                      </div>
                  ))}
              </div>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && data.length === 0 && (
            <p className="text-center text-slate-400">No recommendations found for this category.</p>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.map(location => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;
