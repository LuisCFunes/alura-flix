import { useEffect, useState } from 'react';
import CardCategory from './CardCategory';

interface Video {
    id: number;
    categorie: string;
    link: string;
}

function App() {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/media')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then((data: Video[]) => {
                setVideos(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    // Filtrar videos por categoría 'frontend'
    const frontendVideos = videos.filter(video => video.categorie === 'Frontend');
    const BackendVideos = videos.filter(video => video.categorie === 'Backend');
    const InnovaciondVideos = videos.filter(video => video.categorie === 'Innovacion');

    return (
        <div className='px-4 py-6'>
            <CardCategory color="bg-frontend" videos={frontendVideos}>
                Frontend
            </CardCategory>
            <CardCategory color="bg-backend" videos={BackendVideos}>
                Backkend
            </CardCategory>
            <CardCategory color="bg-innovacion" videos={InnovaciondVideos}>
                Innovacion
            </CardCategory>
        </div>
    );
}

export default App;
