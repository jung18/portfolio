package com.example.portfolio.profile.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@NoArgsConstructor
public class RepositoryDTO {

    private long id;
    private String name;
    @JsonProperty("full_name")
    private String fullName;
    @JsonProperty("html_url")
    private String url;
    private String thumbnail;
    private String description;
    private String language;
    @JsonProperty("stargazers_count")
    private int stars;
    @JsonProperty("forks_count")
    private int forks;
    @JsonProperty("updated_at")
    private String updatedAt;

}
