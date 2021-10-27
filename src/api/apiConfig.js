const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "3e43264144d009ace9aeea72ef932eda",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
