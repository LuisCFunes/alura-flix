import CardCategory from "./CardCategory";
import { useVideoContext } from "../../fetching/VideoContext";

function Category() {
  const { videos, deleteVideo } = useVideoContext();

  const frontendVideos = videos.filter((video) => video.categorie === "Frontend");
  const BackendVideos = videos.filter((video) => video.categorie === "Backend");
  const InnovaciondVideos = videos.filter((video) => video.categorie === "Innovacion");

  return (
    <div className="px-4 py-6 grid justify-items-center">
      {frontendVideos.length > 0 && (
        <CardCategory color="bg-frontend" videos={frontendVideos} onDelete={deleteVideo}>
          Frontend
        </CardCategory>
      )}

      {BackendVideos.length > 0 && (
        <CardCategory color="bg-backend" videos={BackendVideos} onDelete={deleteVideo}>
          Backkend
        </CardCategory>
      )}

      {InnovaciondVideos.length > 0 && (
        <CardCategory color="bg-innovacion" videos={InnovaciondVideos} onDelete={deleteVideo}>
          Innovacion
        </CardCategory>
      )}
    </div>
  );
}

export default Category;
