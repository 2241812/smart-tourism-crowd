import { NextResponse } from 'next/server';
import { locations, getSimulatedCrowdLevel } from '@/lib/mockData';
import { Category } from '@/types';

export async function POST(request: Request) {
  try {
    const { category }: { category: Category } = await request.json();

    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }

    // Simulate a database delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const recommendations = locations
      .filter(location => location.category === category)
      .map(location => ({
        ...location,
        crowdPercentage: getSimulatedCrowdLevel(Math.floor(Math.random() * 100)),
      }))
      .sort((a, b) => a.crowdPercentage - b.crowdPercentage);

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
