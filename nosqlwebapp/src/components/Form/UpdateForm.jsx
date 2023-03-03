import React, { useState } from 'react';
import axios from 'axios';

const createDataColSimple = [
  { name: 'Titre', placeholder: "Titre de l'oeuvre", inputName: 'title' },
  { name: 'Type', placeholder: '', inputName: 'type' },
  { name: 'Episodes', placeholder: "Nbre d'épisodes", inputName: 'episodes' },
  { name: 'Status', placeholder: 'Finis ou en cours', inputName: 'status' },
  { name: 'Duration', placeholder: 'Durée par épisode', inputName: 'duration' },
  { name: 'Rating', placeholder: 'Age', inputName: 'rating' },
  { name: 'Score', placeholder: '', inputName: 'score' },
  { name: 'Rank', placeholder: '', inputName: 'rank' },
  { name: 'Popularity', placeholder: '', inputName: 'popularity' },
  { name: 'Members', placeholder: '', inputName: 'members' },
  { name: 'Favorites', placeholder: '', inputName: 'favorites' },
  { name: 'Studios', placeholder: '', inputName: 'studios' },
  {
    name: 'Image Url',
    placeholder: "Lien de l'image de l'oeuvre",
    inputName: 'img_url',
  },
  { name: 'Genre', placeholder: 'Genre n°1', inputName: 'genre_1' },
  { name: 'Genre', placeholder: 'Genre n°2', inputName: 'genre_2' },
  { name: 'Genre', placeholder: 'Genre n°2', inputName: 'genre_3' },
];

function UpdateForm() {
  const [disableInput, setDisableInput] = useState(true);
  const [idValue, setIdValue] = useState('');
  const [dataVal, setDataVal] = useState([]);

  const [dataFound, setDataFound] = useState({
    id: '',
    title: '',
    type: '',
    episodes: '',
    status: '',
    duration: '',
    rating: '',
    score: '',
    rank: '',
    popularity: '',
    members: '',
    favorites: '',
    studios: '',
    img_url: '',
    genre_1: '',
    genre_2: '',
    genre_3: '',
  });

  const handleChangement = (e) => {
    e.preventDefault();
    dataFound[e.target['name']] = e.target.value;
    // console.log(data);
  };

  // const retriveDataById = async (id) => {
  //   try {
  //     const res = await axios.put(`http://127.0.0.1:5000/animes/${id}`, {
  //       mode: 'cors',
  //     });
  //     // console.log(res.data);
  //     setDataVal(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios
      .put(`http://127.0.0.1:5000/animes/update/${dataFound.id}`, {
        title: dataFound.title,
        type: dataFound.type,
        episodes: dataFound.episodes,
        status: dataFound.status,
        duration: dataFound.duration,
        rating: dataFound.rating,
        score: dataFound.score,
        rank: dataFound.rank,
        popularity: dataFound.popularity,
        members: dataFound.members,
        favorites: dataFound.favorites,
        studios: dataFound.studios,
        // img_url: data.img_url,
        genres: [
          { name: dataFound.genre_1 },
          { name: dataFound.genre_2 },
          { name: dataFound.genre_3 },
        ],
        images: {
          jpg: {
            image_url: dataFound.img_url,
          },
        },
      })
      .then((response) => {
        console.log(response.data);
        // notifys();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = async (e) => {
    setIdValue(e.target.value);
    dataFound.id = e.target.value;
    // retriveDataById(e.target.value);
    if (e.target.value != '') {
      setDisableInput(false);
      // console.log(dataVal);
      // dataFound.title = dataVal.title;
    } else {
      setDisableInput(true);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-600 mt-8">
        CR<span className="text-red-400">U</span>D -{' '}
        <span className="text-red-400">UPDATE</span>
      </h1>

      <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 mt-5">
        <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          ID
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="I.D de l'objet à mettre à jour"
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {createDataColSimple.map((item) => (
          <div
            key={item.inputName}
            className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 mt-8"
          >
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              {item.name}
            </label>
            <input
              type="text"
              name={item.inputName}
              id="name"
              // value={dataVal.inputName}
              onChange={handleChangement}
              disabled={disableInput}
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="">
        <button
          className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm mt-5 bg-orange-400 text-white w-full"
          disabled={disableInput}
          onClick={handleSubmit}
        >
          Mettre à jour ↗️
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;
