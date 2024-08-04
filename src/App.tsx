import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchData, FetchDataResponse } from "./service/photosApi";
import {
  SearchBox,
  ImageGallery,
  Loader,
  ErrorMessage,
  LoadMoreBtn,
  ImageModal,
} from "./components"; // Import from './components/index.ts'
import "./index.css";
import { Photo, Photos, Image } from "./types.ts";

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
        const { results, total_pages }: FetchDataResponse = await fetchData(
          query,
          page
        );
        setGallery((prevGallery) => [...prevGallery, ...results]);
        setHasMore(results.length > 0 && page < total_pages);
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

  const handleImgClick = (photo: Photo) => {
    setModalImg({ src: photo.urls.regular, alt: photo.alt_description });
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
        <ImageGallery photos={gallery} onOpenModal={handleImgClick} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={true} />} {/* Pass error prop */}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          onCloseModal={handleModalClose}
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
