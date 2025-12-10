package com.example.portfolio.profile.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ProjectDetailDTO {

    private long id;
    private String name;
    private String mainPage;
    private String description;
    private Period period;
    private Team team;
    private List<String> role;
    private List<String> techStack;
    private String diagram;
    private List<Detail> details;

    @Data
    public static class Period {
        private String start;
        private String end;
    }

    @Data
    public static class Team {
        private int frontend;
        private int backend;
    }

    @Data
    public static class Detail {
        private String thumbnail;
        private String title;
        private String content;
    }

}
