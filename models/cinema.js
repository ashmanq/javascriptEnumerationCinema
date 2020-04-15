const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitlesList = function () {
  const filmTitles = this.films.map( (film) => {
    return film.title;
  })
  return filmTitles;
};

Cinema.prototype.findFilmByTitle = function (filmToSearch) {
  const foundFilm = this.films.find( movie => movie.title === filmToSearch );
  return foundFilm;
};

Cinema.prototype.filterBy = function (property, value) {
  const filmsOfGenre = this.films.filter( film => film[property] === value);
  return filmsOfGenre;
};

Cinema.prototype.checkIfFilmOfYear = function (year) {
  const filmsExist = this.films.some( film => film.year === year );
  return filmsExist;
};

Cinema.prototype.checkFilmLengths = function (length) {
    const filmsLongEnough = this.films.every( film => film.length > length);
    return filmsLongEnough;
};

Cinema.prototype.calcTotalRunningTime = function () {
    const totalTime = this.films.reduce( (total, film) => {
      return total + film.length}, 0)
    return totalTime;
};


module.exports = Cinema;
