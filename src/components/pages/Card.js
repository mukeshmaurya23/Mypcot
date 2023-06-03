import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../../constant";
import axios from "axios";
import Shimmer from "./Shimmer";
// const dummy = [
//   {
//     _id: "9135",
//     title: "Fullmetal Alchemist: The Sacred Star of Milos",
//     alternativeTitles: [
//       "Fullmetal Alchemist: Milos no Seinaru Hoshi",
//       "Fullmetal Alchemist Movie 2",
//       "Hagane no Renkinjutsushi Movie 2",
//       "FMA Movie 2",
//       "劇場版 鋼の錬金術師 嘆きの丘(ミロス)の聖なる星",
//       "Fullmetal Alchemist: The Sacred Star of Milos",
//       "Fullmetal Alchemist: The sacred Star of Milos",
//       "Fullmetal Alchemist: La Estrella Sagrada de Milos",
//       "Fullmetal Alchemist: L'Étoile Sacrée de Milos",
//     ],
//     ranking: 2718,
//     genres: ["Action", "Adventure", "Drama", "Fantasy"],
//     episodes: 1,
//     hasEpisode: true,
//     hasRanking: true,
//     image: "https://cdn.myanimelist.net/images/anime/2/29550.jpg",
//     link: "https://myanimelist.net/anime/9135/Fullmetal_Alchemist__The_Sacred_Star_of_Milos",
//     status: "Finished Airing",
//     synopsis:
//       "Chasing a runaway alchemist with strange powers, brothers Edward and Alphonse Elric stumble into the squalid valley of the Milos. The Milosians are an oppressed group that seek to reclaim their holy land from Creta: a militaristic country that forcefully annexed their nation. In the eye of the political storm is a girl named Julia Crichton, who emphatically wishes for the Milos to regain their strength and return to being a nation of peace.\n\nBefriending the girl, Edward and Alphonse find themselves in the midst of a rising resistance that involves the use of the very object they have been seeking all along—the Philosopher's Stone. However, their past experiences with the stone cause them reservation, and the brothers are unwilling to help.\n\nBut as they discover the secrets behind Creta's intentions and questionable history, the brothers are drawn into the battle between the rebellious Milos, who desire their liberty, and the Cretan military, who seek absolute power.\n\n[Written by MAL Rewrite]",
//     thumb:
//       "https://cdn.myanimelist.net/r/50x70/images/anime/2/29550.jpg?s=4793289bd3989c3cc7d4e4aa6f593870",
//     type: "Movie",
//   },
//   {
//     _id: "5114",
//     title: "Night Wizard",
//     alternativeTitles: [
//       "Hagane no Renkinjutsushi: Fullmetal Alchemist",
//       "Fullmetal Alchemist (2009)",
//       "FMA",
//       "FMAB",
//       "鋼の錬金術師 FULLMETAL ALCHEMIST",
//       "Fullmetal Alchemist: Brotherhood",
//       "Fullmetal Alchemist Brotherhood",
//     ],
//     ranking: 1,
//     genres: ["Action", "Adventure", "Drama", "Fantasy"],
//     episodes: 64,
//     hasEpisode: true,
//     hasRanking: true,
//     image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
//     link: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
//     status: "Finished Airing",
//     synopsis:
//       "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
//     thumb:
//       "https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
//     type: "TV",
//   },
//   {
//     _id: "430",
//     title: "Hunter x Hunter (2011)",
//     alternativeTitles: [
//       "Gekijyouban Hagane no Renkinjutsushi - Shanbara wo Yuku Mono",
//       "Fullmetal Alchemist the Movie: Conqueror of Shamballa",
//       "FMA Movie",
//       "劇場版 鋼の錬金術師 シャンバラを征く者",
//       "Fullmetal Alchemist: The Movie - Conqueror of Shamballa",
//       "Fullmetal Alchemist: Der Eroberer von Shamballa",
//       "Fullmetal Alchemist: El Conquistador de Shamballa",
//       "Fullmetal Alchemist: Conqueror of shamballa",
//     ],
//     ranking: 1657,
//     genres: ["Comedy", "Drama", "Fantasy"],
//     episodes: 1,
//     hasEpisode: true,
//     hasRanking: true,
//     image: "https://cdn.myanimelist.net/images/anime/1707/94039.jpg",
//     link: "https://myanimelist.net/anime/430/Fullmetal_Alchemist__The_Conqueror_of_Shamballa",
//     status: "Finished Airing",
//     synopsis:
//       "In desperation, Edward Elric sacrificed his body and soul to rescue his brother Alphonse, and is now displaced in the heart of Munich, Germany. He struggles to adapt to a world completely foreign to him in the wake of the economic crisis that followed the end of World War I. Isolated and unable to return home with his alchemy skills, Edward continues to research other methods of escaping the prison alongside colleagues who bear striking resemblances to many of the people he left behind. As dissent brews among the German citizenry, its neighbors also feel the unrest of the humiliated nation.\n\nMeanwhile, Alphonse continues to investigate Edward's disappearance, delving into the science of alchemy in the hopes of finally reuniting with his older brother. \n\n[Written by MAL Rewrite]",
//     thumb:
//       "https://cdn.myanimelist.net/r/50x70/images/anime/1707/94039.jpg?s=a4e0a259b6d9cee5d327d704e8e5ea37",
//     type: "Movie",
//   },
//   {
//     _id: "6421",
//     title: "Dreams of an Oasis",
//     alternativeTitles: [
//       "Moumoku no Renkinjutsushi",
//       "The Blind Alchemist",
//       "Shinpuru na Hitobito",
//       "Simple People",
//       "The Tale of Teacher",
//       "Tales of the Master",
//       "Yet Another Man's Battlefield",
//       "FMA",
//       "鋼の錬金術師",
//       "Fullmetal Alchemist: Brotherhood OVA Collection",
//       "Fullmetal Alchemist: Brootherhood OVA Collection",
//       "Fullmetal Alchemist: Brotherhood OAV Collection",
//     ],
//     ranking: 585,
//     genres: ["Drama", "Fantasy"],
//     episodes: 4,
//     hasEpisode: true,
//     hasRanking: true,
//     image: "https://cdn.myanimelist.net/images/anime/1493/91571.jpg",
//     link: "https://myanimelist.net/anime/6421/Fullmetal_Alchemist__Brotherhood_Specials",
//     status: "Finished Airing",
//     synopsis:
//       "Amazing secrets and startling facts are exposed for the first time in the Fullmetal Alchemist: Brotherhood OVA Collection, a new assortment of stories set in never-before-seen corners of the FMA universe. Join Ed and Al as they chase rumors of successful human transmutation into a web of shocking family drama and lies. Sneak a glance at hidden sides of Winry and Hawkeye's personalities. Survive the frigid north with a young Izumi Curtis as she fights to gain a deeper understanding of alchemy. Explore the legendary friendship shared by Mustang and Hughes and watch them grow from military school rivals into hardened brothers transformed by the horrors of the Ishvalan War. You thought you knew the whole story. You thought all the tales were told. The Fullmetal Alchemist: Brotherhood OVA Collection offers proof: You were wrong. \n\n(Source: FUNimation)",
//     thumb:
//       "https://cdn.myanimelist.net/r/50x70/images/anime/1493/91571.jpg?s=f2446fd02aa660c9db22746d3f5f2cf3",
//     type: "Special",
//   },
//   {
//     _id: "28851",
//     title: "Charlie and the Chocolate Factory",
//     image:
//       "https://images1.wionews.com/images/wion/900x1600/2023/4/19/1681893138913_demonslayer3840x21609326.jpg",
//   },
//   {
//     _id: "28854",
//     title: "Naruto Shippuden",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//   },
//   {
//     _id: "28855",
//     title: "Hunter X Hunter",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg/220px-Hunter_x_Hunter_cover_-_vol1.jpg",
//   },
//   {
//     _id: "28856",
//     title: "Death Note",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
//   },
// ];

