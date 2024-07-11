import { useState, useEffect, MouseEvent, KeyboardEvent } from "react";
import { Toaster } from "react-hot-toast";
import { fetchData } from "./service/photosApi.js";
import {
  SearchBox,
  ImageGallery,
  Loader,
  ErrorMessage,
  LoadMoreBtn,
  ImageModal,
} from "./components";
import "./index.css";

type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type Photos = Photo[];

export type Image = {
  src: string;
  alt: string;
};

interface FetchDataResponse {
  results: Photo[];
  total_pages: number;
}

function App() {
  const [gallery, setGallery] = useState<Photos>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data }: { data: FetchDataResponse } = await fetchData(
          query,
          page
        );
        setGallery((prevGallery) => [...prevGallery, ...data.results]);
        setHasMore(data.results.length > 0 && page < data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchQuery = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    setGallery([]);
    setHasMore(true);
    setModalIsOpen(false);
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleImgClick = (url: string, alt: string) => {
    setModalImg({ src: url, alt });
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app-container">
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBox onSubmit={handleSearchQuery} />
      {gallery.length > 0 && (
        <ImageGallery onClick={handleImgClick} gallery={gallery} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          onRequestClose={handleModalClose}
          modalImg={modalImg}
        />
      )}
      {hasMore && (
        <div className="load-more-container">
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
}

export default App;
