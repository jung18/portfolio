package com.example.portfolio.profile.service;

import com.example.portfolio.profile.dto.ProfileDTO;
import com.example.portfolio.profile.dto.RepositoryDTO;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private ProfileDTO profile;
    private final Map<String, String> repoThumbnails = new HashMap<>();
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final RedisService redisService;

    @Value("${github.token}")
    private String githubToken;
    @Value("${github.username}")
    private String username;
    @Value("${github.baseurl}")
    private String baseUrl;

    private final RestTemplate restTemplate;
    private final List<String> blackList = List.of("jung18", "Algorithm", "TIL");

    @PostConstruct
    public void loadProfile() {
        try {
            ClassPathResource profileJson = new ClassPathResource("data/portfolio.json");
            this.profile = objectMapper.readValue(
                    profileJson.getInputStream(),
                    new TypeReference<>() {}
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @PostConstruct
    public void loadThumbnails() {
        try {
            PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            Resource[] resources = resolver.getResources("classpath:/static/thumbnails/*");
            for (Resource resource : resources) {
                if (resource.isReadable() && resource.getFilename() != null) {
                    repoThumbnails.put(resource.getFilename().split("\\.")[0], resource.getFilename());
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public ProfileDTO getProfile() {
        if (profile != null) {
            return profile;
        }
        return new ProfileDTO();
    }

    public List<RepositoryDTO> getRepos() {
        List<RepositoryDTO> cache = redisService.getReposFromCache();
        if (cache != null) {
            return cache;
        }
        // new request -> cache update
        String apiUrl = baseUrl + "/users/" + username + "/repos?per_page=100";
        ResponseEntity<String> response = getGithubAPIResponse(apiUrl);

        List<RepositoryDTO> repositories = objectMapper.readValue(response.getBody(), new TypeReference<>() {});
        List<RepositoryDTO> dtos = repositories.stream()
                .filter(repo -> !blackList.contains(repo.getName()))
                .map(repo -> {
                    String thumbnail = repoThumbnails.get(repo.getName());
                    repo.setThumbnail(thumbnail);
                    return repo;
                }).toList();
        redisService.setReposToCache(dtos);
        return dtos;
    }

    private ResponseEntity<String> getGithubAPIResponse(String apiUrl) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github+json");
        headers.set("Authorization", "Bearer " + githubToken);
        headers.set("User-Agent", "My-Portfolio");

        try {
            HttpEntity<String> httpEntity = new HttpEntity<>(headers);
            return restTemplate.exchange(
                    apiUrl,
                    HttpMethod.GET,
                    httpEntity,
                    String.class
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<String> getTechStacks() {
        try {
            ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            Resource[] resources = resolver.getResources("classpath:/static/icons/*");
            List<String> fileNames = new ArrayList<>();

            for (Resource resource : resources) {
                if (resource.isReadable() && resource.getFilename() != null) {
                    String stackPath = "/icons/" + resource.getFilename();
                    fileNames.add(stackPath);
                }
            }
            return fileNames;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
