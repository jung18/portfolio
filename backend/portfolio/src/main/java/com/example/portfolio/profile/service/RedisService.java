package com.example.portfolio.profile.service;

import com.example.portfolio.profile.dto.RepositoryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.time.Duration;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RedisService {

    private final StringRedisTemplate stringRedisTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${redis.key}")
    private String redisKey;

    public void setReposToCache(List<RepositoryDTO> repos) {
        try {
            String json = objectMapper.writeValueAsString(repos);
            stringRedisTemplate.opsForValue().set(redisKey, json, Duration.ofHours(24));
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<RepositoryDTO> getReposFromCache() {
        try {
            String repoString = stringRedisTemplate.opsForValue().get(redisKey);
            if (repoString == null) {
                return null;
            }
            return objectMapper.readValue(repoString, new TypeReference<>() {});
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

}
