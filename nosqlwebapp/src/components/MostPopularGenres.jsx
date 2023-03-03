import React from 'react';
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

const cards = [
  {
    name: 'Action',
    // description:
    //   'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: ArrowLongRightIcon,
  },
  {
    name: 'Award Winning',
    // description:
    //   'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: ArrowLongRightIcon,
  },
  {
    name: 'Sci-Fi',
    // description:
    //   'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: ArrowLongRightIcon,
  },
];

function MostPopularGenres() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Les <span className="text-red-400">Top</span> anime
              <span className="text-red-400"> par année</span> 🏆
            </h2>
            <p className="mt-6 text-xs leading-8 text-gray-600">
              Je suis ravi de vous présenter le sujet de l'analyse des genres
              d'anime les plus populaires. Il est important d'analyser les
              données pour identifier les genres d'anime les plus populaires. En
              utilisant des techniques d'analyse de données, nous pouvons
              identifier les tendances et les préférences de visionnage des
              spectateurs pour chaque genre d'anime. Cela peut aider les
              producteurs et les distributeurs à mieux comprendre les intérêts
              de leur public et à produire des séries plus adaptées aux goûts de
              leur audience.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl bg-gray-100 p-6 ring-1 ring-inset ring-white/10"
              >
                <card.icon
                  className="h-7 w-5 flex-none text-indigo-400"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-black">{card.name}</h3>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
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
                "$match": {'{'}"type": "TV", "score": {'{'}"$ne": ""{'}}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$group": {'{'}"_id": {'{'}"year": {'{'}"$year": {'{'}"$toDate":
                "$aired.from"{'}}'}, <br /> "title": "$title_english"{'}'},
                "averageScore": {'{'}"$avg": "$score"{'}}'}
                {'}'}
                {'}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$sort": {'{'}"_id.year": 1, "averageScore": -1{'}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$group": {'{'}"_id": "$_id.year", "topAnime": {'{'}"$push":{' '}
                {'{'}"title": "$_id.title", "score": "$averageScore"{'}}}'}
              </span>
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
    </div>
  );
}

export default MostPopularGenres;
