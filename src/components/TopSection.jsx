import React from 'react';
import AverageLifespan from './AverageLifespan';

const people = [
  {
    name: 'Demon Slayer: Kimetsu no Yaiba',
    role: '500.000+ / mois',
    imageUrl:
      'https://images.unsplash.com/photo-1607500421646-be05ba1e0341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwZTQ2fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jujutsu Kaisen',
    role: '600.000+ / mois',
    imageUrl:
      'https://images.unsplash.com/photo-1607500421646-be05ba1e0341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwZTQ2fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Attack on Titan',
    role: '300.000+ / mois',
    imageUrl:
      'https://images.unsplash.com/photo-1607500421646-be05ba1e0341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwZTQ2fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

function TopSection() {
  return (
    <div>
      <div className="bg-dark py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
              TOP 3 🔥
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Voici un Top 3 des animés les plus streamé actuellement :
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-96 w-124 rounded"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-600">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  ▶️ {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AverageLifespan />
    </div>
  );
}

export default TopSection;
