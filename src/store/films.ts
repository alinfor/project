// src/store/modules/films.ts
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios';

interface Film {
  id: number;
  title: string;
  // Autres propriétés des films
}

@Module({ namespaced: true })
class FilmsModule extends VuexModule {
  films: Array<Film> = [];

  @Mutation
  setFilms(films: Array<Film>) {
    this.films = films;
  }

  @Action
  async fetchFilms() {
    try {
      const response = await axios.get<Array<Film>>('https://api.themoviedb.org/3/trending/movie/day?api_key=4df52b94b523539d7321c081fe52b118');
      console.log(response.data);
      this.context.commit('setFilms', response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des films :', error);
    }
  }
}
export default FilmsModule