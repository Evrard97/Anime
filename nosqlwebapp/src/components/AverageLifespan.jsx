import React from 'react';

function AverageLifespan() {
  return (
    <div>
      <div className="bg-gray-900 py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            🔎 Les producteurs qui ont produit des anime avec les meilleures
            notes moyennes, en triant par ordre décroissant de note moyenne.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            aut assumenda. Ab illum adipisci repellat repudiandae et dolore
            officiis, ratione molestias natus. Nesciunt quo minima fuga non
            ipsam unde temporibus magni ipsum! */}
          </p>
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
                "$unwind": "$producers"
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$group": {'{'}"_id": "$producers.name", "avg_score": {'{'}
                "$avg": "$score"{'}'}, <br /> "count": {'{'}"$sum": 1{'}}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$match": {'{'}"count": {'{'}"$gt": 0{'}}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">
                "$sort": {'{'}"avg_score": -1{'}'}
              </span>
              <br />
              <span className="pl-8 text-blue-500">{'},'}</span>
              <br />
              <span className="pl-8 text-blue-500">{'{'}</span>
              <br />
              <span className="text-yellow-100 pl-16">"$limit": 5</span>
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

export default AverageLifespan;
