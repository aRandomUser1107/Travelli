import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  { name: "Bali, Indonesia", img: "/img/bali.jfif", slug: "bali" },
  { name: "Paris, France", img: "/img/paris.jpg", slug: "paris" },
  { name: "Kyoto, Japan", img: "/img/kyoto.jpg", slug: "kyoto" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <nav className="flex justify-between items-center p-6 shadow-md" aria-label="Main navigation">
        <h1 className="text-2xl font-bold text-blue-600">TRAVELLI</h1>
        <div className="space-x-6">
          <a href="#destinations" className="hover:text-blue-600">Destinations</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <h2 className="text-5xl font-bold mb-4">Explore the world with Travelli</h2>
        <p className="text-lg mb-6">Discover top destinations and unique experiences</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition focus:outline-none">
          Start Your Journey
        </button>
      </section>

      <section id="destinations" className="py-16 px-8">
        <h3 className="text-3xl font-bold mb-8 text-center">Top Destinations</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((place, index) => (
            <Link key={place.slug} href={`/booking/${place.slug}`}>
              <div className="shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition">
                <Image
                  src={place.img}
                  alt={`Photo of ${place.name}`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-60"
                  priority={index === 0}
                />
                <div className="p-4">
                  <h4 className="font-semibold text-xl">{place.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-gray-100 py-16 px-8">
        <h3 className="text-3xl font-bold mb-8 text-center">Testimony</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <p>"Travelli helped me plan my best holiday"</p>
            <span className="block mt-4 font-semibold">— username</span>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p>"The booking process was really fast"</p>
            <span className="block mt-4 font-semibold">— username2</span>
          </div>
        </div>
      </section>

      <footer id="contact" className="text-center py-8 bg-blue-600 text-white mt-12">
        <p>&copy; 2025 Travelli. All rights reserved.</p>
        <div className="mt-4">
          <p>Contact us: <a href="mailto:info@travelli.com" className="underline hover:text-blue-200">info@travelli.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline hover:text-blue-200">+62 (12) 345-678-90</a></p>
          <p>123 Travel St, Adventure City, Indonesia</p>
        </div>
      </footer>
    </main>
  );
}