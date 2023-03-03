import React, { useEffect, useState } from 'react';
import DeleteForm from './DeleteForm';
import ReadForm from './ReadForm';
import UpdateForm from './UpdateForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function CreateForm() {
  const [data, setData] = useState({
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

  const handleChange = (e) => {
    e.preventDefault();
    data[e.target['name']] = e.target.value;
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios
      .post('http://127.0.0.1:5000/animes/create', {
        title: data.title,
        type: data.type,
        episodes: data.episodes,
        status: data.status,
        duration: data.duration,
        rating: data.rating,
        score: data.score,
        rank: data.rank,
        popularity: data.popularity,
        members: data.members,
        favorites: data.favorites,
        studios: data.studios,
        // img_url: data.img_url,
        genres: [
          { name: data.genre_1 },
          { name: data.genre_2 },
          { name: data.genre_3 },
        ],
        images: {
          jpg: {
            image_url: data.img_url,
          },
        },
      })
      .then((response) => {
        console.log(response.data);
        notify();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const notify = () => {
    toast.success('Nouvel animé disponible maintenant!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className="p-24">
      <div>
        <ToastContainer />
      </div>
      {/* <button onClick={notify}>ToastBtn</button> */}
      <h1 className="text-3xl font-bold text-gray-600">
        <span className="text-red-400">C</span>RUD -{' '}
        <span className="text-red-400">CREATE</span>
      </h1>

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
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder={item.placeholder}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div className="">
        <button
          className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm mt-5 bg-green-400 text-white w-full"
          onClick={handleSubmit}
        >
          Créer ⚡
        </button>
      </div>
      <ReadForm />
      <UpdateForm />
      {/* <DeleteForm /> */}
    </div>
  );
}

export default CreateForm;
