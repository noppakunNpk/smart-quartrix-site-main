export interface Partner {
  id: string;
  name: string;
  logo?: string;
}

export const partners: Partner[] = [
  { id: "p-1", name: "Siemens", logo: "/images/partners/siemens.png" },
  { id: "p-2", name: "Rockwell Automation", logo: "/images/partners/rockwell.png" },
  { id: "p-3", name: "AWS", logo: "/images/partners/aws.png" },
  { id: "p-4", name: "Microsoft Azure", logo: "/images/partners/azure.png" },
  { id: "p-5", name: "Schneider Electric", logo: "/images/partners/schneider.png" },
  { id: "p-6", name: "SAP", logo: "/images/partners/sap.png" },
  { id: "p-7", name: "NVIDIA", logo: "/images/partners/nvidia.png" },
  { id: "p-8", name: "Cisco", logo: "/images/partners/cisco.png" },
];
