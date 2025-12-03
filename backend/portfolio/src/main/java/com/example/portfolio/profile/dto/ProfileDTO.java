package com.example.portfolio.profile.dto;

import lombok.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDTO {

    private String name;
    private Contact contact;
    private String profileImage;
    private Introduction introduction;
    private List<Certificate> certificate;
    private Education education;
    private List<Career> career;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Contact {
        private String tell;
        private String email;
        private String github;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Introduction {
        private String title;
        private List<String> details;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Certificate {
        private String title;
        private String date;
        private String issue;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Education {
        private String title;
        private Period period;
        private String grade;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Career {
        private String company;
        private String role;
        private Period period;
        private List<Section> sections;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Section {
        private String title;
        private List<String> details;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Period {
        private String start;
        private String end;
    }
}
