'use client';

// 1. Sửa lỗi import type
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface OrgConfig {
    name: string;
    logo: string;
    images: string[];
    blog: string;
    slogan?: string;
    email?: string;
    phone?: string;
    address?: string;
    banners?: any[];
    products?: any[];
    testimonials?: any[];
    [key: string]: any;
}

export interface AppConfig {
    organization: OrgConfig;
    theme: {
        primary_color: string;
        [key: string]: any;
    };
    consultation: {
        enable: boolean;
        email_receiver: string;
    };
    schema?: {
        version: string;
    };
    [key: string]: any;
}

export const DEFAULT_CONFIG: AppConfig = {
    organization: {
        name: "Công ty Cổ phần Giải pháp Công nghệ ABC",
        logo: "/logo_left.svg",
        images: [],
        slogan: "",
        email: "",
        phone: "",
        address: "",
        banners: [],
        products: [],
        testimonials: [],
        blog: ""
    },
    theme: { primary_color: "#1e3a8a" },
    consultation: { enable: true, email_receiver: "" },
    schema: { version: "1.0" }
};

interface ConfigContextType {
    config: AppConfig;
    updateConfig: (section: string, data: any) => void;
    handleSave: () => void;
    saved: boolean;
    setConfig: (config: AppConfig) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
    const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem("orgConfig");
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setConfig((prev) => ({
                        ...prev,
                        ...parsed,
                        organization: { ...prev.organization, ...parsed.organization }
                    }));
                } catch {
                    console.error("Lỗi parse config");
                }
            }
        }
    }, []);

    const updateConfig = (section: string, data: any) => {
        setConfig((prev) => ({
            ...prev,
            [section]: data,
        }));
        setSaved(false);
    };

    const handleSave = () => {
        localStorage.setItem("orgConfig", JSON.stringify(config));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };


    return (
        <ConfigContext.Provider value={{ config, updateConfig, handleSave, saved, setConfig }
        }>
            {children}
        </ConfigContext.Provider>
    );
}

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};