package com.backend.backend_capstone.dto;

import com.backend.backend_capstone.domain.Cafe;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class CafeInfoDto {
  private Long id;
  private String name;
  private float score;
  private String time;
  private String address;
  private double longitude;
  private double latitude;
  private String link;

  public CafeInfoDto(Cafe cafe) {
    this.id = cafe.getId();
    this.name = cafe.getName();
    this.address = cafe.getAddress();
    this.score = cafe.getScore();
    this.longitude = cafe.getLongitude();
    this.latitude = cafe.getLatitude();
    this.link = cafe.getLink();
    this.time = cafe.getTime();

  }
}
