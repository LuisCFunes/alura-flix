import CardCategory from "./CardCategory";
import VideoCard from "./VideoCard";

const categories = ['Front end']

function App() {
    return (
        <>
            {
                categories.map((category) => {
                    return <CardCategory key={category} color="bg-frontend">{category}</CardCategory>
                })
            }
            <VideoCard />
        </>
    );
}

export default App