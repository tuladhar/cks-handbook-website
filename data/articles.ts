export interface Article {
  id: string
  title: string
  excerpt: string
  thumbnail: string
  linkedinUrl: string
  date: string
}

export const articles: Article[] = [
  {
    id: "6",
    title: "Reduce Image Footprint: Must-know for CKS exam",
    excerpt:
      "",
    thumbnail: "/images/reduce-1.png",
    linkedinUrl: "https://www.linkedin.com/pulse/reduce-image-footprint-must-know-cks-exam-puru-tuladhar-oaewf/",
    date: "May 27, 2025",
  },
  {
    id: "1",
    title: "Falco: Getting hands-on for CKS exam",
    excerpt:
      "",
    thumbnail: "/images/falco-2.png",
    linkedinUrl: "https://www.linkedin.com/pulse/falco-getting-hands-on-cks-puru-tuladhar-q4yzf",
    date: "May 5, 2025",
  },
  {
    id: "2",
    title: "Securing Kubernetes Secrets Management",
    excerpt:
      "Secrets in Kubernetes need special handling. Discover best practices for managing sensitive information in your Kubernetes environment.",
    thumbnail: "/iamges/falco-1.png",
    linkedinUrl: "https://www.linkedin.com/pulse/falco-must-know-cks-exam-puru-tuladhar-f9tgf",
    date: "June 22, 2023",
  },
  {
    id: "3",
    title: "Network Policies: The Kubernetes Firewall",
    excerpt:
      "Network Policies act as a firewall for pod-to-pod communication. Learn how to implement them effectively to enhance your cluster security.",
    thumbnail: "/images/cilium-2.png",
    linkedinUrl: "https://www.linkedin.com/pulse/cilium-network-policy-what-you-need-know-cks-puru-tuladhar-nytqf",
    date: "July 10, 2023",
  },
  {
    id: "4",
    title: "Container Image Security Best Practices",
    excerpt:
      "Secure your supply chain by implementing these container image security best practices for your Kubernetes deployments.",
    thumbnail: "/images/sbom.png",
    linkedinUrl: "https://www.linkedin.com/pulse/sbom-everything-you-need-know-cks-exam-puru-tuladhar-vj2cf",
    date: "August 5, 2023",
  },
  {
    id: "5",
    title: "Kubernetes Security Context Explained",
    excerpt:
      "Security Contexts define privilege and access control settings for Pods and Containers. Learn how to configure them properly.",
    thumbnail: "/images/cilium-1.png",
    linkedinUrl: "https://www.linkedin.com/pulse/cilium-everything-you-need-know-cks-puru-tuladhar-ldpdf?trackingId=NDMzz3bzSL%2BtABWE1aYqvg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BtTXFeP4pRdmAgvPWgtIyaw%3D%3D",
    date: "September 18, 2023",
  }
]