const Card = () => {
  const [current, setCurrent] = useState(0);

  const nextFour = () => {
    setCurrent((prev) => prev + 4);
  };
  const prevFour = () => {
    setCurrent((prev) => prev - 4);
  };

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    setLoading(true);
    const data = await axios.get(YOUTUBE_API);
    const response = data.data.items;
    console.log(response);
    setVideos(response);
    setLoading(false);
  };

  if (loading) return <Shimmer />; //early return

  return (
    <>
      <div className="grid grid-cols-12">
        <h2 className="text-white text-xl font-semibold mt-6 ml-3 col-span-3">
          Best Articles
        </h2>
        <div className="col-span-9">
          <div className="flex justify-end mt-6">
            <button
              className="bg-transparent border border-gray-300 rounded-full p-1 px-3 bg-gray-100 hover:bg-gray-500"
              onClick={prevFour}
              disabled={current === 0}
            >
              <i
                className="fa fa-chevron-left text-white"
                aria-hidden="true"
              ></i>
            </button>
            <button
              className="bg-transparent border border-gray-300 rounded-full p-1 px-3 bg-gray-100 ml-2 hover:bg-gray-500"
              onClick={nextFour}
              disabled={current >= videos.length - 4}
            >
              <i
                className="fa fa-chevron-right text-white"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos &&
          videos.slice(current, current + 4).map((video) => (
            <div
              className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 p-2 mx-1 sm:mx-2 md:mx-3 lg:mx-4 shadow-lg"
              key={video.id}
            >
              <Link to={`/watchpage/${video.id}`}>
                <div className="relative">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt=""
                    className="h-[15rem] w-full object-cover rounded-lg"
                  />

                  <div className="absolute top-0 right-0 bg-black bg-opacity-70 text-white p-2 ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                    <h1 className="text-md font-semibold text-center">
                      {video.snippet.title}
                    </h1>
                    <p className="text-sm text-center">
                      <i
                        className="fa fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Card;
