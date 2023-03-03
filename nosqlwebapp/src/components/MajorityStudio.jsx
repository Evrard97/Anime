import React from 'react';

function MajorityStudio() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-red-400">
            Durée moyenne des épisodes par genre 📣
          </h1>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-600 sm:text-2xl sm:leading-9">
              <p>
                Le studio X est largement reconnu pour être le leader de
                l'industrie de l'animation, ayant produit le plus grand nombre
                d'animés et de films à succès au fil des ans, grâce à son équipe
                de talentueux créateurs et réalisateurs.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
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
                "$group":{'{'}"_id": "$genres.name","count": {'{'}"$sum": 1{'}'}
                , <br /> " avg_score": {'{'}"$avg": "$score"{'}}'}
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
                "$sort": {'{'}"count": -1{'}'}
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

export default MajorityStudio;
