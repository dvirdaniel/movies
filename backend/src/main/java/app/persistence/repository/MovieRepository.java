package app.persistence.repository;

import app.persistence.entity.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity, String> {

    List<MovieEntity> findByTitleIgnoreCaseContaining(String title);
}
