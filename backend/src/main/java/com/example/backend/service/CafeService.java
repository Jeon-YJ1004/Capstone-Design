package com.example.backend.service;

import com.example.backend.domain.Cafe;
import com.example.backend.dto.CafeInfoDto;
import com.example.backend.repository.CafeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CafeService {

    private final CafeRepository cafeRepository;

    public List<CafeInfoDto> getCafeList(String place, String gu) {
        List<Cafe> cafeListEntity = cafeRepository.findAllByNameContainingAndAddressContaining(place,gu);
        if (cafeListEntity.isEmpty()){
            System.out.println(gu+place);
        }
        List<CafeInfoDto> cafesListDto = cafeListEntity.stream().map(CafeInfoDto::new).collect(Collectors.toList());

        return cafesListDto;
    }

    // 카페 상세 페이지
    public CafeInfoDto getCafeInfo(Long cafeId) {
        Cafe cafe = cafeRepository.getById(cafeId);
        return new CafeInfoDto(cafe);
    }

}
