import ReactPlayer from 'react-player';
import Trash from '../../assets/Trash.svg';

interface Video {
  id: number;
  categorie: string;
  link: string;
  onDelete: (id: number) => void;
}

function VideoCard({ id, link,categorie, onDelete  }: Video) {

  return (
    <section
      key={id}
      className={`aspect-video border-8 border-double rounded-lg mb-4"`}
      style={{ borderColor: `var(--${categorie.toLowerCase()}-color)` }}
    >
      <ReactPlayer
        url={link}
        controls
        width="100%"
        height="80%"
      />
      <div className="bg-black text-white flex justify-around p-2">
        <button onClick={() => onDelete(id)} className="flex gap-2">
          <img src={Trash} alt="Trash icon for delete card" />
          Borrar
        </button>
      </div>
    </section>
  );
}

export default VideoCard;
