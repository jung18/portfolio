import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "@/utils/apiUtil";

export interface ProfileData {
  name: string;
  contact: {
    tell: string;
    email: string;
    github: string;
  };
  profileImage: string;
  introduction: {
    title: string;
    details: string[];
  };
  certificate: Array<{
    title: string;
    date: string;
    issue: string;
  }>;
  education: Array<{
    title: string;
    period: {
      start: string;
      end: string;
    };
    grade: string;
    sections: Array<{
      title: string;
      details: string[];
    }>;
  }>;
  career: Array<{
    company: string;
    role: string;
    period: {
      start: string;
      end: string;
    };
    sections: Array<{
      title: string;
      details: string[];
    }>;
  }>;
}

interface ProfileContextType {
  profile: ProfileData | null;
  loading: boolean;
  error: string | null;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await api.getProfile();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "프로필 데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}

