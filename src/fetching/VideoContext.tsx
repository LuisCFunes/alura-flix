import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface Video {
  id: string;
  categorie: string;
  link: string;
}

interface VideoContextProps {
  videos: Video[];
  fetchVideos: () => void;
  addVideo: (newVideo: Video) => void;
  deleteVideo: (id: string) => void;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);

const url = "http://localhost:3000/media";

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = useCallback(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data: Video[]) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const addVideo = (newVideo: Video) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((createdVideo) => {
        setVideos((prevVideos) => [...prevVideos, createdVideo]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const deleteVideo = (id: string) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting video:", error);
      });
  };

  return (
    <VideoContext.Provider
      value={{ videos, fetchVideos, addVideo, deleteVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
};
