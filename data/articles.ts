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
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQFQVrj7kEyFaA/article-cover_image-shrink_720_1280/B4DZcOJyPzG8AI-/0/1748289138313?e=2147483647&v=beta&t=Jz-Qf_SGW3zuxNPkdg-Lvp8B1g3Nz0GoVLH9D27llMM",
    linkedinUrl: "https://www.linkedin.com/pulse/reduce-image-footprint-must-know-cks-exam-puru-tuladhar-oaewf/",
    date: "May 27, 2025",
  },
  {
    id: "1",
    title: "Falco: Getting hands-on for CKS exam",
    excerpt:
      "",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQEtB-j349FGvQ/article-cover_image-shrink_600_2000/B4DZafe9fvG0AU-/0/1746432417724?e=1752710400&v=beta&t=2BJNvzZcQF11u-4eAAplyzU3T-LHBj2XGcyLzYNBSjs",
    linkedinUrl: "https://www.linkedin.com/pulse/falco-getting-hands-on-cks-puru-tuladhar-q4yzf",
    date: "May 5, 2025",
  },
  {
    id: "2",
    title: "Securing Kubernetes Secrets Management",
    excerpt:
      "Secrets in Kubernetes need special handling. Discover best practices for managing sensitive information in your Kubernetes environment.",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQFlY2MINomltQ/article-cover_image-shrink_600_2000/B4DZZcVbRvH4AU-/0/1745305846467?e=1752710400&v=beta&t=-kyPDFBRLGUxu7IquLqPqDkIN0GM-ayHRXi8ItZbhGk",
    linkedinUrl: "https://www.linkedin.com/pulse/falco-must-know-cks-exam-puru-tuladhar-f9tgf",
    date: "June 22, 2023",
  },
  {
    id: "3",
    title: "Network Policies: The Kubernetes Firewall",
    excerpt:
      "Network Policies act as a firewall for pod-to-pod communication. Learn how to implement them effectively to enhance your cluster security.",
    thumbnail: "https://media.licdn.com/dms/image/v2/D5612AQFSVNMkliNOXA/article-cover_image-shrink_600_2000/B56ZUnr7nsGsAQ-/0/1740127590637?e=1752710400&v=beta&t=i18RzqDIu-L94ELLx7mboB_Tu-S0fID2wFAcnFdIMI8",
    linkedinUrl: "https://www.linkedin.com/pulse/cilium-network-policy-what-you-need-know-cks-puru-tuladhar-nytqf",
    date: "July 10, 2023",
  },
  {
    id: "4",
    title: "Container Image Security Best Practices",
    excerpt:
      "Secure your supply chain by implementing these container image security best practices for your Kubernetes deployments.",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQHEeq77iEPA9Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1738327851964?e=1752710400&v=beta&t=Z793cvaJeiPgTc6U3itrZuWAC8AFj14-W82g8tUZ9uk",
    linkedinUrl: "https://www.linkedin.com/pulse/sbom-everything-you-need-know-cks-exam-puru-tuladhar-vj2cf",
    date: "August 5, 2023",
  },
  {
    id: "5",
    title: "Kubernetes Security Context Explained",
    excerpt:
      "Security Contexts define privilege and access control settings for Pods and Containers. Learn how to configure them properly.",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQGkIFV4qxO5hw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1736765086852?e=1752710400&v=beta&t=X-cStfivzwQWHRzJxBTiIR4lHis4UmvQzZAxSgWEIBU",
    linkedinUrl: "https://www.linkedin.com/pulse/cilium-everything-you-need-know-cks-puru-tuladhar-ldpdf?trackingId=NDMzz3bzSL%2BtABWE1aYqvg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BtTXFeP4pRdmAgvPWgtIyaw%3D%3D",
    date: "September 18, 2023",
  }
]
