package com.devsuperior.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.services.MovieService;
import com.devsuperior.movieflix.services.ReviewService;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource {
	
	@Autowired
	private  MovieService movieService;
	
	@Autowired
	private ReviewService reviewService;
	
	
	@GetMapping
	public ResponseEntity<Page<MovieDTO>> find(
	@RequestParam(value = "genreId", defaultValue = "0") Long genreId, Pageable pageable) {
	Page<MovieDTO> list = movieService.find(genreId, pageable);
	return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<MovieDTO> findById(@PathVariable Long id){
		MovieDTO dto = movieService.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@GetMapping(value = "/{movieId}/reviews")
	public ResponseEntity<List<ReviewDTO>> findMovieReviews(@PathVariable Long movieId){
		List<ReviewDTO> dto = reviewService.findByMovie(movieId);
		return ResponseEntity.ok(dto);
	}
}
