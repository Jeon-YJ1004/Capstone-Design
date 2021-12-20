package com.example.backend.controller;

import com.example.backend.dto.CafeInfoDto;
import com.example.backend.service.CafeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class CafeController {

    private final CafeService cafeService;

    // 메인페이지 검색, 다중 필터
    @GetMapping("/search")
    public ResponseEntity<Page<CafeInfoDto>> getCafe(
            @RequestParam(value = "place") String place,
            @RequestParam(value = "gu") String gu,
            @RequestParam(value = "page") Integer page) {
        System.out.println(place+gu);
        List<CafeInfoDto> cafesList = cafeService.getCafeList(place, gu);
        Pageable pageable = PageRequest.of(page, 10);

        int start = (int) pageable.getOffset();
        int end = (start + pageable.getPageSize()) > cafesList.size() ? cafesList.size() : (start + pageable.getPageSize());
        Page<CafeInfoDto> cafesPage = new PageImpl<>(cafesList.subList(start, end), pageable, cafesList.size());

        return new ResponseEntity<>(cafesPage, HttpStatus.OK);
    }

    @GetMapping("/info/{cafeId}") // 카페 상세보기
    public ResponseEntity<?> cafeInfo(@PathVariable("cafeId") Long cafeId) {

        CafeInfoDto cafesInfoDto = cafeService.getCafeInfo(cafeId);

        return new ResponseEntity<>(cafesInfoDto, HttpStatus.OK);
    }

}