import ReactPlayer from 'react-player';
import Trash from '../../assets/Trash.svg';
import Edit from '../../assets/Edit.svg';

interface Video {
  id: number;
  categorie: string;
  link: string;
}

function VideoCard({ id, link,categorie }: Video) {
  return (

    <section
      key={id}
      className={`w-[360px] h-[320px] border-8 border-double rounded-lg mb-4"`}
      style={{ borderColor: `var(--${categorie.toLowerCase()}-color)` }}
    >
      <ReactPlayer
        url={link}
        controls
        width="100%"
        height="80%"
      />
      <div className="bg-black text-white flex justify-around p-4">
        <button className="flex gap-2">
          <img src={Trash} alt="Trash icon for delete card" />
          Borrar
        </button>
        <button className="flex gap-2">
          <img src={Edit} alt="Edit icon for edit card" />
          Editar
        </button>
      </div>
    </section>
  );
}

export default VideoCard;
