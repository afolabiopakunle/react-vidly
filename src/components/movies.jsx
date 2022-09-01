import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    deleteMovie = (movieInput) => {
        const movies = this.state.movies.filter(movie => movie._id != movieInput._id);
        this.setState({movies})
    }


    render() {
        const {length: count} = this.state.movies;

        if(count === 0) return <p className='fw-bold text-center'>There are no movies to show</p>
        return (
            <>
                <p className='fw-bold'>Showing {count} movies</p>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                {this.state.movies.map((movie) => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.deleteMovie(movie)} className="btn btn-sm btn-danger">Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
                </>
        );
    }
}

export default Movies;