import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReadForm() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/animes', {
          mode: 'cors',
        });
        setBestSellers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestSellers();
  }, []);

  const handleDelete = async (id) => {
    // let id = e.target['key'];
    const res = await axios
      .delete(`http://127.0.0.1:5000/animes/delete/${id}`, {
        mode: 'cors',
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
    toast.error('Delete!', {
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
    <div>
      <div>
        <ToastContainer />
      </div>
      <h1 className="text-3xl font-bold text-gray-600 mt-8">
        C<span className="text-red-400">R</span>UD -{' '}
        <span className="text-red-400">READ</span>
        <span className="text-gray-600"> && </span>
        CRU<span className="text-red-400">D</span> -{' '}
        <span className="text-red-400">DELETE</span>
      </h1>
      <div className="px-4 sm:px-6 lg:px-8 h-96 overflow-hidden overflow-y-auto">
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Nom de l'animé
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Members
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {bestSellers.map((person) => (
                    <tr key={person._id.$oid}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={
                                person.images.jpg.image_url
                                  ? person.images.jpg.image_url
                                  : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='
                              }
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.title}
                            </div>
                            <div className="text-gray-500">{person.score}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person.status}</div>
                        <div className="text-gray-500">{person.duration}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {person.rank}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.members}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <span
                          className="text-red-400 hover:text-red-500"
                          onClick={() => handleDelete(person._id.$oid)}
                        >
                          Supprimer
                          <span className="sr-only">, {person.name}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadForm;
