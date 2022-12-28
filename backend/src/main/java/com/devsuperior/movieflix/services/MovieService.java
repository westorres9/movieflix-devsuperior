package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, String title, PageRequest pageRequest){
		Page<Movie> page = movieRepository.findAll(pageRequest);	
		movieRepository.findMoviesWithGenres(page.getContent());
		return page.map(x -> new MovieDTO(x));	
		
	}		
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = movieRepository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}

	@Transactional(readOnly = true)
	public Page<MovieDTO> find(Long genreId, Pageable pageable) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> page = movieRepository.find(genre, pageable);	
		movieRepository.findMoviesWithGenres(page.getContent());
		return page.map(x -> new MovieDTO(x));
		
	}
}
