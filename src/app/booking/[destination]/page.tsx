import { notFound } from 'next/navigation';

interface Props {
  params: { destination: string };
}

const destinations: Record<string, { name: string; description: string; price: number; image: string }> = {
  paris: {
    name: 'Paris, France',
    description: 'To know Paris is to know a great deal',
    price: 5000000,
    image: '/img/paris.jpg',
  },
  bali: {
    name: 'Bali, Indonesia',
    description: 'Life seems different in Bali, as though it is in another dimension',
    price: 2500000,
    image: '/img/bali.jfif',
  },
  kyoto: {
    name: 'Kyoto, Japan',
    description: 'In Kyoto, time flows differently – measured not in minutes, but in moments of beauty',
    price: 3500000,
    image: '/img/kyoto.jpg',
  },
};

export default function BookingPage({ params }: Props) {
  const trip = destinations[params.destination.toLowerCase()];
  if (!trip) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{trip.name}</h1>
      <img src={trip.image} alt={trip.name} className="w-full h-80 object-cover rounded-lg mb-6" />

      <p className="text-lg text-gray-700 mb-4">{trip.description}</p>
      <p className="text-xl font-semibold text-blue-600 mb-8">Rp{trip.price} / person</p>

      <form className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold mb-4">Book Your Trip</h2>
        <div className="flex flex-col">
          <label className="mb-1">Full Name</label>
          <input type="text" className="p-2 rounded border" required />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Email Address</label>
          <input type="email" className="p-2 rounded border" required />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Number of Travelers</label>
          <input type="number" className="p-2 rounded border" min="1" defaultValue="1" required />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Travel Date</label>
          <input type="date" className="p-2 rounded border" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition">
          Confirm Booking
        </button>
      </form>
    </main>
  );
}
