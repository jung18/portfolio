package com.example.portfolio.profile.controller;

import com.example.portfolio.profile.dto.ProfileDTO;
import com.example.portfolio.profile.dto.RepositoryDTO;
import com.example.portfolio.profile.dto.RepositoryDetailDTO;
import com.example.portfolio.profile.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        ProfileDTO result = profileService.getProfile();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/repos")
    public ResponseEntity<?> getRepos() {
        List<RepositoryDTO> result = profileService.getRepos();
        return ResponseEntity.ok(Map.of("repos", result));
    }

    @GetMapping("/tech-stacks")
    public ResponseEntity<?> getTechStacks() {
        List<String> result = profileService.getTechStacks();
        return ResponseEntity.ok(Map.of("icons", result));
    }

    @GetMapping("/repos/{repoId}")
    public ResponseEntity<?> getRepoDetail(@PathVariable int repoId) {
        RepositoryDetailDTO result = profileService.getRepoDetail(repoId);
        return ResponseEntity.ok(result);
    }
}
