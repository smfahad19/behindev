import React from 'react';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const youtube = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=Ly1auHs_ofo&t=8s',
    title: "Magnus Hawthorne",
    des: 'OWNER, BAYLEAF',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=ay2e0VXtmfI&t=5s',
    title: "Thaddeus Montgomery",
    des: 'OWNER, GOLDGARDEN',
  },
];

const Testimonial = () => {
  return (
    <div className="mt-[290px]">
      <div className="flex justify-center ">
        <h1 className="text-[220px] absolute font italic mt-[-249px] text-center text-white/40 font-semibold">
          TESTIMONIAL
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {youtube.map((video) => {
          const videoId = video.url.split('v=')[1].split('&')[0];
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          return (
            <div key={video.id} className="w-full md:w-[45%] text-center">
              <div className="w-[690px] h-auto flex flex-col items-center justify-center rounded-3xl bg-white/15 p-6">
                <iframe
                  className="rounded-3xl mb-4"
                  width="660"
                  height="355"
                  src={embedUrl}
                  title={`Video ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h1 className="text-lg font-semibold text-white">{video.title}</h1>
                <h2 className="text-sm text-white/70">{video.des}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center group mt-[40px]">
        <button className="text-black cursor-pointer h-[55px] text-md font-serif font-light w-[200px] flex items-center justify-center bg-[#28bab1] px-4 py-2 rounded-l-full rounded-r-none transition-all duration-300 group-hover:mr-[2px]">
          View ALL REVIEWS
        </button>
        <HiMiniArrowUpRight className="bg-[#28bab1] font-light w-[56px] h-[55px] rounded-r-full rounded-l-none text-black transition-all duration-300 group-hover:ml-[5px] md:w-[50px] md:h-[55px]" />
      </div>
    </div>
  );
};

export default Testimonial;
