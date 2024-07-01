import VideoCard from './VideoCard';

interface Props {
    children: string;
    color: string;
    videos: Video[];
}

interface Video {
    id: number;
    categorie: string;
    link: string;
}

export default function CardCategory({ children, color, videos }: Props) {
    console.log(videos);
    return (
        <>
            <div className={`m-auto h-[92px] w-[296px] ${color} text-white rounded-lg text-[48px] font-extrabold flex justify-center items-center mb-4`}>
                {children}
            </div>
            <div className='px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {videos.map(video => (
                    <VideoCard key={video.id} link={video.link} categorie={video.categorie} id={video.id} />
                ))}
            </div>
        </>
    )
}
