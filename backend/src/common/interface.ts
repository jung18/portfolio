// portfolio profile
export interface ProfileData {
  name: string;
  contact: ContactInfo;
  profileImage: string;
  introduction: Introduction;
  certificate: Certificate[];
  education: Education;
  career: CareerItem[];
}

export interface ContactInfo {
  tell: string;
  email: string;
  github: string;
}

export interface Introduction {
  title: string;
  details: string[];
}

export interface Certificate {
  title: string;
  date: string;
  issue: string;
}

export interface Education {
  title: string;
  period: Period;
  grade: string;
}

export interface Period {
  start: string;  
  end: string;    
}

export interface CareerItem {
  company: string;
  role: string;
  period: Period;
  sections: CareerSection[];
}

export interface CareerSection {
  title: string;
  details: string[];
}

// github repositories (GitHub API)
export interface GithubRepo {
  name: string;
  fullName: string;
  url: string;
  thumbnail: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}