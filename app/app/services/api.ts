import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000/api";

class ApiService {
  private apiInstance: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: API_URL,
      timeout: 10000,
    });

    // Interceptor para adicionar token no header
    this.apiInstance.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = `${this.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Interceptor para tratar erros
    this.apiInstance.interceptors.response.use(
      (response: any) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.clearToken();
        }
        return Promise.reject(error);
      }
    );
  }

  async setToken(token: string) {
    this.token = token;
    await AsyncStorage.setItem("@app_token", token);
  }

  async loadToken() {
    try {
      const storedToken = await AsyncStorage.getItem("@app_token");
      if (storedToken) {
        this.token = storedToken;
      }
    } catch (error) {
      console.error("Erro ao carregar token:", error);
    }
  }

  async clearToken() {
    this.token = null;
    await AsyncStorage.removeItem("@app_token");
  }

  getApiInstance(): AxiosInstance {
    return this.apiInstance;
  }
}

export const apiService = new ApiService();
