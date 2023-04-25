const API_KEY="7fadfad09c6a3cb4c6685faf33dc420d";

const requests={
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;



// fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_generes=35`,
// fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_generes=27`,
// fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_generes=10749`,
// fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&with_generes=99`