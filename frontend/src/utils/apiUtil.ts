import axios, { AxiosInstance, AxiosError } from "axios";

// API 기본 URL 설정 (환경 변수 또는 기본값 사용)
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://dh-portfolio.duckdns.org/api";
export const STATIC_BASE_URL = import.meta.env.VITE_STATIC_BASE_URL || "https://dh-portfolio.duckdns.org";

// axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10초 타임아웃
});

// 응답 인터셉터 - 에러 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // 서버에서 응답을 받았지만 에러 상태 코드
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못함
      console.error("Network Error:", error.request);
    } else {
      // 요청 설정 중 에러 발생
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// API 함수들
export const api = {
  // 프로필 정보 가져오기
  getProfile: async () => {
    const response = await apiClient.get("/profile");
    return response.data;
  },

  // 기술 스택 목록 가져오기
  getTechStacks: async () => {
    const response = await apiClient.get("/tech-stacks");
    return response.data;
  },

  // 저장소 목록 가져오기
  getRepos: async () => {
    const response = await apiClient.get("/repos");
    return response.data;
  },

  // 프로젝트 상세 정보 가져오기
  getProjectDetail: async (projectId: number) => {
    const response = await apiClient.get(`/repos/${projectId}`);
    return response.data;
  }
};

export default apiClient;

