import Trash from "../../assets/Trash.svg"
import Edit from "../../assets/Edit.svg"
import { useEffect, useState } from "react";

interface Video {
  id: number;
  categorie: string;
  link: string;
}

export default function VideoCard() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch('https://3000-idx-alura-flix-1719529419419.cluster-fnjdffmttjhy2qqdugh3yehhs2.cloudworkstations.dev/media')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setVideos(data);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <section className="w-[430px] h-[320px] border-8 border-double border-frontend rounded-lg">

      {videos.map(video => (
        <iframe
          className="w-full h-[80%]"
          src={video.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>
        </iframe>
      ))}

      <div className="bg-black text-white flex justify-around p-4">
        <button className="flex gap-2"><img src={Trash} alt="Trash icon for delete card" />Borrar</button>
        <button className="flex gap-2"><img src={Edit} alt="Edit icon for edit card" /> Editar</button>
      </div>
    </section>
  );
}

