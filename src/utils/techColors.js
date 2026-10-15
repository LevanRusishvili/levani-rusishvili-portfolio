const TECH_COLORS = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Vite: "#BD34FE",
  CSS: "#8B5CF6",
  "Tailwind CSS": "#38BDF8",
  "Redux Toolkit": "#764ABC",
  Zustand: "#BC8CFF",
  Axios: "#F778BA",
  "React Router": "#CA4245",
  "React Router DOM": "#CA4245",
};

export const getTechColor = (tech) => TECH_COLORS[tech] || "#8B949E";

export const getPrimaryColor = (technologies = []) =>
  getTechColor(technologies[0]);
