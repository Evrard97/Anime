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
      <div className="bg-dark py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
              Les dix genres les plus populaires en triant par ordre décroissant
              de popularité. 🔥
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {/* Voici un Top 3 des animés les plus streamé actuellement : */}
            </p>
          </div>
          {/* <ul
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
          </ul> */}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-x-8 mt-2 mb-2 overflow-hidden">
        <div></div>
        <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
          <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
              <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                  MongoDB
                </div>
                <div className="border-r border-gray-600/10 py-2 px-4">
                  Requêtes
                </div>
              </div>
            </div>
            <div className="px-6 pt-6 pb-14">
              <span className="pl-4 text-red-200">anime</span>
              <span className="text-green-300">.aggregate</span>
              <span className="text-yellow-400">(</span>
              <span className="text-green-700">[</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$unwind": "$genres"
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$group": {'{'}"_id": "$genres.name", "count": <br /> {'{'}
                "$sum": 1{'}'}, "total_popularity": {'{'}"$sum": "$popularity"
                {'}'}
                {'}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$project": {'{'}"_id": 1, "count": 1, "avg_popularity": {'{'}
                "$round": [{'{'}"$divide": <br /> ["$total_popularity",
                "$count"]{'}'}, 2]{'}}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$sort": {'{'}"avg_popularity": -1{'}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">"$limit": 10</span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="text-green-700 pl-4">]</span>
              <span className="text-yellow-400">)</span>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
          aria-hidden="true"
        />
      </div>
      <div className="mt-12"></div>
      <AverageLifespan />
    </div>
  );
}

export default TopSection;
