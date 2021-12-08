package com.backend.backend_capstone.domain;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity(name = "cafe")
@Table(name = "cafeinfo")
@NoArgsConstructor
@Getter
public class Cafe {
  @Id // @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "cafeId")
  private Long id;

  @NotNull
  private String name;

  private String time;

  private float score;
  @NotNull
  private String address;

  @NotNull
  private double longitude;

  @NotNull
  private double latitude;

  @NotNull
  private String link;

  @Builder
  public Cafe(Long id, String name, String time, float score, String address, double longitude, double latitude,
      String link) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.score = score;
    this.address = address;
    this.longitude = longitude;
    this.latitude = latitude;
    this.link = link;
  }
}
