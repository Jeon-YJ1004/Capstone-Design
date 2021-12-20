package com.example.backend.repository;

import com.example.backend.domain.Cafe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CafeRepository extends JpaRepository<Cafe, Long> {
    @Query(value = "SELECT * FROM cafeinfo where address LIKE %?2% and name LIKE %?1%", nativeQuery = true)
    List<Cafe> findAllByNameContainingAndAddressContaining(String place,String gu);

}
