package com.backend.backend_capstone.service;

import com.backend.backend_capstone.repository.CafeRepository;
import com.backend.backend_capstone.dto.CafeInfoDto;
import com.backend.backend_capstone.domain.Cafe;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.qlrm.mapper.JpaResultMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;

@Service
@RequiredArgsConstructor
public class CafeService {

  private final CafeRepository cafeRepository;

  public List<CafeInfoDto> getCafeList(String place, String gu) {
    List<Cafe> cafeListEntity = cafeRepository.findAllByContaining(place, gu);
    List<CafeInfoDto> cafesListDto = cafeListEntity.stream().map(CafeInfoDto::new).collect(Collectors.toList());

    return cafesListDto;
  }

  // 카페 상세 페이지
  public CafeInfoDto getCafeInfo(Long cafeId) {
    Cafe cafe = cafeRepository.getById(cafeId);
    return new CafeInfoDto(cafe);
  }

}
