package com.backend.backend_capstone.repository;

import com.backend.backend_capstone.domain.Cafe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

public interface CafeRepository extends JpaRepository<Cafe, Long> {
  @Query(value = "SELECT * FROM user where addr LIKE %?2% and name like %?1%")
  List<Cafe> findAllByContaining(String Place, String gu);

}
