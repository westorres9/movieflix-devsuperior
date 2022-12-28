package com.devsuperior.movieflix.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movieflix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

	Optional<Role> findById(Long id);
}
