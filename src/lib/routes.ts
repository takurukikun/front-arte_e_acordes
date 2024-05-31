
export const routesFront: {
  path: string;
  private: boolean;
}[] = [
  // private routes
  {
    path: "/",
    private: true,
  },
  {
    path: "/user",
    private: true,
  },
  {
    path: "/vacation",
    private: true,
  },
  // public routes
  {
    path: "/login",
    private: false,
  },
];