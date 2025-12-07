package com.example.portfolio.profile.dto;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.*;

@Data
@NoArgsConstructor
public class RepositoryDTO {

    private int id;
    private String name;
    private String fullName;
    private String url;
    private String thumbnail;
    private String description;
    private String language;
    private int stars;
    private int forks;
    private String updatedAt;

    @JsonSetter("html_url") // 입력(JSON → 객체)
    public void setUrl(String htmlUrl) {
        this.url = htmlUrl;
    }

    @JsonGetter("url") // 출력(객체 → JSON)
    public String getUrl() {
        return this.url;
    }

    @JsonSetter("stargazers_count")
    public void setStars(int stars) {
        this.stars = stars;
    }

    @JsonGetter("stars")
    public int getStars() {
        return this.stars;
    }

    @JsonSetter("forks_count")
    public void setForks(int forks) {
        this.forks = forks;
    }

    @JsonGetter("forks")
    public int getForks() {
        return this.forks;
    }
}
