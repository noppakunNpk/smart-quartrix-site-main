export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const hardwareServices: Service[] = [
  {
    icon: "Cpu",
    title: "Embedded Systems Design",
    description:
      "Custom embedded solutions from prototype to production, including PCB design, firmware development, and hardware-software integration.",
  },
  {
    icon: "Factory",
    title: "Industrial Automation",
    description:
      "End-to-end automation consulting for manufacturing, including PLC programming, SCADA systems, and robotics integration.",
  },
  {
    icon: "Radio",
    title: "IoT & Connectivity",
    description:
      "Designing and deploying IoT ecosystems with sensor networks, edge gateways, and secure cloud connectivity.",
  },
  {
    icon: "ScanEye",
    title: "Quality Inspection Systems",
    description:
      "Machine vision and automated testing solutions for high-throughput quality control on production lines.",
  },
];

export const softwareServices: Service[] = [
  {
    icon: "Cloud",
    title: "Cloud Architecture",
    description:
      "Designing scalable, resilient cloud infrastructure on AWS, Azure, and GCP with cost optimization and security best practices.",
  },
  {
    icon: "BarChart3",
    title: "Data & Analytics",
    description:
      "Building data pipelines, warehouses, and analytics dashboards that turn raw data into actionable business intelligence.",
  },
  {
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    description:
      "Developing and deploying ML models for document processing, predictive maintenance, demand forecasting, and process automation.",
  },
  {
    icon: "Layers",
    title: "Enterprise Integration",
    description:
      "Connecting ERP, CRM, and legacy systems through modern APIs and middleware for seamless data flow across the organization.",
  },
];
