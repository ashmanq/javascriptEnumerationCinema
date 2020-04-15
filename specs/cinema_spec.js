const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function() {
    const filmTitles = cinema.getFilmTitlesList();
    filmListExpected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    assert.deepStrictEqual(filmTitles, filmListExpected);
  });

  it('should be able to find a film by title', function() {
    const foundFilm = cinema.findFilmByTitle('Dunkirk');
    assert.strictEqual(foundFilm, dunkirk);
  });

  it('should be able to filter films by genre', function () {
    const filteredFilms = cinema.filterBy('genre','sci-fi');
    assert.deepStrictEqual(filteredFilms, [bladeRunner])
  });
  it('should be able to check whether there are some films from a particular year', function() {
    const filmOfYearExists = cinema.checkIfFilmOfYear(2017);
    assert.strictEqual(filmOfYearExists, true)
  });
  it('should be able to check whether there are no films from a particular year', function() {
    const noFilmsOfYear = cinema.checkIfFilmOfYear(2020);
    assert.strictEqual(noFilmsOfYear, false);
  });
  it('should be able to check whether all films are over a particular length', function() {
    const areAllFilmsLongEnough = cinema.checkFilmLengths(90);
    assert.strictEqual(areAllFilmsLongEnough, true);

  });
  it('should be able to calculate total running time of all films', function() {
    const totalRunningTime = cinema.calcTotalRunningTime();
    assert.strictEqual(totalRunningTime, 622)
  });
  it('should be able to filter films by year', function() {
    const results = cinema.filterBy('year', 2017);
    assert.strictEqual(results.length, 3)
  });

});
