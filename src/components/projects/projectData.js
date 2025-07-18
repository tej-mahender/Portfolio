const projects = [
  {
    slug: "resolink",
    title: "Resolink",
    description:
      "Responsive web application to share and explore educational and development resources.",
    iframe: "https://resolink.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://resolink.vercel.app/",
    code: "https://github.com/tej-mahender/Resource-Sharing-Platform",
    timeline: "Jan 2024 – Feb 2024",
    role: "Fullstack Developer",
    completed: "Feb 2024",
    features: ["User submissions", "Resource filtering", "Authentication"],
    challenges: ["Performance tuning", "Scaling resource DB"],
  },
  {
    slug: "schedguru",
    title: "SchedGuru",
    description:
      "Smart web app for managing faculty schedules and automating exam seating in academic institutions.",
    iframe: "https://sched-guru.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://sched-guru.vercel.app/",
    code: "https://github.com/tej-mahender/Resource-Sharing-Platform",
    timeline: "Dec 2023 – Jan 2024",
    role: "Frontend Developer",
    completed: "Jan 2024",
    features: ["Calendar sync", "Dynamic seat arrangement"],
    challenges: ["Real-time updates", "Complex scheduling logic"],
  },
  {
  slug: "agri-advisor",
  title: "Agri Advisor",
  description:
    "Java-based Android app integrating ML, Firebase, and weather APIs to deliver real-time, data-driven crop recommendations for farmers.",
  iframe: "", // Android apps typically don’t have iframes; leave blank or remove if unused
  tech: ["Java", "XML", "Firebase", "ML"],
  live: "", // No live link provided
  code: "https://github.com/tej-mahender/Agri-Advisor",
  timeline: "Aug 2023 – Oct 2023", // Example timeline, adjust if needed
  role: "Android Developer",
  completed: "Oct 2023",
  features: ["Crop recommendation", "Weather API integration", "Firebase data sync"],
  challenges: ["ML model deployment on Android", "Real-time data handling"],
},
{
  slug: "lung-cancer-detector",
  title: "Lung Cancer Detection",
  description:
    "ML model that predicts lung cancer using logistic regression, based on symptoms and lifestyle data, with 96.77% accuracy.",
  iframe: "", // Not applicable for ML model
  tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  live: "", // No live link provided
  code: "https://github.com/tej-mahender/LungCancerDetection",
  timeline: "Sep 2023 – Oct 2023",
  role: "ML Engineer",
  completed: "Oct 2023",
  features: ["Logistic regression model", "High accuracy prediction", "Data visualization"],
  challenges: ["Data preprocessing", "Model tuning"],
},
{
  slug: "crop-recommendation-yield",
  title: "Crop Recommendation & Yield Prediction",
  description:
    "Dual-model system that recommends crops and predicts yields based on soil and climate data.",
  iframe: "", // Not applicable for ML model
  tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  live: "", // No live link provided
  code: "https://github.com/tej-mahender/LungCancerDetection", // Seems incorrect; should be updated if different
  timeline: "Oct 2023 – Nov 2023",
  role: "ML Engineer",
  completed: "Nov 2023",
  features: ["Crop recommendation model", "Yield prediction", "Soil & climate analysis"],
  challenges: ["Feature selection", "Multi-model integration"],
}

  // Add more project objects as needed
];

export default projects;
