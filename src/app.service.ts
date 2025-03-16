import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export interface Movie {
  id: number;
  name: string;
  director: string;
}

@Injectable()
export class AppService {
  private movies: Array<Movie>;
  constructor() {
    this.movies = JSON.parse(fs.readFileSync('movies.json', 'utf8'));
  }
  list(): Movie[] {
    return this.movies;
  }
  add(name: string, director: string): Movie[] {
    const movie = { id: this.movies.length + 1, name, director };
    this.movies = [...this.movies, { ...movie}];
    fs.writeFileSync('movies.json', JSON.stringify(this.movies));
    return this.movies;
  }
  delete(id: number): Movie[] {
    this.movies = this.movies.filter(m => m.id !== id);
    return this.movies;
  }
}
