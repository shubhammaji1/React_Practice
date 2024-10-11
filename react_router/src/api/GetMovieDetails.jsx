export const getMoviesDetails = async ({params}) => {
    const id = params.movieID;
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };