export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const hardwareProjects: Project[] = [
  {
    id: "hw-1",
    title: "Industrial IoT Gateway",
    description:
      "Custom-designed gateway bridging legacy industrial equipment with modern cloud platforms, enabling real-time monitoring and predictive analytics.",
    image: "/images/hardware/project-1.jpg",
  },
  {
    id: "hw-2",
    title: "Smart Factory Controller",
    description:
      "Integrated control system for automated manufacturing lines, reducing downtime by 40% through intelligent process orchestration.",
    image: "/images/hardware/project-2.jpg",
  },
  {
    id: "hw-3",
    title: "Edge Computing Module",
    description:
      "Compact edge processing unit for latency-sensitive industrial applications, processing data locally before cloud synchronization.",
    image: "/images/hardware/project-3.jpg",
  },
  {
    id: "hw-4",
    title: "Automated QC Vision System",
    description:
      "Machine vision inspection system achieving 99.7% defect detection accuracy on high-speed production lines.",
    image: "/images/hardware/project-4.jpg",
  },
  {
    id: "hw-5",
    title: "Warehouse Robotics Integration",
    description:
      "End-to-end robotics integration for warehouse automation, coordinating autonomous vehicles with existing WMS infrastructure.",
    image: "/images/hardware/project-5.jpg",
  },
  {
    id: "hw-6",
    title: "Environmental Monitoring Station",
    description:
      "Solar-powered monitoring stations with multi-sensor arrays for continuous environmental data collection across remote sites.",
    image: "/images/hardware/project-6.jpg",
  },
];
