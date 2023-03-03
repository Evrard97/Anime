import React from 'react';

function TheLamest() {
  return (
    <div>
      <div className="bg-gray-900 py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            ❤️ Top des <span className="text-red-400 underline">animé</span>
            {/* 'animé le moins apprécié */} ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {/* Malheureusement, malgré les efforts de l'équipe de production, X est
            considéré comme l'animé le moins apprécié par les fans de la série
            en raison de sa narration confuse et de son animation peu
            convaincante, ce qui a conduit à une baisse significative de sa
            popularité. */}
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
              <br />
              <span className="text-yellow-100 pl-16">
                {'{'}"type": "TV", "score": {'{'}"$ne": ""{'}}'}).sort("score",
                -1).limit(3)
              </span>
              <br />
              <span className="text-yellow-400 pl-4">)</span>
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

export default TheLamest;
